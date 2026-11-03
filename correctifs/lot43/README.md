# Correctif P2I Lot 43 — moteur commun

Ce dossier contient le **correctif source reproductible** du Lot 43 pour le fichier `P2I/business-plan-decouverte.html` du **Lot 40**.

Il traite :
- l'accès à `appro.importations` lorsque la liste est absente ;
- l'accès à `revueConfig.motifs` lorsque la liste est absente ;
- l'accès à `prix_equipement.fonctions` lorsque la liste est absente ;
- la suppression du moteur d'affichage parallèle du mobilier ;
- le passage par le moteur commun au chargement.

**Attention : ce dossier n'est pas l'archive complète du Lot 43.** Les données, images et autres fichiers du Lot 40 doivent être présents localement. Ce correctif ne modifie pas le dépôt principal et ne publie pas Netlify. Le comportement complet dans Edge n'est pas encore certifié.

Pour appliquer localement : placer `appliquer-correctif-lot43.ps1` dans le dossier `P2I` extrait du Lot 40, puis exécuter ce script avec PowerShell. Le script crée une sauvegarde `business-plan-decouverte.html.sauvegarde-lot40` avant modification. Il refuse de modifier un fichier qui ne présente pas la signature du Lot 40 attendu.

Branche autorisée : `refonte-bp-decouverte-17-rubriques`. Ne pas fusionner dans `main` sans validation.
