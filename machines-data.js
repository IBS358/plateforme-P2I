// ==============================================
// MACHINES & ÉQUIPEMENTS PAR UP
// ==============================================

const MACHINES_DATA = {
  // ==============================================
  // 1. AGRO-ALIMENTAIRE & BOISSONS (8 UP)
  // ==============================================

  conserverie_legumes: {
    up_nom: "Conserverie de légumes",
    machines: [
      { name: "Laveuse-découpeuse", role: "Nettoyage et coupe des légumes", capacity: "500-2000 kg/h", utilities: "Eau + électricité" },
      { name: "Blanchisseur", role: "Traitement thermique (blanchiment)", capacity: "500-2000 kg/h", utilities: "Électricité + eau + vapeur" },
      { name: "Remplisseuse-doseuse", role: "Mise en boîtes/bocaux", capacity: "1000-5000 unités/h", utilities: "Électricité + air comprimé" },
      { name: "Scelleuse-operculieuse", role: "Fermeture hermétique", capacity: "1000-5000 unités/h", utilities: "Électricité" },
      { name: "Autoclave", role: "Stérilisation haute température", capacity: "500-2000 boîtes/batch", utilities: "Électricité + vapeur + eau" },
      { name: "Étiqeteuse", role: "Pose des étiquettes", capacity: "1000-5000 unités/h", utilities: "Électricité" },
      { name: "Cartonneuse-emballeuse", role: "Conditionnement secondaire", capacity: "500-2000 cartons/h", utilities: "Électricité + air comprimé" }
    ]
},
  biscuiterie: {
    up_nom: "Biscuiterie industrielle",
    machines: [
      { name: "Mélangeur industrielle", role: "Mélange des ingrédients", capacity: "100-500 kg/batch", utilities: "Électricité" },
      { name: "Lamineuse", role: "Aplatissement de la pâte", capacity: "500-2000 kg/h", utilities: "Électricité" },
      { name: "Façonneuse rotative", role: "Formage des biscuits", capacity: "500-3000 kg/h", utilities: "Électricité" },
      { name: "Four à biscuits", role: "Cuisson continue", capacity: "500-3000 kg/h", utilities: "Électricité ou gaz" },
      { name: "Refroidisseur", role: "Refroidissement post-cuisson", capacity: "500-3000 kg/h", utilities: "Électricité" },
      { name: "Enrobeuse", role: "Ajout sucre / chocolat", capacity: "500-2000 kg/h", utilities: "Électricité" },
      { name: "Emballeuse horizontale", role: "Conditionnement en sachets", capacity: "100-500 sachets/min", utilities: "Électricité" }
    ]
},
  boulangerie_industrielle: {
    up_nom: "Boulangerie industrielle",
    machines: [
      { name: "Pétrin spiral", role: "Pétrissage de la pâte", capacity: "200 kg/batch", utilities: "Électricité 10kW" },
      { name: "Diviseuse-bouleuse", role: "Division et boulage", capacity: "1,000 pains/h", utilities: "Électricité" },
      { name: "Façonneuse", role: "Façonnage des pains", capacity: "1,000 pains/h", utilities: "Électricité" },
      { name: "Chambre de fermentation", role: "Pousse contrôlée", capacity: "500 kg", utilities: "Électricité + vapeur" },
      { name: "Four rotatif", role: "Cuisson", capacity: "500 pains/batch", utilities: "Électricité ou gaz" },
      { name: "Trancheuse", role: "Tranchage du pain", capacity: "1,000 pains/h", utilities: "Électricité" },
      { name: "Ensacheuse", role: "Conditionnement", capacity: "1,000 pains/h", utilities: "Électricité" }
    ]
},
  jus_boissons: {
    up_nom: "Production de jus et boissons",
    machines: [
      { name: "Laveuse-trieuse", role: "Nettoyage et tri des fruits", capacity: "1-5 tonnes/h", utilities: "Eau + électricité" },
      { name: "Éplucheuse-dénoyauteuse", role: "Préparation des fruits", capacity: "500-2000 kg/h", utilities: "Électricité" },
      { name: "Broyeur-raspeur", role: "Extraction pulpe/jus", capacity: "500-3000 kg/h", utilities: "Électricité" },
      { name: "Filtreuse / Tamiseuse", role: "Séparation pulpe/liquide", capacity: "1000-5000 L/h", utilities: "Électricité" },
      { name: "Mélangeuse / Doseuse", role: "Ajout sucre, arômes", capacity: "500-3000 L/h", utilities: "Électricité" },
      { name: "Pasteurisateur", role: "Traitement thermique", capacity: "1000-5000 L/h", utilities: "Électricité + eau + vapeur" },
      { name: "Remplisseuse-scelleuse", role: "Mise en bouteilles", capacity: "1000-5000 unités/h", utilities: "Électricité + air comprimé" },
      { name: "Concentrateur (module export)", role: "Production jus concentré", capacity: "500-3000 L/h", utilities: "Électricité + vapeur" }
    ]
  },
  mini_laiterie: {
    up_nom: "Mini-laiterie",
    machines: [
      { name: "Cuve de réception", role: "Réception et filtration du lait", capacity: "5000-20000 L", utilities: "Électricité" },
      { name: "Pasteurisateur", role: "Pasteurisation du lait", capacity: "500-2000 L/h", utilities: "Électricité + eau + vapeur" },
      { name: "Écrémeuse", role: "Séparation de la crème", capacity: "500-2000 L/h", utilities: "Électricité" },
      { name: "Cuve de maturation", role: "Maturation du yaourt", capacity: "500-2000 L", utilities: "Électricité + froid" },
      { name: "Remplisseuse", role: "Conditionnement en pots/bouteilles", capacity: "1000-5000 pots/h", utilities: "Électricité + air comprimé" },
      { name: "Chambre froide", role: "Stockage réfrigéré", capacity: "20000-50000 L", utilities: "Électricité" }
    ]
},
  huiles_alimentaires: {
    up_nom: "Huiles alimentaires",
    machines: [
      { machine_key: "nettoyeur_decortiqueur", name: "Nettoyeur-décortiqueur", role: "Nettoyage des graines/noix", capacity: "500-3000 kg/h", utilities: "Électricité" },
      { machine_key: "broyeur_concasseur_huile", name: "Broyeur / Concasseur", role: "Concassage des graines", capacity: "500-3000 kg/h", utilities: "Électricité" },
      { machine_key: "cuiseur_huile", name: "Cuiseur (optionnel)", role: "Chauffage avant pressage", capacity: "500-2000 kg/h", utilities: "Électricité + vapeur" },
      { machine_key: "presse_huile", name: "Presse à huile", role: "Extraction de l'huile", capacity: "500-2000 kg/h", utilities: "Électricité" },
      { machine_key: "filtre_presse_huile", name: "Filtre-presse", role: "Filtration des impuretés", capacity: "1000-5000 L/h", utilities: "Électricité" },
      { machine_key: "clarificateur_decanteuse", name: "Clarificateur / Décanteuse", role: "Séparation eau / huile", capacity: "1000-5000 L/h", utilities: "Électricité" },
      { machine_key: "remplisseuse_huile", name: "Remplisseuse-scelleuse", role: "Mise en bidons/bouteilles", capacity: "500-2000 unités/h", utilities: "Électricité + air" },
      { machine_key: "neutraliseur_huile", name: "Neutraliseur (module raffinerie)", role: "Élimination acides gras", capacity: "1000-5000 L/h", utilities: "Électricité + vapeur" },
      { machine_key: "decoloreur_huile", name: "Décoloreur (module raffinerie)", role: "Élimination pigments", capacity: "1000-5000 L/h", utilities: "Électricité + vapeur" },
      { machine_key: "desodoriseur_huile", name: "Désodoriseur (module raffinerie)", role: "Élimination odeurs", capacity: "1000-5000 L/h", utilities: "Électricité + vapeur" },
      { machine_key: "fractionneur_huile", name: "Fractionneur (module raffinerie)", role: "Séparation fractions", capacity: "1000-5000 L/h", utilities: "Électricité + froid" }
    ]
},
  transformation_epices: {
    up_nom: "Transformation d'épices",
    machines: [
      { machine_key: "laveuse_decanteuse_epices", name: "Laveuse-décanteuse", role: "Nettoyage des épices brutes", capacity: "100-500 kg/h", utilities: "Eau + électricité" },
      { machine_key: "sechoir_epices", name: "Séchoir", role: "Séchage des épices", capacity: "50-200 kg/batch", utilities: "Électricité ou gaz" },
      { machine_key: "broyeur_epices", name: "Broyeur (moulin à épices)", role: "Broyage en poudre fine", capacity: "50-200 kg/h", utilities: "Électricité" },
      { machine_key: "tamiseuse_epices", name: "Tamiseuse vibrante", role: "Classification granulométrique", capacity: "100-500 kg/h", utilities: "Électricité" },
      { machine_key: "melangeuse_epices", name: "Mélangeuse (spice blender)", role: "Mélanges personnalisés", capacity: "100-500 kg/h", utilities: "Électricité" },
      { machine_key: "conditionneuse_sachets", name: "Conditionneuse", role: "Mise en sachets / pots", capacity: "500-2000 sachets/h", utilities: "Électricité + air" },
      { machine_key: "etiqueteuse_epices", name: "Étiqeteuse", role: "Pose étiquettes", capacity: "500-2000 unités/h", utilities: "Électricité" },
      { machine_key: "laboratoire_qualite", name: "Laboratoire qualité (module innovation)", role: "Analyse et R&D", capacity: "Analyse batch", utilities: "Électricité" },
      { machine_key: "micro_doseuse", name: "Micro-doseuse (module innovation)", role: "Petites séries innovation", capacity: "10-50 kg/h", utilities: "Électricité" }
    ]
},
  aliments_betail: {
    up_nom: "Aliments pour bétail",
    machines: [
      { name: "Broyeur", role: "Broyage des matières premières", capacity: "1,000 kg/h", utilities: "Électricité" },
      { name: "Mélangeur", role: "Mélange des ingrédients", capacity: "1,000 kg/batch", utilities: "Électricité" },
      { name: "Granulateur", role: "Granulation", capacity: "500 kg/h", utilities: "Électricité" },
      { name: "Ensacheuse", role: "Conditionnement", capacity: "500 sacs/h", utilities: "Électricité + air" }
    ]
},

  // ==============================================
  // 2. CHIMIE, COSMÉTIQUES & DÉTERGENTS (8 UP)
  // ==============================================

  detergents: {
    up_nom: "Détergents & produits ménagers",
    machines: [
      { name: "Cuve de mélange", role: "Formulation", capacity: "2,000 L", utilities: "Électricité", price: 15000 },
      { name: "Système de dosage", role: "Dosage précis", capacity: "Automatique", utilities: "Électricité", price: 10000 },
      { name: "Homogénéisateur", role: "Mélange et émulsification", capacity: "2,000 L/h", utilities: "Électricité", price: 12000 },
      { name: "Remplisseuse", role: "Conditionnement", capacity: "2,000 bouteilles/h", utilities: "Électricité + air", price: 15000 },
      { name: "Étiqueteuse", role: "Étiquetage", capacity: "2,000 bouteilles/h", utilities: "Électricité", price: 8000 },
      { name: "Poste contrôle qualité", role: "Tests de conformité", capacity: "Standard", utilities: "Électricité", price: 10000 }
    ]
  },
  savonnerie: {
    up_nom: "Savonnerie industrielle",
    machines: [
      { name: "Cuve de saponification", role: "Réaction chimique", capacity: "1,000 L", utilities: "Électricité + eau", price: 20000 },
      { name: "Moules", role: "Moulage des savons", capacity: "500 kg/batch", utilities: "—", price: 5000 },
      { name: "Cutter", role: "Découpe des savons", capacity: "500 kg/h", utilities: "Électricité", price: 8000 },
      { name: "Séchoir", role: "Séchage", capacity: "1,000 kg/batch", utilities: "Ventilation", price: 10000 },
      { name: "Mélangeur", role: "Savon liquide", capacity: "1,000 L", utilities: "Électricité", price: 12000 },
      { name: "Remplisseuse", role: "Conditionnement", capacity: "1,000 bouteilles/h", utilities: "Électricité", price: 10000 }
    ]
  },
  cosmetiques: {
    up_nom: "Cosmétiques naturels",
    machines: [
      { name: "Cuve de mélange", role: "Formulation", capacity: "500 L", utilities: "Électricité", price: 15000 },
      { name: "Bain-marie", role: "Chauffe contrôlée", capacity: "100 L", utilities: "Électricité + eau", price: 8000 },
      { name: "Homogénéisateur", role: "Émulsions", capacity: "500 L/h", utilities: "Électricité", price: 20000 },
      { name: "Remplisseuse", role: "Conditionnement", capacity: "1,000 pots/h", utilities: "Électricité + air", price: 12000 },
      { name: "Étiqueteuse", role: "Étiquetage INCI", capacity: "1,000 pots/h", utilities: "Électricité", price: 8000 },
      { name: "Poste contrôle qualité", role: "Tests de stabilité", capacity: "Standard", utilities: "Électricité", price: 10000 }
    ]
  },
  peintures: {
    up_nom: "Peintures industrielles & BTP",
    machines: [
      { name: "Disperseur", role: "Dispersion des pigments", capacity: "2,000 L/batch", utilities: "Électricité", price: 25000 },
      { name: "Broyeur à billes", role: "Broyage fin", capacity: "500 L/h", utilities: "Électricité", price: 30000 },
      { name: "Cuve de formulation", role: "Mélange final", capacity: "5,000 L", utilities: "Électricité", price: 20000 },
      { name: "Filtre", role: "Filtration", capacity: "2,000 L/h", utilities: "Électricité", price: 10000 },
      { name: "Remplisseuse", role: "Conditionnement", capacity: "1,000 seaux/h", utilities: "Électricité + air", price: 15000 },
      { name: "Étiqueteuse", role: "Étiquetage", capacity: "1,000 seaux/h", utilities: "Électricité", price: 10000 }
    ]
  },
  adhesifs: {
    up_nom: "Adhésifs & colles",
    machines: [
      { name: "Réacteur", role: "Formulation", capacity: "2,000 L", utilities: "Électricité + eau", price: 25000 },
      { name: "Agitateur", role: "Mélange", capacity: "2,000 L/h", utilities: "Électricité", price: 15000 },
      { name: "Système de dosage", role: "Dosage précis", capacity: "Automatique", utilities: "Électricité", price: 15000 },
      { name: "Remplisseuse", role: "Conditionnement", capacity: "1,000 pots/h", utilities: "Électricité + air", price: 15000 },
      { name: "Étiqueteuse", role: "Étiquetage", capacity: "1,000 pots/h", utilities: "Électricité", price: 8000 }
    ]
  },
  engrais: {
    up_nom: "Engrais & pesticides",
    machines: [
      { name: "Broyeur", role: "Broyage des matières", capacity: "2,000 kg/h", utilities: "Électricité", price: 25000 },
      { name: "Mélangeur", role: "Mélange des ingrédients", capacity: "2,000 kg/batch", utilities: "Électricité", price: 20000 },
      { name: "Granulateur", role: "Granulation", capacity: "1,000 kg/h", utilities: "Électricité", price: 35000 },
      { name: "Séchoir", role: "Séchage", capacity: "1,000 kg/h", utilities: "Électricité", price: 25000 },
      { name: "Tamis", role: "Tamisage", capacity: "1,000 kg/h", utilities: "Électricité", price: 15000 },
      { name: "Ensacheuse", role: "Conditionnement", capacity: "500 sacs/h", utilities: "Électricité + air", price: 20000 }
    ]
  },
  javel: {
    up_nom: "Eau de javel & désinfectants",
    machines: [
      { name: "Cuve de mélange", role: "Préparation", capacity: "5,000 L", utilities: "Électricité", price: 15000 },
      { name: "Système de dosage", role: "Dosage du chlore", capacity: "Automatique", utilities: "Électricité", price: 10000 },
      { name: "Remplisseuse", role: "Conditionnement", capacity: "2,000 bouteilles/h", utilities: "Électricité + air", price: 15000 },
      { name: "Étiqueteuse", role: "Étiquetage", capacity: "2,000 bouteilles/h", utilities: "Électricité", price: 8000 },
      { name: "Poste contrôle", role: "Contrôle qualité", capacity: "Standard", utilities: "Électricité", price: 12000 }
    ]
  },
  produits_industriels: {
    up_nom: "Produits chimiques industriels",
    machines: [
      { name: "Cuve de mélange", role: "Formulation", capacity: "5,000 L", utilities: "Électricité", price: 25000 },
      { name: "Réacteur", role: "Réaction chimique", capacity: "2,000 L", utilities: "Électricité + eau", price: 35000 },
      { name: "Système de dosage", role: "Dosage", capacity: "Automatique", utilities: "Électricité", price: 20000 },
      { name: "Remplisseuse", role: "Conditionnement", capacity: "1,000 bidons/h", utilities: "Électricité + air", price: 20000 },
      { name: "Étiqueteuse", role: "Étiquetage", capacity: "1,000 bidons/h", utilities: "Électricité", price: 10000 }
    ]
  },

  // ==============================================
// 3. TEXTILE, HABILLEMENT & CUIR
// ==============================================

confection: {
  up_nom: "Confection de vêtements",
  machines: [
    { name: "Machine à coudre industrielle", role: "Couture des vêtements", capacity: "500 pièces/jour", utilities: "Électricité 0.5kW", price: 2000 },
    { name: "Coupe automatique", role: "Découpe du tissus", capacity: "100 mètres/heure", utilities: "Électricité 2kW", price: 8000 },
    { name: "Surjeteuse", role: "Finition des coutures", capacity: "400 pièces/jour", utilities: "Électricité 0.4kW", price: 1500 },
    { name: "Repasseuse industrielle", role: "Finition et repassage", capacity: "300 pièces/jour", utilities: "Électricité + vapeur", price: 3000 },
    { name: "Presse à transfert", role: "Thermocollage des motifs", capacity: "200 pièces/jour", utilities: "Électricité", price: 2500 },
    { name: "Boutonneuse automatique", role: "Pose de boutons", capacity: "600 pièces/jour", utilities: "Électricité", price: 1800 },
    { name: "Brodeuse industrielle", role: "Broderie personnalisée", capacity: "400 pièces/jour", utilities: "Électricité", price: 5000 },
    { name: "Contrôle qualité", role: "Inspection des finitions", capacity: "Standard", utilities: "Électricité", price: 1500 }
  ]
},

tissage: {
  up_nom: "Tissage & pagnes",
  machines: [
    { name: "Ourdissoir", role: "Préparation des fils", capacity: "200 m/heure", utilities: "Électricité 3kW", price: 12000 },
    { name: "Métier à tisser", role: "Tissage des pagnes", capacity: "50 m/jour", utilities: "Électricité 5kW", price: 25000 },
    { name: "Encolleuse", role: "Application de colle sur fils", capacity: "150 m/heure", utilities: "Électricité + chaleur", price: 8000 },
    { name: "Lamineuse", role: "Aplatissement du tissu", capacity: "100 m/heure", utilities: "Électricité", price: 6000 },
    { name: "Dévidoir", role: "Enroulage des tissus", capacity: "150 m/heure", utilities: "Électricité", price: 4000 },
    { name: "Contrôle qualité tissage", role: "Inspection des défauts", capacity: "Standard", utilities: "Électricité", price: 3000 }
  ]
},

maroquinerie: {
  up_nom: "Maroquinerie cuir",
  machines: [
    { name: "Découpeuse cuir", role: "Découpe des formes", capacity: "200 pièces/jour", utilities: "Électricité 2kW", price: 7000 },
    { name: "Piqueuse cuir", role: "Couture des articles cuir", capacity: "150 pièces/jour", utilities: "Électricité 0.6kW", price: 3500 },
    { name: "Poinçonneuse", role: "Pose de rivets et œillets", capacity: "300 pièces/jour", utilities: "Électricité", price: 2500 },
    { name: "Presse à chaud", role: "Marquage à chaud", capacity: "200 pièces/jour", utilities: "Électricité + chaleur", price: 4000 },
    { name: "Polisseuse cuir", role: "Lustrage du cuir", capacity: "150 pièces/jour", utilities: "Électricité", price: 2000 },
    { name: "Bordeuse", role: "Finition des bords", capacity: "200 pièces/jour", utilities: "Électricité", price: 3000 }
  ]
},

teinture: {
  up_nom: "Teinture textile",
  machines: [
    { name: "Cuve de teinture", role: "Teinture des tissus", capacity: "500 kg/batch", utilities: "Eau + électricité + vapeur", price: 25000 },
    { name: "Sécheur textile", role: "Séchage après teinture", capacity: "300 kg/batch", utilities: "Électricité + gaz", price: 18000 },
    { name: "Mélangeur colorant", role: "Préparation des bains", capacity: "200 L/batch", utilities: "Électricité", price: 8000 },
    { name: "Foulard", role: "Application uniforme", capacity: "400 m/heure", utilities: "Électricité", price: 12000 },
    { name: "Laveuse textile", role: "Rinçage post-teinture", capacity: "500 kg/batch", utilities: "Eau + électricité", price: 15000 },
    { name: "Centrifugeuse", role: "Essorage des tissus", capacity: "300 kg/batch", utilities: "Électricité", price: 10000 }
  ]
},

broderie: {
  up_nom: "Broderie industrielle",
  machines: [
    { name: "Brodeuse multi-têtes", role: "Broderie automatisée", capacity: "400 pièces/jour", utilities: "Électricité 1.5kW", price: 12000 },
    { name: "Digitizer", role: "Conception des motifs", capacity: "Standard", utilities: "Électricité", price: 2000 },
    { name: "Machine à affranchir", role: "Préparation des supports", capacity: "300 pièces/jour", utilities: "Électricité", price: 1500 },
    { name: "Détricoteuse", role: "Défabrication des erreurs", capacity: "100 pièces/jour", utilities: "Électricité", price: 1000 },
    { name: "Presse thermique", role: "Fixation des broderies", capacity: "200 pièces/jour", utilities: "Électricité", price: 2500 }
  ]
},

chaussures: {
  up_nom: "Chaussures & sandales",
  machines: [
    { name: "Découpeuse chaussures", role: "Découpe des semelles", capacity: "500 paires/jour", utilities: "Électricité 3kW", price: 10000 },
    { name: "Piqueuse chaussures", role: "Couture des tiges", capacity: "300 paires/jour", utilities: "Électricité 0.8kW", price: 4000 },
    { name: "Presse à chaud semelles", role: "Collage des semelles", capacity: "400 paires/jour", utilities: "Électricité + chaleur", price: 8000 },
    { name: "Machine à monter", role: "Assemblage chaussures", capacity: "300 paires/jour", utilities: "Électricité", price: 12000 },
    { name: "Polisseuse chaussures", role: "Lustrage et finition", capacity: "400 paires/jour", utilities: "Électricité", price: 3000 },
    { name: "Formeuse à chaud", role: "Mise en forme des tiges", capacity: "300 paires/jour", utilities: "Électricité + chaleur", price: 6000 }
  ]
},

uniformes: {
  up_nom: "Confection d'uniformes",
  machines: [
    { name: "Coupe laser", role: "Découpe précise", capacity: "200 m/heure", utilities: "Électricité", price: 15000 },
    { name: "Machine à coudre industrielle", role: "Couture uniformes", capacity: "400 pièces/jour", utilities: "Électricité 0.5kW", price: 2000 },
    { name: "Boutonneuse", role: "Pose de boutons", capacity: "500 pièces/jour", utilities: "Électricité", price: 1800 },
    { name: "Repasseuse à convoyeur", role: "Finition continue", capacity: "300 pièces/jour", utilities: "Électricité + vapeur", price: 5000 },
    { name: "Machine à poser fermetures", role: "Pose de zip", capacity: "400 pièces/jour", utilities: "Électricité", price: 3000 },
    { name: "Transfert thermique", role: "Pose logos et insignes", capacity: "300 pièces/jour", utilities: "Électricité", price: 3500 }
  ]
},

linge: {
  up_nom: "Linge de maison",
  machines: [
    { name: "Coupe multi-plis", role: "Découpe drap/housse", capacity: "500 m/heure", utilities: "Électricité 4kW", price: 18000 },
    { name: "Machine à coudre grande largeur", role: "Couture linge plat", capacity: "300 pièces/jour", utilities: "Électricité 0.8kW", price: 3500 },
    { name: "Ourleuse automatique", role: "Ourlet des serviettes", capacity: "400 pièces/jour", utilities: "Électricité", price: 4000 },
    { name: "Presse à repasser", role: "Finition industrielle", capacity: "300 pièces/jour", utilities: "Électricité + vapeur", price: 6000 },
    { name: "Plieuse automatique", role: "Plage du linge", capacity: "400 pièces/jour", utilities: "Électricité", price: 8000 },
    { name: "Ensacheuse sous vide", role: "Conditionnement sous vide", capacity: "300 pièces/jour", utilities: "Électricité + air", price: 7000 }
  ]
},

  // ==============================================
// 4. MÉTALLURGIE & MÉCANIQUE
// ==============================================

serrurerie: {
  up_nom: "Serrurerie métallique",
  machines: [
    { name: "Poste à souder MIG/MAG", role: "Soudure des pièces métalliques", capacity: "200 pièces/jour", utilities: "Électricité 8kW", price: 5000 },
    { name: "Tronçonneuse à métaux", role: "Découpe des profilés", capacity: "300 mètres/jour", utilities: "Électricité 3kW", price: 2500 },
    { name: "Perceuse à colonne", role: "Percage des pièces", capacity: "200 pièces/jour", utilities: "Électricité 1.5kW", price: 1500 },
    { name: "Plieuse hydraulique", role: "Pliage des tôles", capacity: "150 pièces/jour", utilities: "Électricité 5kW", price: 8000 },
    { name: "Meuleuse d'angle", role: "Ébavurage et finition", capacity: "Standard", utilities: "Électricité 2kW", price: 500 },
    { name: "Poste à riveter", role: "Assemblage par rivets", capacity: "400 pièces/jour", utilities: "Air comprimé", price: 2000 },
    { name: "Cabine de peinture", role: "Peinture des ouvrages", capacity: "100 pièces/jour", utilities: "Électricité + ventilation", price: 12000 },
    { name: "Contrôle qualité métal", role: "Inspection dimensionnelle", capacity: "Standard", utilities: "Électricité", price: 3000 }
  ]
},

outillage: {
  up_nom: "Outillage agricole",
  machines: [
    { name: "Forge à marteau-pilon", role: "Forgeage des outils", capacity: "300 pièces/jour", utilities: "Électricité 15kW", price: 25000 },
    { name: "Four de traitement thermique", role: "Trempe et revenu", capacity: "200 kg/batch", utilities: "Électricité ou gaz", price: 18000 },
    { name: "Fraiseuse", role: "Usinage des pièces", capacity: "150 pièces/jour", utilities: "Électricité 7kW", price: 12000 },
    { name: "Tour parallèle", role: "Usinage cylindrique", capacity: "100 pièces/jour", utilities: "Électricité 5kW", price: 10000 },
    { name: "Meuleuse plane", role: "Finition des surfaces", capacity: "200 pièces/jour", utilities: "Électricité 3kW", price: 6000 },
    { name: "Poste à affûter", role: "Affutage des lames", capacity: "150 pièces/jour", utilities: "Électricité 1kW", price: 2000 },
    { name: "Marqueuse laser", role: "Marquage des outils", capacity: "300 pièces/jour", utilities: "Électricité", price: 8000 }
  ]
},

recyclage_metaux: {
  up_nom: "Recyclage de métaux",
  machines: [
    { name: "Broyeur à métaux", role: "Broyage des ferrailles", capacity: "2 tonnes/heure", utilities: "Électricité 45kW", price: 45000 },
    { name: "Séparateur magnétique", role: "Séparation ferreux/non ferreux", capacity: "2 tonnes/heure", utilities: "Électricité", price: 15000 },
    { name: "Compacteur à métaux", role: "Mise en balles", capacity: "1 tonne/heure", utilities: "Électricité 15kW", price: 20000 },
    { name: "Cisaille hydraulique", role: "Découpe des gros métaux", capacity: "3 tonnes/heure", utilities: "Électricité 30kW", price: 35000 },
    { name: "Four de fusion", role: "Fusion des métaux", capacity: "500 kg/batch", utilities: "Électricité ou fioul", price: 60000 },
    { name: "Pont roulant", role: "Manutention des charges", capacity: "5 tonnes", utilities: "Électricité", price: 25000 },
    { name: "Bascule pont", role: "Pesage des lots", capacity: "10 tonnes", utilities: "Électricité", price: 8000 }
  ]
},

chaudronnerie: {
  up_nom: "Chaudronnerie industrielle",
  machines: [
    { name: "Rouleuse", role: "Cintrage des tôles", capacity: "300 cm largeur", utilities: "Électricité 10kW", price: 25000 },
    { name: "Cisaille guillotine", role: "Découpe des tôles", capacity: "400 cm largeur", utilities: "Électricité 7kW", price: 18000 },
    { name: "Poste à souder TIG/ARC", role: "Soudure de précision", capacity: "100 m/jour", utilities: "Électricité 10kW", price: 8000 },
    { name: "Poste à souder automatique", role: "Soudure robotisée", capacity: "200 m/jour", utilities: "Électricité 12kW", price: 25000 },
    { name: "Perceuse radiale", role: "Perçage des cuves", capacity: "100 pièces/jour", utilities: "Électricité 5kW", price: 12000 },
    { name: "Meuleuse à soufre", role: "Rectification des soudures", capacity: "Standard", utilities: "Air comprimé", price: 3000 },
    { name: "Contrôle non destructif", role: "Contrôle qualité soudures", capacity: "Standard", utilities: "Électricité", price: 15000 }
  ]
},

mecanosoudure: {
  up_nom: "Mécanosoudure",
  machines: [
    { name: "Poste à souder", role: "Soudure générale", capacity: "150 m/jour", utilities: "Électricité 8kW", price: 5000 },
    { name: "Laminoir", role: "Cintrage des barres", capacity: "100 m/jour", utilities: "Électricité 4kW", price: 8000 },
    { name: "Plieuse", role: "Pliage des profilés", capacity: "100 pièces/jour", utilities: "Électricité 5kW", price: 10000 },
    { name: "Fraiseuse", role: "Usinage des pièces", capacity: "80 pièces/jour", utilities: "Électricité 7kW", price: 12000 },
    { name: "Tour", role: "Tournage des pièces", capacity: "80 pièces/jour", utilities: "Électricité 5kW", price: 10000 },
    { name: "Poste à découper plasma", role: "Découpe rapide", capacity: "200 m/heure", utilities: "Électricité + air", price: 15000 },
    { name: "Marqueuse", role: "Marquage des pièces", capacity: "300 pièces/jour", utilities: "Électricité", price: 4000 }
  ]
},

structures: {
  up_nom: "Structures métalliques",
  machines: [
    { name: "Scie à ruban", role: "Découpe des poutrelles", capacity: "200 coupes/jour", utilities: "Électricité 4kW", price: 8000 },
    { name: "Poste à souder MAG", role: "Soudure des structures", capacity: "200 m/jour", utilities: "Électricité 10kW", price: 7000 },
    { name: "Pont roulant 10T", role: "Manutention lourde", capacity: "10 tonnes", utilities: "Électricité", price: 30000 },
    { name: "Niveleuse", role: "Aplanissement des tôles", capacity: "100 m²/jour", utilities: "Électricité", price: 15000 },
    { name: "Poinçonneuse", role: "Perçage et poinçonnage", capacity: "100 pièces/jour", utilities: "Électricité 5kW", price: 12000 },
    { name: "Cabine de grenaillage", role: "Traitement surface", capacity: "500 m²/jour", utilities: "Électricité + air", price: 25000 },
    { name: "Poste peinture", role: "Peinture des structures", capacity: "300 m²/jour", utilities: "Électricité", price: 10000 }
  ]
},

pieces: {
  up_nom: "Pièces mécaniques",
  machines: [
    { name: "Tour CNC", role: "Usinage de précision", capacity: "100 pièces/jour", utilities: "Électricité 10kW", price: 35000 },
    { name: "Fraiseuse CNC", role: "Usinage complexe", capacity: "80 pièces/jour", utilities: "Électricité 12kW", price: 40000 },
    { name: "Rectifieuse plane", role: "Finition des surfaces", capacity: "100 pièces/jour", utilities: "Électricité 5kW", price: 20000 },
    { name: "Perceuse CNC", role: "Perçage de précision", capacity: "200 pièces/jour", utilities: "Électricité 4kW", price: 18000 },
    { name: "Électro-érosion", role: "Usinage de formes complexes", capacity: "50 pièces/jour", utilities: "Électricité + diélectrique", price: 50000 },
    { name: "Contrôle 3D", role: "Mesure dimensionnelle", capacity: "Standard", utilities: "Électricité", price: 25000 },
    { name: "Laveuse industrielle", role: "Nettoyage des pièces", capacity: "500 pièces/jour", utilities: "Eau + électricité", price: 15000 }
  ]
},

quincaillerie: {
  up_nom: "Quincaillerie métallique",
  machines: [
    { name: "Dérouleuse", role: "Déroulage des fils", capacity: "500 m/heure", utilities: "Électricité 2kW", price: 5000 },
    { name: "Ligne de tréfilage", role: "Réduction des sections", capacity: "300 kg/heure", utilities: "Électricité 15kW", price: 25000 },
    { name: "Machine à visser", role: "Production de vis", capacity: "1000 pièces/heure", utilities: "Électricité 3kW", price: 15000 },
    { name: "Presse à froid", role: "Emboutissage à froid", capacity: "800 pièces/heure", utilities: "Électricité 7kW", price: 20000 },
    { name: "Four de traitement", role: "Traitement thermique", capacity: "200 kg/batch", utilities: "Électricité", price: 18000 },
    { name: "Galvanoplastie", role: "Traitement de surface", capacity: "500 kg/jour", utilities: "Électricité + eau", price: 30000 },
    { name: "Machine à emballer", role: "Conditionnement", capacity: "1000 boîtes/jour", utilities: "Électricité", price: 8000 }
  ]
},

  // ==============================================
// 5. PLASTIQUE & CAOUTCHOUC
// ==============================================

sacs: {
  up_nom: "Production de sacs plastiques",
  machines: [
    { name: "Extrudeuse soufflage", role: "Production de film", capacity: "100 kg/heure", utilities: "Électricité 30kW", price: 35000 },
    { name: "Imprimeuse flexo", role: "Impression des sacs", capacity: "200 m/min", utilities: "Électricité", price: 25000 },
    { name: "Découpeuse sachets", role: "Découpe et soudure", capacity: "150 cycles/min", utilities: "Électricité 5kW", price: 18000 },
    { name: "Perforatrice", role: "Perforation des anses", capacity: "100 sacs/min", utilities: "Électricité", price: 8000 },
    { name: "Broyeur", role: "Recyclage des chutes", capacity: "50 kg/heure", utilities: "Électricité 10kW", price: 12000 },
    { name: "Machine à ourlet", role: "Ourlet des sacs", capacity: "100 sacs/min", utilities: "Électricité + chaleur", price: 10000 },
    { name: "Poste contrôle qualité", role: "Inspection épaisseur", capacity: "Standard", utilities: "Électricité", price: 5000 }
  ]
},

bouteilles_pet: {
  up_nom: "Soufflage de bouteilles PET",
  machines: [
    { name: "Sécheur déshumidificateur", role: "Séchage des grains", capacity: "100 kg/heure", utilities: "Électricité 15kW", price: 15000 },
    { name: "Injection préforme", role: "Production préformes", capacity: "1000 préformes/heure", utilities: "Électricité 25kW", price: 50000 },
    { name: "Souffleuse rotative", role: "Soufflage bouteilles", capacity: "2000 bouteilles/heure", utilities: "Air comprimé + électricité", price: 60000 },
    { name: "Refroidisseur", role: "Refroidissement bouteilles", capacity: "Standard", utilities: "Électricité + eau", price: 15000 },
    { name: "Palettiseur", role: "Palettisation", capacity: "2000 bouteilles/heure", utilities: "Électricité + air", price: 25000 },
    { name: "Contrôle qualité", role: "Inspection fuites", capacity: "Standard", utilities: "Air comprimé", price: 10000 }
  ]
},

tuyaux_pvc: {
  up_nom: "Tuyaux PVC",
  machines: [
    { name: "Extrudeuse PVC", role: "Extrusion des tuyaux", capacity: "200 kg/heure", utilities: "Électricité 45kW", price: 45000 },
    { name: "Bain de calibrage", role: "Calibrage et refroidissement", capacity: "Standard", utilities: "Eau + électricité", price: 15000 },
    { name: "Tireuse", role: "Tirage continu", capacity: "10 m/min", utilities: "Électricité", price: 12000 },
    { name: "Scie à tronçonner", role: "Coupe à longueur", capacity: "1 coupe/10 sec", utilities: "Électricité", price: 10000 },
    { name: "Machine à emboîter", role: "Préparation emboîtements", capacity: "5 m/min", utilities: "Électricité", price: 8000 },
    { name: "Poste impression", role: "Marquage sérigraphie", capacity: "10 m/min", utilities: "Électricité", price: 7000 },
    { name: "Contrôle qualité", role: "Contrôle épaisseur", capacity: "Standard", utilities: "Électricité", price: 6000 }
  ]
},

emballages: {
  up_nom: "Emballages plastiques",
  machines: [
    { name: "Extrudeuse film étirable", role: "Production film étirable", capacity: "150 kg/heure", utilities: "Électricité 35kW", price: 40000 },
    { name: "Thermoformeuse", role: "Formage barquettes", capacity: "2000 barquettes/heure", utilities: "Électricité + air", price: 35000 },
    { name: "Découpeuse", role: "Découpe emballages", capacity: "3000 pièces/heure", utilities: "Électricité", price: 18000 },
    { name: "Machine à sceller", role: "Soudure thermique", capacity: "1000 scellages/heure", utilities: "Électricité + chaleur", price: 12000 },
    { name: "Imprimeuse", role: "Impression emballages", capacity: "200 m/min", utilities: "Électricité", price: 25000 },
    { name: "Enrouleuse", role: "Bobinage film", capacity: "50 rouleaux/heure", utilities: "Électricité", price: 10000 },
    { name: "Contrôle qualité", role: "Test d'étanchéité", capacity: "Standard", utilities: "Air comprimé", price: 8000 }
  ]
},

profilés: {
  up_nom: "Profilés plastiques",
  machines: [
    { name: "Extrudeuse bi-vis", role: "Extrusion profilés", capacity: "250 kg/heure", utilities: "Électricité 55kW", price: 60000 },
    { name: "Bain de refroidissement", role: "Refroidissement calibré", capacity: "Standard", utilities: "Eau + électricité", price: 20000 },
    { name: "Tireuse à chenilles", role: "Tirage continu", capacity: "15 m/min", utilities: "Électricité", price: 18000 },
    { name: "Scie à onglet", role: "Coupe précise", capacity: "1 coupe/5 sec", utilities: "Électricité", price: 12000 },
    { name: "Calibreuse", role: "Calibrage final", capacity: "10 m/min", utilities: "Électricité", price: 10000 },
    { name: "Poste assemblage", role: "Assemblage profilés", capacity: "200 m/jour", utilities: "Électricité", price: 15000 },
    { name: "Contrôle qualité", role: "Contrôle dimensions", capacity: "Standard", utilities: "Électricité", price: 8000 }
  ]
},

jouets: {
  up_nom: "Jouets en plastique",
  machines: [
    { name: "Presse à injecter", role: "Injection jouets", capacity: "200 pièces/heure", utilities: "Électricité 15kW", price: 35000 },
    { name: "Moule 2 cavités", role: "Moulage pièces", capacity: "Standard", utilities: "—", price: 8000 },
    { name: "Robot de démoulage", role: "Extraction pièces", capacity: "200 cycles/heure", utilities: "Air comprimé", price: 15000 },
    { name: "Poste assemblage", role: "Assemblage manuel", capacity: "100 pièces/heure", utilities: "Standard", price: 5000 },
    { name: "Imprimeuse tampon", role: "Impression motifs", capacity: "300 pièces/heure", utilities: "Électricité + air", price: 12000 },
    { name: "Poste contrôle qualité", role: "Inspection visuelle", capacity: "Standard", utilities: "Électricité", price: 5000 },
    { name: "Ensacheuse", role: "Conditionnement", capacity: "500 sachets/heure", utilities: "Électricité", price: 8000 }
  ]
},

joints: {
  up_nom: "Joints en caoutchouc",
  machines: [
    { name: "Mélangeur interne", role: "Malaxage caoutchouc", capacity: "200 kg/batch", utilities: "Électricité 45kW", price: 50000 },
    { name: "Calandreuse", role: "Mise en nappe", capacity: "300 kg/heure", utilities: "Électricité 30kW", price: 45000 },
    { name: "Presse vulcanisation", role: "Vulcanisation joints", capacity: "1000 joints/heure", utilities: "Électricité + chaleur", price: 35000 },
    { name: "Découpeuse à jet eau", role: "Découpe précise", capacity: "200 m/heure", utilities: "Eau + électricité", price: 30000 },
    { name: "Affleureuse", role: "Finition bords", capacity: "500 pièces/heure", utilities: "Électricité", price: 12000 },
    { name: "Poste contrôle", role: "Test d'étanchéité", capacity: "Standard", utilities: "Air comprimé", price: 10000 },
    { name: "Séchoir", role: "Séchage finition", capacity: "300 kg/batch", utilities: "Électricité", price: 15000 }
  ]
},

granules: {
  up_nom: "Granulés plastiques recyclés",
  machines: [
    { name: "Broyeur lourd", role: "Broyage plastiques", capacity: "500 kg/heure", utilities: "Électricité 55kW", price: 45000 },
    { name: "Laveuse à friction", role: "Lavage", capacity: "500 kg/heure", utilities: "Eau + électricité", price: 25000 },
    { name: "Séparateur densimétrique", role: "Séparation matières", capacity: "500 kg/heure", utilities: "Électricité + air", price: 20000 },
    { name: "Sécheur centrifuge", role: "Séchage", capacity: "500 kg/heure", utilities: "Électricité", price: 18000 },
    { name: "Extrudeuse granulation", role: "Granulation", capacity: "300 kg/heure", utilities: "Électricité 75kW", price: 80000 },
    { name: "Trempe", role: "Refroidissement", capacity: "300 kg/heure", utilities: "Eau", price: 10000 },
    { name: "Silor de stockage", role: "Stockage granulés", capacity: "30 tonnes", utilities: "—", price: 25000 },
    { name: "Ensacheuse big bag", role: "Conditionnement", capacity: "20 big bags/heure", utilities: "Électricité + air", price: 20000 }
  ]
},

  // ==============================================
// 6. ÉLECTRONIQUE & ÉLECTRICITÉ
// ==============================================

cables: {
  up_nom: "Câbles électriques",
  machines: [
    { name: "Tréfileuse", role: "Tréfilage du cuivre", capacity: "200 kg/heure", utilities: "Électricité 45kW", price: 60000 },
    { name: "Recuiseuse", role: "Recuisson cuivre", capacity: "200 kg/heure", utilities: "Électricité + eau", price: 25000 },
    { name: "Extrudeuse isolation", role: "Gaine isolation", capacity: "150 kg/heure", utilities: "Électricité 55kW", price: 70000 },
    { name: "Cabieuse", role: "Câblage conducteurs", capacity: "100 m/min", utilities: "Électricité 30kW", price: 80000 },
    { name: "Machine à gainer", role: "Gaine extérieure", capacity: "100 m/min", utilities: "Électricité", price: 50000 },
    { name: "Enrouleuse", role: "Bobinage câbles", capacity: "50 bobines/heure", utilities: "Électricité", price: 20000 },
    { name: "Contrôle haute tension", role: "Test isolation", capacity: "Standard", utilities: "Électricité", price: 25000 }
  ]
},

panneaux_solaires: {
  up_nom: "Assemblage de panneaux solaires",
  machines: [
    { name: "Lamineur", role: "Lamination cellules", capacity: "200 panneaux/jour", utilities: "Électricité + vide", price: 80000 },
    { name: "Stringer", role: "Soudage cellules", capacity: "1000 cellules/heure", utilities: "Électricité", price: 60000 },
    { name: "Machine à cadre", role: "Montage cadres alu", capacity: "200 panneaux/jour", utilities: "Électricité + air", price: 30000 },
    { name: "Testeur flash", role: "Test puissance", capacity: "1 panneau/min", utilities: "Électricité", price: 40000 },
    { name: "Découpeuse verre", role: "Découpe verre trempé", capacity: "300 panneaux/jour", utilities: "Électricité", price: 25000 },
    { name: "Poste contrôle qualité", role: "Inspection cellules", capacity: "Standard", utilities: "Électricité", price: 15000 },
    { name: "Palettiseur", role: "Palettisation", capacity: "200 panneaux/jour", utilities: "Électricité", price: 20000 }
  ]
},

appareils: {
  up_nom: "Assemblage d'appareils électroniques",
  machines: [
    { name: "Ligne SMT", role: "Placement composants", capacity: "20000 composants/heure", utilities: "Électricité 15kW", price: 150000 },
    { name: "Four à refusion", role: "Soudure CMS", capacity: "Standard", utilities: "Électricité", price: 40000 },
    { name: "Poste brasage", role: "Brasage manuel", capacity: "100 cartes/jour", utilities: "Électricité", price: 5000 },
    { name: "Testeur fonctionnel", role: "Test électronique", capacity: "50 appareils/heure", utilities: "Électricité", price: 30000 },
    { name: "Boîtier d'assemblage", role: "Montage boîtier", capacity: "100 appareils/heure", utilities: "Air comprimé", price: 15000 },
    { name: "Machine à étiqueter", role: "Étiquetage SN", capacity: "200 appareils/heure", utilities: "Électricité", price: 8000 },
    { name: "Poste contrôle qualité", role: "Inspection visuelle", capacity: "Standard", utilities: "Électricité", price: 10000 }
  ]
},

led: {
  up_nom: "Lampes LED",
  machines: [
    { name: "Pick & place LED", role: "Placement LED", capacity: "10000 LED/heure", utilities: "Électricité 10kW", price: 80000 },
    { name: "Four à refusion", role: "Soudure LED", capacity: "Standard", utilities: "Électricité", price: 30000 },
    { name: "Assembleuse driver", role: "Assemblage driver", capacity: "200 drivers/heure", utilities: "Air comprimé", price: 20000 },
    { name: "Testeur photométrique", role: "Test flux lumineux", capacity: "200 lampes/heure", utilities: "Électricité", price: 35000 },
    { name: "Machine à encapsuler", role: "Encapsulation LED", capacity: "500 ampoules/heure", utilities: "Électricité", price: 40000 },
    { name: "Poste contrôle qualité", role: "Test durée vie", capacity: "Standard", utilities: "Électricité", price: 15000 },
    { name: "Ensacheuse", role: "Conditionnement", capacity: "500 boîtes/heure", utilities: "Électricité", price: 10000 }
  ]
},

tableaux: {
  up_nom: "Tableaux électriques",
  machines: [
    { name: "Découpeuse tôle", role: "Découpe armoires", capacity: "20 m²/heure", utilities: "Électricité 7kW", price: 25000 },
    { name: "Plieuse CNC", role: "Pliage armoires", capacity: "100 pièces/jour", utilities: "Électricité 5kW", price: 35000 },
    { name: "Poste câblage", role: "Câblage manuel", capacity: "20 tableaux/jour", utilities: "Électricité", price: 8000 },
    { name: "Poinçonneuse", role: "Perçage, découpe", capacity: "50 tableaux/jour", utilities: "Électricité 4kW", price: 20000 },
    { name: "Testeur diélectrique", role: "Test iso", capacity: "20 tableaux/jour", utilities: "Électricité", price: 15000 },
    { name: "Poste marquage", role: "Marquage étiquettes", capacity: "1000 étiquettes/jour", utilities: "Électricité", price: 5000 },
    { name: "Contrôle qualité", role: "Test fonctionnel", capacity: "Standard", utilities: "Électricité", price: 10000 }
  ]
},

onduleurs: {
  up_nom: "Onduleurs solaires",
  machines: [
    { name: "Ligne SMT", role: "CMS", capacity: "20000 comp/heure", utilities: "Électricité 15kW", price: 150000 },
    { name: "Four refusion", role: "Brasage CMS", capacity: "Standard", utilities: "Électricité", price: 30000 },
    { name: "Poste brasage THT", role: "Composants trous", capacity: "100 cartes/jour", utilities: "Électricité", price: 8000 },
    { name: "Assemblage", role: "Montage boîtier", capacity: "100 onduleurs/jour", utilities: "Air comprimé", price: 15000 },
    { name: "Simulateur solaire", role: "Test charge", capacity: "50 onduleurs/jour", utilities: "Électricité", price: 50000 },
    { name: "Poste conformal", role: "Application vernis", capacity: "100 cartes/jour", utilities: "Électricité", price: 15000 },
    { name: "Contrôle qualité", role: "Test final", capacity: "Standard", utilities: "Électricité", price: 12000 }
  ]
},

compteurs: {
  up_nom: "Compteurs électriques",
  machines: [
    { name: "Ligne SMT", role: "Placement CMS", capacity: "15000 comp/heure", utilities: "Électricité 12kW", price: 120000 },
    { name: "Four refusion", role: "Brasage", capacity: "Standard", utilities: "Électricité", price: 30000 },
    { name: "Étalonneur", role: "Calibration", capacity: "200 compteurs/heure", utilities: "Électricité", price: 45000 },
    { name: "Machine à souder", role: "Soudure batterie", capacity: "200 compteurs/heure", utilities: "Électricité", price: 15000 },
    { name: "Testeur RFID", role: "Test communication", capacity: "200 compteurs/heure", utilities: "Électricité", price: 20000 },
    { name: "Boîtier d'assemblage", role: "Montage boîtier", capacity: "200 compteurs/heure", utilities: "Air comprimé", price: 10000 },
    { name: "Contrôle qualité", role: "Test métrologique", capacity: "Standard", utilities: "Électricité", price: 18000 }
  ]
},

batteries: {
  up_nom: "Batteries",
  machines: [
    { name: "Presse à électrode", role: "Fabrication électrodes", capacity: "500 électrodes/heure", utilities: "Électricité 20kW", price: 60000 },
    { name: "Enrouleuse", role: "Bobinage", capacity: "200 cellules/heure", utilities: "Électricité", price: 50000 },
    { name: "Machine à souder", role: "Soudure collecteurs", capacity: "200 cellules/heure", utilities: "Électricité 5kW", price: 25000 },
    { name: "Remplisseuse électrolyte", role: "Dosage électrolyte", capacity: "200 cellules/heure", utilities: "Air comprimé", price: 30000 },
    { name: "Formation batterie", role: "Cyclage", capacity: "100 batteries/batch", utilities: "Électricité", price: 45000 },
    { name: "Testeur capacité", role: "Test décharge", capacity: "50 batteries/heure", utilities: "Électricité", price: 35000 },
    { name: "Contrôle qualité", role: "Test final", capacity: "Standard", utilities: "Électricité", price: 15000 }
  ]
},

  // ==============================================
// 7. BTP & MATÉRIAUX DE CONSTRUCTION
// ==============================================

cimenterie: {
  up_nom: "Mini-cimenterie",
  machines: [
    { name: "Broyeur à boulets", role: "Broyage clinker", capacity: "5 tonnes/heure", utilities: "Électricité 250kW", price: 150000 },
    { name: "Four rotatif", role: "Cuisson", capacity: "5 tonnes/heure", utilities: "Fioul + électricité", price: 200000 },
    { name: "Préchauffeur cyclone", role: "Préchauffage farine", capacity: "5 tonnes/heure", utilities: "Électricité", price: 80000 },
    { name: "Silotage ciment", role: "Stockage", capacity: "500 tonnes", utilities: "Électricité", price: 50000 },
    { name: "Ensacheuse rotative", role: "Conditionnement", capacity: "1000 sacs/heure", utilities: "Électricité + air", price: 40000 },
    { name: "Laboratoire", role: "Contrôle qualité", capacity: "Standard", utilities: "Électricité", price: 30000 },
    { name: "Dépoussiéreur", role: "Filtration", capacity: "5000 m³/h", utilities: "Électricité", price: 35000 }
  ]
},

briques: {
  up_nom: "Briques & BTC",
  machines: [
    { name: "Broyeur", role: "Broyage terre", capacity: "3 tonnes/heure", utilities: "Électricité 30kW", price: 25000 },
    { name: "Malaxeur", role: "Mélange terre/eau", capacity: "2 tonnes/batch", utilities: "Électricité 15kW", price: 15000 },
    { name: "Presse hydraulique BTC", role: "Compression briques", capacity: "1000 briques/heure", utilities: "Électricité 10kW", price: 40000 },
    { name: "Four tunnel", role: "Cuisson briques", capacity: "10000 briques/jour", utilities: "Gaz + électricité", price: 80000 },
    { name: "Séchoir", role: "Séchage", capacity: "10000 briques/batch", utilities: "Gaz", price: 30000 },
    { name: "Palettiseur", role: "Palettisation", capacity: "1000 briques/heure", utilities: "Électricité + air", price: 25000 },
    { name: "Contrôle qualité", role: "Test compression", capacity: "Standard", utilities: "Électricité", price: 10000 }
  ]
},

prefab: {
  up_nom: "Éléments préfabriqués béton",
  machines: [
    { name: "Centrale à béton", role: "Production béton", capacity: "20 m³/heure", utilities: "Électricité 30kW", price: 60000 },
    { name: "Machine à poutrelles", role: "Fabrication poutrelles", capacity: "500 m/jour", utilities: "Électricité", price: 45000 },
    { name: "Machine à hourdis", role: "Fabrication hourdis", capacity: "1000 pièces/jour", utilities: "Électricité", price: 35000 },
    { name: "Table vibrante", role: "Compactage", capacity: "Standard", utilities: "Électricité", price: 15000 },
    { name: "Étendoir", role: "Stockage cure", capacity: "500 m²", utilities: "—", price: 20000 },
    { name: "Pont roulant", role: "Manutention", capacity: "5 tonnes", utilities: "Électricité", price: 25000 },
    { name: "Contrôle qualité", role: "Test béton", capacity: "Standard", utilities: "Électricité", price: 10000 }
  ]
},

tuiles: {
  up_nom: "Tuiles",
  machines: [
    { name: "Broyeur", role: "Broyage argile", capacity: "2 tonnes/heure", utilities: "Électricité 22kW", price: 20000 },
    { name: "Malaxeur", role: "Mélange", capacity: "1.5 tonnes/heure", utilities: "Électricité 11kW", price: 12000 },
    { name: "Extrudeuse", role: "Extrusion bande", capacity: "2 tonnes/heure", utilities: "Électricité 18kW", price: 35000 },
    { name: "Presse à tuile", role: "Formage tuiles", capacity: "500 tuiles/heure", utilities: "Électricité 15kW", price: 40000 },
    { name: "Four", role: "Cuisson", capacity: "5000 tuiles/jour", utilities: "Gaz + électricité", price: 70000 },
    { name: "Engobeuse", role: "Émaillage", capacity: "500 tuiles/heure", utilities: "Électricité", price: 15000 },
    { name: "Contrôle qualité", role: "Inspection", capacity: "Standard", utilities: "Électricité", price: 8000 }
  ]
},

agglos: {
  up_nom: "Agglos & parpaings",
  machines: [
    { name: "Centrale à béton", role: "Production béton", capacity: "15 m³/heure", utilities: "Électricité 25kW", price: 50000 },
    { name: "Vibreuse à agglos", role: "Compactage", capacity: "500 agglos/heure", utilities: "Électricité 10kW", price: 35000 },
    { name: "Étendoir automatisé", role: "Cure", capacity: "5000 agglos/batch", utilities: "Électricité", price: 20000 },
    { name: "Palettiseur", role: "Palettisation", capacity: "500 agglos/heure", utilities: "Électricité + air", price: 25000 },
    { name: "Fendeuse", role: "Fendage agglos", capacity: "200 agglos/heure", utilities: "Électricité", price: 15000 },
    { name: "Contrôle qualité", role: "Test résistance", capacity: "Standard", utilities: "Électricité", price: 10000 },
    { name: "Ensacheuse", role: "Conditionnement", capacity: "200 sacs/heure", utilities: "Électricité", price: 12000 }
  ]
},

peintures_btp: {
  up_nom: "Peintures BTP",
  machines: [
    { name: "Disperseur", role: "Dispersion pigments", capacity: "2000 L/batch", utilities: "Électricité 30kW", price: 30000 },
    { name: "Broyeur à billes", role: "Broyage fin", capacity: "500 L/heure", utilities: "Électricité 22kW", price: 35000 },
    { name: "Cuve mélangeuse", role: "Formulation", capacity: "5000 L", utilities: "Électricité 15kW", price: 25000 },
    { name: "Filtre", role: "Filtration", capacity: "2000 L/heure", utilities: "Électricité", price: 10000 },
    { name: "Remplisseuse", role: "Conditionnement", capacity: "1000 seaux/heure", utilities: "Électricité + air", price: 20000 },
    { name: "Étiqueteuse", role: "Étiquetage", capacity: "1000 seaux/heure", utilities: "Électricité", price: 8000 },
    { name: "Laboratoire", role: "Contrôle qualité", capacity: "Standard", utilities: "Électricité", price: 20000 }
  ]
},

centrale_beton: {
  up_nom: "Centrale à béton",
  machines: [
    { name: "Trémie doseuse agrégats", role: "Dosage", capacity: "50 m³/heure", utilities: "Électricité 5kW", price: 30000 },
    { name: "Vis doseuse ciment", role: "Dosage ciment", capacity: "50 m³/heure", utilities: "Électricité 3kW", price: 15000 },
    { name: "Malaxeur", role: "Mélange", capacity: "2 m³/batch", utilities: "Électricité 45kW", price: 40000 },
    { name: "Système eau", role: "Dosage eau", capacity: "200 L/min", utilities: "Électricité", price: 10000 },
    { name: "Benne benne", role: "Évacuation", capacity: "2 m³", utilities: "Hydraulique", price: 20000 },
    { name: "Silo ciment", role: "Stockage", capacity: "50 tonnes", utilities: "Électricité", price: 25000 },
    { name: "Système informatique", role: "Pilotage", capacity: "Standard", utilities: "Électricité", price: 15000 }
  ]
},

menuiserie: {
  up_nom: "Menuiserie aluminium & PVC",
  machines: [
    { name: "Scie à double tête", role: "Découpe profilés", capacity: "200 coupes/heure", utilities: "Électricité 5kW", price: 30000 },
    { name: "Centre d'usinage", role: "Perçage, fraisage", capacity: "100 pièces/heure", utilities: "Électricité 7kW", price: 45000 },
    { name: "Soudeuse PVC", role: "Soudure angles", capacity: "200 angles/heure", utilities: "Électricité + air", price: 20000 },
    { name: "Ébavureuse", role: "Ébavurage", capacity: "200 châssis/jour", utilities: "Électricité", price: 10000 },
    { name: "Machine à poser joints", role: "Pose joints", capacity: "200 châssis/jour", utilities: "Électricité", price: 8000 },
    { name: "Poste assemblage", role: "Montage final", capacity: "100 châssis/jour", utilities: "Air comprimé", price: 15000 },
    { name: "Contrôle qualité", role: "Inspection", capacity: "Standard", utilities: "Électricité", price: 8000 }
  ]
},

  // ==============================================
// 8. PETITS MATÉRIELS MÉDICAUX
// ==============================================

masques: {
  up_nom: "Masques médicaux",
  machines: [
    { name: "Ligne complète masques", role: "Fabrication masques", capacity: "100 masques/min", utilities: "Électricité 5kW", price: 45000 },
    { name: "Soudeuse à ultrasons", role: "Soudage élastiques", capacity: "80 masques/min", utilities: "Électricité 2kW", price: 15000 },
    { name: "Presse à découper", role: "Découpe forme", capacity: "100 masques/min", utilities: "Électricité 3kW", price: 20000 },
    { name: "Machine à plier", role: "Pliage masques", capacity: "80 masques/min", utilities: "Électricité", price: 12000 },
    { name: "Étui de stérilisation", role: "Stérilisation UV", capacity: "10000 masques/batch", utilities: "Électricité", price: 25000 },
    { name: "Ensacheuse automatique", role: "Conditionnement", capacity: "50 sachets/min", utilities: "Électricité + air", price: 15000 },
    { name: "Poste contrôle qualité", role: "Test filtration", capacity: "Standard", utilities: "Électricité", price: 20000 }
  ]
},

pansements: {
  up_nom: "Bandages & pansements",
  machines: [
    { name: "Tisseuse gaze", role: "Tissage gaze", capacity: "200 m/heure", utilities: "Électricité 10kW", price: 35000 },
    { name: "Découpeuse rotative", role: "Découpe bandes", capacity: "500 rouleaux/heure", utilities: "Électricité 5kW", price: 25000 },
    { name: "Machine à enrouler", role: "Enroulage bandes", capacity: "400 rouleaux/heure", utilities: "Électricité", price: 18000 },
    { name: "Stérilisateur", role: "Stérilisation", capacity: "1000 rouleaux/batch", utilities: "Électricité + vapeur", price: 30000 },
    { name: "Ensacheuse", role: "Conditionnement", capacity: "300 sachets/heure", utilities: "Électricité", price: 12000 },
    { name: "Poste contrôle", role: "Test absorption", capacity: "Standard", utilities: "Électricité", price: 10000 },
    { name: "Gencleuse", role: "Finition bords", capacity: "400 rouleaux/heure", utilities: "Électricité", price: 8000 }
  ]
},

mobilier: {
  up_nom: "Mobilier médical",
  machines: [
    { name: "Poste à souder TIG", role: "Soudure tubes", capacity: "50 lits/jour", utilities: "Électricité 8kW", price: 8000 },
    { name: "Cintreuse", role: "Cintrage tubes", capacity: "100 pièces/jour", utilities: "Électricité 5kW", price: 15000 },
    { name: "Coupeuse", role: "Découpe tubes", capacity: "200 coupes/jour", utilities: "Électricité 3kW", price: 8000 },
    { name: "Plieuse", role: "Pliage tôles", capacity: "100 pièces/jour", utilities: "Électricité 4kW", price: 12000 },
    { name: "Riveteuse", role: "Assemblage", capacity: "200 rivets/heure", utilities: "Air comprimé", price: 5000 },
    { name: "Cabine peinture", role: "Peinture", capacity: "50 lits/jour", utilities: "Électricité", price: 20000 },
    { name: "Contrôle qualité", role: "Test charges", capacity: "Standard", utilities: "Électricité", price: 10000 }
  ]
},

fauteuils: {
  up_nom: "Fauteuils roulants",
  machines: [
    { name: "Poste à souder", role: "Soudure châssis", capacity: "30 fauteuils/jour", utilities: "Électricité 6kW", price: 7000 },
    { name: "Cintreuse", role: "Cintrage tubes", capacity: "100 pièces/jour", utilities: "Électricité", price: 12000 },
    { name: "Machine à riveter", role: "Assemblage", capacity: "30 fauteuils/jour", utilities: "Air comprimé", price: 6000 },
    { name: "Presse monte-roue", role: "Montage roues", capacity: "30 fauteuils/jour", utilities: "Électricité", price: 8000 },
    { name: "Poste sellerie", role: "Assise et dossier", capacity: "30 fauteuils/jour", utilities: "Électricité", price: 5000 },
    { name: "Poste réglage", role: "Réglages finaux", capacity: "30 fauteuils/jour", utilities: "Électricité", price: 5000 },
    { name: "Contrôle qualité", role: "Test stabilité", capacity: "Standard", utilities: "Électricité", price: 8000 }
  ]
},

instruments: {
  up_nom: "Instruments médicaux de base",
  machines: [
    { name: "Tour CNC", role: "Usinage précision", capacity: "100 pièces/jour", utilities: "Électricité 10kW", price: 40000 },
    { name: "Fraiseuse CNC", role: "Usinage complexe", capacity: "80 pièces/jour", utilities: "Électricité 12kW", price: 45000 },
    { name: "Polisseuse", role: "Finition miroir", capacity: "200 pièces/jour", utilities: "Électricité 5kW", price: 15000 },
    { name: "Laveur ultrason", role: "Nettoyage", capacity: "500 pièces/batch", utilities: "Électricité 3kW", price: 12000 },
    { name: "Stérilisateur", role: "Stérilisation", capacity: "500 pièces/batch", utilities: "Électricité", price: 20000 },
    { name: "Marqueur laser", role: "Marquage", capacity: "300 pièces/jour", utilities: "Électricité", price: 20000 },
    { name: "Contrôle qualité", role: "Test dimensionnel", capacity: "Standard", utilities: "Électricité", price: 15000 }
  ]
},

bequilles: {
  up_nom: "Béquilles & cannes",
  machines: [
    { name: "Scie à tronçonner", role: "Découpe tubes", capacity: "500 coupes/jour", utilities: "Électricité 3kW", price: 8000 },
    { name: "Cintreuse", role: "Cintrage", capacity: "300 pièces/jour", utilities: "Électricité 4kW", price: 12000 },
    { name: "Poste perçage", role: "Percage réglages", capacity: "300 pièces/jour", utilities: "Électricité", price: 5000 },
    { name: "Machine à emboutir", role: "Emboutissage", capacity: "300 pièces/jour", utilities: "Électricité", price: 10000 },
    { name: "Cabine peinture", role: "Peinture", capacity: "300 pièces/jour", utilities: "Électricité", price: 15000 },
    { name: "Poste montage", role: "Montage poignées", capacity: "300 pièces/jour", utilities: "—", price: 3000 },
    { name: "Contrôle qualité", role: "Test résistance", capacity: "Standard", utilities: "Électricité", price: 5000 }
  ]
},

antiseptiques: {
  up_nom: "Solutions antiseptiques",
  machines: [
    { name: "Cuve mélangeuse", role: "Formulation", capacity: "2000 L/batch", utilities: "Électricité 10kW", price: 20000 },
    { name: "Mélangeur", role: "Homogénéisation", capacity: "2000 L/heure", utilities: "Électricité 7kW", price: 10000 },
    { name: "Système dosage", role: "Dosage précis", capacity: "Automatique", utilities: "Électricité", price: 12000 },
    { name: "Remplisseuse", role: "Conditionnement", capacity: "2000 bouteilles/heure", utilities: "Électricité + air", price: 20000 },
    { name: "Capsuleuse", role: "Fermeture", capacity: "2000 bouteilles/heure", utilities: "Électricité", price: 8000 },
    { name: "Étiqueteuse", role: "Étiquetage", capacity: "2000 bouteilles/heure", utilities: "Électricité", price: 8000 },
    { name: "Laboratoire", role: "Contrôle qualité", capacity: "Standard", utilities: "Électricité", price: 20000 }
  ]
},

kits: {
  up_nom: "Kits médicaux",
  machines: [
    { name: "Poste assemblage", role: "Assemblage manuel", capacity: "500 kits/jour", utilities: "Standard", price: 5000 },
    { name: "Thermoscelleuse", role: "Scellage blisters", capacity: "300 kits/heure", utilities: "Électricité", price: 8000 },
    { name: "Machine à étiqueter", role: "Étiquetage", capacity: "500 kits/jour", utilities: "Électricité", price: 6000 },
    { name: "Poste contrôle", role: "Inspection visuelle", capacity: "Standard", utilities: "Électricité", price: 5000 },
    { name: "Stérilisateur", role: "Stérilisation", capacity: "1000 kits/batch", utilities: "Électricité", price: 25000 },
    { name: "Ensacheuse", role: "Conditionnement", capacity: "300 sachets/heure", utilities: "Électricité", price: 10000 },
    { name: "Poste traçabilité", role: "Enregistrement lots", capacity: "Standard", utilities: "Électricité", price: 8000 }
  ]
},

// ==============================================
// 9. ASSEMBLAGE & MONTAGE
// ==============================================

smartphones: {
  up_nom: "Assemblage de smartphones & tablettes",
  machines: [
    { name: "Ligne SMT", role: "CMS cartes mères", capacity: "50000 comp/heure", utilities: "Électricité 20kW" },
    { name: "Four refusion", role: "Brasage CMS", capacity: "Standard", utilities: "Électricité" },
    { name: "Robot encollage", role: "Pose glue", capacity: "200 cartes/heure", utilities: "Air comprimé" },
    { name: "Presse écran", role: "Montage écran", capacity: "100 smartphones/heure", utilities: "Air comprimé" },
    { name: "Testeur fonctionnel", role: "Tests complets", capacity: "80 smartphones/heure", utilities: "Électricité" },
    { name: "Machine à étiqueter IMEI", role: "Marquage IMEI", capacity: "100 smartphones/heure", utilities: "Électricité" },
    { name: "Poste contrôle optique", role: "Auto-inspection", capacity: "100 smartphones/heure", utilities: "Électricité" }
  ]
},

ordinateurs: {
  up_nom: "Assemblage d'ordinateurs",
  machines: [
    { machine_key: "poste_assemblage_pc", name: "Poste assemblage", role: "Montage manuel", capacity: "100 PC/jour", utilities: "Standard" },
    { machine_key: "machine_visser", name: "Machine à visser", role: "Vissage automatique", capacity: "50 PC/heure", utilities: "Air comprimé" },
    { machine_key: "testeur_alimentation", name: "Testeur alimentation", role: "Test PSU", capacity: "50 PC/heure", utilities: "Électricité" },
    { machine_key: "testeur_ram", name: "Testeur mémoire RAM", role: "Test RAM", capacity: "100 barrettes/heure", utilities: "Électricité" },
    { machine_key: "bruleur_bios", name: "Brûleur BIOS", role: "Flash BIOS", capacity: "50 PC/heure", utilities: "Électricité" },
    { machine_key: "config_os", name: "Configuration OS", role: "Installation OS", capacity: "50 PC/heure", utilities: "Électricité" },
    { machine_key: "poste_emballage_pc", name: "Poste emballage", role: "Conditionnement", capacity: "50 PC/heure", utilities: "Électricité" }
  ]
},

electromenager: {
  up_nom: "Électroménager",
  machines: [
    { name: "Presse pliage tôle", role: "Fabrication coque", capacity: "200 pièces/jour", utilities: "Électricité 15kW" },
    { name: "Poste soudure", role: "Soudure carcasse", capacity: "100 pièces/jour", utilities: "Électricité" },
    { name: "Ligne peinture", role: "Peinture", capacity: "200 pièces/jour", utilities: "Électricité" },
    { name: "Chaîne assemblage", role: "Montage", capacity: "100 appareils/jour", utilities: "Électricité + air" },
    { name: "Machine à mousser", role: "Injection mousse", capacity: "100 appareils/jour", utilities: "Air comprimé" },
    { name: "Testeur fonctionnel", role: "Test performance", capacity: "60 appareils/heure", utilities: "Électricité" },
    { name: "Poste emballage", role: "Conditionnement", capacity: "80 appareils/heure", utilities: "Électricité" }
  ]
},

climatiseurs: {
  up_nom: "Climatiseurs",
  machines: [
    { name: "Ligne cintrage tubes", role: "Fabrication échangeurs", capacity: "200 échangeurs/jour", utilities: "Électricité 10kW" },
    { name: "Poste brasage", role: "Brasage cuivre", capacity: "100 échangeurs/jour", utilities: "Gaz + électricité" },
    { name: "Machine à assembler", role: "Montage", capacity: "100 climatiseurs/jour", utilities: "Air comprimé" },
    { name: "Poste recharge gaz", role: "Chargement fluide", capacity: "100 climatiseurs/jour", utilities: "Vide + balance" },
    { name: "Testeur fuites", role: "Test étanchéité", capacity: "100 climatiseurs/jour", utilities: "Électricité" },
    { name: "Banc de test", role: "Test performance", capacity: "50 climatiseurs/jour", utilities: "Électricité" },
    { name: "Poste emballage", role: "Conditionnement", capacity: "80 climatiseurs/jour", utilities: "Électricité" }
  ]
},

motos: {
  up_nom: "Motos & scooters",
  machines: [
    { name: "Ligne soudure cadre", role: "Soudure châssis", capacity: "50 cadres/jour", utilities: "Électricité 15kW" },
    { name: "Cabine peinture", role: "Peinture", capacity: "50 cadres/jour", utilities: "Électricité" },
    { name: "Chaîne assemblage", role: "Montage", capacity: "50 motos/jour", utilities: "Air comprimé" },
    { name: "Poste pause moteur", role: "Installation moteur", capacity: "50 motos/jour", utilities: "Pont roulant" },
    { name: "Machine à monter roues", role: "Montage roues", capacity: "50 motos/jour", utilities: "Air comprimé" },
    { name: "Banc de roulage", role: "Test final", capacity: "30 motos/jour", utilities: "Électricité" },
    { name: "Poste emballage", role: "Conditionnement", capacity: "50 motos/jour", utilities: "Électricité" }
  ]
},

velos: {
  up_nom: "Bicyclettes",
  machines: [
    { name: "Poste soudure cadre", role: "Soudure", capacity: "100 cadres/jour", utilities: "Électricité 8kW" },
    { name: "Cabine peinture", role: "Peinture", capacity: "100 cadres/jour", utilities: "Électricité" },
    { name: "Chaîne assemblage", role: "Montage", capacity: "100 vélos/jour", utilities: "Air comprimé" },
    { name: "Machine à monter roues", role: "Montage roues", capacity: "100 vélos/jour", utilities: "Air comprimé" },
    { name: "Poste réglage", role: "Réglage transmission", capacity: "100 vélos/jour", utilities: "Standard" },
    { name: "Banc de contrôle", role: "Test freinage", capacity: "80 vélos/jour", utilities: "Électricité" },
    { name: "Poste emballage", role: "Conditionnement", capacity: "100 vélos/jour", utilities: "Électricité" }
  ]
},

meubles: {
  up_nom: "Meubles",
  machines: [
    { name: "Scie à panneau", role: "Découpe panneaux", capacity: "200 m²/heure", utilities: "Électricité 10kW" },
    { name: "Défonceuse CNC", role: "Usinage", capacity: "100 pièces/heure", utilities: "Électricité 9kW" },
    { name: "Chants", role: "Pose chant", capacity: "200 m/heure", utilities: "Électricité + colle" },
    { name: "Pointeuse", role: "Perçage chevilles", capacity: "200 pièces/heure", utilities: "Air comprimé" },
    { name: "Chaîne assemblage", role: "Montage", capacity: "100 meubles/jour", utilities: "Air comprimé" },
    { name: "Presse à lamellé", role: "Collage lamellé", capacity: "100 pièces/jour", utilities: "Air comprimé" },
    { name: "Poste emballage", role: "Conditionnement", capacity: "100 meubles/jour", utilities: "Électricité" }
  ]
},

equipements: {
  up_nom: "Équipements divers",
  machines: [
    { name: "Chaîne polyvalente", role: "Assemblage divers", capacity: "500 pièces/jour", utilities: "Électricité + air" },
    { name: "Poste soudure", role: "Soudure", capacity: "200 pièces/jour", utilities: "Électricité" },
    { name: "Poste rivetage", role: "Rivetage", capacity: "500 rivets/heure", utilities: "Air comprimé" },
    { name: "Cabine peinture", role: "Peinture", capacity: "300 pièces/jour", utilities: "Électricité" },
    { name: "Testeur produit", role: "Test fonctionnel", capacity: "200 pièces/jour", utilities: "Électricité" },
    { name: "Poste contrôle", role: "Contrôle qualité", capacity: "Standard", utilities: "Électricité" },
    { name: "Ensacheuse", role: "Conditionnement", capacity: "300 sachets/heure", utilities: "Électricité" }
  ]
},

  // ==============================================
// 10. RECYCLAGE & VALORISATION
// ==============================================

plastique_recyclage: {
  up_nom: "Recyclage du plastique",
  machines: [
    { name: "Broyeur plastique", role: "Broyage déchets plastiques", capacity: "500 kg/heure", utilities: "Électricité 45kW", price: 40000 },
    { name: "Laveuse à friction", role: "Lavage des paillettes", capacity: "500 kg/heure", utilities: "Eau + électricité 30kW", price: 25000 },
    { name: "Séparateur densimétrique", role: "Séparation PP/PE/PET", capacity: "500 kg/heure", utilities: "Électricité + air", price: 20000 },
    { name: "Sécheur centrifuge", role: "Séchage", capacity: "500 kg/heure", utilities: "Électricité 20kW", price: 18000 },
    { name: "Extrudeuse granulation", role: "Granulation", capacity: "300 kg/heure", utilities: "Électricité 75kW", price: 80000 },
    { name: "Silo stockage", role: "Stockage granulés", capacity: "50 tonnes", utilities: "Électricité", price: 30000 },
    { name: "Ensacheuse big bag", role: "Conditionnement", capacity: "20 big bags/heure", utilities: "Électricité + air", price: 20000 }
  ]
},

papier_recyclage: {
  up_nom: "Recyclage du papier",
  machines: [
    { name: "Pulpeur", role: "Mise en pâte", capacity: "2 tonnes/heure", utilities: "Électricité 75kW", price: 60000 },
    { name: "Tamis sous pression", role: "Épuration", capacity: "2 tonnes/heure", utilities: "Électricité 30kW", price: 35000 },
    { name: "Défibreur", role: "Défibrage", capacity: "2 tonnes/heure", utilities: "Électricité 45kW", price: 45000 },
    { name: "Machine à papier", role: "Formation feuille", capacity: "1.5 tonnes/heure", utilities: "Électricité + eau", price: 120000 },
    { name: "Presses", role: "Pressage", capacity: "1.5 tonnes/heure", utilities: "Hydraulique", price: 40000 },
    { name: "Sécheurs", role: "Séchage", capacity: "1.5 tonnes/heure", utilities: "Gaz + électricité", price: 60000 },
    { name: "Enrouleuse", role: "Bobinage", capacity: "1.5 tonnes/heure", utilities: "Électricité", price: 25000 }
  ]
},

metaux_recyclage: {
  up_nom: "Recyclage des métaux",
  machines: [
    { name: "Broyeur à métaux", role: "Broyage ferrailles", capacity: "3 tonnes/heure", utilities: "Électricité 110kW", price: 80000 },
    { name: "Séparateur magnétique", role: "Séparation ferreux", capacity: "3 tonnes/heure", utilities: "Électricité", price: 20000 },
    { name: "Courant de Foucault", role: "Séparation non ferreux", capacity: "3 tonnes/heure", utilities: "Électricité", price: 35000 },
    { name: "Compacteur", role: "Mise en balles", capacity: "2 tonnes/heure", utilities: "Électricité 15kW", price: 35000 },
    { name: "Cisaille hydraulique", role: "Découpe", capacity: "3 tonnes/heure", utilities: "Électricité 30kW", price: 50000 },
    { name: "Four de fusion", role: "Fusion", capacity: "1 tonne/heure", utilities: "Électricité 300kW", price: 100000 },
    { name: "Pont bascule", role: "Pesage", capacity: "20 tonnes", utilities: "Électricité", price: 15000 }
  ]
},

compost: {
  up_nom: "Production de compost",
  machines: [
    { name: "Broyeur déchets verts", role: "Broyage", capacity: "5 tonnes/heure", utilities: "Électricité 75kW", price: 40000 },
    { name: "Retourneur d'andain", role: "Mélange aération", capacity: "1000 m/heure", utilities: "Diesel", price: 60000 },
    { name: "Tamis rotatif", role: "Tamisage", capacity: "5 tonnes/heure", utilities: "Électricité 15kW", price: 25000 },
    { name: "Mélangeur", role: "Formulation", capacity: "5 tonnes/batch", utilities: "Électricité 11kW", price: 20000 },
    { name: "Ensacheuse", role: "Conditionnement", capacity: "500 sacs/heure", utilities: "Électricité + air", price: 20000 },
    { name: "Aire de maturation", role: "Maturation", capacity: "500 tonnes", utilities: "—", price: 15000 },
    { name: "Laboratoire", role: "Qualité", capacity: "Standard", utilities: "Électricité", price: 15000 }
  ]
},

verre_recyclage: {
  up_nom: "Recyclage du verre",
  machines: [
    { name: "Concasseur verre", role: "Concassage", capacity: "3 tonnes/heure", utilities: "Électricité 30kW", price: 35000 },
    { name: "Trommel", role: "Tamisage", capacity: "3 tonnes/heure", utilities: "Électricité", price: 20000 },
    { name: "Crible vibrant", role: "Calibrage", capacity: "3 tonnes/heure", utilities: "Électricité", price: 15000 },
    { name: "Séparateur optique", role: "Tri calcin", capacity: "2 tonnes/heure", utilities: "Électricité + air", price: 80000 },
    { name: "Nettoyeur", role: "Nettoyage", capacity: "2 tonnes/heure", utilities: "Eau + électricité", price: 25000 },
    { name: "Four de fusion", role: "Fusion", capacity: "1 tonne/heure", utilities: "Gaz 200kW", price: 120000 },
    { name: "Silo", role: "Stockage", capacity: "200 tonnes", utilities: "Électricité", price: 30000 }
  ]
},

pneus_recyclage: {
  up_nom: "Recyclage de pneus",
  machines: [
    { name: "Découpeuse pneus", role: "Découpe", capacity: "500 pneus/heure", utilities: "Électricité 30kW", price: 50000 },
    { name: "Broyeur lames", role: "Broyage", capacity: "500 kg/heure", utilities: "Électricité 90kW", price: 80000 },
    { name: "Cryobroyeur", role: "Broyage azote", capacity: "500 kg/heure", utilities: "Azote + électricité", price: 150000 },
    { name: "Séparateur fer", role: "Extraction acier", capacity: "500 kg/heure", utilities: "Électricité", price: 20000 },
    { name: "Granulateur", role: "Granulation", capacity: "500 kg/heure", utilities: "Électricité 55kW", price: 60000 },
    { name: "Presse à briquettes", role: "Briquettes", capacity: "300 kg/heure", utilities: "Électricité", price: 40000 },
    { name: "Pyrolyse (option)", role: "Valorisation énergie", capacity: "1 tonne/heure", utilities: "Électricité + gaz", price: 250000 }
  ]
},

huiles_recyclage: {
  up_nom: "Recyclage d'huiles usagées",
  machines: [
    { name: "Décanteur centrifuge", role: "Séparation eau/sédiments", capacity: "1000 L/heure", utilities: "Électricité 15kW", price: 40000 },
    { name: "Filtre presse", role: "Filtration fine", capacity: "1000 L/heure", utilities: "Électricité", price: 25000 },
    { name: "Flash", role: "Déshydratation", capacity: "1000 L/heure", utilities: "Gaz + électricité", price: 50000 },
    { name: "Distillation", role: "Distillation", capacity: "500 L/heure", utilities: "Électricité 45kW", price: 150000 },
    { name: "Hydrotraitement", role: "Hydrogénation", capacity: "500 L/heure", utilities: "Électricité + hydrogène", price: 200000 },
    { name: "Stabilisation", role: "Stabilisation", capacity: "500 L/heure", utilities: "Électricité", price: 30000 },
    { name: "Stockage", role: "Stockage", capacity: "100 m³", utilities: "Électricité", price: 40000 }
  ]
},

deee_recyclage: {
  up_nom: "Recyclage DEEE",
  machines: [
    { name: "Broyeur lent", role: "Prébroyage", capacity: "1 tonne/heure", utilities: "Électricité 55kW", price: 60000 },
    { name: "Ligne démantèlement", role: "Démantèlement", capacity: "500 kg/heure", utilities: "Électricité", price: 40000 },
    { name: "Séparateur électrostatique", role: "Séparation métaux", capacity: "500 kg/heure", utilities: "Électricité", price: 60000 },
    { name: "Broyeur fin", role: "Broyage raffiné", capacity: "500 kg/heure", utilities: "Électricité 75kW", price: 70000 },
    { name: "Table à eau", role: "Séparation densité", capacity: "500 kg/heure", utilities: "Eau", price: 25000 },
    { name: "Broyeur PCB", role: "Broyage cartes", capacity: "200 kg/heure", utilities: "Électricité 45kW", price: 80000 },
    { name: "Dépoussiéreur", role: "Filtration", capacity: "5000 m³/h", utilities: "Électricité", price: 20000 }
  ]
},

// ==============================================
// 11. SERVICES INDUSTRIELS
// ==============================================

nettoyage: {
  up_nom: "Nettoyage industriel",
  machines: [
    { name: "Monobrosse", role: "Nettoyage sols", capacity: "500 m²/heure", utilities: "Électricité 2kW", price: 3000 },
    { name: "Autolaveuse", role: "Nettoyage/Lavage", capacity: "1000 m²/heure", utilities: "Électricité 5kW", price: 15000 },
    { name: "Nettoyeur HP", role: "Haute pression", capacity: "1000 L/heure", utilities: "Électricité 7kW", price: 8000 },
    { name: "Aspirateur poussière", role: "Aspiration", capacity: "500 m²/heure", utilities: "Électricité 3kW", price: 2000 },
    { name: "Générateur vapeur", role: "Nettoyage vapeur", capacity: "50 L/heure", utilities: "Électricité 9kW", price: 6000 },
    { name: "Perche filtration", role: "Dépoussiérage", capacity: "200 m²/heure", utilities: "Électricité", price: 5000 },
    { name: "Camion d'intervention", role: "Déplacement", capacity: "Standard", utilities: "Diesel", price: 40000 }
  ]
},

maintenance: {
  up_nom: "Maintenance industrielle",
  machines: [
    { name: "Tour", role: "Usinage réparation", capacity: "Standard", utilities: "Électricité 5kW", price: 10000 },
    { name: "Fraiseuse", role: "Usinage", capacity: "Standard", utilities: "Électricité 7kW", price: 12000 },
    { name: "Poste à souder", role: "Soudure réparation", capacity: "Standard", utilities: "Électricité 8kW", price: 3000 },
    { name: "Équilibreuse", role: "Équilibrage", capacity: "1000 kg", utilities: "Électricité", price: 15000 },
    { name: "Analyseur vibrations", role: "Diagnostic", capacity: "Standard", utilities: "Électricité", price: 8000 },
    { name: "Camion atelier", role: "Intervention terrain", capacity: "Standard", utilities: "Diesel", price: 50000 },
    { name: "Pont élévateur", role: "Levage", capacity: "5 tonnes", utilities: "Électricité", price: 15000 }
  ]
},

logistique: {
  up_nom: "Logistique industrielle",
  machines: [
    { name: "Transpalette", role: "Manutention", capacity: "2 tonnes", utilities: "Électrique", price: 3000 },
    { name: "Chariot élévateur", role: "Levage/stockage", capacity: "3 tonnes", utilities: "Électrique/Diesel", price: 25000 },
    { name: "Rayonnage", role: "Stockage", capacity: "50 tonnes", utilities: "—", price: 15000 },
    { name: "Convoyeur", role: "Transport", capacity: "2 tonnes/heure", utilities: "Électricité", price: 10000 },
    { name: "Quai de chargement", role: "Chargement", capacity: "Standard", utilities: "Hydraulique", price: 20000 },
    { name: "Bascule camion", role: "Pesage", capacity: "40 tonnes", utilities: "Électricité", price: 20000 },
    { name: "Logiciel WMS", role: "Gestion stock", capacity: "Standard", utilities: "Électricité", price: 15000 }
  ]
},

formation: {
  up_nom: "Centre de formation industrielle",
  machines: [
    { name: "Salle de formation", role: "Cours théoriques", capacity: "20 personnes", utilities: "Climatisation", price: 20000 },
    { name: "Labo électronique", role: "Pratique", capacity: "10 postes", utilities: "Électricité", price: 25000 },
    { name: "Atelier mécanique", role: "TP", capacity: "10 postes", utilities: "Électricité + air", price: 40000 },
    { name: "Simulateurs", role: "Simulation", capacity: "5 postes", utilities: "Électricité", price: 30000 },
    { name: "Outils pédagogiques", role: "Matériel", capacity: "Standard", utilities: "—", price: 10000 },
    { name: "Accès LMS", role: "E-learning", capacity: "Illimité", utilities: "Internet", price: 5000 },
    { name: "Certification", role: "Accréditation", capacity: "Standard", utilities: "—", price: 15000 }
  ]
},

qualite: {
  up_nom: "Contrôle qualité",
  machines: [
    { name: "Microscope métallographique", role: "Analyse micro", capacity: "Standard", utilities: "Électricité", price: 20000 },
    { name: "Duromètre", role: "Dureté", capacity: "Standard", utilities: "Électricité", price: 5000 },
    { name: "Machine traction", role: "Essai traction", capacity: "10 tonnes", utilities: "Électricité", price: 25000 },
    { name: "Spectromètre", role: "Analyse matière", capacity: "Standard", utilities: "Électricité", price: 40000 },
    { name: "Pied à coulisser", role: "Mesure", capacity: "Standard", utilities: "—", price: 1000 },
    { name: "Logiciel qualité", role: "Gestion", capacity: "Standard", utilities: "Électricité", price: 10000 },
    { name: "Étalonnage", role: "Certification", capacity: "Standard", utilities: "—", price: 15000 }
  ]
},

etudes: {
  up_nom: "Bureau d'études",
  machines: [
    { name: "Station CAO", role: "Conception", capacity: "10 postes", utilities: "Électricité", price: 20000 },
    { name: "Serveur", role: "Calcul", capacity: "Standard", utilities: "Électricité", price: 15000 },
    { name: "Logiciels CAD/CAM", role: "Licences", capacity: "10 utilisateurs", utilities: "—", price: 50000 },
    { name: "Imprimante 3D", role: "Prototypage", capacity: "200 x 200 mm", utilities: "Électricité", price: 5000 },
    { name: "Scanner 3D", role: "Rétro-ingénierie", capacity: "Standard", utilities: "Électricité", price: 15000 },
    { name: "Simulation", role: "Calculs", capacity: "Standard", utilities: "Électricité", price: 20000 },
    { name: "Imprimante A0", role: "Plans", capacity: "Standard", utilities: "Électricité", price: 5000 }
  ]
},

securite: {
  up_nom: "Sécurité industrielle",
  machines: [
    { name: "EPI", role: "Équipements", capacity: "50 personnes", utilities: "—", price: 5000 },
    { name: "Détecteur gaz", role: "Surveillance", capacity: "Standard", utilities: "Électricité", price: 3000 },
    { name: "Kit incendie", role: "Lutte incendie", capacity: "Standard", utilities: "—", price: 5000 },
    { name: "Signalisation", role: "Sécurité", capacity: "Standard", utilities: "Électricité", price: 2000 },
    { name: "Formation sécurité", role: "Formation", capacity: "20 personnes", utilities: "—", price: 5000 },
    { name: "Audit HSE", role: "Diagnostic", capacity: "Standard", utilities: "—", price: 10000 },
    { name: "Certification", role: "ISO 45001", capacity: "Standard", utilities: "—", price: 15000 }
  ]
},

energie_services: {
  up_nom: "Services énergétiques",
  machines: [
    { name: "Analyseur de réseau", role: "Audit électrique", capacity: "Standard", utilities: "Électricité", price: 8000 },
    { name: "Caméra thermique", role: "Thermographie", capacity: "Standard", utilities: "Électricité", price: 5000 },
    { name: "Balance énergétique", role: "Diagnostic", capacity: "Standard", utilities: "—", price: 20000 },
    { name: "Logiciel de simulation", role: "Simulation énergie", capacity: "Standard", utilities: "Électricité", price: 15000 },
    { name: "Matériel mesure", role: "Campagne", capacity: "Standard", utilities: "Électricité", price: 10000 },
    { name: "Solutions CEE", role: "Certification", capacity: "Standard", utilities: "—", price: 5000 },
    { name: "Accompagnement", role: "Conseil", capacity: "Standard", utilities: "—", price: 15000 }
  ]
},

// ==============================================
// 12. ÉNERGIE, EAU & ENVIRONNEMENT
// ==============================================

poteaux: {
  up_nom: "Poteaux électriques en béton",
  machines: [
    { name: "Centrale béton", role: "Production béton", capacity: "20 m³/heure", utilities: "Électricité 30kW", price: 50000 },
    { name: "Machine à poteaux", role: "Centrifugation", capacity: "50 poteaux/jour", utilities: "Électricité 45kW", price: 80000 },
    { name: "Armature automatique", role: "Ferraillage", capacity: "50 poteaux/jour", utilities: "Électricité", price: 40000 },
    { name: "Étuvage", role: "Cure", capacity: "50 poteaux/batch", utilities: "Vapeur", price: 30000 },
    { name: "Démouleur", role: "Démoulage", capacity: "50 poteaux/jour", utilities: "Hydraulique", price: 20000 },
    { name: "Stockage", role: "Stockage", capacity: "1000 poteaux", utilities: "—", price: 20000 },
    { name: "Contrôle qualité", role: "Test flexion", capacity: "Standard", utilities: "Électricité", price: 20000 }
  ]
},

compteurs_eau: {
  up_nom: "Compteurs d'eau",
  machines: [
    { name: "Ligne assemblage", role: "Assemblage", capacity: "500 compteurs/heure", utilities: "Électricité 5kW", price: 60000 },
    { name: "Poste brasage", role: "Brasage", capacity: "500 compteurs/heure", utilities: "Électricité", price: 15000 },
    { name: "Étalonneur", role: "Calibration", capacity: "200 compteurs/heure", utilities: "Eau + électricité", price: 50000 },
    { name: "Testeur fuites", role: "Test étanchéité", capacity: "500 compteurs/heure", utilities: "Air comprimé", price: 20000 },
    { name: "Poste marquage", role: "Marquage", capacity: "500 compteurs/heure", utilities: "Électricité", price: 10000 },
    { name: "Machine emballage", role: "Conditionnement", capacity: "500 compteurs/heure", utilities: "Électricité", price: 15000 },
    { name: "Contrôle qualité", role: "Test final", capacity: "Standard", utilities: "Électricité", price: 15000 }
  ]
},

kits_solaires: {
  up_nom: "Kits solaires domestiques",
  machines: [
    { name: "Ligne d'assemblage", role: "Assemblage kits", capacity: "200 kits/jour", utilities: "Électricité 10kW", price: 50000 },
    { name: "Testeur batterie", role: "Test batteries", capacity: "200 kits/jour", utilities: "Électricité", price: 20000 },
    { name: "Simulateur solaire", role: "Test panneaux", capacity: "100 kits/jour", utilities: "Électricité", price: 30000 },
    { name: "Poste câblage harnais", role: "Pré-câblage", capacity: "200 kits/jour", utilities: "Électricité", price: 15000 },
    { name: "Machine à emballer", role: "Conditionnement", capacity: "200 kits/jour", utilities: "Électricité", price: 15000 },
    { name: "Contrôle qualité", role: "Test final", capacity: "Standard", utilities: "Électricité", price: 15000 },
    { name: "Stockage", role: "Stockage", capacity: "1000 kits", utilities: "—", price: 10000 }
  ]
},

lampadaires: {
  up_nom: "Lampadaires solaires",
  machines: [
    { name: "Ligne d'assemblage", role: "Assemblage", capacity: "100 lampadaires/jour", utilities: "Électricité 7kW", price: 40000 },
    { name: "Poste brasage LED", role: "Brasage LED", capacity: "100 lampadaires/jour", utilities: "Électricité", price: 15000 },
    { name: "Testeur batterie", role: "Test batterie", capacity: "100 lampadaires/jour", utilities: "Électricité", price: 20000 },
    { name: "Chambre étanche", role: "Test IP", capacity: "20 lampadaires/heure", utilities: "Eau + électricité", price: 25000 },
    { name: "Machine à boucher", role: "Conditionnement", capacity: "100 lampadaires/jour", utilities: "Électricité", price: 10000 },
    { name: "Contrôle qualité", role: "Contrôle flux", capacity: "Standard", utilities: "Électricité", price: 15000 },
    { name: "Stockage", role: "Stockage", capacity: "500 lampadaires", utilities: "—", price: 10000 }
  ]
},

forage: {
  up_nom: "Forage & hydraulique",
  machines: [
    { name: "Foreuse hydraulique", role: "Forage", capacity: "50 m/jour", utilities: "Diesel 150kW", price: 150000 },
    { name: "Pompe d'exhaure", role: "Épuisement", capacity: "50 m³/heure", utilities: "Électricité 15kW", price: 10000 },
    { name: "Tarière", role: "Extraction", capacity: "Standard", utilities: "Hydraulique", price: 20000 },
    { name: "Compresseur", role: "Forage rotary", capacity: "20 m³/min", utilities: "Diesel", price: 50000 },
    { name: "Pompe forage", role: "Exhaure", capacity: "30 m³/heure", utilities: "Électricité 11kW", price: 8000 },
    { name: "Laboratoire eau", role: "Qualité eau", capacity: "Standard", utilities: "Électricité", price: 20000 },
    { name: "Camion", role: "Transport", capacity: "Standard", utilities: "Diesel", price: 60000 }
  ]
},

eau_traitement: {
  up_nom: "Traitement de l'eau",
  machines: [
    { name: "Filtre à sable", role: "Filtration", capacity: "10 m³/heure", utilities: "Électricité", price: 15000 },
    { name: "Adoucisseur", role: "Décalcification", capacity: "10 m³/heure", utilities: "Électricité", price: 20000 },
    { name: "Osmose inverse", role: "Déminéralisation", capacity: "5 m³/heure", utilities: "Électricité 7kW", price: 40000 },
    { name: "UV", role: "Désinfection", capacity: "10 m³/heure", utilities: "Électricité", price: 8000 },
    { name: "Surpresseur", role: "Réseau", capacity: "10 m³/heure", utilities: "Électricité 5kW", price: 10000 },
    { name: "Laboratoire", role: "Qualité", capacity: "Standard", utilities: "Électricité", price: 20000 },
    { name: "Cuve stockage", role: "Stockage", capacity: "50 m³", utilities: "—", price: 15000 }
  ]
},

maintenance_energie: {
  up_nom: "Maintenance énergétique",
  machines: [
    { name: "Poste soudure", role: "Soudure", capacity: "Standard", utilities: "Électricité", price: 5000 },
    { name: "Multimètre", role: "Mesures", capacity: "Standard", utilities: "Électricité", price: 1000 },
    { name: "Pince ampèremétrique", role: "Mesure intensité", capacity: "Standard", utilities: "Électricité", price: 500 },
    { name: "Analyseur qualité réseau", role: "Analyse", capacity: "Standard", utilities: "Électricité", price: 8000 },
    { name: "Caméra thermique", role: "Thermographie", capacity: "Standard", utilities: "Électricité", price: 5000 },
    { name: "Outillage", role: "Divers", capacity: "Standard", utilities: "—", price: 5000 },
    { name: "Formation", role: "Formation", capacity: "10 personnes", utilities: "—", price: 10000 }
  ]
},

audit: {
  up_nom: "Audit énergétique & environnemental",
  machines: [
    { name: "Caméra thermique", role: "Déperditions", capacity: "Standard", utilities: "Électricité", price: 5000 },
    { name: "Analyseur de réseau", role: "Qualité énergie", capacity: "Standard", utilities: "Électricité", price: 8000 },
    { name: "Anémomètre", role: "Ventilation", capacity: "Standard", utilities: "—", price: 500 },
    { name: "Luxmètre", role: "Éclairage", capacity: "Standard", utilities: "—", price: 300 },
    { name: "Son de mesure", role: "Bruit", capacity: "Standard", utilities: "—", price: 500 },
    { name: "Logiciel simulation", role: "Modélisation", capacity: "Standard", utilities: "Électricité", price: 15000 },
    { name: "Certification", role: "Label", capacity: "Standard", utilities: "—", price: 15000 }
  ]
}
};

// Export pour utilisation dans d'autres fichiers
if (typeof module !== 'undefined' && module.exports) {
  module.exports = MACHINES_DATA;
}
