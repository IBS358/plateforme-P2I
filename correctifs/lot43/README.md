# P2I — Correctif du chargement de l'UP mobilier métallique (Lot 43)

Ce dossier publie le correctif source reproductible du Lot 43 sur la **branche de travail uniquement**. Il ne contient pas les 144 Mo de l'archive complète.

## Vérification de reproductibilité

Le script a été comparé à partir du HTML du Lot 40 : après suppression du moteur parallèle et correction des accès aux champs facultatifs, le fichier résultant est **identique, caractère par caractère**, au HTML contenu dans le ZIP Lot 43. Cela ne constitue **pas** une validation du rendu dans Edge.

## Application locale — uniquement sur le Lot 40

1. Ouvrir le fichier [appliquer-correctif-lot43.ps1](./appliquer-correctif-lot43.ps1), puis utiliser le bouton **Download raw file** de GitHub.
2. Copier ce fichier dans le dossier `P2I` extrait du **Lot 40**, à côté de `business-plan-decouverte.html`.
3. Ouvrir PowerShell dans ce dossier et exécuter `powershell -NoProfile -File .\appliquer-correctif-lot43.ps1`.
4. Le script sauvegarde automatiquement le HTML original sous `business-plan-decouverte.html.sauvegarde-lot40` avant de modifier le fichier.

Le script refuse de modifier un HTML dont il ne reconnaît pas la signature. Il ne modifie pas GitHub, Netlify ni la branche `main`.

**Ne pas déployer en production :** les tests visuels et financiers complets restent à réaliser.

Rapport : [VALIDATION.md](./VALIDATION.md).
