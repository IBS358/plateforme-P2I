/* Adaptateur économique commun du référentiel. Aucun calcul dans le rendu. */
(function(root){'use strict';
function calculer(d){
 if(!d?.economie||!['fabrication','assemblage','services'].includes(d.type_activite))throw Error('Dossier économique invalide');
 const e=d.economie,b=e.budget_minimum_historique.valeur,ca=e.ca_annuel_historique.valeur;
 if(b!==null&&(typeof b!=='number'||!Number.isFinite(b)||b<0))throw Error('Budget historique invalide');
 const post=(v,source)=>v===null?null:{montant_usd:v,statut:'estime_p2i',source};
 const financier=root.P2I_FINANCIAL_ENGINE.calculer({type_activite:d.type_activite,controle_non_double_compte:false,lignes:[{id:d.up_id,type_activite:d.type_activite,chiffre_affaires:post(ca,'up-data.js / '+d.up_id+' / estimated_revenue : historique non vérifié'),cout_prestations_ou_produits_vendus:null,variation_stock:null}],postes:{}});
 return {qualification:'reperes_historiques_non_previsions',budget_minimum_historique_usd:b,financement_historique_indicatif:b===null?null:{apport:b*.3,dette:b*.7,base:'minimum_historique_non_capex_consolide'},ca_historique_usd:ca,fourchette_ca_historique:e.fourchette_ca_historique.texte,marge_brute_historique:e.marge_brute_historique,financier,resultat_net:null,bfr:null,tresorerie:null};
}
// Barème entreprise publié CIE; aucune puissance ni consommation n'est présumée.
const tarif=Object.freeze(root.P2I_BP_DONNEES.parametres_communs.electricite_mt_general);
function electricite(input){
 for(const k of ['kw_souscrits','kwh_pleines_an','kwh_pointe_an','kwh_creuses_an'])if(typeof input?.[k]!=='number'||!Number.isFinite(input[k])||input[k]<0)throw Error('Puissance et consommations annuelles requises : '+k);
 if(input.kw_souscrits<=0)throw Error('Puissance souscrite strictement positive requise');
 const heures=(input.kwh_pleines_an+input.kwh_pointe_an+input.kwh_creuses_an)/input.kw_souscrits;
 if(heures<1000||heures>5000)throw Error('Profil hors plage du tarif MT général : contrat à qualifier');
 return {energie_ht_xof:input.kwh_pleines_an*tarif.kwh_pleines_ht+input.kwh_pointe_an*tarif.kwh_pointe_ht+input.kwh_creuses_an*tarif.kwh_creuses_ht,prime_ht_xof:input.kw_souscrits*tarif.prime_kw_an_ht,heures_equivalentes:heures,qualification:'sous_total_energie_et_prime_hors_redevances_taxes_comptage_raccordement',tarif};
}
function reference(up,config){const u=root.P2I_BP_DONNEES.unites;if(!Object.prototype.hasOwnProperty.call(u,up)||!Object.prototype.hasOwnProperty.call(u[up].variantes,config))return null;const r=u[up].variantes[config].reference;return r?JSON.parse(JSON.stringify(r)):null;}
root.P2I_BP_DONNEES_ENGINE=Object.freeze({calculer,electricite,tarif,reference});
})(typeof window!=='undefined'?window:globalThis);
