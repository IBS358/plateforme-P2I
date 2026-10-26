# P2I — BP Découverte V108

## Installer cette version pour essai

1. Sauvegarder d’abord votre `business-plan-decouverte.html` actuellement dans
   main, sous un autre nom.
2. Copier tout le contenu de `business-plan-decouverte-v108.html` dans
   `business-plan-decouverte.html`. Le paquet d’intégration fournit directement
   ce nouveau contenu sous le nom `business-plan-decouverte.html`.
3. Aucun fichier supplémentaire à déployer pour cette page : moteurs,
   référentiels, styles, illustrations et SDK de connexion sont incorporés.
4. Tester les trois références :
   - `?unit_id=biscuiterie&configuration_id=biscuits_mous`
   - `?unit_id=biscuiterie&configuration_id=crackers`
   - `?unit_id=biscuiterie&configuration_id=biscuits_durs`
5. Pour une simulation personnelle, ouvrir depuis la P2I connectée
   `business-plan-decouverte.html?simulation_id=IDENTIFIANT`.

Le mode de référence fonctionne aussi en fichier local. La restauration d’une
simulation nécessite l’origine Web P2I où la session utilisateur est ouverte;
un fichier téléchargé ne peut pas reprendre la session d’un site distant.

La V107 est conservée, ainsi qu’une copie de l’ancienne page de main provenant
du commit `f628407977af66feb06e867761ddb4776f8b1c90`. Ces copies ne remplacent
pas la sauvegarde de votre propre fichier si votre main a évolué depuis.
Aucune modification de main ni mise en ligne n’a été effectuée.

## Ce qui est terminé dans ce lot

- Design V106 conservé : 17 rubriques, cartes produits, bandeau et médaillon,
  bloc 16 avec bouton vert, bloc 17 avec cinq cartes techniques.
- Formage différencié : moulage rotatif de la pâte courte, mise en feuille et
  découpe des biscuits durs, laminage/calibrage/découpe des crackers. Ces voies
  doivent encore être qualifiées pour la recette et le résultat de texture.
- Illustrations de formage adaptées; elles restent générées par IA, sans modèle
  fournisseur ou spécifications garantis.
- Les trois activités Nettoyage sont consultables, avec besoins propres en
  équipements, sécurité, déchets et restitution dans les rubriques 3 et 17.
  Aucun catalogue de nettoyage ordinaire n’est substitué aux décontaminations.
- Consultation des 95 UP présentes, sans blanc ni résultats d’une autre UP.
- Affichage indicatif USD/FCFA; calculs et sauvegardes en USD. Taux de référence
  daté du 23/10/2026, avec sources BCE et BCEAO visibles en rubrique 14.
- Import/export JSON : les entrées sont validées et recalculées, jamais les
  résultats mis en cache. Les dossiers incomplets sont réouverts comme références.
- Paramètres hors contrat refusés, notamment une devise d’entrée autre que USD
  ou un stock d’ouverture non pris en charge, pour éviter un calcul silencieusement
  erroné. Le contrat chiffré actuel est celui d’une création d’activité de
  fabrication en kg/h; il n’est pas appliqué aux services.

## Restauration et enregistrement Supabase

La page réutilise le projet Supabase déjà configuré dans P2I et la session de
la même origine. Aucun nouveau schéma SQL n’est nécessaire.

- Lecture d’un dossier `user_simulations` filtré par identifiant et propriétaire
  authentifié, avec vérification de l’identité renvoyée.
- Restauration de l’UP et de la variante depuis le dossier, même si l’URL ou le
  stockage du navigateur pointaient vers un autre projet.
- Anciens identifiants numériques résolus par correspondance unique du nom d’UP;
  sans correspondance fiable, aucun projet par défaut n’est fabriqué.
- Les anciens dossiers contenant uniquement le nom et l’UP sont reconnus comme
  tels. Ils ne sont pas présentés comme des simulations financières restaurées.
- Pour ces anciens dossiers, une variante peut être choisie localement puis
  enregistrée explicitement. Si des paramètres complets existent, le bouton
  d’enregistrement des paramètres les contrôle et les recalcule avant sauvegarde.
- Aucun enregistrement automatique au chargement, changement de prix ou import.
- Les autres champs du dossier, notamment les annotations, sont conservés.
- Une modification concurrente ou un changement de session empêche la mise à jour.
- Une version financière d’une variante n’est pas déplacée vers une autre :
  changer de variante dans ce cas ouvre une référence séparée.

Les nouveaux paramètres sont stockés dans
`simulation_data.bp_decouverte_v108.entrees`. L’ancien contrat explicite
`simulation_data.bp_decouverte_entrees` est également reconnu. Les résultats
anciens, isolés, sans entrées complètes ne sont pas réinterprétés arbitrairement.

