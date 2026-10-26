# P2I — parcours intégré Découverte vers Pro initial

La page réellement chargée par la P2I, `business-plan-decouverte.html`, contient désormais la V108 (design des captures V106, 17 rubriques dont les blocs 16 et 17). L'ancienne page de la branche est conservée dans `business-plan-decouverte-avant-integration-v108.html`; l'ancienne page main est conservée dans `business-plan-decouverte-avant-v107.html`.

## Essai

1. Servir le dépôt par HTTP (ou déployer la branche de travail). Aucun changement de main n'est nécessaire.
2. Ouvrir `fiche-production.html?unit_id=biscuiterie&configuration_id=biscuits_mous` depuis une session P2I connectée et cliquer sur le BP Découverte. La fiche crée une simulation puis transmet son véritable identifiant. Le dashboard peut rouvrir cette simulation.
3. Dans le BP Découverte, choisir une variante, recalculer les paramètres disponibles, puis cliquer « Passer au BP Pro » au bloc 16.
4. Le BP Pro existant s'ouvre en aperçu initial. Son bloc 6 reprend les données, sources et calculs du BP Découverte. Le reste du formulaire Pro est conservé, ainsi que les contrôles d'accès existants.
5. Le bloc 6 recalcule les hypothèses complètes par `P2I_BP_SIMULATION_COMMUNE`, qui appelle les moteurs communs économique, financier, BFR et trésorerie. Il présente les trois années, 36 BFR et 12 mois de trésorerie. Investissement et prix A1 sont personnalisables; toutes les autres entrées sont conservées et consultables. L'export contient le dossier repris complet.
6. L'enregistrement explicite du Pro conserve également le dossier Découverte dans la propriété `decouverte` du dossier local Pro. Les brouillons issus du passage sont séparés par variante. Le rechargement du même onglet conserve les paramètres personnalisés. Le dashboard reconstitue également le passage depuis le dossier Pro enregistré, avec vérification du propriétaire.

Le transport entre pages utilise un identifiant aléatoire et le stockage de session du même onglet (24 heures). Les paramètres ne sont pas placés dans l'URL. Une simulation privée exige le même propriétaire connecté dans les deux pages. Un passage expiré ou absent exige de revenir au Découverte. Le lien direct suivant permet un essai de référence sans compte : `business-plan-decouverte.html?unit_id=biscuiterie&configuration_id=biscuits_mous`.

## Contrôles

- `npm test` : suites Node des référentiels, sources et moteurs.
- `npm run test:browser-v108` : consultation des 95 UP et restauration/sauvegarde du Découverte.
- `npm run test:parcours` : serveur HTTP et vraies pages, fiche UP, passage des trois variantes et du nettoyage, égalité des états financiers, personnalisation, rechargement, enregistrement du Pro, rejet d'un autre propriétaire.
- Les essais propriétaires utilisent un client Supabase simulé : aucun compte réel ni aucune ligne de production n'ont été modifiés. Un essai connecté sur l'environnement déployé reste nécessaire pour vérifier les politiques Supabase effectives.

## Qualification des données

Aucun BP n'est déclaré industriellement ou financièrement validé. Biscuits mous dispose d'une simulation complète issue des hypothèses historiques; Crackers d'un calcul industriel partiel propre; Biscuits durs et les autres UP restent incomplets. Les chiffres non documentés restent signalés. Le financement du CAPEX est 30/70; la réserve initiale supplémentaire est explicitement séparée. 95 UP distinctes sont présentes dans le référentiel, pas 96.

## Principaux fichiers

- `business-plan-decouverte.html`, `business-plan-decouverte-v108.html` : pages compilées identiques.
- `scripts/build-bp-decouverte-v108.cjs` : génération reproductible des deux pages.
- `js/p2i-bp-decouverte-v108-layout.js`, `...-contexte.js` : transmission et restauration.
- `fiche-production.html`, `dashboard.html` : ouverture de la bonne simulation.
- `business-plan-pro.html`, `js/p2i-bp-passage-pro.js` : reprise dans le Pro existant, moteurs communs, personnalisation et conservation des paramètres.
- `tests/qa-parcours-decouverte-pro.cjs` : recette du parcours intégré.

Les deux erreurs JavaScript du Pro corrigées étaient une balise script insérée dans le modèle HTML d'export et une accolade manquante dans la restauration des dossiers.
