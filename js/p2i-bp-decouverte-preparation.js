/* P2I — État de préparation des BP Découverte pour toutes les UP.
 * Métadonnées uniquement : jamais de prix, CAPEX ou prévision inventés.
 */
(function(root){
"use strict";
const hasText=v=>typeof v==="string"&&v.trim().length>0;
function inspect(upId,configurationId,upRegistry,machineRegistry){
 const up=upRegistry&&upRegistry[upId];
 if(!up)return {up_id:upId,configuration_id:configurationId||null,statut:"up_introuvable",blocages:["UP absente du référentiel"],points_valides:[]};
 const machineEntry=machineRegistry&&machineRegistry[upId];
 const machines=machineEntry&&Array.isArray(machineEntry.machines)?machineEntry.machines:
  Array.isArray(machineEntry)?machineEntry:[];
 const pilot=upId==="biscuiterie"&&configurationId==="crackers";
 const validConfiguration=upId!=="biscuiterie"||
  !configurationId||["crackers","biscuits_mous","biscuits_durs"].includes(configurationId);
 const needsChoice=upId==="biscuiterie"&&!configurationId;
 const points=[];
 const blocages=[];
 if(hasText(up.nom)&&hasText(up.filiereNom)&&hasText(up.description))points.push("identite_activite");
 else blocages.push("Identité, filière ou description à compléter");
 if(machines.length>0)points.push("catalogue_fonctions");
 else blocages.push("Catalogue de fonctions industrielles absent");
 if(!validConfiguration)blocages.push("Variante Biscuiterie non reconnue");
 if(needsChoice)blocages.push("Sélectionner une variante Biscuiterie");
 if(pilot){
  points.push("hypothese_p2i_ligne_450000_usd","hypothese_p2i_capacite_500_kg_h");
  blocages.push("Justificatif fournisseur du prix et de la capacité de la ligne Crackers manquant");
 }else{
  blocages.push("Prix de configuration industrielle de référence non validé");
  blocages.push("Capacité de configuration industrielle de référence non validée");
 }
 // Le prix d'une ligne ne constitue jamais le CAPEX complet.
 blocages.push("CAPEX complet et coûts complémentaires non validés");
 blocages.push("Hypothèses économiques et projections financières à consolider");
 return Object.freeze({
  up_id:upId,up_nom:up.nom,configuration_id:configurationId||null,
  statut:"a_completer",points_valides:Object.freeze(points),blocages:Object.freeze(blocages),
  reference_equipement_usd:pilot?450000:null,
  capacite_reference:pilot?Object.freeze({valeur:500,unite:"kg/h"}):null,
  capex_total_usd:null,financement_apport_usd:null,financement_dette_usd:null
 });
}
function audit(upRegistry,machineRegistry){
 if(!upRegistry||typeof upRegistry!=="object")throw new Error("Référentiel UP indisponible");
 return Object.freeze(Object.keys(upRegistry).map(id=>inspect(id,null,upRegistry,machineRegistry)));
}
root.P2I_BP_DECOUVERTE_PREPARATION=Object.freeze({inspect,audit});
})(typeof window!=="undefined"?window:globalThis);
