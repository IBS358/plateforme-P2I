/** Vérifie l'audit de préparation P2I sur l'ensemble des UP. */
"use strict";
const fs=require("node:fs"),path=require("node:path"),vm=require("node:vm"),assert=require("node:assert/strict");
const root=path.resolve(__dirname,"..");
const ctx=vm.createContext({});
for(const file of ["up-data.js","machines-data.js","js/p2i-bp-decouverte-preparation.js"])
 vm.runInContext(fs.readFileSync(path.join(root,file),"utf8"),ctx,{filename:file});
const ups=vm.runInContext("P2I_UP_DATA",ctx);
const machines=vm.runInContext("MACHINES_DATA",ctx);
const adapter=ctx.P2I_BP_DECOUVERTE_PREPARATION;
const report=adapter.audit(ups,machines);
assert.equal(report.length,Object.keys(ups).length);
assert.ok(report.every(r=>r.statut==="a_completer"&&r.capex_total_usd===null));
assert.ok(report.every(r=>r.financement_apport_usd===null&&r.financement_dette_usd===null));
assert.ok(report.every(r=>r.blocages.length>=2));
const crackers=adapter.inspect("biscuiterie","crackers",ups,machines);
assert.equal(crackers.reference_equipement_usd,450000);
assert.equal(crackers.capacite_reference.valeur,500);
assert.equal(crackers.capex_total_usd,null);
const generic=adapter.inspect("biscuiterie",null,ups,machines);
assert.equal(generic.reference_equipement_usd,null);
const unknown=adapter.inspect("__absente__",null,ups,machines);
assert.equal(unknown.statut,"up_introuvable");
console.log("Préparation BP Découverte : "+report.length+" UP contrôlées, référence Crackers isolée.");
