/** Génération déterministe des dossiers sources pour les 12 lots P2I.
 * Les données génériques sont reproduites, jamais promues en hypothèses validées.
 */
"use strict";
const fs=require("node:fs"),path=require("node:path"),vm=require("node:vm");
const root=path.resolve(__dirname,".."),ctx=vm.createContext({});
for(const name of ["up-data.js","machines-data.js"])vm.runInContext(fs.readFileSync(path.join(root,name),"utf8"),ctx,{filename:name});
const ups=vm.runInContext("P2I_UP_DATA",ctx),catalogue=vm.runInContext("MACHINES_DATA",ctx);
const registre=JSON.parse(fs.readFileSync(path.join(root,"data/p2i-bp-decouverte-lots.json"),"utf8"));
for(const lot of registre.lots){
const ids=lot.unites.map(u=>u.up_id);
const raw=ids.map(id=>{
 const u=ups[id],m=catalogue[id];
 const b=u.investment_breakdown||null;
 return {
  up_id:id,up_nom:u.nom,description:u.description,
  filiere:u.filiereNom,processus:u.processus||[],
  matieres_premieres:u.raw_materials||[],
  marches_cibles:u.target_markets||[],
  capacite_generique_texte:u.monthly_capacity||null,
  machines_catalogue:(m?.machines||[]).map(x=>({
   nom:x.name||x.nom||null,role:x.role||null,capacite:x.capacity||null,utilites:x.utilities||null
  })),
  estimation_generique_non_validee:{
   investissement_minimum_usd:Number.isFinite(u.capex_min)?u.capex_min:null,
   ventilation:u.investment_breakdown||null,
   chiffre_affaires_annuel_indicatif_usd:Number.isFinite(u.estimated_revenue)?u.estimated_revenue:null,
   marge_brute_indicative_pourcent:Number.isFinite(u.gross_margin)?u.gross_margin:null,
   rentabilite_nette_indicative_pourcent:Number.isFinite(u.net_profitability)?u.net_profitability:null
  },
  reference_industrielle_validee:id==="biscuiterie"?{
   configuration_id:"crackers",capacite_kg_h:500,prix_ligne_usd:450000,
   nature:"Équipements uniquement, CAPEX complet inconnu",
   statut:"Hypothèse de référence P2I retenue pour le pilote; justification fournisseur à documenter"
  }:null,
  controle:{
   montant_total_ventilation_usd:b&&Number.isFinite(b.total)?b.total:null,
   ecart_capex_min_ventilation_usd:b&&Number.isFinite(b.total)&&Number.isFinite(u.capex_min)?u.capex_min-b.total:null,
   capex_complet_valide_usd:null,
   projections_3_ans_validees:false,
   bfr_36_mois_valide:false,tresorerie_12_mois_validee:false,
   sources_externes_verifiees:[],
   statut:"donnees_sources_a_qualifier"
  }
 };
});
const data={version:"1.0.0",lot:lot.lot,filiere:lot.filiere,
 avertissement:"Les montants génériques historiques ne sont ni des devis ni des budgets consolidés; ne pas les utiliser comme CAPEX validés ou résultats nets.",
 nombre_up:raw.length,unites:raw};
const target=path.join(root,"data","p2i-bp-decouverte-"+lot.lot.toLowerCase()+"-sources.json");
fs.mkdirSync(path.dirname(target),{recursive:true});
fs.writeFileSync(target,JSON.stringify(data,null,2)+"\n");
console.log(lot.lot+" : "+raw.length+" fiches sources produites, chiffres génériques non validés.");
}
