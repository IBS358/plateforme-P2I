/** Recette DOM fonctionnelle. Ne remplace pas une recette visuelle navigateur/PDF. */
"use strict";
const {JSDOM,ResourceLoader,VirtualConsole}=require('jsdom');
const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.resolve(__dirname,'..'),origin='https://p2i.test/';
class LocalResources extends ResourceLoader{
 fetch(url){
  const u=new URL(url);if(u.origin!==new URL(origin).origin)throw Error('Ressource externe inattendue : '+url);
  const file=path.resolve(root,'.'+u.pathname);assert.ok(file.startsWith(root+path.sep));
  return Promise.resolve(fs.readFileSync(file));
 }
}
(async()=>{
 const entry=process.env.P2I_QA_ENTRY||'bp-decouverte-consultation.html';
 const html=fs.readFileSync(path.join(root,entry),'utf8');
 const scenarios=[['biscuiterie','crackers'],['biscuiterie','biscuits_mous'],['biscuiterie','biscuits_durs'],['nettoyage','nettoyage_intensif'],['nettoyage','decontamination_chimique'],['nettoyage','decontamination_biologique'],['conserverie_legumes',null],['peintures_btp',null],['biscuiterie','inconnue']];
 for(const [id,variant] of scenarios){
  const errors=[],vc=new VirtualConsole();vc.on('jsdomError',e=>errors.push(e.message));
  const q=new URLSearchParams({unit_id:id});if(variant)q.set('configuration_id',variant);
  const dom=new JSDOM(html,{url:origin+entry+'?'+q,resources:new LocalResources(),runScripts:'dangerously',virtualConsole:vc,
   beforeParse(w){w.localStorage.setItem('currentProductionKey','peintures_btp');w.localStorage.setItem('currentProduction',JSON.stringify({id:'peintures_btp',nom:'STALE'}));}});
  try{
   await new Promise((resolve,reject)=>{const t=setTimeout(()=>reject(Error('DOM timeout')),10000);dom.window.addEventListener('load',()=>{clearTimeout(t);resolve();});});
   const w=dom.window,d=w.document;
   assert.deepEqual(errors,[],id+'/'+variant);
   assert.equal(d.querySelectorAll('.bp-section[id^="p2i-r"]').length,17);
   assert.equal(d.querySelectorAll('.bp-sidebar a').length,17);
   assert.equal(d.querySelectorAll('#p2i-up-consultation option').length,96);
   assert.equal(d.querySelectorAll('#p2i-consultation').length,1);
   assert.equal(d.querySelector('#p2i-up-consultation').value,id);
   assert.ok(d.querySelector('#p2i-consultation').textContent.includes('0 BP validés'));
   assert.equal(w.localStorage.getItem('currentProductionKey'),'peintures_btp');
   assert.ok(!d.querySelector('.bp-intro').textContent.includes('STALE'));
   assert.equal(d.querySelector('#p2i-r10 tbody').rows.length,36);
   assert.equal(d.querySelector('#p2i-r13 tbody').rows.length,12);
   const pro=new URL(d.querySelector('#p2i-bp17-go-pro').href);
   assert.equal(pro.searchParams.get('unit_id'),id);
   assert.equal(pro.searchParams.get('configuration_id'),variant==='inconnue'?null:variant);
   if(id==='nettoyage'&&variant!=='nettoyage_intensif'){
    assert.ok(d.querySelector('#p2i-r3').textContent.includes('Exigences d’équipement et de sécurité'));
    assert.ok(!d.querySelector('#p2i-r8').textContent.includes('m²'));
   }
   let printed=0;w.print=()=>printed++;
   for(const img of d.querySelectorAll('img'))img.dispatchEvent(new w.Event('load'));
   d.querySelector('#p2i-bp17-print').click();
   for(const img of d.querySelectorAll('img'))img.dispatchEvent(new w.Event('load'));
   await new Promise(r=>setTimeout(r,30));assert.equal(printed,1);
  }finally{dom.window.close();}
 }
 console.log('DOM : 9 parcours, 17 rubriques, 96 choix UP, variantes, isolation du stockage, horizons et action impression vérifiés.');
})().catch(e=>{console.error(e);process.exitCode=1;});
