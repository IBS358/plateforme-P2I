/** Contrôle transversal des 12 lots de dossiers sources BP Découverte. */
"use strict";
const fs=require("node:fs"),path=require("node:path"),vm=require("node:vm"),assert=require("node:assert/strict");
const root=path.resolve(__dirname,".."),ctx=vm.createContext({});
for(const name of ["up-data.js","machines-data.js"])
 vm.runInContext(fs.readFileSync(path.join(root,name),"utf8"),ctx,{filename:name});
const ups=vm.runInContext("P2I_UP_DATA",ctx),catalogue=vm.runInContext("MACHINES_DATA",ctx);
const registre=JSON.parse(fs.readFileSync(path.join(root,"data/p2i-bp-decouverte-lots.json"),"utf8"));
const seen=new Set();
for(const lot of registre.lots){
 const filename="p2i-bp-decouverte-"+lot.lot.toLowerCase()+"-sources.json";
 const pack=JSON.parse(fs.readFileSync(path.join(root,"data",filename),"utf8"));
 assert.equal(pack.lot,lot.lot);
 assert.equal(pack.filiere,lot.filiere);
 assert.equal(pack.nombre_up,lot.nb_up);
 assert.deepEqual(pack.unites.map(x=>x.up_id),lot.unites.map(x=>x.up_id));
 for(const u of pack.unites){
  assert.ok(!seen.has(u.up_id),"UP dupliquée : "+u.up_id);seen.add(u.up_id);
  const source=ups[u.up_id],machines=catalogue[u.up_id].machines;
  assert.equal(source.filiereNom,lot.filiere);
  assert.equal(u.machines_catalogue.length,machines.length);
  assert.equal(u.capacite_generique_texte,source.monthly_capacity||null);
  assert.equal(u.estimation_generique_non_validee.investissement_minimum_usd,Number.isFinite(source.capex_min)?source.capex_min:null);
  assert.equal(u.controle.capex_complet_valide_usd,null);
  assert.equal(u.controle.projections_3_ans_validees,false);
  assert.equal(u.controle.bfr_36_mois_valide,false);
  assert.equal(u.controle.tresorerie_12_mois_validee,false);
  assert.deepEqual(u.controle.sources_externes_verifiees,[]);
  if(u.up_id==="biscuiterie"){
   assert.equal(u.reference_industrielle_validee.prix_ligne_usd,450000);
   assert.equal(u.reference_industrielle_validee.capacite_kg_h,500);
  }else assert.equal(u.reference_industrielle_validee,null);
 }
}
assert.deepEqual([...seen].sort(),Object.keys(ups).sort());
console.log("12 lots contrôlés, "+seen.size+" dossiers sources cohérents.");
