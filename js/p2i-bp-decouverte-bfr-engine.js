/* P2I — Moteur BFR mensuel : 36 mois, ventes 40 % comptant / 60 % à 30 jours.
 * Stocks cibles : matières premières 30 jours, produits finis 15 jours.
 * Les coûts de matières et de production sont fournis par les moteurs amont,
 * jamais déduits d'un chiffre d'affaires ni inventés.
 * Convention explicite : mois normalisé de 30 jours ; stock final mensuel.
 */
(function(root){
"use strict";
const number=x=>typeof x==="number"&&Number.isFinite(x)&&x>=0;
const close=(a,b)=>Math.abs(a-b)<=Math.max(.01,Math.abs(a)*1e-8);
function calculate(input){
 const problems=[];
 const data=input&&typeof input==="object"?input:{};
 const months=Array.isArray(data.mois)?data.mois:[];
 if(months.length!==36)problems.push("36 mois de données d'exploitation sont obligatoires");
 const options=data.hypotheses||{};
 const expected={part_clients_comptant:0.4,part_clients_30_jours:0.6,
  stock_matieres_jours:30,stock_produits_finis_jours:15,
  delai_fournisseurs_jours:0,jours_mois:30};
 for(const [key,value] of Object.entries(expected))
  if(!number(options[key])||!close(options[key],value))
   problems.push("Hypothèse absente ou différente du scénario P2I : "+key);
 if(problems.length)return Object.freeze({valide:false,blocages:Object.freeze(problems),bfr_mensuel:null});
 const rows=[];
 let previousReceivable=0;
 for(let i=0;i<36;i++){
  const m=months[i]||{};
  const keys=["ventes_usd","consommation_matieres_usd","cout_production_vendue_usd"];
  for(const k of keys)if(!number(m[k]))problems.push("Mois "+(i+1)+" : "+k+" manquant ou invalide");
  if(problems.length)continue;
  const rawStock=m.consommation_matieres_usd;
  const finishedStock=m.cout_production_vendue_usd*.5;
  const receivable=m.ventes_usd*.6;
  // Les fournisseurs sont payés comptant : aucune dette fournisseur.
  // Les stocks sont des encours distincts : ne pas ajouter la consommation
  // du mois une deuxième fois dans le BFR.
  const stocks=rawStock+finishedStock;
  const bfr=stocks+receivable;
  rows.push(Object.freeze({mois:i+1,stocks_matieres:rawStock,
   stocks_produits_finis:finishedStock,stocks,creances_clients:receivable,
   dettes_exploitation:0,bfr,
   encaissements_clients:m.ventes_usd*.4+previousReceivable}));
  previousReceivable=receivable;
 }
 if(problems.length)return Object.freeze({valide:false,blocages:Object.freeze(problems),bfr_mensuel:null});
 return Object.freeze({valide:true,blocages:Object.freeze([]),bfr_mensuel:Object.freeze(rows)});
}
root.P2I_BP_BFR_MENSUEL=Object.freeze({calculate});
})(typeof window!=="undefined"?window:globalThis);