**Vérification restante :** recette authentifiée avec votre compte sur le site
P2I déployé. Les essais locaux utilisent un client propriétaire simulé; aucune
donnée réelle de votre compte n’a été lue ou modifiée durant ces essais.

## État réel des trois variantes

| Variante | Données utilisées | États disponibles |
|---|---|---|
| Biscuits mous | Base propre extraite du texte utilisateur V106 | Simulation indicative complète : 3 exercices, BFR 36 mois, trésorerie 12 mois |
| Crackers | Recette, matières, emballages, énergie, personnel industriel, maintenance et volumes du référentiel Crackers du dépôt | Calcul industriel A1; résultat net, bilans et trésorerie restent non calculables avec ces seules données |
| Biscuits durs | Budget global du prototype et description du procédé | Dossier incomplet; aucun résultat financier repris des Biscuits mous |

La V108 retire volontairement les résultats partagés artificiellement entre
variantes dans les essais V107. La V107 est conservée pour comparaison, mais
ses essais Crackers et Biscuits durs ne deviennent pas des données propres à
ces produits.

### Origine du calcul Crackers

- Recette : `js/p2i-recettes-biscuiterie.js`.
- Volumes et prix : `js/p2i-hypotheses-commerciales.js`.
- Autres coûts industriels : tableau `autresCouts` de l’ancienne page.
- Prix matières, emballages, énergie et frais industriels : hypothèses P2I
  historiques non vérifiées, pas des prix fournisseurs validés.
- Coûts calculés par les moteurs commercial et économique communs. Le personnel
  industriel et la maintenance déjà inclus ne sont pas déduits une deuxième fois.
- Le stock de 228 000 kg est théorique; capacité de stockage, durée de conservation
  et pertes restent à qualifier. La marge industrielle n’est pas un bénéfice net.

## Règles financières conservées

30 % d’apport / 70 % de dette; réserve supplémentaire distincte et à financer;
BFR sur 36 mois; trésorerie sur 12 mois; résultats et bilans sur trois exercices.
Les calculs passent par les moteurs communs du dépôt. Les bilans calculables
s’équilibrent sans ligne d’ajustement fictive.

La ligne Crackers de référence reste à 450 000 USD pour 500 kg/h. Le budget
industriel de prototype à 605 000 USD reste non ventilé et non documenté comme
CAPEX complet. La documentation Baker Perkins décrit des procédés; elle n’est
pas utilisée pour attribuer un fabricant ou un prix à cette ligne P2I.
Le contrat de simulation conserve les clients 40 % comptant / 60 % à 30 jours,
les fournisseurs comptant, un démarrage sans stock initial et une ventilation
mensuelle uniforme. Les taux de TVA, IS et dette restent des hypothèses explicites.
Aucun dossier n’est déclaré industriellement ou financièrement validé.

## Informations encore nécessaires

- Crackers : charges hors industrie, trajectoires propres A2/A3, ventilation du
  budget complémentaire et qualification des stocks et pertes.
- Biscuits durs : volumes, prix, formulation, coûts industriels, personnel,
  autres charges et budget machines documentés.
- Ensemble des UP : configurations compatibles, prix fournisseurs vérifiables,
  coûts complémentaires et hypothèses économiques documentés.
- Identité de la 96e UP : les 95 UP présentes sont accessibles. L’entrée machines
  supplémentaire `peintures` recouvre l’activité Peintures BTP et ne permet pas,
  à elle seule, d’identifier une 96e UP distincte.

## Contrôles et fichiers de maintenance

- `npm test` : 21 suites Node, dont calculs et contrôles de restauration V108.
- `npm run test:browser-v108` : recette Chromium réelle avec serveur local et
  client Supabase simulé. Le chemin d’un navigateur peut être fourni via
  `P2I_CHROMIUM_PATH`.
- `npm run build:bp-v108` : reconstruction autonome avec SDK épinglé, contrôle
  de la clé publique anon et conservation de sa licence.
- Workflow GitHub Actions étendu; son succès distant n’est pas présumé.

Fichiers principaux :
`bp-decouverte-v108-source.html`, `business-plan-decouverte-v108.html`,
`js/p2i-bp-decouverte-v108-references.js`,
`js/p2i-bp-decouverte-v108-contexte.js`,
`js/p2i-bp-decouverte-v108-layout.js`,
`js/p2i-bp-decouverte-v108-supabase-config.js`,
`css/p2i-bp-decouverte-v108.css`,
`js/vendor/p2i-supabase-v108.min.js`,
`scripts/build-bp-decouverte-v108.cjs`,
`tests/check-p2i-bp-v108.cjs`, `tests/qa-bp-v108-browser.cjs`.
Les moteurs communs existants sont réutilisés. Les sources et le prompt des
nouveaux visuels sont conservés dans `assets/bp-v108/PROVENANCE.md`.
