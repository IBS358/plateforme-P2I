# P2I — Transmission à ChatGPT Work (03/11/2026)

## Mission immédiate
Débloquer l'UP **Fabrication de mobilier métallique professionnel & équipements de stockage** : elle figure dans le sélecteur des 96 UP mais son BP ne se charge pas. Préserver les autres UP, le moteur commun et les 17 rubriques. Ne pas multiplier les essais demandés à l'utilisateur.

## Dépôt et interdictions
- Dépôt : IBS358/plateforme-P2I
- Branche de travail obligatoire : **refonte-bp-decouverte-17-rubriques**.
- Ne pas modifier **main** et ne pas publier Netlify sans autorisation.
- Netlify historique : https://app.netlify.com/projects/ephemeral-bavarois-8f7472/overview
- Correctif : correctifs/lot43 ; test : tests/bp-decouverte-navigation.cjs ; workflow : .github/workflows/p2i-bp-navigation.yml.
- **Attention** : le correctif GitHub ne contient pas l'archive complète du Lot 43.

## Archives locales de référence
- Lot 40 : BP_Textile_Lot_01_40_Mobilier_Correction_Erreur_Render_96UP.zip (576 entrées, 144 Mo). Base où les autres UP fonctionnaient ; contient moteur parallèle mobilier.
- Lot 41 : BP_Textile_Lot_01_41_Mobilier_Moteur_Commun_96UP.zip (défectueux, écran bleu).
- Lot 42 : BP_Textile_Lot_01_42_Mobilier_Moteur_Unique_TEST.zip (défectueux).
- Lot 43 : BP_Textile_Lot_01_43_Mobilier_Chargement_Corrige_TEST.zip (576 entrées, 144 Mo), **non validé en navigateur**.
- Lot 43 allégé : P2I_Lot43_Edge_Allege_TEST.zip (522 entrées, 77 Mo), téléchargement ChatGPT HTTP 404.
- Point d'entrée : P2I/business-plan-decouverte.html.
- Si Work ne peut pas accéder aux archives locales de la conversation, demander explicitement la pièce jointe nécessaire, sans supposer qu'elles sont sur GitHub.

## Empreintes SHA-256 vérifiées
Lot 40 ZIP : c4bb1aa0e97fefd9d5a4bf6acacc492d85fdc020773c5e97a22e5e29aa98a0bc
Lot 43 ZIP : 96402025cf6930daf4daf346170f3d0643f2a62ea45f958fe971fe5c77d8d71d
Lot 40 HTML : aa2e6fd86512d3c26ce806f89821c4a63aaba1467cab5c46424ee727a790cfbb
Lot 43 HTML : 03a214f04609dac8ebe2c95a0fc196b0288869a4999efcc02b6b9c26766e1a9f

## Diagnostic
Identifiant historique interne recyclage_metaux mais nom public mobilier métallique. Plusieurs référentiels contiennent encore des machines de recyclage. Lot 40 contient le moteur parallèle window.P2I_RENDER_MOBILIER ; Lot 43 le retire et protège les champs facultatifs revueConfig.motifs, prix_equipement.fonctions et appro.importations. La syntaxe a été vérifiée mais le fonctionnement dans Edge **n'a pas été prouvé**.

## Livrables Work
1. Reconstituer et intégrer les fichiers complets sur la branche de travail sans écraser les changements plus récents.
2. Corriger sélection immédiate, actualisation et navigation retour.
3. Rendre le BP mobilier avec le moteur commun, les 17 rubriques, cinq produits et neuf postes.
4. Tester en navigateur réel : mobilier -> actualisation -> Outillage manuel -> mobilier ; vérifier erreurs JS, tableaux financiers et 96 UP.
5. Fournir une livraison GitHub accessible et un rapport de validation factuel. Ne pas modifier main/Netlify.
