# Données économiques et rédactionnelles des 96 UP — livraison du 26/10/2026

## Ce qui est effectivement rempli

Le fichier central `data/p2i-bp-decouverte-donnees.json` rassemble les 96 UP des 12 filières (8 chacune), avec leurs 100 configurations actuellement recensées : les 96 configurations de base, plus deux variantes supplémentaires Biscuiterie et deux activités supplémentaires Nettoyage. Les variantes non encore identifiées restent à recenser : 100 n'est pas présenté comme un catalogue exhaustif de toutes les variantes industrielles possibles.

Chaque dossier contient des textes propres à l'UP pour le projet, le positionnement, le procédé, le marché visé, la commercialisation, les approvisionnements, les opportunités, les risques, la qualité, les utilités, l'implantation, le programme de production ou prestation, le financement, le BFR et la trésorerie. Ces textes exploitent les informations descriptives existantes du dépôt et formulent les actions à qualifier. Ils ne constituent pas des études de marché vérifiées ou des attestations de conformité.

Les données économiques recensées sont : 96 budgets minimums historiques, 95 fourchettes de CA, les CA ponctuels et les ventilations historiques lorsqu'ils existent, les marges historiques, ainsi que les fonctions d'équipements et leurs caractéristiques descriptives. Chaque montant ou indicateur a un champ source et une qualification. Les anciens budgets ne sont pas renommés en CAPEX consolidés et les anciennes marges ne sont pas transformées en bénéfices nets.

Les budgets et CA de la Biscuiterie au niveau UP ne sont pas transmis aux variantes : leurs simulations indépendantes existantes restent prioritaires. Les variantes Nettoyage ne reçoivent pas automatiquement les budgets du nettoyage ordinaire.

## Raccordement réel au BP

`js/p2i-bp-decouverte-donnees.js` est la version navigateur générée du même fichier. Elle est incorporée dans les pages Découverte compilées. `js/p2i-bp-decouverte-donnees-engine.js` adapte les données au moteur financier commun : les postes manquants restent absents et le résultat net reste non calculable. Il calcule également l'apport et la dette sur le seul repère historique, avec une qualification visible.

Les rubriques du nouveau design affichent ces contenus pour les 96 UP. Les besoins techniques spécifiques des trois activités de Nettoyage et les calculs propres aux variantes Biscuiterie sont conservés. Le dossier central est également transmis au BP Pro initial et conservé dans son export et son enregistrement.

Le parcours amont de sélection des filières, localisations et montants n'a pas été modifié.

## Source économique externe ajoutée

Barème entreprise CIE, moyenne tension générale, consulté le 26/10/2026 :
https://www.cie.ci/entreprise/tarifs-electricite

- Prime annuelle : 33 643,67 FCFA HT par kW souscrit.
- Énergie : 74,06 FCFA HT/kWh en heures pleines; 101,00 en pointe; 61,29 en heures creuses.

Le moteur exige la puissance souscrite et les consommations annuelles par plage. Il refuse les profils hors du domaine de 1 000 à 5 000 heures d'utilisation annuelle. Il calcule seulement le sous-total énergie et prime : taxes, redevances, comptage, raccordement et application du contrat ne sont pas présumés. Aucun coût annuel n'est prérempli pour une UP sans profil mesuré ou dimensionné.

## Périmètre corrigé

- `peintures` : Peintures industrielles, filière Chimie.
- `peintures_btp` : Peintures bâtiment, filière BTP.

Leurs catalogues fonctionnels restent distincts. Le budget historique de `peintures` provient du `minCapex:140` du fichier filières, en milliers de dollars; aucun CA n'est inventé pour cette UP. L'alias de parcours `profilés` est résolu vers l'identifiant de référentiel `profiles`.

## Construction et contrôles

- `npm run build:bp-donnees` : génère les données JSON et JavaScript.
- `npm run build:bp-v108` : incorpore les données et moteurs au BP.
- `npm test` : contrôles des sources, périmètre, qualification, calculs et horizons.
- `npm run test:browser-v108` : 96 UP, données propres aux deux peintures, variantes, conversions et restauration.
- `npm run test:parcours` : passage Découverte vers Pro, reprise du dossier central et contrôles de propriétaire.
- `npm run test:dom` : consultation historique et absence de régression.

Les 96 dossiers documentaires à 17 rubriques sont désormais générés dans `data/p2i-bp-decouverte-96-dossiers-17-rubriques.json`. Le précédent fichier de 95 dossiers est conservé comme archive. La matrice CSV `data/p2i-bp-decouverte-plan-consolidation.csv` suit les manques industriels et financiers des 96 UP.

## Limites restantes

Ce lot remplit et raccorde la base rédactionnelle et les repères économiques; il ne termine pas les prévisions documentées des 96 UP. Restent à obtenir, pour les configurations incomplètes : prix fournisseurs vérifiables, périmètres des lignes, capacités effectives et interfaces, coûts complémentaires, recettes ou nomenclatures, productivité, programmes de ventes, prix de vente, personnel, charges et conditions de règlement. Aucun de ces montants n'est remplacé par un zéro ou une règle arbitraire.

La simulation Biscuits mous reste complète mais indicative. Crackers conserve son calcul industriel partiel. Les autres états restent explicitement incomplets quand leurs entrées ne sont pas disponibles. Aucun dossier n'est déclaré validé ou bancable.
