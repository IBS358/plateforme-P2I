# P2I — règles de travail persistantes

- Travailler sur `refonte-bp-decouverte-17-rubriques`. Ne jamais modifier `main` sans nouvelle instruction explicite.
- Priorité : remplir les données économiques et rédactionnelles des 96 UP et de leurs variantes, sans refaire le parcours amont déjà fonctionnel.
- BP Découverte = ordre de grandeur chiffré et réaliste : prix catalogue publics, fournisseur identifié, configuration techniquement cohérente et hypothèses P2I explicites suffisent. Ne pas exiger certification du prix, accord préférentiel fournisseur, devis signé ou conditions commerciales négociées pour afficher une simulation.
- Privilégier les lignes complètes. Un ensemble de machines de pays/fournisseurs différents est possible si fonctions, cadences et interfaces sont compatibles. Ne pas qualifier une compatibilité inconnue de confirmée.
- Séparer les prix effectivement publiés et datés, les budgets de référence retenus par l'utilisateur, et les hypothèses de simulation. Ne jamais inventer un prix catalogue, une source ou une validation.
- Les hypothèses de salaires, prix de vente, coûts complémentaires, utilisation, rendements et règlements peuvent être estimées pour le Découverte, avec leur méthode, leur unité et leur qualification visibles. Ne pas les présenter comme données marché observées.
- BP Initial = personnalisation. BP Pro = approfondissement, devis, conditions et justificatifs. Les contrôles documentaires du Pro ne doivent pas bloquer les simulations indicatives du Découverte.
- Calculs en USD par les moteurs communs; affichage FCFA indicatif. Financement 30 % apport / 70 % dette; réserve initiale supplémentaire distincte. BFR 36 mois; trésorerie 12 mois; autres états sur trois exercices.
- Conserver le design V106/V108 et les 17 rubriques, dont les blocs 16 et 17. Préserver les simulations enregistrées et la transmission au Pro.
- 96 UP = 12 filières de 8. `peintures` (Peintures industrielles, Chimie) est distincte de `peintures_btp` (Peintures bâtiment, BTP).
- Livrer par ensembles cohérents, avec tests adaptés; ne pas solliciter de confirmations sur ces décisions déjà prises.

- Chaque BP de production doit préciser un emballage adapté au produit, à son usage, à la présentation commerciale, à son coût et aux possibilités locales de réemploi ou de recyclage. Chiffrer contenant, fermeture, étiquette et regroupement sans double compte; les impacts et filières non prouvés restent à qualifier. Les prestations sans produit emballé sont marquées non applicables.

- Choisir l’emballage en comparant le coût complet des solutions adaptées à chaque produit : contenant/fermeture, regroupement, pertes, machines, exploitation, logistique et stocks. Une économie ne baisse jamais automatiquement le prix de vente. Des hypothèses P2I explicites suffisent pour comparer au stade Découverte ; une incompatibilité connue exclut l’option. La poche stérilisable est la piste prioritaire d’étude de la sauce tomate, sans transposer les chiffres financiers du verre.
- Les stocks d’emballages vides sont distincts de leur consommation : BFR et bilan valorisés au CUMP, achats dans la trésorerie, réserve financée par apport. Les IBC loués ne constituent pas un stock acheté. Préserver les anciennes entrées sans leur attribuer les nouvelles hypothèses.

- Les nouvelles références calculables incluent la rémunération brute mensuelle du dirigeant, ses charges et sa croissance via `data/p2i-remuneration-dirigeant-regles.json`. Hypothèses P2I, pas revenu net ou barème légal ; réaffectation explicite des responsables déjà budgétés sans toucher aux opérateurs/chefs d’atelier. Les anciens imports sans ce champ conservent leurs résultats et signalent le poste non isolé. Ne jamais réduire ce salaire ou augmenter prix/volumes automatiquement pour obtenir la marge cible.
