/** Contrôles des 8 fiches sources du LOT-01. */
"use strict";
const fs=require("node:fs"),path=require("node:path"),vm=require("node:vm"),assert=require("node:assert/strict");
const root=path.resolve(__dirname,".."),ctx=vm.createContext({});
for(const name of ["up-data.js","machines-data.js"])vm.runInContext(fs.readFileSync(path.join(root,name),"utf8"),ctx,{filename:name});
const ups=vm.runInContext("P2I_UP_DATA",ctx),catalogue=vm.runInContext("MACHINES_DATA",ctx);
const data=JSON.parse(fs.readFileSync(path.join(root,"data/p2i-bp-decouverte-lot-01-sources.json"),"utf8"));
const ids=Object.keys(ups).filter(id=>ups[id].filiereNom===data.filiere);
assert.equal(data.nombre_up,ids.length);
assert.deepEqual(data.unites.map(x=>x.up_id),ids);
for(const d of data.unites){
 const u=ups[d.up_id],m=catalogue[d.up_id];
 assert.equal(d.machines_catalogue.length,m.machines.length);
 assert.equal(d.capacite_generique_texte,u.monthly_capacity||null);
 assert.equal(d.estimation_generique_non_validee.investissement_minimum_usd,u.capex_min);
 assert.equal(d.controle.capex_complet_valide_usd,null);
 assert.equal(d.controle.projections_3_ans_validees,false);
 assert.equal(d.controle.bfr_36_mois_valide,false);
 assert.equal(d.controle.tresorerie_12_mois_validee,false);
 assert.deepEqual(d.controle.sources_externes_verifiees,[]);
 const b=u.investment_breakdown;
 if(b)assert.equal(d.controle.ecart_capex_min_ventilation_usd,u.capex_min-b.total);
 if(d.up_id==="biscuiterie"){
  assert.equal(d.reference_industrielle_validee.prix_ligne_usd,450000);
  assert.equal(d.reference_industrielle_validee.capacite_kg_h,500);
  assert.notEqual(d.estimation_generique_non_validee.ventilation.machines,450000);
 }else assert.equal(d.reference_industrielle_validee,null);
}
console.log("LOT-01 : "+ids.length+" dossiers sources cohérents, aucun CAPEX complet inventé.");
