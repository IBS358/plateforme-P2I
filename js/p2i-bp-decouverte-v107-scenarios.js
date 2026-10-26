/* Entrées de simulation, jamais données fournisseurs validées.
 * Source : fichier utilisateur Pasted text(20261026-133758).txt, reçu 26/10/2026.
 * Les valeurs publiées dans l'ancien prototype servent d'entrées de test.
 * Les résultats sont recalculés : aucune reprise de résultat net ou de solde final.
 */
(function(root){'use strict';
const base={capacite:500,unite:'kg/h',production:[428450,560880,654360],ventes:[411312,555583,650621],
 prix:[2.30,1322288/555583,1600528/650621],
 cout_production_kg:[423651/411312,588909/555583,710228/650621],
 matieres_kg:25027*12/428450,personnel:76000,croissance_personnel:.04,charges_fixes:62000,croissance_charges:.03,
 part_apport:.30,part_dette:.70,taux_interet:.08,duree_dette_mois:60,duree_amortissement_ans:10,
 taux_tva:.18,taux_is:.25,coussin_tresorerie:.10,
 source:'Texte utilisateur du prototype V106 — hypothèses de simulation non vérifiées',
 conventions:'Mois uniformes; coûts unitaires industriels reconstruits des CPV/ventes du texte; matières unitaires déduites du proxy MP A1. Stocks PF valorisés au coût moyen pondéré, aucun double compte. TVA sur ventes et achats de matières uniquement, règlements TVA à M+1; autres bases de TVA et TVA CAPEX non modélisées. IS affecté en réserve interne et dette fiscale, sans échéancier fiscal officiel. Emprunt amorti linéairement en 60 mois, aucun différé. Réserve supplémentaire calculée, à financer séparément.'};
const variants={
 crackers:{nom:'Crackers',sous_titre:'Biscuits salés croquants',description:'Biscuits salés à texture croquante, adaptés aux commerces et aux réseaux de distribution.',machines:450000,investissement:605000,photo:0,statut_exploitation:'Base d’exploitation Biscuits mous reprise uniquement pour éprouver le moteur et comparer le financement. Recette, prix, rendements et débouchés Crackers restent à qualifier.'},
 biscuits_mous:{nom:'Biscuits mous',sous_titre:'Biscuits tendres et moelleux',description:'Biscuits à texture tendre, destinés aux goûters et au marché familial.',machines:160000,investissement:260000,photo:1,statut_exploitation:'Base de simulation extraite du texte utilisateur V106; coûts agrégés et hypothèses à confirmer.'},
 biscuits_durs:{nom:'Biscuits durs',sous_titre:'Biscuits secs à texture ferme',description:'Biscuits secs et fermes, destinés aux ménages et commerces de proximité.',machines:null,investissement:240000,photo:2,statut_exploitation:'Base d’exploitation Biscuits mous reprise uniquement pour éprouver le moteur. Budget machines, recette et conditions commerciales Biscuits durs non documentés.'}
};
function obtenir(config){if(!variants[config])return null;return JSON.parse(JSON.stringify({...base,...variants[config],up_id:'biscuiterie',configuration_id:config}));}
root.P2I_BP_V107_SCENARIOS=Object.freeze({obtenir,variants:Object.freeze(variants)});
})(typeof window!=='undefined'?window:globalThis);
