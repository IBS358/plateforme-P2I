# BP Découverte V107 — installation pour essai sur la P2I

## Un seul fichier à copier

1. Dans votre copie de **main**, sauvegarder la version actuellement utilisée de
   `business-plan-decouverte.html` sous un autre nom avant remplacement.
2. Copier tout le contenu de **business-plan-decouverte-v107.html** dans
   `business-plan-decouverte.html`. Le paquet d’intégration fournit également
   directement la nouvelle version sous ce nom.
3. Aucun fichier CSS, JavaScript ou image supplémentaire n’est nécessaire pour
   cette page : référentiels, moteurs, styles et illustrations sont incorporés.
4. Tester :
   - `business-plan-decouverte.html?unit_id=biscuiterie&configuration_id=biscuits_mous`
   - `business-plan-decouverte.html?unit_id=biscuiterie&configuration_id=crackers`
   - `business-plan-decouverte.html?unit_id=biscuiterie&configuration_id=biscuits_durs`
5. Pour revenir en arrière, remettre votre sauvegarde à son nom initial.

Une sauvegarde supplémentaire **business-plan-decouverte-avant-v107.html** est
fournie : elle correspond au fichier récupéré de main, commit
`f628407977af66feb06e867761ddb4776f8b1c90`, le 26 octobre 2026.
Elle ne remplace pas votre propre sauvegarde si main a évolué entre-temps.
Aucune modification de main n’a été effectuée par l’assistant.

## Rendu demandé

- Les 17 intitulés courts du menu sont repris du texte joint.
- Les intitulés longs des rubriques suivent le texte, notamment
  **16 · Préparer mon dossier de passage** et **17 · Dossier technique Biscuiterie**.
- Bleu nuit, en-tête fixe, menu latéral défilant, présentation et quatre cartes
  de contexte, trois cartes variantes orange/rose/bleu, sélection dorée,
  bandeau illustré avec médaillon, sommaire, bandeaux dégradés, cartes chiffrées,
  tableaux contrastés et encarts verts « Pour aller plus loin ».
- Bloc 16 : référence du plan et bouton vert lumineux « Passer au BP Pro ».
- Bloc 17 : cinq étapes en pastilles et cinq cartes illustrées sur fond clair.
- Illustrations IA signalées; aucun nom de modèle fournisseur fictif.
- Pas du tableau de modèles répété après les cartes du dossier technique.

## Calculs réellement exécutés

La page appelle les moteurs communs du dépôt :
`P2I_ECONOMIC_RESULT_ENGINE`, `P2I_FINANCIAL_ENGINE`,
`P2I_BP_BFR_MENSUEL`, `P2I_BP_MOTEUR_TRESORERIE`.
L’orchestrateur `P2I_BP_SIMULATION_COMMUNE` relie les entrées, la valorisation
au coût moyen pondéré, la dette et les états. Le rendu ne contient pas de
résultats financiers figés.

- 30 % apport / 70 % dette sur le budget industriel.
- Réserve initiale supplémentaire calculée et affichée séparément, à financer.
- BFR mensuel sur 36 mois; stocks PF physiques sans ajout du stock cible.
- Trésorerie affichée sur 12 mois uniquement.
- Résultat et bilans sur trois exercices; TVA et IS hypothétiques rapprochés.
- Bilans équilibrés sans poste d’ajustement destiné à forcer l’égalité.
- Recalcul disponible en rubrique 14; export JSON enregistre le résultat courant.

## Qualification indispensable des chiffres

Les chiffres du texte V106 sont des **hypothèses de simulation**, pas des devis
ou tarifs vérifiés. Les résultats sont recalculés et diffèrent donc de la copie
V106, notamment à cause du financement 30/70 et du traitement cohérent des stocks.

La base d’exploitation complète provient de **Biscuits mous** dans le texte
fourni. Pour **Crackers** et **Biscuits durs**, cette même base est reprise
explicitement comme essai du moteur, avec les budgets respectifs fournis dans
le texte; elle n’est pas présentée comme une étude propre à ces produits.
Les budgets machines manquants ne sont pas déduits arbitrairement : celui des
Biscuits durs demeure non renseigné. La ligne Crackers reste à 450 000 USD,
500 kg/h; budget industriel de test à 605 000 USD, compléments non ventilés.

Les taux de TVA 18 %, IS 25 %, intérêt 8 %, dette 60 mois, amortissement 10 ans,
coussin de 10 %, mensualisation uniforme et proxies de coûts sont des hypothèses
visibles. Régime fiscal, TVA déductible, calendrier des versements d’IS, durée de
conservation, pertes, charges détaillées et coûts fournisseurs restent à qualifier.

## Périmètre de l’intégration

Cette version est une **page de référence pour essai**, sans écriture Supabase
ni appel fournisseur. Elle conserve les paramètres de contexte dans le lien
vers le parcours Pro. Elle ne restaure pas les valeurs financières personnalisées
d’une simulation Supabase existante; l’avertissement est affiché lorsque
`simulation_id` est fourni. Le choix local de variante déjà mémorisé peut être lu.
Les pages destination dashboard/BP Initial/Pro restent celles de la plateforme.

Les 95 UP présentes dans le référentiel sont consultables; hors pilote Biscuiterie,
les états financiers sans entrées complètes restent à documenter. La 96e UP et
les scénarios documentés propres aux autres variantes restent manquants.
Aucun des dossiers n’est déclaré industriellement ou financièrement validé.

## Contrôles et reproduction

- `npm test` : suites de régression Node, dont calculs V107 et appels aux moteurs.
- `node scripts/build-bp-decouverte-v107.cjs` : reconstruction autonome.
- `node tests/qa-bp-v107-browser.cjs` : recette Chromium; nécessite Playwright et
  un navigateur installé. `P2I_CHROMIUM_PATH` peut désigner un exécutable local.
- Recette locale réalisée avec Chromium 153 : variantes, 17 rubriques,
  95 choix UP, images chargées, recalcul, téléchargement JSON, contexte Pro,
  mobile 390 px sans débordement et impression.
- Aperçus écran des blocs 16/17 et PDF Biscuits mous produits puis inspectés.

Les captures de recette et le PDF sont dans `livraison-v107` dans les sources.
La génération visuelle utilise imagegen intégré; le prompt exact est conservé
avec les images sous `assets/bp-v107/PROVENANCE.md`.
