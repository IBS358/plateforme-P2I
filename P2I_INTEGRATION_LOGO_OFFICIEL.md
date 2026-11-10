# P2I — intégration du logo officiel

Branche de préparation du remplacement du logo sur les pages et documents P2I.

Le fichier source est `p2i-logo-officiel.png` (114 × 101 px), conservé dans le kit local `P2I_Logo_Officiel_Integration_20261111.zip`.

**Important :** ce dépôt ne contient pas encore le fichier PNG officiel ni son intégration sur toutes les pages. Le kit comprend un script d'audit et d'insertion prudente dans les en-têtes HTML. Les exports PDF et documents statiques doivent être contrôlés séparément. Aucun calcul industriel ou financier ne doit être modifié.

Procédure : décompresser le kit à la racine du dépôt, lancer `python3 tools/integrer_logo.py .` puis `python3 tools/integrer_logo.py . --apply`, vérifier les pages, et soumettre une PR vers `main`.
