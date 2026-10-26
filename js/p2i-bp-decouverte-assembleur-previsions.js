/* P2I — Assembleur des prévisions BP Découverte.
 * Raccorde les deux moteurs mensuels existants au validateur commun.
 * Aucun chiffre n'est déduit des estimations génériques des UP.
 * Ne publie rien tant que toutes les données d'entrée sont fournies.
 */
(function(root){
"use strict";
const hasText=x=>typeof x==="string"&&x.trim().length>0;
function construire(entree){
 const erreurs=[];
 if(!entree||typeof entree!=="object")
  return Object.freeze({valide:false,erreurs:Object.freeze(["Dossier financier absent"]),previsions:null});
 const id=entree.up_id,config=entree.configuration_id??null;
 if(!hasText(id))erreurs.push("Identifiant UP requis");
 if(config!==null&&!hasText(config))erreurs.push("Configuration invalide");
 const bfr=root.P2I_BP_MOTEUR_BFR,tre=root.P2I_BP_MOTEUR_TRESORERIE;
 const controle=root.P2I_BP_CONTROLES_FINANCIERS;
 if(!bfr||!tre||!controle)erreurs.push("Moteurs financiers communs indisponibles");
 if(erreurs.length)return Object.freeze({valide:false,erreurs:Object.freeze(erreurs),previsions:null});
 const rBfr=bfr.calculer(entree.entrees_bfr);
 const rTre=tre.calculer(entree.entrees_tresorerie);
 if(!rBfr.valide)erreurs.push(...rBfr.erreurs.map(x=>"BFR : "+x));
 if(!rTre.valide)erreurs.push(...rTre.erreurs.map(x=>"Trésorerie : "+x));
 if(erreurs.length)return Object.freeze({valide:false,erreurs:Object.freeze(erreurs),previsions:null});
 const d={
  up_id:id,configuration_id:config,
  investissement:entree.investissement,
  compte_resultat:entree.compte_resultat,
  bfr_mensuel:rBfr.bfr_mensuel,
  tresorerie_mensuelle:rTre.tresorerie_mensuelle,
  bilans_annuels:entree.bilans_annuels
 };
 const validation=controle.validate(d);
 if(!validation.valide)return Object.freeze({valide:false,
  erreurs:Object.freeze(validation.blocages.map(x=>x.champ+" : "+x.motif)),previsions:null});
 return Object.freeze({valide:true,erreurs:Object.freeze([]),
  previsions:Object.freeze(d),financement_indicatif:validation.financement_indicatif});
}
// Publication explicite : un moteur appelant doit fournir les entrées complètes.
// Toute nouvelle tentative invalide d'abord les résultats précédents.
function publier(entree){
 root.P2I_BP_PREVISIONS_VALIDABLES=null;
 const result=construire(entree);
 if(result.valide)root.P2I_BP_PREVISIONS_VALIDABLES=result.previsions;
 if(typeof root.dispatchEvent==="function"&&typeof root.Event==="function")
  root.dispatchEvent(new root.Event("p2i:bp-previsions-ready"));
 return result;
}
root.P2I_BP_ASSEMBLEUR_PREVISIONS=Object.freeze({construire,publier});
})(typeof window!=="undefined"?window:globalThis);
