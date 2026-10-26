/** P2I — Contrôle des référentiels UP et catalogue machines. */
"use strict";
const fs=require("node:fs"),path=require("node:path"),vm=require("node:vm"),assert=require("node:assert/strict");
const root=path.resolve(__dirname,"..");
const context=vm.createContext({});
for(const file of ["up-data.js","machines-data.js"]){
 vm.runInContext(fs.readFileSync(path.join(root,file),"utf8"),context,{filename:file});
}
// Détecter les clés UP dupliquées avant l'évaluation JS : un objet JS écrase silencieusement la première fiche.
const upSource=fs.readFileSync(path.join(root,"up-data.js"),"utf8");
const declarations=[...upSource.matchAll(/^ {2}([a-z_][a-z_0-9]*):\s*\{/gm)]
 .filter(m=>/\bid:\s*["']/.test(upSource.slice(m.index,m.index+220)))
 .map(m=>m[1]);
const duplicates=declarations.filter((id,index)=>declarations.indexOf(id)!==index);
assert.deepEqual(duplicates,[],"Définitions UP dupliquées, écrasement silencieux possible");
const units=vm.runInContext("P2I_UP_DATA",context);
const machines=vm.runInContext("MACHINES_DATA",context);
const ids=Object.keys(units);
assert.ok(ids.length>=95,"Le référentiel doit conserver les unités de production existantes");
const missing=ids.filter(id=>!Object.prototype.hasOwnProperty.call(machines,id));
assert.deepEqual(missing,[],"Toutes les UP doivent avoir une entrée catalogue machines");
for(const id of ids){
 assert.equal(units[id].id,id,"Identifiant interne UP incohérent : "+id);
 assert.ok(typeof units[id].nom==="string"&&units[id].nom.trim(),"Nom UP absent : "+id);
 assert.ok(Array.isArray(machines[id].machines),"Liste machines absente : "+id);
}
// Contrôle arithmétique des ventilations : le BFR inclus n'est pas du CAPEX industriel.
const detailed=ids.filter(id=>units[id].investment_breakdown);
for(const id of detailed){
 const b=units[id].investment_breakdown;
 assert.ok(Number.isFinite(b.total)&&b.total>=0,"Total investissement invalide : "+id);
 const values=Object.entries(b).filter(([key])=>key!=="total");
 assert.ok(values.every(([,v])=>Number.isFinite(v)&&v>=0),"Poste d'investissement invalide : "+id);
 const sum=values.reduce((total,[,value])=>total+value,0);
 assert.ok(Math.abs(sum-b.total)<0.01,"Ventilation incohérente : "+id);
}
// Les écarts entre capex_min et le total de ventilation doivent être documentés,
// et non corrigés arbitrairement. La référence intégrée Crackers reste 450 000 USD.
assert.equal(units.biscuiterie.investment_breakdown.machines,65000);
assert.equal(units.biscuiterie.capex_min,120000);
const aliases={epices:"transformation_epices",peintures_btp:"peintures",profiles:"profilés",
 plastique:"plastique_recyclage",papier:"papier_recyclage",metaux:"metaux_recyclage",
 verre:"verre_recyclage",pneus:"pneus_recyclage",huiles:"huiles_recyclage",
 deee:"deee_recyclage",energie:"energie_services",eau:"eau_traitement"};
for(const [id,legacy] of Object.entries(aliases)){
 assert.ok(Array.isArray(machines[id]?.machines)&&Array.isArray(machines[legacy]?.machines),"Entrée catalogue inaccessible : "+id);
 if(id!=="peintures_btp")assert.equal(machines[id],machines[legacy],"L'alias doit pointer vers la même configuration : "+id);
}
console.log("Référentiels P2I : "+ids.length+" UP, catalogue accessible pour chacune, 12 alias validés.");
