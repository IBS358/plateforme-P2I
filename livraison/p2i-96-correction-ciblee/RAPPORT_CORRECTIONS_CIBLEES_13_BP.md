# Rapport — correction ciblée des 13 BP Découverte

## Source et périmètre

- Archive source reprise sans recalcul : `P2I_96_BP_Decouverte_Consolide_Final.zip`
- SHA-256 source vérifié : `1918c5eee64e76774416044782da392d26382287ce9cea746aeba882978327f3`
- Résultats navigateur fournis : 96 UP, 77 déclarées conformes et 19 non conformes, horodatage `2026-11-21T22:21:06.353Z`.
- Seul fichier applicatif modifié : `P2I_Edge/runtime/script-18.js`.

## Correction faite

La table `identities` de `script-18.js` remplaçait les noms de 11 UP actives par des noms provenant d'autres produits/configurations. Les noms ont été alignés sur `MATRICE_96_UP.csv` pour les treize identifiants signalés : `sacs`, `emballages`, `jouets`, `joints`, `granules`, `cables`, `panneaux_solaires`, `appareils`, `led`, `tableaux`, `onduleurs`, `compteurs` et `batteries`. Deux noms étaient déjà alignés (`emballages`, `joints`). Les identifiants actifs n'ont pas été changés et aucune UP abandonnée n'a été réactivée.

La comparaison avec l'archive source confirme que ce changement ne modifie aucun autre fichier. Le logo P2I original, les photographies et illustrations historiques, les rubriques, configurations, machines, prix catalogues et données financières sont inchangés.

## Diagnostic et limites de recette

Le JSON fourni enregistre `hero=false`, `heroMain=false`, `variants=0` pour les treize unités. Il ne contient pas de journal des réponses de ressources, uniquement un message console générique pour le 404 de `conserverie_legumes`, sans URL fautive. Il est donc impossible d'identifier sûrement le fichier 404 à corriger à partir de ces éléments.

Dans l'archive exacte reprise, `index.html` charge les scripts séquentiellement jusqu'à `runtime/script-18.js`. Ce script construit les éléments `.p2i-hero` et `.p2i-hero-primary`, que le test cherche avec les sélecteurs correspondants. Les lignes de recette des treize unités signalent aussi `javascript=true` et `selectedUnit` correct. Les résultats fournis ne concordent donc pas avec le rendu attendu par le code de cette archive : ils ne démontrent pas, à eux seuls, si le navigateur a servi un autre répertoire/build ou si une autre étape de rendu retire ces éléments.

La recette Playwright complète n'a pas pu être relancée dans cet environnement : aucun exécutable Chromium utilisable n'est disponible au processus de test (le navigateur système échoue au démarrage avec une restriction `socket()`), et le navigateur de bureau ne peut pas joindre le serveur local du processus. Aucun résultat navigateur nouveau n'est revendiqué.

## Bilan vérifiable

- Contrôle statique des 13 correspondances ID/UP : 13/13 alignées après correction.
- Vérification syntaxique Node de `script-18.js` : réussie.
- Contrôle d'intégrité ZIP et inventaire des modifications : réalisé lors de la préparation de la livraison.
- Recette navigateur complète 96 UP : non exécutée ici.
- Bandeaux/variantes des 13 UP : non certifiés après modification.
- Ressource HTTP 404 de la conserverie : non identifiée, donc non corrigée.

Cette livraison contient le correctif ciblé des intitulés, mais ne constitue pas une preuve de conformité globale 96/96. La correction démontrable des associations est livrée; la résolution des blocages de recette et du 404 exige les traces réseau ou un environnement navigateur joignant le bon build.
