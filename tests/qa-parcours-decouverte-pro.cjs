'use strict';
const {chromium}=require('playwright'),fs=require('fs'),path=require('path'),http=require('http'),assert=require('assert/strict');
const root=path.resolve(__dirname,'..');
(async()=>{
const server=http.createServer((req,res)=>{let file=path.resolve(root,'.'+decodeURIComponent(new URL(req.url,'http://localhost').pathname));if(!file.startsWith(root+path.sep)||!fs.existsSync(file)){res.writeHead(404);return res.end();}res.setHeader('Content-Type',file.endsWith('.js')?'text/javascript':file.endsWith('.css')?'text/css':'text/html');res.end(fs.readFileSync(file));});await new Promise(r=>server.listen(0,'127.0.0.1',r));let browser;
try{browser=await chromium.launch({headless:true,executablePath:process.env.P2I_CHROMIUM_PATH,args:['--no-sandbox','--disable-gpu','--no-zygote']});const ctx=await browser.newContext();await ctx.route('https://**',r=>r.abort());const p=await ctx.newPage(),errors=[];p.on('pageerror',e=>errors.push(e.message));const base='http://127.0.0.1:'+server.address().port;
await p.goto(base+'/business-plan-decouverte.html?unit_id=biscuiterie&configuration_id=biscuits_mous');await p.waitForSelector('#go-pro');const initial=await p.evaluate(()=>JSON.parse(JSON.stringify(P2I_BP_V108_RESULTAT)));await p.locator('#go-pro').click();await p.waitForURL('**/business-plan-pro.html?**');await p.waitForFunction(()=>window.P2I_BP_PRO_PASSAGE);assert.equal(await p.locator('#metaUnit').textContent(),'Biscuiterie industrielle');const pro=await p.evaluate(()=>P2I_BP_PRO_PASSAGE);assert.deepEqual(pro.resultat.annuel,initial.annuel);for(const k of ["investissement","prix","production","ventes","cout_production_kg","personnel","charges_fixes","part_apport","part_dette"])assert.deepEqual(pro.entrees[k],initial.entrees[k]);assert.equal(pro.resultat.bfr.length,36);assert.equal(pro.resultat.tresorerie.length,12);assert.equal(await p.locator('#f_capacity').inputValue(),'500');assert.equal(await p.locator('#f_capacity_unit').inputValue(),'kg/h');
await p.locator('#p2i-passage-pro a').click();await p.waitForSelector('#p6.is-active');await p.locator('#p2i-pro-scenario input[name=price]').fill('2.75');await p.locator('#p2i-pro-scenario button').click();assert.equal(await p.evaluate(()=>P2I_BP_PRO_PASSAGE.entrees.prix[0]),2.75);assert.notEqual(await p.evaluate(()=>P2I_BP_PRO_PASSAGE.resultat.annuel[0].resultat_net),initial.annuel[0].resultat_net);await p.reload();await p.waitForFunction(()=>window.P2I_BP_PRO_PASSAGE);assert.equal(await p.evaluate(()=>P2I_BP_PRO_PASSAGE.entrees.prix[0]),2.75);
for(const config of ['crackers','biscuits_durs']){await p.goto(base+'/business-plan-decouverte.html?unit_id=biscuiterie&configuration_id='+config);await p.locator('#go-pro').click();await p.waitForFunction(()=>window.P2I_BP_PRO_PASSAGE);assert.equal(await p.evaluate(()=>P2I_BP_PRO_PASSAGE.configuration_id),config);if(config==='crackers')assert.equal(await p.evaluate(()=>P2I_BP_PRO_PASSAGE.resultat.entrees.production[0]),550000);else assert.equal(await p.evaluate(()=>P2I_BP_PRO_PASSAGE.resultat.entrees.production[0]),500000);}
for(const unit of ['jus_boissons','aliments_betail','mini_laiterie','conserverie_legumes','boulangerie_industrielle','huiles_alimentaires','epices','javel','adhesifs','produits_industriels']){await p.goto(base+'/business-plan-decouverte.html?unit_id='+unit);await p.waitForSelector('#go-pro');const before=await p.evaluate(()=>P2I_BP_V108_RESULTAT.annuel[0].resultat_net);assert.ok(Number.isFinite(before));if(unit==='jus_boissons'){assert.equal(await p.locator('.hero .jus-photo').count(),1);assert.equal(await p.locator('.hero .jus-bouteille').count(),1);assert.equal(await p.locator('#p2i-r17 .jus-poste').count(),10);for(let i=0;i<10;i++){const card=p.locator('#p2i-r17 .equipment').nth(i);const inner=card.locator('.jus-poste');assert.ok(await inner.evaluate((e,n)=>e.classList.contains('jus-poste-'+n),i));assert.equal(await card.locator('.photo').getAttribute('aria-label'),(await card.locator('h3').innerText())+' — illustration générée par IA');assert.ok(await inner.evaluate(e=>getComputedStyle(e).backgroundImage.startsWith('url("data:image/jpeg;base64,')));}assert.equal(await p.locator('#p2i-r7').getByText('Source catalogue équipement').count(),0);assert.equal(await p.locator('#p2i-r5 .info').count(),6);assert.equal(await p.locator('#p2i-r17 .equipment').count(),10);assert.match(await p.locator('#p2i-r17').innerText(),/ÉQUIPEMENT 10 \/ 10/);assert.match(await p.locator('#p2i-r17').innerText(),/Épluchage et parage/);assert.ok(await p.locator('.jus-photo').first().evaluate(e=>getComputedStyle(e).backgroundImage.startsWith('url("data:image/jpeg;base64,')));}assert.equal(await p.locator('#p2i-r10 tbody tr').count(),36);assert.equal(await p.locator('#p2i-r13 tbody tr').count(),12);assert.ok(await p.locator('#p2i-r17 .equipment').count()>=4);await p.locator('#go-pro').click();await p.waitForFunction(()=>window.P2I_BP_PRO_PASSAGE);assert.equal(await p.evaluate(()=>P2I_BP_PRO_PASSAGE.resultat.annuel[0].resultat_net),before);assert.equal(await p.evaluate(()=>P2I_BP_PRO_PASSAGE.up_id),unit);}
await p.goto(base+'/business-plan-decouverte.html?unit_id=aliments_betail');await p.waitForSelector('#go-pro');
assert.match(await p.locator('#p2i-r7').innerText(),/Budget manutention dédié déjà inclus/);
assert.equal(await p.evaluate(()=>P2I_BP_V108_RESULTAT.investissements.postes.some(x=>x.montant_usd===null)),false);
await p.goto(base+'/business-plan-decouverte.html?unit_id=plastique');await p.waitForSelector('#go-pro');
assert.match(await p.locator('#p2i-r7').innerText(),/Matériel de manutention/);
// Textile : affichage en pièces et transmission sans fausse conversion de masse.
for(const unit of ['confection','uniformes','linge']){
 await p.goto(base+'/business-plan-decouverte.html?unit_id='+unit);await p.waitForSelector('#go-pro');
 assert.match(await p.locator('.hero .eyebrow').innerText(),/TEXTILE/);
 let before=await p.evaluate(()=>P2I_BP_V108_RESULTAT);
 assert.equal(before.entrees.unite,'pièces/h');assert.match(await p.locator('#p2i-r8').innerText(),/pièces/);assert.doesNotMatch(await p.locator('#p2i-r8').innerText(),/kg/);
 assert.match(await p.locator('#scenario-form').textContent(),/USD\/pièce/);
 assert.equal(await p.locator('#p2i-r17 .equipment').count(),8);
 const positions=await p.locator('#p2i-r17 .equipment .photo-inner').evaluateAll(es=>es.map(e=>getComputedStyle(e).backgroundPosition));assert.equal(new Set(positions).size,8);
 assert.ok(await p.locator('#p2i-r17 .equipment .photo-inner').first().evaluate(e=>getComputedStyle(e).backgroundImage.startsWith('url("data:image/jpeg;base64,')));
 if(unit==='linge'){assert.equal(await p.locator('#p2i-r17 .agro-linge').count(),8);assert.doesNotMatch(await p.locator('#p2i-r17 .process').innerText(),/Boutonnières|Surfilage/);}
 if(unit==='confection'){
  await p.locator('#p2i-r14 .scenario-editor summary').click();await p.locator('#scenario-form input[name=production]').fill('12001');await p.locator('#scenario-form button[type=submit]').click();
  before=await p.evaluate(()=>P2I_BP_V108_RESULTAT);assert.ok(before.mois.every(x=>Number.isInteger(x.production)&&Number.isInteger(x.ventes)));
  assert.equal(before.investissements.statut,'ventile');assert.equal(before.entrees.amortissements_specifiques[0].duree_ans,5);
 }

 await p.locator('#go-pro').click();await p.waitForFunction(()=>window.P2I_BP_PRO_PASSAGE);
 assert.equal(await p.evaluate(()=>P2I_BP_PRO_PASSAGE.entrees.unite),'pièces/h');assert.equal(await p.locator('#f_capacity_unit').inputValue(),'pièces/h');
 assert.deepEqual(await p.evaluate(()=>P2I_BP_PRO_PASSAGE.resultat.annuel),before.annuel);
 assert.match(await p.locator('#p2i-pro-moteur-commun').textContent(),/USD\/pièce/);
}
// Le scénario adhésifs reste propre à cette activité, avec huit postes distincts et une fin de ligne manuelle.
await p.goto(base+'/business-plan-decouverte.html?unit_id=adhesifs');await p.waitForSelector('#go-pro');
assert.equal(await p.locator('#p2i-r17 .equipment .agro-adhesifs').count(),8);
const adhesivePositions=await p.locator('#p2i-r17 .equipment .agro-adhesifs').evaluateAll(es=>es.map(e=>getComputedStyle(e).backgroundPosition));assert.equal(new Set(adhesivePositions).size,8);
assert.match(await p.locator('.hero .eyebrow').textContent(),/CHIMIE/);
assert.match(await p.locator('#p2i-r4').textContent(),/menuisiers/);
const adhesiveInvestment=await p.evaluate(()=>P2I_BP_V108_RESULTAT.investissements);
assert.equal(adhesiveInvestment.total_chiffre_usd,99850);assert.equal(adhesiveInvestment.manutention.budget_dedie_usd,1420.52);
assert.match(await p.locator('#p2i-r7').innerText(),/Pompe, flexibles et balance/);
assert.match(await p.locator('#p2i-r7').innerText(),/Budget manutention dédié déjà inclus/);
assert.match(await p.locator('#p2i-r7').innerText(),/Fret international/);
await p.locator('#go-pro').click();await p.waitForFunction(()=>window.P2I_BP_PRO_PASSAGE);
assert.deepEqual(await p.evaluate(()=>P2I_BP_PRO_PASSAGE.resultat.investissements),adhesiveInvestment);
const personal=await p.evaluate(()=>P2I_BP_PRO_PASSAGE.resultat.financement);
assert.ok(Math.abs(personal.apport_total-(personal.apport+personal.apport_reserve))<1e-8);
assert.ok(Math.abs(personal.apport_total+personal.dette-personal.besoin_total)<1e-8);
assert.equal(Number(await p.locator('#equity').inputValue()),personal.apport_total);
assert.match(await p.locator('#p2i-pro-moteur-commun').innerText(),/Apport personnel total/);

assert.match(await p.locator('#p2i-pro-moteur-commun').innerText(),/Ventilation des investissements/);
await p.goto(base+'/business-plan-decouverte.html?unit_id=adhesifs');await p.waitForSelector('#go-pro');

assert.match(await p.locator('#p2i-r5').textContent(),/Clients professionnels/);
assert.match(await p.locator('#p2i-r17 .equipment').nth(5).textContent(),/Pose manuelle/);
assert.match(await p.locator('#p2i-r17 .equipment').nth(6).textContent(),/manuellement/);
assert.equal(await p.locator('a[href*="made-in-china"]').count(),0);
// Dernière UP Chimie : formulation d’adjuvant et conditionnement IBC, sans images dupliquées.
await p.goto(base+'/business-plan-decouverte.html?unit_id=produits_industriels');await p.waitForSelector('#go-pro');
assert.equal(await p.locator('#p2i-r17 .equipment .agro-adjuvants').count(),8);
const admixturePositions=await p.locator('#p2i-r17 .equipment .agro-adjuvants').evaluateAll(es=>es.map(e=>getComputedStyle(e).backgroundPosition));assert.equal(new Set(admixturePositions).size,8);
assert.match(await p.locator('#p2i-r4').textContent(),/centrales à béton/);
assert.match(await p.locator('#p2i-r5').textContent(),/Contrats B2B/);
assert.match(await p.locator('#p2i-r8').textContent(),/IBC/);
assert.equal(await p.locator('a[href*="greefield"]').count(),0);
// Le repositionnement conserve l’identité technique, les illustrations et les calculs repris au Pro.
await p.goto(base+'/business-plan-decouverte.html?unit_id=javel');
await p.waitForSelector('#go-pro');
assert.match(await p.locator('#up-choice option:checked').textContent(),/Hygiène & désinfection professionnelles/);
assert.equal(await p.locator('#p2i-r17 .equipment .agro-hygiene-pro').count(),8);
const positions=await p.locator('#p2i-r17 .equipment .agro-hygiene-pro').evaluateAll(es=>es.map(e=>getComputedStyle(e).backgroundPosition));
assert.equal(new Set(positions).size,8);
assert.equal(await p.locator('#p2i-r17 a[href*="henwi"]').count(),0);
const historical=await p.evaluate(()=>{const v=structuredClone(P2I_BP_V108_RESULTAT.entrees);Object.assign(v,{nom:'Eau de Javel ménagère',description:'Ancien dossier de dilution et conditionnement de Javel',machines:57000,investissement:122800,capacite:1000,production:[700000,850000,1000000],ventes:[665000,807500,950000],prix:[.6,.612,.62424],matieres_kg:.16,charges_fixes:30000});v.cout_production_kg=v.production.map(q=>.39+65000/q);return v;});
await p.locator('#import-json').setInputFiles({name:'javel-historique.json',mimeType:'application/json',buffer:Buffer.from(JSON.stringify({schema:'p2i.bp-entrees.v108',up_id:'javel',configuration_id:null,entrees:historical}))});
await p.waitForFunction(()=>document.querySelector('#p2i-r1')?.textContent.includes('Dossier historique conservé'));
assert.equal(await p.evaluate(()=>P2I_BP_V108_RESULTAT.entrees.investissement),122800);
assert.equal(await p.locator('.agro-hygiene-pro').count(),0);
await p.locator('#go-pro').click();await p.waitForFunction(()=>window.P2I_BP_PRO_PASSAGE);
assert.equal(await p.evaluate(()=>P2I_BP_PRO_PASSAGE.entrees.nom),'Eau de Javel ménagère');
assert.equal(await p.evaluate(()=>P2I_BP_PRO_PASSAGE.entrees.investissement),122800);
// Un scénario historique en poches ne doit pas recevoir le coût ni l’image de la nouvelle bouteille.
await p.goto(base+'/business-plan-decouverte.html?unit_id=jus_boissons');await p.waitForSelector('#go-pro');const historic=await p.evaluate(()=>{const v=structuredClone(P2I_BP_V108_RESULTAT.entrees);v.machines=83990*1.1193;v.nom='Jus pressés en poches';v.cout_production_kg=v.cout_production_kg.map(x=>x-.22);return v;});
await p.locator('#import-json').setInputFiles({name:'historique.json',mimeType:'application/json',buffer:Buffer.from(JSON.stringify({schema:'p2i.bp-entrees.v108',up_id:'jus_boissons',configuration_id:null,entrees:historic}))});await p.waitForFunction(()=>document.querySelector('#p2i-r8')?.textContent.includes('ne lui est pas automatiquement attribué'));assert.equal(await p.locator('.hero .jus-bouteille').count(),0);
await p.goto(base+'/business-plan-decouverte.html?unit_id=nettoyage&configuration_id=decontamination_chimique');await p.locator('#go-pro').click();await p.waitForFunction(()=>window.P2I_BP_PRO_PASSAGE);assert.equal(await p.evaluate(()=>P2I_BP_PRO_PASSAGE.up_id),'nettoyage');assert.equal(await p.evaluate(()=>P2I_BP_PRO_PASSAGE.dossier.up_id),'nettoyage');assert.equal(await p.evaluate(()=>P2I_BP_PRO_PASSAGE.reference.besoins.length),5);assert.equal(await p.evaluate(()=>P2I_BP_PRO_PASSAGE.resultat),null);
// Départ réel depuis la fiche UP, création et restauration du même dossier.
const authCtx=await browser.newContext();await authCtx.route('https://**',r=>r.abort());
await authCtx.addInitScript(()=>{
 const state=window.P2I_FLOW_TEST={owner:sessionStorage.getItem('flow-owner')||'owner',row:null,writes:0};
 const client={auth:{getSession:async()=>({data:{session:{user:{id:state.owner}}}}),getUser:async()=>({data:{user:state.owner?{id:state.owner}:null}})},from(name){let payload=null;const filters=[];return {insert(p){payload=p;return this;},select(){return this;},eq(k,v){filters.push([k,v]);return this;},async single(){state.writes++;state.row={id:27,...payload};sessionStorage.setItem('flow-row',JSON.stringify(state.row));return {data:{id:27}};},async maybeSingle(){const row=JSON.parse(sessionStorage.getItem('flow-row')||'null');return {data:row&&filters.every(([k,v])=>String(row[k])===String(v))?row:null};}};}};
 window.P2I_SUPABASE_CLIENT=client;window.supabase={createClient:()=>client};
});
const flow=await authCtx.newPage();flow.on('pageerror',e=>errors.push(e.message));await flow.goto(base+'/fiche-production.html?unit_id=biscuiterie&configuration_id=biscuits_mous');await flow.locator('#btn-download-bp').click();await flow.waitForURL('**/business-plan-decouverte.html?**');await flow.waitForSelector('#go-pro');assert.equal(new URL(flow.url()).searchParams.get('simulation_id'),'27');await flow.locator('#go-pro').click();await flow.waitForFunction(()=>window.P2I_BP_PRO_PASSAGE);assert.equal(await flow.evaluate(()=>P2I_BP_PRO_PASSAGE.simulation_id),'27');assert.equal(await flow.evaluate(()=>P2I_BP_PRO_PASSAGE.resultat.bfr.length),36);
// Le bouton Enregistrer du Pro conserve aussi le jeu repris dans le dossier.
flow.once('dialog',d=>d.accept());await flow.locator('#btnSaveTop').click();assert.equal(await flow.evaluate(()=>JSON.parse(localStorage.getItem('p2i_current_bp_pro')).decouverte.configuration_id),'biscuits_mous');
const dashboardBuilder=fs.readFileSync(path.join(root,'dashboard.html'),'utf8').match(/function buildProOpenUrl\(p\) \{[\s\S]*?return url.href;\n    \}/)[0];
const reopened=await flow.evaluate(code=>{const build=Function('return ('+code+')')();return build(JSON.parse(localStorage.getItem('p2i_current_bp_pro')));},dashboardBuilder);
await flow.goto(reopened);await flow.waitForFunction(()=>window.P2I_BP_PRO_PASSAGE);assert.equal(await flow.evaluate(()=>P2I_BP_PRO_PASSAGE.configuration_id),'biscuits_mous');
// Un autre compte dans le même onglet ne peut pas reprendre le dossier privé.
await flow.evaluate(()=>sessionStorage.setItem('flow-owner','other'));
await flow.reload();await flow.waitForSelector('#p2i-passage-pro [role=alert]');assert.equal(await flow.evaluate(()=>window.P2I_BP_PRO_PASSAGE||null),null);
assert.deepEqual(errors,[]);console.log('Parcours réel Découverte -> Pro : trois variantes, activité de service, reprise intégrale, moteurs identiques, recalcul et rechargement contrôlés.');
}finally{await browser?.close();await new Promise(r=>server.close(r));}})().catch(e=>{console.error(e);process.exitCode=1;});
