# P2I — Audit de couverture des référentiels UP et machines

Date : 26 octobre 2026. Branche : `refonte-bp-decouverte-17-rubriques`.

## Résultat de l'audit

- `up-data.js` : **95 entrées UP effectives** après correction d'une erreur de syntaxe (virgule manquante avant `adhesifs`).
- `machines-data.js` : **96 entrées d'origine** et **107 clés accessibles après ajout de 12 alias**, certaines clés pointant vers la même liste de machines.
- Couverture après alignement : **95/95 UP** ont une entrée `MACHINES_DATA[id]` avec un tableau `machines`.
- **Écart à résoudre : 1 UP** par rapport à l'objectif produit de 96 UP. Ne pas ajouter d'unité fictive.
- **78 UP** n'ont pas de champ `investment_breakdown` dans `up-data.js` après restauration de la fiche Peintures BTP plus détaillée.
- **78 UP** n'ont pas de champ `monthly_capacity` dans `up-data.js` après restauration de la fiche Peintures BTP plus détaillée.
- Les 95 UP disposent des champs `nom`, `filiereNom`, `description`, `capex_min`, `processus`, `avantages` et `challenges`. Ces champs ne suffisent pas à certifier un BP chiffré.

## Correspondances ajoutées

| Identifiant UP | Identifiant historique machines |
|---|---|
| epices | transformation_epices |
| peintures_btp | peintures |
| profiles | profilés |
| plastique | plastique_recyclage |
| papier | papier_recyclage |
| metaux | metaux_recyclage |
| verre | verre_recyclage |
| pneus | pneus_recyclage |
| huiles | huiles_recyclage |
| deee | deee_recyclage |
| energie | energie_services |
| eau | eau_traitement |

Ces alias ne créent pas de nouveaux équipements ni de nouveaux prix : ils pointent vers les entrées machines existantes.

## Conditions pour généraliser le BP Découverte

1. Identifier la 96e UP manquante dans le référentiel de référence avant toute création.
2. Définir une configuration industrielle de référence et, si nécessaire, ses variantes pour chaque UP.
3. Documenter la capacité, le prix de la ligne ou des machines, les coûts complémentaires et les sources.
4. Raccorder les moteurs économiques et financiers ; ne pas déduire un CAPEX complet du seul `capex_min`.
5. Conserver les horizons validés : trésorerie 12 mois, BFR mensuel 36 mois, autres états sur trois exercices.
6. Exécuter `node tests/check-p2i-reference-coverage.cjs` en plus des tests de régression BP.

**Statut :** correspondances techniques réparées ; contenu industriel et financier complet des UP restant à documenter. La couverture d'un catalogue machines ne signifie pas que les machines sont compatibles ou que leurs prix sont vérifiés.

## Complément d'audit — doublon Peintures BTP

Deux définitions de la clé `peintures_btp` étaient présentes dans l'objet JavaScript. La seconde écrasait silencieusement la première, qui possédait notamment `investment_breakdown` et `monthly_capacity`. La définition moins documentée a été retirée. Le nombre d'UP distinctes reste 95 : le doublon ne correspond pas à une 96e activité.

**Point de contrôle supplémentaire :** la fiche conservée contient `capex_min: 95000` et `investment_breakdown.total: 83000`. Ces deux montants ne doivent pas être assimilés à un CAPEX consolidé sans analyse de leur périmètre respectif.
