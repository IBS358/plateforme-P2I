/* P2I — Composition des 17 rubriques à partir de dossiers sources qualifiés.
 * Ne produit pas de chiffres financiers fictifs et n'élève pas les anciens
 * indicateurs génériques au rang de prévisions validées.
 */
(function(root){
"use strict";
const TITRES=[
"Projet et activité","Synthèse économique","Configuration industrielle",
"Étude de marché","Stratégie commerciale","Opportunités et risques",
"Investissement et financement","Production et ventes",
"Compte de résultat prévisionnel","BFR mensuel",
"Bilans prévisionnels","Indicateurs financiers",
"Trésorerie mensuelle","Hypothèses et sources",
"Prochaines étapes P2I","BP Pro","Dossier technique"
];
const text=x=>typeof x==="string"&&x.trim()?x.trim():null;
const list=x=>Array.isArray(x)?x.filter(v=>text(v)).map(v=>v.trim()):[];
const unknown=(what)=>({etat:"a_documenter",message:what,donnees:null});
function build(u){
 if(!u||!text(u.up_id)||!text(u.up_nom))throw new Error("UP source invalide");
 const machines=Array.isArray(u.machines_catalogue)?u.machines_catalogue.map(m=>({
  nom:text(m.nom),role:text(m.role),capacite:text(m.capacite),utilites:text(m.utilites)
 })):[];
 const reference=u.reference_industrielle_validee||null;
 const source={
  nature:"Référentiel interne P2I — informations descriptives à confirmer",
  statut:"non_valide_exterieurement",
  sources_externes_verifiees:list(u.controle&&u.controle.sources_externes_verifiees)
 };
 const sections=[
  {description:text(u.description),filiere:text(u.filiere),up_nom:u.up_nom},
  unknown("Compte économique consolidé et chiffré à calculer par le moteur P2I"),
  {machines,configuration_reference:reference,capacite_generique_non_validee:text(u.capacite_generique_texte)},
  {marches_cibles:list(u.marches_cibles),analyse_demande:unknown("Étude de demande, prix et concurrence à documenter")},
  {marches_cibles:list(u.marches_cibles),politique_prix:unknown("Politique de prix et canaux à valider")},
  {opportunites:unknown("Opportunités locales et export à documenter"),risques:unknown("Risques industriels, commerciaux et réglementaires à qualifier")},
  {investissement_reference_equipements_usd:reference?reference.prix_ligne_usd:null,
   estimation_generique_non_validee:u.estimation_generique_non_validee||null,
   capex_complet_usd:null,apport_30_usd:null,dette_70_usd:null,
   avertissement:"Prix des équipements distinct du CAPEX complet; anciens budgets génériques non validés"},
  {processus:list(u.processus),matieres_premieres:list(u.matieres_premieres),
   capacite_reference:reference?{valeur:reference.capacite_kg_h,unite:"kg/h"}:null,
   production_mensuelle:unknown("Production mensuelle et ventes réellement simulées à documenter")},
  unknown("Compte de résultat sur trois exercices à calculer et contrôler"),
  unknown("BFR : 36 mois, stocks, créances et dettes sans double compte"),
  unknown("Trois bilans annuels équilibrés à calculer"),
  unknown("Ratios calculés uniquement à partir d'états financiers cohérents"),
  unknown("Trésorerie mensuelle : 12 mois uniquement"),
  {source,conditions:"Les chiffres génériques historiques ne constituent ni devis ni résultats financiers validés",
   controle:u.controle||null},
  {actions:["Qualifier la configuration de référence et sa capacité",
   "Vérifier les prix fournisseurs et les coûts complémentaires",
   "Documenter les hypothèses d'exploitation",
   "Exécuter et contrôler les moteurs économiques et financiers"]},
  {conditions:"BP Pro après configuration validée, devis officiels et justificatifs techniques et financiers"},
  {machines,processus:list(u.processus),matieres_premieres:list(u.matieres_premieres),
   controles:unknown("Compatibilité, utilités, sécurité, conformité et interfaces à vérifier")}
 ];
 return Object.freeze({up_id:u.up_id,up_nom:u.up_nom,filiere:u.filiere,
  statut:"brouillon_documentaire_non_bancable",
  sections:Object.freeze(sections.map((contenu,i)=>Object.freeze({
   numero:i+1,titre:TITRES[i],contenu
  })))});
}
root.P2I_BP_DOSSIER_BUILDER=Object.freeze({build,titres:Object.freeze(TITRES)});
})(typeof window!=="undefined"?window:globalThis);
