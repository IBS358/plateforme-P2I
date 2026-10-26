'use strict';
const fs=require('node:fs'),vm=require('node:vm'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.resolve(__dirname,'..'),c=vm.createContext({setTimeout,clearTimeout});c.window=c;
for(const n of ['p2i-economic-result-engine','p2i-financial-engine','p2i-bp-decouverte-bfr-engine','p2i-bp-decouverte-tresorerie-12-mois','p2i-currency-config','p2i-commercial-engine','p2i-hypotheses-commerciales','p2i-recettes-biscuiterie','p2i-bp-decouverte-v107-scenarios','p2i-bp-decouverte-simulation-commune','p2i-bp-decouverte-v108-references','p2i-bp-decouverte-v108-contexte'])vm.runInContext(fs.readFileSync(path.join(root,'js',n+'.js'),'utf8'),c,{filename:n});
const ref=c.P2I_BP_V108_REFERENCES,api=c.P2I_BP_V108_CONTEXTE,calc=c.P2I_BP_SIMULATION_COMMUNE;
const input=JSON.parse(JSON.stringify(ref.obtenir('biscuits_mous')));
assert.ok(!('production' in ref.obtenir('crackers')));assert.ok(!('prix' in ref.obtenir('biscuits_durs')),'Aucun transfert de prix Biscuits mous');
const partial=ref.partiel('crackers');assert.equal(partial.economique.quantite_produite,760000);assert.equal(partial.economique.quantite_vendue,532000);
assert.ok(Math.abs(partial.economique.cout_production_total_usd-700672)<.001);assert.equal(partial.resultat_net,null);assert.equal(partial.tresorerie_mensuelle,null);
assert.equal(c.P2I_CURRENCY.obtenirConfiguration().date_taux,'2026-10-23');
assert.ok(Math.abs(c.P2I_CURRENCY.convertir(655.957,'XOF','USD')-1.1193)<1e-9);
const registry={biscuiterie:{nom:'Biscuiterie industrielle'},nettoyage:{nom:'Services de nettoyage industriel'}};
const clone=x=>JSON.parse(JSON.stringify(x));
const own={id:17,user_id:'owner',simulation_data:{unit_id:'biscuiterie',configuration_id:'biscuits_mous',annotations:{preserver:'oui'},bp_decouverte_v108:{configuration_id:'biscuits_mous',entrees:input,resultat_net:999999999}}};
function mock(seed=own){
 const state={row:clone(seed),owner:'owner',calls:[],writes:0,race:false,foreign:false};
 const client={auth:{getUser:async()=>({data:{user:state.owner?{id:state.owner}:null},error:null})},from(table){assert.equal(table,'user_simulations');let mutation=null;const filters=[];return {select(){return this;},update(data){mutation=data;return this;},eq(k,v){filters.push([k,v]);return this;},maybeSingle(){
  // PromiseLike volontaire : les builders Supabase ne garantissent pas .finally().
  return {then(resolve,reject){return Promise.resolve().then(()=>{state.calls.push(filters);assert.ok(filters.some(([k,v])=>k==='user_id'&&v===state.owner));
   if(mutation){assert.ok(filters.some(([k,v])=>k==='simulation_data'&&typeof v==='string'));if(state.race||filters.find(([k])=>k==='simulation_data')[1]!==JSON.stringify(state.row.simulation_data))return {data:null,error:null};state.row.simulation_data=clone(mutation.simulation_data);state.writes++;return {data:{id:state.row.id},error:null};}
   if(state.foreign)return {data:{...clone(state.row),user_id:'other'},error:null};
   return state.row.user_id===state.owner?{data:clone(state.row),error:null}:{data:null,error:null};
  }).then(resolve,reject);}};
 }}}};return {client,state};
}
(async()=>{
 let {client,state}=mock(),session=api.create({client,registry});
 const r=await session.restore('17');assert.equal(r.statut,'parametres_restaures');assert.equal(state.writes,0);
 const result=calc.calculer(r.entrees);assert.notEqual(result.annuel[0].resultat_net,999999999,'Recalcul, jamais confiance dans un résultat enregistré');
 await session.save(result.entrees);assert.equal(state.writes,1);assert.equal(state.row.simulation_data.annotations.preserver,'oui');assert.equal(state.row.user_id,'owner');
 assert.equal(state.row.simulation_data.bp_decouverte_v108.statut,'hypotheses_utilisateur_non_verifiees');
 state.row.simulation_data=Object.fromEntries(Object.entries(state.row.simulation_data).reverse());state.row.simulation_data.bp_decouverte_v108.entrees=Object.fromEntries(Object.entries(state.row.simulation_data.bp_decouverte_v108.entrees).reverse());await session.save(result.entrees);assert.equal(state.writes,2,'Un réordonnancement JSONB ne constitue pas une modification concurrente');
 session.detach();assert.equal(session.snapshot(),null);await assert.rejects(()=>session.save(input),/Aucune simulation/);
 ({client,state}=mock());session=api.create({client,registry});state.owner=null;await assert.rejects(()=>session.restore('17'),/Connexion/);assert.equal(state.calls.length,0);
 ({client,state}=mock());session=api.create({client,registry});state.foreign=true;await assert.rejects(()=>session.restore('17'),/inaccessible/);
 ({client,state}=mock());session=api.create({client,registry});await session.restore('17');state.row.simulation_data.annotations.preserver='modifié ailleurs';await assert.rejects(()=>session.save(input),/modifiée ailleurs/);assert.equal(state.writes,0);
 ({client,state}=mock());session=api.create({client,registry});await session.restore('17');state.race=true;await assert.rejects(()=>session.save(input),/concurrente/);assert.equal(state.writes,0);
 ({client,state}=mock());session=api.create({client,registry});await session.restore('17');state.owner='other';await assert.rejects(()=>session.save(input),/session a changé/);assert.equal(state.writes,0);
 const metadata=clone(own);delete metadata.simulation_data.bp_decouverte_v108;({client,state}=mock(metadata));session=api.create({client,registry});assert.equal((await session.restore('17')).entrees,null);
 ({client,state}=mock(metadata));session=api.create({client,registry});await session.restore('17');assert.equal(session.selectMetadataConfiguration('crackers'),true);await session.saveSelection();assert.equal(state.row.simulation_data.configuration_id,'crackers');assert.equal(state.row.simulation_data.bp_decouverte_v108,undefined);assert.equal(state.row.simulation_data.annotations.preserver,'oui');
 assert.equal(session.selectMetadataConfiguration('biscuits_mous'),true);await session.save(input);assert.equal(session.selectMetadataConfiguration('crackers'),false,'Ne pas déplacer une version financière vers une autre variante');
 ({client,state}=mock(metadata));session=api.create({client,registry});await session.restore('17');let release;const gate=new Promise(r=>{release=r;});client.auth.getUser=async()=>{await gate;return {data:{user:{id:'owner'}},error:null};};const pending=session.save(input);session.detach();release();await pending;assert.equal(session.snapshot(),null);assert.equal(state.row.simulation_data.configuration_id,'biscuits_mous');assert.equal(state.writes,1,'Une requête en vol reste rattachée au dossier ciblé');
 const broken=clone(own);broken.simulation_data.bp_decouverte_v108.entrees.prix[0]=null;({client}=mock(broken));session=api.create({client,registry});const invalid=await session.restore('17');assert.equal(invalid.entrees,null);assert.ok(invalid.avertissement.includes('prix'));
 const mismatch=clone(own);mismatch.simulation_data.configuration_id='crackers';({client}=mock(mismatch));session=api.create({client,registry});await assert.rejects(()=>session.restore('17'),/variante/);
 ({client}=mock());session=api.create({client,registry});await assert.rejects(()=>session.restore('invalid'),/Identifiant/);
 const numeric={unit_id:2,unit_name:'Biscuiterie industrielle'};assert.equal(api.resolveUnit(numeric,registry),'biscuiterie');
 assert.throws(()=>api.resolveUnit({unit:'introuvable'},registry),/identifier/);
 const decoded=api.decodeImport({schema:'p2i.bp-decouverte.v107',up_id:'biscuiterie',configuration_id:'biscuits_mous',simulation:{entrees:input,resultat_net:999}});
 assert.equal(decoded.qualification,'hypotheses_utilisateur_non_verifiees');assert.equal(decoded.resultat_net,undefined);
 assert.throws(()=>api.decodeImport({schema:'evil',entrees:input}),/Format/);
 assert.throws(()=>api.normalizeInput(input,'biscuiterie','crackers'),/correspondent/);
 assert.throws(()=>api.normalizeInput({...input,devise:'XOF'},'biscuiterie','biscuits_mous'),/USD/);
 assert.throws(()=>api.normalizeInput({...input,stock_initial:100},'biscuiterie','biscuits_mous'),/non pris en charge/);
 assert.throws(()=>api.normalizeInput({...input,machines:999999},'biscuiterie','biscuits_mous'),/budget machines/);
 console.log('V108 : bases indépendantes, coût Crackers, change daté, propriétaire, restauration, recalcul, sauvegarde explicite, conflits et import contrôlés.');
})().catch(e=>{console.error(e);process.exitCode=1;});
