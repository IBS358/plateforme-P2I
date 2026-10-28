# Emballages : règle commune, stock initial et priorité à la poche stérilisable

> Compte rendu de la livraison précédente. La correction « poche par défaut » retire désormais le verre du parcours courant et archive ses chiffres. Voir `conserverie-poche-defaut-2026-10-28.md` pour l’état actuel.

Livraison sur `refonte-bp-decouverte-17-rubriques`, base `6f36f17`. Main n’est pas modifiée.

## Fonctionnement

Les 96 UP disposent d’un suivi des exigences d’emballage adapté au produit. Les services sans produit emballé sont non applicables. Les pistes fournisseurs locales sont distinguées de la disponibilité d’une référence exacte ; aucun prix livré, stock ou compatibilité n’est déclaré confirmé par défaut.

Le comparateur commun accepte des hypothèses P2I explicites au stade Découverte : aucun devis signé ni certificat n’est requis pour une comparaison indicative. Il exclut les incompatibilités déclarées. Il distingue le budget d’approvisionnement du coût complet qui intègre pertes, énergie, main-d’œuvre, adaptation des machines, amortissement et entretien. Des coûts absents restent absents et ne valent pas zéro. Il ne modifie pas le prix de vente et ne crée pas de gain de marge automatique.

Les 21 simulations calculables de 19 UP intègrent un stock cible de 15 jours d’emballages vides, hypothèse P2I modifiable dans les paramètres enregistrés. Les achats couvrent consommation et variation du stock, au coût moyen pondéré. La consommation déjà comprise dans le coût industriel n’est pas déduite deux fois. Le BFR couvre 36 mois, la trésorerie 12 mois et les bilans trois ans. La réserve initiale supplémentaire est financée par apport ; le CAPEX et sa dette 70 % ne changent pas du seul fait du stock. Les IBC loués et le lavage restent des charges, non un stock acheté. TVA des emballages non isolée dans ce modèle ; prépaiements, délais et minimums fournisseurs demandent une adaptation propre au projet.

Exemple Jus : stock initial d’emballages de 5 000 USD, achats du premier mois de 15 000 USD dont 10 000 USD consommés. Aucun effet artificiel sur le résultat A1 ; réserve supplémentaire de 5 000 USD par rapport à zéro jour de stock.

Les dossiers personnels et historiques sans les nouveaux paramètres restent calculés selon leurs entrées, sans ajout rétroactif de stock. Le passage au Pro transporte les paramètres normalisés et recalcule les mêmes stocks, BFR et bilans.

## Conserverie

La poche stérilisable devient la piste prioritaire d’étude. La boîte métallique reste une alternative ; le verre est identifié séparément. Les états financiers affichés sont ceux de la variante verre et ne sont pas présentés comme ceux de la poche.

| Option, cible 400 g | Prix de contenant retenu | Approvisionnement estimé / unité | Minimum publié |
|---|---:|---:|---:|
| Poche stérilisable | 0,08 USD | 0,16496 USD | 10 000 pièces |
| Boîte métallique | 0,10 USD | 0,2382 USD | 50 000 pièces |

Les prix sont les bornes hautes des annonces de gamme, pas des devis pour le format exact. Les frais, marquage et regroupement sont des provisions P2I, pas des tarifs livrés ni des droits de douane officiels. Le montant de la poche ne prouve ni sa contenance utile pour 400 g, ni la compatibilité de la ligne, ni une recyclabilité locale.

La variante verre est corrigée : tarif public PADJI de 350 FCFA par bocal 500 ml, plus provisions P2I de 15 FCFA d’étiquette et 20 FCFA de regroupement. À 400 g de sauce par bocal, le coût est d’environ 0,6569 USD par unité et 1,6424 USD/kg avec la conversion commune datée. Inclusion de la fermeture supposée, prix livré CI et traitement à confirmer. Le prix de vente initial n’est pas relevé ; le déficit réel du scénario est conservé.

Informations encore nécessaires pour une simulation propre à la poche : format/matériau/fermeture exacts et coût livré ; périmètre de la remplisseuse et thermoscelleuse, cadence et postes déjà compris dans la ligne ; traitement thermique selon recette et contenant, refroidissement et contrôles ; consommations, pertes, minimum et calendrier d’approvisionnement. Ces données pourront être des références catalogue et hypothèses P2I explicites pour le Découverte, sans attendre des accords fournisseurs.

## Fichiers

- Règles et sources : `data/p2i-emballages-regles.json`, `data/p2i-conserverie-conditionnements.json`, `scripts/p2i-emballages-commun.cjs` et correction de `data/p2i-bp-lot-agro-01.json`.
- Calculs et contrats : moteur de simulation commun, moteur BFR et normalisation du contexte V108.
- Affichage et passage : rendu V108, pont vers le Pro, référentiels JSON/JS et deux pages HTML autonomes reconstruits.
- Contrôles et audit : tests des emballages, stocks, investissements, navigateur et passage réel au Pro ; audit des simulations régénéré.

## Contrôles

28 suites Node réussies. Chromium : consultation des 96 UP, variantes, import/export, session et sauvegarde ; parcours réel Découverte vers Pro et rechargement ; recette dédiée comparaison/stock/ancien dossier. Les données de stock et les bilans sont identiques après transfert au Pro. Design et 17 rubriques conservés ; aucun nouveau visuel de poche présenté comme machine ou produit validé. `git diff --check` réussi.

La méthode est appliquée aux 96 dossiers ; cela ne signifie pas que les 96 UP disposent d’une simulation financière complète. Le périmètre reste 21 simulations sur 19 UP et 77 UP à alimenter. La vérification de chaque emballage exact se poursuit ; la production autonome reste une suggestion d’activité auxiliaire, hors calcul actuel.
