/** Tests de complétude des 95 dossiers documentaires à 17 rubriques. */
"use strict";
const fs=require("node:fs"),path=require("node:path"),vm=require("node:vm"),assert=require("node:assert/strict");
const root=path.resolve(__dirname,"..");
const data=JSON.parse(fs.readFileSync(path.join(root,"data/p2i-bp-decouverte-95-dossiers-17-rubriques.json"),"utf8"));
const ctx=vm.createContext({});
vm.runInContext(fs.readFileSync(path.join(root,"js/p2i-bp-decouverte-dossier-builder.js"),"utf8"),ctx);
const builder=ctx.P2I_BP_DOSSIER_BUILDER;
const source=[];
for(let n=1;n<=12;n++){
 const id=String(n).padStart(2,"0");
 const pack=JSON.parse(fs.readFileSync(path.join(root,"data/p2i-bp-decouverte-lot-"+id+"-sources.json"),"utf8"));
 source.push(...pack.unites);
}
assert.equal(data.nombre_up,source.length);
assert.equal(data.rubriques_par_up,17);
assert.equal(new Set(data.dossiers.map(d=>d.up_id)).size,data.nombre_up);
for(let i=0;i<source.length;i++){
 const u=source[i],d=data.dossiers[i],fresh=builder.build(u);
 assert.deepEqual(d,JSON.parse(JSON.stringify(fresh)),"Dossier périmé : "+u.up_id);
 assert.equal(d.statut,"brouillon_documentaire_non_bancable");
 assert.equal(d.sections.length,17);
 assert.deepEqual(d.sections.map(s=>s.numero),Array.from({length:17},(_,j)=>j+1));
 for(const n of [2,9,10,11,12,13])assert.equal(d.sections[n-1].contenu.etat,"a_documenter");
 assert.equal(d.sections[6].contenu.capex_complet_usd,null);
 assert.equal(d.sections[6].contenu.apport_40_usd,null);
 assert.equal(d.sections[6].contenu.dette_60_usd,null);
 assert.equal(d.sections[9].contenu.message.includes("36 mois"),true);
 assert.equal(d.sections[12].contenu.message.includes("12 mois"),true);
 if(d.up_id==="biscuiterie"){
  assert.equal(d.sections[6].contenu.investissement_reference_equipements_usd,450000);
  assert.equal(d.sections[7].contenu.capacite_reference.valeur,500);
 }else assert.equal(d.sections[6].contenu.investissement_reference_equipements_usd,null);
}
console.log("95 dossiers, 1 615 rubriques, aucun CAPEX complet fictif.");
