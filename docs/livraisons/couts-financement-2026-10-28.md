# Coûts complémentaires et financement — 28 octobre 2026

## Consultation
Décompresser le ZIP puis ouvrir BP_Couts_Financement.html. Le fichier ouvre Adhésifs & colles. Consulter la rubrique 7 puis sélectionner une autre UP ou une variante Biscuiterie. Toutes les images et les données sont intégrées. Le passage au Pro est vérifié dans le dépôt ; le ZIP ne contient pas la page Pro.

## Périmètre réalisé
18 simulations sur 16 UP déjà traitées : 8 Agroalimentaire & boissons et 8 Chimie. Les 80 autres UP ne sont pas présentées comme économiquement complètes.
Tous les postes de manutention auparavant absents de ces 18 simulations sont maintenant budgétés. Les paniers sont dans data/p2i-bp-manutention-couts.json et alimentent automatiquement le référentiel et le moteur commun.
Les besoins, quantités, accessoires et frais livrés restent des hypothèses de dimensionnement Découverte. Cette livraison ne transforme pas les autres hypothèses de prix de vente, de formulation ou de rendement en données validées.

## Méthode retenue
- Achat de moyens manuels adaptés au déplacement au sol : transpalettes 2 500 kg, diables sacs/seaux ou fûts, chariots inox, bacs et palettes selon les flux.
- Quatre références catalogue publiques HT, datées, distinguées des estimations P2I pour bacs, palettes, fret, assurance, import/transit et transport local.
- Conversion au taux historique déjà retenu dans le moteur : 1 EUR = 1,1193 USD (26/10/2026), sans prétendre à un cours bancaire actuel.
- Frais livrés : provisions P2I de 15 % pour le fret, 1 % assurance, 20 % import/transit, sur la base achat, plus 75 USD de transport local. Ce ne sont pas des taux douaniers officiels. La TVA d’importation n’est pas modélisée séparément dans ces provisions.
- Entretien supplémentaire : max(100 USD/an, 3 % de la base achat) pour les paniers ajoutés ; inclus une seule fois dans les coûts industriels. Sans nouvelle embauche ni location récurrente : le personnel existant est affecté aux déplacements. Ce sont des hypothèses d’organisation à confirmer.
- Boulangerie, Adhésifs et Adjuvants : panier prélevé sur l’enveloppe auxiliaire déjà financée. Le solde de cette enveloppe demeure une estimation P2I pour les autres auxiliaires ; aucune seconde dépense de manutention ajoutée. Entretien déjà couvert dans leurs frais industriels.
- Amortissement de la manutention sur 5 ans, convention économique de simulation. Le reste conserve sa durée de référence. Les achats ne sont pas déduits intégralement du résultat dès A1. Les amortissements, l’entretien et les intérêts sont effectivement déduits ; le capital remboursé agit sur trésorerie et dette, pas une seconde fois sur le résultat.

## Financement et trésorerie
Apport sur l’investissement : 30 %. Dette : 70 % de l’investissement, au taux et à la durée déjà retenus (8 %, 60 mois). La réserve initiale calculée est entièrement financée par apport supplémentaire. Apport personnel total = 30 % de l’investissement + réserve initiale. Besoin total = investissement + réserve = apport personnel total + dette.
Le plan suppose le versement effectif de cet apport et le décaissement de la dette. La réserve couvre le point bas modélisé de trésorerie et le coussin de 10 % ; elle ne garantit pas la couverture de ventes, pertes ou coûts différents des hypothèses. Les impôts sur les sociétés sont réservés suivant la convention déjà utilisée, sans calendrier fiscal officiel ajouté.
BFR : 36 mois. Trésorerie : 12 mois. Bilans et résultats : trois ans. Les nouveaux apports, réserves et dettes sont cohérents avec les bilans équilibrés.

## Effet sur la rentabilité indicative
Aucun prix de vente, volume vendu, coût de matière ou taux fiscal n’a été ajusté pour compenser ces dépenses. Les deux UP déjà sous 10 % restent sous ce repère ; aucune marge cible n’est fabriquée.

