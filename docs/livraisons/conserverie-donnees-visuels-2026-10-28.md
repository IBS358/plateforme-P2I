# Conserverie : données et visuels de la poche rétablis

La suppression de l’ancien scénario en verre avait laissé la nouvelle référence en poche sans prévisions ni illustrations. Cette livraison remplace le dossier vide par une simulation indicative et un atlas propre au conditionnement en poche.

## Présent dans le BP

- Identité « Sauce tomate en poche stérilisable », produit illustratif P2I TOMATE 400 g, atelier et sept photographies de postes distincts, numérotés de 01 à 07. Images générées par IA, pas des modèles fournisseurs.
- Prix catalogue de gamme : ligne GELGOOG 100 000 USD ; deux autoclaves 1 000 L à 25 000 USD chacun, borne haute publique. Aucun second poste de remplissage ou thermoscellage ajouté à la ligne. L’option poche et le périmètre exact de la ligne restent à rapprocher du fournisseur.
- Budget équipements 150 000 USD ; CAPEX de simulation 217 227,20 USD avec les provisions complémentaires et la manutention. Les frais complémentaires sont des estimations P2I, pas des devis livrés.
- Emballage provisoire 0,16496 USD/poche, soit 0,4124 USD/kg de produit : prix de gamme PB-20728 plus frais, marquage et regroupement estimés. Dimensions, impression incluse ou non, compatibilité et coût livré à préciser.
- États recalculés par les moteurs communs : résultat sur trois ans, financement 30/70, stock d’emballages dans le BFR 36 mois et réserve en apport, trésorerie 12 mois, bilans ; transmission au Pro.

## Hypothèses et résultat réel de la simulation

Les volumes restent 300/390/450 t par an et le prix de vente 1,25 USD/kg en A1 puis +2 %/an. Ils sont des hypothèses P2I, pas des ventes prouvées ni des prix ivoiriens vérifiés. Aucun relèvement pour fabriquer une marge.

La cadence cible est 400 kg/h. Deux autoclaves supposés charger chacun 300 kg utiles par cycle total de 90 minutes donneraient 400 kg/h combinés. Charge utile, cycle thermique, manutention des paniers, utilités et compatibilité de la recette ne sont pas garantis par le catalogue ; ils restent à établir. Les autres hypothèses matières et exploitation sont explicitement estimées.

| Exercice | Résultat après IS simulé | Marge nette |
|---|---:|---:|
| A1 | −16 505 USD | −4,4 % |
| A2 | 7 663 USD | 1,5 % |
| A3 | 20 244 USD | 3,5 % |

**La simulation est consultable et calculable, mais elle n’atteint pas la performance recherchée par la P2I et n’est pas un projet rentable validé.** Les chiffres ne sont pas masqués. L’étude de compétitivité doit encore porter sur les vrais prix de vente, intrants, configuration industrielle et coûts de conditionnement. Le prix mathématique diagnostiqué par le moteur n’est pas appliqué automatiquement.

Les anciens dossiers en verre restent archivés et recalculables avec leurs entrées. Leurs visuels et chiffres ne sont pas transposés au nouveau dossier.

## Fichiers et vérification

Profil et sources : `data/p2i-bp-lot-agro-01.json`. Retrait du remplacement par un dossier vide : `scripts/p2i-emballages-commun.cjs`. Affichage et séparation des anciens dossiers : `js/p2i-bp-decouverte-v108-layout.js`. Illustrations : `assets/bp-agro/postes-conserverie-poche-ia.jpg`, styles et provenance. Référentiels, audit et deux pages HTML autonomes régénérés.

29 suites Node et trois recettes Chromium réussies : consultation des 96 UP, sept postes illustrés, tous les états, passage réel au Pro, anciens dossiers et absence d’erreurs JavaScript. Contrôle visuel du bandeau produit et du bloc 17 effectué. Design et 17 rubriques conservés. Main non modifiée.

Périmètre : 21 simulations indicatives sur 19 UP, 77 UP encore à alimenter. Aucune confusion entre simulation calculable et dossier industriel/financier validé.
