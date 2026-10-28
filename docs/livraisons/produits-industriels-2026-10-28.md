# Livraison — Produits chimiques industriels — 28 octobre 2026

Scénario : adjuvant liquide pour béton, formulation à partir d’une base PCE aqueuse achetée. Aucune synthèse du polymère ni conformité certifiée n’est revendiquée.

## Consultation
Décompresser le ZIP puis ouvrir BP_Produits_Industriels.html dans un navigateur. Le fichier ouvre directement cette UP, avec les images intégrées. Le passage au Pro a été testé dans le dépôt : le ZIP de consultation ne contient pas la page Pro.

## Fonctionnalités et contrôles
17 rubriques conservées, huit postes techniques illustrés distincts, emballage IBC et hypothèse de retour/location intégrés. Calculs par moteur commun : financement 30 % apport / 70 % dette, BFR mensuel 36 mois, trésorerie 12 mois, états financiers sur trois ans.
24 suites Node réussies (npm test), génération des données et HTML réussie, audit des simulations et test navigateur du parcours Découverte → Pro réussis. Contrôle visuel des huit images effectué.
Les huit UP Chimie disposent désormais d’une simulation indicative. Ensemble du référentiel : 18 simulations sur 16 UP ; 80 UP restent sans simulation économique complète. Aucun de ces dossiers n’est présenté comme validé industriellement ou bancablement.

## Données et limites
Investissement : 206 900 USD ; réserve de trésorerie calculée séparément : 93 949,04 USD. Marges nettes indicatives A1/A2/A3 : 16,0 % / 21,1 % / 23,9 %.
Le budget équipement principal de 60 000 USD reprend la borne haute publiée pour une gamme fournisseur (19 600–60 000 USD), et non un prix précis confirmé du modèle GRE-10MBQ. Les auxiliaires sont des budgets P2I identifiés comme estimations.
Prix de vente initial 1,20 USD/kg et matière première 0,52 USD/kg : hypothèses, sans prix local de gros vérifié. Les références de vente au détail d’autres adjuvants ne démontrent pas l’équivalence du produit ni les débouchés. IBC nominal 1 000 L, rempli à 1 000 kg net selon densité mesurée : rotation/location et conditionnement estimés à 35 USD/tonne ; aucun achat de parc IBC ajouté en double au CAPEX.
Restent à confirmer : formulation et essais avec les ciments locaux, stabilité et sécurité/FDS, performance béton et conformité applicable (notamment EN 934-2), prix exact du modèle et périmètre livré, coûts réels de la base et des emballages, retour/nettoyage des IBC et contrats commerciaux. Les images IA sont illustratives.

## Fichiers modifiés
- data/p2i-bp-lot-chimie-08.json
- data/p2i-bp-decouverte-donnees.json
- data/p2i-bp-decouverte-audit-simulations.json
- js/p2i-bp-decouverte-donnees.js
- css/p2i-bp-decouverte-v108.css
- scripts/build-bp-decouverte-v108.cjs (intégration automatique des images locales)
- assets/bp-agro/postes-adjuvants-ia.jpg et assets/bp-agro/PROVENANCE.md
- business-plan-decouverte.html et business-plan-decouverte-v108.html
- tests/check-p2i-bp-donnees.cjs, tests/check-p2i-bp-simulations.cjs, tests/qa-parcours-decouverte-pro.cjs
- docs/livraisons/produits-industriels-2026-10-28.md

Publication exclusivement sur refonte-bp-decouverte-17-rubriques. main inchangée.
