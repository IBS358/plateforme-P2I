/* P2I — Moteur commun de trésorerie sur douze mois.
 * Entrées documentées : solde initial et 12 jeux encaissements/décaissements.
 * Les valeurs manquantes ne sont jamais transformées en zéro.
 * Aucune projection sur 36 mois n'est produite.
 */
(function(root){
"use strict";
const finite=v=>typeof v==="number"&&Number.isFinite(v);
const nonnegative=v=>finite(v)&&v>=0;
const close=(a,b)=>Math.abs(a-b)<=Math.max(.01,Math.abs(a)*1e-8);
const FIELDS=["ventes_clients","autres_encaissements","achats_matiere","salaires","charges_exploitation","investissements","service_dette","impots","autres_decaissements"];
function calculer({solde_initial,mois}={}){
 const erreurs=[];
 if(!finite(solde_initial))erreurs.push("Solde initial de trésorerie manquant ou invalide");
 if(!Array.isArray(mois)||mois.length!==12)erreurs.push("Exactement 12 mois d'entrées sont requis");
 if(erreurs.length)return Object.freeze({valide:false,erreurs:Object.freeze(erreurs),tresorerie_mensuelle:null});
 const sortie=[];
 let solde=solde_initial;
 for(let i=0;i<12;i++){
  const m=mois[i]||{};
  for(const champ of FIELDS){
   if(!nonnegative(m[champ]))erreurs.push("Mois "+(i+1)+" : "+champ+" non renseigné ou invalide");
  }
  if(FIELDS.some(champ=>!nonnegative(m[champ])))continue;
  const encaissements=m.ventes_clients+m.autres_encaissements;
  const decaissements=m.achats_matiere+m.salaires+m.charges_exploitation+
   m.investissements+m.service_dette+m.impots+m.autres_decaissements;
  const final=solde+encaissements-decaissements;
  if(!finite(final)){erreurs.push("Mois "+(i+1)+" : calcul non fini");continue;}
  sortie.push(Object.freeze({mois:i+1,encaissements,decaissements,solde_initial:solde,solde_final:final}));
  solde=final;
 }
 if(erreurs.length)return Object.freeze({valide:false,erreurs:Object.freeze(erreurs),tresorerie_mensuelle:null});
 return Object.freeze({valide:true,erreurs:Object.freeze([]),tresorerie_mensuelle:Object.freeze(sortie),
  solde_final:solde});
}
root.P2I_BP_MOTEUR_TRESORERIE=Object.freeze({calculer,champs_requis:Object.freeze(FIELDS)});
})(typeof window!=="undefined"?window:globalThis);
