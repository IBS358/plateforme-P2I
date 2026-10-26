/* V108 — sources et scénarios indépendants. Aucun transfert d'exploitation
 * entre variantes; les anciens scénarios V107 restent archivés séparément. */
(function(root){'use strict';
const fx={date:'2026-10-23',eur_usd:1.1193,eur_xof:655.957,
 url:'https://www.ecb.europa.eu/stats/policy_and_exchange_rates/euro_reference_exchange_rates/html/index.en.html',
 parite_url:'https://www.bceao.int/fr/cours/cours-des-devises-contre-Franc-CFA-appliquer-aux-transferts',
 statut:'reference_datee_indicative_non_bancaire'};
root.P2I_CURRENCY.definirTauxEURUSD(fx.eur_usd,fx.date,fx.url);
const technical={
 biscuits_mous:{formage:'Moulage rotatif',etapes:['Dosage et mélange','Moulage rotatif','Cuisson','Refroidissement','Conditionnement'],source:'https://www.bakerperkins.com/biscuit-cookie-cracker/products/soft-dough-biscuits/',faits:'La documentation fabricant décrit le mélange, le moulage rotatif et la cuisson pour les biscuits à pâte courte. Cette description ne valide ni modèle, ni budget, ni capacité de la ligne P2I. La texture moelleuse du produit fini doit être confirmée par les essais de formulation.'},
 biscuits_durs:{formage:'Abaisse, calibrage et découpe rotative',etapes:['Dosage et mélange','Abaisse de pâte','Calibrage et détente','Découpe et cuisson','Refroidissement et emballage'],source:'https://www.bakerperkins.com/biscuit-cookie-cracker/products/hard-sweet-biscuit-lines/',faits:'Le fabricant décrit une feuille de pâte calibrée, détendue, puis marquée et découpée avant cuisson. Il ne s’agit pas du moulage rotatif des pâtes courtes. Aucune capacité ou offre commerciale P2I n’est attestée par cette source.'},
 crackers:{formage:'Laminage, calibrage et découpe',etapes:['Dosage et pétrissage','Laminage','Calibrage et découpe','Cuisson','Refroidissement et emballage'],source:'https://www.bakerperkins.com/biscuit-cookie-cracker/products/cracker-lines/',faits:'Le procédé de mise en feuille et découpe est distinct du moulage des pâtes courtes; la compatibilité du procédé Crackers, les interfaces et la capacité effective de la ligne P2I restent à justifier.'}
};
const old=root.P2I_BP_V107_SCENARIOS;
const variants=JSON.parse(JSON.stringify(old.variants));
variants.crackers.statut_exploitation='Recette, volumes, prix de vente et coûts industriels du référentiel Crackers du dépôt. Aucun paramètre d’exploitation Biscuits mous repris. Charges commerciales et administratives propres à cette variante encore manquantes.';
variants.biscuits_durs.statut_exploitation='Données d’exploitation propres à Biscuits durs non disponibles : aucun résultat net, BFR ou trésorerie ne sont repris d’une autre variante.';
function obtenir(config){
 if(!Object.prototype.hasOwnProperty.call(variants,config))return null;
 const meta={...variants[config],up_id:'biscuiterie',configuration_id:config,capacite:500,unite:'kg/h',technique:technical[config],qualification:'hypotheses_p2i_non_verifiees'};
 if(config==='biscuits_mous')return {...old.obtenir(config),...meta,statut_exploitation:'Base propre à Biscuits mous, extraite du texte utilisateur V106. Résultats recalculés, hypothèses et prix non vérifiés.'};
 return {...meta,complet:false,manquants:config==='crackers'?['Charges commerciales et administratives hors coûts industriels','Prévisions de production et de ventes propres aux années 2 et 3','Ventilation des investissements complémentaires','Conservation, pertes et capacité de stockage des invendus']:['Production et ventes sur trois ans','Prix de vente propre au produit','Formulation et coûts industriels','Personnel et charges d’exploitation','Budget machines et ventilation du CAPEX']};
}
function partiel(config){
 if(config!=='crackers')return null;
 const ingredients=root.P2I_RECETTES_BISCUITERIE.crackers.ingredients;
 const matieres=ingredients.reduce((sum,x)=>sum+x[1]*x[2],0);
 const reference=root.P2I_HYPOTHESES_COMMERCIALES.obtenirReference('biscuiterie','crackers');
 const commercial=root.P2I_COMMERCIAL_ENGINE.calculerProjet(reference),ligne=commercial.lignes[0];
 const couts={emballages_kg:.14,energie_kg:.08,personnel_industriel_annuel:65000,maintenance_annuelle:15000,autres_industriels_annuels:30000,
 source:'business-plan-decouverte-avant-v107.html : tableau autresCouts, recette js/p2i-recettes-biscuiterie.js, js/p2i-hypotheses-commerciales.js; hypothèses P2I historiques non vérifiées'};
 const fixed=couts.personnel_industriel_annuel+couts.maintenance_annuelle+couts.autres_industriels_annuels;
 const eco=root.P2I_ECONOMIC_RESULT_ENGINE.calculer({type_activite:'fabrication',quantite_produite:ligne.capacite_annuelle,quantite_vendue:ligne.quantite_facturee,quantite_perdue:0,cout_variable_unitaire:matieres+couts.emballages_kg+couts.energie_kg,charges_fixes_industrielles:fixed,chiffre_affaires_usd:commercial.chiffre_affaires_usd});
 return {statut:'simulation_industrielle_partielle',configuration_id:config,ingredients,couts,cout_matieres_kg:matieres,commercial,economique:eco,
 resultat_net:null,bfr_mensuel:null,tresorerie_mensuelle:null,manquants:obtenir(config).manquants,
 avertissement:'Les 228 000 kg invendus sont un stock théorique sans pertes; leur conservation et leur stockage ne sont pas validés. La marge industrielle n’est pas un bénéfice net.'};
}
const nettoyage={
 nettoyage_intensif:{nom:'Nettoyage industriel intensif',description:'Entretien mécanisé des sols et installations industrielles selon le diagnostic du site.',source:'https://www.inrs.fr/risques/chimiques/mesures-hygiene.html',besoins:[['Nettoyage mécanisé des sols','Autolaveuse ou monobrosse à sélectionner selon le revêtement et le diagnostic.'],['Aspiration industrielle','Aspirateur avec filtration adaptée aux polluants présents.'],['Collecte des effluents','Moyens de récupération et contenants compatibles à dimensionner.'],['Protection du personnel','EPI adaptés aux risques résiduels et formation à leur utilisation.'],['Contrôle et déchets','Traçabilité des opérations et filières de déchets à qualifier.']]},
 decontamination_chimique:{nom:'Décontamination chimique',description:'Interventions spécialisées sur des contaminations chimiques; matériels, confinement et protection adaptés aux substances identifiées.',source:'https://www.inrs.fr/risques/chimiques/protection-individuelle.html',besoins:[['Diagnostic de contamination','Identification des substances, fiches de données de sécurité et moyens de mesure à déterminer.'],['Aspiration et traitement adaptés','Matériels compatibles et filtration à sélectionner selon les polluants; aucune machine universelle n’est présumée.'],['Confinement et ventilation','Protection collective et organisation de zone à dimensionner selon l’évaluation du risque.'],['Protection spécialisée','Vêtements, gants, protection oculaire et respiratoire choisis selon les risques résiduels.'],['Récupération et restitution','Collecte compatible des effluents et déchets, contrôle final et filières de traitement à définir.']]},
 decontamination_biologique:{nom:'Décontamination biologique',description:'Interventions spécialisées sur des risques biologiques; nettoyage, désinfection et protection fondés sur le diagnostic de contamination.',source:'https://www.inrs.fr/risques/biologiques/prevention.html',besoins:[['Diagnostic biologique','Identification des risques et des surfaces; critères de restitution à définir.'],['Nettoyage et désinfection','Matériels et procédés à choisir selon les agents, les surfaces et l’évaluation des risques.'],['Protection collective','Moyens limitant la dispersion, confinement et ventilation adaptés au diagnostic.'],['Protection individuelle et hygiène','EPI adaptés, moyens d’hygiène et formation du personnel à organiser.'],['Déchets et vérification finale','Conditionnement des déchets, filière de traitement et traçabilité du contrôle à qualifier.']]}
};
root.P2I_BP_V108_REFERENCES=Object.freeze({obtenir,partiel,variants:Object.freeze(variants),technique:Object.freeze(technical),nettoyage:Object.freeze(nettoyage),change:Object.freeze(fx)});
})(typeof window!=='undefined'?window:globalThis);
