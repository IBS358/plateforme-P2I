# P2I — intégration du logo officiel (PR n° 3)

## État vérifié

- Branche de travail : `p2i-identite-logo-officiel-20261111` ; **ne pas modifier `main` directement**.
- Le composant `assets/p2i-logo-officiel.js` est raccordé aux pages HTML principales, dont `business-plan-decouverte.html`.
- Le composant remplace l'icône de l'en-tête **seulement après chargement réussi** du PNG. Si le PNG est absent, l'ancien en-tête reste visible.
- **Blocage :** le PNG original `assets/p2i-logo-officiel.png` (114 × 101 px, SHA-256 `9fb3430c55db0841c84e5281ec1c0e90c357d7eb54fef2a3bb03ef50f71cbbaf`) n'est pas encore enregistré sur cette branche. Le PNG est présent dans les archives locales livrées séparément.
- Les 96 BP, les BP Pro et les exports PDF ne sont pas validés. Les anciens fichiers historiques ne sont pas modifiés.

## Finalisation

1. Déposer **le fichier original exact** sous `assets/p2i-logo-officiel.png` sur cette branche, sans redessin ni compression avec perte.
2. Vérifier son SHA-256 et le rendu dans Microsoft Edge sur les pages d'accueil, filières, production, BP Découverte et autres pages.
3. Exécuter les tests `python3 -m unittest discover -s tests -p 'test_logo_officiel.py'`.
4. Inspecter les couvertures, en-têtes et exports PDF (génération HTML et JS) ; traiter les manques sans altérer les calculs.
5. Examiner le diff et fusionner la PR uniquement après validation.

## Avertissement

Le script `tools/integrer_logo.py` ajoute des images dans certains conteneurs `.logo`, mais il ne remplace pas à lui seul toutes les anciennes icônes ni les documents PDF. **Ne pas l'exécuter en masse sur les pages déjà raccordées sans audit des doublons.**
