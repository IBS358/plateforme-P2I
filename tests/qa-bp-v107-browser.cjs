/* Recette Chromium réelle : ouvrir, recalculer, exporter, conserver le contexte. */
'use strict';
const {chromium}=require('playwright'),fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
(async()=>{
 const root=path.resolve(__dirname,'..'),browser=await chromium.launch({headless:true,...(process.env.P2I_CHROMIUM_PATH?{executablePath:process.env.P2I_CHROMIUM_PATH}:{}),args:['--no-sandbox','--disable-gpu','--no-zygote']});
 try{
  const page=await browser.newPage({viewport:{width:1920,height:1080}}),errors=[];page.on('pageerror',e=>errors.push(e.message));
  const base='file://'+path.join(root,'business-plan-decouverte-v107.html');
  await page.goto(base+'?unit_id=biscuiterie&configuration_id=biscuits_mous&simulation_id=test-context');
  assert.equal(await page.locator('.section').count(),17);assert.equal(await page.locator('.sidebar a').count(),17);
  assert.equal(await page.locator('.equipment').count(),5);assert.equal(await page.locator('.variant').count(),3);
  assert.equal(await page.locator('#up-choice option').count(),96);
  assert.ok((await page.locator('#p2i-r16 h2').textContent()).includes('Préparer mon dossier de passage'));
  assert.ok((await page.locator('#p2i-r17 h2').textContent()).includes('Dossier technique Biscuiterie'));
  const style=await page.locator('.photo-inner').first().evaluate(e=>getComputedStyle(e).backgroundImage);
  assert.ok(style.startsWith('url("data:image/jpeg;base64,'),'Visuels incorporés chargés');
  const pro=new URL(await page.locator('#go-pro').getAttribute('href'),'https://p2i.test/');
  assert.equal(pro.searchParams.get('configuration_id'),'biscuits_mous');assert.equal(pro.searchParams.get('simulation_id'),'test-context');
  assert.equal(pro.searchParams.get('equipment_plan_id'),'biscuiterie__biscuits_mous__500__kg_h');
  for(const variant of ['crackers','biscuits_durs','biscuits_mous']){
   await page.locator('[data-variant='+variant+']').click();
   assert.equal(await page.evaluate(()=>window.P2I_BP_V107_RESULTAT.entrees.configuration_id),variant);
   assert.equal(await page.locator('#p2i-r10 tbody tr').count(),36);assert.equal(await page.locator('#p2i-r13 tbody tr').count(),12);
  }
  const initial=await page.evaluate(()=>window.P2I_BP_V107_RESULTAT.annuel[0].chiffre_affaires);
  await page.locator('.scenario-editor summary').click();await page.locator('input[name=prix]').fill('2.53');await page.locator('#scenario-form button[type=submit]').click();
  const next=await page.evaluate(()=>window.P2I_BP_V107_RESULTAT.annuel[0].chiffre_affaires);assert.ok(next>initial);
  const downloaded=page.waitForEvent('download');await page.locator('.export-json').first().click();const download=await downloaded;const data=JSON.parse(fs.readFileSync(await download.path(),'utf8'));
  assert.equal(data.simulation.annuel[0].chiffre_affaires,next);assert.equal(data.statut,'simulation_indicative_non_documentee');
  for(const id of ['conserverie_legumes','peintures_btp','nettoyage']){
   await page.locator('#up-choice').selectOption(id);assert.equal(await page.locator('.section').count(),17);assert.equal(await page.evaluate(()=>window.P2I_BP_V107_RESULTAT),null);assert.ok((await page.locator('.intro').textContent()).includes(id==='peintures_btp'?'Peintures':id==='nettoyage'?'nettoyage':'Conserverie'));
  }
  await page.goto(base+'?unit_id=biscuiterie&configuration_id=biscuits_mous');
  await page.setViewportSize({width:390,height:844});assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth),false);
  await page.locator('#p2i-r16').scrollIntoViewIfNeeded();assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth),false);
  await page.setViewportSize({width:1920,height:1080});await page.emulateMedia({media:'print'});
  assert.equal(await page.locator('.sidebar').isVisible(),false);assert.equal(await page.locator('.scenario-editor').isVisible(),false);
  assert.equal(await page.locator('#p2i-r17 .equipment').count(),5);
  assert.deepEqual(errors,[]);console.log('Chromium V107 : design, images, 17 rubriques, variantes, recalcul, export JSON, contexte, mobile et impression réussis.');
 }finally{await browser.close();}
})().catch(e=>{console.error(e);process.exitCode=1;});
