/** P2I — Registre des lots de production BP Découverte, sans montants supposés.
 * Exécution : node scripts/build-bp-decouverte-lots.cjs
 */
"use strict";
const fs=require("node:fs"),path=require("node:path"),vm=require("node:vm");
const root=path.resolve(__dirname,"..");
const context=vm.createContext({});
for(const name of ["up-data.js","machines-data.js","js/p2i-bp-decouverte-preparation.js"]){
 vm.runInContext(fs.readFileSync(path.join(root,name),"utf8"),context,{filename:name});
}
const ups=vm.runInContext("P2I_UP_DATA",context);
const machines=vm.runInContext("MACHINES_DATA",context);
const adapter=context.P2I_BP_DECOUVERTE_PREPARATION;
const groups=new Map();
for(const [id,up] of Object.entries(ups)){
 const filiere=up.filiereNom||"Filière à documenter";
 if(!groups.has(filiere))groups.set(filiere,[]);
 const detail=up.investment_breakdown||null;
 const diagnostic=adapter.inspect(id,null,ups,machines);
 groups.get(filiere).push({
  up_id:id,up_nom:up.nom,fonctions_machines:machines[id]?.machines?.length||0,
  investissement_minimum_indicatif_usd:Number.isFinite(up.capex_min)?up.capex_min:null,
  ventilation_generique_disponible:!!detail,
  capacite_mensuelle_generique_disponible:typeof up.monthly_capacity==="string"&&!!up.monthly_capacity.trim(),
  configuration_reference_validee:false,
  capex_complet_valide:false,
  bp_financier_complet:false,
  blocages:diagnostic.blocages
 });
}
const lots=[...groups].map(([filiere,unites],index)=>({
 lot:"LOT-"+String(index+1).padStart(2,"0"),filiere,nb_up:unites.length,
 unites
}));
const payload={schema_version:"1.0.0",objet:"Registre de préparation — ne constitue pas des BP validés",
 nb_up:Object.keys(ups).length,nb_lots:lots.length,
 ecart_objectif_96:96-Object.keys(ups).length,
 priorite_pilote:{up_id:"biscuiterie",configuration_id:"crackers",capacite_kg_h:500,prix_ligne_usd:450000,capex_complet_usd:null},
 lots
};
const target=path.join(root,"data","p2i-bp-decouverte-lots.json");
fs.mkdirSync(path.dirname(target),{recursive:true});
fs.writeFileSync(target,JSON.stringify(payload,null,2)+"\n");
console.log("Registre BP Découverte : "+payload.nb_up+" UP, "+payload.nb_lots+" lots, "+payload.ecart_objectif_96+" UP à identifier.");
