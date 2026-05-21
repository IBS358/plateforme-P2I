// ==============================================
// P2I - BASE DE DONNÉES COMPLÈTE DES 96 UNITÉS DE PRODUCTION
// ==============================================

const P2I_UP_DATA = {

  // ==============================================
// 1. AGRO-ALIMENTAIRE & BOISSONS (8 UP enrichies)
// ==============================================

conserverie_legumes: {
  id: "conserverie_legumes",
  nom: "Conserverie de légumes",
  filiereNom: "Agro-alimentaire & Boissons",
  type: "production",
  description: "Transformation industrielle de légumes locaux en conserves (tomates, haricots verts, maïs doux, okra, gombo). Valorisation des produits agricoles ivoiriens pour le marché local et l'export.",
  capex_min: 90000,
  chiffre_affaires_estime: "300000-750000",
  marge_brute: "35-45",
  emplois_directs: "6-10",
  emplois_indirects: "4-6",
  roi_estime: "3-4 ans",
  investment_breakdown: {
    machines: 45000,
    installation: 15000,
    working_capital: 20000,
    training: 10000,
    total: 90000
  },
  monthly_capacity: "20,000 boîtes",
  estimated_revenue: 500000,
  gross_margin: 40,
  net_profitability: 25,
  machines: [
    { name: "Laveuse industrielle", role: "Nettoyage des légumes", capacity: "1,000 kg/h", utilities: "Eau + électricité", price: 8000 },
    { name: "Blanchisseur", role: "Traitement thermique", capacity: "500 kg/batch", utilities: "Électricité + eau", price: 12000 },
    { name: "Remplisseuse + doseuse", role: "Mise en bocaux", capacity: "2,000 boîtes/h", utilities: "Électricité", price: 15000 },
    { name: "Autoclave", role: "Stérilisation", capacity: "1,000 boîtes/batch", utilities: "Électricité + eau", price: 25000 },
    { name: "Étiqueteuse", role: "Étiquetage / traçabilité", capacity: "2,000 boîtes/h", utilities: "Électricité", price: 5000 }
  ],
  processus: [
    "Réception et tri des légumes",
    "Lavage et calibrage",
    "Blanchiement",
    "Mise en conserve",
    "Stérilisation",
    "Étiquetage",
    "Stockage"
  ],
  avantages: [
    "Valorisation des surplus agricoles ivoiriens",
    "Conservation longue durée (12-24 mois)",
    "Marges intéressantes (40-50%)",
    "Export possible vers l'Europe (normes UE)",
    "🇨🇮 Légumes locaux : tomate, haricot vert, maïs doux, okra, gombo"
  ],
  challenges: [
    "Saisonnalité des légumes (prévoir stockage)",
    "Normes sanitaires strictes (HACCP, ISO)",
    "Concurrence des importations (Italie, Espagne)",
    "Gestion des déchets organiques"
  ],
  sanitaires: [
    "Respecter les normes HACCP",
    "Nettoyer les équipements après chaque production",
    "Contrôler la température de stérilisation (121°C)",
    "Former le personnel aux bonnes pratiques d'hygiène",
    "Assurer la traçabilité des lots"
  ],
  energie: [
    "Optimiser les cycles de stérilisation",
    "Récupérer la chaleur des autoclaves",
    "Isoler les canalisations et cuves",
    "Utiliser des variateurs de vitesse",
    "Installer un chauffe-eau solaire"
  ],
  amenagement: [
    "Organiser en flux continu",
    "Séparer zones propres et sales",
    "Prévoir zone de stockage climatisée",
    "Aménager laboratoire de contrôle qualité",
    "Faciliter la circulation des chariots"
  ],
  marketing: [
    "Cibler supermarchés, hôtels et restaurants",
    "Développer une gamme premium (bio, sans additifs)",
    "Proposer des conditionnements variés (verre, métal)",
    "Communiquer sur l'origine locale et la fraîcheur",
    "Participer aux salons agroalimentaires (SARA, SIAL)",
    "Exporter vers l'Europe (certification bio)"
  ],
  raw_materials: [
    "Tomates (production locale)",
    "Haricots verts (producteurs locaux)",
    "Maïs doux (régions du nord)",
    "Okra, gombo (sud)",
    "Sel, sucre, vinaigre",
    "Boîtes de conserve, bocaux en verre, étiquettes"
  ],
  target_markets: [
    "Supermarchés (Carrefour, Casino)",
    "Hôtels et restaurants",
    "Cantines scolaires et universitaires",
    "Export vers l'Europe",
    "Marché institutionnel (hôpitaux, prisons)"
  ],
  competitive_advantages: [
    "Première conserverie moderne dans la région",
    "Légumes frais (pas d'importation)",
    "Coûts de production 25% inférieurs aux importations",
    "Soutien technique et formation P2I",
    "Certification bio possible"
  ]
},

biscuiterie: {
  id: "biscuiterie",
  nom: "Biscuiterie industrielle",
  filiereNom: "Agro-alimentaire & Boissons",
  type: "production",
  description: "Production industrielle de biscuits à base de farines locales. Spécialisation possible dans les biscuits au cacao et au café, produits phares de la Côte d'Ivoire.",
  capex_min: 120000,
  chiffre_affaires_estime: "400000-800000",
  marge_brute: "30-40",
  emplois_directs: "8-15",
  emplois_indirects: "5-10",
  roi_estime: "3-5 ans",
  investment_breakdown: {
    machines: 65000,
    installation: 20000,
    working_capital: 25000,
    training: 10000,
    total: 120000
  },
  monthly_capacity: "15,000 kg",
  estimated_revenue: 550000,
  gross_margin: 35,
  net_profitability: 20,
  machines: [
    { name: "Mélangeur industriel", role: "Préparation de la pâte", capacity: "200 kg/batch", utilities: "Électricité 15kW", price: 12000 },
    { name: "Laminoir / formeuse", role: "Façonnage et découpe", capacity: "500 kg/h", utilities: "Électricité 10kW", price: 18000 },
    { name: "Four tunnel", role: "Cuisson continue", capacity: "500 kg/h", utilities: "Électricité ou gaz", price: 25000 },
    { name: "Refroidisseur à convoyeur", role: "Refroidissement", capacity: "Standard", utilities: "Électricité 5kW", price: 8000 },
    { name: "Conditionneuse", role: "Emballage sous atmosphère", capacity: "200 packs/min", utilities: "Électricité + air", price: 12000 }
  ],
  processus: [
    "Mélange des ingrédients (farine, sucre, œufs, beurre)",
    "Pétrissage et repos de la pâte",
    "Laminage et formage des biscuits",
    "Cuisson au four tunnel (200-220°C)",
    "Refroidissement sur convoyeur",
    "Conditionnement sous atmosphère protectrice",
    "Étiquetage et cartonnage"
  ],
  avantages: [
    "Demande alimentaire constante",
    "Export possible vers pays voisins",
    "Matières premières locales (farine, sucre, œufs)",
    "Large réseau de distribution",
    "🇨🇮 Cacao ivoirien : biscuits au cacao (pâte à tartiner, fourrés)",
    "🇨🇮 Café ivoirien : biscuits au café (energy, petit-déjeuner)",
    "Innovation : biscuits aux fruits locaux (ananas, mangue, noix de cajou)"
  ],
  challenges: [
    "Concurrence des grandes marques internationales",
    "Prix volatil des matières premières",
    "Marketing nécessaire pour se faire connaître",
    "Gestion des invendus et dates de péremption"
  ],
  sanitaires: [
    "Respecter les normes HACCP",
    "Contrôler la température des fours",
    "Nettoyer les équipements quotidiennement",
    "Former le personnel aux bonnes pratiques",
    "Assurer la traçabilité des lots"
  ],
  energie: [
    "Optimiser la cuisson pour réduire la consommation",
    "Récupérer la chaleur des fours",
    "Isoler les fours et canalisations",
    "Utiliser des moteurs à haut rendement",
    "Éteindre les équipements hors production"
  ],
  amenagement: [
    "Organiser en flux linéaire",
    "Séparer zones de production et stockage",
    "Prévoir zone de refroidissement",
    "Aménager laboratoire de contrôle qualité",
    "Faciliter la circulation du personnel"
  ],
  marketing: [
    "Cibler supermarchés et épiceries",
    "Développer des gammes premium cacao/café",
    "Soigner l'emballage (chocolat, café)",
    "Communiquer sur les ingrédients locaux",
    "Proposer des échantillons pour tests"
  ],
  raw_materials: [
    "Farine de blé (locale ou import)",
    "Sucre",
    "Œufs (producteurs locaux)",
    "Beurre ou margarine",
    "Cacao en poudre (produit local)",
    "Café soluble (produit local)",
    "Emballages (sachets, boîtes, cartons)"
  ],
  target_markets: [
    "Supermarchés et grandes surfaces",
    "Épiceries et boutiques",
    "Écoles (goûters)",
    "Hôtels et restaurants",
    "Export vers pays voisins"
  ],
  competitive_advantages: [
    "Biscuits fraîchement produits",
    "Ingrédients locaux (cacao, café)",
    "Produits 'Made in Côte d'Ivoire'",
    "Flexibilité des lots",
    "Prix compétitifs"
  ]
},

boulangerie_industrielle: {
  id: "boulangerie_industrielle",
  nom: "Boulangerie industrielle",
  filiereNom: "Agro-alimentaire & Boissons",
  type: "production",
  description: "Production industrielle de pains, viennoiseries et pâtisseries pour le marché local et institutionnel.",
  capex_min: 150000,
  chiffre_affaires_estime: "600000-1200000",
  marge_brute: "25-35",
  emplois_directs: "10-20",
  emplois_indirects: "5-8",
  roi_estime: "4-6 ans",
  investment_breakdown: {
    machines: 80000,
    installation: 25000,
    working_capital: 30000,
    training: 15000,
    total: 150000
  },
  monthly_capacity: "50,000 pains",
  estimated_revenue: 800000,
  gross_margin: 30,
  net_profitability: 18,
  machines: [
    { name: "Pétrin spiral", role: "Pétrissage de la pâte", capacity: "200 kg/batch", utilities: "Électricité 10kW", price: 15000 },
    { name: "Diviseuse-bouleuse", role: "Division et boulage", capacity: "1,000 pains/h", utilities: "Électricité", price: 12000 },
    { name: "Façonneuse", role: "Façonnage des pains", capacity: "1,000 pains/h", utilities: "Électricité", price: 10000 },
    { name: "Chambre de fermentation", role: "Pousse contrôlée", capacity: "500 kg", utilities: "Électricité + vapeur", price: 20000 },
    { name: "Four rotatif", role: "Cuisson", capacity: "500 pains/batch", utilities: "Électricité ou gaz", price: 35000 },
    { name: "Trancheuse", role: "Tranchage du pain", capacity: "1,000 pains/h", utilities: "Électricité", price: 8000 },
    { name: "Ensacheuse", role: "Conditionnement", capacity: "1,000 pains/h", utilities: "Électricité", price: 10000 }
  ],
  processus: [
    "Pesée et mélange des ingrédients",
    "Pétrissage",
    "Fermentation",
    "Façonnage",
    "Cuisson",
    "Refroidissement",
    "Tranchage",
    "Conditionnement"
  ],
  avantages: [
    "Demande quotidienne (pain de première nécessité)",
    "Produits frais locaux",
    "Fidélisation client possible",
    "Distribution large",
    "🇨🇮 Farine locale (soutien aux minoteries)",
    "Pain enrichi aux céréales locales (mil, maïs)"
  ],
  challenges: [
    "Concurrence artisanale",
    "Gestion des invendus",
    "Prix des matières premières",
    "Logistique de livraison"
  ],
  sanitaires: [
    "Respecter les normes de boulangerie",
    "Nettoyer les équipements quotidiennement",
    "Contrôler la température des fours",
    "Former le personnel aux bonnes pratiques",
    "Assurer la traçabilité des lots"
  ],
  energie: [
    "Optimiser les cycles de cuisson",
    "Récupérer la chaleur des fours",
    "Isoler les chambres de fermentation",
    "Utiliser des moteurs à haut rendement",
    "Éteindre les équipements hors production"
  ],
  amenagement: [
    "Organiser en flux continu",
    "Séparer zones de production et stockage",
    "Prévoir zone de refroidissement",
    "Aménager zone de livraison",
    "Faciliter la circulation du personnel"
  ],
  marketing: [
    "Cibler supermarchés et boulangeries",
    "Proposer des pains spéciaux (complet, céréales)",
    "Soigner l'emballage",
    "Communiquer sur la qualité",
    "Développer des contrats réguliers"
  ],
  raw_materials: [
    "Farine de blé (locale)",
    "Levure",
    "Sel",
    "Sucre",
    "Eau",
    "Améliorants",
    "Emballages (sachets, films)"
  ],
  target_markets: [
    "Supermarchés et grandes surfaces",
    "Boulangeries locales",
    "Cantines scolaires",
    "Hôtels et restaurants",
    "Hôpitaux et prisons"
  ],
  competitive_advantages: [
    "Pain frais livré quotidiennement",
    "Qualité constante (process industriel)",
    "Prix compétitifs",
    "Capacité de production importante",
    "Respect des normes"
  ]
},

jus_boissons: {
  id: "jus_boissons",
  nom: "Production de jus et boissons",
  filiereNom: "Agro-alimentaire & Boissons",
  type: "production",
  description: "Transformation de fruits locaux en jus et boissons (ananas, mangue, orange, bissap, gingembre). Valorisation des fruits tropicaux ivoiriens.",
  capex_min: 100000,
  chiffre_affaires_estime: "350000-850000",
  marge_brute: "35-50",
  emplois_directs: "6-12",
  emplois_indirects: "3-5",
  roi_estime: "3-5 ans",
  investment_breakdown: {
    machines: 50000,
    installation: 15000,
    working_capital: 25000,
    training: 10000,
    total: 100000
  },
  monthly_capacity: "50,000 L",
  estimated_revenue: 600000,
  gross_margin: 42,
  net_profitability: 28,
  machines: [
    { name: "Laveuse", role: "Nettoyage des fruits", capacity: "2,000 kg/h", utilities: "Eau + électricité", price: 10000 },
    { name: "Broyeur", role: "Broyage des fruits", capacity: "1,500 kg/h", utilities: "Électricité", price: 8000 },
    { name: "Presse", role: "Extraction du jus", capacity: "1,000 L/h", utilities: "Électricité", price: 12000 },
    { name: "Pasteurisateur", role: "Stabilisation du jus", capacity: "1,000 L/h", utilities: "Électricité + eau", price: 20000 },
    { name: "Remplisseuse", role: "Embouteillage", capacity: "2,000 bouteilles/h", utilities: "Électricité + air", price: 15000 },
    { name: "Capsuleuse", role: "Fermeture des bouteilles", capacity: "2,000 bouteilles/h", utilities: "Électricité", price: 5000 },
    { name: "Étiqueteuse", role: "Étiquetage", capacity: "2,000 bouteilles/h", utilities: "Électricité", price: 5000 }
  ],
  processus: [
    "Réception et tri des fruits",
    "Lavage",
    "Broyage",
    "Pressage",
    "Filtration",
    "Pasteurisation",
    "Embouteillage",
    "Étiquetage",
    "Stockage"
  ],
  avantages: [
    "Valorisation des fruits locaux (ananas, mangue, orange)",
    "Demande croissante (jus naturels)",
    "Export possible (Europe)",
    "Marges intéressantes",
    "🇨🇮 Fruits tropicaux : ananas (1er producteur africain), mangue, bissap, gingembre",
    "Innovation : jus de bissap, gingembre, tamarin"
  ],
  challenges: [
    "Saisonnalité des fruits",
    "Concurrence des multinationales",
    "Normes sanitaires strictes",
    "Logistique de distribution"
  ],
  sanitaires: [
    "Respecter les normes HACCP",
    "Contrôler la température de pasteurisation",
    "Nettoyer les équipements après chaque production",
    "Former le personnel aux bonnes pratiques",
    "Assurer la traçabilité des lots"
  ],
  energie: [
    "Optimiser les cycles de pasteurisation",
    "Récupérer la chaleur",
    "Isoler les cuves et canalisations",
    "Utiliser des moteurs à haut rendement",
    "Éteindre les équipements hors production"
  ],
  amenagement: [
    "Organiser en flux continu",
    "Séparer zones propres et sales",
    "Prévoir zone de stockage climatisée",
    "Aménager laboratoire de contrôle qualité",
    "Faciliter la circulation des chariots"
  ],
  marketing: [
    "Cibler supermarchés, hôtels et restaurants",
    "Développer des recettes originales",
    "Soigner l'emballage (bouteilles, briques)",
    "Communiquer sur l'origine locale",
    "Proposer des formats variés"
  ],
  raw_materials: [
    "Ananas (production locale)",
    "Mangue (producteurs locaux)",
    "Orange (régions du nord)",
    "Bissap (fleurs d'hibiscus)",
    "Gingembre",
    "Sucre",
    "Emballages (bouteilles PET, briques, étiquettes)"
  ],
  target_markets: [
    "Supermarchés",
    "Hôtels et restaurants",
    "Écoles",
    "Cantines",
    "Export vers l'Europe"
  ],
  competitive_advantages: [
    "Jus frais sans conservateurs",
    "Fruits locaux de qualité",
    "Prix compétitifs",
    "Authenticité des saveurs",
    "Certification bio possible"
  ]
},

mini_laiterie: {
  id: "mini_laiterie",
  nom: "Mini-laiterie",
  filiereNom: "Agro-alimentaire & Boissons",
  type: "production",
  description: "Transformation du lait en produits laitiers frais (yaourts, fromages, beurre). Développement de l'élevage laitier local.",
  capex_min: 110000,
  chiffre_affaires_estime: "300000-600000",
  marge_brute: "30-40",
  emplois_directs: "5-10",
  emplois_indirects: "3-5",
  roi_estime: "4-6 ans",
  investment_breakdown: {
    machines: 55000,
    installation: 15000,
    working_capital: 25000,
    training: 15000,
    total: 110000
  },
  monthly_capacity: "30,000 L",
  estimated_revenue: 450000,
  gross_margin: 35,
  net_profitability: 22,
  machines: [
    { name: "Cuve de réception", role: "Réception et filtration du lait", capacity: "5,000 L", utilities: "Électricité", price: 10000 },
    { name: "Pasteurisateur", role: "Pasteurisation du lait", capacity: "1,000 L/h", utilities: "Électricité + eau", price: 20000 },
    { name: "Écrémeuse", role: "Séparation de la crème", capacity: "1,000 L/h", utilities: "Électricité", price: 8000 },
    { name: "Cuve de maturation", role: "Maturation du yaourt", capacity: "1,000 L", utilities: "Électricité", price: 12000 },
    { name: "Remplisseuse", role: "Conditionnement", capacity: "2,000 pots/h", utilities: "Électricité", price: 10000 },
    { name: "Chambre froide", role: "Stockage", capacity: "20,000 L", utilities: "Électricité", price: 15000 }
  ],
  processus: [
    "Réception du lait",
    "Filtration",
    "Standardisation",
    "Pasteurisation",
    "Homogénéisation",
    "Fermentation",
    "Conditionnement",
    "Stockage réfrigéré"
  ],
  avantages: [
    "Demande croissante (produits laitiers)",
    "Produits frais locaux",
    "Fidélisation client",
    "Distribution régulière",
    "🇨🇮 Développement de l'élevage laitier local",
    "Yaourts aux fruits locaux (ananas, mangue, papaye)"
  ],
  challenges: [
    "Chaîne du froid",
    "Normes sanitaires strictes",
    "Saisonnalité de la production",
    "Concurrence des grandes marques"
  ],
  sanitaires: [
    "Respecter les normes laitières",
    "Contrôler la température de pasteurisation",
    "Nettoyer les équipements après chaque production",
    "Former le personnel aux bonnes pratiques",
    "Assurer la traçabilité des lots"
  ],
  energie: [
    "Optimiser les cycles de pasteurisation",
    "Récupérer la chaleur",
    "Isoler les cuves et chambres froides",
    "Utiliser des moteurs à haut rendement",
    "Éteindre les équipements hors production"
  ],
  amenagement: [
    "Organiser en flux continu",
    "Séparer zones propres et sales",
    "Prévoir zone de stockage réfrigéré",
    "Aménager laboratoire de contrôle qualité",
    "Faciliter la circulation du personnel"
  ],
  marketing: [
    "Cibler supermarchés, crèches et écoles",
    "Développer des gammes variées",
    "Soigner l'emballage",
    "Communiquer sur la fraîcheur",
    "Proposer des contrats réguliers"
  ],
  raw_materials: [
    "Lait frais (producteurs locaux)",
    "Ferments lactiques",
    "Sucre",
    "Fruits (ananas, mangue, papaye)",
    "Pots et opercules",
    "Étiquettes"
  ],
  target_markets: [
    "Supermarchés",
    "Crèches et écoles",
    "Hôpitaux",
    "Hôtels et restaurants",
    "Particuliers"
  ],
  competitive_advantages: [
    "Produits laitiers frais",
    "Lait local (traçabilité)",
    "Yaourts aux fruits locaux",
    "Prix compétitifs",
    "Chaîne du froid maîtrisée"
  ]
},

huiles_alimentaires: {
  id: "huiles_alimentaires",
  nom: "Huiles alimentaires",
  filiereNom: "Agro-alimentaire & Boissons",
  type: "production",
  description: "Production d'huiles végétales à partir de graines locales (palme, arachide, tournesol, colza).",
  capex_min: 130000,
  chiffre_affaires_estime: "400000-1000000",
  marge_brute: "25-35",
  emplois_directs: "8-12",
  emplois_indirects: "5-8",
  roi_estime: "3-4 ans",
  investment_breakdown: {
    machines: 65000,
    installation: 20000,
    working_capital: 30000,
    training: 15000,
    total: 130000
  },
  monthly_capacity: "20,000 L",
  estimated_revenue: 700000,
  gross_margin: 30,
  net_profitability: 20,
  machines: [
    { name: "Décortiqueuse", role: "Décorticage des graines", capacity: "1,000 kg/h", utilities: "Électricité", price: 10000 },
    { name: "Broyeur", role: "Broyage des graines", capacity: "800 kg/h", utilities: "Électricité", price: 8000 },
    { name: "Presse à huile", role: "Extraction de l'huile", capacity: "500 L/h", utilities: "Électricité", price: 20000 },
    { name: "Filtre", role: "Filtration de l'huile", capacity: "500 L/h", utilities: "Électricité", price: 8000 },
    { name: "Cuve de décantation", role: "Décantation", capacity: "10,000 L", utilities: "—", price: 5000 },
    { name: "Remplisseuse", role: "Conditionnement", capacity: "1,000 bouteilles/h", utilities: "Électricité", price: 12000 },
    { name: "Étiqueteuse", role: "Étiquetage", capacity: "1,000 bouteilles/h", utilities: "Électricité", price: 5000 }
  ],
  processus: [
    "Réception des graines",
    "Nettoyage",
    "Décorticage",
    "Broyage",
    "Pressage",
    "Filtration",
    "Décantation",
    "Conditionnement"
  ],
  avantages: [
    "Matières premières locales",
    "Demande constante",
    "Export possible",
    "Sous-produits valorisables",
    "🇨🇮 Huile de palme (1er producteur africain)",
    "Huile d'arachide (production locale)",
    "Tourteaux pour alimentation animale"
  ],
  challenges: [
    "Concurrence des importations",
    "Prix des matières premières",
    "Normes de qualité",
    "Stockage"
  ],
  sanitaires: [
    "Respecter les normes alimentaires",
    "Contrôler la qualité de l'huile",
    "Nettoyer les équipements régulièrement",
    "Former le personnel aux bonnes pratiques",
    "Assurer la traçabilité des lots"
  ],
  energie: [
    "Optimiser le pressage",
    "Récupérer la chaleur",
    "Utiliser des moteurs à haut rendement",
    "Isoler les cuves",
    "Éteindre les équipements hors production"
  ],
  amenagement: [
    "Organiser en flux continu",
    "Séparer zones de production et stockage",
    "Prévoir zone de stockage",
    "Aménager laboratoire de contrôle qualité",
    "Faciliter la circulation des chariots"
  ],
  marketing: [
    "Cibler supermarchés et restaurants",
    "Proposer des formats variés",
    "Soigner l'emballage",
    "Communiquer sur l'origine locale",
    "Développer des marques propres"
  ],
  raw_materials: [
    "Graines de palme (producteurs locaux)",
    "Arachides",
    "Tournesol",
    "Colza",
    "Emballages (bouteilles PET, bidons, étiquettes)"
  ],
  target_markets: [
    "Supermarchés",
    "Restaurants",
    "Industrie alimentaire",
    "Export vers pays voisins"
  ],
  competitive_advantages: [
    "Huile fraîche (pas de stockage long)",
    "Prix compétitifs",
    "Origine locale",
    "Qualité garantie"
  ]
},

epices: {
  id: "epices",
  nom: "Transformation d'épices",
  filiereNom: "Agro-alimentaire & Boissons",
  type: "production",
  description: "Transformation et conditionnement d'épices locales en poudre fine, mélanges et condiments.",
  capex_min: 70000,
  chiffre_affaires_estime: "150000-400000",
  marge_brute: "40-55",
  emplois_directs: "4-8",
  emplois_indirects: "2-4",
  roi_estime: "2-3 ans",
  investment_breakdown: {
    machines: 35000,
    installation: 10000,
    working_capital: 15000,
    training: 10000,
    total: 70000
  },
  monthly_capacity: "5,000 kg",
  estimated_revenue: 250000,
  gross_margin: 48,
  net_profitability: 30,
  machines: [
    { name: "Table de tri", role: "Tri des épices", capacity: "Petites séries", utilities: "—", price: 2000 },
    { name: "Séchoir", role: "Séchage", capacity: "Selon flux", utilities: "Électricité ou solaire", price: 8000 },
    { name: "Broyeur", role: "Broyage", capacity: "200 kg/h", utilities: "Électricité", price: 5000 },
    { name: "Tamis", role: "Tamisage", capacity: "200 kg/h", utilities: "Électricité", price: 3000 },
    { name: "Mélangeur", role: "Assemblage de mélanges", capacity: "Batch", utilities: "Électricité", price: 4000 },
    { name: "Ensacheuse", role: "Conditionnement", capacity: "500 sachets/h", utilities: "Électricité", price: 6000 }
  ],
  processus: [
    "Réception des épices",
    "Tri",
    "Séchage",
    "Broyage",
    "Tamisage",
    "Mélange",
    "Conditionnement"
  ],
  avantages: [
    "Valeur ajoutée importante",
    "Export Europe",
    "Conservation longue",
    "Faible investissement",
    "🇨🇮 Poivre, gingembre, piment, curcuma locaux",
    "Mélanges d'épices 'Made in Côte d'Ivoire'"
  ],
  challenges: [
    "Contrôle humidité",
    "Maintenance couleur/saveur",
    "Concurrence",
    "Normes sanitaires"
  ],
  sanitaires: [
    "Respecter les normes alimentaires",
    "Contrôler l'humidité",
    "Nettoyer les équipements régulièrement",
    "Former le personnel aux bonnes pratiques",
    "Assurer la traçabilité des lots"
  ],
  energie: [
    "Optimiser le séchage",
    "Utiliser le séchage solaire",
    "Isoler les séchoirs",
    "Utiliser des moteurs à haut rendement",
    "Éteindre les équipements hors production"
  ],
  amenagement: [
    "Organiser en flux continu",
    "Séparer zones propres et sales",
    "Prévoir zone de stockage sec",
    "Aménager zone de conditionnement",
    "Faciliter la circulation du personnel"
  ],
  marketing: [
    "Cibler supermarchés et épiceries fines",
    "Développer des mélanges originaux",
    "Soigner l'emballage",
    "Communiquer sur l'origine locale",
    "Exporter vers l'Europe"
  ],
  raw_materials: [
    "Poivre (producteurs locaux)",
    "Gingembre",
    "Piment",
    "Curcuma",
    "Cannelle (import)",
    "Sachets et emballages"
  ],
  target_markets: [
    "Supermarchés",
    "Épiceries fines",
    "Restauration",
    "Export Europe"
  ],
  competitive_advantages: [
    "Épices fraîches",
    "Origine locale",
    "Conditionnement sur mesure",
    "Prix compétitifs",
    "Certification bio possible"
  ]
},

aliments_betail: {
  id: "aliments_betail",
  nom: "Aliments pour bétail",
  filiereNom: "Agro-alimentaire & Boissons",
  type: "production",
  description: "Production d'aliments composés pour l'élevage (volailles, bovins, porcins). Valorisation des sous-produits agricoles locaux.",
  capex_min: 95000,
  chiffre_affaires_estime: "250000-500000",
  marge_brute: "20-30",
  emplois_directs: "5-8",
  emplois_indirects: "3-5",
  roi_estime: "4-5 ans",
  investment_breakdown: {
    machines: 45000,
    installation: 15000,
    working_capital: 25000,
    training: 10000,
    total: 95000
  },
  monthly_capacity: "100,000 kg",
  estimated_revenue: 350000,
  gross_margin: 25,
  net_profitability: 15,
  machines: [
    { name: "Broyeur", role: "Broyage des matières premières", capacity: "1,000 kg/h", utilities: "Électricité", price: 15000 },
    { name: "Mélangeur", role: "Mélange des ingrédients", capacity: "1,000 kg/batch", utilities: "Électricité", price: 20000 },
    { name: "Granulateur", role: "Granulation", capacity: "500 kg/h", utilities: "Électricité", price: 25000 },
    { name: "Ensacheuse", role: "Conditionnement", capacity: "500 sacs/h", utilities: "Électricité + air", price: 15000 }
  ],
  processus: [
    "Réception des matières premières",
    "Broyage",
    "Dosage",
    "Mélange",
    "Granulation",
    "Refroidissement",
    "Conditionnement"
  ],
  avantages: [
    "Développement de l'élevage",
    "Demande croissante",
    "Matières premières locales",
    "Contrats réguliers",
    "🇨🇮 Valorisation des sous-produits (tourteaux, son, issues de maïs)",
    "Soutien aux éleveurs locaux"
  ],
  challenges: [
    "Formulation nutritionnelle",
    "Variabilité des matières premières",
    "Concurrence",
    "Logistique"
  ],
  sanitaires: [
    "Respecter les normes alimentaires pour animaux",
    "Contrôler la qualité des matières",
    "Nettoyer les équipements régulièrement",
    "Former le personnel aux bonnes pratiques",
    "Assurer la traçabilité des lots"
  ],
  energie: [
    "Optimiser le broyage",
    "Utiliser des moteurs à haut rendement",
    "Isoler les équipements",
    "Récupérer la chaleur",
    "Éteindre les équipements hors production"
  ],
  amenagement: [
    "Organiser en flux continu",
    "Séparer zones de production et stockage",
    "Prévoir zone de stockage des matières",
    "Aménager zone de conditionnement",
    "Faciliter la circulation des camions"
  ],
  marketing: [
    "Cibler les éleveurs et coopératives",
    "Développer des formulations adaptées",
    "Proposer des sacs de différents formats",
    "Communiquer sur la qualité",
    "Développer des contrats réguliers"
  ],
  raw_materials: [
    "Maïs (producteurs locaux)",
    "Tourteau de soja",
    "Son de blé",
    "Issues de céréales",
    "Compléments minéraux",
    "Sacs d'emballage"
  ],
  target_markets: [
    "Éleveurs de volailles",
    "Éleveurs de bovins",
    "Éleveurs de porcins",
    "Coopératives agricoles"
  ],
  competitive_advantages: [
    "Formulations adaptées au climat tropical",
    "Matières premières locales",
    "Prix compétitifs",
    "Conseils techniques aux éleveurs",
    "Livraison possible"
  ]
},

  // ==============================================
  // 2. CHIMIE, COSMÉTIQUES & DÉTERGENTS (8 UP)
  // ==============================================

  detergents: {
    id: "detergents",
    nom: "Détergents & produits ménagers",
    filiereNom: "Chimie, Cosmétiques & Détergents",
    type: "production",
    description: "Fabrication de détergents et produits d'hygiène.",
    capex_min: 80000,
    chiffre_affaires_estime: "300000-600000",
    marge_brute: "25-40",
    machines: [
      { name: "Cuve de mélange", role: "Formulation", capacity: "Batch", utilities: "Électricité" },
      { name: "Système de dosage", role: "Dosage des ingrédients", capacity: "Standard", utilities: "Électricité" },
      { name: "Homogénéisateur", role: "Homogénéisation", capacity: "Option", utilities: "Électricité" },
      { name: "Remplisseuse", role: "Conditionnement", capacity: "Semi-automatique", utilities: "Électricité + air" },
      { name: "Étiqueteuse", role: "Étiquetage", capacity: "Standard", utilities: "Électricité" },
      { name: "Poste contrôle qualité", role: "Contrôle", capacity: "Standard", utilities: "Électricité" }
    ],
    processus: [
      "Dosage des ingrédients",
      "Mélange",
      "Homogénéisation",
      "Contrôle qualité",
      "Conditionnement",
      "Étiquetage"
    ],
    avantages: ["Demande constante", "Processus simple", "Marges correctes", "Large distribution"],
    challenges: ["Concurrence des grandes marques", "Sécurité chimique", "Prix des matières premières", "Marketing"],
    sanitaires: [
      "Respecter les normes de sécurité",
      "Utiliser des équipements de protection",
      "Nettoyer les équipements régulièrement",
      "Former le personnel à la sécurité",
      "Assurer la traçabilité des lots"
    ],
    energie: [
      "Optimiser le mélange",
      "Utiliser des moteurs à haut rendement",
      "Isoler les cuves",
      "Éteindre les équipements hors production",
      "Récupérer la chaleur"
    ],
    amenagement: [
      "Organiser en flux continu",
      "Séparer zones de production et stockage",
      "Prévoir zone de stockage des produits chimiques",
      "Aménager zone de conditionnement",
      "Faciliter la circulation du personnel"
    ],
    marketing: [
      "Cibler supermarchés et grossistes",
      "Proposer des formats variés",
      "Soigner l'emballage",
      "Communiquer sur l'efficacité",
      "Développer des marques propres"
    ]
  },

  savonnerie: {
    id: "savonnerie",
    nom: "Savonnerie industrielle",
    filiereNom: "Chimie, Cosmétiques & Détergents",
    type: "production",
    description: "Production de savons solides et liquides.",
    capex_min: 70000,
    chiffre_affaires_estime: "200000-400000",
    marge_brute: "30-45",
    machines: [
      { name: "Cuve de saponification", role: "Saponification", capacity: "Batch", utilities: "Électricité + eau" },
      { name: "Moules", role: "Moulage des savons", capacity: "Standard", utilities: "—" },
      { name: "Cutter", role: "Découpe des savons", capacity: "Standard", utilities: "Électricité" },
      { name: "Séchoir", role: "Séchage", capacity: "Selon volume", utilities: "Ventilation" },
      { name: "Mélangeur", role: "Savon liquide", capacity: "Option", utilities: "Électricité" },
      { name: "Remplisseuse", role: "Conditionnement", capacity: "Semi-automatique", utilities: "Électricité" }
    ],
    processus: [
      "Dosage des ingrédients",
      "Saponification",
      "Moulage",
      "Découpe",
      "Séchage",
      "Conditionnement"
    ],
    avantages: ["Huile de palme locale", "Coûts compétitifs", "Export possible", "Demande constante"],
    challenges: ["Maîtrise de la saponification", "Concurrence des importations", "Prix des matières", "Normes"],
    sanitaires: [
      "Respecter les normes cosmétiques",
      "Utiliser des équipements de protection",
      "Nettoyer les équipements régulièrement",
      "Former le personnel à la sécurité",
      "Assurer la traçabilité des lots"
    ],
    energie: [
      "Optimiser la saponification",
      "Récupérer la chaleur",
      "Isoler les cuves",
      "Utiliser des moteurs à haut rendement",
      "Éteindre les équipements hors production"
    ],
    amenagement: [
      "Organiser en flux continu",
      "Séparer zones de production et stockage",
      "Prévoir zone de séchage",
      "Aménager zone de conditionnement",
      "Faciliter la circulation du personnel"
    ],
    marketing: [
      "Cibler supermarchés et pharmacies",
      "Développer des gammes variées",
      "Soigner l'emballage",
      "Communiquer sur les ingrédients naturels",
      "Proposer des savons artisanaux"
    ]
  },

  cosmetiques: {
    id: "cosmetiques",
    nom: "Cosmétiques naturels",
    filiereNom: "Chimie, Cosmétiques & Détergents",
    type: "production",
    description: "Cosmétiques à base de matières premières locales.",
    capex_min: 85000,
    chiffre_affaires_estime: "250000-600000",
    marge_brute: "40-60",
    machines: [
      { name: "Cuve de mélange", role: "Formulation", capacity: "Batch", utilities: "Électricité" },
      { name: "Bain-marie", role: "Chauffe contrôlée", capacity: "Option", utilities: "Électricité + eau" },
      { name: "Homogénéisateur", role: "Émulsions", capacity: "Standard", utilities: "Électricité" },
      { name: "Remplisseuse", role: "Conditionnement", capacity: "Semi-automatique", utilities: "Électricité + air" },
      { name: "Étiqueteuse", role: "Étiquetage", capacity: "Standard", utilities: "Électricité" },
      { name: "Poste contrôle qualité", role: "Contrôle", capacity: "Standard", utilities: "Électricité" }
    ],
    processus: [
      "Dosage des ingrédients",
      "Mélange",
      "Émulsion",
      "Contrôle qualité",
      "Conditionnement",
      "Étiquetage"
    ],
    avantages: ["Tendance naturelle", "Valorisation plantes locales", "Marges élevées", "Export possible"],
    challenges: ["Tests sanitaires", "Stabilité des formulations", "Marketing", "Concurrence"],
    sanitaires: [
      "Respecter les normes cosmétiques",
      "Contrôler la stabilité",
      "Nettoyer les équipements régulièrement",
      "Former le personnel aux bonnes pratiques",
      "Assurer la traçabilité des lots"
    ],
    energie: [
      "Optimiser le mélange",
      "Utiliser des moteurs à haut rendement",
      "Isoler les cuves",
      "Récupérer la chaleur",
      "Éteindre les équipements hors production"
    ],
    amenagement: [
      "Organiser en flux continu",
      "Séparer zones propres et sales",
      "Prévoir zone de stockage",
      "Aménager laboratoire de contrôle",
      "Faciliter la circulation du personnel"
    ],
    marketing: [
      "Cibler pharmacies et boutiques spécialisées",
      "Développer des gammes variées",
      "Soigner l'emballage",
      "Communiquer sur les ingrédients naturels",
      "Exporter vers l'Europe"
    ]
  },

  peintures_btp: {
  id: "peintures_btp",
  nom: "Peintures BTP",
  filiereNom: "BTP & Matériaux Construction",
  type: "production",
  description: "Fabrication de peintures pour bâtiment.",
  capex_min: 95000,
  chiffre_affaires_estime: "350000-700000",
  marge_brute: "30-45",
  emplois_directs: "6-10",
  emplois_indirects: "3-5",
  roi_estime: "3-5 ans",
  investment_breakdown: {
    machines: 35000,
    installation: 15000,
    working_capital: 25000,
    training: 8000,
    total: 83000
  },
  monthly_capacity: "20,000 L",
  estimated_revenue: 450000,
  gross_margin: 38,
  net_profitability: 22,
  machines: [
    { name: "Disperseur", role: "Dispersion des pigments", capacity: "Batch", utilities: "Électricité" },
    { name: "Cuve de formulation", role: "Formulation", capacity: "Standard", utilities: "Électricité" },
    { name: "Filtre", role: "Filtration", capacity: "Standard", utilities: "Électricité" },
    { name: "Remplisseuse", role: "Conditionnement", capacity: "Semi-automatique", utilities: "Électricité" }
  ],
  processus: [
    "Dispersion des pigments",
    "Formulation",
    "Filtration",
    "Contrôle qualité",
    "Conditionnement"
  ],
  avantages: ["Développement BTP", "Demande locale", "Import substitution", "Marges correctes"],
  challenges: ["Import pigments", "Concurrence", "Qualité", "Marketing"],
  sanitaires: [
    "Utiliser des EPI",
    "Nettoyer les postes",
    "Former le personnel",
    "Entretenir les équipements",
    "Assurer la traçabilité"
  ],
  energie: [
    "Optimiser la dispersion",
    "Utiliser des moteurs à haut rendement",
    "Éteindre les équipements hors production",
    "Isoler les zones",
    "Récupérer la chaleur"
  ],
  amenagement: [
    "Organiser en flux continu",
    "Prévoir zone de stockage",
    "Aménager zone de formulation",
    "Faciliter la circulation",
    "Prévoir zone de contrôle"
  ],
  marketing: [
    "Cibler quincailleries et BTP",
    "Proposer des coloris variés",
    "Garantir la qualité",
    "Communiquer sur la résistance",
    "Proposer des nuanciers"
  ],
  raw_materials: [
    "Résines",
    "Pigments",
    "Solvants",
    "Additifs",
    "Emballages (seaux, bidons)"
  ],
  target_markets: [
    "Quincailleries",
    "Entreprises de BTP",
    "Particuliers",
    "Industries du bois et métal"
  ],
  competitive_advantages: [
    "Formulation adaptée au climat tropical",
    "Délais de livraison courts",
    "Assistance technique",
    "Prix compétitifs"
  ]
}

  adhesifs: {
    id: "adhesifs",
    nom: "Adhésifs & colles",
    filiereNom: "Chimie, Cosmétiques & Détergents",
    type: "production",
    description: "Fabrication d'adhésifs et colles industriels.",
    capex_min: 120000,
    chiffre_affaires_estime: "300000-600000",
    marge_brute: "35-50",
    machines: [
      { name: "Réacteur", role: "Formulation", capacity: "Batch", utilities: "Électricité + eau" },
      { name: "Agitateur", role: "Mélange", capacity: "Standard", utilities: "Électricité" },
      { name: "Système de dosage", role: "Dosage", capacity: "Standard", utilities: "Électricité" },
      { name: "Remplisseuse", role: "Conditionnement", capacity: "Semi-automatique", utilities: "Électricité + air" },
      { name: "Étiqueteuse", role: "Étiquetage", capacity: "Standard", utilities: "Électricité" }
    ],
    processus: [
      "Dosage des ingrédients",
      "Mélange",
      "Réaction",
      "Contrôle qualité",
      "Conditionnement",
      "Étiquetage"
    ],
    avantages: ["Demande industrielle", "Import substitution", "Marges correctes", "Marché porteur"],
    challenges: ["Maîtrise des formulations", "Concurrence", "Prix des matières", "Normes"],
    sanitaires: [
      "Respecter les normes de sécurité",
      "Utiliser des équipements de protection",
      "Nettoyer les équipements régulièrement",
      "Former le personnel à la sécurité",
      "Assurer la traçabilité des lots"
    ],
    energie: [
      "Optimiser le mélange",
      "Utiliser des moteurs à haut rendement",
      "Isoler les réacteurs",
      "Récupérer la chaleur",
      "Éteindre les équipements hors production"
    ],
    amenagement: [
      "Organiser en flux continu",
      "Séparer zones de production et stockage",
      "Prévoir zone de stockage",
      "Aménager zone de conditionnement",
      "Faciliter la circulation du personnel"
    ],
    marketing: [
      "Cibler les industries du meuble et emballage",
      "Développer des formulations adaptées",
      "Proposer des conditionnements variés",
      "Communiquer sur la qualité",
      "Développer des contrats réguliers"
    ]
  },

  engrais: {
    id: "engrais",
    nom: "Engrais & pesticides",
    filiereNom: "Chimie, Cosmétiques & Détergents",
    type: "production",
    description: "Fabrication d'engrais et pesticides pour l'agriculture.",
    capex_min: 180000,
    chiffre_affaires_estime: "600000-1200000",
    marge_brute: "25-35",
    machines: [
      { name: "Broyeur", role: "Broyage", capacity: "Standard", utilities: "Électricité" },
      { name: "Mélangeur", role: "Mélange", capacity: "Batch", utilities: "Électricité" },
      { name: "Granulateur", role: "Granulation", capacity: "Option", utilities: "Électricité" },
      { name: "Séchoir", role: "Séchage", capacity: "Option", utilities: "Électricité" },
      { name: "Tamis", role: "Tamisage", capacity: "Standard", utilities: "Électricité" },
      { name: "Ensacheuse", role: "Conditionnement", capacity: "Semi-automatique", utilities: "Électricité + air" }
    ],
    processus: [
      "Réception des matières",
      "Broyage",
      "Dosage",
      "Mélange",
      "Granulation",
      "Séchage",
      "Conditionnement"
    ],
    avantages: ["Soutien à l'agriculture", "Demande constante", "Subventions possibles", "Marché porteur"],
    challenges: ["Normes environnementales", "Autorisations sanitaires", "Concurrence", "Logistique"],
    sanitaires: [
      "Respecter les normes environnementales",
      "Utiliser des équipements de protection",
      "Nettoyer les équipements régulièrement",
      "Former le personnel à la sécurité",
      "Assurer la traçabilité des lots"
    ],
    energie: [
      "Optimiser le broyage",
      "Utiliser des moteurs à haut rendement",
      "Isoler les équipements",
      "Récupérer la chaleur",
      "Éteindre les équipements hors production"
    ],
    amenagement: [
      "Organiser en flux continu",
      "Séparer zones de production et stockage",
      "Prévoir zone de stockage",
      "Aménager zone de conditionnement",
      "Faciliter la circulation des camions"
    ],
    marketing: [
      "Cibler les agriculteurs et coopératives",
      "Développer des formulations adaptées",
      "Proposer des sacs de différents formats",
      "Communiquer sur l'efficacité",
      "Développer des contrats réguliers"
    ]
  },

  javel: {
    id: "javel",
    nom: "Eau de javel & désinfectants",
    filiereNom: "Chimie, Cosmétiques & Détergents",
    type: "production",
    description: "Fabrication d'eau de javel et désinfectants.",
    capex_min: 60000,
    chiffre_affaires_estime: "150000-300000",
    marge_brute: "35-50",
    machines: [
      { name: "Cuve de mélange", role: "Préparation", capacity: "Batch", utilities: "Électricité" },
      { name: "Système de dosage", role: "Dosage", capacity: "Standard", utilities: "Électricité" },
      { name: "Remplisseuse", role: "Conditionnement", capacity: "Semi-automatique", utilities: "Électricité + air" },
      { name: "Étiqueteuse", role: "Étiquetage", capacity: "Standard", utilities: "Électricité" },
      { name: "Poste contrôle", role: "Contrôle qualité", capacity: "Standard", utilities: "Électricité" }
    ],
    processus: [
      "Dosage des ingrédients",
      "Mélange",
      "Contrôle qualité",
      "Conditionnement",
      "Étiquetage"
    ],
    avantages: ["Demande post-COVID", "Processus simple", "Faible investissement", "Large distribution"],
    challenges: ["Sécurité chimique", "Concurrence", "Prix des matières", "Normes"],
    sanitaires: [
      "Respecter les normes de sécurité",
      "Utiliser des équipements de protection",
      "Nettoyer les équipements régulièrement",
      "Former le personnel à la sécurité",
      "Assurer la traçabilité des lots"
    ],
    energie: [
      "Optimiser le mélange",
      "Utiliser des moteurs à haut rendement",
      "Isoler les cuves",
      "Éteindre les équipements hors production",
      "Récupérer la chaleur"
    ],
    amenagement: [
      "Organiser en flux continu",
      "Séparer zones de production et stockage",
      "Prévoir zone de stockage des produits chimiques",
      "Aménager zone de conditionnement",
      "Faciliter la circulation du personnel"
    ],
    marketing: [
      "Cibler supermarchés et grossistes",
      "Proposer des formats variés",
      "Soigner l'emballage",
      "Communiquer sur l'efficacité",
      "Développer des marques propres"
    ]
  },

  produits_industriels: {
    id: "produits_industriels",
    nom: "Produits chimiques industriels",
    filiereNom: "Chimie, Cosmétiques & Détergents",
    type: "production",
    description: "Fabrication de produits chimiques à usage industriel.",
    capex_min: 150000,
    chiffre_affaires_estime: "500000-1000000",
    marge_brute: "40-55",
    machines: [
      { name: "Cuve de mélange", role: "Formulation", capacity: "Batch", utilities: "Électricité" },
      { name: "Réacteur", role: "Réaction", capacity: "Option", utilities: "Électricité + eau" },
      { name: "Système de dosage", role: "Dosage", capacity: "Standard", utilities: "Électricité" },
      { name: "Remplisseuse", role: "Conditionnement", capacity: "Semi-automatique", utilities: "Électricité + air" },
      { name: "Étiqueteuse", role: "Étiquetage", capacity: "Standard", utilities: "Électricité" }
    ],
    processus: [
      "Dosage des ingrédients",
      "Mélange",
      "Réaction",
      "Contrôle qualité",
      "Conditionnement",
      "Étiquetage"
    ],
    avantages: ["Réduction importations", "Support tissu industriel", "Marges élevées", "Marché porteur"],
    challenges: ["Exigences de pureté", "Sécurité extrême", "Concurrence", "Normes"],
    sanitaires: [
      "Respecter les normes de sécurité",
      "Utiliser des équipements de protection",
      "Nettoyer les équipements régulièrement",
      "Former le personnel à la sécurité",
      "Assurer la traçabilité des lots"
    ],
    energie: [
      "Optimiser le mélange",
      "Utiliser des moteurs à haut rendement",
      "Isoler les réacteurs",
      "Récupérer la chaleur",
      "Éteindre les équipements hors production"
    ],
    amenagement: [
      "Organiser en flux continu",
      "Séparer zones de production et stockage",
      "Prévoir zone de stockage des produits chimiques",
      "Aménager zone de conditionnement",
      "Faciliter la circulation du personnel"
    ],
    marketing: [
      "Cibler les industries locales",
      "Développer des formulations adaptées",
      "Proposer des conditionnements industriels",
      "Communiquer sur la qualité",
      "Développer des contrats réguliers"
    ]
  },

  // ==============================================
// 3. TEXTILE, HABILLEMENT & CUIR (8 UP enrichies)
// ==============================================

confection: {
  id: "confection",
  nom: "Confection de vêtements",
  filiereNom: "Textile, Habillement & Cuir",
  type: "production",
  description: "Fabrication de vêtements prêts-à-porter pour hommes, femmes et enfants. Spécialisation possible en pagne, tenues traditionnelles, casual et professionnel.",
  capex_min: 60000,
  chiffre_affaires_estime: "300000-750000",
  marge_brute: "35-50",
  emplois_directs: "8-20",
  emplois_indirects: "3-6",
  roi_estime: "3-5 ans",
  investment_breakdown: {
    machines: 35000,
    installation: 10000,
    working_capital: 10000,
    training: 5000,
    total: 60000
  },
  monthly_capacity: "5,000 pièces",
  estimated_revenue: 500000,
  gross_margin: 42,
  net_profitability: 25,
  machines: [
    { name: "Table de coupe", role: "Découpe des tissus", capacity: "Standard", utilities: "Électricité", price: 8000 },
    { name: "Machine à coudre industrielle", role: "Assemblage", capacity: "Standard", utilities: "Électricité", price: 5000 },
    { name: "Surjeteuse", role: "Surfilage et finition", capacity: "Standard", utilities: "Électricité", price: 6000 },
    { name: "Machine à boutonnières", role: "Boutonnières", capacity: "Standard", utilities: "Électricité", price: 8000 },
    { name: "Presse à repasser", role: "Repassage et finition", capacity: "Standard", utilities: "Électricité + vapeur", price: 5000 },
    { name: "Poste contrôle qualité", role: "Contrôle des finitions", capacity: "Standard", utilities: "—", price: 2000 }
  ],
  processus: [
    "Réception des tissus (pagne, coton, polyester)",
    "Découpe selon patron",
    "Assemblage des pièces",
    "Surfilage et finitions",
    "Pose des boutons/fermetures",
    "Repassage",
    "Contrôle qualité",
    "Conditionnement"
  ],
  avantages: [
    "Main-d'œuvre disponible",
    "Tendance 'Made in Côte d'Ivoire' (fierté locale)",
    "Marché local important (classe moyenne croissante)",
    "Export régional possible (UEMOA/CEDEAO)",
    "🇨🇮 Coton local (1er producteur africain après le Mali)",
    "Personnalisation possible (sur mesure, séries limitées)"
  ],
  challenges: [
    "Concurrence de la friperie (lo GN) et des importations chinoises",
    "Prix très bas des concurrents (qualité souvent médiocre)",
    "Qualité des finissons (ourlets, boutonnières)",
    "Marketing et distribution",
    "Gestion des invendus et des tailles"
  ],
  sanitaires: [
    "Nettoyer les postes de travail",
    "Former le personnel aux règles d'hygiène",
    "Entretenir régulièrement les machines",
    "Gérer les chutes de tissus (recyclage ou revente)",
    "Assurer la traçabilité des productions"
  ],
  energie: [
    "Optimiser la découpe pour réduire les chutes",
    "Utiliser des moteurs à haut rendement",
    "Éteindre les équipements hors production",
    "Isoler les zones de production",
    "Utiliser un éclairage LED"
  ],
  amenagement: [
    "Organiser en flux linéaire (coupe → couture → finition)",
    "Séparer les zones de coupe et de couture",
    "Prévoir une zone de stockage des tissus",
    "Aménager une zone de contrôle qualité",
    "Faciliter la circulation du personnel"
  ],
  marketing: [
    "Cibler boutiques, marchés et supermarchés",
    "Développer des collections adaptées aux saisons",
    "Soigner les finitions pour se démarquer",
    "Communiquer sur l'origine locale ('Made in Côte d'Ivoire')",
    "Utiliser les réseaux sociaux (Instagram, Facebook, TikTok)",
    "Proposer des séries limitées et personnalisées"
  ],
  raw_materials: [
    "Pagne (tissus locaux)",
    "Coton (production locale)",
    "Polyester (import)",
    "Fils, boutons, fermetures éclair",
    "Emballages (sachets, cartons)"
  ],
  target_markets: [
    "Boutiques de mode",
    "Marchés traditionnels",
    "Supermarchés",
    "Entreprises (uniformes)",
    "Particuliers (sur mesure)"
  ],
  competitive_advantages: [
    "Vêtements fraîchement produits (qualité supérieure à la friperie)",
    "Ingrédients locaux (pagne, coton)",
    "Produits 'Made in Côte d'Ivoire'",
    "Flexibilité des lots (petites séries, personnalisation)",
    "Délais courts vs importations (2-3 mois)"
  ],
  positionnement: "Milieu de gamme premium - qualité supérieure à la friperie, prix compétitifs face aux importations",
  opportunites_niche: [
    "Vêtements en pagne (tissus locaux) → forte demande",
    "Tenues traditionnelles (baptêmes, mariages)",
    "Mode éco-responsable (recyclage, coton bio)",
    "Uniformes scolaires (marché institutionnel stable)"
  ]
},

tissage: {
  id: "tissage",
  nom: "Tissage industriel",
  filiereNom: "Textile, Habillement & Cuir",
  type: "production",
  description: "Production de tissus à partir de coton local. Fabrication de pagnes, tissus wax, bazin et cotonnades pour le marché local et régional.",
  capex_min: 100000,
  chiffre_affaires_estime: "400000-800000",
  marge_brute: "30-45",
  emplois_directs: "10-25",
  emplois_indirects: "4-8",
  roi_estime: "5-7 ans",
  investment_breakdown: {
    machines: 60000,
    installation: 15000,
    working_capital: 15000,
    training: 10000,
    total: 100000
  },
  monthly_capacity: "50,000 mètres",
  estimated_revenue: 600000,
  gross_margin: 35,
  net_profitability: 20,
  machines: [
    { name: "Ourdissoir", role: "Préparation des fils", capacity: "Standard", utilities: "Électricité", price: 15000 },
    { name: "Métier à tisser", role: "Tissage", capacity: "Selon nombre", utilities: "Électricité", price: 30000 },
    { name: "Bobinoir", role: "Préparation des bobines", capacity: "Standard", utilities: "Électricité", price: 10000 },
    { name: "Encolleuse", role: "Encolage des fils", capacity: "Option", utilities: "Électricité + eau", price: 15000 },
    { name: "Table de contrôle", role: "Contrôle qualité", capacity: "Standard", utilities: "Éclairage", price: 5000 }
  ],
  processus: [
    "Réception des fils de coton",
    "Ourdissage (préparation des chaînes)",
    "Encolage (renforcement des fils)",
    "Tissage",
    "Contrôle qualité",
    "Conditionnement en rouleaux"
  ],
  avantages: [
    "Coton local (premier producteur africain après le Mali)",
    "Chaîne de valeur complète (du coton au tissu)",
    "Export possible vers l'UEMOA/CEDEAO",
    "Marché porteur (pagnes, wax)",
    "Substitution aux importations (tissus chinois)",
    "🇨🇮 Valorisation du coton ivoirien"
  ],
  challenges: [
    "Investissement machines lourd (métiers à tisser)",
    "Concurrence des tissus importés (Chine, Inde, Pakistan)",
    "Qualité constante (irrégularités possibles)",
    "Entretien des métiers à tisser (spécialistes rares)",
    "Consommation d'énergie élevée"
  ],
  sanitaires: [
    "Nettoyer les métiers quotidiennement",
    "Contrôler la qualité des fils",
    "Entretenir les machines régulièrement",
    "Former le personnel à la sécurité",
    "Assurer la traçabilité des lots"
  ],
  energie: [
    "Optimiser le tissage (variateurs de vitesse)",
    "Utiliser des moteurs à haut rendement",
    "Éteindre les équipements hors production",
    "Isoler les zones de production",
    "Récupérer la chaleur"
  ],
  amenagement: [
    "Organiser en flux continu",
    "Séparer zones de préparation et tissage",
    "Prévoir zone de stockage des rouleaux",
    "Aménager zone de contrôle qualité",
    "Faciliter la circulation des chariots"
  ],
  marketing: [
    "Cibler les confectionneurs et couturiers",
    "Développer des tissus aux motifs locaux",
    "Proposer des motifs personnalisés",
    "Communiquer sur l'origine locale",
    "Exporter vers la sous-région"
  ],
  raw_materials: [
    "Coton ivoirien (fils)",
    "Fils de chaîne et de trame",
    "Colorants et teintures",
    "Rouleaux d'emballage"
  ],
  target_markets: [
    "Confectionneurs de vêtements",
    "Couturiers et ateliers",
    "Grossistes en tissus",
    "Export vers UEMOA/CEDEAO"
  ],
  competitive_advantages: [
    "Tissus 'Made in Côte d'Ivoire' (qualité supérieure aux importations)",
    "Circuit court (du coton local au tissu fini)",
    "Motifs exclusifs et personnalisables",
    "Délais courts vs importations",
    "Prix compétitifs"
  ],
  positionnement: "Qualité premium - tissus locaux face aux importations asiatiques",
  opportunites_niche: [
    "Tissus bio (coton non OGM)",
    "Teinture naturelle (indigo, écorces)",
    "Tissage de pagnes de cérémonie haut de gamme"
  ]
},

maroquinerie: {
  id: "maroquinerie",
  nom: "Maroquinerie & articles en cuir",
  filiereNom: "Textile, Habillement & Cuir",
  type: "production",
  description: "Fabrication d'articles en cuir et simili-cuir : sacs, ceintures, portefeuilles, chaussures, accessoires. Valorisation des peaux locales.",
  capex_min: 75000,
  chiffre_affaires_estime: "250000-600000",
  marge_brute: "40-60",
  emplois_directs: "5-15",
  emplois_indirects: "2-4",
  roi_estime: "3-5 ans",
  investment_breakdown: {
    machines: 40000,
    installation: 10000,
    working_capital: 15000,
    training: 10000,
    total: 75000
  },
  monthly_capacity: "2,000 pièces",
  estimated_revenue: 400000,
  gross_margin: 50,
  net_profitability: 30,
  machines: [
    { name: "Table de découpe", role: "Découpe cuir", capacity: "Petites séries", utilities: "—", price: 5000 },
    { name: "Machine à refendre", role: "Amincissement", capacity: "Standard", utilities: "Électricité", price: 15000 },
    { name: "Machine à coudre cuir", role: "Assemblage", capacity: "Standard", utilities: "Électricité", price: 12000 },
    { name: "Presse", role: "Collage et marquage", capacity: "Standard", utilities: "Électricité", price: 8000 },
    { name: "Poste finition", role: "Finition et polissage", capacity: "Standard", utilities: "Électricité", price: 5000 }
  ],
  processus: [
    "Réception du cuir (local)",
    "Découpe des patrons",
    "Amincissement (refendage)",
    "Assemblage et couture",
    "Collage et marquage",
    "Finition et polissage",
    "Contrôle qualité",
    "Conditionnement"
  ],
  avantages: [
    "Cuir local (peaux de bovins, chèvres, moutons)",
    "Valeur ajoutée élevée (matière → produit fini)",
    "Export possible vers l'Europe (luxe)",
    "Marché porteur (accessoires de mode)",
    "Tendance 'Made in Côte d'Ivoire'",
    "Artisanat haut de gamme valorisé"
  ],
  challenges: [
    "Concurrence des importations (Turquie, Chine, Maroc)",
    "Qualité du cuir local (à améliorer)",
    "Design compétitif (tendances actuelles)",
    "Marketing et image de marque",
    "Main-d'œuvre qualifiée rare (maroquiniers)"
  ],
  sanitaires: [
    "Nettoyer les postes de travail",
    "Former le personnel aux techniques du cuir",
    "Entretenir les machines",
    "Gérer les chutes de cuir (recyclage)",
    "Assurer la traçabilité"
  ],
  energie: [
    "Optimiser la découpe (placement des patrons)",
    "Utiliser des moteurs à haut rendement",
    "Éteindre les équipements hors production",
    "Isoler les zones",
    "Utiliser un éclairage LED"
  ],
  amenagement: [
    "Organiser en flux linéaire",
    "Séparer zones de découpe et assemblage",
    "Prévoir zone de stockage du cuir",
    "Aménager zone de finition",
    "Faciliter la circulation"
  ],
  marketing: [
    "Cibler boutiques de luxe et concept stores",
    "Développer des collections capsule",
    "Soigner les finitions (coutures, teinture)",
    "Communiquer sur l'artisanat local",
    "Exporter vers l'Europe (luxe)",
    "Utiliser les réseaux sociaux (Instagram, Pinterest)"
  ],
  raw_materials: [
    "Cuir de bovin (local)",
    "Cuir de chèvre/mouton",
    "Simili-cuir (import)",
    "Fils cirés, colle",
    "Métaux (boucles, rivets)",
    "Emballages (boîtes, pochettes)"
  ],
  target_markets: [
    "Boutiques de luxe",
    "Concept stores",
    "Export Europe",
    "Particuliers (haut de gamme)",
    "Entreprises (cadeaux d'affaires)"
  ],
  competitive_advantages: [
    "Cuir local (traçabilité, authenticité)",
    "Artisanat haut de gamme 'Made in Côte d'Ivoire'",
    "Finitions soignées (coutures, polissage)",
    "Design exclusif (créateurs locaux)",
    "Prix compétitifs face aux marques européennes"
  ],
  positionnement: "Haut de gamme - luxe accessible 'Made in Côte d'Ivoire'",
  opportunites_niche: [
    "Maroquinerie éco-responsable (cuir végétal, recyclé)",
    "Personnalisation (gravure, initiales)",
    "Collaboration avec créateurs de mode"
  ]
},

teinture: {
  id: "teinture",
  nom: "Teinturerie industrielle",
  filiereNom: "Textile, Habillement & Cuir",
  type: "service",
  description: "Services de teinture et ennoblissement de textiles. Teinture de pagnes, tissus, vêtements. Blanchisserie industrielle pour hôtels et restaurants.",
  capex_min: 40000,
  chiffre_affaires_estime: "200000-400000",
  marge_brute: "35-50",
  emplois_directs: "4-10",
  emplois_indirects: "2-4",
  roi_estime: "3-4 ans",
  investment_breakdown: {
    machines: 20000,
    installation: 5000,
    working_capital: 10000,
    training: 5000,
    total: 40000
  },
  monthly_capacity: "10,000 pièces",
  estimated_revenue: 300000,
  gross_margin: 45,
  net_profitability: 28,
  machines: [
    { name: "Cuve de teinture", role: "Teinture", capacity: "Batch", utilities: "Électricité + eau", price: 15000 },
    { name: "Système de chauffage", role: "Chauffage", capacity: "Standard", utilities: "Électricité", price: 5000 },
    { name: "Essoreuse", role: "Extraction eau", capacity: "Standard", utilities: "Électricité", price: 8000 },
    { name: "Séchoir", role: "Séchage", capacity: "Selon flux", utilities: "Électricité", price: 12000 }
  ],
  processus: [
    "Réception des textiles",
    "Tri par couleur et matière",
    "Préparation (détachage)",
    "Teinture en cuve",
    "Rinçage",
    "Essorage",
    "Séchage",
    "Repassage",
    "Conditionnement"
  ],
  avantages: [
    "Service essentiel (teinture de pagnes, vêtements)",
    "Demande constante (mariages, cérémonies)",
    "Marges intéressantes (35-50%)",
    "Faible investissement initial",
    "Écologique (moins d'eau que la teinture artisanale)"
  ],
  challenges: [
    "Concurrence informelle (teinturiers artisanaux)",
    "Gestion des eaux usées (normes environnementales)",
    "Concurrence des importations (tissus déjà teints)",
    "Qualité de teinture (tenue des couleurs)",
    "Saisonnalité (pics avant fêtes)"
  ],
  sanitaires: [
    "Traiter les eaux usées (station d'épuration)",
    "Utiliser des produits certifiés (non toxiques)",
    "Nettoyer les cuves régulièrement",
    "Former le personnel à la sécurité chimique",
    "Assurer la traçabilité des lots"
  ],
  energie: [
    "Optimiser la teinture (température, durée)",
    "Récupérer la chaleur des cuves",
    "Isoler les équipements",
    "Utiliser des moteurs à haut rendement",
    "Éteindre les équipements hors production"
  ],
  amenagement: [
    "Organiser en flux continu",
    "Séparer zones de teinture et séchage",
    "Prévoir zone de stockage",
    "Aménager station de traitement des eaux",
    "Faciliter la circulation"
  ],
  marketing: [
    "Cibler particuliers (cérémonies, mariages)",
    "Proposer des coloris tendance",
    "Garantir la tenue des couleurs",
    "Communiquer sur l'écologie (moins d'eau)",
    "Proposer des contrats réguliers (hôtels, restaurants)"
  ],
  raw_materials: [
    "Colorants et teintures",
    "Eau (importante quantité)",
    "Produits de fixation",
    "Détachants",
    "Emballages (sachets, housses)"
  ],
  target_markets: [
    "Particuliers (mariages, baptêmes)",
    "Hôtels et restaurants",
    "Collectivités",
    "Confectionneurs",
    "Grossistes en pagnes"
  ],
  competitive_advantages: [
    "Teinture professionnelle (tenue des couleurs, uniformité)",
    "Écologique (moins d'eau, produits certifiés)",
    "Délais rapides (24-48h)",
    "Service personnalisé (conseil colorimétrie)",
    "Prix compétitifs"
  ],
  positionnement: "Service professionnel de qualité - alternative écologique à la teinture artisanale",
  opportunites_niche: [
    "Teinture naturelle (indigo, écorces)",
    "Blanchisserie industrielle (hôtels)",
    "Nettoyage à sec haut de gamme"
  ]
},

broderie: {
  id: "broderie",
  nom: "Broderie industrielle",
  filiereNom: "Textile, Habillement & Cuir",
  type: "service",
  description: "Broderie automatisée sur textiles : logos d'entreprises, initiales, motifs décoratifs. Service pour confectionneurs, entreprises et particuliers.",
  capex_min: 55000,
  chiffre_affaires_estime: "150000-300000",
  marge_brute: "40-55",
  emplois_directs: "3-8",
  emplois_indirects: "1-3",
  roi_estime: "3-5 ans",
  investment_breakdown: {
    machines: 35000,
    installation: 5000,
    working_capital: 10000,
    training: 5000,
    total: 55000
  },
  monthly_capacity: "5,000 pièces",
  estimated_revenue: 220000,
  gross_margin: 48,
  net_profitability: 30,
  machines: [
    { name: "Machine à broder", role: "Broderie", capacity: "Multi-têtes", utilities: "Électricité", price: 25000 },
    { name: "Ordinateur", role: "Programmation", capacity: "Standard", utilities: "Électricité + logiciel", price: 8000 },
    { name: "Cadres", role: "Maintien des textiles", capacity: "Standard", utilities: "—", price: 5000 },
    { name: "Poste finition", role: "Coupe des fils", capacity: "Standard", utilities: "—", price: 2000 }
  ],
  processus: [
    "Programmation du motif (logiciel DAO)",
    "Préparation du textile (cadrage)",
    "Broderie automatisée",
    "Finition (coupe des fils)",
    "Contrôle qualité",
    "Conditionnement"
  ],
  avantages: [
    "Valeur ajoutée importante (personnalisation)",
    "Demande croissante (logos, événements)",
    "Service B2B (entreprises, confectionneurs)",
    "Faible investissement relatif",
    "Marge élevée (40-55%)"
  ],
  challenges: [
    "Maintenance des machines (spécialistes rares)",
    "Design numériques (qualification nécessaire)",
    "Concurrence (petits brodeurs artisanaux)",
    "Qualité des finitions (fils coupés)",
    "Délais de production"
  ],
  sanitaires: [
    "Nettoyer les machines quotidiennement",
    "Former le personnel à la programmation",
    "Entretenir les équipements",
    "Gérer les déchets (fils, chutes)",
    "Assurer la traçabilité"
  ],
  energie: [
    "Optimiser la broderie (vitesse, motifs)",
    "Utiliser des moteurs à haut rendement",
    "Éteindre les équipements hors production",
    "Isoler les zones",
    "Utiliser un éclairage LED"
  ],
  amenagement: [
    "Organiser par postes",
    "Prévoir zone de programmation",
    "Aménager zone de contrôle qualité",
    "Faciliter la circulation",
    "Prévoir zone de stockage"
  ],
  marketing: [
    "Cibler confectionneurs et entreprises",
    "Développer des motifs variés (logos, initiales)",
    "Proposer de la personnalisation",
    "Communiquer sur la qualité (fils, finitions)",
    "Utiliser les réseaux sociaux (exemples de réalisations)"
  ],
  raw_materials: [
    "Fils de broderie (coton, polyester, métallisés)",
    "Textiles supports (pagnes, tissus)",
    "Logiciels de programmation",
    "Emballages (boîtes, sachets)"
  ],
  target_markets: [
    "Confectionneurs de vêtements",
    "Entreprises (logos sur uniformes)",
    "Particuliers (initiales, prénoms)",
    "Événementiel (mariages, baptêmes)",
    "Écoles (blasons, logos)"
  ],
  competitive_advantages: [
    "Broderie professionnelle (finition soignée)",
    "Délais rapides (24-48h)",
    "Motifs personnalisables",
    "Qualité des fils (tenue, brillance)",
    "Prix compétitifs"
  ],
  positionnement: "Service professionnel de broderie - qualité, délais, personnalisation",
  opportunites_niche: [
    "Broderie 3D (effet relief)",
    "Broderie sur cuir (maroquinerie)",
    "Création de patchs personnalisés"
  ]
},

chaussures: {
  id: "chaussures",
  nom: "Fabrication de chaussures",
  filiereNom: "Textile, Habillement & Cuir",
  type: "production",
  description: "Fabrication de chaussures en cuir et matériaux synthétiques. Chaussures habillées, casual, sécurité, enfants.",
  capex_min: 120000,
  chiffre_affaires_estime: "500000-1000000",
  marge_brute: "35-50",
  emplois_directs: "10-25",
  emplois_indirects: "4-8",
  roi_estime: "4-6 ans",
  investment_breakdown: {
    machines: 70000,
    installation: 15000,
    working_capital: 25000,
    training: 10000,
    total: 120000
  },
  monthly_capacity: "10,000 paires",
  estimated_revenue: 750000,
  gross_margin: 40,
  net_profitability: 25,
  machines: [
    { name: "Table de découpe", role: "Découpe cuir/tissu", capacity: "Standard", utilities: "—", price: 10000 },
    { name: "Machine à piquer", role: "Couture", capacity: "Standard", utilities: "Électricité", price: 15000 },
    { name: "Presse d'assemblage", role: "Assemblage semelle/tige", capacity: "Standard", utilities: "Électricité + air", price: 20000 },
    { name: "Formes", role: "Mise en forme", capacity: "Selon modèles", utilities: "Électricité", price: 15000 },
    { name: "Poste finition", role: "Finition et polissage", capacity: "Standard", utilities: "Électricité", price: 10000 }
  ],
  processus: [
    "Réception des matériaux (cuir, tissu, semelles)",
    "Découpe des pièces",
    "Couture de la tige",
    "Assemblage tige/semelle",
    "Mise en forme",
    "Finition et polissage",
    "Contrôle qualité",
    "Conditionnement"
  ],
  avantages: [
    "Demande constante (chaussures de première nécessité)",
    "Cuir local (peaux de bovins)",
    "Export possible vers UEMOA/CEDEAO",
    "Marché porteur (classe moyenne croissante)",
    "Substitution aux importations (Asie, Maroc)"
  ],
  challenges: [
    "Concurrence des importations (Chine, Vietnam, Maroc)",
    "Qualité du cuir local (à améliorer)",
    "Design (tendances actuelles)",
    "Marketing et image de marque",
    "Gestion des tailles et stocks"
  ],
  sanitaires: [
    "Nettoyer les postes",
    "Former le personnel",
    "Entretenir les machines",
    "Gérer les chutes (cuir, tissu)",
    "Assurer la traçabilité"
  ],
  energie: [
    "Optimiser la découpe (placement des patrons)",
    "Utiliser des moteurs à haut rendement",
    "Éteindre les équipements hors production",
    "Isoler les zones",
    "Utiliser un éclairage LED"
  ],
  amenagement: [
    "Organiser en flux linéaire",
    "Séparer zones de découpe et assemblage",
    "Prévoir zone de stockage",
    "Aménager zone de finition",
    "Faciliter la circulation"
  ],
  marketing: [
    "Cibler boutiques de chaussures et supermarchés",
    "Développer des collections (habillées, casual)",
    "Soigner les finitions",
    "Communiquer sur le confort et la durabilité",
    "Utiliser les réseaux sociaux"
  ],
  raw_materials: [
    "Cuir (local)",
    "Tissus (coton, synthétique)",
    "Semelles (caoutchouc, EVA)",
    "Colles, fils",
    "Emballages (boîtes à chaussures)"
  ],
  target_markets: [
    "Boutiques de chaussures",
    "Supermarchés",
    "Marchés",
    "Entreprises (chaussures de sécurité)",
    "Export UEMOA/CEDEAO"
  ],
  competitive_advantages: [
    "Chaussures 'Made in Côte d'Ivoire' (qualité)",
    "Confort adapté au climat tropical",
    "Durabilité (semelles robustes)",
    "Prix compétitifs",
    "Délais courts vs importations"
  ],
  positionnement: "Milieu de gamme - qualité et confort 'Made in Côte d'Ivoire'",
  opportunites_niche: [
    "Chaussures éco-responsables (matériaux recyclés)",
    "Chaussures orthopédiques",
    "Chaussures de sécurité (EPI)"
  ]
},

uniformes: {
  id: "uniformes",
  nom: "Confection d'uniformes",
  filiereNom: "Textile, Habillement & Cuir",
  type: "production",
  description: "Fabrication d'uniformes professionnels et scolaires : tenues d'entreprise, uniformes scolaires, vêtements de travail, EPI.",
  capex_min: 70000,
  chiffre_affaires_estime: "300000-600000",
  marge_brute: "30-45",
  emplois_directs: "10-25",
  emplois_indirects: "3-6",
  roi_estime: "3-5 ans",
  investment_breakdown: {
    machines: 40000,
    installation: 10000,
    working_capital: 15000,
    training: 5000,
    total: 70000
  },
  monthly_capacity: "10,000 pièces",
  estimated_revenue: 450000,
  gross_margin: 38,
  net_profitability: 22,
  machines: [
    { name: "Table de coupe", role: "Découpe des tissus", capacity: "Standard", utilities: "Électricité", price: 10000 },
    { name: "Machine à coudre", role: "Assemblage", capacity: "Standard", utilities: "Électricité", price: 8000 },
    { name: "Surjeteuse", role: "Surfilage", capacity: "Standard", utilities: "Électricité", price: 8000 },
    { name: "Presse", role: "Repassage", capacity: "Standard", utilities: "Électricité + vapeur", price: 6000 },
    { name: "Machine à broder", role: "Logo (option)", capacity: "Option", utilities: "Électricité", price: 15000 }
  ],
  processus: [
    "Réception des tissus",
    "Découpe",
    "Assemblage",
    "Finition",
    "Broderie logo (option)",
    "Contrôle qualité",
    "Conditionnement"
  ],
  avantages: [
    "Commandes institutionnelles (écoles, entreprises)",
    "Demande régulière (chaque année)",
    "Volume important (contrats longs)",
    "Stabilité des revenus",
    "Opportunité de fidélisation"
  ],
  challenges: [
    "Appels d'offres (concurrence intense)",
    "Délais de livraison serrés",
    "Qualité constante exigée",
    "Concurrence sur les prix (importations)",
    "Gestion des tailles"
  ],
  sanitaires: [
    "Nettoyer les postes",
    "Former le personnel",
    "Entretenir les machines",
    "Gérer les chutes",
    "Assurer la traçabilité"
  ],
  energie: [
    "Optimiser la coupe",
    "Utiliser des moteurs à haut rendement",
    "Éteindre les équipements hors production",
    "Isoler les zones",
    "Utiliser un éclairage LED"
  ],
  amenagement: [
    "Organiser en flux linéaire",
    "Séparer zones de coupe et couture",
    "Prévoir zone de stockage",
    "Aménager zone de contrôle qualité",
    "Faciliter la circulation"
  ],
  marketing: [
    "Cibler écoles, entreprises, administrations",
    "Répondre aux appels d'offres",
    "Proposer des échantillons",
    "Garantir les délais",
    "Communiquer sur la qualité"
  ],
  raw_materials: [
    "Tissus (coton, polyester, mélanges)",
    "Fils",
    "Boutons, fermetures",
    "Broderie logos",
    "Emballages"
  ],
  target_markets: [
    "Écoles (uniformes scolaires)",
    "Entreprises (tenues de travail)",
    "Administrations",
    "Hôtels et restaurants",
    "Hôpitaux"
  ],
  competitive_advantages: [
    "Qualité constante (finitions soignées)",
    "Respect des délais (production locale)",
    "Service personnalisé (adaptation tailles)",
    "Prix compétitifs",
    "Livraison directe"
  ],
  positionnement: "Qualité et fiabilité - partenaire institutionnel de confiance",
  opportunites_niche: [
    "Uniformes éco-responsables (coton bio)",
    "Vêtements de travail techniques (EPI)",
    "Location d'uniformes (hôtels, hôpitaux)"
  ]
},

linge: {
  id: "linge",
  nom: "Linge de maison",
  filiereNom: "Textile, Habillement & Cuir",
  type: "production",
  description: "Fabrication de linge de maison : draps, taies d'oreiller, nappes, serviettes, torchons. Valorisation du coton local.",
  capex_min: 90000,
  chiffre_affaires_estime: "350000-700000",
  marge_brute: "35-50",
  emplois_directs: "8-20",
  emplois_indirects: "3-5",
  roi_estime: "4-6 ans",
  investment_breakdown: {
    machines: 50000,
    installation: 15000,
    working_capital: 15000,
    training: 10000,
    total: 90000
  },
  monthly_capacity: "20,000 pièces",
  estimated_revenue: 500000,
  gross_margin: 42,
  net_profitability: 25,
  machines: [
    { name: "Table de coupe", role: "Découpe", capacity: "Standard", utilities: "—", price: 10000 },
    { name: "Machine à coudre", role: "Assemblage", capacity: "Standard", utilities: "Électricité", price: 8000 },
    { name: "Surjeteuse", role: "Ourlet", capacity: "Standard", utilities: "Électricité", price: 8000 },
    { name: "Presse", role: "Repassage", capacity: "Standard", utilities: "Électricité + vapeur", price: 6000 }
  ],
  processus: [
    "Réception des tissus (coton, percale)",
    "Découpe",
    "Assemblage",
    "Ourlet",
    "Repassage",
    "Contrôle qualité",
    "Conditionnement"
  ],
  avantages: [
    "Coton local (qualité, traçabilité)",
    "Marché en croissance (hôtellerie, particuliers)",
    "Export possible (UEMOA, Europe)",
    "Produits de première nécessité",
    "Tendance 'Made in Côte d'Ivoire'"
  ],
  challenges: [
    "Concurrence des importations (Chine, Inde, Pakistan)",
    "Qualité des finissons (ourlets)",
    "Design et packaging",
    "Marketing",
    "Gestion des tailles (draps, nappes)"
  ],
  sanitaires: [
    "Nettoyer les postes",
    "Former le personnel",
    "Entretenir les machines",
    "Gérer les chutes",
    "Assurer la traçabilité"
  ],
  energie: [
    "Optimiser la coupe",
    "Utiliser des moteurs à haut rendement",
    "Éteindre les équipements hors production",
    "Isoler les zones",
    "Utiliser un éclairage LED"
  ],
  amenagement: [
    "Organiser en flux linéaire",
    "Séparer zones de coupe et couture",
    "Prévoir zone de stockage",
    "Aménager zone de repassage",
    "Faciliter la circulation"
  ],
  marketing: [
    "Cibler supermarchés, boutiques, hôtels",
    "Développer des collections (couleurs, motifs)",
    "Soigner les finitions",
    "Communiquer sur le coton local",
    "Proposer des packs (draps + taies)"
  ],
  raw_materials: [
    "Coton (local)",
    "Percale, satin (import)",
    "Fils",
    "Emballages (sachets, boîtes)"
  ],
  target_markets: [
    "Supermarchés",
    "Boutiques de linge de maison",
    "Hôtels et restaurants",
    "Particuliers",
    "Export UEMOA"
  ],
  competitive_advantages: [
    "Linge 'Made in Côte d'Ivoire' (coton local)",
    "Qualité supérieure aux importations",
    "Prix compétitifs",
    "Délais courts",
    "Personnalisation possible (broderie initiales)"
  ],
  positionnement: "Qualité et confort - linge de maison 'Made in Côte d'Ivoire'",
  opportunites_niche: [
    "Linge éco-responsable (coton bio)",
    "Linge personnalisé (hôtels, entreprises)",
    "Draps en pagne (tissus locaux)"
  ]
},

  // ==============================================
  // 4. MÉTALLURGIE & MÉCANIQUE (8 UP)
  // ==============================================

  serrurerie: {
    id: "serrurerie",
    nom: "Serrurerie industrielle",
    filiereNom: "Métallurgie & Mécanique",
    type: "production",
    description: "Fabrication de serrures, clés et systèmes de sécurité.",
    capex_min: 55000,
    chiffre_affaires_estime: "200000-400000",
    marge_brute: "35-50",
    machines: [
      { name: "Poste à souder", role: "Soudage", capacity: "Standard", utilities: "Électricité" },
      { name: "Scie à ruban", role: "Découpe", capacity: "Standard", utilities: "Électricité" },
      { name: "Perceuse", role: "Perçage", capacity: "Standard", utilities: "Électricité" },
      { name: "Meuleuse", role: "Finition", capacity: "Standard", utilities: "Électricité" }
    ],
    processus: [
      "Réception des matériaux",
      "Découpe",
      "Usinage",
      "Assemblage",
      "Finition",
      "Contrôle qualité"
    ],
    avantages: ["Demande BTP", "Import substitution", "Marché porteur", "Marges correctes"],
    challenges: ["Concurrence importations", "Innovation continue", "Qualité", "Sécurité"],
    sanitaires: [
      "Utiliser des EPI",
      "Nettoyer les postes",
      "Former le personnel",
      "Entretenir les machines",
      "Assurer la traçabilité"
    ],
    energie: [
      "Optimiser l'usinage",
      "Utiliser des moteurs à haut rendement",
      "Éteindre les équipements hors production",
      "Isoler les zones",
      "Récupérer les chutes"
    ],
    amenagement: [
      "Organiser en flux continu",
      "Séparer zones d'usinage et assemblage",
      "Prévoir zone de stockage",
      "Aménager zone de contrôle",
      "Faciliter la circulation"
    ],
    marketing: [
      "Cibler quincailleries et BTP",
      "Développer des gammes variées",
      "Garantir la sécurité",
      "Communiquer sur la qualité",
      "Proposer des services après-vente"
    ]
  },

  outillage: {
    id: "outillage",
    nom: "Outillage manuel",
    filiereNom: "Métallurgie & Mécanique",
    type: "production",
    description: "Fabrication d'outils manuels pour BTP et industrie.",
    capex_min: 85000,
    chiffre_affaires_estime: "300000-600000",
    marge_brute: "30-45",
    machines: [
      { name: "Scie à ruban", role: "Découpe", capacity: "Standard", utilities: "Électricité" },
      { name: "Poste à souder", role: "Assemblage", capacity: "Standard", utilities: "Électricité" },
      { name: "Perceuse", role: "Perçage", capacity: "Standard", utilities: "Électricité" },
      { name: "Meuleuse", role: "Finition", capacity: "Standard", utilities: "Électricité" }
    ],
    processus: [
      "Réception des matériaux",
      "Découpe",
      "Usinage",
      "Assemblage",
      "Traitement thermique",
      "Finition"
    ],
    avantages: ["Demande constante", "Marché local important", "Import substitution", "Marges correctes"],
    challenges: ["Qualité acier", "Concurrence asiatique", "Durabilité", "Marketing"],
    sanitaires: [
      "Utiliser des EPI",
      "Nettoyer les postes",
      "Former le personnel",
      "Entretenir les machines",
      "Assurer la traçabilité"
    ],
    energie: [
      "Optimiser l'usinage",
      "Utiliser des moteurs à haut rendement",
      "Éteindre les équipements hors production",
      "Isoler les zones",
      "Récupérer les chutes"
    ],
    amenagement: [
      "Organiser en flux continu",
      "Séparer zones d'usinage et assemblage",
      "Prévoir zone de stockage",
      "Aménager zone de contrôle",
      "Faciliter la circulation"
    ],
    marketing: [
      "Cibler quincailleries et BTP",
      "Développer des gammes variées",
      "Garantir la qualité",
      "Communiquer sur la robustesse",
      "Proposer des services après-vente"
    ]
  },

  recyclage_metaux: {
    id: "recyclage_metaux",
    nom: "Recyclage de métaux",
    filiereNom: "Métallurgie & Mécanique",
    type: "production",
    description: "Recyclage et transformation de métaux ferreux et non-ferreux.",
    capex_min: 110000,
    chiffre_affaires_estime: "400000-800000",
    marge_brute: "25-40",
    machines: [
      { name: "Zone de tri", role: "Tri", capacity: "Standard", utilities: "—" },
      { name: "Cisaille", role: "Découpe", capacity: "Standard", utilities: "Électricité" },
      { name: "Broyeur", role: "Broyage", capacity: "Standard", utilities: "Électricité" },
      { name: "Presse à balles", role: "Compactage", capacity: "Standard", utilities: "Électricité" }
    ],
    processus: [
      "Collecte",
      "Tri",
      "Découpe",
      "Broyage",
      "Compactage",
      "Expédition"
    ],
    avantages: ["Écologique", "Demande industries", "Subventions possibles", "Économie circulaire"],
    challenges: ["Logistique collecte", "Qualité matières", "Concurrence", "Investissement"],
    sanitaires: [
      "Utiliser des EPI",
      "Nettoyer les zones",
      "Former le personnel",
      "Entretenir les machines",
      "Assurer la traçabilité"
    ],
    energie: [
      "Optimiser le broyage",
      "Utiliser des moteurs à haut rendement",
      "Éteindre les équipements hors production",
      "Isoler les zones",
      "Récupérer les chutes"
    ],
    amenagement: [
      "Organiser par zones",
      "Séparer les types de métaux",
      "Prévoir zone de stockage",
      "Aménager zone de compactage",
      "Faciliter la circulation des camions"
    ],
    marketing: [
      "Cibler industries et ferrailleurs",
      "Proposer des collectes régulières",
      "Garantir le recyclage",
      "Communiquer sur l'écologie",
      "Développer des contrats"
    ]
  },

  chaudronnerie: {
    id: "chaudronnerie",
    nom: "Chaudronnerie industrielle",
    filiereNom: "Métallurgie & Mécanique",
    type: "production",
    description: "Fabrication de cuves, réservoirs et équipements pression.",
    capex_min: 95000,
    chiffre_affaires_estime: "350000-700000",
    marge_brute: "35-50",
    machines: [
      { name: "Rouleuse", role: "Cylindrage", capacity: "Standard", utilities: "Électricité" },
      { name: "Plieuse", role: "Pliage", capacity: "Standard", utilities: "Électricité" },
      { name: "Poste à souder", role: "Soudage", capacity: "Standard", utilities: "Électricité" },
      { name: "Perceuse", role: "Perçage", capacity: "Standard", utilities: "Électricité" }
    ],
    processus: [
      "Réception des tôles",
      "Découpe",
      "Formage",
      "Soudage",
      "Contrôle",
      "Finition"
    ],
    avantages: ["Demande industrielle", "Marges intéressantes", "Import substitution", "Marché porteur"],
    challenges: ["Normes pression", "Qualification personnel", "Concurrence", "Investissement"],
    sanitaires: [
      "Utiliser des EPI",
      "Nettoyer les postes",
      "Former le personnel",
      "Entretenir les machines",
      "Assurer la traçabilité"
    ],
    energie: [
      "Optimiser le formage",
      "Utiliser des moteurs à haut rendement",
      "Éteindre les équipements hors production",
      "Isoler les zones",
      "Récupérer les chutes"
    ],
    amenagement: [
      "Organiser en flux continu",
      "Séparer zones de formage et soudage",
      "Prévoir zone de stockage",
      "Aménager zone de contrôle",
      "Faciliter la circulation"
    ],
    marketing: [
      "Cibler industries chimiques et agroalimentaires",
      "Développer des compétences spécifiques",
      "Garantir la qualité",
      "Communiquer sur les certifications",
      "Proposer des services après-vente"
    ]
  },

  mecanosoudure: {
    id: "mecanosoudure",
    nom: "Mécanosoudure",
    filiereNom: "Métallurgie & Mécanique",
    type: "service",
    description: "Travaux de soudure et fabrication métallique.",
    capex_min: 65000,
    chiffre_affaires_estime: "200000-400000",
    marge_brute: "40-55",
    machines: [
      { name: "Poste à souder", role: "Soudage", capacity: "Standard", utilities: "Électricité" },
      { name: "Scie à ruban", role: "Découpe", capacity: "Standard", utilities: "Électricité" },
      { name: "Perceuse", role: "Perçage", capacity: "Standard", utilities: "Électricité" },
      { name: "Meuleuse", role: "Finition", capacity: "Standard", utilities: "Électricité" }
    ],
    processus: [
      "Étude du besoin",
      "Découpe",
      "Soudage",
      "Finition",
      "Contrôle qualité",
      "Livraison"
    ],
    avantages: ["Demande BTP", "Flexibilité", "Marges intéressantes", "Service local"],
    challenges: ["Concurrence informelle", "Qualité soudure", "Délais", "Sécurité"],
    sanitaires: [
      "Utiliser des EPI",
      "Nettoyer les postes",
      "Former le personnel",
      "Entretenir les machines",
      "Assurer la traçabilité"
    ],
    energie: [
      "Optimiser le soudage",
      "Utiliser des moteurs à haut rendement",
      "Éteindre les équipements hors production",
      "Isoler les zones",
      "Récupérer les chutes"
    ],
    amenagement: [
      "Organiser par postes",
      "Prévoir zone de stockage",
      "Aménager zone de soudage",
      "Faciliter la circulation",
      "Prévoir zone de finition"
    ],
    marketing: [
      "Cibler BTP et industries",
      "Proposer des devis rapides",
      "Garantir la qualité",
      "Communiquer sur la réactivité",
      "Développer des contrats"
    ]
  },

  structures: {
    id: "structures",
    nom: "Structures métalliques",
    filiereNom: "Métallurgie & Mécanique",
    type: "production",
    description: "Fabrication de structures métalliques pour BTP.",
    capex_min: 100000,
    chiffre_affaires_estime: "500000-1000000",
    marge_brute: "30-45",
    machines: [
      { name: "Scie à ruban", role: "Découpe", capacity: "Standard", utilities: "Électricité" },
      { name: "Perceuse", role: "Perçage", capacity: "Standard", utilities: "Électricité" },
      { name: "Poste à souder", role: "Soudage", capacity: "Standard", utilities: "Électricité" },
      { name: "Pont roulant", role: "Manutention", capacity: "Option", utilities: "Électricité" }
    ],
    processus: [
      "Étude des plans",
      "Découpe",
      "Perçage",
      "Soudage",
      "Montage",
      "Contrôle",
      "Livraison"
    ],
    avantages: ["Développement BTP", "Commandes importantes", "Import substitution", "Marché porteur"],
    challenges: ["Logistique transport", "Concurrence étrangère", "Qualité", "Délais"],
    sanitaires: [
      "Utiliser des EPI",
      "Nettoyer les postes",
      "Former le personnel",
      "Entretenir les machines",
      "Assurer la traçabilité"
    ],
    energie: [
      "Optimiser le soudage",
      "Utiliser des moteurs à haut rendement",
      "Éteindre les équipements hors production",
      "Isoler les zones",
      "Récupérer les chutes"
    ],
    amenagement: [
      "Organiser en flux continu",
      "Prévoir zone de stockage",
      "Aménager zone de montage",
      "Faciliter la circulation des camions",
      "Prévoir zone de contrôle"
    ],
    marketing: [
      "Cibler entreprises BTP",
      "Participer aux appels d'offres",
      "Garantir la qualité",
      "Communiquer sur les références",
      "Développer des partenariats"
    ]
  },

  pieces: {
    id: "pieces",
    nom: "Pièces détachées automobiles",
    filiereNom: "Métallurgie & Mécanique",
    type: "production",
    description: "Fabrication de pièces automobiles.",
    capex_min: 140000,
    chiffre_affaires_estime: "600000-1200000",
    marge_brute: "35-50",
    machines: [
      { name: "Tour", role: "Usinage", capacity: "Standard", utilities: "Électricité" },
      { name: "Fraiseuse", role: "Usinage", capacity: "Standard", utilities: "Électricité" },
      { name: "Perceuse", role: "Perçage", capacity: "Standard", utilities: "Électricité" },
      { name: "Rectifieuse", role: "Finition", capacity: "Option", utilities: "Électricité" }
    ],
    processus: [
      "Réception des matières",
      "Usinage",
      "Contrôle",
      "Traitement",
      "Finition",
      "Conditionnement"
    ],
    avantages: ["Import substitution", "Marché automobile en croissance", "Marges correctes", "Demande constante"],
    challenges: ["Normes qualité automobiles", "Concurrence importations", "Précision", "Investissement"],
    sanitaires: [
      "Utiliser des EPI",
      "Nettoyer les postes",
      "Former le personnel",
      "Entretenir les machines",
      "Assurer la traçabilité"
    ],
    energie: [
      "Optimiser l'usinage",
      "Utiliser des moteurs à haut rendement",
      "Éteindre les équipements hors production",
      "Isoler les zones",
      "Récupérer les chutes"
    ],
    amenagement: [
      "Organiser en flux continu",
      "Séparer zones d'usinage",
      "Prévoir zone de stockage",
      "Aménager zone de contrôle",
      "Faciliter la circulation"
    ],
    marketing: [
      "Cibler garages et concessionnaires",
      "Développer des gammes variées",
      "Garantir la qualité",
      "Communiquer sur la précision",
      "Proposer des services après-vente"
    ]
  },

  quincaillerie: {
    id: "quincaillerie",
    nom: "Quincaillerie industrielle",
    filiereNom: "Métallurgie & Mécanique",
    type: "production",
    description: "Fabrication d'articles de quincaillerie.",
    capex_min: 75000,
    chiffre_affaires_estime: "300000-600000",
    marge_brute: "30-45",
    machines: [
      { name: "Presse", role: "Emboutissage", capacity: "Option", utilities: "Électricité" },
      { name: "Perceuse", role: "Perçage", capacity: "Standard", utilities: "Électricité" },
      { name: "Tour", role: "Usinage", capacity: "Option", utilities: "Électricité" }
    ],
    processus: [
      "Réception des matières",
      "Usinage",
      "Traitement",
      "Contrôle",
      "Conditionnement"
    ],
    avantages: ["Demande constante", "Import substitution", "Marché porteur", "Marges correctes"],
    challenges: ["Concurrence asiatique", "Qualité standardisée", "Prix", "Distribution"],
    sanitaires: [
      "Utiliser des EPI",
      "Nettoyer les postes",
      "Former le personnel",
      "Entretenir les machines",
      "Assurer la traçabilité"
    ],
    energie: [
      "Optimiser l'usinage",
      "Utiliser des moteurs à haut rendement",
      "Éteindre les équipements hors production",
      "Isoler les zones",
      "Récupérer les chutes"
    ],
    amenagement: [
      "Organiser en flux continu",
      "Prévoir zone de stockage",
      "Aménager zone de contrôle",
      "Faciliter la circulation",
      "Prévoir zone de conditionnement"
    ],
    marketing: [
      "Cibler quincailleries et BTP",
      "Développer des gammes variées",
      "Garantir la qualité",
      "Communiquer sur la robustesse",
      "Proposer des conditionnements adaptés"
    ]
  },

  // ==============================================
  // 5. PLASTIQUE & CAOUTCHOUC (8 UP)
  // ==============================================

  sacs: {
    id: "sacs",
    nom: "Sacs en plastique",
    filiereNom: "Plastique & Caoutchouc",
    type: "production",
    description: "Production de sacs en plastique biodégradables.",
    capex_min: 75000,
    chiffre_affaires_estime: "300000-600000",
    marge_brute: "25-40",
    machines: [
      { name: "Extrudeuse", role: "Production film", capacity: "Standard", utilities: "Électricité" },
      { name: "Machine de coupe-soudure", role: "Découpe et soudure", capacity: "Standard", utilities: "Électricité" },
      { name: "Broyeur", role: "Recyclage chutes", capacity: "Standard", utilities: "Électricité" }
    ],
    processus: [
      "Extrusion",
      "Impression",
      "Coupe-soudure",
      "Contrôle qualité",
      "Conditionnement"
    ],
    avantages: ["Demande constante", "Processus maîtrisé", "Recyclage possible", "Marché porteur"],
    challenges: ["Réglementation environnementale", "Concurrence", "Prix matières", "Qualité"],
    sanitaires: [
      "Nettoyer les machines",
      "Former le personnel",
      "Entretenir les équipements",
      "Gérer les déchets",
      "Assurer la traçabilité"
    ],
    energie: [
      "Optimiser l'extrusion",
      "Récupérer la chaleur",
      "Isoler les machines",
      "Utiliser des moteurs à haut rendement",
      "Éteindre les équipements hors production"
    ],
    amenagement: [
      "Organiser en flux continu",
      "Prévoir zone de stockage",
      "Aménager zone de conditionnement",
      "Faciliter la circulation",
      "Prévoir zone de recyclage"
    ],
    marketing: [
      "Cibler supermarchés et commerces",
      "Proposer des formats variés",
      "Communiquer sur le biodégradable",
      "Soigner l'impression",
      "Développer des marques propres"
    ]
  },

  bouteilles_pet: {
    id: "bouteilles_pet",
    nom: "Bouteilles PET",
    filiereNom: "Plastique & Caoutchouc",
    type: "production",
    description: "Production de bouteilles en PET pour boissons.",
    capex_min: 110000,
    chiffre_affaires_estime: "400000-800000",
    marge_brute: "30-45",
    machines: [
      { name: "Injection", role: "Préformes", capacity: "Standard", utilities: "Électricité" },
      { name: "Souffleuse", role: "Soufflage", capacity: "Selon cadence", utilities: "Électricité + air" },
      { name: "Compresseur", role: "Air comprimé", capacity: "Standard", utilities: "Électricité" },
      { name: "Refroidisseur", role: "Refroidissement", capacity: "Standard", utilities: "Électricité + eau" }
    ],
    processus: [
      "Injection des préformes",
      "Soufflage",
      "Contrôle qualité",
      "Conditionnement"
    ],
    avantages: ["Demande croissante", "Contrats industries", "Recyclable", "Marché porteur"],
    challenges: ["Concurrence multinationales", "Qualité PET", "Investissement", "Énergie"],
    sanitaires: [
      "Nettoyer les machines",
      "Former le personnel",
      "Entretenir les équipements",
      "Contrôler la qualité",
      "Assurer la traçabilité"
    ],
    energie: [
      "Optimiser le soufflage",
      "Récupérer la chaleur",
      "Isoler les machines",
      "Utiliser des moteurs à haut rendement",
      "Éteindre les équipements hors production"
    ],
    amenagement: [
      "Organiser en flux continu",
      "Prévoir zone de stockage",
      "Aménager zone de conditionnement",
      "Faciliter la circulation",
      "Prévoir zone de recyclage"
    ],
    marketing: [
      "Cibler industries de boissons",
      "Proposer des formats variés",
      "Garantir la qualité",
      "Communiquer sur le recyclage",
      "Développer des contrats"
    ]
  },

  tuyaux_pvc: {
    id: "tuyaux_pvc",
    nom: "Tuyaux PVC",
    filiereNom: "Plastique & Caoutchouc",
    type: "production",
    description: "Fabrication de tuyaux PVC pour construction.",
    capex_min: 130000,
    chiffre_affaires_estime: "500000-1000000",
    marge_brute: "25-40",
    machines: [
      { name: "Extrudeuse", role: "Extrusion", capacity: "Selon diamètre", utilities: "Électricité" },
      { name: "Bac de refroidissement", role: "Refroidissement", capacity: "Standard", utilities: "Eau" },
      { name: "Scie", role: "Coupe", capacity: "Standard", utilities: "Électricité" }
    ],
    processus: [
      "Extrusion",
      "Calibrage",
      "Refroidissement",
      "Coupe",
      "Contrôle",
      "Conditionnement"
    ],
    avantages: ["Développement BTP", "Demande agricole", "Import substitution", "Marché porteur"],
    challenges: ["Concurrence importations", "Qualité matières", "Normes", "Logistique"],
    sanitaires: [
      "Nettoyer les machines",
      "Former le personnel",
      "Entretenir les équipements",
      "Contrôler la qualité",
      "Assurer la traçabilité"
    ],
    energie: [
      "Optimiser l'extrusion",
      "Récupérer la chaleur",
      "Isoler les machines",
      "Utiliser des moteurs à haut rendement",
      "Éteindre les équipements hors production"
    ],
    amenagement: [
      "Organiser en flux continu",
      "Prévoir zone de stockage",
      "Aménager zone de conditionnement",
      "Faciliter la circulation",
      "Prévoir zone de contrôle"
    ],
    marketing: [
      "Cibler BTP et agriculteurs",
      "Proposer des diamètres variés",
      "Garantir la qualité",
      "Communiquer sur la durabilité",
      "Développer des contrats"
    ]
  },

  emballages: {
    id: "emballages",
    nom: "Emballages plastique",
    filiereNom: "Plastique & Caoutchouc",
    type: "production",
    description: "Fabrication d'emballages plastique pour industries.",
    capex_min: 85000,
    chiffre_affaires_estime: "350000-700000",
    marge_brute: "30-45",
    machines: [
      { name: "Extrudeuse", role: "Production film", capacity: "Standard", utilities: "Électricité" },
      { name: "Lamineuse", role: "Multicouches", capacity: "Option", utilities: "Électricité" },
      { name: "Machine de découpe", role: "Découpe", capacity: "Standard", utilities: "Électricité" },
      { name: "Machine de formage", role: "Formage", capacity: "Standard", utilities: "Électricité" }
    ],
    processus: [
      "Extrusion",
      "Impression",
      "Découpe",
      "Formage",
      "Contrôle",
      "Conditionnement"
    ],
    avantages: ["Demande industries", "Marges intéressantes", "Personnalisation", "Marché porteur"],
    challenges: ["Normes alimentaires", "Concurrence", "Qualité", "Investissement"],
    sanitaires: [
      "Nettoyer les machines",
      "Former le personnel",
      "Entretenir les équipements",
      "Contrôler la qualité",
      "Assurer la traçabilité"
    ],
    energie: [
      "Optimiser l'extrusion",
      "Récupérer la chaleur",
      "Isoler les machines",
      "Utiliser des moteurs à haut rendement",
      "Éteindre les équipements hors production"
    ],
    amenagement: [
      "Organiser en flux continu",
      "Prévoir zone de stockage",
      "Aménager zone d'impression",
      "Faciliter la circulation",
      "Prévoir zone de contrôle"
    ],
    marketing: [
      "Cibler industries agroalimentaires",
      "Proposer des formats variés",
      "Soigner l'impression",
      "Communiquer sur l'hygiène",
      "Développer des contrats"
    ]
  },

  profiles: {
    id: "profiles",
    nom: "Profilés plastique",
    filiereNom: "Plastique & Caoutchouc",
    type: "production",
    description: "Production de profilés plastique pour construction.",
    capex_min: 120000,
    chiffre_affaires_estime: "400000-800000",
    marge_brute: "30-45",
    machines: [
      { name: "Extrudeuse", role: "Extrusion", capacity: "Selon sections", utilities: "Électricité" },
      { name: "Bac de refroidissement", role: "Refroidissement", capacity: "Standard", utilities: "Eau" },
      { name: "Scie", role: "Coupe", capacity: "Standard", utilities: "Électricité" }
    ],
    processus: [
      "Extrusion",
      "Calibrage",
      "Refroidissement",
      "Coupe",
      "Contrôle",
      "Conditionnement"
    ],
    avantages: ["Substitution bois", "Durabilité", "Demande BTP", "Import substitution"],
    challenges: ["Concurrence importations", "Qualité", "Design", "Marketing"],
    sanitaires: [
      "Nettoyer les machines",
      "Former le personnel",
      "Entretenir les équipements",
      "Contrôler la qualité",
      "Assurer la traçabilité"
    ],
    energie: [
      "Optimiser l'extrusion",
      "Récupérer la chaleur",
      "Isoler les machines",
      "Utiliser des moteurs à haut rendement",
      "Éteindre les équipements hors production"
    ],
    amenagement: [
      "Organiser en flux continu",
      "Prévoir zone de stockage",
      "Aménager zone de conditionnement",
      "Faciliter la circulation",
      "Prévoir zone de contrôle"
    ],
    marketing: [
      "Cibler menuiseries et BTP",
      "Proposer des sections variées",
      "Garantir la qualité",
      "Communiquer sur la durabilité",
      "Développer des contrats"
    ]
  },

  jouets: {
    id: "jouets",
    nom: "Jouets en plastique",
    filiereNom: "Plastique & Caoutchouc",
    type: "production",
    description: "Fabrication de jouets éducatifs en plastique.",
    capex_min: 70000,
    chiffre_affaires_estime: "250000-500000",
    marge_brute: "40-55",
    machines: [
      { name: "Injection", role: "Moulage", capacity: "Standard", utilities: "Électricité" },
      { name: "Moules", role: "Formes", capacity: "Selon gamme", utilities: "—" },
      { name: "Poste assemblage", role: "Assemblage", capacity: "Standard", utilities: "Électricité" }
    ],
    processus: [
      "Injection",
      "Ébavurage",
      "Assemblage",
      "Décoration",
      "Contrôle",
      "Conditionnement"
    ],
    avantages: ["Demande croissante", "Valeur éducative", "Marges élevées", "Export possible"],
    challenges: ["Normes sécurité", "Concurrence asiatique", "Design", "Marketing"],
    sanitaires: [
      "Nettoyer les machines",
      "Former le personnel",
      "Entretenir les équipements",
      "Contrôler la sécurité",
      "Assurer la traçabilité"
    ],
    energie: [
      "Optimiser l'injection",
      "Récupérer la chaleur",
      "Isoler les machines",
      "Utiliser des moteurs à haut rendement",
      "Éteindre les équipements hors production"
    ],
    amenagement: [
      "Organiser en flux continu",
      "Prévoir zone de stockage",
      "Aménager zone d'assemblage",
      "Faciliter la circulation",
      "Prévoir zone de contrôle"
    ],
    marketing: [
      "Cibler supermarchés et boutiques",
      "Développer des gammes éducatives",
      "Soigner l'emballage",
      "Communiquer sur la sécurité",
      "Utiliser les réseaux sociaux"
    ]
  },

  joints: {
    id: "joints",
    nom: "Joints et pièces caoutchouc",
    filiereNom: "Plastique & Caoutchouc",
    type: "production",
    description: "Fabrication de joints et pièces en caoutchouc.",
    capex_min: 60000,
    chiffre_affaires_estime: "200000-400000",
    marge_brute: "35-50",
    machines: [
      { name: "Presse", role: "Moulage", capacity: "Standard", utilities: "Électricité" },
      { name: "Four", role: "Vulcanisation", capacity: "Option", utilities: "Électricité" },
      { name: "Poste découpe", role: "Découpe", capacity: "Standard", utilities: "Électricité" }
    ],
    processus: [
      "Préparation matière",
      "Moulage",
      "Vulcanisation",
      "Découpe",
      "Contrôle",
      "Conditionnement"
    ],
    avantages: ["Demande industrielle", "Import substitution", "Marges correctes", "Marché porteur"],
    challenges: ["Qualité caoutchouc", "Concurrence", "Normes", "Investissement"],
    sanitaires: [
      "Nettoyer les machines",
      "Former le personnel",
      "Entretenir les équipements",
      "Contrôler la qualité",
      "Assurer la traçabilité"
    ],
    energie: [
      "Optimiser la vulcanisation",
      "Récupérer la chaleur",
      "Isoler les fours",
      "Utiliser des moteurs à haut rendement",
      "Éteindre les équipements hors production"
    ],
    amenagement: [
      "Organiser en flux continu",
      "Prévoir zone de stockage",
      "Aménager zone de contrôle",
      "Faciliter la circulation",
      "Prévoir zone de conditionnement"
    ],
    marketing: [
      "Cibler industries automobile et BTP",
      "Proposer des gammes variées",
      "Garantir la qualité",
      "Communiquer sur l'étanchéité",
      "Développer des contrats"
    ]
  },

  granules: {
    id: "granules",
    nom: "Granulés plastique recyclé",
    filiereNom: "Plastique & Caoutchouc",
    type: "production",
    description: "Recyclage plastique en granulés réutilisables.",
    capex_min: 150000,
    chiffre_affaires_estime: "400000-800000",
    marge_brute: "30-45",
    machines: [
      { name: "Broyeur", role: "Broyage", capacity: "Selon flux", utilities: "Électricité" },
      { name: "Laveuse", role: "Lavage", capacity: "Standard", utilities: "Électricité + eau" },
      { name: "Extrudeuse", role: "Extrusion", capacity: "Standard", utilities: "Électricité" },
      { name: "Coupe-granulés", role: "Granulation", capacity: "Standard", utilities: "Électricité" }
    ],
    processus: [
      "Collecte",
      "Tri",
      "Broyage",
      "Lavage",
      "Extrusion",
      "Granulation"
    ],
    avantages: ["Écologique", "Demande croissante", "Subventions", "Économie circulaire"],
    challenges: ["Qualité déchets", "Logistique collecte", "Investissement", "Concurrence"],
    sanitaires: [
      "Nettoyer les machines",
      "Former le personnel",
      "Entretenir les équipements",
      "Traiter les eaux usées",
      "Assurer la traçabilité"
    ],
    energie: [
      "Optimiser l'extrusion",
      "Récupérer la chaleur",
      "Isoler les machines",
      "Utiliser des moteurs à haut rendement",
      "Éteindre les équipements hors production"
    ],
    amenagement: [
      "Organiser en zones",
      "Prévoir zone de stockage",
      "Aménager zone de lavage",
      "Faciliter la circulation",
      "Prévoir zone de conditionnement"
    ],
    marketing: [
      "Cibler industries plastique",
      "Proposer des qualités variées",
      "Garantir la qualité",
      "Communiquer sur l'écologie",
      "Développer des contrats"
    ]
  },

  // ==============================================
  // 6. ÉLECTRONIQUE & ÉLECTRICITÉ (8 UP)
  // ==============================================

  cables: {
    id: "cables",
    nom: "Câbles électriques",
    filiereNom: "Électronique & Électricité",
    type: "production",
    description: "Fabrication de câbles électriques et conducteurs.",
    capex_min: 125000,
    chiffre_affaires_estime: "500000-1000000",
    marge_brute: "30-45",
    machines: [
      { name: "Tréfileuse", role: "Tréfilage", capacity: "Standard", utilities: "Électricité" },
      { name: "Toronneuse", role: "Toronnage", capacity: "Standard", utilities: "Électricité" },
      { name: "Extrudeuse", role: "Isolation", capacity: "Selon sections", utilities: "Électricité" },
      { name: "Bac de refroidissement", role: "Refroidissement", capacity: "Standard", utilities: "Eau" }
    ],
    processus: [
      "Tréfilage",
      "Toronnage",
      "Isolation",
      "Refroidissement",
      "Contrôle",
      "Conditionnement"
    ],
    avantages: ["Développement BTP", "Demande énergie", "Import substitution", "Marché porteur"],
    challenges: ["Normes sécurité", "Concurrence importations", "Qualité", "Investissement"],
    sanitaires: [
      "Nettoyer les machines",
      "Former le personnel",
      "Entretenir les équipements",
      "Contrôler la qualité",
      "Assurer la traçabilité"
    ],
    energie: [
      "Optimiser l'extrusion",
      "Récupérer la chaleur",
      "Isoler les machines",
      "Utiliser des moteurs à haut rendement",
      "Éteindre les équipements hors production"
    ],
    amenagement: [
      "Organiser en flux continu",
      "Prévoir zone de stockage",
      "Aménager zone de contrôle",
      "Faciliter la circulation",
      "Prévoir zone de conditionnement"
    ],
    marketing: [
      "Cibler BTP et distributeurs",
      "Proposer des sections variées",
      "Garantir la qualité",
      "Communiquer sur la sécurité",
      "Développer des contrats"
    ]
  },

  panneaux_solaires: {
    id: "panneaux_solaires",
    nom: "Panneaux solaires",
    filiereNom: "Électronique & Électricité",
    type: "production",
    description: "Assemblage de panneaux solaires photovoltaïques.",
    capex_min: 180000,
    chiffre_affaires_estime: "600000-1200000",
    marge_brute: "25-40",
    machines: [
      { name: "Table d'assemblage", role: "Assemblage", capacity: "Standard", utilities: "Électricité" },
      { name: "Soudeuse", role: "Connexion", capacity: "Standard", utilities: "Électricité" },
      { name: "Lamineuse", role: "Lamination", capacity: "Standard", utilities: "Électricité" },
      { name: "Testeur", role: "Test", capacity: "Standard", utilities: "Électricité" }
    ],
    processus: [
      "Assemblage des cellules",
      "Soudure",
      "Lamination",
      "Montage cadre",
      "Test",
      "Conditionnement"
    ],
    avantages: ["Énergie renouvelable", "Subventions possibles", "Marché porteur", "Demande croissante"],
    challenges: ["Import composants", "Concurrence chinoise", "Qualité", "Investissement"],
    sanitaires: [
      "Nettoyer les postes",
      "Former le personnel",
      "Entretenir les équipements",
      "Contrôler la qualité",
      "Assurer la traçabilité"
    ],
    energie: [
      "Optimiser la lamination",
      "Récupérer la chaleur",
      "Isoler les machines",
      "Utiliser des moteurs à haut rendement",
      "Éteindre les équipements hors production"
    ],
    amenagement: [
      "Organiser en flux continu",
      "Prévoir zone de stockage",
      "Aménager zone de test",
      "Faciliter la circulation",
      "Prévoir zone de conditionnement"
    ],
    marketing: [
      "Cibler particuliers et entreprises",
      "Proposer des puissances variées",
      "Garantir la qualité",
      "Communiquer sur l'écologie",
      "Développer des partenariats"
    ]
  },

  appareils: {
    id: "appareils",
    nom: "Appareils électroménagers",
    filiereNom: "Électronique & Électricité",
    type: "production",
    description: "Assemblage d'appareils électroménagers.",
    capex_min: 95000,
    chiffre_affaires_estime: "400000-800000",
    marge_brute: "30-45",
    machines: [
      { name: "Poste d'assemblage", role: "Assemblage", capacity: "Standard", utilities: "Électricité" },
      { name: "Poste de test", role: "Test", capacity: "Standard", utilities: "Électricité" },
      { name: "Outillage", role: "Assemblage", capacity: "Standard", utilities: "Électricité" }
    ],
    processus: [
      "Assemblage",
      "Câblage",
      "Test",
      "Contrôle",
      "Conditionnement"
    ],
    avantages: ["Import substitution", "Demande croissante", "Marché porteur", "Marges correctes"],
    challenges: ["Import composants", "Concurrence", "Qualité", "SAV"],
    sanitaires: [
      "Nettoyer les postes",
      "Former le personnel",
      "Entretenir les équipements",
      "Contrôler la sécurité",
      "Assurer la traçabilité"
    ],
    energie: [
      "Optimiser l'assemblage",
      "Utiliser des moteurs à haut rendement",
      "Éteindre les équipements hors production",
      "Isoler les zones",
      "Utiliser un éclairage LED"
    ],
    amenagement: [
      "Organiser en flux continu",
      "Prévoir zone de stockage",
      "Aménager zone de test",
      "Faciliter la circulation",
      "Prévoir zone SAV"
    ],
    marketing: [
      "Cibler supermarchés et détaillants",
      "Proposer des gammes variées",
      "Garantir la qualité",
      "Communiquer sur l'économie",
      "Développer un SAV"
    ]
  },

  led: {
    id: "led",
    nom: "Éclairage LED",
    filiereNom: "Électronique & Électricité",
    type: "production",
    description: "Fabrication de luminaires et ampoules LED.",
    capex_min: 65000,
    chiffre_affaires_estime: "300000-600000",
    marge_brute: "35-50",
    machines: [
      { name: "Poste d'assemblage", role: "Assemblage", capacity: "Standard", utilities: "Électricité" },
      { name: "Station soudage", role: "Soudure", capacity: "Standard", utilities: "Électricité" },
      { name: "Banc de test", role: "Test", capacity: "Standard", utilities: "Électricité" }
    ],
    processus: [
      "Assemblage",
      "Soudure",
      "Test",
      "Contrôle",
      "Conditionnement"
    ],
    avantages: ["Économie énergie", "Demande croissante", "Import substitution", "Marges correctes"],
    challenges: ["Import composants", "Concurrence asiatique", "Qualité", "Innovation"],
    sanitaires: [
      "Nettoyer les postes",
      "Former le personnel",
      "Entretenir les équipements",
      "Contrôler la qualité",
      "Assurer la traçabilité"
    ],
    energie: [
      "Optimiser l'assemblage",
      "Utiliser des moteurs à haut rendement",
      "Éteindre les équipements hors production",
      "Isoler les zones",
      "Utiliser un éclairage LED"
    ],
    amenagement: [
      "Organiser en flux continu",
      "Prévoir zone de stockage",
      "Aménager zone de test",
      "Faciliter la circulation",
      "Prévoir zone de conditionnement"
    ],
    marketing: [
      "Cibler BTP et particuliers",
      "Proposer des puissances variées",
      "Garantir la qualité",
      "Communiquer sur les économies",
      "Développer des contrats"
    ]
  },

  tableaux: {
    id: "tableaux",
    nom: "Tableaux électriques",
    filiereNom: "Électronique & Électricité",
    type: "production",
    description: "Fabrication de tableaux électriques et armoires.",
    capex_min: 85000,
    chiffre_affaires_estime: "350000-700000",
    marge_brute: "35-50",
    machines: [
      { name: "Table d'assemblage", role: "Assemblage", capacity: "Standard", utilities: "Électricité" },
      { name: "Perceuse", role: "Perçage", capacity: "Standard", utilities: "Électricité" },
      { name: "Poste de câblage", role: "Câblage", capacity: "Standard", utilities: "Électricité" },
      { name: "Banc de test", role: "Test", capacity: "Standard", utilities: "Électricité" }
    ],
    processus: [
      "Découpe des tôles",
      "Peinture",
      "Assemblage",
      "Câblage",
      "Test",
      "Contrôle"
    ],
    avantages: ["Développement BTP", "Demande constante", "Import substitution", "Marges correctes"],
    challenges: ["Normes électriques", "Concurrence", "Qualité", "Sécurité"],
    sanitaires: [
      "Nettoyer les postes",
      "Former le personnel",
      "Entretenir les équipements",
      "Contrôler la sécurité",
      "Assurer la traçabilité"
    ],
    energie: [
      "Optimiser l'assemblage",
      "Utiliser des moteurs à haut rendement",
      "Éteindre les équipements hors production",
      "Isoler les zones",
      "Utiliser un éclairage LED"
    ],
    amenagement: [
      "Organiser en flux continu",
      "Prévoir zone de stockage",
      "Aménager zone de câblage",
      "Faciliter la circulation",
      "Prévoir zone de test"
    ],
    marketing: [
      "Cibler BTP et industries",
      "Proposer des configurations variées",
      "Garantir la qualité",
      "Communiquer sur la sécurité",
      "Développer des contrats"
    ]
  },

  onduleurs: {
    id: "onduleurs",
    nom: "Onduleurs et convertisseurs",
    filiereNom: "Électronique & Électricité",
    type: "production",
    description: "Fabrication d'onduleurs et convertisseurs de puissance.",
    capex_min: 110000,
    chiffre_affaires_estime: "400000-800000",
    marge_brute: "35-50",
    machines: [
      { name: "Poste d'assemblage", role: "Assemblage", capacity: "Standard", utilities: "Électricité" },
      { name: "Station soudage", role: "Soudure", capacity: "Standard", utilities: "Électricité" },
      { name: "Banc de test", role: "Test", capacity: "Standard", utilities: "Électricité" }
    ],
    processus: [
      "Assemblage",
      "Soudure",
      "Programmation",
      "Test",
      "Contrôle",
      "Conditionnement"
    ],
    avantages: ["Développement énergie", "Demande croissante", "Import substitution", "Marges correctes"],
    challenges: ["Technologie complexe", "Import composants", "Qualité", "SAV"],
    sanitaires: [
      "Nettoyer les postes",
      "Former le personnel",
      "Entretenir les équipements",
      "Contrôler la qualité",
      "Assurer la traçabilité"
    ],
    energie: [
      "Optimiser l'assemblage",
      "Utiliser des moteurs à haut rendement",
      "Éteindre les équipements hors production",
      "Isoler les zones",
      "Utiliser un éclairage LED"
    ],
    amenagement: [
      "Organiser en flux continu",
      "Prévoir zone de stockage",
      "Aménager zone de test",
      "Faciliter la circulation",
      "Prévoir zone SAV"
    ],
    marketing: [
      "Cibler télécoms et industries",
      "Proposer des puissances variées",
      "Garantir la qualité",
      "Communiquer sur la fiabilité",
      "Développer un SAV"
    ]
  },

  compteurs: {
    id: "compteurs",
    nom: "Compteurs électriques",
    filiereNom: "Électronique & Électricité",
    type: "production",
    description: "Fabrication de compteurs électriques intelligents.",
    capex_min: 150000,
    chiffre_affaires_estime: "500000-1000000",
    marge_brute: "30-45",
    machines: [
      { name: "Poste d'assemblage", role: "Assemblage", capacity: "Standard", utilities: "Électricité" },
      { name: "Station soudage", role: "Soudure", capacity: "Standard", utilities: "Électricité" },
      { name: "Banc de calibration", role: "Calibration", capacity: "Standard", utilities: "Électricité" },
      { name: "Banc de test", role: "Test", capacity: "Standard", utilities: "Électricité" }
    ],
    processus: [
      "Assemblage",
      "Soudure",
      "Calibration",
      "Test",
      "Contrôle",
      "Conditionnement"
    ],
    avantages: ["Modernisation réseaux", "Contrats institutionnels", "Import substitution", "Marché porteur"],
    challenges: ["Normes précises", "Concurrence internationale", "Qualité", "Investissement"],
    sanitaires: [
      "Nettoyer les postes",
      "Former le personnel",
      "Entretenir les équipements",
      "Contrôler la qualité",
      "Assurer la traçabilité"
    ],
    energie: [
      "Optimiser l'assemblage",
      "Utiliser des moteurs à haut rendement",
      "Éteindre les équipements hors production",
      "Isoler les zones",
      "Utiliser un éclairage LED"
    ],
    amenagement: [
      "Organiser en flux continu",
      "Prévoir zone de stockage",
      "Aménager zone de calibration",
      "Faciliter la circulation",
      "Prévoir zone de test"
    ],
    marketing: [
      "Cibler distributeurs d'électricité",
      "Participer aux appels d'offres",
      "Garantir la qualité",
      "Communiquer sur la précision",
      "Développer des contrats"
    ]
  },

  batteries: {
    id: "batteries",
    nom: "Batteries et accumulateurs",
    filiereNom: "Électronique & Électricité",
    type: "production",
    description: "Fabrication de batteries et accumulateurs.",
    capex_min: 200000,
    chiffre_affaires_estime: "600000-1200000",
    marge_brute: "25-40",
    machines: [
      { name: "Poste d'assemblage", role: "Assemblage", capacity: "Standard", utilities: "Électricité" },
      { name: "Chargeur", role: "Formation", capacity: "Standard", utilities: "Électricité" },
      { name: "Banc de test", role: "Test", capacity: "Standard", utilities: "Électricité" }
    ],
    processus: [
      "Assemblage cellules",
      "Remplissage",
      "Formation",
      "Test",
      "Contrôle",
      "Conditionnement"
    ],
    avantages: ["Demande énergie", "Import substitution", "Marché porteur", "Développement durable"],
    challenges: ["Import composants", "Recyclage", "Qualité", "Sécurité"],
    sanitaires: [
      "Nettoyer les postes",
      "Former le personnel",
      "Entretenir les équipements",
      "Contrôler la sécurité",
      "Assurer la traçabilité"
    ],
    energie: [
      "Optimiser la formation",
      "Récupérer la chaleur",
      "Isoler les zones",
      "Utiliser des moteurs à haut rendement",
      "Éteindre les équipements hors production"
    ],
    amenagement: [
      "Organiser en flux continu",
      "Prévoir zone de stockage",
      "Aménager zone de test",
      "Faciliter la circulation",
      "Prévoir zone de recyclage"
    ],
    marketing: [
      "Cibler automobile et solaire",
      "Proposer des capacités variées",
      "Garantir la qualité",
      "Communiquer sur la durabilité",
      "Développer des contrats"
    ]
  },

  // ==============================================
  // 7. BTP & MATÉRIAUX CONSTRUCTION (8 UP)
  // ==============================================

  cimenterie: {
    id: "cimenterie",
    nom: "Mini-cimenterie",
    filiereNom: "BTP & Matériaux Construction",
    type: "production",
    description: "Production de ciment à échelle régionale.",
    capex_min: 600000,
    chiffre_affaires_estime: "3000000-6000000",
    marge_brute: "20-35",
    machines: [
      { name: "Concasseur", role: "Broyage", capacity: "Selon capacité", utilities: "Électricité" },
      { name: "Broyeur cru", role: "Broyage", capacity: "Standard", utilities: "Électricité" },
      { name: "Four", role: "Clinkérisation", capacity: "Selon débit", utilities: "Combustible" },
      { name: "Broyeur ciment", role: "Broyage", capacity: "Standard", utilities: "Électricité" },
      { name: "Ensacheuse", role: "Conditionnement", capacity: "Standard", utilities: "Électricité + air" }
    ],
    processus: [
      "Concassage",
      "Broyage cru",
      "Cuisson",
      "Broyage ciment",
      "Conditionnement"
    ],
    avantages: ["Développement BTP", "Demande forte", "Import substitution", "Marché porteur"],
    challenges: ["Investissement élevé", "Concurrence multinationales", "Énergie", "Logistique"],
    sanitaires: [
      "Contrôler les émissions",
      "Former le personnel",
      "Entretenir les équipements",
      "Gérer les déchets",
      "Assurer la traçabilité"
    ],
    energie: [
      "Optimiser la cuisson",
      "Récupérer la chaleur",
      "Isoler le four",
      "Utiliser des combustibles alternatifs",
      "Éteindre les équipements hors production"
    ],
    amenagement: [
      "Organiser en flux continu",
      "Prévoir zone de stockage",
      "Aménager zone de conditionnement",
      "Faciliter la circulation des camions",
      "Prévoir zone de contrôle"
    ],
    marketing: [
      "Cibler BTP et distributeurs",
      "Proposer des sacs de différents formats",
      "Garantir la qualité",
      "Communiquer sur la résistance",
      "Développer des contrats"
    ]
  },

  briques: {
    id: "briques",
    nom: "Briques et tuiles",
    filiereNom: "BTP & Matériaux Construction",
    type: "production",
    description: "Fabrication de briques et tuiles en terre cuite.",
    capex_min: 55000,
    chiffre_affaires_estime: "300000-600000",
    marge_brute: "30-45",
    machines: [
      { name: "Concasseur", role: "Broyage", capacity: "Standard", utilities: "Électricité" },
      { name: "Malaxeur", role: "Mélange", capacity: "Standard", utilities: "Électricité + eau" },
      { name: "Presse", role: "Moulage", capacity: "Standard", utilities: "Électricité" },
      { name: "Four", role: "Cuisson", capacity: "Option", utilities: "Combustible" }
    ],
    processus: [
      "Broyage",
      "Malaxage",
      "Moulage",
      "Séchage",
      "Cuisson",
      "Stockage"
    ],
    avantages: ["Matériaux locaux", "Développement BTP", "Demande forte", "Marché porteur"],
    challenges: ["Consommation énergie", "Concurrence", "Qualité", "Saisonnalité"],
    sanitaires: [
      "Contrôler les émissions",
      "Former le personnel",
      "Entretenir les équipements",
      "Gérer les déchets",
      "Assurer la traçabilité"
    ],
    energie: [
      "Optimiser la cuisson",
      "Récupérer la chaleur",
      "Isoler le four",
      "Utiliser des combustibles alternatifs",
      "Éteindre les équipements hors production"
    ],
    amenagement: [
      "Organiser en flux continu",
      "Prévoir zone de stockage",
      "Aménager zone de séchage",
      "Faciliter la circulation",
      "Prévoir zone de cuisson"
    ],
    marketing: [
      "Cibler BTP et particuliers",
      "Proposer des formats variés",
      "Garantir la qualité",
      "Communiquer sur la solidité",
      "Développer des contrats"
    ]
  },

  prefab: {
    id: "prefab",
    nom: "Éléments préfabriqués",
    filiereNom: "BTP & Matériaux Construction",
    type: "production",
    description: "Fabrication d'éléments préfabriqués en béton.",
    capex_min: 110000,
    chiffre_affaires_estime: "500000-1000000",
    marge_brute: "25-40",
    machines: [
      { name: "Centrale à béton", role: "Béton", capacity: "Standard", utilities: "Électricité + eau" },
      { name: "Moules", role: "Moulage", capacity: "Selon gamme", utilities: "—" },
      { name: "Vibreur", role: "Compactage", capacity: "Standard", utilities: "Électricité" },
      { name: "Zone de cure", role: "Durcissement", capacity: "Standard", utilities: "Eau" }
    ],
    processus: [
      "Préparation béton",
      "Moulage",
      "Compactage",
      "Cure",
      "Démoulage",
      "Stockage"
    ],
    avantages: ["Gain de temps chantier", "Qualité constante", "Demande BTP", "Import substitution"],
    challenges: ["Logistique transport", "Concurrence", "Investissement", "Normes"],
    sanitaires: [
      "Nettoyer les postes",
      "Former le personnel",
      "Entretenir les équipements",
      "Gérer les déchets",
      "Assurer la traçabilité"
    ],
    energie: [
      "Optimiser le malaxage",
      "Utiliser des moteurs à haut rendement",
      "Éteindre les équipements hors production",
      "Isoler les zones",
      "Récupérer l'eau"
    ],
    amenagement: [
      "Organiser en flux continu",
      "Prévoir zone de stockage",
      "Aménager zone de cure",
      "Faciliter la circulation",
      "Prévoir zone de conditionnement"
    ],
    marketing: [
      "Cibler BTP et construction modulaire",
      "Proposer des formats standards",
      "Garantir la qualité",
      "Communiquer sur la rapidité",
      "Développer des contrats"
    ]
  },

  tuiles: {
    id: "tuiles",
    nom: "Tuiles et éléments toiture",
    filiereNom: "BTP & Matériaux Construction",
    type: "production",
    description: "Fabrication de tuiles et éléments de toiture.",
    capex_min: 85000,
    chiffre_affaires_estime: "400000-800000",
    marge_brute: "30-45",
    machines: [
      { name: "Malaxeur", role: "Mélange", capacity: "Standard", utilities: "Électricité + eau" },
      { name: "Presse", role: "Moulage", capacity: "Standard", utilities: "Électricité" },
      { name: "Séchoir", role: "Séchage", capacity: "Standard", utilities: "Ventilation" },
      { name: "Four", role: "Cuisson", capacity: "Option", utilities: "Combustible" }
    ],
    processus: [
      "Malaxage",
      "Moulage",
      "Séchage",
      "Cuisson",
      "Contrôle",
      "Conditionnement"
    ],
    avantages: ["Matériaux locaux", "Demande construction", "Import substitution", "Marché porteur"],
    challenges: ["Investissement fours", "Concurrence", "Qualité", "Énergie"],
    sanitaires: [
      "Contrôler les émissions",
      "Former le personnel",
      "Entretenir les équipements",
      "Gérer les déchets",
      "Assurer la traçabilité"
    ],
    energie: [
      "Optimiser la cuisson",
      "Récupérer la chaleur",
      "Isoler le four",
      "Utiliser des combustibles alternatifs",
      "Éteindre les équipements hors production"
    ],
    amenagement: [
      "Organiser en flux continu",
      "Prévoir zone de stockage",
      "Aménager zone de séchage",
      "Faciliter la circulation",
      "Prévoir zone de cuisson"
    ],
    marketing: [
      "Cibler BTP et particuliers",
      "Proposer des coloris variés",
      "Garantir la qualité",
      "Communiquer sur la durabilité",
      "Développer des contrats"
    ]
  },

  agglos: {
    id: "agglos",
    nom: "Agglos et parpaings",
    filiereNom: "BTP & Matériaux Construction",
    type: "production",
    description: "Fabrication d'agglos et parpaings en béton.",
    capex_min: 75000,
    chiffre_affaires_estime: "300000-600000",
    marge_brute: "35-50",
    machines: [
      { name: "Malaxeur", role: "Mélange", capacity: "Standard", utilities: "Électricité + eau" },
      { name: "Machine à parpaings", role: "Moulage", capacity: "Standard", utilities: "Électricité" },
      { name: "Table vibrante", role: "Compactage", capacity: "Standard", utilities: "Électricité" },
      { name: "Zone de cure", role: "Durcissement", capacity: "Standard", utilities: "Eau" }
    ],
    processus: [
      "Malaxage",
      "Moulage",
      "Compactage",
      "Cure",
      "Stockage"
    ],
    avantages: ["Processus simple", "Demande constante", "Investissement modéré", "Marché porteur"],
    challenges: ["Concurrence locale", "Prix ciment", "Qualité", "Logistique"],
    sanitaires: [
      "Nettoyer les postes",
      "Former le personnel",
      "Entretenir les équipements",
      "Gérer les déchets",
      "Assurer la traçabilité"
    ],
    energie: [
      "Optimiser le malaxage",
      "Utiliser des moteurs à haut rendement",
      "Éteindre les équipements hors production",
      "Isoler les zones",
      "Récupérer l'eau"
    ],
    amenagement: [
      "Organiser en flux continu",
      "Prévoir zone de stockage",
      "Aménager zone de cure",
      "Faciliter la circulation",
      "Prévoir zone de conditionnement"
    ],
    marketing: [
      "Cibler BTP et particuliers",
      "Proposer des formats standards",
      "Garantir la qualité",
      "Communiquer sur la solidité",
      "Développer des contrats"
    ]
  },

  peintures_btp: {
    id: "peintures_btp",
    nom: "Peintures BTP",
    filiereNom: "BTP & Matériaux Construction",
    type: "production",
    description: "Fabrication de peintures pour bâtiment.",
    capex_min: 95000,
    chiffre_affaires_estime: "350000-700000",
    marge_brute: "30-45",
    machines: [
      { name: "Disperseur", role: "Dispersion", capacity: "Batch", utilities: "Électricité" },
      { name: "Cuve de formulation", role: "Formulation", capacity: "Standard", utilities: "Électricité" },
      { name: "Filtre", role: "Filtration", capacity: "Standard", utilities: "Électricité" },
      { name: "Remplisseuse", role: "Conditionnement", capacity: "Standard", utilities: "Électricité" }
    ],
    processus: [
      "Dispersion",
      "Formulation",
      "Filtration",
      "Contrôle",
      "Conditionnement"
    ],
    avantages: ["Développement BTP", "Demande locale", "Import substitution", "Marges correctes"],
    challenges: ["Import pigments", "Concurrence", "Qualité", "Marketing"],
    sanitaires: [
      "Utiliser des EPI",
      "Nettoyer les postes",
      "Former le personnel",
      "Entretenir les équipements",
      "Assurer la traçabilité"
    ],
    energie: [
      "Optimiser la dispersion",
      "Utiliser des moteurs à haut rendement",
      "Éteindre les équipements hors production",
      "Isoler les zones",
      "Récupérer la chaleur"
    ],
    amenagement: [
      "Organiser en flux continu",
      "Prévoir zone de stockage",
      "Aménager zone de formulation",
      "Faciliter la circulation",
      "Prévoir zone de contrôle"
    ],
    marketing: [
      "Cibler quincailleries et BTP",
      "Proposer des coloris variés",
      "Garantir la qualité",
      "Communiquer sur la résistance",
      "Proposer des nuanciers"
    ]
  },

  centrale_beton: {
    id: "centrale_beton",
    nom: "Centrale à béton",
    filiereNom: "BTP & Matériaux Construction",
    type: "service",
    description: "Production et livraison de béton prêt à l'emploi.",
    capex_min: 150000,
    chiffre_affaires_estime: "800000-1600000",
    marge_brute: "25-40",
    machines: [
      { name: "Silos", role: "Stockage", capacity: "Standard", utilities: "—" },
      { name: "Trémies", role: "Stockage", capacity: "Standard", utilities: "—" },
      { name: "Malaxeur", role: "Mélange", capacity: "Selon débit", utilities: "Électricité + eau" },
      { name: "Système de dosage", role: "Dosage", capacity: "Standard", utilities: "Électricité" },
      { name: "Bétonnière", role: "Transport", capacity: "Option", utilities: "Carburant" }
    ],
    processus: [
      "Dosage",
      "Malaxage",
      "Contrôle",
      "Livraison"
    ],
    avantages: ["Gain de temps chantier", "Qualité contrôlée", "Demande BTP", "Marché porteur"],
    challenges: ["Logistique camions", "Concurrence", "Investissement", "Saisonnalité"],
    sanitaires: [
      "Nettoyer les postes",
      "Former le personnel",
      "Entretenir les équipements",
      "Gérer les déchets",
      "Assurer la traçabilité"
    ],
    energie: [
      "Optimiser le malaxage",
      "Utiliser des moteurs à haut rendement",
      "Éteindre les équipements hors production",
      "Isoler les zones",
      "Récupérer l'eau"
    ],
    amenagement: [
      "Organiser en flux continu",
      "Prévoir zone de stockage",
      "Aménager zone de chargement",
      "Faciliter la circulation des camions",
      "Prévoir zone de contrôle"
    ],
    marketing: [
      "Cibler BTP et grands chantiers",
      "Proposer des formulations adaptées",
      "Garantir la qualité",
      "Communiquer sur la rapidité",
      "Développer des contrats"
    ]
  },

  menuiserie: {
    id: "menuiserie",
    nom: "Menuiserie aluminium/PVC",
    filiereNom: "BTP & Matériaux Construction",
    type: "production",
    description: "Fabrication de menuiseries aluminium et PVC.",
    capex_min: 150000,
    chiffre_affaires_estime: "600000-1200000",
    marge_brute: "30-45",
    machines: [
      { name: "Scie double tête", role: "Découpe", capacity: "Standard", utilities: "Électricité" },
      { name: "Fraiseuse", role: "Usinage", capacity: "Standard", utilities: "Électricité" },
      { name: "Soudeuse", role: "Soudure PVC", capacity: "Standard", utilities: "Électricité" },
      { name: "Sertisseuse", role: "Assemblage alu", capacity: "Standard", utilities: "Électricité" }
    ],
    processus: [
      "Découpe",
      "Usinage",
      "Assemblage",
      "Montage vitrage",
      "Contrôle",
      "Conditionnement"
    ],
    avantages: ["Isolation thermique", "Développement BTP", "Demande forte", "Import substitution"],
    challenges: ["Import profilés", "Concurrence", "Qualité", "Formation"],
    sanitaires: [
      "Nettoyer les postes",
      "Former le personnel",
      "Entretenir les équipements",
      "Gérer les chutes",
      "Assurer la traçabilité"
    ],
    energie: [
      "Optimiser la découpe",
      "Utiliser des moteurs à haut rendement",
      "Éteindre les équipements hors production",
      "Isoler les zones",
      "Récupérer les chutes"
    ],
    amenagement: [
      "Organiser en flux continu",
      "Prévoir zone de stockage",
      "Aménager zone d'assemblage",
      "Faciliter la circulation",
      "Prévoir zone de contrôle"
    ],
    marketing: [
      "Cibler BTP et particuliers",
      "Proposer des modèles variés",
      "Garantir la qualité",
      "Communiquer sur l'isolation",
      "Développer des contrats"
    ]
  },

  // ==============================================
  // 8. MÉDICAL & PHARMACEUTIQUE (8 UP)
  // ==============================================

  masques: {
    id: "masques",
    nom: "Masques et protections",
    filiereNom: "Médical & Pharmaceutique",
    type: "production",
    description: "Fabrication de masques et équipements de protection.",
    capex_min: 35000,
    chiffre_affaires_estime: "200000-400000",
    marge_brute: "40-55",
    machines: [
      { name: "Machine à masques", role: "Fabrication", capacity: "Standard", utilities: "Électricité" },
      { name: "Module élastiques", role: "Fixation", capacity: "Standard", utilities: "Électricité" },
      { name: "Module pince-nez", role: "Insertion", capacity: "Standard", utilities: "Électricité" },
      { name: "Ensacheuse", role: "Conditionnement", capacity: "Standard", utilities: "Électricité" }
    ],
    processus: [
      "Fabrication",
      "Fixation élastiques",
      "Insertion pince-nez",
      "Contrôle",
      "Conditionnement"
    ],
    avantages: ["Demande santé", "Normes locales adaptées", "Faible investissement", "Marché porteur"],
    challenges: ["Normes sanitaires", "Concurrence importations", "Qualité", "Prix"],
    sanitaires: [
      "Travailler en zone propre",
      "Former le personnel",
      "Entretenir les équipements",
      "Contrôler la qualité",
      "Assurer la traçabilité"
    ],
    energie: [
      "Optimiser la production",
      "Utiliser des moteurs à haut rendement",
      "Éteindre les équipements hors production",
      "Isoler les zones",
      "Utiliser un éclairage LED"
    ],
    amenagement: [
      "Organiser en flux continu",
      "Prévoir zone de stockage",
      "Aménager zone de conditionnement",
      "Faciliter la circulation",
      "Prévoir zone de contrôle"
    ],
    marketing: [
      "Cibler hôpitaux et pharmacies",
      "Proposer des modèles variés",
      "Garantir la qualité",
      "Communiquer sur la protection",
      "Développer des contrats"
    ]
  },

  pansements: {
    id: "pansements",
    nom: "Pansements et compresses",
    filiereNom: "Médical & Pharmaceutique",
    type: "production",
    description: "Fabrication de pansements et matériels stériles.",
    capex_min: 45000,
    chiffre_affaires_estime: "250000-500000",
    marge_brute: "35-50",
    machines: [
      { name: "Machine à pansements", role: "Fabrication", capacity: "Standard", utilities: "Électricité" },
      { name: "Machine de découpe", role: "Découpe", capacity: "Standard", utilities: "Électricité" },
      { name: "Ensacheuse", role: "Conditionnement", capacity: "Standard", utilities: "Électricité" }
    ],
    processus: [
      "Fabrication",
      "Découpe",
      "Stérilisation",
      "Contrôle",
      "Conditionnement"
    ],
    avantages: ["Demande constante", "Import substitution", "Marges correctes", "Marché porteur"],
    challenges: ["Normes stérilité", "Certifications", "Concurrence", "Qualité"],
    sanitaires: [
      "Travailler en zone stérile",
      "Former le personnel",
      "Entretenir les équipements",
      "Contrôler la stérilité",
      "Assurer la traçabilité"
    ],
    energie: [
      "Optimiser la production",
      "Utiliser des moteurs à haut rendement",
      "Éteindre les équipements hors production",
      "Isoler les zones",
      "Utiliser un éclairage LED"
    ],
    amenagement: [
      "Organiser en flux continu",
      "Prévoir zone de stockage",
      "Aménager zone de stérilisation",
      "Faciliter la circulation",
      "Prévoir zone de contrôle"
    ],
    marketing: [
      "Cibler hôpitaux et pharmacies",
      "Proposer des formats variés",
      "Garantir la qualité",
      "Communiquer sur la stérilité",
      "Développer des contrats"
    ]
  },

  mobilier: {
    id: "mobilier",
    nom: "Mobilier médical",
    filiereNom: "Médical & Pharmaceutique",
    type: "production",
    description: "Fabrication de mobilier pour établissements de santé.",
    capex_min: 70000,
    chiffre_affaires_estime: "300000-600000",
    marge_brute: "30-45",
    machines: [
      { name: "Scie", role: "Découpe", capacity: "Standard", utilities: "Électricité" },
      { name: "Poste à souder", role: "Soudage", capacity: "Standard", utilities: "Électricité" },
      { name: "Perceuse", role: "Perçage", capacity: "Standard", utilities: "Électricité" },
      { name: "Poste peinture", role: "Peinture", capacity: "Option", utilities: "Électricité" }
    ],
    processus: [
      "Découpe",
      "Soudage",
      "Perçage",
      "Peinture",
      "Assemblage",
      "Contrôle"
    ],
    avantages: ["Développement santé", "Commandes institutionnelles", "Import substitution", "Marché porteur"],
    challenges: ["Normes spécifiques", "Concurrence", "Qualité", "Confort"],
    sanitaires: [
      "Nettoyer les postes",
      "Former le personnel",
      "Entretenir les équipements",
      "Contrôler la qualité",
      "Assurer la traçabilité"
    ],
    energie: [
      "Optimiser la découpe",
      "Utiliser des moteurs à haut rendement",
      "Éteindre les équipements hors production",
      "Isoler les zones",
      "Récupérer les chutes"
    ],
    amenagement: [
      "Organiser en flux continu",
      "Prévoir zone de stockage",
      "Aménager zone de peinture",
      "Faciliter la circulation",
      "Prévoir zone de contrôle"
    ],
    marketing: [
      "Cibler hôpitaux et cliniques",
      "Proposer des gammes adaptées",
      "Garantir la qualité",
      "Communiquer sur l'ergonomie",
      "Participer aux appels d'offres"
    ]
  },

  fauteuils: {
    id: "fauteuils",
    nom: "Fauteuils roulants",
    filiereNom: "Médical & Pharmaceutique",
    type: "production",
    description: "Fabrication de fauteuils roulants et aides mobilité.",
    capex_min: 85000,
    chiffre_affaires_estime: "400000-800000",
    marge_brute: "35-50",
    machines: [
      { name: "Scie", role: "Découpe", capacity: "Standard", utilities: "Électricité" },
      { name: "Poste à souder", role: "Soudage", capacity: "Standard", utilities: "Électricité" },
      { name: "Perceuse", role: "Perçage", capacity: "Standard", utilities: "Électricité" },
      { name: "Poste montage", role: "Assemblage", capacity: "Standard", utilities: "—" }
    ],
    processus: [
      "Découpe",
      "Soudage",
      "Perçage",
      "Peinture",
      "Assemblage",
      "Contrôle"
    ],
    avantages: ["Demande santé", "Aide personnes handicapées", "Import substitution", "Marché porteur"],
    challenges: ["Normes sécurité", "Confort", "Qualité", "Prix"],
    sanitaires: [
      "Nettoyer les postes",
      "Former le personnel",
      "Entretenir les équipements",
      "Contrôler la sécurité",
      "Assurer la traçabilité"
    ],
    energie: [
      "Optimiser la découpe",
      "Utiliser des moteurs à haut rendement",
      "Éteindre les équipements hors production",
      "Isoler les zones",
      "Récupérer les chutes"
    ],
    amenagement: [
      "Organiser en flux continu",
      "Prévoir zone de stockage",
      "Aménager zone de peinture",
      "Faciliter la circulation",
      "Prévoir zone de contrôle"
    ],
    marketing: [
      "Cibler hôpitaux et particuliers",
      "Proposer des modèles adaptés",
      "Garantir la qualité",
      "Communiquer sur le confort",
      "Développer des contrats"
    ]
  },

  instruments: {
    id: "instruments",
    nom: "Instruments médicaux",
    filiereNom: "Médical & Pharmaceutique",
    type: "production",
    description: "Fabrication d'instruments médicaux stérilisables.",
    capex_min: 120000,
    chiffre_affaires_estime: "500000-1000000",
    marge_brute: "40-60",
    machines: [
      { name: "Tour", role: "Usinage", capacity: "Standard", utilities: "Électricité" },
      { name: "Fraiseuse", role: "Usinage", capacity: "Standard", utilities: "Électricité" },
      { name: "Polisseuse", role: "Finition", capacity: "Standard", utilities: "Électricité" },
      { name: "Autoclave", role: "Stérilisation", capacity: "Standard", utilities: "Électricité + eau" }
    ],
    processus: [
      "Usinage",
      "Polissage",
      "Stérilisation",
      "Contrôle",
      "Conditionnement"
    ],
    avantages: ["Import substitution", "Marges élevées", "Demande santé", "Marché porteur"],
    challenges: ["Précision usinage", "Normes médicales", "Concurrence", "Certifications"],
    sanitaires: [
      "Travailler en zone propre",
      "Former le personnel",
      "Entretenir les équipements",
      "Contrôler la stérilité",
      "Assurer la traçabilité"
    ],
    energie: [
      "Optimiser l'usinage",
      "Utiliser des moteurs à haut rendement",
      "Éteindre les équipements hors production",
      "Isoler les zones",
      "Récupérer les chutes"
    ],
    amenagement: [
      "Organiser en flux continu",
      "Prévoir zone de stockage",
      "Aménager zone de stérilisation",
      "Faciliter la circulation",
      "Prévoir zone de contrôle"
    ],
    marketing: [
      "Cibler hôpitaux et cliniques",
      "Proposer des gammes variées",
      "Garantir la qualité",
      "Communiquer sur la précision",
      "Développer des contrats"
    ]
  },

  bequilles: {
    id: "bequilles",
    nom: "Béquilles et cannes",
    filiereNom: "Médical & Pharmaceutique",
    type: "production",
    description: "Fabrication d'aides à la marche.",
    capex_min: 55000,
    chiffre_affaires_estime: "250000-500000",
    marge_brute: "35-50",
    machines: [
      { name: "Scie", role: "Découpe", capacity: "Standard", utilities: "Électricité" },
      { name: "Perceuse", role: "Perçage", capacity: "Standard", utilities: "Électricité" },
      { name: "Poste montage", role: "Assemblage", capacity: "Standard", utilities: "—" }
    ],
    processus: [
      "Découpe",
      "Perçage",
      "Montage",
      "Contrôle",
      "Conditionnement"
    ],
    avantages: ["Demande constante", "Processus simple", "Import substitution", "Marché porteur"],
    challenges: ["Confort utilisateur", "Concurrence importations", "Qualité", "Prix"],
    sanitaires: [
      "Nettoyer les postes",
      "Former le personnel",
      "Entretenir les équipements",
      "Contrôler la sécurité",
      "Assurer la traçabilité"
    ],
    energie: [
      "Optimiser la découpe",
      "Utiliser des moteurs à haut rendement",
      "Éteindre les équipements hors production",
      "Isoler les zones",
      "Récupérer les chutes"
    ],
    amenagement: [
      "Organiser en flux continu",
      "Prévoir zone de stockage",
      "Aménager zone de montage",
      "Faciliter la circulation",
      "Prévoir zone de contrôle"
    ],
    marketing: [
      "Cibler pharmacies et hôpitaux",
      "Proposer des modèles adaptés",
      "Garantir la qualité",
      "Communiquer sur le confort",
      "Développer des contrats"
    ]
  },

  antiseptiques: {
    id: "antiseptiques",
    nom: "Antiseptiques et désinfectants",
    filiereNom: "Médical & Pharmaceutique",
    type: "production",
    description: "Fabrication de produits antiseptiques et désinfectants.",
    capex_min: 65000,
    chiffre_affaires_estime: "300000-600000",
    marge_brute: "40-55",
    machines: [
      { name: "Cuve de mélange", role: "Formulation", capacity: "Batch", utilities: "Électricité" },
      { name: "Système de dosage", role: "Dosage", capacity: "Standard", utilities: "Électricité" },
      { name: "Remplisseuse", role: "Conditionnement", capacity: "Standard", utilities: "Électricité" },
      { name: "Étiqueteuse", role: "Étiquetage", capacity: "Standard", utilities: "Électricité" }
    ],
    processus: [
      "Formulation",
      "Mélange",
      "Contrôle",
      "Conditionnement",
      "Étiquetage"
    ],
    avantages: ["Demande santé", "Normes locales", "Import substitution", "Marché porteur"],
    challenges: ["Normes pharmaceutiques", "Concurrence", "Qualité", "Certifications"],
    sanitaires: [
      "Travailler en zone propre",
      "Former le personnel",
      "Entretenir les équipements",
      "Contrôler la qualité",
      "Assurer la traçabilité"
    ],
    energie: [
      "Optimiser le mélange",
      "Utiliser des moteurs à haut rendement",
      "Éteindre les équipements hors production",
      "Isoler les zones",
      "Récupérer la chaleur"
    ],
    amenagement: [
      "Organiser en flux continu",
      "Prévoir zone de stockage",
      "Aménager zone de formulation",
      "Faciliter la circulation",
      "Prévoir zone de contrôle"
    ],
    marketing: [
      "Cibler hôpitaux et pharmacies",
      "Proposer des formats variés",
      "Garantir la qualité",
      "Communiquer sur l'efficacité",
      "Développer des contrats"
    ]
  },

  kits: {
    id: "kits",
    nom: "Kits médicaux et premiers secours",
    filiereNom: "Médical & Pharmaceutique",
    type: "production",
    description: "Assemblage de kits médicaux et de premiers secours.",
    capex_min: 50000,
    chiffre_affaires_estime: "200000-400000",
    marge_brute: "35-50",
    machines: [
      { name: "Table d'assemblage", role: "Assemblage", capacity: "Standard", utilities: "—" },
      { name: "Poste de pesée", role: "Dosage", capacity: "Standard", utilities: "Électricité" },
      { name: "Ensacheuse", role: "Conditionnement", capacity: "Standard", utilities: "Électricité" }
    ],
    processus: [
      "Assemblage",
      "Pesée",
      "Conditionnement",
      "Contrôle",
      "Étiquetage"
    ],
    avantages: ["Demande prévention", "Valeur ajoutée assemblage", "Faible investissement", "Marché porteur"],
    challenges: ["Normes contenu", "Concurrence", "Qualité", "Certifications"],
    sanitaires: [
      "Travailler en zone propre",
      "Former le personnel",
      "Entretenir les équipements",
      "Contrôler la qualité",
      "Assurer la traçabilité"
    ],
    energie: [
      "Optimiser l'assemblage",
      "Utiliser des moteurs à haut rendement",
      "Éteindre les équipements hors production",
      "Isoler les zones",
      "Utiliser un éclairage LED"
    ],
    amenagement: [
      "Organiser en flux continu",
      "Prévoir zone de stockage",
      "Aménager zone d'assemblage",
      "Faciliter la circulation",
      "Prévoir zone de contrôle"
    ],
    marketing: [
      "Cibler entreprises et écoles",
      "Proposer des contenus adaptés",
      "Garantir la qualité",
      "Communiquer sur la sécurité",
      "Développer des contrats"
    ]
  },

  // ==============================================
  // 9. ASSEMBLAGE & MONTAGE (8 UP)
  // ==============================================

  smartphones: {
    id: "smartphones",
    nom: "Assemblage smartphones",
    filiereNom: "Assemblage & Montage",
    type: "production",
    description: "Assemblage de smartphones et tablettes.",
    capex_min: 250000,
    chiffre_affaires_estime: "2000000-4000000",
    marge_brute: "20-35",
    machines: [
      { name: "Poste d'assemblage", role: "Assemblage", capacity: "Standard", utilities: "Électricité" },
      { name: "Station soudage", role: "Soudure", capacity: "Standard", utilities: "Électricité" },
      { name: "Banc de test", role: "Test", capacity: "Standard", utilities: "Électricité" },
      { name: "Poste programmation", role: "Logiciel", capacity: "Standard", utilities: "Électricité + internet" }
    ],
    processus: [
      "Assemblage",
      "Soudure",
      "Programmation",
      "Test",
      "Contrôle",
      "Conditionnement"
    ],
    avantages: ["Marché en croissance", "Création emplois", "Import substitution", "Demande forte"],
    challenges: ["Import composants", "Concurrence asiatique", "Évolution rapide", "SAV"],
    sanitaires: [
      "Travailler en zone antistatique",
      "Former le personnel",
      "Entretenir les équipements",
      "Contrôler la qualité",
      "Assurer la traçabilité"
    ],
    energie: [
      "Optimiser l'assemblage",
      "Utiliser des moteurs à haut rendement",
      "Éteindre les équipements hors production",
      "Isoler les zones",
      "Utiliser un éclairage LED"
    ],
    amenagement: [
      "Organiser en flux continu",
      "Prévoir zone de stockage",
      "Aménager zone de test",
      "Faciliter la circulation",
      "Prévoir zone SAV"
    ],
    marketing: [
      "Cibler distributeurs et opérateurs",
      "Proposer des modèles variés",
      "Garantir la qualité",
      "Communiquer sur le SAV",
      "Développer des contrats"
    ]
  },

  ordinateurs: {
    id: "ordinateurs",
    nom: "Assemblage ordinateurs",
    filiereNom: "Assemblage & Montage",
    type: "production",
    description: "Assemblage d'ordinateurs et périphériques.",
    capex_min: 150000,
    chiffre_affaires_estime: "1000000-2000000",
    marge_brute: "45-50",
    machines: [
      { name: "Poste d'assemblage", role: "Montage", capacity: "Standard", utilities: "Électricité" },
      { name: "Outillage", role: "Assemblage", capacity: "Standard", utilities: "—" },
      { name: "Banc de test", role: "Test", capacity: "Standard", utilities: "Électricité" },
      { name: "Poste imagerie", role: "Logiciel", capacity: "Standard", utilities: "Électricité + internet" }
    ],
    processus: [
      "Assemblage",
      "Test",
      "Imagerie",
      "Contrôle",
      "Conditionnement"
    ],
    avantages: ["Import substitution", "Demande numérique", "Marges intéressantes", "Marché porteur"],
    challenges: ["Import composants", "Évolution technologique", "Concurrence", "SAV"],
    sanitaires: [
      "Travailler en zone antistatique",
      "Former le personnel",
      "Entretenir les équipements",
      "Contrôler la qualité",
      "Assurer la traçabilité"
    ],
    energie: [
      "Optimiser l'assemblage",
      "Utiliser des moteurs à haut rendement",
      "Éteindre les équipements hors production",
      "Isoler les zones",
      "Utiliser un éclairage LED"
    ],
    amenagement: [
      "Organiser en flux continu",
      "Prévoir zone de stockage",
      "Aménager zone de test",
      "Faciliter la circulation",
      "Prévoir zone SAV"
    ],
    marketing: [
      "Cibler entreprises et écoles",
      "Proposer des configurations variées",
      "Garantir la qualité",
      "Communiquer sur l'origine locale",
      "Développer un SAV"
    ]
  },

  electromenager: {
    id: "electromenager",
    nom: "Assemblage électroménager",
    filiereNom: "Assemblage & Montage",
    type: "production",
    description: "Assemblage d'appareils électroménagers.",
    capex_min: 220000,
    chiffre_affaires_estime: "1500000-3000000",
    marge_brute: "20-35",
    machines: [
      { name: "Ligne d'assemblage", role: "Assemblage", capacity: "Standard", utilities: "Électricité" },
      { name: "Outillage", role: "Assemblage", capacity: "Standard", utilities: "Électricité" },
      { name: "Banc de test", role: "Test", capacity: "Standard", utilities: "Électricité" }
    ],
    processus: [
      "Assemblage",
      "Câblage",
      "Test",
      "Contrôle",
      "Conditionnement"
    ],
    avantages: ["Import substitution", "Demande ménages", "Marché porteur", "Création emplois"],
    challenges: ["Import composants", "Concurrence multinationales", "Qualité", "SAV"],
    sanitaires: [
      "Nettoyer les postes",
      "Former le personnel",
      "Entretenir les équipements",
      "Contrôler la sécurité",
      "Assurer la traçabilité"
    ],
    energie: [
      "Optimiser l'assemblage",
      "Utiliser des moteurs à haut rendement",
      "Éteindre les équipements hors production",
      "Isoler les zones",
      "Utiliser un éclairage LED"
    ],
    amenagement: [
      "Organiser en flux continu",
      "Prévoir zone de stockage",
      "Aménager zone de test",
      "Faciliter la circulation",
      "Prévoir zone SAV"
    ],
    marketing: [
      "Cibler supermarchés et détaillants",
      "Proposer des gammes variées",
      "Garantir la qualité",
      "Communiquer sur l'économie",
      "Développer un SAV"
    ]
  },

  climatiseurs: {
    id: "climatiseurs",
    nom: "Assemblage climatiseurs",
    filiereNom: "Assemblage & Montage",
    type: "production",
    description: "Assemblage de climatiseurs et systèmes de refroidissement.",
    capex_min: 220000,
    chiffre_affaires_estime: "1200000-2400000",
    marge_brute: "25-40",
    machines: [
      { name: "Ligne d'assemblage", role: "Assemblage", capacity: "Standard", utilities: "Électricité" },
      { name: "Poste brasage", role: "Brasage", capacity: "Option", utilities: "Électricité" },
      { name: "Pompe à vide", role: "Mise sous vide", capacity: "Standard", utilities: "Électricité" },
      { name: "Banc de test", role: "Test", capacity: "Standard", utilities: "Électricité" }
    ],
    processus: [
      "Assemblage",
      "Brasage",
      "Mise sous vide",
      "Charge fluide",
      "Test",
      "Conditionnement"
    ],
    avantages: ["Climat tropical", "Demande croissante", "Import substitution", "Marché porteur"],
    challenges: ["Import compresseurs", "Normes efficacité", "Concurrence", "SAV"],
    sanitaires: [
      "Nettoyer les postes",
      "Former le personnel",
      "Entretenir les équipements",
      "Contrôler les fuites",
      "Assurer la traçabilité"
    ],
    energie: [
      "Optimiser l'assemblage",
      "Utiliser des moteurs à haut rendement",
      "Éteindre les équipements hors production",
      "Isoler les zones",
      "Utiliser un éclairage LED"
    ],
    amenagement: [
      "Organiser en flux continu",
      "Prévoir zone de stockage",
      "Aménager zone de test",
      "Faciliter la circulation",
      "Prévoir zone SAV"
    ],
    marketing: [
      "Cibler BTP et particuliers",
      "Proposer des puissances variées",
      "Garantir la qualité",
      "Communiquer sur l'efficacité",
      "Développer un SAV"
    ]
  },

  motos: {
    id: "motos",
    nom: "Assemblage motos",
    filiereNom: "Assemblage & Montage",
    type: "production",
    description: "Assemblage de motos et deux-roues.",
    capex_min: 280000,
    chiffre_affaires_estime: "2500000-5000000",
    marge_brute: "20-35",
    machines: [
      { name: "Ligne d'assemblage", role: "Assemblage", capacity: "Standard", utilities: "Électricité" },
      { name: "Outillage", role: "Assemblage", capacity: "Standard", utilities: "—" },
      { name: "Poste de test", role: "Test", capacity: "Option", utilities: "Électricité" }
    ],
    processus: [
      "Assemblage châssis",
      "Montage moteur",
      "Câblage",
      "Montage roues",
      "Test",
      "Contrôle"
    ],
    avantages: ["Transport urbain", "Demande mobilité", "Import substitution", "Marché porteur"],
    challenges: ["Import moteurs", "Concurrence asiatique", "Qualité", "SAV"],
    sanitaires: [
      "Nettoyer les postes",
      "Former le personnel",
      "Entretenir les équipements",
      "Contrôler la sécurité",
      "Assurer la traçabilité"
    ],
    energie: [
      "Optimiser l'assemblage",
      "Utiliser des moteurs à haut rendement",
      "Éteindre les équipements hors production",
      "Isoler les zones",
      "Utiliser un éclairage LED"
    ],
    amenagement: [
      "Organiser en flux continu",
      "Prévoir zone de stockage",
      "Aménager zone de test",
      "Faciliter la circulation",
      "Prévoir zone SAV"
    ],
    marketing: [
      "Cibler distributeurs et particuliers",
      "Proposer des modèles variés",
      "Garantir la qualité",
      "Communiquer sur la fiabilité",
      "Développer un SAV"
    ]
  },

  velos: {
    id: "velos",
    nom: "Assemblage vélos",
    filiereNom: "Assemblage & Montage",
    type: "production",
    description: "Assemblage de vélos et cycles.",
    capex_min: 100000,
    chiffre_affaires_estime: "800000-1600000",
    marge_brute: "25-40",
    machines: [
      { name: "Poste d'assemblage", role: "Assemblage", capacity: "Standard", utilities: "—" },
      { name: "Outillage", role: "Assemblage", capacity: "Standard", utilities: "—" },
      { name: "Poste montage roues", role: "Rayonnage", capacity: "Option", utilities: "Électricité" }
    ],
    processus: [
      "Assemblage cadre",
      "Montage roues",
      "Montage transmission",
      "Réglage",
      "Contrôle",
      "Conditionnement"
    ],
    avantages: ["Mobilité durable", "Demande loisirs", "Import substitution", "Marché porteur"],
    challenges: ["Import pièces", "Concurrence", "Qualité", "Saisonnalité"],
    sanitaires: [
      "Nettoyer les postes",
      "Former le personnel",
      "Entretenir les équipements",
      "Contrôler la sécurité",
      "Assurer la traçabilité"
    ],
    energie: [
      "Optimiser l'assemblage",
      "Utiliser des moteurs à haut rendement",
      "Éteindre les équipements hors production",
      "Isoler les zones",
      "Utiliser un éclairage LED"
    ],
    amenagement: [
      "Organiser en flux continu",
      "Prévoir zone de stockage",
      "Aménager zone de montage",
      "Faciliter la circulation",
      "Prévoir zone de contrôle"
    ],
    marketing: [
      "Cibler distributeurs et particuliers",
      "Proposer des modèles variés",
      "Garantir la qualité",
      "Communiquer sur la durabilité",
      "Développer des contrats"
    ]
  },

  meubles: {
    id: "meubles",
    nom: "Assemblage meubles",
    filiereNom: "Assemblage & Montage",
    type: "production",
    description: "Assemblage de meubles en kit et modulaires.",
    capex_min: 70000,
    chiffre_affaires_estime: "400000-800000",
    marge_brute: "30-45",
    machines: [
      { name: "Poste d'assemblage", role: "Assemblage", capacity: "Standard", utilities: "—" },
      { name: "Perceuse", role: "Perçage", capacity: "Standard", utilities: "Électricité" },
      { name: "Outillage", role: "Assemblage", capacity: "Standard", utilities: "—" }
    ],
    processus: [
      "Découpe",
      "Perçage",
      "Assemblage",
      "Contrôle",
      "Conditionnement"
    ],
    avantages: ["Décoration intérieure", "Demande croissante", "Import substitution", "Marché porteur"],
    challenges: ["Import panneaux", "Concurrence", "Qualité", "Design"],
    sanitaires: [
      "Nettoyer les postes",
      "Former le personnel",
      "Entretenir les équipements",
      "Contrôler la qualité",
      "Assurer la traçabilité"
    ],
    energie: [
      "Optimiser la découpe",
      "Utiliser des moteurs à haut rendement",
      "Éteindre les équipements hors production",
      "Isoler les zones",
      "Récupérer les chutes"
    ],
    amenagement: [
      "Organiser en flux continu",
      "Prévoir zone de stockage",
      "Aménager zone d'assemblage",
      "Faciliter la circulation",
      "Prévoir zone de contrôle"
    ],
    marketing: [
      "Cibler supermarchés et boutiques",
      "Proposer des gammes variées",
      "Garantir la qualité",
      "Communiquer sur le design",
      "Développer des contrats"
    ]
  },

  equipements: {
    id: "equipements",
    nom: "Équipements sportifs",
    filiereNom: "Assemblage & Montage",
    type: "production",
    description: "Assemblage d'équipements sportifs et de fitness.",
    capex_min: 180000,
    chiffre_affaires_estime: "600000-1200000",
    marge_brute: "30-45",
    machines: [
      { name: "Poste d'assemblage", role: "Assemblage", capacity: "Standard", utilities: "Électricité" },
      { name: "Outillage", role: "Assemblage", capacity: "Standard", utilities: "—" },
      { name: "Poste de test", role: "Test", capacity: "Standard", utilities: "—" }
    ],
    processus: [
      "Assemblage",
      "Montage",
      "Test",
      "Contrôle",
      "Conditionnement"
    ],
    avantages: ["Développement sport", "Demande santé", "Import substitution", "Marché porteur"],
    challenges: ["Normes sécurité", "Import composants", "Concurrence", "Qualité"],
    sanitaires: [
      "Nettoyer les postes",
      "Former le personnel",
      "Entretenir les équipements",
      "Contrôler la sécurité",
      "Assurer la traçabilité"
    ],
    energie: [
      "Optimiser l'assemblage",
      "Utiliser des moteurs à haut rendement",
      "Éteindre les équipements hors production",
      "Isoler les zones",
      "Utiliser un éclairage LED"
    ],
    amenagement: [
      "Organiser en flux continu",
      "Prévoir zone de stockage",
      "Aménager zone de test",
      "Faciliter la circulation",
      "Prévoir zone de contrôle"
    ],
    marketing: [
      "Cibler salles de sport et écoles",
      "Proposer des gammes variées",
      "Garantir la qualité",
      "Communiquer sur la sécurité",
      "Développer des contrats"
    ]
  },

  // ==============================================
  // 10. RECYCLAGE & ENVIRONNEMENT (8 UP)
  // ==============================================

  plastique: {
    id: "plastique",
    nom: "Recyclage plastique",
    filiereNom: "Recyclage & Environnement",
    type: "production",
    description: "Recyclage et transformation de déchets plastiques.",
    capex_min: 110000,
    chiffre_affaires_estime: "400000-800000",
    marge_brute: "30-45",
    machines: [
      { name: "Broyeur", role: "Broyage", capacity: "Selon flux", utilities: "Électricité" },
      { name: "Laveuse", role: "Lavage", capacity: "Standard", utilities: "Électricité + eau" },
      { name: "Extrudeuse", role: "Extrusion", capacity: "Standard", utilities: "Électricité" },
      { name: "Coupe-granulés", role: "Granulation", capacity: "Standard", utilities: "Électricité" }
    ],
    processus: [
      "Collecte",
      "Tri",
      "Broyage",
      "Lavage",
      "Extrusion",
      "Granulation"
    ],
    avantages: ["Écologique", "Subventions possibles", "Économie circulaire", "Marché porteur"],
    challenges: ["Qualité déchets", "Logistique collecte", "Investissement", "Concurrence"],
    sanitaires: [
      "Traiter les eaux usées",
      "Former le personnel",
      "Entretenir les équipements",
      "Contrôler la qualité",
      "Assurer la traçabilité"
    ],
    energie: [
      "Optimiser l'extrusion",
      "Récupérer la chaleur",
      "Isoler les machines",
      "Utiliser des moteurs à haut rendement",
      "Éteindre les équipements hors production"
    ],
    amenagement: [
      "Organiser en zones",
      "Prévoir zone de stockage",
      "Aménager zone de lavage",
      "Faciliter la circulation",
      "Prévoir zone de conditionnement"
    ],
    marketing: [
      "Cibler industries plastique",
      "Proposer des qualités variées",
      "Garantir la qualité",
      "Communiquer sur l'écologie",
      "Développer des contrats"
    ]
  },

  papier: {
    id: "papier",
    nom: "Recyclage papier/carton",
    filiereNom: "Recyclage & Environnement",
    type: "production",
    description: "Recyclage de papier et carton.",
    capex_min: 120000,
    chiffre_affaires_estime: "500000-1000000",
    marge_brute: "25-40",
    machines: [
      { name: "Broyeur", role: "Broyage", capacity: "Standard", utilities: "Électricité" },
      { name: "Pulpeur", role: "Mise en pâte", capacity: "Standard", utilities: "Électricité + eau" },
      { name: "Presse", role: "Extraction eau", capacity: "Standard", utilities: "Électricité" },
      { name: "Séchoir", role: "Séchage", capacity: "Standard", utilities: "Électricité" }
    ],
    processus: [
      "Collecte",
      "Tri",
      "Broyage",
      "Pulpage",
      "Pressage",
      "Séchage"
    ],
    avantages: ["Écologique", "Demande emballage", "Économie circulaire", "Subventions"],
    challenges: ["Consommation eau", "Traitement effluents", "Qualité", "Logistique"],
    sanitaires: [
      "Traiter les eaux usées",
      "Former le personnel",
      "Entretenir les équipements",
      "Contrôler la qualité",
      "Assurer la traçabilité"
    ],
    energie: [
      "Optimiser le séchage",
      "Récupérer la chaleur",
      "Isoler les machines",
      "Utiliser des moteurs à haut rendement",
      "Éteindre les équipements hors production"
    ],
    amenagement: [
      "Organiser en zones",
      "Prévoir zone de stockage",
      "Aménager zone de pulpage",
      "Faciliter la circulation",
      "Prévoir zone de séchage"
    ],
    marketing: [
      "Cibler industries emballage",
      "Proposer des qualités variées",
      "Garantir la qualité",
      "Communiquer sur l'écologie",
      "Développer des contrats"
    ]
  },

  metaux: {
    id: "metaux",
    nom: "Recyclage métaux",
    filiereNom: "Recyclage & Environnement",
    type: "production",
    description: "Recyclage de métaux ferreux et non-ferreux.",
    capex_min: 130000,
    chiffre_affaires_estime: "600000-1200000",
    marge_brute: "25-40",
    machines: [
      { name: "Zone de tri", role: "Tri", capacity: "Standard", utilities: "—" },
      { name: "Cisaille", role: "Découpe", capacity: "Standard", utilities: "Électricité" },
      { name: "Broyeur", role: "Broyage", capacity: "Standard", utilities: "Électricité" },
      { name: "Presse à balles", role: "Compactage", capacity: "Standard", utilities: "Électricité" }
    ],
    processus: [
      "Collecte",
      "Tri",
      "Découpe",
      "Broyage",
      "Compactage",
      "Expédition"
    ],
    avantages: ["Économie ressources", "Export possible", "Écologique", "Marché porteur"],
    challenges: ["Logistique collecte", "Qualité tri", "Concurrence", "Investissement"],
    sanitaires: [
      "Utiliser des EPI",
      "Former le personnel",
      "Entretenir les équipements",
      "Contrôler la qualité",
      "Assurer la traçabilité"
    ],
    energie: [
      "Optimiser le broyage",
      "Utiliser des moteurs à haut rendement",
      "Éteindre les équipements hors production",
      "Isoler les zones",
      "Récupérer les chutes"
    ],
    amenagement: [
      "Organiser par zones",
      "Prévoir zone de stockage",
      "Aménager zone de compactage",
      "Faciliter la circulation",
      "Prévoir zone de tri"
    ],
    marketing: [
      "Cibler fonderies et industries",
      "Proposer des métaux triés",
      "Garantir la qualité",
      "Communiquer sur l'écologie",
      "Développer des contrats"
    ]
  },

  compost: {
    id: "compost",
    nom: "Compost et engrais organiques",
    filiereNom: "Recyclage & Environnement",
    type: "production",
    description: "Transformation de déchets organiques en compost.",
    capex_min: 55000,
    chiffre_affaires_estime: "200000-400000",
    marge_brute: "35-50",
    machines: [
      { name: "Broyeur", role: "Broyage", capacity: "Standard", utilities: "Électricité" },
      { name: "Aire de compostage", role: "Fermentation", capacity: "Selon volume", utilities: "—" },
      { name: "Retourneur", role: "Aération", capacity: "Option", utilities: "Carburant" },
      { name: "Crible", role: "Tamisage", capacity: "Standard", utilities: "Électricité" },
      { name: "Ensacheuse", role: "Conditionnement", capacity: "Standard", utilities: "Électricité" }
    ],
    processus: [
      "Collecte",
      "Broyage",
      "Compostage",
      "Retournement",
      "Tamisage",
      "Conditionnement"
    ],
    avantages: ["Écologique", "Agriculture biologique", "Subventions", "Économie circulaire"],
    challenges: ["Contrôle qualité", "Logistique collecte", "Saisonnalité", "Odeurs"],
    sanitaires: [
      "Contrôler les odeurs",
      "Former le personnel",
      "Entretenir les équipements",
      "Contrôler la qualité",
      "Assurer la traçabilité"
    ],
    energie: [
      "Optimiser le broyage",
      "Utiliser des moteurs à haut rendement",
      "Éteindre les équipements hors production",
      "Isoler les zones",
      "Récupérer la chaleur"
    ],
    amenagement: [
      "Organiser en zones",
      "Prévoir zone de stockage",
      "Aménager aire de compostage",
      "Faciliter la circulation",
      "Prévoir zone de conditionnement"
    ],
    marketing: [
      "Cibler agriculteurs et jardineries",
      "Proposer des sacs de différents formats",
      "Garantir la qualité",
      "Communiquer sur l'écologie",
      "Développer des contrats"
    ]
  },

  verre: {
    id: "verre",
    nom: "Recyclage verre",
    filiereNom: "Recyclage & Environnement",
    type: "production",
    description: "Recyclage de verre usagé.",
    capex_min: 150000,
    chiffre_affaires_estime: "500000-1000000",
    marge_brute: "30-45",
    machines: [
      { name: "Concasseur", role: "Broyage", capacity: "Standard", utilities: "Électricité" },
      { name: "Crible", role: "Tamisage", capacity: "Standard", utilities: "Électricité" },
      { name: "Séparateur", role: "Impuretés", capacity: "Option", utilities: "Électricité" },
      { name: "Ensacheuse", role: "Conditionnement", capacity: "Standard", utilities: "Électricité" }
    ],
    processus: [
      "Collecte",
      "Tri",
      "Broyage",
      "Tamisage",
      "Conditionnement"
    ],
    avantages: ["Écologique", "Économie énergie", "Économie circulaire", "Subventions"],
    challenges: ["Tri par couleur", "Logistique collecte", "Qualité", "Investissement"],
    sanitaires: [
      "Utiliser des EPI",
      "Former le personnel",
      "Entretenir les équipements",
      "Contrôler la qualité",
      "Assurer la traçabilité"
    ],
    energie: [
      "Optimiser le broyage",
      "Utiliser des moteurs à haut rendement",
      "Éteindre les équipements hors production",
      "Isoler les zones",
      "Récupérer les chutes"
    ],
    amenagement: [
      "Organiser en zones",
      "Prévoir zone de stockage",
      "Aménager zone de broyage",
      "Faciliter la circulation",
      "Prévoir zone de conditionnement"
    ],
    marketing: [
      "Cibler verreries et industries",
      "Proposer des granulométries variées",
      "Garantir la qualité",
      "Communiquer sur l'écologie",
      "Développer des contrats"
    ]
  },

  pneus: {
    id: "pneus",
    nom: "Recyclage pneus",
    filiereNom: "Recyclage & Environnement",
    type: "production",
    description: "Recyclage et valorisation de pneus usagés.",
    capex_min: 150000,
    chiffre_affaires_estime: "400000-800000",
    marge_brute: "30-45",
    machines: [
      { name: "Déchiqueteur", role: "Pré-découpe", capacity: "Standard", utilities: "Électricité" },
      { name: "Broyeur", role: "Broyage", capacity: "Standard", utilities: "Électricité" },
      { name: "Séparateur", role: "Séparation", capacity: "Standard", utilities: "Électricité" },
      { name: "Granulateur", role: "Granulation", capacity: "Standard", utilities: "Électricité" }
    ],
    processus: [
      "Collecte",
      "Déchiquetage",
      "Broyage",
      "Séparation",
      "Granulation",
      "Conditionnement"
    ],
    avantages: ["Problème environnemental", "Valorisation déchets", "Économie circulaire", "Subventions"],
    challenges: ["Équipements spécialisés", "Logistique collecte", "Investissement", "Qualité"],
    sanitaires: [
      "Utiliser des EPI",
      "Former le personnel",
      "Entretenir les équipements",
      "Contrôler la qualité",
      "Assurer la traçabilité"
    ],
    energie: [
      "Optimiser le broyage",
      "Utiliser des moteurs à haut rendement",
      "Éteindre les équipements hors production",
      "Isoler les zones",
      "Récupérer les chutes"
    ],
    amenagement: [
      "Organiser en zones",
      "Prévoir zone de stockage",
      "Aménager zone de broyage",
      "Faciliter la circulation",
      "Prévoir zone de conditionnement"
    ],
    marketing: [
      "Cibler BTP et industries",
      "Proposer des granulométries variées",
      "Garantir la qualité",
      "Communiquer sur l'écologie",
      "Développer des contrats"
    ]
  },

  huiles: {
    id: "huiles",
    nom: "Recyclage huiles usagées",
    filiereNom: "Recyclage & Environnement",
    type: "production",
    description: "Recyclage et régénération d'huiles usagées.",
    capex_min: 85000,
    chiffre_affaires_estime: "300000-600000",
    marge_brute: "35-50",
    machines: [
      { name: "Cuve de stockage", role: "Stockage", capacity: "Standard", utilities: "—" },
      { name: "Filtre", role: "Filtration", capacity: "Standard", utilities: "Électricité" },
      { name: "Réacteur", role: "Traitement", capacity: "Standard", utilities: "Électricité" },
      { name: "Centrifugeuse", role: "Séparation", capacity: "Option", utilities: "Électricité" }
    ],
    processus: [
      "Collecte",
      "Filtration",
      "Traitement",
      "Décantation",
      "Conditionnement"
    ],
    avantages: ["Écologique", "Réduction importations", "Économie circulaire", "Subventions"],
    challenges: ["Contamination huiles", "Normes environnementales", "Logistique", "Qualité"],
    sanitaires: [
      "Utiliser des EPI",
      "Former le personnel",
      "Entretenir les équipements",
      "Contrôler la qualité",
      "Assurer la traçabilité"
    ],
    energie: [
      "Optimiser le traitement",
      "Utiliser des moteurs à haut rendement",
      "Éteindre les équipements hors production",
      "Isoler les zones",
      "Récupérer la chaleur"
    ],
    amenagement: [
      "Organiser en zones",
      "Prévoir zone de stockage",
      "Aménager zone de traitement",
      "Faciliter la circulation",
      "Prévoir zone de conditionnement"
    ],
    marketing: [
      "Cibler garages et industries",
      "Proposer des huiles régénérées",
      "Garantir la qualité",
      "Communiquer sur l'écologie",
      "Développer des contrats"
    ]
  },

  deee: {
    id: "deee",
    nom: "Recyclage DEEE",
    filiereNom: "Recyclage & Environnement",
    type: "production",
    description: "Recyclage de déchets électriques et électroniques.",
    capex_min: 160000,
    chiffre_affaires_estime: "500000-1000000",
    marge_brute: "30-45",
    machines: [
      { name: "Zone de démontage", role: "Démontage", capacity: "Standard", utilities: "—" },
      { name: "Broyeur", role: "Broyage", capacity: "Standard", utilities: "Électricité" },
      { name: "Séparateur", role: "Séparation", capacity: "Standard", utilities: "Électricité" },
      { name: "Système aspiration", role: "Aspiration", capacity: "Standard", utilities: "Électricité" }
    ],
    processus: [
      "Collecte",
      "Démontage",
      "Tri",
      "Broyage",
      "Séparation",
      "Valorisation"
    ],
    avantages: ["Déchets toxiques", "Valeur métaux précieux", "Économie circulaire", "Subventions"],
    challenges: ["Traitement déchets dangereux", "Logistique collecte", "Investissement", "Normes"],
    sanitaires: [
      "Utiliser des EPI",
      "Former le personnel",
      "Entretenir les équipements",
      "Contrôler les émissions",
      "Assurer la traçabilité"
    ],
    energie: [
      "Optimiser le broyage",
      "Utiliser des moteurs à haut rendement",
      "Éteindre les équipements hors production",
      "Isoler les zones",
      "Récupérer les chutes"
    ],
    amenagement: [
      "Organiser en zones",
      "Prévoir zone de stockage",
      "Aménager zone de démontage",
      "Faciliter la circulation",
      "Prévoir zone de séparation"
    ],
    marketing: [
      "Cibler recycleurs et industries",
      "Proposer des matériaux séparés",
      "Garantir la qualité",
      "Communiquer sur l'écologie",
      "Développer des contrats"
    ]
  },

  // ==============================================
  // 11. SERVICES INDUSTRIELS (8 UP)
  // ==============================================

  nettoyage: {
    id: "nettoyage",
    nom: "Services de nettoyage industriel",
    filiereNom: "Services Industriels",
    type: "service",
    description: "Prestations de nettoyage professionnel pour entreprises, industries et collectivités.",
    capex_min: 40000,
    chiffre_affaires_estime: "200000-400000",
    marge_brute: "40-60",
    machines: [
      { name: "Autolaveuse", role: "Nettoyage grandes surfaces", capacity: "Standard", utilities: "Électricité" },
      { name: "Aspirateur industriel", role: "Aspiration", capacity: "Standard", utilities: "Électricité" },
      { name: "Monobrosse", role: "Nettoyage et lustrage", capacity: "Standard", utilities: "Électricité" },
      { name: "Chariot de nettoyage", role: "Transport matériel", capacity: "Standard", utilities: "—" }
    ],
    processus: [
      "Évaluation des besoins",
      "Planification",
      "Mobilisation",
      "Exécution",
      "Contrôle qualité",
      "Facturation"
    ],
    avantages: ["Demande récurrente", "Faible investissement", "Marges intéressantes", "Fidélisation"],
    challenges: ["Gestion du personnel", "Concurrence", "Saisonnalité", "Normes"],
    sanitaires: [
      "Utiliser des produits certifiés",
      "Former le personnel",
      "Désinfecter le matériel",
      "Gérer les déchets",
      "Porter des EPI"
    ],
    energie: [
      "Privilégier équipements basse consommation",
      "Optimiser les tournées",
      "Utiliser des produits concentrés",
      "Former aux gestes d'économie",
      "Entretenir les batteries"
    ],
    amenagement: [
      "Local de stockage dédié",
      "Zone de lavage recharge",
      "Vestiaire avec douches",
      "Racks de rangement",
      "Espace de formation"
    ],
    marketing: [
      "Cibler entreprises et collectivités",
      "Offres packagées",
      "Certifications",
      "Service d'urgence",
      "Témoignages clients"
    ]
  },

  maintenance: {
    id: "maintenance",
    nom: "Maintenance industrielle",
    filiereNom: "Services Industriels",
    type: "service",
    description: "Services de maintenance préventive et curative.",
    capex_min: 90000,
    chiffre_affaires_estime: "300000-600000",
    marge_brute: "35-50",
    machines: [
      { name: "Outillage mécanique", role: "Maintenance", capacity: "Standard", utilities: "—" },
      { name: "Outillage électrique", role: "Maintenance", capacity: "Standard", utilities: "Électricité" },
      { name: "Poste à souder", role: "Réparation", capacity: "Standard", utilities: "Électricité" },
      { name: "Équipements de mesure", role: "Diagnostic", capacity: "Standard", utilities: "—" }
    ],
    processus: [
      "Diagnostic",
      "Intervention",
      "Pièces de rechange",
      "Suivi"
    ],
    avantages: ["Récurent", "Expertise technique", "Contrats annuels", "Marché porteur"],
    challenges: ["Qualification personnel", "Gestion pièces", "Délais", "Concurrence"],
    sanitaires: [
      "Utiliser des EPI",
      "Former le personnel",
      "Entretenir les équipements",
      "Gérer les déchets",
      "Assurer la traçabilité"
    ],
    energie: [
      "Optimiser les interventions",
      "Utiliser des outils économes",
      "Éteindre les équipements",
      "Isoler les zones",
      "Utiliser un éclairage LED"
    ],
    amenagement: [
      "Atelier organisé",
      "Zone de stockage pièces",
      "Espace de diagnostic",
      "Vestiaire",
      "Zone de formation"
    ],
    marketing: [
      "Cibler industries",
      "Contrats annuels",
      "Garantie qualité",
      "Communiquer sur réactivité",
      "Témoignages clients"
    ]
  },

  logistique: {
    id: "logistique",
    nom: "Logistique industrielle",
    filiereNom: "Services Industriels",
    type: "service",
    description: "Services logistiques et gestion d'entrepôts.",
    capex_min: 120000,
    chiffre_affaires_estime: "400000-800000",
    marge_brute: "30-45",
    machines: [
      { name: "Rayonnages", role: "Stockage", capacity: "Standard", utilities: "—" },
      { name: "Chariot élévateur", role: "Manutention", capacity: "Standard", utilities: "Électricité" },
      { name: "Quai de chargement", role: "Chargement", capacity: "Standard", utilities: "—" },
      { name: "Système de gestion", role: "Gestion", capacity: "Standard", utilities: "Électricité" }
    ],
    processus: [
      "Réception",
      "Stockage",
      "Préparation commandes",
      "Expédition"
    ],
    avantages: ["Développement commerce", "Contrats long terme", "Marché porteur", "Récurrent"],
    challenges: ["Investissement entrepôts", "Gestion flux", "Personnel", "Concurrence"],
    sanitaires: [
      "Nettoyer les zones",
      "Former le personnel",
      "Entretenir les équipements",
      "Gérer les déchets",
      "Assurer la sécurité"
    ],
    energie: [
      "Optimiser l'éclairage LED",
      "Utiliser chariots électriques",
      "Isoler l'entrepôt",
      "Éteindre les équipements",
      "Gérer les consommations"
    ],
    amenagement: [
      "Entrepôt organisé",
      "Zones distinctes",
      "Allées larges",
      "Quais de chargement",
      "Bureau gestion"
    ],
    marketing: [
      "Cibler industries",
      "Contrats logistiques",
      "Garantie délais",
      "Communiquer sur traçabilité",
      "Témoignages clients"
    ]
  },

  formation: {
    id: "formation",
    nom: "Formation industrielle",
    filiereNom: "Services Industriels",
    type: "service",
    description: "Formation technique et professionnelle.",
    capex_min: 70000,
    chiffre_affaires_estime: "250000-500000",
    marge_brute: "40-60",
    machines: [
      { name: "Salles de formation", role: "Cours théoriques", capacity: "Standard", utilities: "Électricité" },
      { name: "Atelier pédagogique", role: "Travaux pratiques", capacity: "Standard", utilities: "Électricité" },
      { name: "Équipements didactiques", role: "Apprentissage", capacity: "Standard", utilities: "Électricité" },
      { name: "Matériel informatique", role: "Support", capacity: "Standard", utilities: "Électricité + internet" }
    ],
    processus: [
      "Évaluation besoins",
      "Développement programmes",
      "Animation",
      "Évaluation"
    ],
    avantages: ["Développement compétences", "Répétitif", "Marges élevées", "Marché porteur"],
    challenges: ["Qualification formateurs", "Accréditation", "Concurrence", "Innovation"],
    sanitaires: [
      "Nettoyer les salles",
      "Former le personnel",
      "Entretenir les équipements",
      "Gérer les déchets",
      "Assurer la sécurité"
    ],
    energie: [
      "Optimiser l'éclairage LED",
      "Utiliser équipements économes",
      "Éteindre les équipements",
      "Isoler les salles",
      "Gérer les consommations"
    ],
    amenagement: [
      "Salles équipées",
      "Atelier pratique",
      "Bureaux formateurs",
      "Espace détente",
      "Zone administrative"
    ],
    marketing: [
      "Cibler entreprises et institutions",
      "Catalogues formations",
      "Certifications",
      "Communiquer sur expertise",
      "Témoignages stagiaires"
    ]
  },

  qualite: {
    id: "qualite",
    nom: "Services qualité",
    filiereNom: "Services Industriels",
    type: "service",
    description: "Services de contrôle qualité et certification.",
    capex_min: 60000,
    chiffre_affaires_estime: "200000-400000",
    marge_brute: "45-65",
    machines: [
      { name: "Bancs d'essais", role: "Tests", capacity: "Standard", utilities: "Électricité" },
      { name: "Instruments de mesure", role: "Mesure", capacity: "Standard", utilities: "—" },
      { name: "Équipements essais", role: "Essais", capacity: "Option", utilities: "Électricité" },
      { name: "Poste informatique", role: "Rapports", capacity: "Standard", utilities: "Électricité + internet" }
    ],
    processus: [
      "Audit",
      "Contrôle",
      "Analyses",
      "Certification"
    ],
    avantages: ["Expertise spécialisée", "Marges élevées", "Demande croissante", "Marché porteur"],
    challenges: ["Accréditation laboratoires", "Concurrence internationale", "Qualification", "Investissement"],
    sanitaires: [
      "Nettoyer les postes",
      "Former le personnel",
      "Entretenir les équipements",
      "Gérer les déchets",
      "Assurer la traçabilité"
    ],
    energie: [
      "Optimiser l'éclairage LED",
      "Utiliser équipements économes",
      "Éteindre les équipements",
      "Isoler les zones",
      "Gérer les consommations"
    ],
    amenagement: [
      "Laboratoire organisé",
      "Zone de contrôle",
      "Bureau rapports",
      "Espace rangement",
      "Zone accueil"
    ],
    marketing: [
      "Cibler industries",
      "Certifications reconnues",
      "Garantie qualité",
      "Communiquer sur expertise",
      "Témoignages clients"
    ]
  },

  etudes: {
    id: "etudes",
    nom: "Études et conseil",
    filiereNom: "Services Industriels",
    type: "service",
    description: "Services d'études techniques et conseil industriel.",
    capex_min: 55000,
    chiffre_affaires_estime: "300000-600000",
    marge_brute: "50-70",
    machines: [
      { name: "Postes informatiques", role: "Conception", capacity: "Standard", utilities: "Électricité + internet" },
      { name: "Logiciels techniques", role: "Modélisation", capacity: "Standard", utilities: "Licence" },
      { name: "Imprimantes", role: "Édition", capacity: "Standard", utilities: "Électricité" },
      { name: "Salle réunion", role: "Présentation", capacity: "Standard", utilities: "Électricité" }
    ],
    processus: [
      "Analyse besoins",
      "Recherche",
      "Rédaction",
      "Présentation"
    ],
    avantages: ["Hautes marges", "Expertise intellectuelle", "Marché porteur", "Récurrent"],
    challenges: ["Recrutement experts", "Concurrence bureaux d'études", "Innovation", "Qualité"],
    sanitaires: [
      "Nettoyer les bureaux",
      "Former le personnel",
      "Entretenir les équipements",
      "Gérer les déchets",
      "Assurer la sécurité"
    ],
    energie: [
      "Optimiser l'éclairage LED",
      "Utiliser équipements économes",
      "Éteindre les équipements",
      "Isoler les bureaux",
      "Gérer les consommations"
    ],
    amenagement: [
      "Bureaux organisés",
      "Salle réunion",
      "Espace documentation",
      "Zone détente",
      "Accueil clients"
    ],
    marketing: [
      "Cibler industries et investisseurs",
      "Catalogues prestations",
      "Références",
      "Communiquer sur expertise",
      "Témoignages clients"
    ]
  },

  securite: {
    id: "securite",
    nom: "Sécurité industrielle",
    filiereNom: "Services Industriels",
    type: "service",
    description: "Services de sécurité et surveillance.",
    capex_min: 50000,
    chiffre_affaires_estime: "250000-500000",
    marge_brute: "35-55",
    machines: [
      { name: "Équipements HSE", role: "Mesure risques", capacity: "Standard", utilities: "—" },
      { name: "Équipements EPI", role: "Démonstration", capacity: "Standard", utilities: "—" },
      { name: "Poste informatique", role: "Rapports", capacity: "Standard", utilities: "Électricité + internet" },
      { name: "Véhicule terrain", role: "Audits", capacity: "Option", utilities: "Carburant" }
    ],
    processus: [
      "Évaluation risques",
      "Planification",
      "Surveillance",
      "Intervention"
    ],
    avantages: ["Récurent", "Faible investissement", "Marché porteur", "Contrats"],
    challenges: ["Formation agents", "Responsabilité", "Concurrence", "Qualification"],
    sanitaires: [
      "Nettoyer les postes",
      "Former le personnel",
      "Entretenir les équipements",
      "Gérer les déchets",
      "Assurer la sécurité"
    ],
    energie: [
      "Optimiser l'éclairage LED",
      "Utiliser équipements économes",
      "Éteindre les équipements",
      "Isoler les zones",
      "Gérer les consommations"
    ],
    amenagement: [
      "Poste de sécurité",
      "Zone stockage EPI",
      "Bureau rapports",
      "Salle formation",
      "Local technique"
    ],
    marketing: [
      "Cibler industries et collectivités",
      "Contrats sécurité",
      "Certifications",
      "Communiquer sur fiabilité",
      "Témoignages clients"
    ]
  },

  energie: {
    id: "energie",
    nom: "Services énergétiques",
    filiereNom: "Services Industriels",
    type: "service",
    description: "Services d'efficacité énergétique et énergies renouvelables.",
    capex_min: 100000,
    chiffre_affaires_estime: "400000-800000",
    marge_brute: "35-50",
    machines: [
      { name: "Instruments de mesure", role: "Audit", capacity: "Standard", utilities: "Électricité" },
      { name: "Analyseurs réseaux", role: "Analyse", capacity: "Standard", utilities: "Électricité" },
      { name: "Logiciels d'analyse", role: "Optimisation", capacity: "Standard", utilities: "Électricité + internet" },
      { name: "Poste informatique", role: "Études", capacity: "Standard", utilities: "Électricité + internet" }
    ],
    processus: [
      "Audit énergétique",
      "Conception",
      "Installation",
      "Maintenance"
    ],
    avantages: ["Énergies renouvelables", "Subventions possibles", "Marché porteur", "Croissance"],
    challenges: ["Investissement installations", "Retour sur investissement", "Qualification", "Concurrence"],
    sanitaires: [
      "Nettoyer les postes",
      "Former le personnel",
      "Entretenir les équipements",
      "Gérer les déchets",
      "Assurer la sécurité"
    ],
    energie: [
      "Optimiser l'éclairage LED",
      "Utiliser équipements économes",
      "Éteindre les équipements",
      "Isoler les zones",
      "Gérer les consommations"
    ],
    amenagement: [
      "Bureau études",
      "Zone matériel",
      "Salle réunion",
      "Espace documentation",
      "Atelier test"
    ],
    marketing: [
      "Cibler industries et collectivités",
      "Offres efficacité énergétique",
      "Certifications",
      "Communiquer sur économies",
      "Témoignages clients"
    ]
  },

  // ==============================================
  // 12. ÉNERGIE & EAU (8 UP)
  // ==============================================

  poteaux: {
    id: "poteaux",
    nom: "Poteaux électriques",
    filiereNom: "Énergie & Eau",
    type: "production",
    description: "Fabrication de poteaux électriques en béton.",
    capex_min: 150000,
    chiffre_affaires_estime: "800000-1600000",
    marge_brute: "25-40",
    machines: [
      { name: "Centrale à béton", role: "Béton", capacity: "Standard", utilities: "Électricité + eau" },
      { name: "Moules", role: "Moulage", capacity: "Selon modèles", utilities: "—" },
      { name: "Vibreur", role: "Compactage", capacity: "Standard", utilities: "Électricité" },
      { name: "Zone de cure", role: "Durcissement", capacity: "Standard", utilities: "Eau" }
    ],
    processus: [
      "Préparation béton",
      "Moulage",
      "Compactage",
      "Cure",
      "Démoulage",
      "Stockage"
    ],
    avantages: ["Développement réseaux électriques", "Commandes institutionnelles", "Import substitution", "Marché porteur"],
    challenges: ["Logistique transport", "Normes électriques", "Investissement", "Concurrence"],
    sanitaires: [
      "Nettoyer les postes",
      "Former le personnel",
      "Entretenir les équipements",
      "Gérer les déchets",
      "Assurer la traçabilité"
    ],
    energie: [
      "Optimiser le malaxage",
      "Utiliser des moteurs à haut rendement",
      "Éteindre les équipements hors production",
      "Isoler les zones",
      "Récupérer l'eau"
    ],
    amenagement: [
      "Organiser en flux continu",
      "Prévoir zone de stockage",
      "Aménager zone de cure",
      "Faciliter la circulation",
      "Prévoir zone de conditionnement"
    ],
    marketing: [
      "Cibler sociétés électriques et BTP",
      "Participer aux appels d'offres",
      "Garantir la qualité",
      "Communiquer sur la résistance",
      "Développer des contrats"
    ]
  },

  compteurs_eau: {
    id: "compteurs_eau",
    nom: "Compteurs d'eau",
    filiereNom: "Énergie & Eau",
    type: "production",
    description: "Fabrication de compteurs d'eau résidentiels et industriels.",
    capex_min: 120000,
    chiffre_affaires_estime: "500000-1000000",
    marge_brute: "30-45",
    machines: [
      { name: "Poste d'assemblage", role: "Assemblage", capacity: "Standard", utilities: "—" },
      { name: "Poste électronique", role: "Smart", capacity: "Option", utilities: "Électricité" },
      { name: "Banc d'essai", role: "Calibration", capacity: "Standard", utilities: "Électricité + eau" },
      { name: "Poste étanchéité", role: "Test", capacity: "Standard", utilities: "Électricité" }
    ],
    processus: [
      "Assemblage",
      "Calibration",
      "Test",
      "Contrôle",
      "Conditionnement"
    ],
    avantages: ["Développement réseaux eau", "Import substitution", "Marché porteur", "Contrats"],
    challenges: ["Précision mesure", "Concurrence importations", "Qualité", "Normes"],
    sanitaires: [
      "Nettoyer les postes",
      "Former le personnel",
      "Entretenir les équipements",
      "Contrôler la qualité",
      "Assurer la traçabilité"
    ],
    energie: [
      "Optimiser l'assemblage",
      "Utiliser des moteurs à haut rendement",
      "Éteindre les équipements hors production",
      "Isoler les zones",
      "Utiliser un éclairage LED"
    ],
    amenagement: [
      "Organiser en flux continu",
      "Prévoir zone de stockage",
      "Aménager zone de test",
      "Faciliter la circulation",
      "Prévoir zone de contrôle"
    ],
    marketing: [
      "Cibler sociétés des eaux",
      "Participer aux appels d'offres",
      "Garantir la qualité",
      "Communiquer sur la précision",
      "Développer des contrats"
    ]
  },

  kits_solaires: {
    id: "kits_solaires",
    nom: "Kits solaires domestiques",
    filiereNom: "Énergie & Eau",
    type: "production",
    description: "Assemblage de kits solaires pour domiciles.",
    capex_min: 100000,
    chiffre_affaires_estime: "400000-800000",
    marge_brute: "30-45",
    machines: [
      { name: "Poste d'assemblage", role: "Assemblage", capacity: "Standard", utilities: "Électricité" },
      { name: "Poste câblage", role: "Câblage", capacity: "Standard", utilities: "Électricité" },
      { name: "Banc de test", role: "Test", capacity: "Standard", utilities: "Électricité" }
    ],
    processus: [
      "Assemblage",
      "Câblage",
      "Test",
      "Contrôle",
      "Conditionnement"
    ],
    avantages: ["Électrification rurale", "Énergie renouvelable", "Subventions", "Marché porteur"],
    challenges: ["Import composants", "Financement clients", "Qualité", "SAV"],
    sanitaires: [
      "Nettoyer les postes",
      "Former le personnel",
      "Entretenir les équipements",
      "Contrôler la qualité",
      "Assurer la traçabilité"
    ],
    energie: [
      "Optimiser l'assemblage",
      "Utiliser des moteurs à haut rendement",
      "Éteindre les équipements hors production",
      "Isoler les zones",
      "Utiliser un éclairage LED"
    ],
    amenagement: [
      "Organiser en flux continu",
      "Prévoir zone de stockage",
      "Aménager zone de test",
      "Faciliter la circulation",
      "Prévoir zone de conditionnement"
    ],
    marketing: [
      "Cibler zones rurales et particuliers",
      "Proposer des puissances variées",
      "Garantir la qualité",
      "Communiquer sur l'écologie",
      "Développer des contrats"
    ]
  },

  lampadaires: {
    id: "lampadaires",
    nom: "Lampadaires solaires",
    filiereNom: "Énergie & Eau",
    type: "production",
    description: "Fabrication de lampadaires solaires autonomes.",
    capex_min: 130000,
    chiffre_affaires_estime: "600000-1200000",
    marge_brute: "35-50",
    machines: [
      { name: "Poste d'assemblage", role: "Assemblage", capacity: "Standard", utilities: "Électricité" },
      { name: "Poste montage solaire", role: "Fixation", capacity: "Standard", utilities: "—" },
      { name: "Poste batteries", role: "Intégration", capacity: "Standard", utilities: "Électricité" },
      { name: "Banc de test", role: "Test", capacity: "Standard", utilities: "Électricité" }
    ],
    processus: [
      "Assemblage",
      "Montage solaire",
      "Intégration batteries",
      "Test",
      "Contrôle"
    ],
    avantages: ["Éclairage public durable", "Contrats collectivités", "Énergie renouvelable", "Subventions"],
    challenges: ["Import panneaux solaires", "Maintenance après-vente", "Investissement", "Qualité"],
    sanitaires: [
      "Nettoyer les postes",
      "Former le personnel",
      "Entretenir les équipements",
      "Contrôler la qualité",
      "Assurer la traçabilité"
    ],
    energie: [
      "Optimiser l'assemblage",
      "Utiliser des moteurs à haut rendement",
      "Éteindre les équipements hors production",
      "Isoler les zones",
      "Utiliser un éclairage LED"
    ],
    amenagement: [
      "Organiser en flux continu",
      "Prévoir zone de stockage",
      "Aménager zone de test",
      "Faciliter la circulation",
      "Prévoir zone de conditionnement"
    ],
    marketing: [
      "Cibler collectivités et BTP",
      "Participer aux appels d'offres",
      "Garantir la qualité",
      "Communiquer sur l'écologie",
      "Développer des contrats"
    ]
  },

  forage: {
    id: "forage",
    nom: "Forage et équipements eau",
    filiereNom: "Énergie & Eau",
    type: "service",
    description: "Services de forage et équipements hydrauliques.",
    capex_min: 160000,
    chiffre_affaires_estime: "500000-1000000",
    marge_brute: "30-45",
    machines: [
      { name: "Atelier montage", role: "Assemblage", capacity: "Standard", utilities: "—" },
      { name: "Poste soudure", role: "Fabrication", capacity: "Standard", utilities: "Électricité" },
      { name: "Pompes d'essai", role: "Test", capacity: "Standard", utilities: "Électricité + eau" },
      { name: "Outillage terrain", role: "Intervention", capacity: "Standard", utilities: "Carburant" }
    ],
    processus: [
      "Étude géologique",
      "Forage",
      "Installation",
      "Test",
      "Mise en service",
      "Maintenance"
    ],
    avantages: ["Accès eau potable", "Développement agricole", "Marché porteur", "Contrats récurrents"],
    challenges: ["Équipements spécialisés", "Risques géologiques", "Logistique", "Normes"],
    sanitaires: [
      "Analyser l'eau",
      "Installer traitement",
      "Protéger tête de forage",
      "Former opérateurs",
      "Gérer les boues"
    ],
    energie: [
      "Privilégier pompes solaires",
      "Variateur de vitesse",
      "Suivi consommations",
      "Stockage eau",
      "Entretenir équipements"
    ],
    amenagement: [
      "Zone de forage organisée",
      "Local technique",
      "Espace formation",
      "Accès maintenance",
      "Anticiper extension"
    ],
    marketing: [
      "Cibler villages sans eau",
      "Offre maintenance annuelle",
      "Certifications",
      "Formations",
      "Références clients"
    ]
  },

  eau: {
    id: "eau",
    nom: "Traitement eau potable",
    filiereNom: "Énergie & Eau",
    type: "service",
    description: "Unités de traitement d'eau potable.",
    capex_min: 110000,
    chiffre_affaires_estime: "400000-800000",
    marge_brute: "35-50",
    machines: [
      { name: "Cuves de traitement", role: "Décantation", capacity: "Standard", utilities: "Électricité + eau" },
      { name: "Filtres", role: "Filtration", capacity: "Standard", utilities: "—" },
      { name: "Système dosage", role: "Traitement", capacity: "Standard", utilities: "Électricité" },
      { name: "Pompes", role: "Transfert", capacity: "Standard", utilities: "Électricité" },
      { name: "Bancs d'analyse", role: "Contrôle", capacity: "Standard", utilities: "Électricité" }
    ],
    processus: [
      "Conception",
      "Fabrication",
      "Installation",
      "Formation"
    ],
    avantages: ["Santé publique", "Projets développement", "Marché porteur", "Contrats"],
    challenges: ["Normes qualité eau", "Maintenance systèmes", "Investissement", "Qualification"],
    sanitaires: [
      "Contrôler la qualité",
      "Former opérateurs",
      "Entretenir équipements",
      "Gérer les boues",
      "Assurer traçabilité"
    ],
    energie: [
      "Optimiser le traitement",
      "Utiliser pompes économes",
      "Suivi consommations",
      "Isoler les cuves",
      "Éteindre équipements"
    ],
    amenagement: [
      "Station organisée",
      "Zone de traitement",
      "Laboratoire analyse",
      "Local technique",
      "Accès maintenance"
    ],
    marketing: [
      "Cibler villages et industries",
      "Offre maintenance",
      "Certifications",
      "Formations",
      "Références"
    ]
  },

  maintenance_energie: {
    id: "maintenance_energie",
    nom: "Maintenance énergétique",
    filiereNom: "Énergie & Eau",
    type: "service",
    description: "Services de maintenance pour installations énergétiques.",
    capex_min: 80000,
    chiffre_affaires_estime: "300000-600000",
    marge_brute: "40-60",
    machines: [
      { name: "Outillage électrique", role: "Maintenance", capacity: "Standard", utilities: "—" },
      { name: "Analyseurs portables", role: "Diagnostic", capacity: "Standard", utilities: "Électricité" },
      { name: "Équipements EPI", role: "Protection", capacity: "Standard", utilities: "—" },
      { name: "Véhicule", role: "Interventions", capacity: "Option", utilities: "Carburant" }
    ],
    processus: [
      "Diagnostic",
      "Intervention",
      "Pièces",
      "Suivi"
    ],
    avantages: ["Récurent", "Expertise spécialisée", "Contrats", "Marché porteur"],
    challenges: ["Qualification techniciens", "Gestion pièces", "Délais", "Concurrence"],
    sanitaires: [
      "Utiliser EPI",
      "Former personnel",
      "Entretenir équipements",
      "Gérer déchets",
      "Assurer sécurité"
    ],
    energie: [
      "Optimiser interventions",
      "Utiliser outils économes",
      "Éteindre équipements",
      "Isoler zones",
      "Gérer consommations"
    ],
    amenagement: [
      "Atelier organisé",
      "Zone stockage pièces",
      "Espace diagnostic",
      "Vestiaire",
      "Bureau suivi"
    ],
    marketing: [
      "Cibler industries",
      "Contrats maintenance",
      "Garantie qualité",
      "Communiquer réactivité",
      "Témoignages"
    ]
  },

  audit: {
    id: "audit",
    nom: "Audits énergétiques",
    filiereNom: "Énergie & Eau",
    type: "service",
    description: "Services d'audit et optimisation énergétique.",
    capex_min: 60000,
    chiffre_affaires_estime: "250000-500000",
    marge_brute: "50-70",
    machines: [
      { name: "Instruments de mesure", role: "Mesures", capacity: "Standard", utilities: "Électricité" },
      { name: "Analyseurs", role: "Diagnostics", capacity: "Standard", utilities: "—" },
      { name: "Postes informatiques", role: "Rapports", capacity: "Standard", utilities: "Électricité + internet" },
      { name: "Logiciels", role: "Analyse", capacity: "Standard", utilities: "Licence" }
    ],
    processus: [
      "Analyse consommation",
      "Mesures",
      "Recommandations",
      "Suivi"
    ],
    avantages: ["Économies énergie", "Hautes marges", "Marché porteur", "Réglementation"],
    challenges: ["Expertise technique", "Concurrence", "Qualification", "Innovation"],
    sanitaires: [
      "Nettoyer bureaux",
      "Former personnel",
      "Entretenir équipements",
      "Gérer déchets",
      "Assurer sécurité"
    ],
    energie: [
      "Optimiser éclairage LED",
      "Utiliser équipements économes",
      "Éteindre équipements",
      "Isoler bureaux",
      "Gérer consommations"
    ],
    amenagement: [
      "Bureaux organisés",
      "Salle réunion",
      "Espace documentation",
      "Zone matériel",
      "Accueil clients"
    ],
    marketing: [
      "Cibler industries",
      "Offres audits",
      "Certifications",
      "Communiquer économies",
      "Témoignages"
    ]
  }
};

// Export pour utilisation dans les autres fichiers
if (typeof module !== 'undefined' && module.exports) {
  module.exports = P2I_UP_DATA;
}
