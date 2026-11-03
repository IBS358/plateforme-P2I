# Vérification statique du correctif Lot 43 (3 novembre 2026)

Source contrôlée : archive Lot 40 `BP_Textile_Lot_01_40_Mobilier_Correction_Erreur_Render_96UP.zip`, fichier `P2I/business-plan-decouverte.html`.

Contrôles exécutés localement sur une copie du HTML :
- signature du moteur parallèle trouvée ;
- suppression de ce bloc et réorientation du chargement vers `render()` ;
- sécurisation de `revueConfig.motifs`, `prix_equipement.fonctions` et `appro.importations` ;
- compilation des 20 blocs `<script>` avec Node.js : **0 erreur de syntaxe**.

**Non vérifié :** rendu réel dans Edge, navigation UP -> mobilier -> UP, résultats financiers, visuels, compatibilité Netlify.

**Important :** le script PowerShell ne modifie que la copie locale du Lot 40 ; le dépôt GitHub ne contient pas l'archive complète de 144 Mo. Ne pas considérer ce correctif comme une livraison de production.

La branche `main` n'est pas modifiée.
