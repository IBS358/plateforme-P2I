# Audit des prix et de la cohérence technique — 96 UP

Inventaire automatique du référentiel P2I au 26 octobre 2026. Ce contrôle identifie les informations présentes et les noms strictement répétés ; il ne démontre ni l’absence de doublons fonctionnels, ni la compatibilité des machines. Les listes historiques sont des besoins, pas des modèles achetés.

- 96 UP, 100 configurations enregistrées (les variantes restant à recenser ne sont pas comptées).
- 663 besoins machines historiques ; 0 comportent un prix individuel dans le champ du référentiel et 0 comportent à la fois fabricant et modèle.
- 2 configurations présentent une référence de prix publique au niveau de la ligne ; ce nombre ne valide pas les machines complémentaires ni la compatibilité du procédé.
- 0 UP avec noms de machines identiques après normalisation ; les doublons de fonctions différents de nom nécessitent une analyse technique.

## Analyse ciblée des références disponibles

- Jus : MFPU-500-MG, 83 990 EUR HT pour une ligne comprenant lavage-broyage, presse, pompe, pasteurisation, remplissage en poches et cuves. Le remplissage en poches est inclus dans le prix mais la simulation ajoute une remplisseuse de bouteilles : deux voies alternatives de conditionnement, dont la première reste payée ; ce n’est pas un procédé en série sans doublon économique. Une ligne bouteille directement tarifée ou un prix de substitution doit être recherché. Source : https://eshop.czechminibreweries.com/product/mfpu-500-mg/
- Jus : la borne haute de 9 300 EUR HT est une fourchette publiée Stalmont, pas un prix ferme pour un modèle configuré. Épluchage/parage de l’ananas, aptitude du broyeur et du pressage, qualité du jus, traitement thermique, température de remplissage, contenant et raccordement demeurent à documenter. Source : https://stalmont.net.pl/en/bottle-filler/
- Aliments bétail : TCPEL publie 24 500–32 000 USD FOB pour une famille de petites lignes ; les composants précis, l’ensachage, l’énergie et les interfaces restent à qualifier ensemble. Une fourchette n’est pas le prix confirmé d’une configuration unique. Source : https://tcpel.net/pellet-production-line/feed-pellet-production-line/
- Crackers : budget P2I utilisateur de 450 000 USD pour 500 kg/h conservé ; aucun fabricant ni prix catalogue de cette ligne n’est actuellement attesté.

## Inventaire par UP

