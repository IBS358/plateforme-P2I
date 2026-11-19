# Lot 385 — Rapport de validation technique

Date : 19 novembre 2026. Base : archive `P2I_Lot385_Integration_Historique_Metallurgie_Sans_Recalcul.zip`.

## Résultat

- Tableau de bord local créé pour les huit BP : sept dossiers actifs du lot 352 et le BP historique Mobilier du lot 229, identifié comme référence non validée.
- Les sept BP du lot 352 et le BP historique Mobilier exposent chacun les 17 rubriques attendues.
- Les huit documents ont un lien de retour au tableau de bord et une commande d’impression utilisable avec Microsoft Edge pour enregistrer en PDF.
- Les liens internes locaux contrôlés ne comportent plus de cible cassée. Le lien vers la galerie du mobilier et le lien vers l’index d’Assemblage utilisent leurs chemins existants dans l’archive.
- La matrice de suivi complémentaire contient 96 UP. Les huit lignes Métallurgie & Mécanique sont marquées `INTEGRE_NAVIGATION_LOT385`. Les valeurs antérieures des autres 88 lignes et toutes les colonnes sources restent identiques.
- Les 18 fichiers protégés financiers, équipement et moteur v107 ont des SHA-256 identiques avant/après. Les pages BP n’ont été modifiées que sur leurs attributs de navigation et de source d’image ; le contenu des rubriques, y compris les résultats financiers affichés, est identique après normalisation de ces attributs.
- Aucune simulation financière n’a été exécutée.

## Limites fonctionnelles

Le bouton d’impression produit le PDF à partir de la page affichée. L’archive ne contient pas de service BP Pro connecté : cette étape demeure un point de parcours informatif, sans personnalisation active. Les BP restent dans leurs statuts historiques et ne sont pas déclarés financièrement validés par ce lot technique.

Les vérifications portent sur les liens locaux, les identifiants des rubriques, les empreintes et la continuité de matrice. Les destinations de liens web fournisseurs ne sont pas validées par une navigation réseau.

Voir `LOT385_CONTROLE_AVANT_APRES.json`, `SHA256_AVANT.json` et `SHA256_LOT385.txt` pour les détails de contrôle.