| UP / variante | Manutention livrée estimée USD | Hausse d’investissement USD | Marge nette A1 avant | Marge nette A1 après | Variation résultat net A1 USD |
| --- | ---: | ---: | ---: | ---: | ---: |
| Conserverie de légumes | 2 527,20 | 2 527,20 | 8,70 % | 8,55 % | -550,49 |
| Biscuiterie industrielle / crackers | 3 282,78 | 3 282,78 | 38,28 % | 38,23 % | -690,20 |
| Biscuiterie industrielle / biscuits_mous | 3 282,78 | 3 282,78 | 28,02 % | 27,95 % | -691,16 |
| Biscuiterie industrielle / biscuits_durs | 3 282,78 | 3 282,78 | 28,38 % | 28,32 % | -691,16 |
| Boulangerie industrielle | 830,58 | 0,00 | 12,00 % | 11,93 % | -62,29 |
| Production de jus et boissons | 2 527,20 | 2 527,20 | 10,19 % | 10,07 % | -548,99 |
| Mini-laiterie | 2 364,00 | 2 364,00 | 23,83 % | 23,76 % | -519,79 |
| Huiles alimentaires | 1 583,72 | 1 583,72 | 13,25 % | 13,13 % | -372,98 |
| Transformation d'épices | 1 508,89 | 1 508,89 | 24,47 % | 24,12 % | -358,90 |
| Aliments pour bétail | 1 253,76 | 1 253,76 | 7,19 % | 7,05 % | -309,39 |
| Détergents & produits ménagers | 1 420,52 | 1 420,52 | 11,02 % | 10,94 % | -342,27 |
| Savonnerie industrielle | 2 364,00 | 2 364,00 | 14,87 % | 14,53 % | -519,79 |
| Cosmétiques naturels | 2 579,17 | 2 579,17 | 30,64 % | 30,57 % | -560,27 |
| Peintures industrielles | 1 420,52 | 1 420,52 | 27,58 % | 27,56 % | -342,27 |
| Adhésifs & colles | 1 420,52 | 0,00 | 13,40 % | 13,38 % | -106,54 |
| Engrais & pesticides | 1 253,76 | 1 253,76 | 19,13 % | 19,10 % | -307,14 |
| Hygiène & désinfection professionnelles | 1 420,52 | 1 420,52 | 12,27 % | 12,17 % | -340,02 |
| Produits chimiques industriels | 906,15 | 0,00 | 15,97 % | 15,96 % | -67,96 |

## Apports et dettes recalculés

| UP / variante | Apport personnel total USD | Dont réserve initiale USD | Dette USD |
| --- | ---: | ---: | ---: |
| Conserverie de légumes | 83 589,72 | 33 421,56 | 117 059,04 |
| Biscuiterie industrielle / crackers | 298 303,57 | 115 818,74 | 425 797,95 |
| Biscuiterie industrielle / biscuits_mous | 306 047,23 | 123 562,40 | 425 797,95 |
| Biscuiterie industrielle / biscuits_durs | 306 336,48 | 123 851,65 | 425 797,95 |
| Boulangerie industrielle | 40 474,42 | 13 740,87 | 62 378,30 |
| Production de jus et boissons | 95 937,43 | 51 946,38 | 102 645,79 |
| Mini-laiterie | 99 100,76 | 43 179,29 | 130 483,41 |
| Huiles alimentaires | 71 548,61 | 39 333,49 | 75 168,60 |
| Transformation d'épices | 23 390,82 | 8 740,01 | 34 185,21 |
| Aliments pour bétail | 50 675,64 | 31 699,51 | 44 277,63 |
| Détergents & produits ménagers | 72 900,07 | 40 709,92 | 75 110,36 |
| Savonnerie industrielle | 32 506,73 | 17 367,53 | 35 324,80 |
| Cosmétiques naturels | 79 668,02 | 45 939,27 | 78 700,42 |
| Peintures industrielles | 151 617,40 | 107 151,25 | 103 754,36 |
| Adhésifs & colles | 89 985,38 | 60 030,38 | 69 895,00 |
| Engrais & pesticides | 131 911,75 | 97 789,82 | 79 617,83 |
| Hygiène & désinfection professionnelles | 64 444,46 | 36 286,31 | 65 702,36 |
| Produits chimiques industriels | 156 017,15 | 93 947,15 | 144 830,00 |

