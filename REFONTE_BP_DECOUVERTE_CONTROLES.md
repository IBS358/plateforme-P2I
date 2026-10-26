# Livraison intégrée BP Découverte — 26 octobre 2026

Branche : `refonte-bp-decouverte-17-rubriques`. Aucune modification de main.

## Consultation

Démarrer `python -m http.server 8765` à la racine puis ouvrir
`http://localhost:8765/bp-decouverte-consultation.html`.
Cette page réutilise le rendu et la feuille de style V106 des 17 rubriques,
avec emplacements photographiques conservés, sélecteur des UP, liens représentatifs et
état documentaire explicite. Elle fonctionne sans authentification et
n’écrit aucune simulation ni sélection dans le stockage utilisateur.
La page historique conserve ses moteurs et propose un lien vers la consultation.

## Règles en vigueur

- Financement : 30 % d’apport et 70 % de dette sur CAPEX complet documenté.
- BFR mensuel : 36 mois. Trésorerie : 12 mois. Autres états : 3 exercices.
- Réserve de trésorerie distincte; aucune valeur manquante remplacée par zéro.
- Crackers : référence P2I de 500 kg/h à 450 000 USD pour les équipements;
  justificatif fournisseur manquant. Ce prix ne vaut pas CAPEX total.
- Les règlements clients 40 % comptant / 60 % à 30 jours de Crackers
  sont des hypothèses de BFR distinctes de la structure de financement.

## Portée réelle

95 UP distinctes, 99 dossiers de configuration (trois variantes Biscuiterie
et trois activités Nettoyage). Aucun BP intégralement validé/documenté.
La 96e UP n’est pas identifiable dans le référentiel actuel.
Le registre photographique est vide : aucune photographie avec droits vérifiés
n’est disponible dans cette branche; les zones de repli graphiques restent actives.
Les variantes d’autres UP ne sont pas inventées : leur liste reste à établir.

Le contrôle documentaire `P2I_BP_PUBLICATION` est distinct du validateur
arithmétique financier. Il exige référence, capacité, prix EXW/FOB sourcé,
fonctions, utilités, interfaces, sécurité, hypothèses, CAPEX rapproché et états
financiers cohérents. Sans dossier de preuves fourni, il maintient le statut
incomplet. Les données d’essai des tests ne sont jamais chargées par les pages.

La fiche fabricant QHBake a été relue : les données techniques annoncées
sont conservées comme documentation candidate uniquement. Aucun prix n’en
est déduit et la ligne pilote retenue n’est pas remplacée.

## Contrôles reproductibles

`node scripts/test-bp-decouverte.cjs` exécute toutes les suites Node et échoue
sur la première erreur. `node scripts/audit-bp-decouverte-publication.cjs`
régénère le rapport des blocages par configuration.

La recette visuelle réelle desktop/mobile/PDF reste à confirmer : aucun
navigateur local disponible et téléchargement Chromium inutilisable dans cet
environnement. Les tests Node ne prouvent pas la fidélité aux captures V106.
La recette DOM avec jsdom couvre neuf parcours, la navigation, les variantes,
les horizons, l’isolation du stockage et le déclenchement de l’impression.

`node scripts/build-bp-decouverte-consultation.cjs` produit le fichier
`bp-decouverte-consultation-autonome.html`, ouvrable directement sans serveur.
Les liens vers dashboard/BP Pro nécessitent la plateforme complète.

## Données empêchant la finalisation

Identité de la 96e UP; variantes hors Biscuiterie/Nettoyage; configuration
cohérente par variante/capacité; preuves fournisseurs datées et périmètre des
prix; capacités effectives, utilités et interfaces; coûts complémentaires;
hypothèses économiques sourcées et justificatifs des états financiers.

## Correction d’intégration du référentiel

La page historique chargeait encore `js/up-data.js`, copie contenant le
doublon Peintures BTP déjà corrigé dans `up-data.js`. Elle charge désormais
le même référentiel canonique que les générateurs, l’audit et la consultation.
Un test interdit le retour à la copie historique sur cette page.

Validation locale : 19 suites Node réussies, deux recettes DOM de neuf
parcours chacune (page modulaire et paquet autonome). Le workflow GitHub
Actions couvre ces contrôles et la reproductibilité des fichiers générés.
Il a été configuré; son exécution distante n’est pas présumée réussie.
