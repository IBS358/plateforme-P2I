/* P2I — Moteur BFR mensuel, 36 mois.
 * Politique de référence : fournisseurs comptant, clients 40 % comptant,
 * 60 % à 30 jours. Stocks valorisés depuis quantités physiques constatées
 * ou projetées, sans reconstituer un second stock théorique.
 * Les données d'entrée restent des hypothèses à documenter.
 */
(function(root){
"use strict";
const finite=v=>typeof v==="number"&&Number.isFinite(v);
const positive=v=>finite(v)&&v>=0;
const round=v=>Math.round((v+Number.EPSILON)*100)/100;
function calculate(months,options){
 const opts=options||{};
 const cashShare=opts.part_clients_comptant===undefined?.4:opts.part_clients_comptant;
 const creditDays=opts.delai_clients_jours===undefined?30:opts.delai_clients_jours;
 const supplierDays=opts.delai_fournisseurs_jours===undefined?0:opts.delai_fournisseurs_jours;
 if(!Array.isArray(months)||months.length!==36)throw new Error("BFR : 36 mois de données requis");
 if(cashShare!==.4||creditDays!==30||supplierDays!==0)
  throw new Error("BFR : politique P2I 40/60, 30 jours clients et fournisseurs comptant requise");
 const out=[];
 for(let i=0;i<months.length;i++){
  const m=months[i]||{};
  const fields=["ventes_usd","stock_matieres_quantite","cout_unitaire_matieres_usd",
   "stock_finis_quantite","cout_unitaire_finis_usd"];
  for(const key of fields)if(!positive(m[key]))throw new Error("BFR mois "+(i+1)+" : "+key+" manquant ou invalide");
  // Quantités réelles de fin de mois : aucun cumul automatique des jours
  // de rotation, qui sont des objectifs de gestion et non un stock additionnel.
  const matieres=round(m.stock_matieres_quantite*m.cout_unitaire_matieres_usd);
  const finis=round(m.stock_finis_quantite*m.cout_unitaire_finis_usd);
  const stocks=round(matieres+finis);
  // Approximation mensuelle : 60 % des ventes du mois sont à échéance
  // au mois suivant; à réconcilier avec les factures et dates effectives.
  const creances=round(m.ventes_usd*.6);
  const dettes=0;
  const bfr=round(stocks+creances-dettes);
  out.push(Object.freeze({mois:i+1,stocks,stock_matieres_usd:matieres,
   stock_produits_finis_usd:finis,creances_clients:creances,
   dettes_exploitation:dettes,bfr,
   methode:"stock_physique_fin_mois_et_60pct_ventes_du_mois",
   approximation_credit_clients:true}));
 }
 return Object.freeze(out);
}
root.P2I_BP_BFR_ENGINE=Object.freeze({calculate});
})(typeof window!=="undefined"?window:globalThis);
