# Emballage — BP Découverte Jus et règle commune

La configuration Jus utilise une bouteille PET refermable de 500 ml avec une étiquette et le nom illustratif « Ivoire Fruits ». La disponibilité de la marque et du logo doit être vérifiée avant utilisation commerciale. L’image est une illustration générée par IA, pas une photographie contractuelle de fournisseur.

Le coût de simulation est détaillé par bouteille : contenant 0,12 USD, bouchon 0,02, étiquette 0,03 et emballage de regroupement 0,03. Total : 0,20 USD/bouteille, soit 0,40 USD/kg de jus avec l'hypothèse simplifiée de 0,5 kg par bouteille de 500 ml. Ce sont des estimations P2I, pas des prix catalogue. Le moteur inclut l'emballage une seule fois dans le coût de production et la valorisation des stocks.

La ligne catalogue MFPU-500-MG reste au prix publié de 83 990 EUR HT et contient son poste de remplissage en poches. Une remplisseuse bouteilles Stalmont de 900 L/h est ajoutée à la borne haute indicative de 9 300 EUR HT publiée pour cette gamme; le poste poches inclus n'est pas déduit arbitrairement. Sources : https://eshop.czechminibreweries.com/product/mfpu-500-mg/ et https://stalmont.net.pl/en/bottle-filler/. Fermeture (1 500 USD), étiquetage (2 000 USD) et rinçage (500 USD) sont des enveloppes de simulation distinctes. Le débit théorique de jus de 300 kg/h est assimilé à 300 L/h et 600 bouteilles/h selon une densité de 1 kg/L, à mesurer pour le produit réel. La capacité effective, les interfaces, la température et l'adéquation du PET au procédé doivent être approfondies.

L'investissement de simulation est de 155 519,50 USD; la réserve initiale est distincte. Les prévisions sont recalculées par les moteurs communs avec apport/dette 30/70, BFR 36 mois et trésorerie 12 mois. Le conditionnement affecte le coût industriel, le stock, les états et les flux. Aucune allégation de bénéfice environnemental n'est présumée : matière, allègement, collecte, réemploi et recyclage effectifs doivent être étudiés localement.

Une structure emballage commune est ajoutée aux dossiers de production des 96 UP. Les activités de services sans produit emballé sont indiquées non applicables. Les coûts propres au produit restent à renseigner ; les coûts existants Crackers et Aliments pour bétail sont identifiés comme inclus, sans seconde déduction. Aucune somme n'est inventée pour les autres UP.

Fichiers principaux : data/p2i-bp-decouverte-simulations.json, data/p2i-bp-decouverte-donnees.json, scripts/build-bp-decouverte-donnees.cjs, js/p2i-bp-decouverte-v108-layout.js, assets/bp-jus/bouteille-ivoire-fruits-ia.jpg et les pages générées. Les prompts des illustrations figurent dans assets/bp-jus/PROVENANCE.md.

Les anciennes simulations personnelles restent conservées : si leur coût industriel ou leur budget machines diffère de la nouvelle configuration, le détail et l’image de la bouteille ne leur sont pas attribués automatiquement.
