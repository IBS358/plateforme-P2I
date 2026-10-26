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
 // Deux chemins BFR : soldes documentés, ou scénario clients 40 % comptant / 60 % à 30 jours avec
 // stocks 30/15 jours. Les deux chemins ne doivent jamais se cumuler.
 const scenario=entree.entrees_bfr_scenario;
 if(scenario!==undefined&&entree.entrees_bfr!==undefined)
  erreurs.push("Choisir un seul moteur BFR : soldes ou scénario de règlement clients 40/60");
 if(scenario!==undefined&&!root.P2I_BP_BFR_MENSUEL)
  erreurs.push("Moteur BFR scénario de règlement clients 40/60 indisponible");
 if(erreurs.length)return Object.freeze({valide:false,erreurs:Object.freeze(erreurs),previsions:null});
 const rBfr=scenario!==undefined?
  root.P2I_BP_BFR_MENSUEL.calculate(scenario):bfr.calculer(entree.entrees_bfr);
 const rTre=tre.calculer(entree.entrees_tresorerie);
 if(!rBfr.valide)erreurs.push(...(rBfr.erreurs||rBfr.blocages).map(x=>"BFR : "+x));
 // Les encaissements clients issus du scénario de règlement clients 40/60 doivent être identiques
 // aux ventes clients inscrites en trésorerie pour les douze premiers mois.
 if(scenario!==undefined&&rBfr.valide&&rTre.valide){
  for(let i=0;i<12;i++){
   const a=rBfr.bfr_mensuel[i].encaissements_clients;
   const b=entree.entrees_tresorerie.mois[i].ventes_clients;
   if(Math.abs(a-b)>Math.max(.01,Math.abs(a)*1e-8))
    erreurs.push("Mois "+(i+1)+" : encaissements clients incompatibles avec le BFR clients 40/60");
  }
 }
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