| Filière | UP | Besoins machines | Prix individuels renseignés | Noms identiques | Référence de ligne |
|---|---|---:|---:|---|---|
| Agro-alimentaire & Boissons | Conserverie de légumes (`conserverie_legumes`) | 7 | 0 | aucun nom identique détecté | à documenter |
| Agro-alimentaire & Boissons | Biscuiterie industrielle (`biscuiterie`) | 12 | 0 | aucun nom identique détecté | Crackers: budget_reference_utilisateur_pas_prix_catalogue_retrouve |
| Agro-alimentaire & Boissons | Boulangerie industrielle (`boulangerie_industrielle`) | 7 | 0 | aucun nom identique détecté | à documenter |
| Agro-alimentaire & Boissons | Production de jus et boissons (`jus_boissons`) | 8 | 0 | aucun nom identique détecté | Production de jus et boissons: prix_catalogue_public_non_certifie (https://eshop.czechminibreweries.com/product/mfpu-500-mg/) |
| Agro-alimentaire & Boissons | Mini-laiterie (`mini_laiterie`) | 6 | 0 | aucun nom identique détecté | à documenter |
| Agro-alimentaire & Boissons | Huiles alimentaires (`huiles_alimentaires`) | 11 | 0 | aucun nom identique détecté | à documenter |
| Agro-alimentaire & Boissons | Transformation d'épices (`epices`) | 9 | 0 | aucun nom identique détecté | à documenter |
| Agro-alimentaire & Boissons | Aliments pour bétail (`aliments_betail`) | 4 | 0 | aucun nom identique détecté | Aliments pour bétail: fourchette_catalogue_publique_non_certifiee (https://tcpel.net/pellet-production-line/feed-pellet-production-line/) |
| Chimie, Cosmétiques & Détergents | Détergents & produits ménagers (`detergents`) | 6 | 0 | aucun nom identique détecté | à documenter |
| Chimie, Cosmétiques & Détergents | Savonnerie industrielle (`savonnerie`) | 6 | 0 | aucun nom identique détecté | à documenter |
| Chimie, Cosmétiques & Détergents | Cosmétiques naturels (`cosmetiques`) | 6 | 0 | aucun nom identique détecté | à documenter |
| Chimie, Cosmétiques & Détergents | Peintures industrielles (`peintures`) | 6 | 0 | aucun nom identique détecté | à documenter |
| Chimie, Cosmétiques & Détergents | Adhésifs & colles (`adhesifs`) | 5 | 0 | aucun nom identique détecté | à documenter |
| Chimie, Cosmétiques & Détergents | Engrais & pesticides (`engrais`) | 6 | 0 | aucun nom identique détecté | à documenter |
| Chimie, Cosmétiques & Détergents | Eau de javel & désinfectants (`javel`) | 5 | 0 | aucun nom identique détecté | à documenter |
| Chimie, Cosmétiques & Détergents | Produits chimiques industriels (`produits_industriels`) | 5 | 0 | aucun nom identique détecté | à documenter |
| Textile, Habillement & Cuir | Confection de vêtements (`confection`) | 8 | 0 | aucun nom identique détecté | à documenter |
| Textile, Habillement & Cuir | Tissage industriel (`tissage`) | 6 | 0 | aucun nom identique détecté | à documenter |
| Textile, Habillement & Cuir | Maroquinerie & articles en cuir (`maroquinerie`) | 6 | 0 | aucun nom identique détecté | à documenter |
| Textile, Habillement & Cuir | Teinturerie industrielle (`teinture`) | 6 | 0 | aucun nom identique détecté | à documenter |
| Textile, Habillement & Cuir | Broderie industrielle (`broderie`) | 5 | 0 | aucun nom identique détecté | à documenter |
| Textile, Habillement & Cuir | Fabrication de chaussures (`chaussures`) | 6 | 0 | aucun nom identique détecté | à documenter |
| Textile, Habillement & Cuir | Confection d'uniformes (`uniformes`) | 6 | 0 | aucun nom identique détecté | à documenter |
| Textile, Habillement & Cuir | Linge de maison (`linge`) | 6 | 0 | aucun nom identique détecté | à documenter |
| Métallurgie & Mécanique | Serrurerie industrielle (`serrurerie`) | 8 | 0 | aucun nom identique détecté | à documenter |
| Métallurgie & Mécanique | Outillage manuel (`outillage`) | 7 | 0 | aucun nom identique détecté | à documenter |
| Métallurgie & Mécanique | Recyclage de métaux (`recyclage_metaux`) | 7 | 0 | aucun nom identique détecté | à documenter |
| Métallurgie & Mécanique | Chaudronnerie industrielle (`chaudronnerie`) | 7 | 0 | aucun nom identique détecté | à documenter |
| Métallurgie & Mécanique | Mécanosoudure (`mecanosoudure`) | 7 | 0 | aucun nom identique détecté | à documenter |
| Métallurgie & Mécanique | Structures métalliques (`structures`) | 7 | 0 | aucun nom identique détecté | à documenter |
| Métallurgie & Mécanique | Pièces détachées automobiles (`pieces`) | 7 | 0 | aucun nom identique détecté | à documenter |
| Métallurgie & Mécanique | Quincaillerie industrielle (`quincaillerie`) | 7 | 0 | aucun nom identique détecté | à documenter |
| Plastique & Caoutchouc | Sacs en plastique (`sacs`) | 7 | 0 | aucun nom identique détecté | à documenter |
| Plastique & Caoutchouc | Bouteilles PET (`bouteilles_pet`) | 6 | 0 | aucun nom identique détecté | à documenter |
| Plastique & Caoutchouc | Tuyaux PVC (`tuyaux_pvc`) | 7 | 0 | aucun nom identique détecté | à documenter |
| Plastique & Caoutchouc | Emballages plastique (`emballages`) | 7 | 0 | aucun nom identique détecté | à documenter |
| Plastique & Caoutchouc | Profilés plastique (`profilés`) | 7 | 0 | aucun nom identique détecté | à documenter |
| Plastique & Caoutchouc | Jouets en plastique (`jouets`) | 7 | 0 | aucun nom identique détecté | à documenter |
| Plastique & Caoutchouc | Joints et pièces caoutchouc (`joints`) | 7 | 0 | aucun nom identique détecté | à documenter |
| Plastique & Caoutchouc | Granulés plastique recyclé (`granules`) | 8 | 0 | aucun nom identique détecté | à documenter |
| Électronique & Électricité | Câbles électriques (`cables`) | 7 | 0 | aucun nom identique détecté | à documenter |
| Électronique & Électricité | Panneaux solaires (`panneaux_solaires`) | 7 | 0 | aucun nom identique détecté | à documenter |
| Électronique & Électricité | Appareils électroménagers (`appareils`) | 7 | 0 | aucun nom identique détecté | à documenter |
| Électronique & Électricité | Éclairage LED (`led`) | 7 | 0 | aucun nom identique détecté | à documenter |
| Électronique & Électricité | Tableaux électriques (`tableaux`) | 7 | 0 | aucun nom identique détecté | à documenter |
| Électronique & Électricité | Onduleurs et convertisseurs (`onduleurs`) | 7 | 0 | aucun nom identique détecté | à documenter |
| Électronique & Électricité | Compteurs électriques (`compteurs`) | 7 | 0 | aucun nom identique détecté | à documenter |
| Électronique & Électricité | Batteries et accumulateurs (`batteries`) | 7 | 0 | aucun nom identique détecté | à documenter |
| BTP & Matériaux de Construction | Mini-cimenterie (`cimenterie`) | 7 | 0 | aucun nom identique détecté | à documenter |
| BTP & Matériaux de Construction | Briques et tuiles (`briques`) | 7 | 0 | aucun nom identique détecté | à documenter |
| BTP & Matériaux de Construction | Éléments préfabriqués (`prefab`) | 7 | 0 | aucun nom identique détecté | à documenter |
| BTP & Matériaux de Construction | Tuiles et éléments toiture (`tuiles`) | 7 | 0 | aucun nom identique détecté | à documenter |
| BTP & Matériaux de Construction | Agglos et parpaings (`agglos`) | 7 | 0 | aucun nom identique détecté | à documenter |
| BTP & Matériaux de Construction | Peintures bâtiment (`peintures_btp`) | 7 | 0 | aucun nom identique détecté | à documenter |
| BTP & Matériaux de Construction | Centrale à béton (`centrale_beton`) | 7 | 0 | aucun nom identique détecté | à documenter |
| BTP & Matériaux de Construction | Menuiserie aluminium/PVC (`menuiserie`) | 7 | 0 | aucun nom identique détecté | à documenter |
| Petits Matériels Médicaux | Masques et protections (`masques`) | 7 | 0 | aucun nom identique détecté | à documenter |
| Petits Matériels Médicaux | Pansements et compresses (`pansements`) | 7 | 0 | aucun nom identique détecté | à documenter |
| Petits Matériels Médicaux | Mobilier médical (`mobilier`) | 7 | 0 | aucun nom identique détecté | à documenter |
| Petits Matériels Médicaux | Fauteuils roulants (`fauteuils`) | 7 | 0 | aucun nom identique détecté | à documenter |
| Petits Matériels Médicaux | Instruments médicaux (`instruments`) | 7 | 0 | aucun nom identique détecté | à documenter |
| Petits Matériels Médicaux | Béquilles et cannes (`bequilles`) | 7 | 0 | aucun nom identique détecté | à documenter |
| Petits Matériels Médicaux | Antiseptiques et désinfectants (`antiseptiques`) | 7 | 0 | aucun nom identique détecté | à documenter |
| Petits Matériels Médicaux | Kits médicaux et premiers secours (`kits`) | 7 | 0 | aucun nom identique détecté | à documenter |
| Assemblage & Montage | Assemblage smartphones (`smartphones`) | 7 | 0 | aucun nom identique détecté | à documenter |
| Assemblage & Montage | Assemblage ordinateurs (`ordinateurs`) | 7 | 0 | aucun nom identique détecté | à documenter |
| Assemblage & Montage | Assemblage électroménager (`electromenager`) | 7 | 0 | aucun nom identique détecté | à documenter |
| Assemblage & Montage | Assemblage climatiseurs (`climatiseurs`) | 7 | 0 | aucun nom identique détecté | à documenter |
| Assemblage & Montage | Assemblage motos (`motos`) | 7 | 0 | aucun nom identique détecté | à documenter |
| Assemblage & Montage | Assemblage vélos (`velos`) | 7 | 0 | aucun nom identique détecté | à documenter |
| Assemblage & Montage | Assemblage meubles (`meubles`) | 7 | 0 | aucun nom identique détecté | à documenter |
| Assemblage & Montage | Équipements sportifs (`equipements`) | 7 | 0 | aucun nom identique détecté | à documenter |
| Recyclage & Valorisation | Recyclage plastique (`plastique`) | 7 | 0 | aucun nom identique détecté | à documenter |
| Recyclage & Valorisation | Recyclage papier/carton (`papier`) | 7 | 0 | aucun nom identique détecté | à documenter |
| Recyclage & Valorisation | Recyclage métaux (`metaux`) | 7 | 0 | aucun nom identique détecté | à documenter |
| Recyclage & Valorisation | Compost et engrais organiques (`compost`) | 7 | 0 | aucun nom identique détecté | à documenter |
| Recyclage & Valorisation | Recyclage verre (`verre`) | 7 | 0 | aucun nom identique détecté | à documenter |
| Recyclage & Valorisation | Recyclage pneus (`pneus`) | 7 | 0 | aucun nom identique détecté | à documenter |
| Recyclage & Valorisation | Recyclage huiles usagées (`huiles`) | 7 | 0 | aucun nom identique détecté | à documenter |
| Recyclage & Valorisation | Recyclage DEEE (`deee`) | 7 | 0 | aucun nom identique détecté | à documenter |
| Services Industriels | Services de nettoyage industriel (`nettoyage`) | 7 | 0 | aucun nom identique détecté | à documenter |
| Services Industriels | Maintenance industrielle (`maintenance`) | 7 | 0 | aucun nom identique détecté | à documenter |
| Services Industriels | Logistique industrielle (`logistique`) | 7 | 0 | aucun nom identique détecté | à documenter |
| Services Industriels | Formation industrielle (`formation`) | 7 | 0 | aucun nom identique détecté | à documenter |
| Services Industriels | Services qualité (`qualite`) | 7 | 0 | aucun nom identique détecté | à documenter |
| Services Industriels | Études et conseil (`etudes`) | 7 | 0 | aucun nom identique détecté | à documenter |
| Services Industriels | Sécurité industrielle (`securite`) | 7 | 0 | aucun nom identique détecté | à documenter |
| Services Industriels | Services énergétiques (`energie`) | 7 | 0 | aucun nom identique détecté | à documenter |
| Énergie, Eau & Environnement | Poteaux électriques (`poteaux`) | 7 | 0 | aucun nom identique détecté | à documenter |
| Énergie, Eau & Environnement | Compteurs d'eau (`compteurs_eau`) | 7 | 0 | aucun nom identique détecté | à documenter |
| Énergie, Eau & Environnement | Kits solaires domestiques (`kits_solaires`) | 7 | 0 | aucun nom identique détecté | à documenter |
| Énergie, Eau & Environnement | Lampadaires solaires (`lampadaires`) | 7 | 0 | aucun nom identique détecté | à documenter |
| Énergie, Eau & Environnement | Forage et équipements eau (`forage`) | 7 | 0 | aucun nom identique détecté | à documenter |
| Énergie, Eau & Environnement | Traitement eau potable (`eau`) | 7 | 0 | aucun nom identique détecté | à documenter |
| Énergie, Eau & Environnement | Maintenance énergétique (`maintenance_energie`) | 7 | 0 | aucun nom identique détecté | à documenter |
| Énergie, Eau & Environnement | Audits énergétiques (`audit`) | 7 | 0 | aucun nom identique détecté | à documenter |

## Validation restant à réaliser

Pour chaque UP et chaque variante : identifier le produit et le procédé, affecter une machine ou ligne et son périmètre fonctionnel, relever les prix et sources, vérifier les cadences effectives et unités, raccordements, alimentation électrique, eau, air, chauffage et hygiène, puis rapprocher les coûts pour éviter les doubles comptes. Les opérations redondantes doivent être examinées selon leur rôle : étapes de sécurité, production parallèle ou simple répétition. Les données absentes ne sont pas des confirmations.
