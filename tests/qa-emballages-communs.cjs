'use strict';
const {chromium}=require('playwright'),fs=require('node:fs'),path=require('node:path'),http=require('node:http'),assert=require('node:assert/strict');
const root=path.resolve(__dirname,'..');
(async()=>{
 const server=http.createServer((req,res)=>{const f=path.resolve(root,'.'+new URL(req.url,'http://localhost').pathname);if(!f.startsWith(root+path.sep)||!fs.existsSync(f)){res.writeHead(404);return res.end();}res.setHeader('Content-Type',f.endsWith('.js')?'text/javascript':f.endsWith('.css')?'text/css':'text/html');res.end(fs.readFileSync(f));});
 await new Promise(r=>server.listen(0,'127.0.0.1',r));let browser;
 try{
  browser=await chromium.launch({headless:true,executablePath:process.env.P2I_CHROMIUM_PATH,args:['--no-sandbox','--disable-gpu','--no-zygote']});
  const context=await browser.newContext({viewport:{width:1440,height:1000}}),p=await context.newPage(),errors=[];await context.route('https://**',r=>r.abort());p.on('pageerror',e=>errors.push(e.message));
  const base='http://127.0.0.1:'+server.address().port;
  await p.goto(base+'/business-plan-decouverte.html?unit_id=conserverie_legumes');await p.waitForSelector('#go-pro');
  assert.match(await p.locator('#p2i-r1').innerText(),/priorité d’étude à la poche/);
  assert.match(await p.locator('#p2i-r8').innerText(),/0,165/);assert.match(await p.locator('#p2i-r8').innerText(),/0,2382/);assert.match(await p.locator('#p2i-r8').innerText(),/Variante verre/);
  assert.equal(await p.locator('.section').count(),17);assert.equal(await p.locator('#p2i-r10 tbody tr').count(),36);
  await p.locator('#p2i-r8 h3').first().scrollIntoViewIfNeeded();await p.screenshot({path:process.env.P2I_QA_SCREENSHOT||'/tmp/p2i-emballages-conserverie.png'});
  await p.goto(base+'/business-plan-decouverte.html?unit_id=jus_boissons');await p.waitForSelector('#go-pro');
  const initial=await p.evaluate(()=>JSON.parse(JSON.stringify(P2I_BP_V108_RESULTAT)));
  assert.ok(Math.abs(initial.emballages.stock_lancement-5000)<.01);assert.match(await p.locator('#p2i-r10').innerText(),/Emballages vides/);
  await p.locator('#go-pro').click();await p.waitForFunction(()=>window.P2I_BP_PRO_PASSAGE);
  const pro=await p.evaluate(()=>JSON.parse(JSON.stringify(P2I_BP_PRO_PASSAGE)));
  assert.deepEqual(pro.entrees,{...initial.entrees,qualification:'hypotheses_utilisateur_non_verifiees'});assert.deepEqual(pro.resultat.bfr,initial.bfr);assert.deepEqual(pro.resultat.bilans,initial.bilans);assert.equal(pro.dossier.controle_emballages.baisse_prix_automatique,false);
  const legacy={...initial.entrees};delete legacy.cout_emballages_stockables_unite;delete legacy.stock_emballages_jours;
  await p.goto(base+'/business-plan-decouverte.html?unit_id=jus_boissons');await p.waitForSelector('#go-pro');
  await p.locator('#import-json').setInputFiles({name:'ancien-dossier.json',mimeType:'application/json',buffer:Buffer.from(JSON.stringify({schema:'p2i.bp-entrees.v108',up_id:'jus_boissons',configuration_id:null,entrees:legacy}))});
  await p.waitForFunction(()=>window.P2I_BP_V108_RESULTAT?.entrees.qualification==='hypotheses_utilisateur_non_verifiees');
  assert.equal(await p.evaluate(()=>P2I_BP_V108_RESULTAT.emballages.statut),'non_isole_dossier_historique');assert.equal(await p.evaluate(()=>P2I_BP_V108_RESULTAT.entrees.stock_emballages_jours),undefined);
  await p.locator('#go-pro').click();await p.waitForFunction(()=>window.P2I_BP_PRO_PASSAGE);assert.equal(await p.evaluate(()=>P2I_BP_PRO_PASSAGE.resultat.emballages.statut),'non_isole_dossier_historique');
  assert.deepEqual(errors,[]);
  console.log('Chromium emballages : comparaison visible, stocks et bilans repris exactement dans le Pro, ancien dossier sans ajout rétroactif, 17 rubriques et aucune erreur JS.');
 }finally{if(browser)await browser.close();await new Promise(r=>server.close(r));}
})().catch(e=>{console.error(e);process.exit(1)});
