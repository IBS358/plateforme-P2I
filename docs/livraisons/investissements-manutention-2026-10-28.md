# Investissements et manutention — livraison du 28 octobre 2026

## Ouvrir le BP
Décompresser BP_Investissements_Manutention.zip, puis ouvrir BP_Investissements_Manutention.html. Il ouvre Adhésifs & colles : consulter la rubrique 7. Le sélecteur permet de consulter les autres UP et les variantes Biscuiterie. Le ZIP est une consultation autonome ; le passage au Pro, vérifié dans le dépôt, nécessite la plateforme et sa page Pro.

## Modification commune
Les 18 simulations disponibles sur 16 UP affichent le contenu de leur investissement : équipements, fret, assurance, douane/transit, transport local, site, utilités, installation, pièces, sécurité, études, laboratoire et auxiliaires selon le profil. Chaque montant complémentaire est qualifié d’estimation P2I, sans prix catalogue inventé. Les 80 autres UP restent des dossiers incomplets ; leur manutention est signalée comme besoin à dimensionner.
Les totaux, le résultat net et le financement des scénarios existants sont inchangés : cette livraison explicite les enveloppes déjà utilisées. Le 30 % apport / 70 % dette, le BFR 36 mois et la trésorerie 12 mois sont conservés. La réserve initiale reste distincte.

## Manutention
Les besoins des 16 UP simulées sont différenciés : caisses de fruits, sacs, cartons, froid, fûts, seaux ou IBC. Ce sont des besoins proposés, pas une sélection de modèles fournisseurs confirmés. Charges utiles, tare, sol, distances, accès, hygiène et sécurité restent à dimensionner.
Pour Adhésifs & colles, l’investissement de 99 850 USD comprend 21 250 USD d’équipements et 78 600 USD d’autres postes détaillés. Les 10 000 USD de pompe/flexibles/balance/manutention sont une enveloppe mutualisée existante : aucune part manutention fictive n’est isolée, aucun ajout en double.
Les chariots/refroidissement de Boulangerie et le pesage IBC/manutention des Adjuvants sont également des enveloppes mutualisées.
Ailleurs, la manutention non chiffrée est affichée « À chiffrer », avec montant absent (null), jamais remplacé par zéro. Ces coûts manquants ne sont pas compris dans l’investissement affiché et pourront modifier la rentabilité lorsqu’ils seront renseignés. Achat/location, entretien et énergie ne sont pas inventés.
Le moteur accepte un budget dédié lorsqu’un montant est renseigné dans le profil. Le générateur ajoute automatiquement une entrée complements_usd.manutention au total et au détail ; aucun montant de ce type n’a été ajouté aux profils de cette livraison.

## Enregistrement et passage au Pro
La ventilation accompagne les entrées normalisées, les exports et la transmission au Pro. Elle est recalculée et affichée au bloc financier du Pro. Un ancien dossier sans détail garde ses montants sans recevoir une ventilation actuelle. Si le budget global ou celui des équipements change, le détail antérieur n’est plus présenté comme réconcilié : aucun prorata automatique n’est inventé.
Les visuels restent illustratifs ; ils ne représentent pas contractuellement tout le périmètre acheté.

## Contrôles effectués
- Génération des données et des pages HTML : réussie.
- 25 suites Node : réussies, dont les sommes des 18 ventilations, absence de double compte, budget dédié, coût inconnu, reprise d’anciens dossiers, sensibilité et bilan.
- Parcours navigateur Découverte → Pro : réussi, avec transmission exacte du détail Adhésifs et conservation des résultats.
- Contrôle visuel de la rubrique 7 et test des mentions de manutention chiffrée/mutualisée/inconnue.

## Fichiers modifiés
- data/p2i-bp-investissements-regles.json (libellés et besoins propres aux UP)
- scripts/build-bp-decouverte-donnees.cjs
- js/p2i-bp-decouverte-simulation-commune.js
- js/p2i-bp-decouverte-v108-contexte.js
- js/p2i-bp-decouverte-v108-layout.js
- js/p2i-bp-passage-pro.js
- data/p2i-bp-decouverte-donnees.json et js/p2i-bp-decouverte-donnees.js (générés)
- business-plan-decouverte.html et business-plan-decouverte-v108.html (générés)
- tests/check-p2i-investissements.cjs et tests/qa-parcours-decouverte-pro.cjs
- docs/livraisons/investissements-manutention-2026-10-28.md

Branche de publication : refonte-bp-decouverte-17-rubriques ; main inchangée.
