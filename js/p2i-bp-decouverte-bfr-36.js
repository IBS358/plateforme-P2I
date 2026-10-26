/* P2I — Moteur BFR mensuel (36 mois).
 * Entrées obligatoires par mois : stocks réels de clôture (matières et produits
 * finis), ventes facturées, achats fournisseurs, autres dettes d'exploitation.
 * Encaissement clients : 40 % au comptant, 60 % à 30 jours.
 * Fournisseurs : paiement comptant, donc dette fournisseurs = 0.
 * Ne transforme jamais un stock cible (30/15 jours) en stock comptable fictif.
 */
(function(root){
"use strict";
const ok=v=>typeof v==="number"&&Number.isFinite(v)&&v>=0;
const close=(a,b)=>Math.abs(a-b)<=Math.max(.01,Math.abs(a)*1e-8);
function calculer(input){
 const errors=[];
 const add=(p,m)=>errors.push(Object.freeze({champ:p,motif:m}));
 const d=input&&typeof input==="object"?input:{};
 const months=Array.isArray(d.mois)?d.mois:[];
 if(months.length!==36)add("mois","36 mois de données nécessaires");
 if(d.conditions_clients&&
  (d.conditions_clients.comptant!==.4||d.conditions_clients.a_30_jours!==.6))
  add("conditions_clients","Référence P2I : 40 % comptant et 60 % à 30 jours");
 if(d.conditions_fournisseurs&&d.conditions_fournisseurs!=="comptant")
  add("conditions_fournisseurs","Référence P2I : fournisseurs payés comptant");
 const initial=d.creances_initiales_usd;
 if(!ok(initial))add("creances_initiales_usd","Créances d'ouverture documentées requises");
 const result=[];
 for(let i=0;i<36;i++){
  const x=months[i]||{};
  const prefix="mois."+(i+1)+".";
  for(const k of ["ventes_facturees_usd","achats_fournisseurs_usd","stock_matieres_fin_usd","stock_produits_finis_fin_usd","autres_dettes_exploitation_fin_usd"])
   if(!ok(x[k]))add(prefix+k,"Montant réel ou prévision documentée requis");
  if(x.dettes_fournisseurs_fin_usd!==undefined&&x.dettes_fournisseurs_fin_usd!==0)
   add(prefix+"dettes_fournisseurs_fin_usd","Paiement fournisseurs comptant : dette de clôture nulle");
  if(i===0&&ok(initial)&&!close(initial,0))
   add("creances_initiales_usd","Créances d'ouverture non nulles : échéancier antérieur requis");
  if(!["ventes_facturees_usd","achats_fournisseurs_usd","stock_matieres_fin_usd","stock_produits_finis_fin_usd","autres_dettes_exploitation_fin_usd"].every(k=>ok(x[k])))continue;
  const ventes=x.ventes_facturees_usd;
  const stock=x.stock_matieres_fin_usd+x.stock_produits_finis_fin_usd;
  const creances=ventes*.6;
  const dettes=x.autres_dettes_exploitation_fin_usd;
  const bfr=stock+creances-dettes;
  result.push(Object.freeze({
   mois:i+1,ventes_facturees_usd:ventes,
   encaissements_ventes_usd:ventes*.4+(i===0?0:months[i-1].ventes_facturees_usd*.6),
   achats_payes_comptant_usd:x.achats_fournisseurs_usd,
   stocks:stock,creances_clients:creances,dettes_exploitation:dettes,bfr
  }));
 }
 if(errors.length||result.length!==36)return Object.freeze({valide:false,blocages:Object.freeze(errors),bfr_mensuel:null});
 return Object.freeze({valide:true,blocages:Object.freeze([]),
  bfr_mensuel:Object.freeze(result)});
}
root.P2I_BP_BFR_MENSUEL=Object.freeze({calculer});
})(typeof window!=="undefined"?window:globalThis);
