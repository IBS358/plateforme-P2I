# Simulations BP Découverte — lot économique du 26/10/2026

Ce lot suit les règles du fichier racine AGENTS.md : le Découverte est un ordre de grandeur calculé à partir de prix catalogue ou de budgets de référence identifiés et d’hypothèses explicites. Aucun devis signé, accord fournisseur, certification de prix ou condition commerciale négociée n’est exigé.

## Résultat effectivement disponible

Quatre configurations complètes sur trois UP, sur les 96 UP et 100 configurations actuellement recensées. Les 93 autres UP restent à alimenter en simulations complètes; ce lot ne prétend pas les avoir finalisées.

| UP / configuration | Budget équipements USD | Investissement de simulation USD | CA A1 USD | Résultat net A1 USD |
|---|---:|---:|---:|---:|
| biscuiterie / crackers | 450,000.00 | 605,000.00 | 1,361,676.76 | 521,274.02 |
| biscuiterie / biscuits_mous | 160,000.00 | 260,000.00 | 946,017.60 | 258,855.95 |
| jus_boissons / référence | 94,010.01 | 141,110.01 | 411,600.00 | 60,287.10 |
| aliments_betail / référence | 32,000.00 | 62,000.00 | 220,500.00 | 15,857.98 |

Les résultats ci-dessus sont des résultats de simulation, pas des données observées ou des promesses de rentabilité. La réserve initiale supplémentaire est calculée séparément et n’est pas incluse dans la colonne investissement.

## Prix d’équipement et périmètres

- **Jus pressés** : unité MFPU-500-MG, catalogue Czech Brewery System, 83 990 EUR hors TVA; conversion au taux daté P2I de 1,1193 USD/EUR. La fiche regroupe préparation, pressage, traitement thermique et remplissage. Capacité annoncée en fruits entrants; les quantités de jus de la simulation sont exprimées en kg, pas en litres.
  Source : https://eshop.czechminibreweries.com/product/mfpu-500-mg/
- **Aliments pour bétail** : ensemble Small Line TCPEL, fourchette publiée de 24 500 à 32 000 USD FOB Qingdao; simulation à la borne haute de 32 000 USD. Cette borne n’est pas présentée comme un devis individuel. Le calcul retient une cadence prudente de 500 kg/h et un conditionnement manuel.
  Source : https://tcpel.net/pellet-production-line/feed-pellet-production-line/
- **Crackers** : budget utilisateur de 450 000 USD pour la ligne intégrée de 500 kg/h, maintenu sans substitution. Ce budget n’est pas requalifié en prix catalogue retrouvé.
- **Biscuits mous** : simulation historique V106 conservée.

Les fiches publiées décrivent les ensembles; elles ne prouvent pas une réception industrielle sur un site ivoirien. Les besoins d’alimentation, raccordement, hygiène et capacité des auxiliaires restent explicitement des points de dimensionnement. Ils n’empêchent pas le calcul indicatif et seront approfondis dans le Pro.

## Hypothèses économiques

`data/p2i-bp-decouverte-simulations.json` contient les hypothèses par activité et leurs méthodes : utilisation, rendement, ventes, prix de vente, matières, emballages, énergie, salaires, maintenance, frais commerciaux et complémentaires. Aucun de ces montants estimés n’est étiqueté prix marché constaté ou prix fournisseur.

Les opérateurs et la maintenance industrielle des deux nouvelles UP sont inclus dans leur coût de production, sans seconde déduction. Le responsable et les autres frais restent hors CPV. Crackers utilise sa propre recette et ses propres coûts industriels; ses hypothèses commerciales et administratives sont distinctes de celles des Biscuits mous. Le programme de production Crackers est piloté par les ventes : stock final de 18 000 kg en A1, 30 000 en A2 et 35 000 en A3.

Les conventions communes (8 % de dette, durée 60 mois, amortissement 10 ans, TVA 18 %, IS 25 %, délais clients standard) sont des hypothèses modifiables, pas des conditions bancaires négociées ni un avis fiscal. Le même moteur commun que le pilote calcule les quatre scénarios; les limites existantes du modèle TVA/IS et du calendrier fiscal restent décrites dans les entrées.

## Fichiers et contrôles

- AGENTS.md : règles persistantes du projet pour les prochaines reprises.
- data/p2i-bp-decouverte-simulations.json : prix publiés et hypothèses éditables.
- data/p2i-bp-decouverte-donnees.json et js/p2i-bp-decouverte-donnees.js : référentiel central généré.
- scripts/build-bp-decouverte-donnees.cjs : construction des entrées propres à chaque activité.
- js/p2i-bp-decouverte-simulation-commune.js : réutilisé, avec prise en charge d’une UP sans variante nommée.
- js/p2i-bp-decouverte-v108-layout.js : restitution des résultats, prix et hypothèses, équipements fonctionnels des deux nouvelles UP.
- js/p2i-bp-passage-pro.js : reprise de la référence centrale et des paramètres dans le Pro initial.
- data/p2i-bp-decouverte-audit-simulations.json : audit indicatif distinct des exigences documentaires du Pro.
- tests/check-p2i-bp-simulations.cjs : quatre jeux complets, sensibilité prix, bilans, financement, stocks et horizons.
- tests/qa-parcours-decouverte-pro.cjs : transfert réel des pages Jus et Aliments pour bétail, en plus des variantes Biscuiterie et du Nettoyage.

Commandes : `npm test`, `npm run test:browser-v108`, `npm run test:parcours`, `node scripts/audit-simulations-decouverte.cjs`.

## Essais directs sur un déploiement de la branche

- business-plan-decouverte.html?unit_id=jus_boissons
- business-plan-decouverte.html?unit_id=aliments_betail
- business-plan-decouverte.html?unit_id=biscuiterie&configuration_id=crackers

Les paramètres peuvent être recalculés et exportés, puis transmis au BP Pro initial. Le parcours amont n’a pas été modifié. Main n’a pas été modifiée.