## Références internes des prix (pas de lien d’achat dans le BP)
- Axess Industries — 19.1085.01 : 273,00 EUR HT, consulté le 2026-10-28. https://www.axess-industries.com/manutention/transpalettes/manuels/transpalette-manuel-professionnel-2500-kg-p-191085
- Axess Industries — 18.0658.01 : 139,00 EUR HT, consulté le 2026-10-28. https://www.axess-industries.com/manutention/diable-de-manutention/professionnels/diable-a-dossier-legerement-incurve-p-180658
- Axess Industries — 202.1638.01 : 248,56 EUR HT, consulté le 2026-10-28. https://www.axess-industries.com/manutention/de-futs/diables-a-futs/a-futs-plastiques-de-120-a-220-l-p-12021638
- Matériel Horeca — Tournus GL886 : 447,81 EUR HT, consulté le 2026-10-28. https://www.materiel-horeca.com/fr/8653-chariot-de-service-3-plateaux-tournus-800x530mm-3660171095891.html

L’éco-participation annoncée de 2,26 EUR par chariot GL886 est ajoutée par prudence au prix affiché. Les quantités ne sont pas des préconisations contractuelles des fournisseurs.

## Limites restant à confirmer
Sol, accès, charge utile réelle, masse avec tare, compatibilité des fûts et palettes, sécurité et nettoyage. Le déplacement au sol ne remplace pas un chariot élévateur ou une dépalettisation en hauteur : déchargement par transporteur supposé compris dans les provisions de transport. Les IBC comprennent leur base : pas de palettes ajoutées en double à l’UP Adjuvants. Les quantités et frais livrés peuvent évoluer avec le site ; aucune disponibilité ou offre négociée en Côte d’Ivoire n’est revendiquée.
Les matières, formulations, recettes, prix producteur, débouchés et performances techniques demeurent au statut indiqué dans chaque BP. Les calculs sont des simulations indicatives, pas des dossiers bancaires ou industriels validés.

## Contrôles
Génération des données, audit des 18 simulations et génération HTML réussis. 25 suites Node réussies : réconciliation des budgets, absence de double compte, apports et dettes, amortissements spécifiques, entretien réellement intégré, trésorerie, bilans, absence de changement de prix/volumes et conservation des anciens dossiers. Parcours navigateur Découverte → Pro réussi avec reprise des détails et de l’apport personnel total. Contrôle visuel de la rubrique 7 effectué.

## Fichiers modifiés
- data/p2i-bp-manutention-couts.json
- scripts/build-bp-decouverte-donnees.cjs
- scripts/audit-simulations-decouverte.cjs
- js/p2i-bp-decouverte-simulation-commune.js
- js/p2i-bp-decouverte-v108-contexte.js
- js/p2i-bp-decouverte-v108-layout.js
- js/p2i-bp-passage-pro.js
- data/p2i-bp-decouverte-donnees.json
- data/p2i-bp-decouverte-audit-simulations.json
- js/p2i-bp-decouverte-donnees.js
- business-plan-decouverte.html et business-plan-decouverte-v108.html
- tests/check-p2i-investissements.cjs
- tests/check-p2i-bp-simulations.cjs
- tests/check-p2i-hygiene-professionnelle.cjs
- tests/qa-parcours-decouverte-pro.cjs
- tests/fixtures/p2i-avant-manutention-2026-10-28.json
- docs/livraisons/couts-financement-2026-10-28.md

Publication uniquement sur refonte-bp-decouverte-17-rubriques. main inchangée. Les simulations personnelles enregistrées ne sont pas migrées ou augmentées automatiquement.
