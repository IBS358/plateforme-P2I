/* Chromium réel, serveur local et client propriétaire simulé : aucune donnée
 * de compte réelle n'est lue ou modifiée par cette recette. */
'use strict';
const {chromium}=require('playwright'),fs=require('node:fs'),path=require('node:path'),http=require('node:http'),vm=require('node:vm'),assert=require('node:assert/strict');
const root=path.resolve(__dirname,'..'),html=fs.readFileSync(path.join(root,'business-plan-decouverte-v108.html'),'utf8');
const fixture=vm.createContext({});fixture.window=fixture;vm.runInContext(fs.readFileSync(path.join(root,'js/p2i-bp-decouverte-v107-scenarios.js'),'utf8'),fixture);const entry=JSON.parse(JSON.stringify(fixture.P2I_BP_V107_SCENARIOS.obtenir('biscuits_mous')));
async function installMock(context,mode='full'){
 await context.addInitScript(({entry,mode})=>{
  const data={unit_id:mode==='metadata'?'nettoyage':'biscuiterie',configuration_id:mode==='metadata'?'decontamination_biologique':'biscuits_mous',annotations:{preserver:'annotation de test'}};
  if(mode==='metadata-biscuit')data.configuration_id=null;
  if(mode==='full'||mode==='logout')data.bp_decouverte_v108={configuration_id:'biscuits_mous',entrees:entry,resultat_net:999999999};
  const st=window.P2I_TEST_STATE={writes:0,reads:0,owner:mode==='logout'?null:'owner',row:{id:17,user_id:'owner',simulation_data:data}};
  window.P2I_SUPABASE_CLIENT={auth:{getUser:async()=>({data:{user:st.owner?{id:st.owner}:null},error:null})},from(table){if(table!=='user_simulations')throw Error('Table inattendue');const filters=[];let change=null;return {select(){return this;},eq(k,v){filters.push([k,v]);return this;},update(x){change=x;return this;},async maybeSingle(){if(!filters.some(([k,v])=>k==='user_id'&&v===st.owner))throw Error('Filtre propriétaire absent');if(!change){st.reads++;return {data:structuredClone(st.row),error:null};}if(filters.find(([k])=>k==='simulation_data')?.[1]!==JSON.stringify(st.row.simulation_data))return {data:null,error:null};st.row.simulation_data=structuredClone(change.simulation_data);st.writes++;return {data:{id:17},error:null};}};}};
 },{entry,mode});
}
(async()=>{
 const server=http.createServer((req,res)=>{res.setHeader('Content-Type','text/html; charset=utf-8');res.end(html);});await new Promise(resolve=>server.listen(0,'127.0.0.1',resolve));
 let browser;
 try{
  browser=await chromium.launch({headless:true,...(process.env.P2I_CHROMIUM_PATH?{executablePath:process.env.P2I_CHROMIUM_PATH}:{}),args:['--no-sandbox','--disable-gpu','--no-zygote']});
  const ctx=await browser.newContext({viewport:{width:1920,height:1080}}),p=await ctx.newPage(),errors=[];p.on('pageerror',e=>errors.push(e.message));
  const local='file://'+path.join(root,'business-plan-decouverte-v108.html'),site='http://127.0.0.1:'+server.address().port+'/business-plan-decouverte.html';
  await p.goto(local+'?unit_id=biscuiterie&configuration_id=crackers');await p.waitForSelector('.section');
  assert.equal(await p.locator('.section').count(),17);assert.equal(await p.locator('.equipment').count(),5);assert.equal(await p.locator('#up-choice option').count(),96);
  assert.equal(await p.evaluate(()=>window.P2I_BP_V108_RESULTAT.entrees.production[0]),550000);assert.equal(await p.evaluate(()=>window.P2I_BP_V108_REFERENCES.partiel('crackers').economique.quantite_produite),760000);
  assert.ok((await p.locator('#p2i-r9').textContent()).includes('Résultat après IS'));
  assert.ok((await p.locator('#p2i-r8').textContent()).includes('0,14'),'Coût emballage explicite');
  assert.ok((await p.locator('.equipment').nth(1).textContent()).includes('Laminage'));
  const referencePayload={schema:'p2i.bp-decouverte.v108',up_id:'biscuiterie',configuration_id:'crackers',simulation:null,calcul_industriel_partiel:{economique:{chiffre_affaires_usd:1}}};await p.locator('#import-json').setInputFiles({name:'reference.json',mimeType:'application/json',buffer:Buffer.from(JSON.stringify(referencePayload))});await p.waitForFunction(()=>document.querySelector('#action-message').textContent.includes('Référence du dossier'));assert.ok(await p.evaluate(()=>window.P2I_BP_V108_RESULTAT.annuel[0].chiffre_affaires>1000000));
  await p.locator('[data-variant=biscuits_mous]').click();assert.ok(await p.evaluate(()=>window.P2I_BP_V108_RESULTAT));
  const original=await p.evaluate(()=>window.P2I_BP_V108_RESULTAT.annuel[0].resultat_net);await p.locator('#currency-choice').selectOption('XOF');
  assert.equal(await p.evaluate(()=>window.P2I_BP_V108_RESULTAT.annuel[0].resultat_net),original);assert.ok((await p.locator('#p2i-r2').textContent()).includes('FCFA'));
  assert.equal(await p.locator('#p2i-r10 tbody tr').count(),36);assert.equal(await p.locator('#p2i-r13 tbody tr').count(),12);
  await p.locator('[data-variant=biscuits_durs]').click();assert.equal(await p.evaluate(()=>window.P2I_BP_V108_RESULTAT.entrees.production[0]),500000);assert.equal(await p.locator('#p2i-r10 tbody tr').count(),36);
  assert.ok((await p.locator('.equipment').nth(1).textContent()).includes('Abaisse'));
  // Import volontaire d'un jeu synthétique complet : jamais chargé par défaut.
  const synthetic={...entry,configuration_id:'biscuits_durs',nom:'Biscuits durs',source:'Jeu synthétique de recette navigateur uniquement',statut_exploitation:'Paramètres synthétiques de test uniquement',machines:null,investissement:240000};
  await p.locator('#import-json').setInputFiles({name:'entrees-test.json',mimeType:'application/json',buffer:Buffer.from(JSON.stringify({schema:'p2i.bp-entrees.v108',up_id:'biscuiterie',configuration_id:'biscuits_durs',entrees:synthetic}))});
  await p.waitForFunction(()=>window.P2I_BP_V108_RESULTAT?.entrees.configuration_id==='biscuits_durs');
  assert.equal(await p.evaluate(()=>window.P2I_BP_V108_RESULTAT.entrees.qualification),'hypotheses_utilisateur_non_verifiees');
  const dl=p.waitForEvent('download');await p.locator('.export-json').first().click();const download=await dl,payload=JSON.parse(fs.readFileSync(await download.path(),'utf8'));assert.equal(payload.schema,'p2i.bp-decouverte.v108');assert.equal(payload.taux_de_change.date_taux,'2026-10-23');
  await p.locator('#up-choice').selectOption('conserverie_legumes');assert.equal(await p.evaluate(()=>window.P2I_BP_V108_RESULTAT),null);assert.match(await p.locator('.intro').innerText(),/Sauce tomate en poche stérilisable/);assert.equal(new URL(p.url()).searchParams.get('unit'),'Conserverie de légumes');
  await p.locator('#up-choice').selectOption('peintures');assert.ok((await p.locator('.intro h1').textContent()).includes('Peintures industrielles'));assert.equal(await p.evaluate(()=>P2I_BP_DONNEES.unites.peintures.economie.budget_minimum_historique.valeur),140000);assert.equal(await p.evaluate(()=>P2I_BP_V108_RESULTAT.entrees.up_id),'peintures');assert.ok(await p.evaluate(()=>Number.isFinite(P2I_BP_V108_RESULTAT.annuel[0].resultat_net)));
  await p.locator('#up-choice').selectOption('peintures_btp');assert.ok((await p.locator('#p2i-r1').textContent()).includes('Peintures bâtiment'));assert.ok((await p.locator('#p2i-r2').textContent()).includes('350000-700000'));assert.ok((await p.locator('#p2i-r14').textContent()).includes('74,06')||(await p.locator('#p2i-r14').textContent()).includes('74.06'));
  const choices=await p.locator('#up-choice option').evaluateAll(items=>items.map(x=>x.value));for(const choice of choices){await p.locator('#up-choice').selectOption(choice);assert.equal(await p.locator('.section').count(),17,'UP '+choice);}
  await p.locator('#up-choice').selectOption('nettoyage');assert.equal(await p.locator('[data-cleaning]').count(),3);await p.locator('[data-cleaning=decontamination_chimique]').click();assert.ok((await p.locator('#p2i-r3').textContent()).includes('Confinement'));assert.equal(await p.evaluate(()=>window.P2I_BP_V108_RESULTAT),null);
  await p.setViewportSize({width:390,height:844});await p.goto(local+'?unit_id=biscuiterie&configuration_id=biscuits_mous');assert.equal(await p.evaluate(()=>document.documentElement.scrollWidth>innerWidth),false);
  await p.emulateMedia({media:'print'});assert.equal(await p.locator('.sidebar').isVisible(),false);assert.equal(await p.locator('.context-actions').isVisible(),false);assert.equal(await p.locator('#p2i-r17 .equipment').count(),5);await p.emulateMedia({media:'screen'});
  await p.goto(local+'?unit_id=2&unit=Biscuiterie%20industrielle&configuration_id=biscuits_mous');await p.waitForSelector('.section');assert.equal(new URL(p.url()).searchParams.get('unit_id'),'biscuiterie');assert.ok(await p.evaluate(()=>window.P2I_BP_V108_RESULTAT));
  await p.goto(local+'?unit_id=constructor');await p.waitForSelector('.restore-error');assert.equal(await p.locator('.section').count(),0);
  await p.goto(local+'?simulation_id=17');await p.waitForSelector('.restore-error');assert.equal(await p.locator('.section').count(),0);
  // Session connectée simulée, avec paramètres propres au dossier et ancien
  // résultat mensonger à ignorer : le rendu doit recalculer les entrées.
  const ownCtx=await browser.newContext({viewport:{width:1920,height:1080}});await installMock(ownCtx);const own=await ownCtx.newPage();own.on('pageerror',e=>errors.push(e.message));
  await own.goto(site+'?simulation_id=17&unit_id=peintures_btp&configuration_id=crackers');await own.waitForSelector('.context-banner');
  assert.equal(new URL(own.url()).searchParams.get('unit_id'),'biscuiterie');assert.equal(await own.evaluate(()=>window.P2I_BP_V108_RESULTAT.entrees.configuration_id),'biscuits_mous');
  assert.notEqual(await own.evaluate(()=>window.P2I_BP_V108_RESULTAT.annuel[0].resultat_net),999999999);assert.equal(await own.evaluate(()=>window.P2I_TEST_STATE.writes),0);
  await own.locator('.scenario-editor summary').click();await own.locator('input[name=prix]').fill('2.53');await own.locator('#scenario-form button[type=submit]').click();assert.equal(await own.evaluate(()=>window.P2I_TEST_STATE.writes),0);
  await own.locator('#save-scenario').click();await own.waitForFunction(()=>window.P2I_TEST_STATE.writes===1);
  assert.equal(await own.evaluate(()=>window.P2I_TEST_STATE.row.simulation_data.annotations.preserver),'annotation de test');assert.equal(await own.evaluate(()=>window.P2I_TEST_STATE.row.simulation_data.bp_decouverte_v108.entrees.prix[0]),2.53);
  await own.evaluate(()=>window.P2I_TEST_STATE.row.simulation_data.annotations.preserver='changement concurrent');await own.locator('#save-scenario').click();await own.waitForFunction(()=>document.querySelector('#action-message').textContent.includes('modifiée ailleurs'));assert.equal(await own.evaluate(()=>window.P2I_TEST_STATE.writes),1);
  await own.locator('[data-variant=crackers]').click();assert.equal(new URL(own.url()).searchParams.get('simulation_id'),null);assert.equal(await own.locator('#save-scenario').count(),0);
  const metadataCtx=await browser.newContext();await installMock(metadataCtx,'metadata');const metadata=await metadataCtx.newPage();await metadata.goto(site+'?simulation_id=17');await metadata.waitForSelector('.context-banner');assert.equal(new URL(metadata.url()).searchParams.get('unit_id'),'nettoyage');assert.equal(await metadata.evaluate(()=>window.P2I_BP_V108_RESULTAT),null);
  const legacyCtx=await browser.newContext();await installMock(legacyCtx,'metadata-biscuit');const legacy=await legacyCtx.newPage();await legacy.goto(site+'?simulation_id=17');await legacy.waitForSelector('.context-banner');await legacy.locator('[data-variant=biscuits_durs]').click();assert.equal(new URL(legacy.url()).searchParams.get('simulation_id'),'17');assert.equal(await legacy.evaluate(()=>window.P2I_TEST_STATE.writes),0);await legacy.locator('#save-scenario').click();await legacy.waitForFunction(()=>window.P2I_TEST_STATE.writes===1);assert.equal(await legacy.evaluate(()=>window.P2I_TEST_STATE.row.simulation_data.bp_decouverte_v108.configuration_id),'biscuits_durs');await legacy.locator('[data-variant=biscuits_mous]').click();assert.equal(new URL(legacy.url()).searchParams.get('simulation_id'),null);assert.equal(await legacy.locator('#save-scenario').count(),0);assert.equal(await legacy.evaluate(()=>window.P2I_TEST_STATE.writes),1);
  const logoutCtx=await browser.newContext();await installMock(logoutCtx,'logout');const logout=await logoutCtx.newPage();await logout.goto(site+'?simulation_id=17');await logout.waitForSelector('.restore-error');assert.equal(await logout.locator('.section').count(),0);
  const sdkCtx=await browser.newContext();const sdkPage=await sdkCtx.newPage();await sdkPage.goto(site+'?simulation_id=17');await sdkPage.waitForSelector('.restore-error');assert.ok((await sdkPage.locator('.restore-error').textContent()).includes('Connexion P2I requise'));
  assert.deepEqual(errors,[]);console.log('Chromium V108 : références séparées, FCFA, import/export, restauration propriétaire, recalcul, sauvegarde explicite, conflit, métadonnées seules, déconnexion et SDK sans session et les 96 UP contrôlés.');
 }finally{await browser?.close();await new Promise(resolve=>server.close(resolve));}
})().catch(e=>{console.error(e);process.exitCode=1;});
