/* P2I — Contrat de validation des prévisions BP Découverte.
 * Vérifie des données effectivement fournies; ne génère aucune hypothèse.
 * Tous les montants en USD, sans remplacement des valeurs absentes par zéro.
 */
(function(root){
"use strict";
const finite=v=>typeof v==="number"&&Number.isFinite(v);
const nonnegative=v=>finite(v)&&v>=0;
const requiredInvestment=[
 "equipements","fret","assurance","douane_transit","transport_local",
 "genie_civil","utilites","installation_formation","pieces_initiales",
 "securite_environnement"
];
const requiredAnnual=["chiffre_affaires","cout_produits_vendus","charges_exploitation","amortissements","charges_financieres","impots","resultat_net"];
const requiredBfr=["stocks","creances_clients","dettes_exploitation","bfr"];
const requiredTreasury=["encaissements","decaissements","solde_initial","solde_final"];
const requiredBalance=["actif_total","passif_total"];
const close=(a,b)=>Math.abs(a-b)<=Math.max(.01,Math.abs(a)*1e-8);
function validate(dataset){
 const issues=[],d=dataset&&typeof dataset==="object"?dataset:{};
 const push=(path,message)=>issues.push(Object.freeze({champ:path,motif:message}));
 const investment=d.investissement||{};
 let capex=null;
 if(requiredInvestment.every(k=>nonnegative(investment[k]))){
  capex=requiredInvestment.reduce((n,k)=>n+investment[k],0);
  if(finite(investment.total)&&!close(investment.total,capex))push("investissement.total","Différent de la somme des postes");
 }else for(const k of requiredInvestment)if(!nonnegative(investment[k]))push("investissement."+k,"Montant vérifié requis");
 if(investment.reserve_tresorerie!==undefined&&!nonnegative(investment.reserve_tresorerie))
  push("investissement.reserve_tresorerie","Réserve distincte du CAPEX : montant invalide");
 const annual=Array.isArray(d.compte_resultat)?d.compte_resultat:[];
 if(annual.length!==3)push("compte_resultat","Trois exercices annuels requis");
 for(let i=0;i<3;i++){
  const item=annual[i]||{};
  for(const k of requiredAnnual)if(!(k==="resultat_net"?finite(item[k]):nonnegative(item[k])))push("compte_resultat."+(i+1)+"."+k,"Montant annuel requis ou invalide");
  if(requiredAnnual.every(k=>finite(item[k]))){
   const computed=item.chiffre_affaires-item.cout_produits_vendus-item.charges_exploitation-
    item.amortissements-item.charges_financieres-item.impots;
   if(!close(computed,item.resultat_net))push("compte_resultat."+(i+1)+".resultat_net","Résultat incohérent avec les charges déclarées");
  }
 }
 const bfr=Array.isArray(d.bfr_mensuel)?d.bfr_mensuel:[];
 if(bfr.length!==36)push("bfr_mensuel","36 mois requis");
 for(let i=0;i<36;i++){
  const item=bfr[i]||{};
  for(const k of requiredBfr)if(!(k==="bfr"?finite(item[k]):nonnegative(item[k])))push("bfr_mensuel."+(i+1)+"."+k,"Montant requis ou invalide");
  if(requiredBfr.every(k=>finite(item[k]))&&!close(item.stocks+item.creances_clients-item.dettes_exploitation,item.bfr))
   push("bfr_mensuel."+(i+1)+".bfr","BFR incohérent avec stocks, créances et dettes");
 }
 const treasury=Array.isArray(d.tresorerie_mensuelle)?d.tresorerie_mensuelle:[];
 if(treasury.length!==12)push("tresorerie_mensuelle","12 mois uniquement");
 for(let i=0;i<12;i++){
  const item=treasury[i]||{};
  for(const k of requiredTreasury)if(!(k==="encaissements"||k==="decaissements"?nonnegative(item[k]):finite(item[k])))push("tresorerie_mensuelle."+(i+1)+"."+k,"Montant requis ou invalide");
  if(requiredTreasury.every(k=>finite(item[k]))&&!close(item.solde_initial+item.encaissements-item.decaissements,item.solde_final))
   push("tresorerie_mensuelle."+(i+1)+".solde_final","Solde de trésorerie incohérent");
  if(i>0&&finite(treasury[i-1]?.solde_final)&&finite(item.solde_initial)&&
   !close(treasury[i-1].solde_final,item.solde_initial))
   push("tresorerie_mensuelle."+(i+1)+".solde_initial","Rupture du report mensuel");
 }
 const balance=Array.isArray(d.bilans_annuels)?d.bilans_annuels:[];
 if(balance.length!==3)push("bilans_annuels","Trois bilans requis");
 for(let i=0;i<3;i++){
  const item=balance[i]||{};
  for(const k of requiredBalance)if(!nonnegative(item[k]))push("bilans_annuels."+(i+1)+"."+k,"Montant requis");
  if(requiredBalance.every(k=>nonnegative(item[k]))&&!close(item.actif_total,item.passif_total))
   push("bilans_annuels."+(i+1),"Bilan déséquilibré");
 }
 const finance=capex===null?null:Object.freeze({investissement_total_usd:capex,
  apport_40_usd:capex*.4,dette_60_usd:capex*.6,
  reserve_tresorerie_distincte_usd:nonnegative(investment.reserve_tresorerie)?investment.reserve_tresorerie:null});
 return Object.freeze({valide:issues.length===0,blocages:Object.freeze(issues),
  financement_indicatif:finance});
}
root.P2I_BP_CONTROLES_FINANCIERS=Object.freeze({validate,requiredInvestment:Object.freeze(requiredInvestment)});
})(typeof window!=="undefined"?window:globalThis);
