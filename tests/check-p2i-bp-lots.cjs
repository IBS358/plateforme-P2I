/** Vérifie que le registre des lots est généré fidèlement depuis les référentiels. */
"use strict";
const fs=require("node:fs"),path=require("node:path"),assert=require("node:assert/strict"),vm=require("node:vm");
const root=path.resolve(__dirname,"..");
const ctx=vm.createContext({});
for(const name of ["up-data.js","machines-data.js"])
 vm.runInContext(fs.readFileSync(path.join(root,name),"utf8"),ctx,{filename:name});
const ups=vm.runInContext("P2I_UP_DATA",ctx);
const machines=vm.runInContext("MACHINES_DATA",ctx);
const data=JSON.parse(fs.readFileSync(path.join(root,"data/p2i-bp-decouverte-lots.json"),"utf8"));
const ids=data.lots.flatMap(l=>l.unites.map(u=>u.up_id));
assert.equal(data.nb_up,Object.keys(ups).length);
assert.equal(data.nb_lots,data.lots.length);
assert.equal(data.ecart_objectif_96,96-ids.length);
assert.equal(new Set(ids).size,ids.length,"UP dupliquées entre lots");
assert.deepEqual([...ids].sort(),Object.keys(ups).sort(),"Registre incomplet ou périmé");
for(const lot of data.lots){
 assert.equal(lot.nb_up,lot.unites.length);
 for(const u of lot.unites){
  assert.equal(ups[u.up_id].filiereNom,lot.filiere);
  assert.equal(u.fonctions_machines,machines[u.up_id].machines.length);
  assert.equal(u.ventilation_generique_disponible,!!ups[u.up_id].investment_breakdown);
  assert.equal(u.configuration_reference_validee,false);
  assert.equal(u.capex_complet_valide,false);
  assert.equal(u.bp_financier_complet,false);
 }
}
assert.equal(data.priorite_pilote.prix_ligne_usd,450000);
assert.equal(data.priorite_pilote.capacite_kg_h,500);
assert.equal(data.priorite_pilote.capex_complet_usd,null);
console.log("Lots BP Découverte : "+data.nb_lots+" lots, "+data.nb_up+" UP, registre cohérent.");
