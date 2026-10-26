/* P2I — Moteur BFR mensuel, 36 mois, à partir de soldes documentés.
 * Stocks : valeur des matières et produits finis au coût, sans double compte.
 * Créances : factures clients non encaissées. Dettes : exploitation non réglée.
 * Le moteur n'invente ni stock cible ni délais de paiement.
 */
(function(root){
"use strict";
const finite=v=>typeof v==="number"&&Number.isFinite(v);
const nonnegative=v=>finite(v)&&v>=0;
const close=(a,b)=>Math.abs(a-b)<=Math.max(.01,Math.abs(a)*1e-8);
const required=["stocks_matieres","stocks_produits_finis","creances_clients","dettes_exploitation"];
function calculer({mois,bfr_initial}={}){
 const erreurs=[];
 if(!Array.isArray(mois)||mois.length!==36)erreurs.push("Exactement 36 mois de soldes BFR sont requis");
 if(!finite(bfr_initial))erreurs.push("BFR initial documenté requis");
 if(erreurs.length)return Object.freeze({valide:false,erreurs:Object.freeze(erreurs),bfr_mensuel:null});
 const sortie=[];
 let precedent=bfr_initial;
 for(let i=0;i<36;i++){
  const m=mois[i]||{};
  for(const k of required)if(!nonnegative(m[k]))erreurs.push("Mois "+(i+1)+" : "+k+" manquant ou invalide");
  if(required.some(k=>!nonnegative(m[k])))continue;
  // Aucun stock de sécurité ajouté : il doit déjà figurer dans les stocks constatés.
  const stocks=m.stocks_matieres+m.stocks_produits_finis;
  const bfr=stocks+m.creances_clients-m.dettes_exploitation;
  const variation=bfr-precedent;
  if(!finite(stocks)||!finite(bfr)||!finite(variation)){
   erreurs.push("Mois "+(i+1)+" : calcul non fini");continue;
  }
  sortie.push(Object.freeze({mois:i+1,stocks,stocks_matieres:m.stocks_matieres,
   stocks_produits_finis:m.stocks_produits_finis,creances_clients:m.creances_clients,
   dettes_exploitation:m.dettes_exploitation,bfr,variation_bfr:variation}));
  precedent=bfr;
 }
 if(erreurs.length)return Object.freeze({valide:false,erreurs:Object.freeze(erreurs),bfr_mensuel:null});
 const totalVariation=sortie.reduce((sum,m)=>sum+m.variation_bfr,0);
 if(!close(totalVariation,sortie[35].bfr-bfr_initial))
  return Object.freeze({valide:false,erreurs:Object.freeze(["Variations BFR incohérentes"]),bfr_mensuel:null});
 return Object.freeze({valide:true,erreurs:Object.freeze([]),
  bfr_mensuel:Object.freeze(sortie),bfr_initial,variation_cumulee:totalVariation});
}
root.P2I_BP_MOTEUR_BFR=Object.freeze({calculer,champs_requis:Object.freeze(required)});
})(typeof window!=="undefined"?window:globalThis);
