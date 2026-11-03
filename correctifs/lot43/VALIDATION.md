# Validation du correctif P2I Lot 43 — 3 novembre 2026

## Résultat vérifié

Le correctif du dossier `correctifs/lot43` a été reproduit sur le fichier `P2I/business-plan-decouverte.html` du Lot 40. **Le résultat est strictement identique, caractère par caractère, au fichier HTML inclus dans l'archive Lot 43** (`BP_Textile_Lot_01_43_Mobilier_Chargement_Corrige_TEST.zip`). Ce contrôle porte sur le fichier HTML, pas sur l'intégralité de l'archive.

Les corrections incluent : suppression du moteur parallèle `P2I_RENDER_MOBILIER`, appel au rendu commun, garde-fous pour `revueConfig.motifs`, `prix_equipement.fonctions` et `appro.importations`.

La compilation statique des 20 blocs JavaScript de la copie corrigée a réussi sans erreur de syntaxe.

## Limites importantes

- **Aucun test de bout en bout dans Edge n'a réussi dans l'environnement d'exécution.** Chromium renvoie `ERR_BLOCKED_BY_ADMINISTRATOR` à l'ouverture du fichier local. Le test `page.set_content` n'a pas abouti non plus.
- Le chargement visuel, le passage entre UP, les 17 rubriques et les tableaux financiers **ne sont donc pas validés en navigateur**.
- Ce correctif ne contient pas le ZIP autonome ni les images du Lot 40.
- Ne pas déployer sur Netlify ni fusionner dans `main` avant validation.

## Procédure locale

1. Conserver le dossier P2I du **Lot 40**.
2. Télécharger `appliquer-correctif-lot43.ps1` depuis GitHub, puis le placer dans ce dossier P2I, au même niveau que `business-plan-decouverte.html`.
3. Exécuter le script dans PowerShell depuis ce dossier. Il crée une sauvegarde avant modification et refuse un fichier source non reconnu.
4. Si un test local échoue, restaurer le fichier `business-plan-decouverte.html.sauvegarde-lot40`.

La branche `main` et Netlify restent inchangés.
