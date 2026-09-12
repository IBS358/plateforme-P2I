 const MODELS_DB = {
    // ==============================================
// BOULANGERIE INDUSTRIELLE - MODÈLES COMPLETS
// ==============================================

"petrin_spiral": {
  machine_ref: "petrin_spiral",
  machine_name: "Pétrin spiral",
  machine_role: "Pétrissage de la pâte",
  default_capacity: "100-300 kg/batch",
  default_utilities: "Électricité",
  models: [
    // ===== CHINE =====
    { id: "petrin_cn_econo", origin: "chinese", name: "Pétrin Pro-100", price_ttc: 8900, brand: "Jinfeng", supplier: "Henan Jinfeng Machinery", supplier_status: "Verified Supplier (5 ans)", rating: 4.2, review_count: 156, specs: { power: "7.5 kW", capacity: "100 kg/batch", dimensions: "1500x900x1200 mm", weight: "650 kg", material: "Acier traité" }, delivery: "45-60 jours", warranty: "12 mois", parts_available: "Stock Chine", after_sales: "Support WhatsApp + documentation" },
    { id: "petrin_cn_std", origin: "chinese", name: "Pétrin Pro-200", price_ttc: 14500, brand: "Jinfeng", supplier: "Henan Jinfeng Machinery", supplier_status: "Gold Supplier (8 ans)", rating: 4.6, review_count: 328, specs: { power: "11 kW", capacity: "200 kg/batch", dimensions: "1800x1100x1400 mm", weight: "950 kg", material: "Acier inoxydable 304" }, delivery: "45-60 jours", warranty: "18 mois", parts_available: "Stock Abidjan + Chine", after_sales: "Formation + visio + pièces 72h" },
    { id: "petrin_cn_premium", origin: "chinese", name: "Pétrin Pro-350", price_ttc: 22900, brand: "Jinfeng", supplier: "Henan Jinfeng Machinery", supplier_status: "Gold Supplier (8 ans)", rating: 4.9, review_count: 89, specs: { power: "15 kW", capacity: "350 kg/batch", dimensions: "2000x1250x1550 mm", weight: "1250 kg", material: "Acier inoxydable 316L" }, delivery: "30-45 jours", warranty: "24 mois", parts_available: "Dépôt France + Chine", after_sales: "Technicien local + hotline" },
    
    // ===== CORÉE =====
    { id: "petrin_kr_econo", origin: "korean", name: "Pétrin KR-200", price_ttc: 12500, brand: "Daeyeong", supplier: "Daeyeong Machinery Co.", supplier_status: "Premium Partner (10 ans)", rating: 4.8, review_count: 89, specs: { power: "9 kW", capacity: "200 kg/batch", dimensions: "1600x1000x1300 mm", weight: "720 kg", material: "Acier inoxydable 304" }, delivery: "30-45 jours", warranty: "36 mois", parts_available: "Stock Abidjan + Dépôt France", after_sales: "Technicien local + hotline 24/7" },
    { id: "petrin_kr_std", origin: "korean", name: "Pétrin KR-350", price_ttc: 18500, brand: "Daeyeong", supplier: "Daeyeong Machinery Co.", supplier_status: "Premium Partner (12 ans)", rating: 4.9, review_count: 67, specs: { power: "13 kW", capacity: "350 kg/batch", dimensions: "1900x1150x1450 mm", weight: "980 kg", material: "Acier inoxydable 316L" }, delivery: "30-45 jours", warranty: "48 mois", parts_available: "Stock Abidjan + Dépôt France", after_sales: "Contrat maintenance + formation" },
    
    // ===== EUROPE (Groupe Bongard - France) =====
    { id: "petrin_eu_std", origin: "europe", name: "Pétrin EU-150", price_ttc: 6900, brand: "Bongard", supplier: "Groupe Bongard", supplier_status: "Certified Partner (15 ans)", rating: 4.5, review_count: 45, specs: { power: "6 kW", capacity: "150 kg/batch", dimensions: "1400x850x1100 mm", weight: "550 kg", material: "Acier inoxydable" }, delivery: "15-30 jours", warranty: "6 mois", parts_available: "Stock France", after_sales: "SAV France + pièces 72h" },
    { id: "petrin_eu_premium", origin: "europe", name: "Pétrin EU-250", price_ttc: 9900, brand: "Bongard", supplier: "Groupe Bongard", supplier_status: "Premium Partner (18 ans)", rating: 4.7, review_count: 34, specs: { power: "8 kW", capacity: "250 kg/batch", dimensions: "1700x1000x1250 mm", weight: "780 kg", material: "Acier inoxydable 304" }, delivery: "15-30 jours", warranty: "12 mois", parts_available: "Stock France", after_sales: "Contrat maintenance" }
  ]
},

"diviseuse_bouleuse": {
  machine_ref: "diviseuse_bouleuse",
  machine_name: "Diviseuse-bouleuse",
  machine_role: "Division et boulage de la pâte",
  default_capacity: "800-2000 pains/h",
  default_utilities: "Électricité",
  models: [
    // ===== CHINE =====
    { id: "diviseuse_cn_econo", origin: "chinese", name: "Diviseuse DB-800", price_ttc: 9900, brand: "Sainty", supplier: "Sainty Co., Ltd", supplier_status: "Verified Supplier (4 ans)", rating: 4.1, review_count: 95, specs: { power: "2.2 kW", capacity: "800 pains/h", dimensions: "1300x700x1100 mm", weight: "480 kg", material: "Acier" }, delivery: "45 jours", warranty: "12 mois", parts_available: "Stock Chine", after_sales: "Support technique en ligne" },
    { id: "diviseuse_cn_std", origin: "chinese", name: "Diviseuse DB-1200", price_ttc: 12800, brand: "Sainty", supplier: "Sainty Co., Ltd", supplier_status: "Verified Supplier (6 ans)", rating: 4.3, review_count: 187, specs: { power: "3 kW", capacity: "1200 pains/h", dimensions: "1500x800x1200 mm", weight: "580 kg", material: "Acier" }, delivery: "45 jours", warranty: "12 mois", parts_available: "Stock Chine", after_sales: "Support technique 24/7" },
    { id: "diviseuse_cn_premium", origin: "chinese", name: "Diviseuse DB-2000", price_ttc: 19500, brand: "Sainty", supplier: "Sainty Co., Ltd", supplier_status: "Verified Supplier (6 ans)", rating: 4.7, review_count: 112, specs: { power: "5.5 kW", capacity: "2000 pains/h", dimensions: "1800x900x1350 mm", weight: "820 kg", material: "Acier inoxydable" }, delivery: "60 jours", warranty: "24 mois", parts_available: "Stock Abidjan", after_sales: "Technicien sur site sous 7 jours" },
    
    // ===== CORÉE =====
    { id: "diviseuse_kr_std", origin: "korean", name: "Diviseuse KR-1500", price_ttc: 16800, brand: "Korea Bakery", supplier: "Korea Bakery Tech", supplier_status: "Premium Partner (8 ans)", rating: 4.8, review_count: 78, specs: { power: "4 kW", capacity: "1500 pains/h", dimensions: "1600x900x1250 mm", weight: "680 kg", material: "Acier inoxydable 304" }, delivery: "30-45 jours", warranty: "36 mois", parts_available: "Stock Abidjan", after_sales: "Technicien local + hotline" },
    { id: "diviseuse_kr_premium", origin: "korean", name: "Diviseuse KR-2500", price_ttc: 24500, brand: "Korea Bakery", supplier: "Korea Bakery Tech", supplier_status: "Premium Partner (10 ans)", rating: 4.9, review_count: 56, specs: { power: "6 kW", capacity: "2500 pains/h", dimensions: "1900x1000x1400 mm", weight: "920 kg", material: "Acier inoxydable 316L" }, delivery: "30-45 jours", warranty: "48 mois", parts_available: "Stock Abidjan + Dépôt France", after_sales: "Contrat maintenance + formation" },
    
    // ===== EUROPE (Groupe Bongard - France) =====
    { id: "diviseuse_eu_std", origin: "europe", name: "Diviseuse EU-1000", price_ttc: 7900, brand: "Bongard", supplier: "Groupe Bongard", supplier_status: "Certified Partner (12 ans)", rating: 4.4, review_count: 56, specs: { power: "2.5 kW", capacity: "1000 pains/h", dimensions: "1400x750x1150 mm", weight: "520 kg", material: "Acier inoxydable" }, delivery: "15-30 jours", warranty: "6 mois", parts_available: "Stock France", after_sales: "SAV France + pièces 72h" },
    { id: "diviseuse_eu_premium", origin: "europe", name: "Diviseuse EU-1800", price_ttc: 12500, brand: "Bongard", supplier: "Groupe Bongard", supplier_status: "Premium Partner (15 ans)", rating: 4.7, review_count: 42, specs: { power: "3.5 kW", capacity: "1800 pains/h", dimensions: "1700x850x1300 mm", weight: "720 kg", material: "Acier inoxydable 304" }, delivery: "15-30 jours", warranty: "12 mois", parts_available: "Stock France", after_sales: "Contrat maintenance" }
  ]
},

"faconneuse": {
  machine_ref: "faconneuse",
  machine_name: "Façonneuse",
  machine_role: "Façonnage des pâtons (baguettes, pains)",
  default_capacity: "1000-3000 pains/h",
  default_utilities: "Électricité",
  models: [
    // ===== CHINE =====
    { id: "faconneuse_cn_std", origin: "chinese", name: "Façonneuse F-1500", price_ttc: 8900, brand: "Sainty", supplier: "Sainty Co., Ltd", supplier_status: "Verified Supplier (5 ans)", rating: 4.3, review_count: 78, specs: { power: "1.5 kW", capacity: "1500 pains/h", dimensions: "1800x600x1200 mm", weight: "350 kg", material: "Acier inoxydable" }, delivery: "45 jours", warranty: "12 mois", parts_available: "Stock Chine", after_sales: "Support technique" },
    { id: "faconneuse_cn_premium", origin: "chinese", name: "Façonneuse F-3000", price_ttc: 14900, brand: "Sainty", supplier: "Sainty Co., Ltd", supplier_status: "Verified Supplier (6 ans)", rating: 4.7, review_count: 56, specs: { power: "2.2 kW", capacity: "3000 pains/h", dimensions: "2200x700x1350 mm", weight: "480 kg", material: "Acier inoxydable 304" }, delivery: "60 jours", warranty: "24 mois", parts_available: "Stock Abidjan", after_sales: "Technicien sur site" },
    
    // ===== CORÉE =====
    { id: "faconneuse_kr_std", origin: "korean", name: "Façonneuse KR-2000", price_ttc: 12500, brand: "Korea Bakery", supplier: "Korea Bakery Tech", supplier_status: "Premium Partner (7 ans)", rating: 4.7, review_count: 67, specs: { power: "2 kW", capacity: "2000 pains/h", dimensions: "1900x650x1250 mm", weight: "420 kg", material: "Acier inoxydable 304" }, delivery: "30-45 jours", warranty: "36 mois", parts_available: "Stock Abidjan", after_sales: "Technicien local + hotline" },
    { id: "faconneuse_kr_premium", origin: "korean", name: "Façonneuse KR-3500", price_ttc: 19500, brand: "Korea Bakery", supplier: "Korea Bakery Tech", supplier_status: "Premium Partner (9 ans)", rating: 4.9, review_count: 45, specs: { power: "3 kW", capacity: "3500 pains/h", dimensions: "2400x800x1400 mm", weight: "580 kg", material: "Acier inoxydable 316L" }, delivery: "30-45 jours", warranty: "48 mois", parts_available: "Stock Abidjan + Dépôt France", after_sales: "Contrat maintenance + formation" },
    
    // ===== EUROPE (Groupe Bongard - France) =====
    { id: "faconneuse_eu_std", origin: "europe", name: "Façonneuse EU-1200", price_ttc: 6900, brand: "Bongard", supplier: "Groupe Bongard", supplier_status: "Certified Partner (12 ans)", rating: 4.5, review_count: 56, specs: { power: "1.2 kW", capacity: "1200 pains/h", dimensions: "1700x550x1150 mm", weight: "380 kg", material: "Acier inoxydable" }, delivery: "15-30 jours", warranty: "6 mois", parts_available: "Stock France", after_sales: "SAV France + pièces 72h" },
    { id: "faconneuse_eu_premium", origin: "europe", name: "Façonneuse EU-2500", price_ttc: 10900, brand: "Bongard", supplier: "Groupe Bongard", supplier_status: "Premium Partner (15 ans)", rating: 4.8, review_count: 38, specs: { power: "2 kW", capacity: "2500 pains/h", dimensions: "2100x650x1300 mm", weight: "520 kg", material: "Acier inoxydable 304" }, delivery: "15-30 jours", warranty: "12 mois", parts_available: "Stock France", after_sales: "Contrat maintenance" }
  ]
},

"chambre_pousse": {
  machine_ref: "chambre_pousse",
  machine_name: "Chambre de pousse",
  machine_role: "Fermentation contrôlée de la pâte",
  default_capacity: "50-200 plateaux",
  default_utilities: "Électricité + eau",
  models: [
    // ===== CHINE =====
    { id: "pousse_cn_std", origin: "chinese", name: "Chambre CP-48", price_ttc: 12500, brand: "Jinfeng", supplier: "Henan Jinfeng Machinery", supplier_status: "Certified Partner", rating: 4.4, review_count: 67, specs: { power: "3 kW", capacity: "48 plateaux", dimensions: "1800x1500x2200 mm", weight: "650 kg", material: "Acier inoxydable" }, delivery: "60 jours", warranty: "12 mois", parts_available: "Stock Chine", after_sales: "SAV France" },
    { id: "pousse_cn_premium", origin: "chinese", name: "Chambre CP-96", price_ttc: 19800, brand: "Jinfeng", supplier: "Henan Jinfeng Machinery", supplier_status: "Premium Partner", rating: 4.8, review_count: 42, specs: { power: "5 kW", capacity: "96 plateaux", dimensions: "2200x1800x2500 mm", weight: "950 kg", material: "Acier inoxydable 304" }, delivery: "60 jours", warranty: "24 mois", parts_available: "Stock Chine", after_sales: "Contrat maintenance" },
    
    // ===== CORÉE =====
    { id: "pousse_kr_std", origin: "korean", name: "Chambre KR-60", price_ttc: 16500, brand: "Korea Bakery", supplier: "Korea Bakery Tech", supplier_status: "Premium Partner (8 ans)", rating: 4.7, review_count: 56, specs: { power: "4 kW", capacity: "60 plateaux", dimensions: "1900x1600x2300 mm", weight: "780 kg", material: "Acier inoxydable 304" }, delivery: "30-45 jours", warranty: "36 mois", parts_available: "Stock Abidjan", after_sales: "Technicien local + hotline" },
    { id: "pousse_kr_premium", origin: "korean", name: "Chambre KR-120", price_ttc: 24800, brand: "Korea Bakery", supplier: "Korea Bakery Tech", supplier_status: "Premium Partner (10 ans)", rating: 4.9, review_count: 38, specs: { power: "6 kW", capacity: "120 plateaux", dimensions: "2400x2000x2600 mm", weight: "1200 kg", material: "Acier inoxydable 316L" }, delivery: "30-45 jours", warranty: "48 mois", parts_available: "Stock Abidjan + Dépôt France", after_sales: "Contrat maintenance + formation" },
    
    // ===== EUROPE (Groupe Bongard - France) =====
    { id: "pousse_eu_std", origin: "europe", name: "Chambre EU-40", price_ttc: 8900, brand: "Bongard", supplier: "Groupe Bongard", supplier_status: "Certified Partner (15 ans)", rating: 4.5, review_count: 45, specs: { power: "2.5 kW", capacity: "40 plateaux", dimensions: "1600x1400x2000 mm", weight: "580 kg", material: "Acier inoxydable" }, delivery: "15-30 jours", warranty: "6 mois", parts_available: "Stock France", after_sales: "SAV France + pièces 72h" },
    { id: "pousse_eu_premium", origin: "europe", name: "Chambre EU-80", price_ttc: 14500, brand: "Bongard", supplier: "Groupe Bongard", supplier_status: "Premium Partner (18 ans)", rating: 4.7, review_count: 34, specs: { power: "4 kW", capacity: "80 plateaux", dimensions: "2000x1600x2300 mm", weight: "850 kg", material: "Acier inoxydable 304" }, delivery: "15-30 jours", warranty: "12 mois", parts_available: "Stock France", after_sales: "Contrat maintenance" }
  ]
},

"four_tunnel": {
  machine_ref: "four_tunnel",
  machine_name: "Four à tunnel",
  machine_role: "Cuisson continue",
  default_capacity: "200-500 pains/batch",
  default_utilities: "Électricité ou gaz",
  models: [
    // ===== CHINE =====
    { id: "four_cn_econo", origin: "chinese", name: "Four T-200", price_ttc: 18900, brand: "Jinfeng", supplier: "Henan Jinfeng Machinery", supplier_status: "Certified Partner", rating: 4.2, review_count: 67, specs: { power: "25 kW", capacity: "200 pains/batch", dimensions: "2200x1600x1600 mm", weight: "1400 kg", material: "Acier" }, delivery: "60-75 jours", warranty: "12 mois", parts_available: "Stock Chine", after_sales: "SAV France" },
    { id: "four_cn_std", origin: "chinese", name: "Four T-300", price_ttc: 24800, brand: "Jinfeng", supplier: "Henan Jinfeng Machinery", supplier_status: "Premium Partner", rating: 4.5, review_count: 89, specs: { power: "35 kW", capacity: "300 pains/batch", dimensions: "2500x1800x1800 mm", weight: "1800 kg", material: "Acier inoxydable" }, delivery: "60-75 jours", warranty: "24 mois", parts_available: "Stock Chine", after_sales: "SAV France + pièces 48h" },
    { id: "four_cn_premium", origin: "chinese", name: "Four T-500", price_ttc: 37500, brand: "Jinfeng", supplier: "Henan Jinfeng Machinery", supplier_status: "Premium Partner", rating: 4.9, review_count: 45, specs: { power: "55 kW", capacity: "500 pains/batch", dimensions: "3000x2000x2000 mm", weight: "2500 kg", material: "Acier inoxydable 316L" }, delivery: "45-60 jours", warranty: "36 mois", parts_available: "Stock Chine + expédition rapide", after_sales: "Contrat maintenance inclus" },
    
    // ===== CORÉE =====
    { id: "four_kr_std", origin: "korean", name: "Four KR-350", price_ttc: 32500, brand: "Daeyeong", supplier: "Daeyeong Machinery Co.", supplier_status: "Premium Partner (10 ans)", rating: 4.8, review_count: 78, specs: { power: "40 kW", capacity: "350 pains/batch", dimensions: "2600x1900x1900 mm", weight: "2000 kg", material: "Acier inoxydable 304" }, delivery: "30-45 jours", warranty: "36 mois", parts_available: "Stock Abidjan", after_sales: "Technicien local + hotline" },
    { id: "four_kr_premium", origin: "korean", name: "Four KR-600", price_ttc: 49500, brand: "Daeyeong", supplier: "Daeyeong Machinery Co.", supplier_status: "Premium Partner (12 ans)", rating: 4.9, review_count: 56, specs: { power: "65 kW", capacity: "600 pains/batch", dimensions: "3200x2200x2100 mm", weight: "3000 kg", material: "Acier inoxydable 316L" }, delivery: "30-45 jours", warranty: "48 mois", parts_available: "Stock Abidjan + Dépôt France", after_sales: "Contrat maintenance + formation" },
    
    // ===== EUROPE (Groupe Bongard - France) =====
    { id: "four_eu_std", origin: "europe", name: "Four EU-250", price_ttc: 15900, brand: "Bongard", supplier: "Groupe Bongard", supplier_status: "Certified Partner (15 ans)", rating: 4.5, review_count: 56, specs: { power: "22 kW", capacity: "250 pains/batch", dimensions: "2000x1500x1500 mm", weight: "1200 kg", material: "Acier inoxydable" }, delivery: "15-30 jours", warranty: "6 mois", parts_available: "Stock France", after_sales: "SAV France + pièces 72h" },
    { id: "four_eu_premium", origin: "europe", name: "Four EU-400", price_ttc: 22900, brand: "Bongard", supplier: "Groupe Bongard", supplier_status: "Premium Partner (18 ans)", rating: 4.8, review_count: 42, specs: { power: "30 kW", capacity: "400 pains/batch", dimensions: "2400x1700x1700 mm", weight: "1600 kg", material: "Acier inoxydable 304" }, delivery: "15-30 jours", warranty: "12 mois", parts_available: "Stock France", after_sales: "Contrat maintenance" }
  ]
},

"trancheuse": {
  machine_ref: "trancheuse",
  machine_name: "Trancheuse à pain",
  machine_role: "Tranchage du pain cuit",
  default_capacity: "800-2000 pains/h",
  default_utilities: "Électricité",
  models: [
    // ===== CHINE =====
    { id: "trancheuse_cn_std", origin: "chinese", name: "Trancheuse TR-1000", price_ttc: 4900, brand: "Jinfeng", supplier: "Henan Jinfeng Machinery", supplier_status: "Verified Supplier (4 ans)", rating: 4.2, review_count: 112, specs: { power: "0.75 kW", capacity: "1000 pains/h", dimensions: "1200x800x1400 mm", weight: "180 kg", material: "Acier inoxydable" }, delivery: "45 jours", warranty: "12 mois", parts_available: "Stock Chine", after_sales: "Support technique" },
    { id: "trancheuse_cn_premium", origin: "chinese", name: "Trancheuse TR-2000", price_ttc: 7900, brand: "Jinfeng", supplier: "Henan Jinfeng Machinery", supplier_status: "Gold Supplier (6 ans)", rating: 4.6, review_count: 78, specs: { power: "1.1 kW", capacity: "2000 pains/h", dimensions: "1500x900x1550 mm", weight: "250 kg", material: "Acier inoxydable 304" }, delivery: "60 jours", warranty: "18 mois", parts_available: "Stock Abidjan", after_sales: "Pièces détachées disponibles" },
    
    // ===== CORÉE =====
    { id: "trancheuse_kr_std", origin: "korean", name: "Trancheuse KR-1500", price_ttc: 6900, brand: "Korea Bakery", supplier: "Korea Bakery Tech", supplier_status: "Premium Partner (7 ans)", rating: 4.7, review_count: 67, specs: { power: "1 kW", capacity: "1500 pains/h", dimensions: "1300x850x1450 mm", weight: "220 kg", material: "Acier inoxydable 304" }, delivery: "30-45 jours", warranty: "36 mois", parts_available: "Stock Abidjan", after_sales: "Technicien local + hotline" },
    { id: "trancheuse_kr_premium", origin: "korean", name: "Trancheuse KR-2500", price_ttc: 10500, brand: "Korea Bakery", supplier: "Korea Bakery Tech", supplier_status: "Premium Partner (9 ans)", rating: 4.9, review_count: 45, specs: { power: "1.5 kW", capacity: "2500 pains/h", dimensions: "1600x1000x1600 mm", weight: "320 kg", material: "Acier inoxydable 316L" }, delivery: "30-45 jours", warranty: "48 mois", parts_available: "Stock Abidjan + Dépôt France", after_sales: "Contrat maintenance + formation" },
    
    // ===== EUROPE (Groupe Bongard - France) =====
    { id: "trancheuse_eu_std", origin: "europe", name: "Trancheuse EU-1200", price_ttc: 4200, brand: "Bongard", supplier: "Groupe Bongard", supplier_status: "Certified Partner (12 ans)", rating: 4.4, review_count: 56, specs: { power: "0.7 kW", capacity: "1200 pains/h", dimensions: "1100x750x1350 mm", weight: "160 kg", material: "Acier inoxydable" }, delivery: "15-30 jours", warranty: "6 mois", parts_available: "Stock France", after_sales: "SAV France + pièces 72h" },
    { id: "trancheuse_eu_premium", origin: "europe", name: "Trancheuse EU-1800", price_ttc: 6900, brand: "Bongard", supplier: "Groupe Bongard", supplier_status: "Premium Partner (15 ans)", rating: 4.7, review_count: 38, specs: { power: "1 kW", capacity: "1800 pains/h", dimensions: "1400x850x1500 mm", weight: "230 kg", material: "Acier inoxydable 304" }, delivery: "15-30 jours", warranty: "12 mois", parts_available: "Stock France", after_sales: "Contrat maintenance" }
  ]
},

"emballeuse": {
  machine_ref: "emballeuse",
  machine_name: "Emballeuse sous vide",
  machine_role: "Conditionnement du pain",
  default_capacity: "500-1500 pains/h",
  default_utilities: "Électricité",
  models: [
    // ===== CHINE =====
    { id: "emballeuse_cn_std", origin: "chinese", name: "Emballeuse EM-800", price_ttc: 6900, brand: "Jinfeng", supplier: "Henan Jinfeng Machinery", supplier_status: "Verified Supplier (4 ans)", rating: 4.3, review_count: 95, specs: { power: "1.5 kW", capacity: "800 pains/h", dimensions: "2000x900x1400 mm", weight: "380 kg", material: "Acier inoxydable" }, delivery: "45 jours", warranty: "12 mois", parts_available: "Stock Chine", after_sales: "Support technique" },
    { id: "emballeuse_cn_premium", origin: "chinese", name: "Emballeuse EM-1500", price_ttc: 10900, brand: "Jinfeng", supplier: "Henan Jinfeng Machinery", supplier_status: "Gold Supplier (6 ans)", rating: 4.7, review_count: 64, specs: { power: "2.2 kW", capacity: "1500 pains/h", dimensions: "2500x1000x1550 mm", weight: "520 kg", material: "Acier inoxydable 304" }, delivery: "60 jours", warranty: "24 mois", parts_available: "Stock Abidjan", after_sales: "SAV local" },
    
    // ===== CORÉE =====
    { id: "emballeuse_kr_std", origin: "korean", name: "Emballeuse KR-1200", price_ttc: 9900, brand: "Korea Bakery", supplier: "Korea Bakery Tech", supplier_status: "Premium Partner (7 ans)", rating: 4.7, review_count: 56, specs: { power: "2 kW", capacity: "1200 pains/h", dimensions: "2200x950x1450 mm", weight: "460 kg", material: "Acier inoxydable 304" }, delivery: "30-45 jours", warranty: "36 mois", parts_available: "Stock Abidjan", after_sales: "Technicien local + hotline" },
    { id: "emballeuse_kr_premium", origin: "korean", name: "Emballeuse KR-2000", price_ttc: 14900, brand: "Korea Bakery", supplier: "Korea Bakery Tech", supplier_status: "Premium Partner (9 ans)", rating: 4.9, review_count: 42, specs: { power: "3 kW", capacity: "2000 pains/h", dimensions: "2800x1100x1600 mm", weight: "620 kg", material: "Acier inoxydable 316L" }, delivery: "30-45 jours", warranty: "48 mois", parts_available: "Stock Abidjan + Dépôt France", after_sales: "Contrat maintenance + formation" },
    
    // ===== EUROPE (Groupe Bongard - France) =====
    { id: "emballeuse_eu_std", origin: "europe", name: "Emballeuse EU-600", price_ttc: 5900, brand: "Bongard", supplier: "Groupe Bongard", supplier_status: "Certified Partner (12 ans)", rating: 4.4, review_count: 45, specs: { power: "1.2 kW", capacity: "600 pains/h", dimensions: "1800x800x1350 mm", weight: "340 kg", material: "Acier inoxydable" }, delivery: "15-30 jours", warranty: "6 mois", parts_available: "Stock France", after_sales: "SAV France + pièces 72h" },
    { id: "emballeuse_eu_premium", origin: "europe", name: "Emballeuse EU-1200", price_ttc: 8900, brand: "Bongard", supplier: "Groupe Bongard", supplier_status: "Premium Partner (15 ans)", rating: 4.7, review_count: 34, specs: { power: "1.8 kW", capacity: "1200 pains/h", dimensions: "2300x900x1500 mm", weight: "480 kg", material: "Acier inoxydable 304" }, delivery: "15-30 jours", warranty: "12 mois", parts_available: "Stock France", after_sales: "Contrat maintenance" }
  ]
},
/// ==============================================
// CONSERVERIE DE LÉGUMES - MODÈLES COMPLETS
// ==============================================

"laveuse_decoupeuse": {
  machine_ref: "laveuse_decoupeuse",
  machine_name: "Laveuse-découpeuse",
  machine_role: "Nettoyage et découpe des légumes",
  default_capacity: "500-2000 kg/h",
  default_utilities: "Eau + électricité",
  models: [
    // ===== CHINE =====
    { id: "laveuse_cn_econo", origin: "chinese", name: "Laveuse LD-500", price_ttc: 8900, brand: "Jinfeng Foods", supplier: "Henan Jinfeng Food Machinery", supplier_status: "Verified Supplier (5 ans)", rating: 4.2, review_count: 89, specs: { power: "3 kW", capacity: "500 kg/h", dimensions: "2500x800x1200 mm", weight: "380 kg", material: "Acier inoxydable 304" }, delivery: "45 jours", warranty: "12 mois", parts_available: "Stock Chine", after_sales: "Support technique" },
    { id: "laveuse_cn_std", origin: "chinese", name: "Laveuse LD-1000", price_ttc: 14900, brand: "Jinfeng Foods", supplier: "Henan Jinfeng Food Machinery", supplier_status: "Gold Supplier (7 ans)", rating: 4.5, review_count: 156, specs: { power: "5.5 kW", capacity: "1000 kg/h", dimensions: "3200x1000x1400 mm", weight: "580 kg", material: "Acier inoxydable 304" }, delivery: "45-60 jours", warranty: "18 mois", parts_available: "Stock Abidjan", after_sales: "Formation + pièces 72h" },
    { id: "laveuse_cn_premium", origin: "chinese", name: "Laveuse LD-2000", price_ttc: 23900, brand: "Jinfeng Foods", supplier: "Henan Jinfeng Food Machinery", supplier_status: "Gold Supplier (8 ans)", rating: 4.8, review_count: 67, specs: { power: "7.5 kW", capacity: "2000 kg/h", dimensions: "4000x1200x1600 mm", weight: "850 kg", material: "Acier inoxydable 316L" }, delivery: "60 jours", warranty: "24 mois", parts_available: "Stock France", after_sales: "SAV local" },
    
    // ===== CORÉE =====
    { id: "laveuse_kr_std", origin: "korean", name: "Laveuse KR-1500", price_ttc: 19800, brand: "Daeyeong", supplier: "Daeyeong Machinery Co.", supplier_status: "Premium Partner (8 ans)", rating: 4.7, review_count: 78, specs: { power: "6 kW", capacity: "1500 kg/h", dimensions: "3500x1100x1500 mm", weight: "680 kg", material: "Acier inoxydable 304" }, delivery: "30-45 jours", warranty: "36 mois", parts_available: "Stock Abidjan", after_sales: "Technicien local + hotline" },
    { id: "laveuse_kr_premium", origin: "korean", name: "Laveuse KR-2500", price_ttc: 28900, brand: "Daeyeong", supplier: "Daeyeong Machinery Co.", supplier_status: "Premium Partner (10 ans)", rating: 4.9, review_count: 56, specs: { power: "9 kW", capacity: "2500 kg/h", dimensions: "4200x1300x1700 mm", weight: "950 kg", material: "Acier inoxydable 316L" }, delivery: "30-45 jours", warranty: "48 mois", parts_available: "Stock Abidjan + Dépôt France", after_sales: "Contrat maintenance + formation" },
    
    // ===== EUROPE (Bongard - France) =====
    { id: "laveuse_eu_std", origin: "europe", name: "Laveuse EU-800", price_ttc: 7900, brand: "Bongard", supplier: "Groupe Bongard", supplier_status: "Certified Partner (12 ans)", rating: 4.4, review_count: 45, specs: { power: "4 kW", capacity: "800 kg/h", dimensions: "2800x900x1300 mm", weight: "480 kg", material: "Acier inoxydable" }, delivery: "15-30 jours", warranty: "6 mois", parts_available: "Stock France", after_sales: "SAV France + pièces 72h" },
    { id: "laveuse_eu_premium", origin: "europe", name: "Laveuse EU-1600", price_ttc: 12900, brand: "Bongard", supplier: "Groupe Bongard", supplier_status: "Premium Partner (15 ans)", rating: 4.7, review_count: 34, specs: { power: "6 kW", capacity: "1600 kg/h", dimensions: "3200x1100x1500 mm", weight: "680 kg", material: "Acier inoxydable 304" }, delivery: "15-30 jours", warranty: "12 mois", parts_available: "Stock France", after_sales: "Contrat maintenance" }
  ]
},

"blanchisseur": {
  machine_ref: "blanchisseur",
  machine_name: "Blanchisseur",
  machine_role: "Traitement thermique (blanchiment)",
  default_capacity: "500-2000 kg/h",
  default_utilities: "Électricité + eau + vapeur",
  models: [
    // ===== CHINE =====
    { id: "blanchisseur_cn_std", origin: "chinese", name: "Blanchisseur BL-800", price_ttc: 12500, brand: "Jinfeng Foods", supplier: "Henan Jinfeng Food Machinery", supplier_status: "Verified Supplier (5 ans)", rating: 4.3, review_count: 78, specs: { power: "9 kW", capacity: "800 kg/h", dimensions: "3500x900x1500 mm", weight: "620 kg", material: "Acier inoxydable 304" }, delivery: "45 jours", warranty: "12 mois", parts_available: "Stock Chine", after_sales: "Support technique" },
    { id: "blanchisseur_cn_premium", origin: "chinese", name: "Blanchisseur BL-1500", price_ttc: 19800, brand: "Jinfeng Foods", supplier: "Henan Jinfeng Food Machinery", supplier_status: "Gold Supplier (6 ans)", rating: 4.7, review_count: 112, specs: { power: "15 kW", capacity: "1500 kg/h", dimensions: "4500x1100x1700 mm", weight: "950 kg", material: "Acier inoxydable 304" }, delivery: "60 jours", warranty: "24 mois", parts_available: "Stock Abidjan", after_sales: "Pièces détachées" },
    
    // ===== CORÉE =====
    { id: "blanchisseur_kr_std", origin: "korean", name: "Blanchisseur KR-1200", price_ttc: 16800, brand: "Daeyeong", supplier: "Daeyeong Machinery Co.", supplier_status: "Premium Partner (8 ans)", rating: 4.7, review_count: 56, specs: { power: "12 kW", capacity: "1200 kg/h", dimensions: "3800x1000x1600 mm", weight: "750 kg", material: "Acier inoxydable 304" }, delivery: "30-45 jours", warranty: "36 mois", parts_available: "Stock Abidjan", after_sales: "Technicien local + hotline" },
    { id: "blanchisseur_kr_premium", origin: "korean", name: "Blanchisseur KR-2000", price_ttc: 24800, brand: "Daeyeong", supplier: "Daeyeong Machinery Co.", supplier_status: "Premium Partner (10 ans)", rating: 4.9, review_count: 42, specs: { power: "18 kW", capacity: "2000 kg/h", dimensions: "4800x1200x1800 mm", weight: "1100 kg", material: "Acier inoxydable 316L" }, delivery: "30-45 jours", warranty: "48 mois", parts_available: "Stock Abidjan + Dépôt France", after_sales: "Contrat maintenance + formation" },
    
    // ===== EUROPE (Bongard - France) =====
    { id: "blanchisseur_eu_std", origin: "europe", name: "Blanchisseur EU-600", price_ttc: 8900, brand: "Bongard", supplier: "Groupe Bongard", supplier_status: "Certified Partner (12 ans)", rating: 4.4, review_count: 45, specs: { power: "8 kW", capacity: "600 kg/h", dimensions: "3000x850x1400 mm", weight: "520 kg", material: "Acier inoxydable" }, delivery: "15-30 jours", warranty: "6 mois", parts_available: "Stock France", after_sales: "SAV France + pièces 72h" },
    { id: "blanchisseur_eu_premium", origin: "europe", name: "Blanchisseur EU-1400", price_ttc: 14900, brand: "Bongard", supplier: "Groupe Bongard", supplier_status: "Premium Partner (15 ans)", rating: 4.7, review_count: 34, specs: { power: "14 kW", capacity: "1400 kg/h", dimensions: "4200x1050x1600 mm", weight: "820 kg", material: "Acier inoxydable 304" }, delivery: "15-30 jours", warranty: "12 mois", parts_available: "Stock France", after_sales: "Contrat maintenance" }
  ]
},

"remplisseuse_doseuse": {
  machine_ref: "remplisseuse_doseuse",
  machine_name: "Remplisseuse-doseuse",
  machine_role: "Mise en boîtes/bocaux",
  default_capacity: "1000-5000 unités/h",
  default_utilities: "Électricité + air comprimé",
  models: [
    // ===== CHINE =====
    { id: "remplisseuse_cn_std", origin: "chinese", name: "Remplisseuse RD-2000", price_ttc: 15900, brand: "Sainty Pack", supplier: "Sainty Packaging Machinery", supplier_status: "Verified Supplier (6 ans)", rating: 4.4, review_count: 134, specs: { power: "2.2 kW", capacity: "2000 unités/h", dimensions: "1800x1000x1800 mm", weight: "480 kg", material: "Acier inoxydable 304" }, delivery: "45 jours", warranty: "12 mois", parts_available: "Stock Chine", after_sales: "Support technique" },
    { id: "remplisseuse_cn_premium", origin: "chinese", name: "Remplisseuse RD-5000", price_ttc: 28900, brand: "Sainty Pack", supplier: "Sainty Packaging Machinery", supplier_status: "Gold Supplier (8 ans)", rating: 4.8, review_count: 89, specs: { power: "4 kW", capacity: "5000 unités/h", dimensions: "2500x1200x2000 mm", weight: "780 kg", material: "Acier inoxydable 316L" }, delivery: "60 jours", warranty: "24 mois", parts_available: "Stock Abidjan", after_sales: "SAV local" },
    
    // ===== CORÉE =====
    { id: "remplisseuse_kr_std", origin: "korean", name: "Remplisseuse KR-3000", price_ttc: 21800, brand: "Daeyeong", supplier: "Daeyeong Machinery Co.", supplier_status: "Premium Partner (8 ans)", rating: 4.7, review_count: 67, specs: { power: "3 kW", capacity: "3000 unités/h", dimensions: "2000x1100x1900 mm", weight: "580 kg", material: "Acier inoxydable 304" }, delivery: "30-45 jours", warranty: "36 mois", parts_available: "Stock Abidjan", after_sales: "Technicien local + hotline" },
    { id: "remplisseuse_kr_premium", origin: "korean", name: "Remplisseuse KR-6000", price_ttc: 38900, brand: "Daeyeong", supplier: "Daeyeong Machinery Co.", supplier_status: "Premium Partner (10 ans)", rating: 4.9, review_count: 56, specs: { power: "5.5 kW", capacity: "6000 unités/h", dimensions: "2800x1400x2100 mm", weight: "920 kg", material: "Acier inoxydable 316L" }, delivery: "30-45 jours", warranty: "48 mois", parts_available: "Stock Abidjan + Dépôt France", after_sales: "Contrat maintenance + formation" },
    
    // ===== EUROPE (Bongard - France) =====
    { id: "remplisseuse_eu_std", origin: "europe", name: "Remplisseuse EU-1500", price_ttc: 10900, brand: "Bongard", supplier: "Groupe Bongard", supplier_status: "Certified Partner (12 ans)", rating: 4.4, review_count: 45, specs: { power: "2 kW", capacity: "1500 unités/h", dimensions: "1600x900x1700 mm", weight: "420 kg", material: "Acier inoxydable" }, delivery: "15-30 jours", warranty: "6 mois", parts_available: "Stock France", after_sales: "SAV France + pièces 72h" },
    { id: "remplisseuse_eu_premium", origin: "europe", name: "Remplisseuse EU-4000", price_ttc: 17900, brand: "Bongard", supplier: "Groupe Bongard", supplier_status: "Premium Partner (15 ans)", rating: 4.7, review_count: 34, specs: { power: "3 kW", capacity: "4000 unités/h", dimensions: "2200x1200x1900 mm", weight: "680 kg", material: "Acier inoxydable 304" }, delivery: "15-30 jours", warranty: "12 mois", parts_available: "Stock France", after_sales: "Contrat maintenance" }
  ]
},

"scelleuse_operculieuse": {
  machine_ref: "scelleuse_operculieuse",
  machine_name: "Scelleuse-operculieuse",
  machine_role: "Fermeture hermétique",
  default_capacity: "1000-5000 unités/h",
  default_utilities: "Électricité",
  models: [
    // ===== CHINE =====
    { id: "scelleuse_cn_std", origin: "chinese", name: "Scelleuse SC-2000", price_ttc: 9900, brand: "Sainty Pack", supplier: "Sainty Packaging Machinery", supplier_status: "Verified Supplier (5 ans)", rating: 4.3, review_count: 98, specs: { power: "1.5 kW", capacity: "2000 unités/h", dimensions: "1200x800x1600 mm", weight: "320 kg", material: "Acier inoxydable 304" }, delivery: "45 jours", warranty: "12 mois", parts_available: "Stock Chine", after_sales: "Support technique" },
    { id: "scelleuse_cn_premium", origin: "chinese", name: "Scelleuse SC-5000", price_ttc: 17900, brand: "Sainty Pack", supplier: "Sainty Packaging Machinery", supplier_status: "Gold Supplier (7 ans)", rating: 4.6, review_count: 76, specs: { power: "2.2 kW", capacity: "5000 unités/h", dimensions: "1600x1000x1800 mm", weight: "520 kg", material: "Acier inoxydable 304" }, delivery: "60 jours", warranty: "18 mois", parts_available: "Stock Abidjan", after_sales: "Pièces disponibles" },
    
    // ===== CORÉE =====
    { id: "scelleuse_kr_std", origin: "korean", name: "Scelleuse KR-3000", price_ttc: 13900, brand: "Daeyeong", supplier: "Daeyeong Machinery Co.", supplier_status: "Premium Partner (7 ans)", rating: 4.7, review_count: 56, specs: { power: "1.8 kW", capacity: "3000 unités/h", dimensions: "1400x900x1700 mm", weight: "420 kg", material: "Acier inoxydable 304" }, delivery: "30-45 jours", warranty: "36 mois", parts_available: "Stock Abidjan", after_sales: "Technicien local + hotline" },
    { id: "scelleuse_kr_premium", origin: "korean", name: "Scelleuse KR-6000", price_ttc: 22900, brand: "Daeyeong", supplier: "Daeyeong Machinery Co.", supplier_status: "Premium Partner (9 ans)", rating: 4.9, review_count: 42, specs: { power: "3 kW", capacity: "6000 unités/h", dimensions: "1800x1200x1900 mm", weight: "650 kg", material: "Acier inoxydable 316L" }, delivery: "30-45 jours", warranty: "48 mois", parts_available: "Stock Abidjan + Dépôt France", after_sales: "Contrat maintenance + formation" },
    
    // ===== EUROPE (Bongard - France) =====
    { id: "scelleuse_eu_std", origin: "europe", name: "Scelleuse EU-1500", price_ttc: 6900, brand: "Bongard", supplier: "Groupe Bongard", supplier_status: "Certified Partner (12 ans)", rating: 4.4, review_count: 45, specs: { power: "1.2 kW", capacity: "1500 unités/h", dimensions: "1100x700x1500 mm", weight: "280 kg", material: "Acier inoxydable" }, delivery: "15-30 jours", warranty: "6 mois", parts_available: "Stock France", after_sales: "SAV France + pièces 72h" },
    { id: "scelleuse_eu_premium", origin: "europe", name: "Scelleuse EU-4000", price_ttc: 12900, brand: "Bongard", supplier: "Groupe Bongard", supplier_status: "Premium Partner (15 ans)", rating: 4.7, review_count: 34, specs: { power: "2 kW", capacity: "4000 unités/h", dimensions: "1500x1000x1700 mm", weight: "480 kg", material: "Acier inoxydable 304" }, delivery: "15-30 jours", warranty: "12 mois", parts_available: "Stock France", after_sales: "Contrat maintenance" }
  ]
},

"autoclave": {
  machine_ref: "autoclave",
  machine_name: "Autoclave (stérilisateur)",
  machine_role: "Stérilisation haute température",
  default_capacity: "500-2000 boîtes/batch",
  default_utilities: "Électricité + vapeur + eau",
  models: [
    // ===== CHINE =====
    { id: "autoclave_cn_std", origin: "chinese", name: "Autoclave AT-500", price_ttc: 22500, brand: "Jinfeng Foods", supplier: "Henan Jinfeng Food Machinery", supplier_status: "Gold Supplier (6 ans)", rating: 4.5, review_count: 112, specs: { power: "18 kW", capacity: "500 boîtes/batch", dimensions: "2200x1500x2000 mm", weight: "1200 kg", material: "Acier inoxydable 304" }, delivery: "60-75 jours", warranty: "12 mois", parts_available: "Stock Chine", after_sales: "Support technique" },
    { id: "autoclave_cn_premium", origin: "chinese", name: "Autoclave AT-1200", price_ttc: 38500, brand: "Jinfeng Foods", supplier: "Henan Jinfeng Food Machinery", supplier_status: "Gold Supplier (8 ans)", rating: 4.9, review_count: 67, specs: { power: "30 kW", capacity: "1200 boîtes/batch", dimensions: "2800x1800x2200 mm", weight: "2100 kg", material: "Acier inoxydable 316L" }, delivery: "75 jours", warranty: "24 mois", parts_available: "Stock France", after_sales: "Contrat maintenance" },
    
    // ===== CORÉE =====
    { id: "autoclave_kr_std", origin: "korean", name: "Autoclave KR-800", price_ttc: 29800, brand: "Daeyeong", supplier: "Daeyeong Machinery Co.", supplier_status: "Premium Partner (8 ans)", rating: 4.8, review_count: 78, specs: { power: "22 kW", capacity: "800 boîtes/batch", dimensions: "2400x1600x2100 mm", weight: "1500 kg", material: "Acier inoxydable 304" }, delivery: "30-45 jours", warranty: "36 mois", parts_available: "Stock Abidjan", after_sales: "Technicien local + hotline" },
    { id: "autoclave_kr_premium", origin: "korean", name: "Autoclave KR-1500", price_ttc: 45900, brand: "Daeyeong", supplier: "Daeyeong Machinery Co.", supplier_status: "Premium Partner (10 ans)", rating: 4.9, review_count: 56, specs: { power: "35 kW", capacity: "1500 boîtes/batch", dimensions: "3200x2000x2400 mm", weight: "2500 kg", material: "Acier inoxydable 316L" }, delivery: "30-45 jours", warranty: "48 mois", parts_available: "Stock Abidjan + Dépôt France", after_sales: "Contrat maintenance + formation" },
    
    // ===== EUROPE (Bongard - France) =====
    { id: "autoclave_eu_std", origin: "europe", name: "Autoclave EU-400", price_ttc: 15900, brand: "Bongard", supplier: "Groupe Bongard", supplier_status: "Certified Partner (15 ans)", rating: 4.5, review_count: 45, specs: { power: "15 kW", capacity: "400 boîtes/batch", dimensions: "2000x1300x1800 mm", weight: "950 kg", material: "Acier inoxydable" }, delivery: "15-30 jours", warranty: "6 mois", parts_available: "Stock France", after_sales: "SAV France + pièces 72h" },
    { id: "autoclave_eu_premium", origin: "europe", name: "Autoclave EU-1000", price_ttc: 24900, brand: "Bongard", supplier: "Groupe Bongard", supplier_status: "Premium Partner (18 ans)", rating: 4.8, review_count: 34, specs: { power: "25 kW", capacity: "1000 boîtes/batch", dimensions: "2600x1700x2100 mm", weight: "1600 kg", material: "Acier inoxydable 304" }, delivery: "15-30 jours", warranty: "12 mois", parts_available: "Stock France", after_sales: "Contrat maintenance" }
  ]
},

"etiqueteuse": {
  machine_ref: "etiqueteuse",
  machine_name: "Étiqeteuse",
  machine_role: "Pose des étiquettes",
  default_capacity: "1000-5000 unités/h",
  default_utilities: "Électricité",
  models: [
    // ===== CHINE =====
    { id: "etiqueteuse_cn_std", origin: "chinese", name: "Étiqeteuse ET-2000", price_ttc: 5900, brand: "Sainty Pack", supplier: "Sainty Packaging Machinery", supplier_status: "Verified Supplier (4 ans)", rating: 4.2, review_count: 145, specs: { power: "0.75 kW", capacity: "2000 unités/h", dimensions: "1500x800x1400 mm", weight: "180 kg", material: "Acier inoxydable" }, delivery: "30 jours", warranty: "12 mois", parts_available: "Stock Chine", after_sales: "Support technique" },
    { id: "etiqueteuse_cn_premium", origin: "chinese", name: "Étiqeteuse ET-5000", price_ttc: 10900, brand: "Sainty Pack", supplier: "Sainty Packaging Machinery", supplier_status: "Gold Supplier (6 ans)", rating: 4.7, review_count: 89, specs: { power: "1.1 kW", capacity: "5000 unités/h", dimensions: "2000x1000x1600 mm", weight: "280 kg", material: "Acier inoxydable 304" }, delivery: "45 jours", warranty: "18 mois", parts_available: "Stock Abidjan", after_sales: "SAV local" },
    
    // ===== CORÉE =====
    { id: "etiqueteuse_kr_std", origin: "korean", name: "Étiqeteuse KR-3000", price_ttc: 7900, brand: "Daeyeong", supplier: "Daeyeong Machinery Co.", supplier_status: "Premium Partner (7 ans)", rating: 4.7, review_count: 56, specs: { power: "0.9 kW", capacity: "3000 unités/h", dimensions: "1600x900x1500 mm", weight: "220 kg", material: "Acier inoxydable 304" }, delivery: "30-45 jours", warranty: "36 mois", parts_available: "Stock Abidjan", after_sales: "Technicien local + hotline" },
    { id: "etiqueteuse_kr_premium", origin: "korean", name: "Étiqeteuse KR-6000", price_ttc: 12900, brand: "Daeyeong", supplier: "Daeyeong Machinery Co.", supplier_status: "Premium Partner (9 ans)", rating: 4.9, review_count: 42, specs: { power: "1.5 kW", capacity: "6000 unités/h", dimensions: "2200x1100x1700 mm", weight: "320 kg", material: "Acier inoxydable 316L" }, delivery: "30-45 jours", warranty: "48 mois", parts_available: "Stock Abidjan + Dépôt France", after_sales: "Contrat maintenance + formation" },
    
    // ===== EUROPE (Bongard - France) =====
    { id: "etiqueteuse_eu_std", origin: "europe", name: "Étiqeteuse EU-1500", price_ttc: 4200, brand: "Bongard", supplier: "Groupe Bongard", supplier_status: "Certified Partner (12 ans)", rating: 4.4, review_count: 45, specs: { power: "0.6 kW", capacity: "1500 unités/h", dimensions: "1300x700x1350 mm", weight: "150 kg", material: "Acier inoxydable" }, delivery: "15-30 jours", warranty: "6 mois", parts_available: "Stock France", after_sales: "SAV France + pièces 72h" },
    { id: "etiqueteuse_eu_premium", origin: "europe", name: "Étiqeteuse EU-4000", price_ttc: 7900, brand: "Bongard", supplier: "Groupe Bongard", supplier_status: "Premium Partner (15 ans)", rating: 4.7, review_count: 34, specs: { power: "1 kW", capacity: "4000 unités/h", dimensions: "1800x900x1500 mm", weight: "250 kg", material: "Acier inoxydable 304" }, delivery: "15-30 jours", warranty: "12 mois", parts_available: "Stock France", after_sales: "Contrat maintenance" }
  ]
},

"cartonneuse_emballeuse": {
  machine_ref: "cartonneuse_emballeuse",
  machine_name: "Cartonneuse / Emballeuse",
  machine_role: "Conditionnement secondaire en cartons",
  default_capacity: "500-2000 cartons/h",
  default_utilities: "Électricité + air comprimé",
  models: [
    // ===== CHINE =====
    { id: "cartonneuse_cn_std", origin: "chinese", name: "Cartonneuse CA-500", price_ttc: 18900, brand: "Jinfeng Pack", supplier: "Henan Jinfeng Packaging", supplier_status: "Verified Supplier (5 ans)", rating: 4.3, review_count: 78, specs: { power: "3 kW", capacity: "500 cartons/h", dimensions: "3000x1500x1800 mm", weight: "850 kg", material: "Acier inoxydable 304" }, delivery: "60 jours", warranty: "12 mois", parts_available: "Stock Chine", after_sales: "Support technique" },
    { id: "cartonneuse_cn_premium", origin: "chinese", name: "Cartonneuse CA-1500", price_ttc: 32900, brand: "Jinfeng Pack", supplier: "Henan Jinfeng Packaging", supplier_status: "Gold Supplier (7 ans)", rating: 4.8, review_count: 56, specs: { power: "5.5 kW", capacity: "1500 cartons/h", dimensions: "4000x2000x2000 mm", weight: "1450 kg", material: "Acier inoxydable 304" }, delivery: "75 jours", warranty: "24 mois", parts_available: "Stock Abidjan", after_sales: "Contrat maintenance" },
    
    // ===== CORÉE =====
    { id: "cartonneuse_kr_std", origin: "korean", name: "Cartonneuse KR-800", price_ttc: 24800, brand: "Daeyeong", supplier: "Daeyeong Machinery Co.", supplier_status: "Premium Partner (8 ans)", rating: 4.7, review_count: 56, specs: { power: "4 kW", capacity: "800 cartons/h", dimensions: "3200x1600x1900 mm", weight: "980 kg", material: "Acier inoxydable 304" }, delivery: "30-45 jours", warranty: "36 mois", parts_available: "Stock Abidjan", after_sales: "Technicien local + hotline" },
    { id: "cartonneuse_kr_premium", origin: "korean", name: "Cartonneuse KR-2000", price_ttc: 39900, brand: "Daeyeong", supplier: "Daeyeong Machinery Co.", supplier_status: "Premium Partner (10 ans)", rating: 4.9, review_count: 42, specs: { power: "7 kW", capacity: "2000 cartons/h", dimensions: "4500x2200x2200 mm", weight: "1800 kg", material: "Acier inoxydable 316L" }, delivery: "30-45 jours", warranty: "48 mois", parts_available: "Stock Abidjan + Dépôt France", after_sales: "Contrat maintenance + formation" },
    
    // ===== EUROPE (Bongard - France) =====
    { id: "cartonneuse_eu_std", origin: "europe", name: "Cartonneuse EU-400", price_ttc: 12900, brand: "Bongard", supplier: "Groupe Bongard", supplier_status: "Certified Partner (15 ans)", rating: 4.4, review_count: 45, specs: { power: "2.5 kW", capacity: "400 cartons/h", dimensions: "2500x1300x1600 mm", weight: "720 kg", material: "Acier inoxydable" }, delivery: "15-30 jours", warranty: "6 mois", parts_available: "Stock France", after_sales: "SAV France + pièces 72h" },
    { id: "cartonneuse_eu_premium", origin: "europe", name: "Cartonneuse EU-1200", price_ttc: 21900, brand: "Bongard", supplier: "Groupe Bongard", supplier_status: "Premium Partner (18 ans)", rating: 4.8, review_count: 34, specs: { power: "4.5 kW", capacity: "1200 cartons/h", dimensions: "3500x1800x2000 mm", weight: "1250 kg", material: "Acier inoxydable 304" }, delivery: "15-30 jours", warranty: "12 mois", parts_available: "Stock France", after_sales: "Contrat maintenance" }
  ]
},
  // ==============================================
// BISCUITERIE INDUSTRIELLE - MODÈLES COMPLETS
// ==============================================

"melangeur_biscuiterie": {
  machine_ref: "melangeur_biscuiterie",
  machine_name: "Mélangeur industriel",
  machine_role: "Mélange des ingrédients (farine, sucre, beurre)",
  default_capacity: "100-500 kg/batch",
  default_utilities: "Électricité",
  models: [
    // ===== CHINE =====
    { id: "melangeur_cn_econo", origin: "chinese", name: "Mélangeur MB-200", price_ttc: 7900, brand: "Jinfeng Foods", supplier: "Henan Jinfeng Food Machinery", supplier_status: "Verified Supplier (4 ans)", rating: 4.2, review_count: 112, specs: { power: "5.5 kW", capacity: "150 kg/batch", dimensions: "1400x800x1500 mm", weight: "450 kg", material: "Acier inoxydable 304" }, delivery: "45 jours", warranty: "12 mois", parts_available: "Stock Chine", after_sales: "Support technique" },
    { id: "melangeur_cn_std", origin: "chinese", name: "Mélangeur MB-350", price_ttc: 12900, brand: "Jinfeng Foods", supplier: "Henan Jinfeng Food Machinery", supplier_status: "Gold Supplier (7 ans)", rating: 4.6, review_count: 234, specs: { power: "11 kW", capacity: "300 kg/batch", dimensions: "1800x1000x1700 mm", weight: "780 kg", material: "Acier inoxydable 304" }, delivery: "45-60 jours", warranty: "18 mois", parts_available: "Stock Abidjan", after_sales: "Formation + pièces 72h" },
    { id: "melangeur_cn_premium", origin: "chinese", name: "Mélangeur MB-500", price_ttc: 18900, brand: "Jinfeng Foods", supplier: "Henan Jinfeng Food Machinery", supplier_status: "Gold Supplier (8 ans)", rating: 4.9, review_count: 78, specs: { power: "15 kW", capacity: "500 kg/batch", dimensions: "2200x1200x1900 mm", weight: "1200 kg", material: "Acier inoxydable 316L" }, delivery: "60 jours", warranty: "24 mois", parts_available: "Dépôt France", after_sales: "Technicien local" },
    
    // ===== CORÉE =====
    { id: "melangeur_kr_std", origin: "korean", name: "Mélangeur KR-400", price_ttc: 16800, brand: "Daeyeong", supplier: "Daeyeong Machinery Co.", supplier_status: "Premium Partner (8 ans)", rating: 4.7, review_count: 56, specs: { power: "12 kW", capacity: "400 kg/batch", dimensions: "1900x1100x1800 mm", weight: "850 kg", material: "Acier inoxydable 304" }, delivery: "30-45 jours", warranty: "36 mois", parts_available: "Stock Abidjan", after_sales: "Technicien local + hotline" },
    { id: "melangeur_kr_premium", origin: "korean", name: "Mélangeur KR-600", price_ttc: 25900, brand: "Daeyeong", supplier: "Daeyeong Machinery Co.", supplier_status: "Premium Partner (10 ans)", rating: 4.9, review_count: 42, specs: { power: "18 kW", capacity: "600 kg/batch", dimensions: "2400x1300x2000 mm", weight: "1350 kg", material: "Acier inoxydable 316L" }, delivery: "30-45 jours", warranty: "48 mois", parts_available: "Stock Abidjan + Dépôt France", after_sales: "Contrat maintenance + formation" },
    
    // ===== EUROPE (Bongard - France) =====
    { id: "melangeur_eu_std", origin: "europe", name: "Mélangeur EU-250", price_ttc: 6900, brand: "Bongard", supplier: "Groupe Bongard", supplier_status: "Certified Partner (12 ans)", rating: 4.4, review_count: 45, specs: { power: "8 kW", capacity: "250 kg/batch", dimensions: "1600x900x1600 mm", weight: "580 kg", material: "Acier inoxydable" }, delivery: "15-30 jours", warranty: "6 mois", parts_available: "Stock France", after_sales: "SAV France + pièces 72h" },
    { id: "melangeur_eu_premium", origin: "europe", name: "Mélangeur EU-450", price_ttc: 12900, brand: "Bongard", supplier: "Groupe Bongard", supplier_status: "Premium Partner (15 ans)", rating: 4.7, review_count: 34, specs: { power: "14 kW", capacity: "450 kg/batch", dimensions: "2100x1100x1850 mm", weight: "950 kg", material: "Acier inoxydable 304" }, delivery: "15-30 jours", warranty: "12 mois", parts_available: "Stock France", after_sales: "Contrat maintenance" }
  ]
},

"lamineuse_biscuiterie": {
  machine_ref: "lamineuse_biscuiterie",
  machine_name: "Lamineuse",
  machine_role: "Aplatissement de la pâte",
  default_capacity: "500-2000 kg/h",
  default_utilities: "Électricité",
  models: [
    // ===== CHINE =====
    { id: "lamineuse_cn_std", origin: "chinese", name: "Lamineuse LM-1000", price_ttc: 10900, brand: "Sainty Foods", supplier: "Sainty Food Machinery", supplier_status: "Verified Supplier (5 ans)", rating: 4.3, review_count: 89, specs: { power: "3 kW", capacity: "800 kg/h", dimensions: "2500x1000x1200 mm", weight: "650 kg", material: "Acier inoxydable 304" }, delivery: "45 jours", warranty: "12 mois", parts_available: "Stock Chine", after_sales: "Support technique" },
    { id: "lamineuse_cn_premium", origin: "chinese", name: "Lamineuse LM-2000", price_ttc: 18900, brand: "Sainty Foods", supplier: "Sainty Food Machinery", supplier_status: "Gold Supplier (6 ans)", rating: 4.7, review_count: 56, specs: { power: "5.5 kW", capacity: "1600 kg/h", dimensions: "3200x1200x1400 mm", weight: "950 kg", material: "Acier inoxydable 304" }, delivery: "60 jours", warranty: "24 mois", parts_available: "Stock Abidjan", after_sales: "SAV local" },
    
    // ===== CORÉE =====
    { id: "lamineuse_kr_std", origin: "korean", name: "Lamineuse KR-1500", price_ttc: 14900, brand: "Korea Bakery", supplier: "Korea Bakery Tech", supplier_status: "Premium Partner (7 ans)", rating: 4.6, review_count: 67, specs: { power: "4 kW", capacity: "1200 kg/h", dimensions: "2700x1100x1300 mm", weight: "780 kg", material: "Acier inoxydable 304" }, delivery: "30-45 jours", warranty: "36 mois", parts_available: "Stock Abidjan", after_sales: "Technicien local + hotline" },
    { id: "lamineuse_kr_premium", origin: "korean", name: "Lamineuse KR-2500", price_ttc: 22900, brand: "Korea Bakery", supplier: "Korea Bakery Tech", supplier_status: "Premium Partner (9 ans)", rating: 4.9, review_count: 45, specs: { power: "7 kW", capacity: "2000 kg/h", dimensions: "3500x1300x1500 mm", weight: "1150 kg", material: "Acier inoxydable 316L" }, delivery: "30-45 jours", warranty: "48 mois", parts_available: "Stock Abidjan + Dépôt France", after_sales: "Contrat maintenance + formation" },
    
    // ===== EUROPE (Bongard - France) =====
    { id: "lamineuse_eu_std", origin: "europe", name: "Lamineuse EU-800", price_ttc: 7900, brand: "Bongard", supplier: "Groupe Bongard", supplier_status: "Certified Partner (12 ans)", rating: 4.4, review_count: 45, specs: { power: "3 kW", capacity: "800 kg/h", dimensions: "2300x900x1200 mm", weight: "580 kg", material: "Acier inoxydable" }, delivery: "15-30 jours", warranty: "6 mois", parts_available: "Stock France", after_sales: "SAV France + pièces 72h" },
    { id: "lamineuse_eu_premium", origin: "europe", name: "Lamineuse EU-1800", price_ttc: 13900, brand: "Bongard", supplier: "Groupe Bongard", supplier_status: "Premium Partner (15 ans)", rating: 4.7, review_count: 34, specs: { power: "5 kW", capacity: "1800 kg/h", dimensions: "3100x1200x1400 mm", weight: "920 kg", material: "Acier inoxydable 304" }, delivery: "15-30 jours", warranty: "12 mois", parts_available: "Stock France", after_sales: "Contrat maintenance" }
  ]
},

"faconneuse_rotative": {
  machine_ref: "faconneuse_rotative",
  machine_name: "Façonneuse rotative",
  machine_role: "Formage des biscuits (découpe, formage)",
  default_capacity: "500-3000 kg/h",
  default_utilities: "Électricité",
  models: [
    // ===== CHINE =====
    { id: "rotative_cn_std", origin: "chinese", name: "Rotative RC-1000", price_ttc: 14900, brand: "Sainty Foods", supplier: "Sainty Food Machinery", supplier_status: "Verified Supplier (6 ans)", rating: 4.4, review_count: 134, specs: { power: "4 kW", capacity: "800 kg/h", dimensions: "2200x900x1500 mm", weight: "850 kg", material: "Acier inoxydable 304" }, delivery: "45 jours", warranty: "12 mois", parts_available: "Stock Chine", after_sales: "Support technique" },
    { id: "rotative_cn_plus", origin: "chinese", name: "Rotative RC-2000", price_ttc: 23900, brand: "Sainty Foods", supplier: "Sainty Food Machinery", supplier_status: "Gold Supplier (7 ans)", rating: 4.7, review_count: 98, specs: { power: "7.5 kW", capacity: "1600 kg/h", dimensions: "2800x1100x1700 mm", weight: "1250 kg", material: "Acier inoxydable 304" }, delivery: "60 jours", warranty: "18 mois", parts_available: "Stock Abidjan", after_sales: "Pièces détachées" },
    { id: "rotative_cn_premium", origin: "chinese", name: "Rotative RC-3500", price_ttc: 35900, brand: "Sainty Foods", supplier: "Sainty Food Machinery", supplier_status: "Gold Supplier (8 ans)", rating: 4.9, review_count: 67, specs: { power: "11 kW", capacity: "2500 kg/h", dimensions: "3500x1300x1900 mm", weight: "1850 kg", material: "Acier inoxydable 316L" }, delivery: "75 jours", warranty: "24 mois", parts_available: "Stock France", after_sales: "Contrat maintenance" },
    
    // ===== CORÉE =====
    { id: "rotative_kr_std", origin: "korean", name: "Rotative KR-1500", price_ttc: 19900, brand: "Korea Bakery", supplier: "Korea Bakery Tech", supplier_status: "Premium Partner (8 ans)", rating: 4.7, review_count: 56, specs: { power: "5.5 kW", capacity: "1200 kg/h", dimensions: "2400x1000x1600 mm", weight: "950 kg", material: "Acier inoxydable 304" }, delivery: "30-45 jours", warranty: "36 mois", parts_available: "Stock Abidjan", after_sales: "Technicien local + hotline" },
    { id: "rotative_kr_premium", origin: "korean", name: "Rotative KR-3000", price_ttc: 29900, brand: "Korea Bakery", supplier: "Korea Bakery Tech", supplier_status: "Premium Partner (10 ans)", rating: 4.9, review_count: 42, specs: { power: "9 kW", capacity: "2500 kg/h", dimensions: "3000x1200x1800 mm", weight: "1500 kg", material: "Acier inoxydable 316L" }, delivery: "30-45 jours", warranty: "48 mois", parts_available: "Stock Abidjan + Dépôt France", after_sales: "Contrat maintenance + formation" },
    
    // ===== EUROPE (Bongard - France) =====
    { id: "rotative_eu_std", origin: "europe", name: "Rotative EU-1200", price_ttc: 10900, brand: "Bongard", supplier: "Groupe Bongard", supplier_status: "Certified Partner (12 ans)", rating: 4.4, review_count: 45, specs: { power: "4.5 kW", capacity: "1200 kg/h", dimensions: "2200x900x1500 mm", weight: "780 kg", material: "Acier inoxydable" }, delivery: "15-30 jours", warranty: "6 mois", parts_available: "Stock France", after_sales: "SAV France + pièces 72h" },
    { id: "rotative_eu_premium", origin: "europe", name: "Rotative EU-2500", price_ttc: 17900, brand: "Bongard", supplier: "Groupe Bongard", supplier_status: "Premium Partner (15 ans)", rating: 4.7, review_count: 34, specs: { power: "7.5 kW", capacity: "2500 kg/h", dimensions: "2800x1100x1700 mm", weight: "1200 kg", material: "Acier inoxydable 304" }, delivery: "15-30 jours", warranty: "12 mois", parts_available: "Stock France", after_sales: "Contrat maintenance" }
  ]
},

"four_biscuiterie": {
  machine_ref: "four_biscuiterie",
  machine_name: "Four à biscuits (tunnel)",
  machine_role: "Cuisson continue des biscuits",
  default_capacity: "500-3000 kg/h",
  default_utilities: "Électricité ou gaz",
  models: [
    // ===== CHINE =====
    { id: "four_biscuit_cn_econo", origin: "chinese", name: "Four BT-500", price_ttc: 22900, brand: "Jinfeng Foods", supplier: "Henan Jinfeng Food Machinery", supplier_status: "Certified Partner", rating: 4.3, review_count: 78, specs: { power: "30 kW", capacity: "500 kg/h", dimensions: "8000x1800x1600 mm", weight: "3500 kg", material: "Acier inoxydable 304" }, delivery: "60-75 jours", warranty: "12 mois", parts_available: "Stock Chine", after_sales: "SAV France" },
    { id: "four_biscuit_cn_std", origin: "chinese", name: "Four BT-1200", price_ttc: 38900, brand: "Jinfeng Foods", supplier: "Henan Jinfeng Food Machinery", supplier_status: "Premium Partner", rating: 4.7, review_count: 112, specs: { power: "55 kW", capacity: "1200 kg/h", dimensions: "12000x2000x1800 mm", weight: "5800 kg", material: "Acier inoxydable 304" }, delivery: "75-90 jours", warranty: "24 mois", parts_available: "Stock Chine", after_sales: "SAV France + pièces 48h" },
    { id: "four_biscuit_cn_premium", origin: "chinese", name: "Four BT-2500", price_ttc: 58900, brand: "Jinfeng Foods", supplier: "Henan Jinfeng Food Machinery", supplier_status: "Premium Partner", rating: 4.9, review_count: 45, specs: { power: "85 kW", capacity: "2500 kg/h", dimensions: "18000x2400x2000 mm", weight: "8500 kg", material: "Acier inoxydable 316L" }, delivery: "90 jours", warranty: "36 mois", parts_available: "Stock France", after_sales: "Contrat maintenance inclus" },
    
    // ===== CORÉE =====
    { id: "four_biscuit_kr_std", origin: "korean", name: "Four KR-1000", price_ttc: 34900, brand: "Daeyeong", supplier: "Daeyeong Machinery Co.", supplier_status: "Premium Partner (8 ans)", rating: 4.7, review_count: 56, specs: { power: "45 kW", capacity: "1000 kg/h", dimensions: "10000x1900x1700 mm", weight: "4200 kg", material: "Acier inoxydable 304" }, delivery: "30-45 jours", warranty: "36 mois", parts_available: "Stock Abidjan", after_sales: "Technicien local + hotline" },
    { id: "four_biscuit_kr_premium", origin: "korean", name: "Four KR-2000", price_ttc: 52900, brand: "Daeyeong", supplier: "Daeyeong Machinery Co.", supplier_status: "Premium Partner (10 ans)", rating: 4.9, review_count: 42, specs: { power: "75 kW", capacity: "2000 kg/h", dimensions: "14000x2200x1900 mm", weight: "6500 kg", material: "Acier inoxydable 316L" }, delivery: "30-45 jours", warranty: "48 mois", parts_available: "Stock Abidjan + Dépôt France", after_sales: "Contrat maintenance + formation" },
    
    // ===== EUROPE (Bongard - France) =====
    { id: "four_biscuit_eu_std", origin: "europe", name: "Four EU-800", price_ttc: 18900, brand: "Bongard", supplier: "Groupe Bongard", supplier_status: "Certified Partner (15 ans)", rating: 4.5, review_count: 45, specs: { power: "35 kW", capacity: "800 kg/h", dimensions: "9000x1700x1600 mm", weight: "3500 kg", material: "Acier inoxydable" }, delivery: "15-30 jours", warranty: "6 mois", parts_available: "Stock France", after_sales: "SAV France + pièces 72h" },
    { id: "four_biscuit_eu_premium", origin: "europe", name: "Four EU-1800", price_ttc: 29900, brand: "Bongard", supplier: "Groupe Bongard", supplier_status: "Premium Partner (18 ans)", rating: 4.8, review_count: 34, specs: { power: "65 kW", capacity: "1800 kg/h", dimensions: "13000x2100x1800 mm", weight: "5500 kg", material: "Acier inoxydable 304" }, delivery: "15-30 jours", warranty: "12 mois", parts_available: "Stock France", after_sales: "Contrat maintenance" }
  ]
},

"refroidisseur_biscuiterie": {
  machine_ref: "refroidisseur_biscuiterie",
  machine_name: "Refroidisseur à bande",
  machine_role: "Refroidissement après cuisson",
  default_capacity: "500-3000 kg/h",
  default_utilities: "Électricité",
  models: [
    // ===== CHINE =====
    { id: "refroidisseur_cn_std", origin: "chinese", name: "Refroidisseur RF-800", price_ttc: 8900, brand: "Jinfeng Foods", supplier: "Henan Jinfeng Food Machinery", supplier_status: "Verified Supplier (5 ans)", rating: 4.2, review_count: 67, specs: { power: "4 kW", capacity: "800 kg/h", dimensions: "6000x1200x1500 mm", weight: "1850 kg", material: "Acier inoxydable 304" }, delivery: "45 jours", warranty: "12 mois", parts_available: "Stock Chine", after_sales: "Support technique" },
    { id: "refroidisseur_cn_premium", origin: "chinese", name: "Refroidisseur RF-2000", price_ttc: 15900, brand: "Jinfeng Foods", supplier: "Henan Jinfeng Food Machinery", supplier_status: "Gold Supplier (7 ans)", rating: 4.6, review_count: 89, specs: { power: "7.5 kW", capacity: "2000 kg/h", dimensions: "9000x1500x1700 mm", weight: "3200 kg", material: "Acier inoxydable 304" }, delivery: "60 jours", warranty: "18 mois", parts_available: "Stock Abidjan", after_sales: "Pièces détachées" },
    
    // ===== CORÉE =====
    { id: "refroidisseur_kr_std", origin: "korean", name: "Refroidisseur KR-1500", price_ttc: 12900, brand: "Korea Bakery", supplier: "Korea Bakery Tech", supplier_status: "Premium Partner (7 ans)", rating: 4.6, review_count: 56, specs: { power: "6 kW", capacity: "1500 kg/h", dimensions: "7000x1300x1600 mm", weight: "2500 kg", material: "Acier inoxydable 304" }, delivery: "30-45 jours", warranty: "36 mois", parts_available: "Stock Abidjan", after_sales: "Technicien local + hotline" },
    { id: "refroidisseur_kr_premium", origin: "korean", name: "Refroidisseur KR-2500", price_ttc: 19900, brand: "Korea Bakery", supplier: "Korea Bakery Tech", supplier_status: "Premium Partner (9 ans)", rating: 4.9, review_count: 42, specs: { power: "9 kW", capacity: "2500 kg/h", dimensions: "10000x1600x1800 mm", weight: "3800 kg", material: "Acier inoxydable 316L" }, delivery: "30-45 jours", warranty: "48 mois", parts_available: "Stock Abidjan + Dépôt France", after_sales: "Contrat maintenance + formation" },
    
    // ===== EUROPE (Bongard - France) =====
    { id: "refroidisseur_eu_std", origin: "europe", name: "Refroidisseur EU-600", price_ttc: 6900, brand: "Bongard", supplier: "Groupe Bongard", supplier_status: "Certified Partner (12 ans)", rating: 4.4, review_count: 45, specs: { power: "3.5 kW", capacity: "600 kg/h", dimensions: "5000x1100x1400 mm", weight: "1600 kg", material: "Acier inoxydable" }, delivery: "15-30 jours", warranty: "6 mois", parts_available: "Stock France", after_sales: "SAV France + pièces 72h" },
    { id: "refroidisseur_eu_premium", origin: "europe", name: "Refroidisseur EU-1800", price_ttc: 11900, brand: "Bongard", supplier: "Groupe Bongard", supplier_status: "Premium Partner (15 ans)", rating: 4.7, review_count: 34, specs: { power: "7 kW", capacity: "1800 kg/h", dimensions: "8500x1400x1600 mm", weight: "3000 kg", material: "Acier inoxydable 304" }, delivery: "15-30 jours", warranty: "12 mois", parts_available: "Stock France", after_sales: "Contrat maintenance" }
  ]
},

"enrobeuse_saupoudreuse": {
  machine_ref: "enrobeuse_saupoudreuse",
  machine_name: "Enrobeuse / Saupoudreuse",
  machine_role: "Ajout sucre, chocolat, garniture",
  default_capacity: "500-2000 kg/h",
  default_utilities: "Électricité",
  models: [
    // ===== CHINE =====
    { id: "enrobeuse_cn_std", origin: "chinese", name: "Enrobeuse EN-500", price_ttc: 12900, brand: "Sainty Foods", supplier: "Sainty Food Machinery", supplier_status: "Verified Supplier (5 ans)", rating: 4.4, review_count: 98, specs: { power: "2.2 kW", capacity: "500 kg/h", dimensions: "3000x1000x1800 mm", weight: "650 kg", material: "Acier inoxydable 304" }, delivery: "45 jours", warranty: "12 mois", parts_available: "Stock Chine", after_sales: "Support technique" },
    { id: "enrobeuse_cn_premium", origin: "chinese", name: "Enrobeuse EN-1500", price_ttc: 22900, brand: "Sainty Foods", supplier: "Sainty Food Machinery", supplier_status: "Gold Supplier (7 ans)", rating: 4.8, review_count: 76, specs: { power: "4 kW", capacity: "1500 kg/h", dimensions: "4500x1200x2000 mm", weight: "1200 kg", material: "Acier inoxydable 304" }, delivery: "60 jours", warranty: "24 mois", parts_available: "Stock Abidjan", after_sales: "SAV local" },
    
    // ===== CORÉE =====
    { id: "enrobeuse_kr_std", origin: "korean", name: "Enrobeuse KR-1000", price_ttc: 16900, brand: "Korea Bakery", supplier: "Korea Bakery Tech", supplier_status: "Premium Partner (7 ans)", rating: 4.7, review_count: 56, specs: { power: "3 kW", capacity: "1000 kg/h", dimensions: "3200x1100x1900 mm", weight: "850 kg", material: "Acier inoxydable 304" }, delivery: "30-45 jours", warranty: "36 mois", parts_available: "Stock Abidjan", after_sales: "Technicien local + hotline" },
    { id: "enrobeuse_kr_premium", origin: "korean", name: "Enrobeuse KR-2000", price_ttc: 28900, brand: "Korea Bakery", supplier: "Korea Bakery Tech", supplier_status: "Premium Partner (9 ans)", rating: 4.9, review_count: 42, specs: { power: "5.5 kW", capacity: "2000 kg/h", dimensions: "4800x1300x2100 mm", weight: "1450 kg", material: "Acier inoxydable 316L" }, delivery: "30-45 jours", warranty: "48 mois", parts_available: "Stock Abidjan + Dépôt France", after_sales: "Contrat maintenance + formation" },
    
    // ===== EUROPE (Bongard - France) =====
    { id: "enrobeuse_eu_std", origin: "europe", name: "Enrobeuse EU-800", price_ttc: 8900, brand: "Bongard", supplier: "Groupe Bongard", supplier_status: "Certified Partner (12 ans)", rating: 4.4, review_count: 45, specs: { power: "2.5 kW", capacity: "800 kg/h", dimensions: "2800x900x1700 mm", weight: "580 kg", material: "Acier inoxydable" }, delivery: "15-30 jours", warranty: "6 mois", parts_available: "Stock France", after_sales: "SAV France + pièces 72h" },
    { id: "enrobeuse_eu_premium", origin: "europe", name: "Enrobeuse EU-1400", price_ttc: 14900, brand: "Bongard", supplier: "Groupe Bongard", supplier_status: "Premium Partner (15 ans)", rating: 4.7, review_count: 34, specs: { power: "4 kW", capacity: "1400 kg/h", dimensions: "4200x1100x1900 mm", weight: "1050 kg", material: "Acier inoxydable 304" }, delivery: "15-30 jours", warranty: "12 mois", parts_available: "Stock France", after_sales: "Contrat maintenance" }
  ]
},

"emballeuse_horizontale": {
  machine_ref: "emballeuse_horizontale",
  machine_name: "Emballeuse horizontale",
  machine_role: "Conditionnement en sachets",
  default_capacity: "100-500 sachets/min",
  default_utilities: "Électricité",
  models: [
    // ===== CHINE =====
    { id: "emballeuse_horiz_cn_std", origin: "chinese", name: "Emballeuse EH-150", price_ttc: 15900, brand: "Jinfeng Pack", supplier: "Henan Jinfeng Packaging", supplier_status: "Verified Supplier (6 ans)", rating: 4.5, review_count: 145, specs: { power: "3 kW", capacity: "150 sachets/min", dimensions: "4000x1000x1500 mm", weight: "850 kg", material: "Acier inoxydable" }, delivery: "45-60 jours", warranty: "12 mois", parts_available: "Stock Chine", after_sales: "Support technique" },
    { id: "emballeuse_horiz_cn_premium", origin: "chinese", name: "Emballeuse EH-400", price_ttc: 28900, brand: "Jinfeng Pack", supplier: "Henan Jinfeng Packaging", supplier_status: "Gold Supplier (8 ans)", rating: 4.8, review_count: 98, specs: { power: "5.5 kW", capacity: "400 sachets/min", dimensions: "5500x1200x1700 mm", weight: "1450 kg", material: "Acier inoxydable 304" }, delivery: "60-75 jours", warranty: "24 mois", parts_available: "Stock Abidjan", after_sales: "Contrat maintenance" },
    
    // ===== CORÉE =====
    { id: "emballeuse_horiz_kr_std", origin: "korean", name: "Emballeuse KR-250", price_ttc: 21900, brand: "Korea Bakery", supplier: "Korea Bakery Tech", supplier_status: "Premium Partner (7 ans)", rating: 4.7, review_count: 56, specs: { power: "4 kW", capacity: "250 sachets/min", dimensions: "4200x1100x1600 mm", weight: "980 kg", material: "Acier inoxydable 304" }, delivery: "30-45 jours", warranty: "36 mois", parts_available: "Stock Abidjan", after_sales: "Technicien local + hotline" },
    { id: "emballeuse_horiz_kr_premium", origin: "korean", name: "Emballeuse KR-500", price_ttc: 34900, brand: "Korea Bakery", supplier: "Korea Bakery Tech", supplier_status: "Premium Partner (9 ans)", rating: 4.9, review_count: 42, specs: { power: "7 kW", capacity: "500 sachets/min", dimensions: "6000x1300x1800 mm", weight: "1650 kg", material: "Acier inoxydable 316L" }, delivery: "30-45 jours", warranty: "48 mois", parts_available: "Stock Abidjan + Dépôt France", after_sales: "Contrat maintenance + formation" },
    
    // ===== EUROPE (Bongard - France) =====
    { id: "emballeuse_horiz_eu_std", origin: "europe", name: "Emballeuse EU-120", price_ttc: 11900, brand: "Bongard", supplier: "Groupe Bongard", supplier_status: "Certified Partner (12 ans)", rating: 4.4, review_count: 45, specs: { power: "2.5 kW", capacity: "120 sachets/min", dimensions: "3500x900x1400 mm", weight: "720 kg", material: "Acier inoxydable" }, delivery: "15-30 jours", warranty: "6 mois", parts_available: "Stock France", after_sales: "SAV France + pièces 72h" },
    { id: "emballeuse_horiz_eu_premium", origin: "europe", name: "Emballeuse EU-350", price_ttc: 18900, brand: "Bongard", supplier: "Groupe Bongard", supplier_status: "Premium Partner (15 ans)", rating: 4.7, review_count: 34, specs: { power: "4.5 kW", capacity: "350 sachets/min", dimensions: "5000x1100x1600 mm", weight: "1250 kg", material: "Acier inoxydable 304" }, delivery: "15-30 jours", warranty: "12 mois", parts_available: "Stock France", after_sales: "Contrat maintenance" }
  ]
},
  // ==============================================
// JUS & BOISSONS - MODÈLES COMPLETS
// ==============================================

"laveuse_trieuse": {
  machine_ref: "laveuse_trieuse",
  machine_name: "Laveuse-trieuse",
  machine_role: "Nettoyage et tri des fruits",
  default_capacity: "1-5 tonnes/h",
  default_utilities: "Eau + électricité",
  models: [
    // ===== CHINE =====
    { id: "laveuse_trieuse_cn_econo", origin: "chinese", name: "Laveuse LT-ECO", price_ttc: 5900, brand: "Jinfeng Foods", supplier: "Henan Jinfeng Food Machinery", supplier_status: "Verified Supplier (4 ans)", rating: 4.1, review_count: 89, specs: { power: "2.2 kW", capacity: "1000 kg/h", dimensions: "2500x800x1200 mm", weight: "350 kg", material: "Acier inoxydable 304" }, delivery: "45 jours", warranty: "12 mois", parts_available: "Stock Chine", after_sales: "Support technique" },
    { id: "laveuse_trieuse_cn_std", origin: "chinese", name: "Laveuse LT-STD", price_ttc: 9900, brand: "Jinfeng Foods", supplier: "Henan Jinfeng Food Machinery", supplier_status: "Gold Supplier (7 ans)", rating: 4.5, review_count: 167, specs: { power: "4 kW", capacity: "2500 kg/h", dimensions: "3500x1000x1400 mm", weight: "550 kg", material: "Acier inoxydable 304" }, delivery: "45-60 jours", warranty: "18 mois", parts_available: "Stock Abidjan", after_sales: "Formation + pièces 72h" },
    { id: "laveuse_trieuse_cn_premium", origin: "chinese", name: "Laveuse LT-PRO", price_ttc: 15900, brand: "Jinfeng Foods", supplier: "Henan Jinfeng Food Machinery", supplier_status: "Gold Supplier (8 ans)", rating: 4.8, review_count: 78, specs: { power: "7.5 kW", capacity: "5000 kg/h", dimensions: "4500x1200x1600 mm", weight: "850 kg", material: "Acier inoxydable 316L" }, delivery: "60 jours", warranty: "24 mois", parts_available: "Stock France", after_sales: "SAV local + hotline" },
    
    // ===== CORÉE =====
    { id: "laveuse_trieuse_kr_std", origin: "korean", name: "Laveuse KR-3000", price_ttc: 13900, brand: "Daeyeong", supplier: "Daeyeong Machinery Co.", supplier_status: "Premium Partner (7 ans)", rating: 4.7, review_count: 56, specs: { power: "5.5 kW", capacity: "3000 kg/h", dimensions: "3800x1100x1500 mm", weight: "680 kg", material: "Acier inoxydable 304" }, delivery: "30-45 jours", warranty: "36 mois", parts_available: "Stock Abidjan", after_sales: "Technicien local + hotline" },
    { id: "laveuse_trieuse_kr_premium", origin: "korean", name: "Laveuse KR-6000", price_ttc: 21900, brand: "Daeyeong", supplier: "Daeyeong Machinery Co.", supplier_status: "Premium Partner (9 ans)", rating: 4.9, review_count: 42, specs: { power: "9 kW", capacity: "6000 kg/h", dimensions: "4800x1300x1700 mm", weight: "950 kg", material: "Acier inoxydable 316L" }, delivery: "30-45 jours", warranty: "48 mois", parts_available: "Stock Abidjan + Dépôt France", after_sales: "Contrat maintenance + formation" },
    
    // ===== EUROPE (Bongard - France) =====
    { id: "laveuse_trieuse_eu_std", origin: "europe", name: "Laveuse EU-2000", price_ttc: 7900, brand: "Bongard", supplier: "Groupe Bongard", supplier_status: "Certified Partner (12 ans)", rating: 4.4, review_count: 45, specs: { power: "4 kW", capacity: "2000 kg/h", dimensions: "3200x900x1400 mm", weight: "480 kg", material: "Acier inoxydable" }, delivery: "15-30 jours", warranty: "6 mois", parts_available: "Stock France", after_sales: "SAV France + pièces 72h" },
    { id: "laveuse_trieuse_eu_premium", origin: "europe", name: "Laveuse EU-4000", price_ttc: 13900, brand: "Bongard", supplier: "Groupe Bongard", supplier_status: "Premium Partner (15 ans)", rating: 4.7, review_count: 34, specs: { power: "7 kW", capacity: "4000 kg/h", dimensions: "4200x1100x1500 mm", weight: "780 kg", material: "Acier inoxydable 304" }, delivery: "15-30 jours", warranty: "12 mois", parts_available: "Stock France", after_sales: "Contrat maintenance" }
  ]
},

"eplucheuse_denoyauteuse": {
  machine_ref: "eplucheuse_denoyauteuse",
  machine_name: "Éplucheuse-dénoyauteuse",
  machine_role: "Préparation des fruits (épluchage, dénoyautage)",
  default_capacity: "500-2000 kg/h",
  default_utilities: "Électricité",
  models: [
    // ===== CHINE =====
    { id: "eplucheuse_cn_econo", origin: "chinese", name: "Éplucheuse ED-ECO", price_ttc: 7900, brand: "Sainty Foods", supplier: "Sainty Food Machinery", supplier_status: "Verified Supplier (4 ans)", rating: 4.2, review_count: 112, specs: { power: "3 kW", capacity: "500 kg/h", dimensions: "2000x800x1400 mm", weight: "420 kg", material: "Acier inoxydable 304" }, delivery: "45 jours", warranty: "12 mois", parts_available: "Stock Chine", after_sales: "Support technique" },
    { id: "eplucheuse_cn_std", origin: "chinese", name: "Éplucheuse ED-STD", price_ttc: 12900, brand: "Sainty Foods", supplier: "Sainty Food Machinery", supplier_status: "Gold Supplier (7 ans)", rating: 4.6, review_count: 234, specs: { power: "5.5 kW", capacity: "1200 kg/h", dimensions: "2800x1000x1600 mm", weight: "680 kg", material: "Acier inoxydable 304" }, delivery: "45-60 jours", warranty: "18 mois", parts_available: "Stock Abidjan", after_sales: "Formation + pièces" },
    { id: "eplucheuse_cn_premium", origin: "chinese", name: "Éplucheuse ED-PRO", price_ttc: 22900, brand: "Sainty Foods", supplier: "Sainty Food Machinery", supplier_status: "Gold Supplier (8 ans)", rating: 4.9, review_count: 89, specs: { power: "9 kW", capacity: "2000 kg/h", dimensions: "3500x1200x1800 mm", weight: "1050 kg", material: "Acier inoxydable 316L" }, delivery: "60 jours", warranty: "24 mois", parts_available: "Dépôt France", after_sales: "Contrat maintenance" },
    
    // ===== CORÉE =====
    { id: "eplucheuse_kr_std", origin: "korean", name: "Éplucheuse KR-1500", price_ttc: 16900, brand: "Daeyeong", supplier: "Daeyeong Machinery Co.", supplier_status: "Premium Partner (7 ans)", rating: 4.7, review_count: 56, specs: { power: "6.5 kW", capacity: "1500 kg/h", dimensions: "3000x1100x1700 mm", weight: "780 kg", material: "Acier inoxydable 304" }, delivery: "30-45 jours", warranty: "36 mois", parts_available: "Stock Abidjan", after_sales: "Technicien local + hotline" },
    { id: "eplucheuse_kr_premium", origin: "korean", name: "Éplucheuse KR-2500", price_ttc: 28900, brand: "Daeyeong", supplier: "Daeyeong Machinery Co.", supplier_status: "Premium Partner (9 ans)", rating: 4.9, review_count: 42, specs: { power: "10 kW", capacity: "2500 kg/h", dimensions: "3800x1300x1900 mm", weight: "1150 kg", material: "Acier inoxydable 316L" }, delivery: "30-45 jours", warranty: "48 mois", parts_available: "Stock Abidjan + Dépôt France", after_sales: "Contrat maintenance + formation" },
    
    // ===== EUROPE (Bongard - France) =====
    { id: "eplucheuse_eu_std", origin: "europe", name: "Éplucheuse EU-800", price_ttc: 8900, brand: "Bongard", supplier: "Groupe Bongard", supplier_status: "Certified Partner (12 ans)", rating: 4.4, review_count: 45, specs: { power: "4.5 kW", capacity: "800 kg/h", dimensions: "2400x900x1500 mm", weight: "520 kg", material: "Acier inoxydable" }, delivery: "15-30 jours", warranty: "6 mois", parts_available: "Stock France", after_sales: "SAV France + pièces 72h" },
    { id: "eplucheuse_eu_premium", origin: "europe", name: "Éplucheuse EU-1800", price_ttc: 15900, brand: "Bongard", supplier: "Groupe Bongard", supplier_status: "Premium Partner (15 ans)", rating: 4.7, review_count: 34, specs: { power: "8 kW", capacity: "1800 kg/h", dimensions: "3200x1100x1700 mm", weight: "920 kg", material: "Acier inoxydable 304" }, delivery: "15-30 jours", warranty: "12 mois", parts_available: "Stock France", after_sales: "Contrat maintenance" }
  ]
},

"broyeur_raspeur": {
  machine_ref: "broyeur_raspeur",
  machine_name: "Broyeur-raspeur",
  machine_role: "Extraction pulpe/jus",
  default_capacity: "500-3000 kg/h",
  default_utilities: "Électricité",
  models: [
    // ===== CHINE =====
    { id: "broyeur_cn_econo", origin: "chinese", name: "Broyeur BR-ECO", price_ttc: 6900, brand: "Jinfeng Foods", supplier: "Henan Jinfeng Food Machinery", supplier_status: "Verified Supplier (5 ans)", rating: 4.3, review_count: 145, specs: { power: "5.5 kW", capacity: "500 kg/h", dimensions: "1200x600x1300 mm", weight: "280 kg", material: "Acier inoxydable 304" }, delivery: "45 jours", warranty: "12 mois", parts_available: "Stock Chine", after_sales: "Support technique" },
    { id: "broyeur_cn_std", origin: "chinese", name: "Broyeur BR-STD", price_ttc: 11900, brand: "Jinfeng Foods", supplier: "Henan Jinfeng Food Machinery", supplier_status: "Gold Supplier (7 ans)", rating: 4.6, review_count: 278, specs: { power: "11 kW", capacity: "1500 kg/h", dimensions: "1600x800x1500 mm", weight: "520 kg", material: "Acier inoxydable 304" }, delivery: "45-60 jours", warranty: "18 mois", parts_available: "Stock Abidjan", after_sales: "Pièces détachées" },
    { id: "broyeur_cn_premium", origin: "chinese", name: "Broyeur BR-PRO", price_ttc: 18900, brand: "Jinfeng Foods", supplier: "Henan Jinfeng Food Machinery", supplier_status: "Gold Supplier (8 ans)", rating: 4.8, review_count: 112, specs: { power: "18.5 kW", capacity: "3000 kg/h", dimensions: "2000x1000x1700 mm", weight: "850 kg", material: "Acier inoxydable 316L" }, delivery: "60 jours", warranty: "24 mois", parts_available: "Stock France", after_sales: "SAV local" },
    
    // ===== CORÉE =====
    { id: "broyeur_kr_std", origin: "korean", name: "Broyeur KR-2000", price_ttc: 16900, brand: "Daeyeong", supplier: "Daeyeong Machinery Co.", supplier_status: "Premium Partner (7 ans)", rating: 4.7, review_count: 56, specs: { power: "13 kW", capacity: "2000 kg/h", dimensions: "1800x900x1600 mm", weight: "620 kg", material: "Acier inoxydable 304" }, delivery: "30-45 jours", warranty: "36 mois", parts_available: "Stock Abidjan", after_sales: "Technicien local + hotline" },
    { id: "broyeur_kr_premium", origin: "korean", name: "Broyeur KR-3500", price_ttc: 24900, brand: "Daeyeong", supplier: "Daeyeong Machinery Co.", supplier_status: "Premium Partner (9 ans)", rating: 4.9, review_count: 42, specs: { power: "22 kW", capacity: "3500 kg/h", dimensions: "2200x1100x1800 mm", weight: "950 kg", material: "Acier inoxydable 316L" }, delivery: "30-45 jours", warranty: "48 mois", parts_available: "Stock Abidjan + Dépôt France", after_sales: "Contrat maintenance + formation" },
    
    // ===== EUROPE (Bongard - France) =====
    { id: "broyeur_eu_std", origin: "europe", name: "Broyeur EU-1200", price_ttc: 7900, brand: "Bongard", supplier: "Groupe Bongard", supplier_status: "Certified Partner (12 ans)", rating: 4.4, review_count: 45, specs: { power: "8 kW", capacity: "1200 kg/h", dimensions: "1400x700x1500 mm", weight: "420 kg", material: "Acier inoxydable" }, delivery: "15-30 jours", warranty: "6 mois", parts_available: "Stock France", after_sales: "SAV France + pièces 72h" },
    { id: "broyeur_eu_premium", origin: "europe", name: "Broyeur EU-2500", price_ttc: 14900, brand: "Bongard", supplier: "Groupe Bongard", supplier_status: "Premium Partner (15 ans)", rating: 4.7, review_count: 34, specs: { power: "16 kW", capacity: "2500 kg/h", dimensions: "1900x900x1700 mm", weight: "720 kg", material: "Acier inoxydable 304" }, delivery: "15-30 jours", warranty: "12 mois", parts_available: "Stock France", after_sales: "Contrat maintenance" }
  ]
},

"filtreuse_tamiseuse": {
  machine_ref: "filtreuse_tamiseuse",
  machine_name: "Filtreuse / Tamiseuse",
  machine_role: "Séparation pulpe/liquide",
  default_capacity: "1000-5000 L/h",
  default_utilities: "Électricité",
  models: [
    // ===== CHINE =====
    { id: "filtreuse_cn_econo", origin: "chinese", name: "Filtreuse FI-ECO", price_ttc: 4900, brand: "Sainty Foods", supplier: "Sainty Food Machinery", supplier_status: "Verified Supplier (4 ans)", rating: 4.2, review_count: 98, specs: { power: "1.5 kW", capacity: "1000 L/h", dimensions: "1500x600x1200 mm", weight: "180 kg", material: "Acier inoxydable 304" }, delivery: "45 jours", warranty: "12 mois", parts_available: "Stock Chine", after_sales: "Support technique" },
    { id: "filtreuse_cn_std", origin: "chinese", name: "Filtreuse FI-STD", price_ttc: 8900, brand: "Sainty Foods", supplier: "Sainty Food Machinery", supplier_status: "Gold Supplier (6 ans)", rating: 4.5, review_count: 189, specs: { power: "2.2 kW", capacity: "2500 L/h", dimensions: "2000x800x1400 mm", weight: "320 kg", material: "Acier inoxydable 304" }, delivery: "45-60 jours", warranty: "18 mois", parts_available: "Stock Abidjan", after_sales: "Formation" },
    { id: "filtreuse_cn_premium", origin: "chinese", name: "Filtreuse FI-PRO", price_ttc: 14900, brand: "Sainty Foods", supplier: "Sainty Food Machinery", supplier_status: "Gold Supplier (7 ans)", rating: 4.9, review_count: 67, specs: { power: "4 kW", capacity: "5000 L/h", dimensions: "2800x1000x1600 mm", weight: "580 kg", material: "Acier inoxydable 316L" }, delivery: "60 jours", warranty: "24 mois", parts_available: "Stock France", after_sales: "SAV local" },
    
    // ===== CORÉE =====
    { id: "filtreuse_kr_std", origin: "korean", name: "Filtreuse KR-3000", price_ttc: 11900, brand: "Daeyeong", supplier: "Daeyeong Machinery Co.", supplier_status: "Premium Partner (7 ans)", rating: 4.7, review_count: 56, specs: { power: "3 kW", capacity: "3000 L/h", dimensions: "2200x900x1500 mm", weight: "420 kg", material: "Acier inoxydable 304" }, delivery: "30-45 jours", warranty: "36 mois", parts_available: "Stock Abidjan", after_sales: "Technicien local + hotline" },
    { id: "filtreuse_kr_premium", origin: "korean", name: "Filtreuse KR-6000", price_ttc: 18900, brand: "Daeyeong", supplier: "Daeyeong Machinery Co.", supplier_status: "Premium Partner (9 ans)", rating: 4.9, review_count: 42, specs: { power: "5.5 kW", capacity: "6000 L/h", dimensions: "3000x1100x1700 mm", weight: "680 kg", material: "Acier inoxydable 316L" }, delivery: "30-45 jours", warranty: "48 mois", parts_available: "Stock Abidjan + Dépôt France", after_sales: "Contrat maintenance + formation" },
    
    // ===== EUROPE (Bongard - France) =====
    { id: "filtreuse_eu_std", origin: "europe", name: "Filtreuse EU-2000", price_ttc: 6900, brand: "Bongard", supplier: "Groupe Bongard", supplier_status: "Certified Partner (12 ans)", rating: 4.4, review_count: 45, specs: { power: "2.5 kW", capacity: "2000 L/h", dimensions: "1800x800x1400 mm", weight: "280 kg", material: "Acier inoxydable" }, delivery: "15-30 jours", warranty: "6 mois", parts_available: "Stock France", after_sales: "SAV France + pièces 72h" },
    { id: "filtreuse_eu_premium", origin: "europe", name: "Filtreuse EU-4000", price_ttc: 11900, brand: "Bongard", supplier: "Groupe Bongard", supplier_status: "Premium Partner (15 ans)", rating: 4.7, review_count: 34, specs: { power: "4.5 kW", capacity: "4000 L/h", dimensions: "2600x1000x1600 mm", weight: "520 kg", material: "Acier inoxydable 304" }, delivery: "15-30 jours", warranty: "12 mois", parts_available: "Stock France", after_sales: "Contrat maintenance" }
  ]
},

"melangeuse_doseuse": {
  machine_ref: "melangeuse_doseuse",
  machine_name: "Mélangeuse / Doseuse",
  machine_role: "Ajout sucre, arômes, conservateurs",
  default_capacity: "500-3000 L/h",
  default_utilities: "Électricité",
  models: [
    // ===== CHINE =====
    { id: "melangeuse_cn_econo", origin: "chinese", name: "Mélangeuse MD-ECO", price_ttc: 8900, brand: "Jinfeng Foods", supplier: "Henan Jinfeng Food Machinery", supplier_status: "Verified Supplier (5 ans)", rating: 4.3, review_count: 134, specs: { power: "3 kW", capacity: "500 L/h", dimensions: "1800x900x1800 mm", weight: "480 kg", material: "Acier inoxydable 304" }, delivery: "45 jours", warranty: "12 mois", parts_available: "Stock Chine", after_sales: "Support technique" },
    { id: "melangeuse_cn_std", origin: "chinese", name: "Mélangeuse MD-STD", price_ttc: 14900, brand: "Jinfeng Foods", supplier: "Henan Jinfeng Food Machinery", supplier_status: "Gold Supplier (7 ans)", rating: 4.7, review_count: 267, specs: { power: "5.5 kW", capacity: "1500 L/h", dimensions: "2500x1200x2200 mm", weight: "850 kg", material: "Acier inoxydable 304" }, delivery: "45-60 jours", warranty: "18 mois", parts_available: "Stock Abidjan", after_sales: "Pièces détachées" },
    { id: "melangeuse_cn_premium", origin: "chinese", name: "Mélangeuse MD-PRO", price_ttc: 24900, brand: "Jinfeng Foods", supplier: "Henan Jinfeng Food Machinery", supplier_status: "Gold Supplier (8 ans)", rating: 4.9, review_count: 89, specs: { power: "9 kW", capacity: "3000 L/h", dimensions: "3200x1500x2500 mm", weight: "1250 kg", material: "Acier inoxydable 316L" }, delivery: "60 jours", warranty: "24 mois", parts_available: "Stock France", after_sales: "Contrat maintenance" },
    
    // ===== CORÉE =====
    { id: "melangeuse_kr_std", origin: "korean", name: "Mélangeuse KR-2000", price_ttc: 19900, brand: "Daeyeong", supplier: "Daeyeong Machinery Co.", supplier_status: "Premium Partner (7 ans)", rating: 4.7, review_count: 56, specs: { power: "7 kW", capacity: "2000 L/h", dimensions: "2700x1300x2300 mm", weight: "980 kg", material: "Acier inoxydable 304" }, delivery: "30-45 jours", warranty: "36 mois", parts_available: "Stock Abidjan", after_sales: "Technicien local + hotline" },
    { id: "melangeuse_kr_premium", origin: "korean", name: "Mélangeuse KR-4000", price_ttc: 32900, brand: "Daeyeong", supplier: "Daeyeong Machinery Co.", supplier_status: "Premium Partner (9 ans)", rating: 4.9, review_count: 42, specs: { power: "11 kW", capacity: "4000 L/h", dimensions: "3500x1600x2600 mm", weight: "1450 kg", material: "Acier inoxydable 316L" }, delivery: "30-45 jours", warranty: "48 mois", parts_available: "Stock Abidjan + Dépôt France", after_sales: "Contrat maintenance + formation" },
    
    // ===== EUROPE (Bongard - France) =====
    { id: "melangeuse_eu_std", origin: "europe", name: "Mélangeuse EU-1200", price_ttc: 9900, brand: "Bongard", supplier: "Groupe Bongard", supplier_status: "Certified Partner (12 ans)", rating: 4.4, review_count: 45, specs: { power: "4.5 kW", capacity: "1200 L/h", dimensions: "2200x1000x2000 mm", weight: "580 kg", material: "Acier inoxydable" }, delivery: "15-30 jours", warranty: "6 mois", parts_available: "Stock France", after_sales: "SAV France + pièces 72h" },
    { id: "melangeuse_eu_premium", origin: "europe", name: "Mélangeuse EU-2500", price_ttc: 16900, brand: "Bongard", supplier: "Groupe Bongard", supplier_status: "Premium Partner (15 ans)", rating: 4.7, review_count: 34, specs: { power: "8 kW", capacity: "2500 L/h", dimensions: "2800x1300x2300 mm", weight: "1050 kg", material: "Acier inoxydable 304" }, delivery: "15-30 jours", warranty: "12 mois", parts_available: "Stock France", after_sales: "Contrat maintenance" }
  ]
},

"pasteurisateur": {
  machine_ref: "pasteurisateur",
  machine_name: "Pasteurisateur",
  machine_role: "Traitement thermique (pasteurisation)",
  default_capacity: "1000-5000 L/h",
  default_utilities: "Électricité + eau + vapeur",
  models: [
    // ===== CHINE =====
    { id: "pasteurisateur_cn_econo", origin: "chinese", name: "Pasteurisateur PA-ECO", price_ttc: 12900, brand: "Jinfeng Foods", supplier: "Henan Jinfeng Food Machinery", supplier_status: "Verified Supplier (5 ans)", rating: 4.3, review_count: 112, specs: { power: "12 kW", capacity: "1000 L/h", dimensions: "3000x1000x1800 mm", weight: "850 kg", material: "Acier inoxydable 304" }, delivery: "60 jours", warranty: "12 mois", parts_available: "Stock Chine", after_sales: "Support technique" },
    { id: "pasteurisateur_cn_std", origin: "chinese", name: "Pasteurisateur PA-STD", price_ttc: 22900, brand: "Jinfeng Foods", supplier: "Henan Jinfeng Food Machinery", supplier_status: "Gold Supplier (7 ans)", rating: 4.7, review_count: 198, specs: { power: "22 kW", capacity: "3000 L/h", dimensions: "4500x1200x2000 mm", weight: "1450 kg", material: "Acier inoxydable 304" }, delivery: "60-75 jours", warranty: "18 mois", parts_available: "Stock Abidjan", after_sales: "Formation + pièces" },
    { id: "pasteurisateur_cn_premium", origin: "chinese", name: "Pasteurisateur PA-PRO", price_ttc: 39900, brand: "Jinfeng Foods", supplier: "Henan Jinfeng Food Machinery", supplier_status: "Gold Supplier (8 ans)", rating: 4.9, review_count: 78, specs: { power: "37 kW", capacity: "5000 L/h", dimensions: "6000x1500x2200 mm", weight: "2200 kg", material: "Acier inoxydable 316L" }, delivery: "75-90 jours", warranty: "24 mois", parts_available: "Dépôt France", after_sales: "Contrat maintenance" },
    
    // ===== CORÉE =====
    { id: "pasteurisateur_kr_std", origin: "korean", name: "Pasteurisateur KR-2000", price_ttc: 29900, brand: "Daeyeong", supplier: "Daeyeong Machinery Co.", supplier_status: "Premium Partner (7 ans)", rating: 4.7, review_count: 56, specs: { power: "25 kW", capacity: "2000 L/h", dimensions: "3800x1300x2100 mm", weight: "1250 kg", material: "Acier inoxydable 304" }, delivery: "30-45 jours", warranty: "36 mois", parts_available: "Stock Abidjan", after_sales: "Technicien local + hotline" },
    { id: "pasteurisateur_kr_premium", origin: "korean", name: "Pasteurisateur KR-4000", price_ttc: 49900, brand: "Daeyeong", supplier: "Daeyeong Machinery Co.", supplier_status: "Premium Partner (9 ans)", rating: 4.9, review_count: 42, specs: { power: "45 kW", capacity: "4000 L/h", dimensions: "5200x1600x2400 mm", weight: "1850 kg", material: "Acier inoxydable 316L" }, delivery: "30-45 jours", warranty: "48 mois", parts_available: "Stock Abidjan + Dépôt France", after_sales: "Contrat maintenance + formation" },
    
    // ===== EUROPE (Bongard - France) =====
    { id: "pasteurisateur_eu_std", origin: "europe", name: "Pasteurisateur EU-1500", price_ttc: 15900, brand: "Bongard", supplier: "Groupe Bongard", supplier_status: "Certified Partner (12 ans)", rating: 4.4, review_count: 45, specs: { power: "18 kW", capacity: "1500 L/h", dimensions: "3200x1100x1900 mm", weight: "950 kg", material: "Acier inoxydable" }, delivery: "15-30 jours", warranty: "6 mois", parts_available: "Stock France", after_sales: "SAV France + pièces 72h" },
    { id: "pasteurisateur_eu_premium", origin: "europe", name: "Pasteurisateur EU-3000", price_ttc: 25900, brand: "Bongard", supplier: "Groupe Bongard", supplier_status: "Premium Partner (15 ans)", rating: 4.7, review_count: 34, specs: { power: "32 kW", capacity: "3000 L/h", dimensions: "4800x1400x2100 mm", weight: "1550 kg", material: "Acier inoxydable 304" }, delivery: "15-30 jours", warranty: "12 mois", parts_available: "Stock France", after_sales: "Contrat maintenance" }
  ]
},

"remplisseuse_scelleuse": {
  machine_ref: "remplisseuse_scelleuse",
  machine_name: "Remplisseuse-scelleuse",
  machine_role: "Mise en bouteilles/briques/canettes",
  default_capacity: "1000-5000 unités/h",
  default_utilities: "Électricité + air comprimé",
  models: [
    // ===== CHINE =====
    { id: "remplisseuse_cn_econo", origin: "chinese", name: "Remplisseuse RS-ECO", price_ttc: 15900, brand: "Sainty Pack", supplier: "Sainty Packaging Machinery", supplier_status: "Verified Supplier (5 ans)", rating: 4.2, review_count: 156, specs: { power: "3 kW", capacity: "1000 unités/h", dimensions: "2500x1000x2000 mm", weight: "650 kg", material: "Acier inoxydable 304" }, delivery: "45-60 jours", warranty: "12 mois", parts_available: "Stock Chine", after_sales: "Support technique" },
    { id: "remplisseuse_cn_std", origin: "chinese", name: "Remplisseuse RS-STD", price_ttc: 28900, brand: "Sainty Pack", supplier: "Sainty Packaging Machinery", supplier_status: "Gold Supplier (7 ans)", rating: 4.6, review_count: 278, specs: { power: "5.5 kW", capacity: "3000 unités/h", dimensions: "3500x1200x2200 mm", weight: "1200 kg", material: "Acier inoxydable 304" }, delivery: "60-75 jours", warranty: "18 mois", parts_available: "Stock Abidjan", after_sales: "Pièces détachées" },
    { id: "remplisseuse_cn_premium", origin: "chinese", name: "Remplisseuse RS-PRO", price_ttc: 49900, brand: "Sainty Pack", supplier: "Sainty Packaging Machinery", supplier_status: "Gold Supplier (8 ans)", rating: 4.9, review_count: 98, specs: { power: "9 kW", capacity: "5000 unités/h", dimensions: "4500x1500x2500 mm", weight: "1850 kg", material: "Acier inoxydable 316L" }, delivery: "75-90 jours", warranty: "24 mois", parts_available: "Stock France", after_sales: "Contrat maintenance" },
    
    // ===== CORÉE =====
    { id: "remplisseuse_kr_std", origin: "korean", name: "Remplisseuse KR-2000", price_ttc: 21900, brand: "Daeyeong", supplier: "Daeyeong Machinery Co.", supplier_status: "Premium Partner (7 ans)", rating: 4.7, review_count: 56, specs: { power: "4 kW", capacity: "2000 unités/h", dimensions: "2800x1100x2100 mm", weight: "850 kg", material: "Acier inoxydable 304" }, delivery: "30-45 jours", warranty: "36 mois", parts_available: "Stock Abidjan", after_sales: "Technicien local + hotline" },
    { id: "remplisseuse_kr_premium", origin: "korean", name: "Remplisseuse KR-4000", price_ttc: 36900, brand: "Daeyeong", supplier: "Daeyeong Machinery Co.", supplier_status: "Premium Partner (9 ans)", rating: 4.9, review_count: 42, specs: { power: "7.5 kW", capacity: "4000 unités/h", dimensions: "3800x1400x2400 mm", weight: "1350 kg", material: "Acier inoxydable 316L" }, delivery: "30-45 jours", warranty: "48 mois", parts_available: "Stock Abidjan + Dépôt France", after_sales: "Contrat maintenance + formation" },
    
    // ===== EUROPE (Bongard - France) =====
    { id: "remplisseuse_eu_std", origin: "europe", name: "Remplisseuse EU-1500", price_ttc: 12900, brand: "Bongard", supplier: "Groupe Bongard", supplier_status: "Certified Partner (12 ans)", rating: 4.4, review_count: 45, specs: { power: "3.5 kW", capacity: "1500 unités/h", dimensions: "2300x1000x1900 mm", weight: "580 kg", material: "Acier inoxydable" }, delivery: "15-30 jours", warranty: "6 mois", parts_available: "Stock France", after_sales: "SAV France + pièces 72h" },
    { id: "remplisseuse_eu_premium", origin: "europe", name: "Remplisseuse EU-3500", price_ttc: 24900, brand: "Bongard", supplier: "Groupe Bongard", supplier_status: "Premium Partner (15 ans)", rating: 4.7, review_count: 34, specs: { power: "6 kW", capacity: "3500 unités/h", dimensions: "3200x1300x2200 mm", weight: "1050 kg", material: "Acier inoxydable 304" }, delivery: "15-30 jours", warranty: "12 mois", parts_available: "Stock France", after_sales: "Contrat maintenance" }
  ]
},

"concentrateur_evaporateur": {
  machine_ref: "concentrateur_evaporateur",
  machine_name: "Concentrateur / Évaporateur",
  machine_role: "Production de jus concentré (module export)",
  default_capacity: "500-3000 L/h",
  default_utilities: "Électricité + vapeur + eau",
  models: [
    // ===== CHINE =====
    { id: "concentrateur_cn_econo", origin: "chinese", name: "Concentrateur CE-ECO", price_ttc: 29900, brand: "Jinfeng Foods", supplier: "Henan Jinfeng Food Machinery", supplier_status: "Verified Supplier (6 ans)", rating: 4.3, review_count: 67, specs: { power: "22 kW", capacity: "500 L/h", dimensions: "4000x1500x3000 mm", weight: "2500 kg", material: "Acier inoxydable 304" }, delivery: "75-90 jours", warranty: "12 mois", parts_available: "Stock Chine", after_sales: "Support technique" },
    { id: "concentrateur_cn_std", origin: "chinese", name: "Concentrateur CE-STD", price_ttc: 49900, brand: "Jinfeng Foods", supplier: "Henan Jinfeng Food Machinery", supplier_status: "Gold Supplier (7 ans)", rating: 4.7, review_count: 89, specs: { power: "45 kW", capacity: "1500 L/h", dimensions: "5500x2000x3500 mm", weight: "4200 kg", material: "Acier inoxydable 304" }, delivery: "90-105 jours", warranty: "18 mois", parts_available: "Stock Abidjan", after_sales: "Formation + pièces" },
    { id: "concentrateur_cn_premium", origin: "chinese", name: "Concentrateur CE-PRO", price_ttc: 89900, brand: "Jinfeng Foods", supplier: "Henan Jinfeng Food Machinery", supplier_status: "Gold Supplier (8 ans)", rating: 4.9, review_count: 45, specs: { power: "75 kW", capacity: "3000 L/h", dimensions: "7000x2500x4000 mm", weight: "6500 kg", material: "Acier inoxydable 316L" }, delivery: "100-120 jours", warranty: "24 mois", parts_available: "Stock France", after_sales: "Contrat maintenance" },
    
    // ===== CORÉE =====
    { id: "concentrateur_kr_std", origin: "korean", name: "Concentrateur KR-1000", price_ttc: 38900, brand: "Daeyeong", supplier: "Daeyeong Machinery Co.", supplier_status: "Premium Partner (7 ans)", rating: 4.7, review_count: 56, specs: { power: "30 kW", capacity: "1000 L/h", dimensions: "4500x1800x3200 mm", weight: "3200 kg", material: "Acier inoxydable 304" }, delivery: "30-45 jours", warranty: "36 mois", parts_available: "Stock Abidjan", after_sales: "Technicien local + hotline" },
    { id: "concentrateur_kr_premium", origin: "korean", name: "Concentrateur KR-2000", price_ttc: 59900, brand: "Daeyeong", supplier: "Daeyeong Machinery Co.", supplier_status: "Premium Partner (9 ans)", rating: 4.9, review_count: 42, specs: { power: "55 kW", capacity: "2000 L/h", dimensions: "6000x2200x3800 mm", weight: "5000 kg", material: "Acier inoxydable 316L" }, delivery: "30-45 jours", warranty: "48 mois", parts_available: "Stock Abidjan + Dépôt France", after_sales: "Contrat maintenance + formation" },
    
    // ===== EUROPE (Bongard - France) =====
    { id: "concentrateur_eu_std", origin: "europe", name: "Concentrateur EU-800", price_ttc: 21900, brand: "Bongard", supplier: "Groupe Bongard", supplier_status: "Certified Partner (12 ans)", rating: 4.4, review_count: 45, specs: { power: "25 kW", capacity: "800 L/h", dimensions: "4000x1600x2800 mm", weight: "2800 kg", material: "Acier inoxydable" }, delivery: "15-30 jours", warranty: "6 mois", parts_available: "Stock France", after_sales: "SAV France + pièces 72h" },
    { id: "concentrateur_eu_premium", origin: "europe", name: "Concentrateur EU-1500", price_ttc: 36900, brand: "Bongard", supplier: "Groupe Bongard", supplier_status: "Premium Partner (15 ans)", rating: 4.7, review_count: 34, specs: { power: "40 kW", capacity: "1500 L/h", dimensions: "5200x2000x3200 mm", weight: "4000 kg", material: "Acier inoxydable 304" }, delivery: "15-30 jours", warranty: "12 mois", parts_available: "Stock France", after_sales: "Contrat maintenance" }
  ]
},
  // ==============================================
// HUILES ALIMENTAIRES - MODÈLES COMPLETS
// ==============================================

"nettoyeur_decortiqueur": {
  machine_ref: "nettoyeur_decortiqueur",
  machine_name: "Nettoyeur-décortiqueur",
  machine_role: "Nettoyage et décorticage des graines/noix",
  default_capacity: "500-3000 kg/h",
  default_utilities: "Électricité",
  models: [
    // ===== CHINE =====
    { id: "nettoyeur_cn_econo", origin: "chinese", name: "Nettoyeur ND-500", price_ttc: 5900, brand: "Jinfeng Oil", supplier: "Henan Jinfeng Oil Machinery", supplier_status: "Verified Supplier (5 ans)", rating: 4.2, review_count: 89, specs: { power: "4 kW", capacity: "500 kg/h", dimensions: "2500x900x1500 mm", weight: "450 kg", material: "Acier carbone" }, delivery: "45 jours", warranty: "12 mois", parts_available: "Stock Chine", after_sales: "Support technique" },
    { id: "nettoyeur_cn_std", origin: "chinese", name: "Nettoyeur ND-1500", price_ttc: 10900, brand: "Jinfeng Oil", supplier: "Henan Jinfeng Oil Machinery", supplier_status: "Gold Supplier (7 ans)", rating: 4.6, review_count: 167, specs: { power: "7.5 kW", capacity: "1500 kg/h", dimensions: "3500x1200x1800 mm", weight: "780 kg", material: "Acier inoxydable 304" }, delivery: "45-60 jours", warranty: "18 mois", parts_available: "Stock Abidjan", after_sales: "Formation + pièces" },
    { id: "nettoyeur_cn_premium", origin: "chinese", name: "Nettoyeur ND-3000", price_ttc: 17900, brand: "Jinfeng Oil", supplier: "Henan Jinfeng Oil Machinery", supplier_status: "Gold Supplier (8 ans)", rating: 4.8, review_count: 78, specs: { power: "11 kW", capacity: "3000 kg/h", dimensions: "4500x1500x2200 mm", weight: "1200 kg", material: "Acier inoxydable 304" }, delivery: "60 jours", warranty: "24 mois", parts_available: "Stock France", after_sales: "SAV local" },
    
    // ===== CORÉE =====
    { id: "nettoyeur_kr_std", origin: "korean", name: "Nettoyeur KR-2000", price_ttc: 14900, brand: "Daeyeong", supplier: "Daeyeong Machinery Co.", supplier_status: "Premium Partner (7 ans)", rating: 4.7, review_count: 56, specs: { power: "8 kW", capacity: "2000 kg/h", dimensions: "3800x1300x1900 mm", weight: "880 kg", material: "Acier inoxydable 304" }, delivery: "30-45 jours", warranty: "36 mois", parts_available: "Stock Abidjan", after_sales: "Technicien local + hotline" },
    { id: "nettoyeur_kr_premium", origin: "korean", name: "Nettoyeur KR-3500", price_ttc: 22900, brand: "Daeyeong", supplier: "Daeyeong Machinery Co.", supplier_status: "Premium Partner (9 ans)", rating: 4.9, review_count: 42, specs: { power: "12 kW", capacity: "3500 kg/h", dimensions: "4800x1600x2300 mm", weight: "1350 kg", material: "Acier inoxydable 316L" }, delivery: "30-45 jours", warranty: "48 mois", parts_available: "Stock Abidjan + Dépôt France", after_sales: "Contrat maintenance + formation" },
    
    // ===== EUROPE (Bongard - France) =====
    { id: "nettoyeur_eu_std", origin: "europe", name: "Nettoyeur EU-1200", price_ttc: 7900, brand: "Bongard", supplier: "Groupe Bongard", supplier_status: "Certified Partner (12 ans)", rating: 4.4, review_count: 45, specs: { power: "6 kW", capacity: "1200 kg/h", dimensions: "3200x1000x1700 mm", weight: "680 kg", material: "Acier inoxydable" }, delivery: "15-30 jours", warranty: "6 mois", parts_available: "Stock France", after_sales: "SAV France + pièces 72h" },
    { id: "nettoyeur_eu_premium", origin: "europe", name: "Nettoyeur EU-2500", price_ttc: 13900, brand: "Bongard", supplier: "Groupe Bongard", supplier_status: "Premium Partner (15 ans)", rating: 4.7, review_count: 34, specs: { power: "10 kW", capacity: "2500 kg/h", dimensions: "4200x1300x2000 mm", weight: "1050 kg", material: "Acier inoxydable 304" }, delivery: "15-30 jours", warranty: "12 mois", parts_available: "Stock France", after_sales: "Contrat maintenance" }
  ]
},

"broyeur_concasseur_huile": {
  machine_ref: "broyeur_concasseur_huile",
  machine_name: "Broyeur / Concasseur",
  machine_role: "Concassage des graines",
  default_capacity: "500-3000 kg/h",
  default_utilities: "Électricité",
  models: [
    // ===== CHINE =====
    { id: "broyeur_huile_cn_econo", origin: "chinese", name: "Concasseur BC-500", price_ttc: 6900, brand: "Jinfeng Oil", supplier: "Henan Jinfeng Oil Machinery", supplier_status: "Verified Supplier (5 ans)", rating: 4.3, review_count: 112, specs: { power: "7.5 kW", capacity: "500 kg/h", dimensions: "1500x800x1400 mm", weight: "520 kg", material: "Acier traité" }, delivery: "45 jours", warranty: "12 mois", parts_available: "Stock Chine", after_sales: "Support technique" },
    { id: "broyeur_huile_cn_std", origin: "chinese", name: "Concasseur BC-1500", price_ttc: 12900, brand: "Jinfeng Oil", supplier: "Henan Jinfeng Oil Machinery", supplier_status: "Gold Supplier (7 ans)", rating: 4.6, review_count: 234, specs: { power: "15 kW", capacity: "1500 kg/h", dimensions: "2000x1000x1600 mm", weight: "850 kg", material: "Acier traité" }, delivery: "45-60 jours", warranty: "18 mois", parts_available: "Stock Abidjan", after_sales: "Pièces détachées" },
    { id: "broyeur_huile_cn_premium", origin: "chinese", name: "Concasseur BC-3000", price_ttc: 19900, brand: "Jinfeng Oil", supplier: "Henan Jinfeng Oil Machinery", supplier_status: "Gold Supplier (8 ans)", rating: 4.8, review_count: 98, specs: { power: "22 kW", capacity: "3000 kg/h", dimensions: "2500x1200x1800 mm", weight: "1300 kg", material: "Acier inoxydable" }, delivery: "60 jours", warranty: "24 mois", parts_available: "Stock France", after_sales: "Contrat maintenance" },
    
    // ===== CORÉE =====
    { id: "broyeur_huile_kr_std", origin: "korean", name: "Concasseur KR-2000", price_ttc: 16900, brand: "Daeyeong", supplier: "Daeyeong Machinery Co.", supplier_status: "Premium Partner (7 ans)", rating: 4.7, review_count: 56, specs: { power: "16 kW", capacity: "2000 kg/h", dimensions: "2200x1100x1700 mm", weight: "950 kg", material: "Acier inoxydable 304" }, delivery: "30-45 jours", warranty: "36 mois", parts_available: "Stock Abidjan", after_sales: "Technicien local + hotline" },
    { id: "broyeur_huile_kr_premium", origin: "korean", name: "Concasseur KR-3500", price_ttc: 25900, brand: "Daeyeong", supplier: "Daeyeong Machinery Co.", supplier_status: "Premium Partner (9 ans)", rating: 4.9, review_count: 42, specs: { power: "25 kW", capacity: "3500 kg/h", dimensions: "2800x1300x1900 mm", weight: "1450 kg", material: "Acier inoxydable 316L" }, delivery: "30-45 jours", warranty: "48 mois", parts_available: "Stock Abidjan + Dépôt France", after_sales: "Contrat maintenance + formation" },
    
    // ===== EUROPE (Bongard - France) =====
    { id: "broyeur_huile_eu_std", origin: "europe", name: "Concasseur EU-1200", price_ttc: 8900, brand: "Bongard", supplier: "Groupe Bongard", supplier_status: "Certified Partner (12 ans)", rating: 4.4, review_count: 45, specs: { power: "12 kW", capacity: "1200 kg/h", dimensions: "1800x900x1500 mm", weight: "720 kg", material: "Acier inoxydable" }, delivery: "15-30 jours", warranty: "6 mois", parts_available: "Stock France", after_sales: "SAV France + pièces 72h" },
    { id: "broyeur_huile_eu_premium", origin: "europe", name: "Concasseur EU-2500", price_ttc: 15900, brand: "Bongard", supplier: "Groupe Bongard", supplier_status: "Premium Partner (15 ans)", rating: 4.7, review_count: 34, specs: { power: "18 kW", capacity: "2500 kg/h", dimensions: "2400x1100x1700 mm", weight: "1150 kg", material: "Acier inoxydable 304" }, delivery: "15-30 jours", warranty: "12 mois", parts_available: "Stock France", after_sales: "Contrat maintenance" }
  ]
},

"cuiseur_huile": {
  machine_ref: "cuiseur_huile",
  machine_name: "Cuiseur",
  machine_role: "Chauffage avant pressage",
  default_capacity: "500-2000 kg/h",
  default_utilities: "Électricité + vapeur",
  models: [
    // ===== CHINE =====
    { id: "cuiseur_cn_std", origin: "chinese", name: "Cuiseur CU-1000", price_ttc: 7900, brand: "Jinfeng Oil", supplier: "Henan Jinfeng Oil Machinery", supplier_status: "Verified Supplier (6 ans)", rating: 4.3, review_count: 78, specs: { power: "15 kW", capacity: "1000 kg/h", dimensions: "2500x1000x1800 mm", weight: "950 kg", material: "Acier inoxydable 304" }, delivery: "45-60 jours", warranty: "12 mois", parts_available: "Stock Chine", after_sales: "Support technique" },
    { id: "cuiseur_cn_premium", origin: "chinese", name: "Cuiseur CU-2000", price_ttc: 13900, brand: "Jinfeng Oil", supplier: "Henan Jinfeng Oil Machinery", supplier_status: "Gold Supplier (7 ans)", rating: 4.7, review_count: 56, specs: { power: "22 kW", capacity: "2000 kg/h", dimensions: "3200x1200x2000 mm", weight: "1450 kg", material: "Acier inoxydable 304" }, delivery: "60-75 jours", warranty: "18 mois", parts_available: "Stock Abidjan", after_sales: "Formation" },
    
    // ===== CORÉE =====
    { id: "cuiseur_kr_std", origin: "korean", name: "Cuiseur KR-1500", price_ttc: 10900, brand: "Daeyeong", supplier: "Daeyeong Machinery Co.", supplier_status: "Premium Partner (7 ans)", rating: 4.7, review_count: 56, specs: { power: "18 kW", capacity: "1500 kg/h", dimensions: "2800x1100x1900 mm", weight: "1200 kg", material: "Acier inoxydable 304" }, delivery: "30-45 jours", warranty: "36 mois", parts_available: "Stock Abidjan", after_sales: "Technicien local + hotline" },
    { id: "cuiseur_kr_premium", origin: "korean", name: "Cuiseur KR-2500", price_ttc: 18900, brand: "Daeyeong", supplier: "Daeyeong Machinery Co.", supplier_status: "Premium Partner (9 ans)", rating: 4.9, review_count: 42, specs: { power: "28 kW", capacity: "2500 kg/h", dimensions: "3600x1300x2100 mm", weight: "1750 kg", material: "Acier inoxydable 316L" }, delivery: "30-45 jours", warranty: "48 mois", parts_available: "Stock Abidjan + Dépôt France", after_sales: "Contrat maintenance + formation" },
    
    // ===== EUROPE (Bongard - France) =====
    { id: "cuiseur_eu_std", origin: "europe", name: "Cuiseur EU-800", price_ttc: 6900, brand: "Bongard", supplier: "Groupe Bongard", supplier_status: "Certified Partner (12 ans)", rating: 4.4, review_count: 45, specs: { power: "14 kW", capacity: "800 kg/h", dimensions: "2200x900x1700 mm", weight: "850 kg", material: "Acier inoxydable" }, delivery: "15-30 jours", warranty: "6 mois", parts_available: "Stock France", after_sales: "SAV France + pièces 72h" },
    { id: "cuiseur_eu_premium", origin: "europe", name: "Cuiseur EU-1800", price_ttc: 11900, brand: "Bongard", supplier: "Groupe Bongard", supplier_status: "Premium Partner (15 ans)", rating: 4.7, review_count: 34, specs: { power: "20 kW", capacity: "1800 kg/h", dimensions: "3000x1100x1900 mm", weight: "1300 kg", material: "Acier inoxydable 304" }, delivery: "15-30 jours", warranty: "12 mois", parts_available: "Stock France", after_sales: "Contrat maintenance" }
  ]
},

"presse_huile": {
  machine_ref: "presse_huile",
  machine_name: "Presse à huile",
  machine_role: "Extraction de l'huile des graines",
  default_capacity: "500-2000 kg/h",
  default_utilities: "Électricité",
  models: [
    // ===== CHINE =====
    { id: "presse_cn_econo", origin: "chinese", name: "Presse PH-500", price_ttc: 12900, brand: "Jinfeng Oil", supplier: "Henan Jinfeng Oil Machinery", supplier_status: "Verified Supplier (6 ans)", rating: 4.4, review_count: 145, specs: { power: "11 kW", capacity: "500 kg/h", dimensions: "2000x800x1400 mm", weight: "850 kg", material: "Acier traité" }, delivery: "45-60 jours", warranty: "12 mois", parts_available: "Stock Chine", after_sales: "Support technique" },
    { id: "presse_cn_std", origin: "chinese", name: "Presse PH-1200", price_ttc: 22900, brand: "Jinfeng Oil", supplier: "Henan Jinfeng Oil Machinery", supplier_status: "Gold Supplier (8 ans)", rating: 4.7, review_count: 267, specs: { power: "18.5 kW", capacity: "1200 kg/h", dimensions: "2800x1000x1600 mm", weight: "1450 kg", material: "Acier inoxydable" }, delivery: "60-75 jours", warranty: "18 mois", parts_available: "Stock Abidjan", after_sales: "Pièces détachées" },
    { id: "presse_cn_premium", origin: "chinese", name: "Presse PH-2000", price_ttc: 35900, brand: "Jinfeng Oil", supplier: "Henan Jinfeng Oil Machinery", supplier_status: "Gold Supplier (8 ans)", rating: 4.9, review_count: 89, specs: { power: "30 kW", capacity: "2000 kg/h", dimensions: "3500x1200x1800 mm", weight: "2200 kg", material: "Acier inoxydable 304" }, delivery: "75-90 jours", warranty: "24 mois", parts_available: "Stock France", after_sales: "Contrat maintenance" },
    
    // ===== CORÉE =====
    { id: "presse_kr_std", origin: "korean", name: "Presse KR-1500", price_ttc: 29900, brand: "Daeyeong", supplier: "Daeyeong Machinery Co.", supplier_status: "Premium Partner (7 ans)", rating: 4.7, review_count: 56, specs: { power: "22 kW", capacity: "1500 kg/h", dimensions: "3000x1100x1700 mm", weight: "1650 kg", material: "Acier inoxydable 304" }, delivery: "30-45 jours", warranty: "36 mois", parts_available: "Stock Abidjan", after_sales: "Technicien local + hotline" },
    { id: "presse_kr_premium", origin: "korean", name: "Presse KR-2500", price_ttc: 45900, brand: "Daeyeong", supplier: "Daeyeong Machinery Co.", supplier_status: "Premium Partner (9 ans)", rating: 4.9, review_count: 42, specs: { power: "35 kW", capacity: "2500 kg/h", dimensions: "3800x1300x1900 mm", weight: "2500 kg", material: "Acier inoxydable 316L" }, delivery: "30-45 jours", warranty: "48 mois", parts_available: "Stock Abidjan + Dépôt France", after_sales: "Contrat maintenance + formation" },
    
    // ===== EUROPE (Bongard - France) =====
    { id: "presse_eu_std", origin: "europe", name: "Presse EU-800", price_ttc: 15900, brand: "Bongard", supplier: "Groupe Bongard", supplier_status: "Certified Partner (12 ans)", rating: 4.4, review_count: 45, specs: { power: "14 kW", capacity: "800 kg/h", dimensions: "2200x900x1500 mm", weight: "1050 kg", material: "Acier inoxydable" }, delivery: "15-30 jours", warranty: "6 mois", parts_available: "Stock France", after_sales: "SAV France + pièces 72h" },
    { id: "presse_eu_premium", origin: "europe", name: "Presse EU-1800", price_ttc: 25900, brand: "Bongard", supplier: "Groupe Bongard", supplier_status: "Premium Partner (15 ans)", rating: 4.7, review_count: 34, specs: { power: "25 kW", capacity: "1800 kg/h", dimensions: "3200x1100x1700 mm", weight: "1850 kg", material: "Acier inoxydable 304" }, delivery: "15-30 jours", warranty: "12 mois", parts_available: "Stock France", after_sales: "Contrat maintenance" }
  ]
},

"filtre_presse_huile": {
  machine_ref: "filtre_presse_huile",
  machine_name: "Filtre-presse",
  machine_role: "Filtration des impuretés solides",
  default_capacity: "1000-5000 L/h",
  default_utilities: "Électricité",
  models: [
    // ===== CHINE =====
    { id: "filtre_huile_cn_econo", origin: "chinese", name: "Filtre FP-1000", price_ttc: 5900, brand: "Jinfeng Oil", supplier: "Henan Jinfeng Oil Machinery", supplier_status: "Verified Supplier (5 ans)", rating: 4.2, review_count: 98, specs: { power: "2.2 kW", capacity: "1000 L/h", dimensions: "1500x800x1200 mm", weight: "380 kg", material: "Acier inoxydable 304" }, delivery: "45 jours", warranty: "12 mois", parts_available: "Stock Chine", after_sales: "Support technique" },
    { id: "filtre_huile_cn_std", origin: "chinese", name: "Filtre FP-3000", price_ttc: 10900, brand: "Jinfeng Oil", supplier: "Henan Jinfeng Oil Machinery", supplier_status: "Gold Supplier (7 ans)", rating: 4.5, review_count: 189, specs: { power: "4 kW", capacity: "3000 L/h", dimensions: "2000x1000x1400 mm", weight: "620 kg", material: "Acier inoxydable 304" }, delivery: "45-60 jours", warranty: "18 mois", parts_available: "Stock Abidjan", after_sales: "Formation" },
    { id: "filtre_huile_cn_premium", origin: "chinese", name: "Filtre FP-5000", price_ttc: 17900, brand: "Jinfeng Oil", supplier: "Henan Jinfeng Oil Machinery", supplier_status: "Gold Supplier (8 ans)", rating: 4.8, review_count: 67, specs: { power: "5.5 kW", capacity: "5000 L/h", dimensions: "2500x1200x1600 mm", weight: "890 kg", material: "Acier inoxydable 316L" }, delivery: "60 jours", warranty: "24 mois", parts_available: "Stock France", after_sales: "SAV local" },
    
    // ===== CORÉE =====
    { id: "filtre_huile_kr_std", origin: "korean", name: "Filtre KR-2000", price_ttc: 7900, brand: "Daeyeong", supplier: "Daeyeong Machinery Co.", supplier_status: "Premium Partner (7 ans)", rating: 4.7, review_count: 56, specs: { power: "3 kW", capacity: "2000 L/h", dimensions: "1700x900x1300 mm", weight: "480 kg", material: "Acier inoxydable 304" }, delivery: "30-45 jours", warranty: "36 mois", parts_available: "Stock Abidjan", after_sales: "Technicien local + hotline" },
    { id: "filtre_huile_kr_premium", origin: "korean", name: "Filtre KR-4000", price_ttc: 13900, brand: "Daeyeong", supplier: "Daeyeong Machinery Co.", supplier_status: "Premium Partner (9 ans)", rating: 4.9, review_count: 42, specs: { power: "5 kW", capacity: "4000 L/h", dimensions: "2200x1100x1500 mm", weight: "780 kg", material: "Acier inoxydable 316L" }, delivery: "30-45 jours", warranty: "48 mois", parts_available: "Stock Abidjan + Dépôt France", after_sales: "Contrat maintenance + formation" },
    
    // ===== EUROPE (Bongard - France) =====
    { id: "filtre_huile_eu_std", origin: "europe", name: "Filtre EU-1500", price_ttc: 4900, brand: "Bongard", supplier: "Groupe Bongard", supplier_status: "Certified Partner (12 ans)", rating: 4.4, review_count: 45, specs: { power: "2.5 kW", capacity: "1500 L/h", dimensions: "1400x800x1200 mm", weight: "380 kg", material: "Acier inoxydable" }, delivery: "15-30 jours", warranty: "6 mois", parts_available: "Stock France", after_sales: "SAV France + pièces 72h" },
    { id: "filtre_huile_eu_premium", origin: "europe", name: "Filtre EU-3500", price_ttc: 9900, brand: "Bongard", supplier: "Groupe Bongard", supplier_status: "Premium Partner (15 ans)", rating: 4.7, review_count: 34, specs: { power: "4.5 kW", capacity: "3500 L/h", dimensions: "2100x1000x1400 mm", weight: "650 kg", material: "Acier inoxydable 304" }, delivery: "15-30 jours", warranty: "12 mois", parts_available: "Stock France", after_sales: "Contrat maintenance" }
  ]
},

"clarificateur_decanteuse": {
  machine_ref: "clarificateur_decanteuse",
  machine_name: "Clarificateur / Décanteuse",
  machine_role: "Séparation eau / huile et sédiments",
  default_capacity: "1000-5000 L/h",
  default_utilities: "Électricité",
  models: [
    // ===== CHINE =====
    { id: "clarificateur_cn_std", origin: "chinese", name: "Clarificateur CD-2000", price_ttc: 15900, brand: "Jinfeng Oil", supplier: "Henan Jinfeng Oil Machinery", supplier_status: "Gold Supplier (6 ans)", rating: 4.4, review_count: 112, specs: { power: "5.5 kW", capacity: "2000 L/h", dimensions: "2500x1000x1800 mm", weight: "850 kg", material: "Acier inoxydable 304" }, delivery: "60 jours", warranty: "12 mois", parts_available: "Stock Chine", after_sales: "Support technique" },
    { id: "clarificateur_cn_premium", origin: "chinese", name: "Clarificateur CD-5000", price_ttc: 28900, brand: "Jinfeng Oil", supplier: "Henan Jinfeng Oil Machinery", supplier_status: "Gold Supplier (7 ans)", rating: 4.7, review_count: 78, specs: { power: "11 kW", capacity: "5000 L/h", dimensions: "3200x1200x2200 mm", weight: "1450 kg", material: "Acier inoxydable 304" }, delivery: "75 jours", warranty: "18 mois", parts_available: "Stock Abidjan", after_sales: "Pièces détachées" },
    
    // ===== CORÉE =====
    { id: "clarificateur_kr_std", origin: "korean", name: "Clarificateur KR-3000", price_ttc: 21900, brand: "Daeyeong", supplier: "Daeyeong Machinery Co.", supplier_status: "Premium Partner (7 ans)", rating: 4.7, review_count: 56, specs: { power: "7 kW", capacity: "3000 L/h", dimensions: "2800x1100x1900 mm", weight: "980 kg", material: "Acier inoxydable 304" }, delivery: "30-45 jours", warranty: "36 mois", parts_available: "Stock Abidjan", after_sales: "Technicien local + hotline" },
    { id: "clarificateur_kr_premium", origin: "korean", name: "Clarificateur KR-6000", price_ttc: 36900, brand: "Daeyeong", supplier: "Daeyeong Machinery Co.", supplier_status: "Premium Partner (9 ans)", rating: 4.9, review_count: 42, specs: { power: "13 kW", capacity: "6000 L/h", dimensions: "3600x1400x2300 mm", weight: "1650 kg", material: "Acier inoxydable 316L" }, delivery: "30-45 jours", warranty: "48 mois", parts_available: "Stock Abidjan + Dépôt France", after_sales: "Contrat maintenance + formation" },
    
    // ===== EUROPE (Bongard - France) =====
    { id: "clarificateur_eu_std", origin: "europe", name: "Clarificateur EU-1500", price_ttc: 11900, brand: "Bongard", supplier: "Groupe Bongard", supplier_status: "Certified Partner (12 ans)", rating: 4.4, review_count: 45, specs: { power: "5 kW", capacity: "1500 L/h", dimensions: "2200x900x1700 mm", weight: "750 kg", material: "Acier inoxydable" }, delivery: "15-30 jours", warranty: "6 mois", parts_available: "Stock France", after_sales: "SAV France + pièces 72h" },
    { id: "clarificateur_eu_premium", origin: "europe", name: "Clarificateur EU-4000", price_ttc: 19900, brand: "Bongard", supplier: "Groupe Bongard", supplier_status: "Premium Partner (15 ans)", rating: 4.7, review_count: 34, specs: { power: "10 kW", capacity: "4000 L/h", dimensions: "3000x1200x2000 mm", weight: "1250 kg", material: "Acier inoxydable 304" }, delivery: "15-30 jours", warranty: "12 mois", parts_available: "Stock France", after_sales: "Contrat maintenance" }
  ]
},

"remplisseuse_huile": {
  machine_ref: "remplisseuse_huile",
  machine_name: "Remplisseuse-scelleuse",
  machine_role: "Mise en bidons / bouteilles",
  default_capacity: "500-2000 unités/h",
  default_utilities: "Électricité + air comprimé",
  models: [
    // ===== CHINE =====
    { id: "remplisseuse_huile_cn_econo", origin: "chinese", name: "Remplisseuse RH-500", price_ttc: 12900, brand: "Sainty Pack", supplier: "Sainty Packaging Machinery", supplier_status: "Verified Supplier (5 ans)", rating: 4.2, review_count: 134, specs: { power: "2.2 kW", capacity: "500 unités/h", dimensions: "2200x1000x1800 mm", weight: "580 kg", material: "Acier inoxydable 304" }, delivery: "45-60 jours", warranty: "12 mois", parts_available: "Stock Chine", after_sales: "Support technique" },
    { id: "remplisseuse_huile_cn_std", origin: "chinese", name: "Remplisseuse RH-1200", price_ttc: 22900, brand: "Sainty Pack", supplier: "Sainty Packaging Machinery", supplier_status: "Gold Supplier (7 ans)", rating: 4.6, review_count: 245, specs: { power: "4 kW", capacity: "1200 unités/h", dimensions: "3000x1200x2000 mm", weight: "950 kg", material: "Acier inoxydable 304" }, delivery: "60-75 jours", warranty: "18 mois", parts_available: "Stock Abidjan", after_sales: "Pièces détachées" },
    { id: "remplisseuse_huile_cn_premium", origin: "chinese", name: "Remplisseuse RH-2000", price_ttc: 38900, brand: "Sainty Pack", supplier: "Sainty Packaging Machinery", supplier_status: "Gold Supplier (8 ans)", rating: 4.8, review_count: 89, specs: { power: "5.5 kW", capacity: "2000 unités/h", dimensions: "4000x1500x2200 mm", weight: "1450 kg", material: "Acier inoxydable 316L" }, delivery: "75-90 jours", warranty: "24 mois", parts_available: "Stock France", after_sales: "Contrat maintenance" },
    
    // ===== CORÉE =====
    { id: "remplisseuse_huile_kr_std", origin: "korean", name: "Remplisseuse KR-800", price_ttc: 16900, brand: "Daeyeong", supplier: "Daeyeong Machinery Co.", supplier_status: "Premium Partner (7 ans)", rating: 4.7, review_count: 56, specs: { power: "3 kW", capacity: "800 unités/h", dimensions: "2400x1100x1900 mm", weight: "680 kg", material: "Acier inoxydable 304" }, delivery: "30-45 jours", warranty: "36 mois", parts_available: "Stock Abidjan", after_sales: "Technicien local + hotline" },
    { id: "remplisseuse_huile_kr_premium", origin: "korean", name: "Remplisseuse KR-1500", price_ttc: 28900, brand: "Daeyeong", supplier: "Daeyeong Machinery Co.", supplier_status: "Premium Partner (9 ans)", rating: 4.9, review_count: 42, specs: { power: "5 kW", capacity: "1500 unités/h", dimensions: "3200x1400x2100 mm", weight: "1050 kg", material: "Acier inoxydable 316L" }, delivery: "30-45 jours", warranty: "48 mois", parts_available: "Stock Abidjan + Dépôt France", after_sales: "Contrat maintenance + formation" },
    
    // ===== EUROPE (Bongard - France) =====
    { id: "remplisseuse_huile_eu_std", origin: "europe", name: "Remplisseuse EU-600", price_ttc: 9900, brand: "Bongard", supplier: "Groupe Bongard", supplier_status: "Certified Partner (12 ans)", rating: 4.4, review_count: 45, specs: { power: "2.5 kW", capacity: "600 unités/h", dimensions: "2000x900x1700 mm", weight: "520 kg", material: "Acier inoxydable" }, delivery: "15-30 jours", warranty: "6 mois", parts_available: "Stock France", after_sales: "SAV France + pièces 72h" },
    { id: "remplisseuse_huile_eu_premium", origin: "europe", name: "Remplisseuse EU-1200", price_ttc: 16900, brand: "Bongard", supplier: "Groupe Bongard", supplier_status: "Premium Partner (15 ans)", rating: 4.7, review_count: 34, specs: { power: "4 kW", capacity: "1200 unités/h", dimensions: "2800x1100x1900 mm", weight: "850 kg", material: "Acier inoxydable 304" }, delivery: "15-30 jours", warranty: "12 mois", parts_available: "Stock France", after_sales: "Contrat maintenance" }
  ]
},

// ===== MODULE RAFFINERIE HUILE =====

"neutraliseur_huile": {
  machine_ref: "neutraliseur_huile",
  machine_name: "Neutraliseur",
  machine_role: "Élimination des acides gras libres",
  default_capacity: "1000-5000 L/h",
  default_utilities: "Électricité + vapeur + eau",
  models: [
    // ===== CHINE =====
    { id: "neutraliseur_cn_std", origin: "chinese", name: "Neutraliseur NE-2000", price_ttc: 18900, brand: "Jinfeng Refining", supplier: "Henan Jinfeng Oil Refinery", supplier_status: "Gold Supplier (6 ans)", rating: 4.5, review_count: 78, specs: { power: "11 kW", capacity: "2000 L/h", dimensions: "4000x1500x2500 mm", weight: "1850 kg", material: "Acier inoxydable 304" }, delivery: "75-90 jours", warranty: "12 mois", parts_available: "Stock Chine", after_sales: "Support technique" },
    { id: "neutraliseur_cn_premium", origin: "chinese", name: "Neutraliseur NE-5000", price_ttc: 34900, brand: "Jinfeng Refining", supplier: "Henan Jinfeng Oil Refinery", supplier_status: "Gold Supplier (8 ans)", rating: 4.8, review_count: 45, specs: { power: "18.5 kW", capacity: "5000 L/h", dimensions: "5500x2000x3000 mm", weight: "3200 kg", material: "Acier inoxydable 316L" }, delivery: "90-105 jours", warranty: "24 mois", parts_available: "Stock France", after_sales: "Contrat maintenance" },
    
    // ===== CORÉE =====
    { id: "neutraliseur_kr_std", origin: "korean", name: "Neutraliseur KR-3000", price_ttc: 24900, brand: "Daeyeong", supplier: "Daeyeong Machinery Co.", supplier_status: "Premium Partner (7 ans)", rating: 4.7, review_count: 56, specs: { power: "15 kW", capacity: "3000 L/h", dimensions: "4500x1700x2600 mm", weight: "2200 kg", material: "Acier inoxydable 304" }, delivery: "30-45 jours", warranty: "36 mois", parts_available: "Stock Abidjan", after_sales: "Technicien local + hotline" },
    { id: "neutraliseur_kr_premium", origin: "korean", name: "Neutraliseur KR-6000", price_ttc: 45900, brand: "Daeyeong", supplier: "Daeyeong Machinery Co.", supplier_status: "Premium Partner (9 ans)", rating: 4.9, review_count: 42, specs: { power: "22 kW", capacity: "6000 L/h", dimensions: "6000x2200x3200 mm", weight: "3800 kg", material: "Acier inoxydable 316L" }, delivery: "30-45 jours", warranty: "48 mois", parts_available: "Stock Abidjan + Dépôt France", after_sales: "Contrat maintenance + formation" },
    
    // ===== EUROPE (Bongard - France) =====
    { id: "neutraliseur_eu_std", origin: "europe", name: "Neutraliseur EU-1500", price_ttc: 12900, brand: "Bongard", supplier: "Groupe Bongard", supplier_status: "Certified Partner (12 ans)", rating: 4.4, review_count: 45, specs: { power: "10 kW", capacity: "1500 L/h", dimensions: "3500x1400x2300 mm", weight: "1600 kg", material: "Acier inoxydable" }, delivery: "15-30 jours", warranty: "6 mois", parts_available: "Stock France", after_sales: "SAV France + pièces 72h" },
    { id: "neutraliseur_eu_premium", origin: "europe", name: "Neutraliseur EU-4000", price_ttc: 24900, brand: "Bongard", supplier: "Groupe Bongard", supplier_status: "Premium Partner (15 ans)", rating: 4.7, review_count: 34, specs: { power: "16 kW", capacity: "4000 L/h", dimensions: "4800x1800x2800 mm", weight: "2800 kg", material: "Acier inoxydable 304" }, delivery: "15-30 jours", warranty: "12 mois", parts_available: "Stock France", after_sales: "Contrat maintenance" }
  ]
},

"decoloreur_huile": {
  machine_ref: "decoloreur_huile",
  machine_name: "Décoloreur",
  machine_role: "Élimination des pigments et chlorophylles",
  default_capacity: "1000-5000 L/h",
  default_utilities: "Électricité + vapeur",
  models: [
    // ===== CHINE =====
    { id: "decoloreur_cn_std", origin: "chinese", name: "Décoloreur DC-2000", price_ttc: 15900, brand: "Jinfeng Refining", supplier: "Henan Jinfeng Oil Refinery", supplier_status: "Gold Supplier (6 ans)", rating: 4.4, review_count: 67, specs: { power: "7.5 kW", capacity: "2000 L/h", dimensions: "3500x1500x2200 mm", weight: "1450 kg", material: "Acier inoxydable 304" }, delivery: "75-90 jours", warranty: "12 mois", parts_available: "Stock Chine", after_sales: "Support technique" },
    { id: "decoloreur_cn_premium", origin: "chinese", name: "Décoloreur DC-5000", price_ttc: 29900, brand: "Jinfeng Refining", supplier: "Henan Jinfeng Oil Refinery", supplier_status: "Gold Supplier (8 ans)", rating: 4.7, review_count: 56, specs: { power: "15 kW", capacity: "5000 L/h", dimensions: "4800x2000x2800 mm", weight: "2800 kg", material: "Acier inoxydable 316L" }, delivery: "90-105 jours", warranty: "24 mois", parts_available: "Stock France", after_sales: "Contrat maintenance" },
    
    // ===== CORÉE =====
    { id: "decoloreur_kr_std", origin: "korean", name: "Décoloreur KR-3000", price_ttc: 21900, brand: "Daeyeong", supplier: "Daeyeong Machinery Co.", supplier_status: "Premium Partner (7 ans)", rating: 4.7, review_count: 56, specs: { power: "10 kW", capacity: "3000 L/h", dimensions: "3800x1600x2400 mm", weight: "1750 kg", material: "Acier inoxydable 304" }, delivery: "30-45 jours", warranty: "36 mois", parts_available: "Stock Abidjan", after_sales: "Technicien local + hotline" },
    { id: "decoloreur_kr_premium", origin: "korean", name: "Décoloreur KR-6000", price_ttc: 38900, brand: "Daeyeong", supplier: "Daeyeong Machinery Co.", supplier_status: "Premium Partner (9 ans)", rating: 4.9, review_count: 42, specs: { power: "18 kW", capacity: "6000 L/h", dimensions: "5200x2200x3000 mm", weight: "3200 kg", material: "Acier inoxydable 316L" }, delivery: "30-45 jours", warranty: "48 mois", parts_available: "Stock Abidjan + Dépôt France", after_sales: "Contrat maintenance + formation" },
    
    // ===== EUROPE (Bongard - France) =====
    { id: "decoloreur_eu_std", origin: "europe", name: "Décoloreur EU-1500", price_ttc: 10900, brand: "Bongard", supplier: "Groupe Bongard", supplier_status: "Certified Partner (12 ans)", rating: 4.4, review_count: 45, specs: { power: "6 kW", capacity: "1500 L/h", dimensions: "3200x1400x2100 mm", weight: "1250 kg", material: "Acier inoxydable" }, delivery: "15-30 jours", warranty: "6 mois", parts_available: "Stock France", after_sales: "SAV France + pièces 72h" },
    { id: "decoloreur_eu_premium", origin: "europe", name: "Décoloreur EU-4000", price_ttc: 19900, brand: "Bongard", supplier: "Groupe Bongard", supplier_status: "Premium Partner (15 ans)", rating: 4.7, review_count: 34, specs: { power: "14 kW", capacity: "4000 L/h", dimensions: "4500x1800x2600 mm", weight: "2500 kg", material: "Acier inoxydable 304" }, delivery: "15-30 jours", warranty: "12 mois", parts_available: "Stock France", after_sales: "Contrat maintenance" }
  ]
},

"desodoriseur_huile": {
  machine_ref: "desodoriseur_huile",
  machine_name: "Désodoriseur",
  machine_role: "Élimination des odeurs et acides gras volatils",
  default_capacity: "1000-5000 L/h",
  default_utilities: "Électricité + vapeur + eau",
  models: [
    // ===== CHINE =====
    { id: "desodoriseur_cn_std", origin: "chinese", name: "Désodoriseur DS-2000", price_ttc: 25900, brand: "Jinfeng Refining", supplier: "Henan Jinfeng Oil Refinery", supplier_status: "Gold Supplier (7 ans)", rating: 4.6, review_count: 89, specs: { power: "15 kW", capacity: "2000 L/h", dimensions: "4500x1800x2800 mm", weight: "2450 kg", material: "Acier inoxydable 304" }, delivery: "90-105 jours", warranty: "18 mois", parts_available: "Stock Abidjan", after_sales: "Formation + pièces" },
    { id: "desodoriseur_cn_premium", origin: "chinese", name: "Désodoriseur DS-5000", price_ttc: 45900, brand: "Jinfeng Refining", supplier: "Henan Jinfeng Oil Refinery", supplier_status: "Gold Supplier (8 ans)", rating: 4.9, review_count: 67, specs: { power: "22 kW", capacity: "5000 L/h", dimensions: "6000x2200x3500 mm", weight: "4200 kg", material: "Acier inoxydable 316L" }, delivery: "105-120 jours", warranty: "24 mois", parts_available: "Stock France", after_sales: "Contrat maintenance" },
    
    // ===== CORÉE =====
    { id: "desodoriseur_kr_std", origin: "korean", name: "Désodoriseur KR-3000", price_ttc: 34900, brand: "Daeyeong", supplier: "Daeyeong Machinery Co.", supplier_status: "Premium Partner (7 ans)", rating: 4.7, review_count: 56, specs: { power: "18 kW", capacity: "3000 L/h", dimensions: "5000x1900x3000 mm", weight: "2800 kg", material: "Acier inoxydable 304" }, delivery: "30-45 jours", warranty: "36 mois", parts_available: "Stock Abidjan", after_sales: "Technicien local + hotline" },
    { id: "desodoriseur_kr_premium", origin: "korean", name: "Désodoriseur KR-6000", price_ttc: 59900, brand: "Daeyeong", supplier: "Daeyeong Machinery Co.", supplier_status: "Premium Partner (9 ans)", rating: 4.9, review_count: 42, specs: { power: "28 kW", capacity: "6000 L/h", dimensions: "6500x2400x3800 mm", weight: "4800 kg", material: "Acier inoxydable 316L" }, delivery: "30-45 jours", warranty: "48 mois", parts_available: "Stock Abidjan + Dépôt France", after_sales: "Contrat maintenance + formation" },
    
    // ===== EUROPE (Bongard - France) =====
    { id: "desodoriseur_eu_std", origin: "europe", name: "Désodoriseur EU-1500", price_ttc: 17900, brand: "Bongard", supplier: "Groupe Bongard", supplier_status: "Certified Partner (12 ans)", rating: 4.4, review_count: 45, specs: { power: "14 kW", capacity: "1500 L/h", dimensions: "4000x1600x2600 mm", weight: "2100 kg", material: "Acier inoxydable" }, delivery: "15-30 jours", warranty: "6 mois", parts_available: "Stock France", after_sales: "SAV France + pièces 72h" },
    { id: "desodoriseur_eu_premium", origin: "europe", name: "Désodoriseur EU-4000", price_ttc: 29900, brand: "Bongard", supplier: "Groupe Bongard", supplier_status: "Premium Partner (15 ans)", rating: 4.7, review_count: 34, specs: { power: "20 kW", capacity: "4000 L/h", dimensions: "5200x2000x3200 mm", weight: "3500 kg", material: "Acier inoxydable 304" }, delivery: "15-30 jours", warranty: "12 mois", parts_available: "Stock France", after_sales: "Contrat maintenance" }
  ]
},

"fractionneur_huile": {
  machine_ref: "fractionneur_huile",
  machine_name: "Fractionneur",
  machine_role: "Séparation fractions (oléine/stéarine)",
  default_capacity: "1000-5000 L/h",
  default_utilities: "Électricité + froid",
  models: [
    // ===== CHINE =====
    { id: "fractionneur_cn_std", origin: "chinese", name: "Fractionneur FR-2000", price_ttc: 34900, brand: "Jinfeng Refining", supplier: "Henan Jinfeng Oil Refinery", supplier_status: "Gold Supplier (7 ans)", rating: 4.5, review_count: 56, specs: { power: "22 kW", capacity: "2000 L/h", dimensions: "5000x2000x3000 mm", weight: "3200 kg", material: "Acier inoxydable 304" }, delivery: "90-105 jours", warranty: "18 mois", parts_available: "Stock Chine", after_sales: "Support technique" },
    { id: "fractionneur_cn_premium", origin: "chinese", name: "Fractionneur FR-5000", price_ttc: 59900, brand: "Jinfeng Refining", supplier: "Henan Jinfeng Oil Refinery", supplier_status: "Gold Supplier (8 ans)", rating: 4.8, review_count: 45, specs: { power: "37 kW", capacity: "5000 L/h", dimensions: "6800x2500x3500 mm", weight: "5500 kg", material: "Acier inoxydable 316L" }, delivery: "105-120 jours", warranty: "24 mois", parts_available: "Stock France", after_sales: "Contrat maintenance" },
    
    // ===== CORÉE =====
    { id: "fractionneur_kr_std", origin: "korean", name: "Fractionneur KR-3000", price_ttc: 45900, brand: "Daeyeong", supplier: "Daeyeong Machinery Co.", supplier_status: "Premium Partner (7 ans)", rating: 4.7, review_count: 56, specs: { power: "28 kW", capacity: "3000 L/h", dimensions: "5500x2200x3200 mm", weight: "3800 kg", material: "Acier inoxydable 304" }, delivery: "30-45 jours", warranty: "36 mois", parts_available: "Stock Abidjan", after_sales: "Technicien local + hotline" },
    { id: "fractionneur_kr_premium", origin: "korean", name: "Fractionneur KR-6000", price_ttc: 75900, brand: "Daeyeong", supplier: "Daeyeong Machinery Co.", supplier_status: "Premium Partner (9 ans)", rating: 4.9, review_count: 42, specs: { power: "45 kW", capacity: "6000 L/h", dimensions: "7500x2800x3800 mm", weight: "6200 kg", material: "Acier inoxydable 316L" }, delivery: "30-45 jours", warranty: "48 mois", parts_available: "Stock Abidjan + Dépôt France", after_sales: "Contrat maintenance + formation" },
    
    // ===== EUROPE (Bongard - France) =====
    { id: "fractionneur_eu_std", origin: "europe", name: "Fractionneur EU-1500", price_ttc: 25900, brand: "Bongard", supplier: "Groupe Bongard", supplier_status: "Certified Partner (12 ans)", rating: 4.4, review_count: 45, specs: { power: "20 kW", capacity: "1500 L/h", dimensions: "4500x1800x2800 mm", weight: "2800 kg", material: "Acier inoxydable" }, delivery: "15-30 jours", warranty: "6 mois", parts_available: "Stock France", after_sales: "SAV France + pièces 72h" },
    { id: "fractionneur_eu_premium", origin: "europe", name: "Fractionneur EU-4000", price_ttc: 45900, brand: "Bongard", supplier: "Groupe Bongard", supplier_status: "Premium Partner (15 ans)", rating: 4.7, review_count: 34, specs: { power: "35 kW", capacity: "4000 L/h", dimensions: "6000x2300x3200 mm", weight: "4500 kg", material: "Acier inoxydable 304" }, delivery: "15-30 jours", warranty: "12 mois", parts_available: "Stock France", after_sales: "Contrat maintenance" }
  ]
},
  
  // ==================== TRANSFORMATION D'ÉPICES ====================

  "laveuse_decanteuse_epices": {
    machine_ref: "laveuse_decanteuse_epices",
    machine_name: "Laveuse-décanteuse",
    machine_role: "Nettoyage des épices brutes (pierre, sable, impuretés)",
    default_capacity: "100-500 kg/h",
    default_utilities: "Eau + électricité",
    models: [
      { id: "laveuse_epices_econo", name: "Laveuse LE-100", price_ttc: 4900, brand: "Jinfeng Spice", supplier: "Henan Jinfeng Spice Machinery", supplier_status: "Verified Supplier (4 ans)", rating: 4.2, review_count: 67, specs: { power: "1.5 kW", capacity: "100 kg/h", dimensions: "1800x700x1200 mm", weight: "280 kg", material: "Acier inoxydable 304" }, delivery: "45 jours", warranty: "12 mois", parts_available: "Stock Chine", after_sales: "Support technique" },
      { id: "laveuse_epices_std", name: "Laveuse LE-300", price_ttc: 8900, brand: "Jinfeng Spice", supplier: "Henan Jinfeng Spice Machinery", supplier_status: "Gold Supplier (6 ans)", rating: 4.5, review_count: 134, specs: { power: "2.2 kW", capacity: "300 kg/h", dimensions: "2500x900x1400 mm", weight: "480 kg", material: "Acier inoxydable 304" }, delivery: "45-60 jours", warranty: "18 mois", parts_available: "Stock Abidjan", after_sales: "Formation + pièces" },
      { id: "laveuse_epices_premium", name: "Laveuse LE-500", price_ttc: 13900, brand: "Jinfeng Spice", supplier: "Henan Jinfeng Spice Machinery", supplier_status: "Gold Supplier (7 ans)", rating: 4.8, review_count: 56, specs: { power: "4 kW", capacity: "500 kg/h", dimensions: "3200x1100x1600 mm", weight: "750 kg", material: "Acier inoxydable 316L" }, delivery: "60 jours", warranty: "24 mois", parts_available: "Stock France", after_sales: "SAV local" }
    ]
  },

  "sechoir_epices": {
    machine_ref: "sechoir_epices",
    machine_name: "Séchoir à épices (chambre / four)",
    machine_role: "Séchage des épices après nettoyage",
    default_capacity: "50-200 kg/batch",
    default_utilities: "Électricité ou gaz",
    models: [
      { id: "sechoir_epices_econo", name: "Séchoir SE-50", price_ttc: 6900, brand: "Jinfeng Spice", supplier: "Henan Jinfeng Spice Machinery", supplier_status: "Verified Supplier (4 ans)", rating: 4.1, review_count: 89, specs: { power: "6 kW", capacity: "50 kg/batch", dimensions: "1500x1200x1800 mm", weight: "450 kg", material: "Acier inoxydable 304" }, delivery: "45 jours", warranty: "12 mois", parts_available: "Stock Chine", after_sales: "Support technique" },
      { id: "sechoir_epices_std", name: "Séchoir SE-120", price_ttc: 12900, brand: "Jinfeng Spice", supplier: "Henan Jinfeng Spice Machinery", supplier_status: "Gold Supplier (6 ans)", rating: 4.5, review_count: 178, specs: { power: "12 kW", capacity: "120 kg/batch", dimensions: "2200x1500x2200 mm", weight: "850 kg", material: "Acier inoxydable 304" }, delivery: "45-60 jours", warranty: "18 mois", parts_available: "Stock Abidjan", after_sales: "Formation" },
      { id: "sechoir_epices_premium", name: "Séchoir SE-200", price_ttc: 19900, brand: "Jinfeng Spice", supplier: "Henan Jinfeng Spice Machinery", supplier_status: "Gold Supplier (7 ans)", rating: 4.8, review_count: 78, specs: { power: "18 kW", capacity: "200 kg/batch", dimensions: "2800x1800x2500 mm", weight: "1250 kg", material: "Acier inoxydable 316L" }, delivery: "60 jours", warranty: "24 mois", parts_available: "Stock France", after_sales: "Contrat maintenance" }
    ]
  },

  "broyeur_epices": {
    machine_ref: "broyeur_epices",
    machine_name: "Broyeur (moulin à épices)",
    machine_role: "Broyage des épices pour obtenir une poudre fine",
    default_capacity: "50-200 kg/h",
    default_utilities: "Électricité",
    models: [
      { id: "broyeur_epices_econo", name: "Broyeur BE-50", price_ttc: 5900, brand: "Jinfeng Spice", supplier: "Henan Jinfeng Spice Machinery", supplier_status: "Verified Supplier (5 ans)", rating: 4.3, review_count: 112, specs: { power: "4 kW", capacity: "50 kg/h", dimensions: "1000x600x1300 mm", weight: "220 kg", material: "Acier inoxydable 304" }, delivery: "45 jours", warranty: "12 mois", parts_available: "Stock Chine", after_sales: "Support technique" },
      { id: "broyeur_epices_std", name: "Broyeur BE-120", price_ttc: 10900, brand: "Jinfeng Spice", supplier: "Henan Jinfeng Spice Machinery", supplier_status: "Gold Supplier (7 ans)", rating: 4.6, review_count: 256, specs: { power: "7.5 kW", capacity: "120 kg/h", dimensions: "1300x800x1500 mm", weight: "420 kg", material: "Acier inoxydable 304" }, delivery: "45-60 jours", warranty: "18 mois", parts_available: "Stock Abidjan", after_sales: "Pièces détachées" },
      { id: "broyeur_epices_premium", name: "Broyeur BE-200", price_ttc: 17900, brand: "Jinfeng Spice", supplier: "Henan Jinfeng Spice Machinery", supplier_status: "Gold Supplier (8 ans)", rating: 4.9, review_count: 89, specs: { power: "11 kW", capacity: "200 kg/h", dimensions: "1600x1000x1700 mm", weight: "650 kg", material: "Acier inoxydable 316L" }, delivery: "60-75 jours", warranty: "24 mois", parts_available: "Stock France", after_sales: "Contrat maintenance" }
    ]
  },

  "tamiseuse_epices": {
    machine_ref: "tamiseuse_epices",
    machine_name: "Tamiseuse vibrante",
    machine_role: "Classification granulométrique de la poudre",
    default_capacity: "100-500 kg/h",
    default_utilities: "Électricité",
    models: [
      { id: "tamiseuse_epices_std", name: "Tamiseuse TV-200", price_ttc: 4900, brand: "Jinfeng Spice", supplier: "Henan Jinfeng Spice Machinery", supplier_status: "Verified Supplier (5 ans)", rating: 4.3, review_count: 78, specs: { power: "0.75 kW", capacity: "200 kg/h", dimensions: "1200x800x1100 mm", weight: "180 kg", material: "Acier inoxydable 304" }, delivery: "45 jours", warranty: "12 mois", parts_available: "Stock Chine", after_sales: "Support technique" },
      { id: "tamiseuse_epices_premium", name: "Tamiseuse TV-500", price_ttc: 8900, brand: "Jinfeng Spice", supplier: "Henan Jinfeng Spice Machinery", supplier_status: "Gold Supplier (6 ans)", rating: 4.7, review_count: 112, specs: { power: "1.1 kW", capacity: "500 kg/h", dimensions: "1500x1000x1300 mm", weight: "320 kg", material: "Acier inoxydable 304" }, delivery: "45-60 jours", warranty: "18 mois", parts_available: "Stock Abidjan", after_sales: "Pièces détachées" }
    ]
  },

  "melangeuse_epices": {
    machine_ref: "melangeuse_epices",
    machine_name: "Mélangeuse (spice blender)",
    machine_role: "Mélange personnalisé d'épices (innovation)",
    default_capacity: "100-500 kg/h",
    default_utilities: "Électricité",
    models: [
      { id: "melangeuse_epices_std", name: "Mélangeuse MX-200", price_ttc: 8900, brand: "Jinfeng Spice", supplier: "Henan Jinfeng Spice Machinery", supplier_status: "Gold Supplier (6 ans)", rating: 4.5, review_count: 98, specs: { power: "2.2 kW", capacity: "200 kg/h", dimensions: "1800x800x1500 mm", weight: "380 kg", material: "Acier inoxydable 304" }, delivery: "45 jours", warranty: "12 mois", parts_available: "Stock Chine", after_sales: "Support technique" },
      { id: "melangeuse_epices_premium", name: "Mélangeuse MX-500", price_ttc: 15900, brand: "Jinfeng Spice", supplier: "Henan Jinfeng Spice Machinery", supplier_status: "Gold Supplier (7 ans)", rating: 4.8, review_count: 67, specs: { power: "4 kW", capacity: "500 kg/h", dimensions: "2400x1000x1800 mm", weight: "620 kg", material: "Acier inoxydable 304" }, delivery: "60 jours", warranty: "24 mois", parts_available: "Stock Abidjan", after_sales: "Formation recettes" }
    ]
  },

  "conditionneuse_sachets": {
    machine_ref: "conditionneuse_sachets",
    machine_name: "Conditionneuse (malsachets)",
    machine_role: "Mise en sachets / pots / boîtes",
    default_capacity: "500-2000 sachets/h",
    default_utilities: "Électricité + air comprimé",
    models: [
      { id: "conditionneuse_econo", name: "Condi. EP-500", price_ttc: 10900, brand: "Sainty Pack", supplier: "Sainty Packaging Machinery", supplier_status: "Verified Supplier (5 ans)", rating: 4.2, review_count: 134, specs: { power: "1.5 kW", capacity: "500 sachets/h", dimensions: "2000x800x1800 mm", weight: "450 kg", material: "Acier inoxydable 304" }, delivery: "45-60 jours", warranty: "12 mois", parts_available: "Stock Chine", after_sales: "Support technique" },
      { id: "conditionneuse_std", name: "Condi. EP-1200", price_ttc: 19900, brand: "Sainty Pack", supplier: "Sainty Packaging Machinery", supplier_status: "Gold Supplier (7 ans)", rating: 4.6, review_count: 245, specs: { power: "2.2 kW", capacity: "1200 sachets/h", dimensions: "2800x1000x2000 mm", weight: "780 kg", material: "Acier inoxydable 304" }, delivery: "60-75 jours", warranty: "18 mois", parts_available: "Stock Abidjan", after_sales: "Pièces détachées" },
      { id: "conditionneuse_premium", name: "Condi. EP-2000", price_ttc: 32900, brand: "Sainty Pack", supplier: "Sainty Packaging Machinery", supplier_status: "Gold Supplier (8 ans)", rating: 4.8, review_count: 89, specs: { power: "3 kW", capacity: "2000 sachets/h", dimensions: "3500x1200x2200 mm", weight: "1200 kg", material: "Acier inoxydable 316L" }, delivery: "75-90 jours", warranty: "24 mois", parts_available: "Stock France", after_sales: "Contrat maintenance" }
    ]
  },

  "etiqueteuse_epices": {
    machine_ref: "etiqueteuse_epices",
    machine_name: "Étiqeteuse",
    machine_role: "Pose étiquettes / numéros de lot",
    default_capacity: "500-2000 unités/h",
    default_utilities: "Électricité",
    models: [
      { id: "etiqueteuse_epices_std", name: "Étiqeteuse ET-800", price_ttc: 5900, brand: "Sainty Pack", supplier: "Sainty Packaging Machinery", supplier_status: "Verified Supplier (4 ans)", rating: 4.3, review_count: 112, specs: { power: "0.75 kW", capacity: "800 unités/h", dimensions: "1500x700x1400 mm", weight: "180 kg", material: "Acier inoxydable" }, delivery: "30-45 jours", warranty: "12 mois", parts_available: "Stock Chine", after_sales: "Support technique" },
      { id: "etiqueteuse_epices_premium", name: "Étiqeteuse ET-2000", price_ttc: 10900, brand: "Sainty Pack", supplier: "Sainty Packaging Machinery", supplier_status: "Gold Supplier (6 ans)", rating: 4.7, review_count: 89, specs: { power: "1.1 kW", capacity: "2000 unités/h", dimensions: "2000x900x1600 mm", weight: "280 kg", material: "Acier inoxydable 304" }, delivery: "45-60 jours", warranty: "18 mois", parts_available: "Stock Abidjan", after_sales: "Formation" }
    ]
  },
  "laboratoire_qualite": {
    machine_ref: "laboratoire_qualite",
    machine_name: "Laboratoire qualité",
    machine_role: "Analyse, contrôle et développement de recettes",
    default_capacity: "Analyse batch",
    default_utilities: "Électricité",
    models: [
      { id: "lab_std", name: "Labo Qualité (base)", price_ttc: 14900, brand: "Labtech", supplier: "Labtech Analytics", supplier_status: "Certified Partner", rating: 4.5, review_count: 45, specs: { power: "1.5 kW", capacity: "Kit analyse", dimensions: "2000x800x2000 mm", weight: "180 kg", material: "Equipement labo" }, delivery: "60 jours", warranty: "12 mois", parts_available: "Stock France", after_sales: "Formation" },
      { id: "lab_premium", name: "Labo Qualité (complet)", price_ttc: 34900, brand: "Labtech", supplier: "Labtech Analytics", supplier_status: "Premium Partner", rating: 4.9, review_count: 28, specs: { power: "3 kW", capacity: "Analyse complète", dimensions: "3000x1500x2200 mm", weight: "380 kg", material: "Equipement labo certifié" }, delivery: "75-90 jours", warranty: "24 mois", parts_available: "Stock France", after_sales: "Contrat maintenance + formation" }
    ]
  },

  "micro_doseuse": {
    machine_ref: "micro_doseuse",
    machine_name: "Micro-doseuse",
    machine_role: "Micro-dosage pour petites séries (innovation, R&D)",
    default_capacity: "10-50 kg/h",
    default_utilities: "Électricité",
    models: [
      { id: "micro_doseuse_std", name: "Micro-doseuse MD-25", price_ttc: 7900, brand: "Sainty Pack", supplier: "Sainty Packaging Machinery", supplier_status: "Verified Supplier (5 ans)", rating: 4.4, review_count: 34, specs: { power: "0.5 kW", capacity: "25 kg/h", dimensions: "1000x600x1200 mm", weight: "120 kg", material: "Acier inoxydable 304" }, delivery: "45 jours", warranty: "12 mois", parts_available: "Stock Chine", after_sales: "Support technique" },
      { id: "micro_doseuse_premium", name: "Micro-doseuse MD-50", price_ttc: 12900, brand: "Sainty Pack", supplier: "Sainty Packaging Machinery", supplier_status: "Gold Supplier (6 ans)", rating: 4.7, review_count: 28, specs: { power: "0.75 kW", capacity: "50 kg/h", dimensions: "1200x800x1400 mm", weight: "180 kg", material: "Acier inoxydable 304" }, delivery: "60 jours", warranty: "18 mois", parts_available: "Stock Abidjan", after_sales: "Formation recettes" }
    ]
  },
  // ==============================================
// MINI-LAITERIE - MODÈLES COMPLETS
// ==============================================

"cuve_reception": {
  machine_ref: "cuve_reception",
  machine_name: "Cuve de réception",
  machine_role: "Réception et filtration du lait",
  default_capacity: "5000-20000 L",
  default_utilities: "Électricité",
  models: [
    // ===== CHINE =====
    { id: "cuve_reception_cn_econo", origin: "chinese", name: "Cuve R-5000", price_ttc: 7900, brand: "Jinfeng Dairy", supplier: "Henan Jinfeng Dairy Machinery", supplier_status: "Verified Supplier (5 ans)", rating: 4.2, review_count: 67, specs: { power: "1.5 kW", capacity: "5000 L", dimensions: "2500x2000x2500 mm", weight: "800 kg", material: "Acier inoxydable 304" }, delivery: "45 jours", warranty: "12 mois", parts_available: "Stock Chine", after_sales: "Support technique" },
    { id: "cuve_reception_cn_std", origin: "chinese", name: "Cuve R-10000", price_ttc: 12900, brand: "Jinfeng Dairy", supplier: "Henan Jinfeng Dairy Machinery", supplier_status: "Gold Supplier (7 ans)", rating: 4.6, review_count: 112, specs: { power: "2.2 kW", capacity: "10000 L", dimensions: "3000x2500x2800 mm", weight: "1200 kg", material: "Acier inoxydable 304" }, delivery: "45-60 jours", warranty: "18 mois", parts_available: "Stock Abidjan", after_sales: "Formation + pièces" },
    { id: "cuve_reception_cn_premium", origin: "chinese", name: "Cuve R-20000", price_ttc: 19900, brand: "Jinfeng Dairy", supplier: "Henan Jinfeng Dairy Machinery", supplier_status: "Gold Supplier (8 ans)", rating: 4.9, review_count: 45, specs: { power: "3 kW", capacity: "20000 L", dimensions: "3500x3000x3200 mm", weight: "1800 kg", material: "Acier inoxydable 316L" }, delivery: "60 jours", warranty: "24 mois", parts_available: "Stock France", after_sales: "Contrat maintenance" },
    
    // ===== CORÉE =====
    { id: "cuve_reception_kr_std", origin: "korean", name: "Cuve KR-8000", price_ttc: 10900, brand: "Daeyeong", supplier: "Daeyeong Machinery Co.", supplier_status: "Premium Partner (7 ans)", rating: 4.7, review_count: 56, specs: { power: "2 kW", capacity: "8000 L", dimensions: "2800x2200x2600 mm", weight: "1000 kg", material: "Acier inoxydable 304" }, delivery: "30-45 jours", warranty: "36 mois", parts_available: "Stock Abidjan", after_sales: "Technicien local + hotline" },
    { id: "cuve_reception_kr_premium", origin: "korean", name: "Cuve KR-15000", price_ttc: 16900, brand: "Daeyeong", supplier: "Daeyeong Machinery Co.", supplier_status: "Premium Partner (9 ans)", rating: 4.9, review_count: 42, specs: { power: "3.5 kW", capacity: "15000 L", dimensions: "3200x2700x3000 mm", weight: "1500 kg", material: "Acier inoxydable 316L" }, delivery: "30-45 jours", warranty: "48 mois", parts_available: "Stock Abidjan + Dépôt France", after_sales: "Contrat maintenance + formation" },
    
    // ===== EUROPE (Bongard - France) =====
    { id: "cuve_reception_eu_std", origin: "europe", name: "Cuve EU-6000", price_ttc: 6900, brand: "Bongard", supplier: "Groupe Bongard", supplier_status: "Certified Partner (12 ans)", rating: 4.4, review_count: 45, specs: { power: "1.8 kW", capacity: "6000 L", dimensions: "2400x1900x2300 mm", weight: "850 kg", material: "Acier inoxydable" }, delivery: "15-30 jours", warranty: "6 mois", parts_available: "Stock France", after_sales: "SAV France + pièces 72h" },
    { id: "cuve_reception_eu_premium", origin: "europe", name: "Cuve EU-12000", price_ttc: 11900, brand: "Bongard", supplier: "Groupe Bongard", supplier_status: "Premium Partner (15 ans)", rating: 4.7, review_count: 34, specs: { power: "3 kW", capacity: "12000 L", dimensions: "3000x2400x2800 mm", weight: "1300 kg", material: "Acier inoxydable 304" }, delivery: "15-30 jours", warranty: "12 mois", parts_available: "Stock France", after_sales: "Contrat maintenance" }
  ]
},

"pasteurisateur_lait": {
  machine_ref: "pasteurisateur_lait",
  machine_name: "Pasteurisateur",
  machine_role: "Pasteurisation du lait",
  default_capacity: "500-2000 L/h",
  default_utilities: "Électricité + eau + vapeur",
  models: [
    // ===== CHINE =====
    { id: "pasteurisateur_lait_cn_econo", origin: "chinese", name: "Pasteurisateur PL-500", price_ttc: 16900, brand: "Jinfeng Dairy", supplier: "Henan Jinfeng Dairy Machinery", supplier_status: "Verified Supplier (6 ans)", rating: 4.3, review_count: 89, specs: { power: "9 kW", capacity: "500 L/h", dimensions: "2000x1000x1800 mm", weight: "650 kg", material: "Acier inoxydable 304" }, delivery: "45-60 jours", warranty: "12 mois", parts_available: "Stock Chine", after_sales: "Support technique" },
    { id: "pasteurisateur_lait_cn_std", origin: "chinese", name: "Pasteurisateur PL-1200", price_ttc: 25900, brand: "Jinfeng Dairy", supplier: "Henan Jinfeng Dairy Machinery", supplier_status: "Gold Supplier (7 ans)", rating: 4.7, review_count: 156, specs: { power: "15 kW", capacity: "1200 L/h", dimensions: "2800x1200x2000 mm", weight: "950 kg", material: "Acier inoxydable 304" }, delivery: "60-75 jours", warranty: "18 mois", parts_available: "Stock Abidjan", after_sales: "Formation + pièces" },
    { id: "pasteurisateur_lait_cn_premium", origin: "chinese", name: "Pasteurisateur PL-2000", price_ttc: 39900, brand: "Jinfeng Dairy", supplier: "Henan Jinfeng Dairy Machinery", supplier_status: "Gold Supplier (8 ans)", rating: 4.9, review_count: 78, specs: { power: "22 kW", capacity: "2000 L/h", dimensions: "3500x1500x2200 mm", weight: "1450 kg", material: "Acier inoxydable 316L" }, delivery: "75-90 jours", warranty: "24 mois", parts_available: "Stock France", after_sales: "Contrat maintenance" },
    
    // ===== CORÉE =====
    { id: "pasteurisateur_lait_kr_std", origin: "korean", name: "Pasteurisateur KR-800", price_ttc: 21900, brand: "Daeyeong", supplier: "Daeyeong Machinery Co.", supplier_status: "Premium Partner (7 ans)", rating: 4.7, review_count: 56, specs: { power: "12 kW", capacity: "800 L/h", dimensions: "2400x1100x1900 mm", weight: "850 kg", material: "Acier inoxydable 304" }, delivery: "30-45 jours", warranty: "36 mois", parts_available: "Stock Abidjan", after_sales: "Technicien local + hotline" },
    { id: "pasteurisateur_lait_kr_premium", origin: "korean", name: "Pasteurisateur KR-1500", price_ttc: 32900, brand: "Daeyeong", supplier: "Daeyeong Machinery Co.", supplier_status: "Premium Partner (9 ans)", rating: 4.9, review_count: 42, specs: { power: "18 kW", capacity: "1500 L/h", dimensions: "3000x1400x2100 mm", weight: "1250 kg", material: "Acier inoxydable 316L" }, delivery: "30-45 jours", warranty: "48 mois", parts_available: "Stock Abidjan + Dépôt France", after_sales: "Contrat maintenance + formation" },
    
    // ===== EUROPE (Bongard - France) =====
    { id: "pasteurisateur_lait_eu_std", origin: "europe", name: "Pasteurisateur EU-600", price_ttc: 13900, brand: "Bongard", supplier: "Groupe Bongard", supplier_status: "Certified Partner (12 ans)", rating: 4.4, review_count: 45, specs: { power: "8 kW", capacity: "600 L/h", dimensions: "2200x1000x1800 mm", weight: "720 kg", material: "Acier inoxydable" }, delivery: "15-30 jours", warranty: "6 mois", parts_available: "Stock France", after_sales: "SAV France + pièces 72h" },
    { id: "pasteurisateur_lait_eu_premium", origin: "europe", name: "Pasteurisateur EU-1000", price_ttc: 21900, brand: "Bongard", supplier: "Groupe Bongard", supplier_status: "Premium Partner (15 ans)", rating: 4.7, review_count: 34, specs: { power: "14 kW", capacity: "1000 L/h", dimensions: "2600x1200x2000 mm", weight: "1050 kg", material: "Acier inoxydable 304" }, delivery: "15-30 jours", warranty: "12 mois", parts_available: "Stock France", after_sales: "Contrat maintenance" }
  ]
},

"ecremeuse": {
  machine_ref: "ecremeuse",
  machine_name: "Écrémeuse",
  machine_role: "Séparation de la crème",
  default_capacity: "500-2000 L/h",
  default_utilities: "Électricité",
  models: [
    // ===== CHINE =====
    { id: "ecremeuse_cn_std", origin: "chinese", name: "Écrémeuse EC-1000", price_ttc: 8900, brand: "Jinfeng Dairy", supplier: "Henan Jinfeng Dairy Machinery", supplier_status: "Verified Supplier (5 ans)", rating: 4.4, review_count: 78, specs: { power: "3 kW", capacity: "1000 L/h", dimensions: "1200x800x1400 mm", weight: "280 kg", material: "Acier inoxydable 304" }, delivery: "45 jours", warranty: "12 mois", parts_available: "Stock Chine", after_sales: "Support technique" },
    { id: "ecremeuse_cn_premium", origin: "chinese", name: "Écrémeuse EC-2000", price_ttc: 14900, brand: "Jinfeng Dairy", supplier: "Henan Jinfeng Dairy Machinery", supplier_status: "Gold Supplier (7 ans)", rating: 4.8, review_count: 56, specs: { power: "5.5 kW", capacity: "2000 L/h", dimensions: "1500x1000x1600 mm", weight: "420 kg", material: "Acier inoxydable 304" }, delivery: "60 jours", warranty: "18 mois", parts_available: "Stock Abidjan", after_sales: "Pièces détachées" },
    
    // ===== CORÉE =====
    { id: "ecremeuse_kr_std", origin: "korean", name: "Écrémeuse KR-1500", price_ttc: 11900, brand: "Daeyeong", supplier: "Daeyeong Machinery Co.", supplier_status: "Premium Partner (7 ans)", rating: 4.7, review_count: 56, specs: { power: "4 kW", capacity: "1500 L/h", dimensions: "1400x900x1500 mm", weight: "350 kg", material: "Acier inoxydable 304" }, delivery: "30-45 jours", warranty: "36 mois", parts_available: "Stock Abidjan", after_sales: "Technicien local + hotline" },
    { id: "ecremeuse_kr_premium", origin: "korean", name: "Écrémeuse KR-2500", price_ttc: 18900, brand: "Daeyeong", supplier: "Daeyeong Machinery Co.", supplier_status: "Premium Partner (9 ans)", rating: 4.9, review_count: 42, specs: { power: "7 kW", capacity: "2500 L/h", dimensions: "1700x1100x1700 mm", weight: "520 kg", material: "Acier inoxydable 316L" }, delivery: "30-45 jours", warranty: "48 mois", parts_available: "Stock Abidjan + Dépôt France", after_sales: "Contrat maintenance + formation" },
    
    // ===== EUROPE (Bongard - France) =====
    { id: "ecremeuse_eu_std", origin: "europe", name: "Écrémeuse EU-800", price_ttc: 6900, brand: "Bongard", supplier: "Groupe Bongard", supplier_status: "Certified Partner (12 ans)", rating: 4.4, review_count: 45, specs: { power: "3 kW", capacity: "800 L/h", dimensions: "1200x700x1400 mm", weight: "280 kg", material: "Acier inoxydable" }, delivery: "15-30 jours", warranty: "6 mois", parts_available: "Stock France", after_sales: "SAV France + pièces 72h" },
    { id: "ecremeuse_eu_premium", origin: "europe", name: "Écrémeuse EU-1800", price_ttc: 12900, brand: "Bongard", supplier: "Groupe Bongard", supplier_status: "Premium Partner (15 ans)", rating: 4.7, review_count: 34, specs: { power: "5 kW", capacity: "1800 L/h", dimensions: "1500x900x1600 mm", weight: "420 kg", material: "Acier inoxydable 304" }, delivery: "15-30 jours", warranty: "12 mois", parts_available: "Stock France", after_sales: "Contrat maintenance" }
  ]
},

"cuve_maturation": {
  machine_ref: "cuve_maturation",
  machine_name: "Cuve de maturation",
  machine_role: "Maturation du yaourt",
  default_capacity: "500-2000 L",
  default_utilities: "Électricité + froid",
  models: [
    // ===== CHINE =====
    { id: "maturation_cn_std", origin: "chinese", name: "Cuve MT-1000", price_ttc: 12900, brand: "Jinfeng Dairy", supplier: "Henan Jinfeng Dairy Machinery", supplier_status: "Verified Supplier (6 ans)", rating: 4.5, review_count: 89, specs: { power: "2 kW", capacity: "1000 L", dimensions: "1800x1500x2000 mm", weight: "550 kg", material: "Acier inoxydable 304" }, delivery: "45-60 jours", warranty: "12 mois", parts_available: "Stock Chine", after_sales: "Support technique" },
    { id: "maturation_cn_premium", origin: "chinese", name: "Cuve MT-2000", price_ttc: 19900, brand: "Jinfeng Dairy", supplier: "Henan Jinfeng Dairy Machinery", supplier_status: "Gold Supplier (8 ans)", rating: 4.8, review_count: 67, specs: { power: "3 kW", capacity: "2000 L", dimensions: "2200x1800x2200 mm", weight: "850 kg", material: "Acier inoxydable 304" }, delivery: "60-75 jours", warranty: "24 mois", parts_available: "Stock Abidjan", after_sales: "Formation" },
    
    // ===== CORÉE =====
    { id: "maturation_kr_std", origin: "korean", name: "Cuve KR-1500", price_ttc: 16900, brand: "Daeyeong", supplier: "Daeyeong Machinery Co.", supplier_status: "Premium Partner (7 ans)", rating: 4.7, review_count: 56, specs: { power: "2.5 kW", capacity: "1500 L", dimensions: "2000x1600x2100 mm", weight: "680 kg", material: "Acier inoxydable 304" }, delivery: "30-45 jours", warranty: "36 mois", parts_available: "Stock Abidjan", after_sales: "Technicien local + hotline" },
    { id: "maturation_kr_premium", origin: "korean", name: "Cuve KR-2500", price_ttc: 25900, brand: "Daeyeong", supplier: "Daeyeong Machinery Co.", supplier_status: "Premium Partner (9 ans)", rating: 4.9, review_count: 42, specs: { power: "4 kW", capacity: "2500 L", dimensions: "2400x2000x2400 mm", weight: "1000 kg", material: "Acier inoxydable 316L" }, delivery: "30-45 jours", warranty: "48 mois", parts_available: "Stock Abidjan + Dépôt France", after_sales: "Contrat maintenance + formation" },
    
    // ===== EUROPE (Bongard - France) =====
    { id: "maturation_eu_std", origin: "europe", name: "Cuve EU-800", price_ttc: 9900, brand: "Bongard", supplier: "Groupe Bongard", supplier_status: "Certified Partner (12 ans)", rating: 4.4, review_count: 45, specs: { power: "2 kW", capacity: "800 L", dimensions: "1700x1400x1900 mm", weight: "580 kg", material: "Acier inoxydable" }, delivery: "15-30 jours", warranty: "6 mois", parts_available: "Stock France", after_sales: "SAV France + pièces 72h" },
    { id: "maturation_eu_premium", origin: "europe", name: "Cuve EU-1800", price_ttc: 15900, brand: "Bongard", supplier: "Groupe Bongard", supplier_status: "Premium Partner (15 ans)", rating: 4.7, review_count: 34, specs: { power: "3.5 kW", capacity: "1800 L", dimensions: "2100x1700x2100 mm", weight: "880 kg", material: "Acier inoxydable 304" }, delivery: "15-30 jours", warranty: "12 mois", parts_available: "Stock France", after_sales: "Contrat maintenance" }
  ]
},

"remplisseuse_lait": {
  machine_ref: "remplisseuse_lait",
  machine_name: "Remplisseuse",
  machine_role: "Conditionnement en pots/bouteilles",
  default_capacity: "1000-5000 pots/h",
  default_utilities: "Électricité + air comprimé",
  models: [
    // ===== CHINE =====
    { id: "remplisseuse_lait_cn_econo", origin: "chinese", name: "Remplisseuse RL-1000", price_ttc: 10900, brand: "Sainty Pack", supplier: "Sainty Packaging Machinery", supplier_status: "Verified Supplier (5 ans)", rating: 4.3, review_count: 112, specs: { power: "1.5 kW", capacity: "1000 pots/h", dimensions: "2000x1000x1800 mm", weight: "450 kg", material: "Acier inoxydable 304" }, delivery: "45 jours", warranty: "12 mois", parts_available: "Stock Chine", after_sales: "Support technique" },
    { id: "remplisseuse_lait_cn_std", origin: "chinese", name: "Remplisseuse RL-3000", price_ttc: 18900, brand: "Sainty Pack", supplier: "Sainty Packaging Machinery", supplier_status: "Gold Supplier (7 ans)", rating: 4.6, review_count: 178, specs: { power: "2.2 kW", capacity: "3000 pots/h", dimensions: "2800x1200x2000 mm", weight: "720 kg", material: "Acier inoxydable 304" }, delivery: "45-60 jours", warranty: "18 mois", parts_available: "Stock Abidjan", after_sales: "Pièces détachées" },
    { id: "remplisseuse_lait_cn_premium", origin: "chinese", name: "Remplisseuse RL-5000", price_ttc: 28900, brand: "Sainty Pack", supplier: "Sainty Packaging Machinery", supplier_status: "Gold Supplier (8 ans)", rating: 4.8, review_count: 89, specs: { power: "3 kW", capacity: "5000 pots/h", dimensions: "3500x1500x2200 mm", weight: "1100 kg", material: "Acier inoxydable 316L" }, delivery: "60-75 jours", warranty: "24 mois", parts_available: "Stock France", after_sales: "Contrat maintenance" },
    
    // ===== CORÉE =====
    { id: "remplisseuse_lait_kr_std", origin: "korean", name: "Remplisseuse KR-2000", price_ttc: 14900, brand: "Daeyeong", supplier: "Daeyeong Machinery Co.", supplier_status: "Premium Partner (7 ans)", rating: 4.7, review_count: 56, specs: { power: "2 kW", capacity: "2000 pots/h", dimensions: "2200x1100x1900 mm", weight: "580 kg", material: "Acier inoxydable 304" }, delivery: "30-45 jours", warranty: "36 mois", parts_available: "Stock Abidjan", after_sales: "Technicien local + hotline" },
    { id: "remplisseuse_lait_kr_premium", origin: "korean", name: "Remplisseuse KR-4000", price_ttc: 22900, brand: "Daeyeong", supplier: "Daeyeong Machinery Co.", supplier_status: "Premium Partner (9 ans)", rating: 4.9, review_count: 42, specs: { power: "3.5 kW", capacity: "4000 pots/h", dimensions: "3000x1300x2100 mm", weight: "880 kg", material: "Acier inoxydable 316L" }, delivery: "30-45 jours", warranty: "48 mois", parts_available: "Stock Abidjan + Dépôt France", after_sales: "Contrat maintenance + formation" },
    
    // ===== EUROPE (Bongard - France) =====
    { id: "remplisseuse_lait_eu_std", origin: "europe", name: "Remplisseuse EU-1500", price_ttc: 8900, brand: "Bongard", supplier: "Groupe Bongard", supplier_status: "Certified Partner (12 ans)", rating: 4.4, review_count: 45, specs: { power: "1.8 kW", capacity: "1500 pots/h", dimensions: "1900x900x1700 mm", weight: "480 kg", material: "Acier inoxydable" }, delivery: "15-30 jours", warranty: "6 mois", parts_available: "Stock France", after_sales: "SAV France + pièces 72h" },
    { id: "remplisseuse_lait_eu_premium", origin: "europe", name: "Remplisseuse EU-3500", price_ttc: 15900, brand: "Bongard", supplier: "Groupe Bongard", supplier_status: "Premium Partner (15 ans)", rating: 4.7, review_count: 34, specs: { power: "3 kW", capacity: "3500 pots/h", dimensions: "2600x1200x2000 mm", weight: "780 kg", material: "Acier inoxydable 304" }, delivery: "15-30 jours", warranty: "12 mois", parts_available: "Stock France", after_sales: "Contrat maintenance" }
  ]
},

"chambre_froide": {
  machine_ref: "chambre_froide",
  machine_name: "Chambre froide",
  machine_role: "Stockage réfrigéré",
  default_capacity: "20000-50000 L",
  default_utilities: "Électricité",
  models: [
    // ===== CHINE =====
    { id: "froid_cn_std", origin: "chinese", name: "Chambre CF-20000", price_ttc: 15900, brand: "Jinfeng Dairy", supplier: "Henan Jinfeng Dairy Machinery", supplier_status: "Verified Supplier (6 ans)", rating: 4.4, review_count: 78, specs: { power: "3 kW", capacity: "20000 L", dimensions: "4000x3000x2500 mm", weight: "1200 kg", material: "Panneaux sandwich" }, delivery: "45-60 jours", warranty: "12 mois", parts_available: "Stock Chine", after_sales: "Support technique" },
    { id: "froid_cn_premium", origin: "chinese", name: "Chambre CF-50000", price_ttc: 25900, brand: "Jinfeng Dairy", supplier: "Henan Jinfeng Dairy Machinery", supplier_status: "Gold Supplier (8 ans)", rating: 4.7, review_count: 56, specs: { power: "5 kW", capacity: "50000 L", dimensions: "6000x4000x3000 mm", weight: "2200 kg", material: "Panneaux sandwich isolés" }, delivery: "60-75 jours", warranty: "24 mois", parts_available: "Stock Abidjan", after_sales: "Contrat maintenance" },
    
    // ===== CORÉE =====
    { id: "froid_kr_std", origin: "korean", name: "Chambre KR-30000", price_ttc: 21900, brand: "Daeyeong", supplier: "Daeyeong Machinery Co.", supplier_status: "Premium Partner (7 ans)", rating: 4.7, review_count: 56, specs: { power: "4 kW", capacity: "30000 L", dimensions: "4500x3500x2700 mm", weight: "1500 kg", material: "Panneaux sandwich isolés" }, delivery: "30-45 jours", warranty: "36 mois", parts_available: "Stock Abidjan", after_sales: "Technicien local + hotline" },
    { id: "froid_kr_premium", origin: "korean", name: "Chambre KR-60000", price_ttc: 34900, brand: "Daeyeong", supplier: "Daeyeong Machinery Co.", supplier_status: "Premium Partner (9 ans)", rating: 4.9, review_count: 42, specs: { power: "6 kW", capacity: "60000 L", dimensions: "7000x4500x3200 mm", weight: "2800 kg", material: "Panneaux sandwich isolés haute performance" }, delivery: "30-45 jours", warranty: "48 mois", parts_available: "Stock Abidjan + Dépôt France", after_sales: "Contrat maintenance + formation" },
    
    // ===== EUROPE (Bongard - France) =====
    { id: "froid_eu_std", origin: "europe", name: "Chambre EU-15000", price_ttc: 12900, brand: "Bongard", supplier: "Groupe Bongard", supplier_status: "Certified Partner (12 ans)", rating: 4.4, review_count: 45, specs: { power: "3.5 kW", capacity: "15000 L", dimensions: "3500x2800x2300 mm", weight: "1100 kg", material: "Panneaux sandwich" }, delivery: "15-30 jours", warranty: "6 mois", parts_available: "Stock France", after_sales: "SAV France + pièces 72h" },
    { id: "froid_eu_premium", origin: "europe", name: "Chambre EU-40000", price_ttc: 19900, brand: "Bongard", supplier: "Groupe Bongard", supplier_status: "Premium Partner (15 ans)", rating: 4.7, review_count: 34, specs: { power: "5.5 kW", capacity: "40000 L", dimensions: "5000x3800x2800 mm", weight: "2000 kg", material: "Panneaux sandwich isolés haute performance" }, delivery: "15-30 jours", warranty: "12 mois", parts_available: "Stock France", after_sales: "Contrat maintenance" }
  ]
},
// ==============================================
// SMARTPHONES & TABLETTES - MODÈLES RÉELS
// ==============================================

"ligne_smt": {
  machine_ref: "ligne_smt",
  machine_name: "Ligne SMT",
  machine_role: "CMS cartes mères",
  default_capacity: "50000 comp/heure",
  default_utilities: "Électricité 20kW",
  models: [
    // ===== CHINE (Autotronik - Chine) =====
    { id: "smt_cn_econo", origin: "chinese", name: "Autotronik SMT-ECO", price_ttc: 85000, brand: "Autotronik", supplier: "Autotronik SMT GmbH", supplier_status: "Verified Supplier (8 ans)", rating: 4.0, review_count: 45, specs: { power: "12 kW", capacity: "25000 comp/h", dimensions: "7000x1400x1700 mm", weight: "2200 kg", material: "Acier" }, delivery: "60-75 jours", warranty: "12 mois", parts_available: "Stock Chine", after_sales: "Support technique" },
    { id: "smt_cn_std", origin: "chinese", name: "Autotronik SMT-STD", price_ttc: 150000, brand: "Autotronik", supplier: "Autotronik SMT GmbH", supplier_status: "Gold Supplier (10 ans)", rating: 4.5, review_count: 78, specs: { power: "18 kW", capacity: "40000 comp/h", dimensions: "9000x1600x1900 mm", weight: "3200 kg", material: "Acier inoxydable" }, delivery: "75-90 jours", warranty: "18 mois", parts_available: "Stock Abidjan", after_sales: "Formation + pièces" },
    { id: "smt_cn_premium", origin: "chinese", name: "Autotronik SMT-PRO", price_ttc: 250000, brand: "Autotronik", supplier: "Autotronik SMT GmbH", supplier_status: "Platinum Partner (12 ans)", rating: 4.8, review_count: 34, specs: { power: "25 kW", capacity: "60000 comp/h", dimensions: "11000x1800x2100 mm", weight: "4800 kg", material: "Acier inoxydable 316L" }, delivery: "75-90 jours", warranty: "24 mois", parts_available: "Stock France", after_sales: "Contrat maintenance" },
    
    // ===== CORÉE (Hanwha - Corée du Sud) =====
    { id: "smt_kr_std", origin: "korean", name: "Hanwha SM-471", price_ttc: 180000, brand: "Hanwha", supplier: "Hanwha Precision Machinery", supplier_status: "Premium Partner (10 ans)", rating: 4.7, review_count: 89, specs: { power: "20 kW", capacity: "50000 comp/h", dimensions: "10000x1700x1900 mm", weight: "3800 kg", material: "Acier inoxydable 304" }, delivery: "30-45 jours", warranty: "36 mois", parts_available: "Stock Abidjan", after_sales: "Technicien local + hotline" },
    { id: "smt_kr_premium", origin: "korean", name: "Hanwha SM-481", price_ttc: 280000, brand: "Hanwha", supplier: "Hanwha Precision Machinery", supplier_status: "Platinum Partner (12 ans)", rating: 4.9, review_count: 56, specs: { power: "25 kW", capacity: "75000 comp/h", dimensions: "12000x1900x2100 mm", weight: "4800 kg", material: "Acier inoxydable 316L" }, delivery: "30-45 jours", warranty: "48 mois", parts_available: "Stock Abidjan + Dépôt France", after_sales: "Contrat maintenance + formation" },
    
    // ===== EUROPE (ASM - Allemagne) =====
    { id: "smt_eu_std", origin: "europe", name: "ASM SIPLACE SX1", price_ttc: 320000, brand: "ASM", supplier: "ASM Assembly Systems", supplier_status: "Premium Partner (15 ans)", rating: 4.8, review_count: 67, specs: { power: "22 kW", capacity: "60000 comp/h", dimensions: "11000x1800x2000 mm", weight: "4200 kg", material: "Acier inoxydable 304" }, delivery: "30-45 jours", warranty: "24 mois", parts_available: "Stock Europe", after_sales: "SAV Europe + pièces 72h" },
    { id: "smt_eu_premium", origin: "europe", name: "ASM SIPLACE SX2", price_ttc: 450000, brand: "ASM", supplier: "ASM Assembly Systems", supplier_status: "Premium Partner (18 ans)", rating: 4.9, review_count: 34, specs: { power: "28 kW", capacity: "90000 comp/h", dimensions: "13000x2000x2200 mm", weight: "5800 kg", material: "Acier inoxydable 316L" }, delivery: "30-45 jours", warranty: "36 mois", parts_available: "Stock Europe", after_sales: "Contrat maintenance + formation" }
  ]
},

"four_refusion": {
  machine_ref: "four_refusion",
  machine_name: "Four à refusion",
  machine_role: "Brasage CMS",
  default_capacity: "Standard",
  default_utilities: "Électricité",
  models: [
    // ===== CHINE (TAMURA - Chine) =====
    { id: "refusion_cn_econo", origin: "chinese", name: "TAMURA RF-ECO", price_ttc: 18000, brand: "TAMURA", supplier: "TAMURA Corporation", supplier_status: "Verified Supplier (6 ans)", rating: 4.2, review_count: 56, specs: { power: "8 kW", capacity: "2000 x 400 mm", dimensions: "3200x1000x1500 mm", weight: "800 kg", material: "Acier" }, delivery: "45-60 jours", warranty: "12 mois", parts_available: "Stock Chine", after_sales: "Support technique" },
    { id: "refusion_cn_std", origin: "chinese", name: "TAMURA RF-STD", price_ttc: 30000, brand: "TAMURA", supplier: "TAMURA Corporation", supplier_status: "Gold Supplier (8 ans)", rating: 4.6, review_count: 89, specs: { power: "12 kW", capacity: "3000 x 500 mm", dimensions: "4200x1200x1600 mm", weight: "1200 kg", material: "Acier inoxydable" }, delivery: "60-75 jours", warranty: "18 mois", parts_available: "Stock Abidjan", after_sales: "Formation" },
    { id: "refusion_cn_premium", origin: "chinese", name: "TAMURA RF-PRO", price_ttc: 48000, brand: "TAMURA", supplier: "TAMURA Corporation", supplier_status: "Platinum Partner (10 ans)", rating: 4.9, review_count: 45, specs: { power: "16 kW", capacity: "4000 x 600 mm", dimensions: "5200x1400x1700 mm", weight: "1800 kg", material: "Acier inoxydable 304" }, delivery: "75-90 jours", warranty: "24 mois", parts_available: "Stock France", after_sales: "Contrat maintenance" },
    
    // ===== CORÉE (Koh Young - Corée du Sud) =====
    { id: "refusion_kr_std", origin: "korean", name: "Koh Young RF-KY-3000", price_ttc: 25000, brand: "Koh Young", supplier: "Koh Young Technology", supplier_status: "Premium Partner (8 ans)", rating: 4.7, review_count: 56, specs: { power: "10 kW", capacity: "3000 x 500 mm", dimensions: "4000x1100x1500 mm", weight: "1000 kg", material: "Acier inoxydable 304" }, delivery: "30-45 jours", warranty: "36 mois", parts_available: "Stock Abidjan", after_sales: "Technicien local + hotline" },
    { id: "refusion_kr_premium", origin: "korean", name: "Koh Young RF-KY-5000", price_ttc: 45000, brand: "Koh Young", supplier: "Koh Young Technology", supplier_status: "Platinum Partner (10 ans)", rating: 4.9, review_count: 42, specs: { power: "14 kW", capacity: "5000 x 600 mm", dimensions: "5000x1300x1700 mm", weight: "1600 kg", material: "Acier inoxydable 316L" }, delivery: "30-45 jours", warranty: "48 mois", parts_available: "Stock Abidjan + Dépôt France", after_sales: "Contrat maintenance + formation" },
    
    // ===== EUROPE (Rehm - Allemagne) =====
    { id: "refusion_eu_std", origin: "europe", name: "Rehm VisionXP+", price_ttc: 35000, brand: "Rehm", supplier: "Rehm Thermal Systems", supplier_status: "Premium Partner (15 ans)", rating: 4.7, review_count: 56, specs: { power: "12 kW", capacity: "3500 x 500 mm", dimensions: "4500x1200x1600 mm", weight: "1400 kg", material: "Acier inoxydable 304" }, delivery: "30-45 jours", warranty: "24 mois", parts_available: "Stock Europe", after_sales: "SAV Europe + pièces 72h" },
    { id: "refusion_eu_premium", origin: "europe", name: "Rehm VisionXP+ Twin", price_ttc: 65000, brand: "Rehm", supplier: "Rehm Thermal Systems", supplier_status: "Premium Partner (18 ans)", rating: 4.9, review_count: 34, specs: { power: "20 kW", capacity: "5000 x 600 mm", dimensions: "5800x1400x1800 mm", weight: "2200 kg", material: "Acier inoxydable 316L" }, delivery: "30-45 jours", warranty: "36 mois", parts_available: "Stock Europe", after_sales: "Contrat maintenance" }
  ]
},

"robot_encollage": {
  machine_ref: "robot_encollage",
  machine_name: "Robot encollage",
  machine_role: "Pose glue",
  default_capacity: "200 cartes/heure",
  default_utilities: "Air comprimé",
  models: [
    // ===== CHINE (TENSUN - Chine) =====
    { id: "encollage_cn_econo", origin: "chinese", name: "TENSUN EN-ECO", price_ttc: 22000, brand: "TENSUN", supplier: "TENSUN Robotics", supplier_status: "Verified Supplier (5 ans)", rating: 4.2, review_count: 45, specs: { power: "0.5 kW", capacity: "150 cartes/h", dimensions: "1200x800x1400 mm", weight: "250 kg", material: "Aluminium" }, delivery: "45 jours", warranty: "12 mois", parts_available: "Stock Chine", after_sales: "Support technique" },
    { id: "encollage_cn_std", origin: "chinese", name: "TENSUN EN-STD", price_ttc: 38000, brand: "TENSUN", supplier: "TENSUN Robotics", supplier_status: "Gold Supplier (7 ans)", rating: 4.6, review_count: 78, specs: { power: "0.8 kW", capacity: "200 cartes/h", dimensions: "1500x1000x1600 mm", weight: "380 kg", material: "Aluminium renforcé" }, delivery: "60 jours", warranty: "18 mois", parts_available: "Stock Abidjan", after_sales: "Pièces détachées" },
    { id: "encollage_cn_premium", origin: "chinese", name: "TENSUN EN-PRO", price_ttc: 60000, brand: "TENSUN", supplier: "TENSUN Robotics", supplier_status: "Platinum Partner (8 ans)", rating: 4.9, review_count: 34, specs: { power: "1 kW", capacity: "300 cartes/h", dimensions: "2000x1200x1800 mm", weight: "550 kg", material: "Aluminium anodisé" }, delivery: "75 jours", warranty: "24 mois", parts_available: "Stock France", after_sales: "Contrat maintenance" },
    
    // ===== CORÉE (Nepes - Corée du Sud) =====
    { id: "encollage_kr_std", origin: "korean", name: "Nepes NE-200", price_ttc: 30000, brand: "Nepes", supplier: "Nepes Corporation", supplier_status: "Premium Partner (7 ans)", rating: 4.7, review_count: 56, specs: { power: "0.6 kW", capacity: "180 cartes/h", dimensions: "1300x900x1500 mm", weight: "300 kg", material: "Aluminium anodisé" }, delivery: "30-45 jours", warranty: "36 mois", parts_available: "Stock Abidjan", after_sales: "Technicien local + hotline" },
    { id: "encollage_kr_premium", origin: "korean", name: "Nepes NE-300", price_ttc: 50000, brand: "Nepes", supplier: "Nepes Corporation", supplier_status: "Platinum Partner (9 ans)", rating: 4.9, review_count: 42, specs: { power: "0.9 kW", capacity: "280 cartes/h", dimensions: "1800x1100x1700 mm", weight: "480 kg", material: "Aluminium anodisé" }, delivery: "30-45 jours", warranty: "48 mois", parts_available: "Stock Abidjan + Dépôt France", after_sales: "Contrat maintenance + formation" },
    
    // ===== EUROPE (Essemtec - Suisse) =====
    { id: "encollage_eu_std", origin: "europe", name: "Essemtec E-PRINT", price_ttc: 35000, brand: "Essemtec", supplier: "Essemtec AG", supplier_status: "Premium Partner (12 ans)", rating: 4.6, review_count: 45, specs: { power: "0.7 kW", capacity: "160 cartes/h", dimensions: "1400x900x1500 mm", weight: "320 kg", material: "Aluminium anodisé" }, delivery: "30-45 jours", warranty: "24 mois", parts_available: "Stock Europe", after_sales: "SAV Europe + pièces 72h" },
    { id: "encollage_eu_premium", origin: "europe", name: "Essemtec E-PRINT PRO", price_ttc: 55000, brand: "Essemtec", supplier: "Essemtec AG", supplier_status: "Platinum Partner (15 ans)", rating: 4.8, review_count: 28, specs: { power: "1 kW", capacity: "250 cartes/h", dimensions: "1600x1000x1600 mm", weight: "420 kg", material: "Aluminium anodisé" }, delivery: "30-45 jours", warranty: "36 mois", parts_available: "Stock Europe", after_sales: "Contrat maintenance" }
  ]
},

"presse_ecran": {
  machine_ref: "presse_ecran",
  machine_name: "Presse écran",
  machine_role: "Montage écran",
  default_capacity: "100 smartphones/heure",
  default_utilities: "Air comprimé",
  models: [
    // ===== CHINE (Shenzhen Xinyi - Chine) =====
    { id: "presse_ecran_cn_econo", origin: "chinese", name: "Xinyi PE-ECO", price_ttc: 15000, brand: "Xinyi", supplier: "Shenzhen Xinyi Machinery", supplier_status: "Verified Supplier (4 ans)", rating: 4.1, review_count: 67, specs: { power: "0.8 kW", capacity: "80 smartphones/h", dimensions: "1000x800x1500 mm", weight: "200 kg", material: "Acier" }, delivery: "45 jours", warranty: "12 mois", parts_available: "Stock Chine", after_sales: "Support technique" },
    { id: "presse_ecran_cn_std", origin: "chinese", name: "Xinyi PE-STD", price_ttc: 25000, brand: "Xinyi", supplier: "Shenzhen Xinyi Machinery", supplier_status: "Gold Supplier (6 ans)", rating: 4.5, review_count: 112, specs: { power: "1.2 kW", capacity: "100 smartphones/h", dimensions: "1200x1000x1600 mm", weight: "320 kg", material: "Acier inoxydable" }, delivery: "60 jours", warranty: "18 mois", parts_available: "Stock Abidjan", after_sales: "Formation" },
    { id: "presse_ecran_cn_premium", origin: "chinese", name: "Xinyi PE-PRO", price_ttc: 40000, brand: "Xinyi", supplier: "Shenzhen Xinyi Machinery", supplier_status: "Gold Supplier (7 ans)", rating: 4.8, review_count: 56, specs: { power: "1.5 kW", capacity: "150 smartphones/h", dimensions: "1500x1200x1800 mm", weight: "500 kg", material: "Acier inoxydable 304" }, delivery: "75 jours", warranty: "24 mois", parts_available: "Stock France", after_sales: "SAV local" },
    
    // ===== CORÉE (Samsung Electronics - Corée du Sud) =====
    { id: "presse_ecran_kr_std", origin: "korean", name: "Samsung PE-SM-120", price_ttc: 32000, brand: "Samsung", supplier: "Samsung Electronics", supplier_status: "Premium Partner (10 ans)", rating: 4.7, review_count: 45, specs: { power: "1 kW", capacity: "120 smartphones/h", dimensions: "1300x900x1600 mm", weight: "280 kg", material: "Acier inoxydable 304" }, delivery: "30-45 jours", warranty: "36 mois", parts_available: "Stock Abidjan", after_sales: "Technicien local + hotline" },
    { id: "presse_ecran_kr_premium", origin: "korean", name: "Samsung PE-SM-180", price_ttc: 50000, brand: "Samsung", supplier: "Samsung Electronics", supplier_status: "Platinum Partner (12 ans)", rating: 4.9, review_count: 34, specs: { power: "1.5 kW", capacity: "180 smartphones/h", dimensions: "1600x1100x1700 mm", weight: "420 kg", material: "Acier inoxydable 316L" }, delivery: "30-45 jours", warranty: "48 mois", parts_available: "Stock Abidjan + Dépôt France", after_sales: "Contrat maintenance + formation" },
    
    // ===== EUROPE (Ekra - Allemagne) =====
    { id: "presse_ecran_eu_std", origin: "europe", name: "Ekra E1", price_ttc: 40000, brand: "Ekra", supplier: "Ekra Automatisierungstechnik", supplier_status: "Premium Partner (15 ans)", rating: 4.7, review_count: 45, specs: { power: "1.2 kW", capacity: "120 smartphones/h", dimensions: "1400x1000x1600 mm", weight: "380 kg", material: "Acier inoxydable 304" }, delivery: "30-45 jours", warranty: "24 mois", parts_available: "Stock Europe", after_sales: "SAV Europe + pièces 72h" },
    { id: "presse_ecran_eu_premium", origin: "europe", name: "Ekra E2", price_ttc: 60000, brand: "Ekra", supplier: "Ekra Automatisierungstechnik", supplier_status: "Platinum Partner (18 ans)", rating: 4.9, review_count: 28, specs: { power: "1.8 kW", capacity: "180 smartphones/h", dimensions: "1600x1200x1800 mm", weight: "480 kg", material: "Acier inoxydable 316L" }, delivery: "30-45 jours", warranty: "36 mois", parts_available: "Stock Europe", after_sales: "Contrat maintenance" }
  ]
},

"testeur_fonctionnel_smartphone": {
  machine_ref: "testeur_fonctionnel_smartphone",
  machine_name: "Testeur fonctionnel",
  machine_role: "Tests complets",
  default_capacity: "80 smartphones/heure",
  default_utilities: "Électricité",
  models: [
    // ===== CHINE (Teradyne - USA / fabriqué en Chine) =====
    { id: "testeur_smart_cn_econo", origin: "chinese", name: "Teradyne TF-ECO", price_ttc: 28000, brand: "Teradyne", supplier: "Teradyne China", supplier_status: "Verified Supplier (6 ans)", rating: 4.3, review_count: 56, specs: { power: "0.5 kW", capacity: "60 smartphones/h", dimensions: "800x600x1400 mm", weight: "80 kg", material: "Plastique renforcé" }, delivery: "45-60 jours", warranty: "12 mois", parts_available: "Stock Chine", after_sales: "Support technique" },
    { id: "testeur_smart_cn_std", origin: "chinese", name: "Teradyne TF-STD", price_ttc: 48000, brand: "Teradyne", supplier: "Teradyne China", supplier_status: "Gold Supplier (8 ans)", rating: 4.7, review_count: 89, specs: { power: "0.8 kW", capacity: "80 smartphones/h", dimensions: "1000x800x1600 mm", weight: "120 kg", material: "Aluminium" }, delivery: "60-75 jours", warranty: "18 mois", parts_available: "Stock Abidjan", after_sales: "Pièces détachées" },
    { id: "testeur_smart_cn_premium", origin: "chinese", name: "Teradyne TF-PRO", price_ttc: 72000, brand: "Teradyne", supplier: "Teradyne China", supplier_status: "Platinum Partner (10 ans)", rating: 4.9, review_count: 45, specs: { power: "1 kW", capacity: "120 smartphones/h", dimensions: "1200x1000x1800 mm", weight: "180 kg", material: "Aluminium anodisé" }, delivery: "75-90 jours", warranty: "24 mois", parts_available: "Stock France", after_sales: "Contrat maintenance" },
    
    // ===== CORÉE (Samsung Electronics - Corée du Sud) =====
    { id: "testeur_smart_kr_std", origin: "korean", name: "Samsung TF-KS-70", price_ttc: 35000, brand: "Samsung", supplier: "Samsung Electronics", supplier_status: "Premium Partner (8 ans)", rating: 4.7, review_count: 56, specs: { power: "0.6 kW", capacity: "70 smartphones/h", dimensions: "900x700x1500 mm", weight: "100 kg", material: "Aluminium anodisé" }, delivery: "30-45 jours", warranty: "36 mois", parts_available: "Stock Abidjan", after_sales: "Technicien local + hotline" },
    { id: "testeur_smart_kr_premium", origin: "korean", name: "Samsung TF-KS-100", price_ttc: 55000, brand: "Samsung", supplier: "Samsung Electronics", supplier_status: "Platinum Partner (10 ans)", rating: 4.9, review_count: 42, specs: { power: "0.9 kW", capacity: "100 smartphones/h", dimensions: "1100x900x1600 mm", weight: "150 kg", material: "Aluminium anodisé" }, delivery: "30-45 jours", warranty: "48 mois", parts_available: "Stock Abidjan + Dépôt France", after_sales: "Contrat maintenance + formation" },
    
    // ===== EUROPE (Roos Instruments - Allemagne) =====
    { id: "testeur_smart_eu_std", origin: "europe", name: "Roos RI-2000", price_ttc: 45000, brand: "Roos", supplier: "Roos Instruments", supplier_status: "Premium Partner (12 ans)", rating: 4.6, review_count: 45, specs: { power: "0.7 kW", capacity: "70 smartphones/h", dimensions: "1000x800x1500 mm", weight: "120 kg", material: "Acier inoxydable" }, delivery: "30-45 jours", warranty: "24 mois", parts_available: "Stock Europe", after_sales: "SAV Europe + pièces 72h" },
    { id: "testeur_smart_eu_premium", origin: "europe", name: "Roos RI-3000", price_ttc: 70000, brand: "Roos", supplier: "Roos Instruments", supplier_status: "Platinum Partner (15 ans)", rating: 4.8, review_count: 28, specs: { power: "1 kW", capacity: "100 smartphones/h", dimensions: "1200x1000x1700 mm", weight: "160 kg", material: "Acier inoxydable 304" }, delivery: "30-45 jours", warranty: "36 mois", parts_available: "Stock Europe", after_sales: "Contrat maintenance" }
  ]
},

"etiqueteuse_imei": {
  machine_ref: "etiqueteuse_imei",
  machine_name: "Machine à étiqueter IMEI",
  machine_role: "Marquage IMEI",
  default_capacity: "100 smartphones/heure",
  default_utilities: "Électricité",
  models: [
    // ===== CHINE (WEILER - Chine) =====
    { id: "imei_cn_std", origin: "chinese", name: "WEILER IMEI-STD", price_ttc: 8000, brand: "WEILER", supplier: "WEILER Labeling Systems", supplier_status: "Verified Supplier (5 ans)", rating: 4.3, review_count: 67, specs: { power: "0.3 kW", capacity: "100 smartphones/h", dimensions: "600x500x1200 mm", weight: "50 kg", material: "Acier inoxydable" }, delivery: "30-45 jours", warranty: "12 mois", parts_available: "Stock Chine", after_sales: "Support technique" },
    { id: "imei_cn_premium", origin: "chinese", name: "WEILER IMEI-PRO", price_ttc: 12000, brand: "WEILER", supplier: "WEILER Labeling Systems", supplier_status: "Gold Supplier (7 ans)", rating: 4.7, review_count: 56, specs: { power: "0.5 kW", capacity: "200 smartphones/h", dimensions: "800x600x1400 mm", weight: "80 kg", material: "Acier inoxydable 304" }, delivery: "45-60 jours", warranty: "18 mois", parts_available: "Stock Abidjan", after_sales: "Formation" },
    
    // ===== CORÉE (Daeyang - Corée du Sud) =====
    { id: "imei_kr_std", origin: "korean", name: "Daeyang IMEI-KR-120", price_ttc: 10000, brand: "Daeyang", supplier: "Daeyang Machinery", supplier_status: "Premium Partner (7 ans)", rating: 4.7, review_count: 56, specs: { power: "0.4 kW", capacity: "120 smartphones/h", dimensions: "700x600x1300 mm", weight: "60 kg", material: "Acier inoxydable 304" }, delivery: "30-45 jours", warranty: "36 mois", parts_available: "Stock Abidjan", after_sales: "Technicien local + hotline" },
    { id: "imei_kr_premium", origin: "korean", name: "Daeyang IMEI-KR-180", price_ttc: 15000, brand: "Daeyang", supplier: "Daeyang Machinery", supplier_status: "Platinum Partner (9 ans)", rating: 4.9, review_count: 42, specs: { power: "0.6 kW", capacity: "180 smartphones/h", dimensions: "900x700x1400 mm", weight: "90 kg", material: "Acier inoxydable 316L" }, delivery: "30-45 jours", warranty: "48 mois", parts_available: "Stock Abidjan + Dépôt France", after_sales: "Contrat maintenance + formation" },
    
    // ===== EUROPE (Cab - Allemagne) =====
    { id: "imei_eu_std", origin: "europe", name: "Cab IMEI-100", price_ttc: 9000, brand: "Cab", supplier: "Cab Produkttechnik", supplier_status: "Premium Partner (12 ans)", rating: 4.5, review_count: 45, specs: { power: "0.3 kW", capacity: "100 smartphones/h", dimensions: "600x500x1200 mm", weight: "55 kg", material: "Acier inoxydable" }, delivery: "15-30 jours", warranty: "12 mois", parts_available: "Stock Europe", after_sales: "SAV Europe + pièces 72h" },
    { id: "imei_eu_premium", origin: "europe", name: "Cab IMEI-160", price_ttc: 14000, brand: "Cab", supplier: "Cab Produkttechnik", supplier_status: "Platinum Partner (15 ans)", rating: 4.8, review_count: 34, specs: { power: "0.5 kW", capacity: "160 smartphones/h", dimensions: "800x600x1400 mm", weight: "80 kg", material: "Acier inoxydable 304" }, delivery: "15-30 jours", warranty: "24 mois", parts_available: "Stock Europe", after_sales: "Contrat maintenance" }
  ]
},

"controle_optique": {
  machine_ref: "controle_optique",
  machine_name: "Poste contrôle optique",
  machine_role: "Auto-inspection",
  default_capacity: "100 smartphones/heure",
  default_utilities: "Électricité",
  models: [
    // ===== CHINE (Mirtec - Chine) =====
    { id: "optique_cn_std", origin: "chinese", name: "Mirtec AOI-ECO", price_ttc: 20000, brand: "Mirtec", supplier: "Mirtec Corporation", supplier_status: "Verified Supplier (6 ans)", rating: 4.4, review_count: 67, specs: { power: "0.5 kW", capacity: "100 smartphones/h", dimensions: "1000x800x1500 mm", weight: "200 kg", material: "Acier" }, delivery: "45-60 jours", warranty: "12 mois", parts_available: "Stock Chine", after_sales: "Support technique" },
    { id: "optique_cn_premium", origin: "chinese", name: "Mirtec AOI-PRO", price_ttc: 35000, brand: "Mirtec", supplier: "Mirtec Corporation", supplier_status: "Gold Supplier (8 ans)", rating: 4.8, review_count: 56, specs: { power: "0.8 kW", capacity: "200 smartphones/h", dimensions: "1200x1000x1700 mm", weight: "300 kg", material: "Acier inoxydable" }, delivery: "60-75 jours", warranty: "18 mois", parts_available: "Stock Abidjan", after_sales: "Pièces détachées" },
    
    // ===== CORÉE (Koh Young - Corée du Sud) =====
    { id: "optique_kr_std", origin: "korean", name: "Koh Young KY-120", price_ttc: 28000, brand: "Koh Young", supplier: "Koh Young Technology", supplier_status: "Premium Partner (8 ans)", rating: 4.7, review_count: 56, specs: { power: "0.6 kW", capacity: "120 smartphones/h", dimensions: "1100x900x1600 mm", weight: "250 kg", material: "Acier inoxydable 304" }, delivery: "30-45 jours", warranty: "36 mois", parts_available: "Stock Abidjan", after_sales: "Technicien local + hotline" },
    { id: "optique_kr_premium", origin: "korean", name: "Koh Young KY-220", price_ttc: 45000, brand: "Koh Young", supplier: "Koh Young Technology", supplier_status: "Platinum Partner (10 ans)", rating: 4.9, review_count: 42, specs: { power: "1 kW", capacity: "220 smartphones/h", dimensions: "1400x1100x1800 mm", weight: "350 kg", material: "Acier inoxydable 316L" }, delivery: "30-45 jours", warranty: "48 mois", parts_available: "Stock Abidjan + Dépôt France", after_sales: "Contrat maintenance + formation" },
    
    // ===== EUROPE (Viscom - Allemagne) =====
    { id: "optique_eu_std", origin: "europe", name: "Viscom S3088", price_ttc: 35000, brand: "Viscom", supplier: "Viscom AG", supplier_status: "Premium Partner (15 ans)", rating: 4.7, review_count: 45, specs: { power: "0.7 kW", capacity: "130 smartphones/h", dimensions: "1200x1000x1600 mm", weight: "280 kg", material: "Acier inoxydable 304" }, delivery: "30-45 jours", warranty: "24 mois", parts_available: "Stock Europe", after_sales: "SAV Europe + pièces 72h" },
    { id: "optique_eu_premium", origin: "europe", name: "Viscom S3088 PRO", price_ttc: 55000, brand: "Viscom", supplier: "Viscom AG", supplier_status: "Platinum Partner (18 ans)", rating: 4.9, review_count: 28, specs: { power: "1 kW", capacity: "220 smartphones/h", dimensions: "1500x1200x1800 mm", weight: "380 kg", material: "Acier inoxydable 316L" }, delivery: "30-45 jours", warranty: "36 mois", parts_available: "Stock Europe", after_sales: "Contrat maintenance" }
  ]
},
// ==============================================
// BICYCLETTES - MODÈLES COMPLETS
// ==============================================

"poste_soudure_cadre": {
  machine_ref: "poste_soudure_cadre",
  machine_name: "Poste soudure cadre",
  machine_role: "Soudure des cadres",
  default_capacity: "100 cadres/jour",
  default_utilities: "Électricité 8kW",
  models: [
    // ===== CHINE =====
    { id: "soudure_cn_econo", origin: "chinese", name: "Soudeuse MIG-200", price_ttc: 4500, brand: "Jinfeng", supplier: "Henan Jinfeng Machinery", supplier_status: "Verified Supplier (5 ans)", rating: 4.2, review_count: 78, specs: { power: "6 kW", capacity: "80 cadres/jour", dimensions: "800x600x1200 mm", weight: "150 kg", material: "Acier" }, delivery: "30 jours", warranty: "12 mois", parts_available: "Stock Chine", after_sales: "Support technique" },
    { id: "soudure_cn_std", origin: "chinese", name: "Soudeuse MIG-350", price_ttc: 7800, brand: "Jinfeng", supplier: "Henan Jinfeng Machinery", supplier_status: "Gold Supplier (7 ans)", rating: 4.6, review_count: 134, specs: { power: "8 kW", capacity: "120 cadres/jour", dimensions: "1000x700x1300 mm", weight: "220 kg", material: "Acier inoxydable" }, delivery: "45 jours", warranty: "18 mois", parts_available: "Stock Abidjan", after_sales: "Formation + pièces" },
    { id: "soudure_cn_premium", origin: "chinese", name: "Soudeuse MIG-500", price_ttc: 12000, brand: "Jinfeng", supplier: "Henan Jinfeng Machinery", supplier_status: "Gold Supplier (8 ans)", rating: 4.9, review_count: 67, specs: { power: "12 kW", capacity: "180 cadres/jour", dimensions: "1200x800x1400 mm", weight: "320 kg", material: "Acier inoxydable 304" }, delivery: "60 jours", warranty: "24 mois", parts_available: "Stock France", after_sales: "Technicien local" },
    
    // ===== CORÉE =====
    { id: "soudure_kr_std", origin: "korean", name: "Soudeuse KR-MIG-300", price_ttc: 6800, brand: "Daeyeong", supplier: "Daeyeong Machinery Co.", supplier_status: "Premium Partner (7 ans)", rating: 4.7, review_count: 56, specs: { power: "7 kW", capacity: "100 cadres/jour", dimensions: "900x700x1250 mm", weight: "190 kg", material: "Acier inoxydable 304" }, delivery: "30-45 jours", warranty: "36 mois", parts_available: "Stock Abidjan", after_sales: "Technicien local + hotline" },
    { id: "soudure_kr_premium", origin: "korean", name: "Soudeuse KR-MIG-450", price_ttc: 10500, brand: "Daeyeong", supplier: "Daeyeong Machinery Co.", supplier_status: "Premium Partner (9 ans)", rating: 4.9, review_count: 42, specs: { power: "10 kW", capacity: "150 cadres/jour", dimensions: "1100x800x1350 mm", weight: "280 kg", material: "Acier inoxydable 316L" }, delivery: "30-45 jours", warranty: "48 mois", parts_available: "Stock Abidjan + Dépôt France", after_sales: "Contrat maintenance + formation" },
    
    // ===== EUROPE (Fronius - Autriche) =====
    { id: "soudure_eu_std", origin: "europe", name: "Soudeuse EU-MIG-250", price_ttc: 5900, brand: "Fronius", supplier: "Fronius International", supplier_status: "Certified Partner (15 ans)", rating: 4.5, review_count: 45, specs: { power: "6.5 kW", capacity: "90 cadres/jour", dimensions: "800x600x1200 mm", weight: "160 kg", material: "Acier inoxydable" }, delivery: "15-30 jours", warranty: "6 mois", parts_available: "Stock Europe", after_sales: "SAV Europe + pièces 72h" },
    { id: "soudure_eu_premium", origin: "europe", name: "Soudeuse EU-MIG-400", price_ttc: 9900, brand: "Fronius", supplier: "Fronius International", supplier_status: "Premium Partner (18 ans)", rating: 4.8, review_count: 34, specs: { power: "9 kW", capacity: "130 cadres/jour", dimensions: "1000x700x1300 mm", weight: "240 kg", material: "Acier inoxydable 304" }, delivery: "15-30 jours", warranty: "12 mois", parts_available: "Stock Europe", after_sales: "Contrat maintenance" }
  ]
},

"cabine_peinture": {
  machine_ref: "cabine_peinture",
  machine_name: "Cabine peinture",
  machine_role: "Peinture des cadres",
  default_capacity: "100 cadres/jour",
  default_utilities: "Électricité",
  models: [
    // ===== CHINE =====
    { id: "peinture_cn_econo", origin: "chinese", name: "Cabine CP-ECO", price_ttc: 3500, brand: "Jinfeng", supplier: "Henan Jinfeng Machinery", supplier_status: "Verified Supplier (4 ans)", rating: 4.1, review_count: 67, specs: { power: "3 kW", capacity: "80 cadres/jour", dimensions: "4000x3000x2500 mm", weight: "600 kg", material: "Acier" }, delivery: "30 jours", warranty: "12 mois", parts_available: "Stock Chine", after_sales: "Support technique" },
    { id: "peinture_cn_std", origin: "chinese", name: "Cabine CP-STD", price_ttc: 5800, brand: "Jinfeng", supplier: "Henan Jinfeng Machinery", supplier_status: "Gold Supplier (6 ans)", rating: 4.5, review_count: 112, specs: { power: "5 kW", capacity: "120 cadres/jour", dimensions: "5000x3500x2800 mm", weight: "850 kg", material: "Acier inoxydable" }, delivery: "45 jours", warranty: "18 mois", parts_available: "Stock Abidjan", after_sales: "Formation" },
    { id: "peinture_cn_premium", origin: "chinese", name: "Cabine CP-PRO", price_ttc: 8900, brand: "Jinfeng", supplier: "Henan Jinfeng Machinery", supplier_status: "Gold Supplier (7 ans)", rating: 4.8, review_count: 56, specs: { power: "7 kW", capacity: "180 cadres/jour", dimensions: "6000x4000x3000 mm", weight: "1200 kg", material: "Acier inoxydable 304" }, delivery: "60 jours", warranty: "24 mois", parts_available: "Stock France", after_sales: "SAV local" },
    
    // ===== CORÉE =====
    { id: "peinture_kr_std", origin: "korean", name: "Cabine KR-CP-100", price_ttc: 4800, brand: "Daeyeong", supplier: "Daeyeong Machinery Co.", supplier_status: "Premium Partner (7 ans)", rating: 4.7, review_count: 56, specs: { power: "4 kW", capacity: "100 cadres/jour", dimensions: "4500x3200x2600 mm", weight: "750 kg", material: "Acier inoxydable 304" }, delivery: "30-45 jours", warranty: "36 mois", parts_available: "Stock Abidjan", after_sales: "Technicien local + hotline" },
    { id: "peinture_kr_premium", origin: "korean", name: "Cabine KR-CP-150", price_ttc: 7800, brand: "Daeyeong", supplier: "Daeyeong Machinery Co.", supplier_status: "Premium Partner (9 ans)", rating: 4.9, review_count: 42, specs: { power: "6 kW", capacity: "150 cadres/jour", dimensions: "5500x3800x2800 mm", weight: "1050 kg", material: "Acier inoxydable 316L" }, delivery: "30-45 jours", warranty: "48 mois", parts_available: "Stock Abidjan + Dépôt France", after_sales: "Contrat maintenance + formation" },
    
    // ===== EUROPE (Wagner - Allemagne) =====
    { id: "peinture_eu_std", origin: "europe", name: "Cabine EU-CP-80", price_ttc: 4200, brand: "Wagner", supplier: "Wagner Group", supplier_status: "Certified Partner (12 ans)", rating: 4.4, review_count: 45, specs: { power: "3.5 kW", capacity: "80 cadres/jour", dimensions: "4000x2800x2400 mm", weight: "650 kg", material: "Acier inoxydable" }, delivery: "15-30 jours", warranty: "6 mois", parts_available: "Stock Europe", after_sales: "SAV Europe + pièces 72h" },
    { id: "peinture_eu_premium", origin: "europe", name: "Cabine EU-CP-140", price_ttc: 7200, brand: "Wagner", supplier: "Wagner Group", supplier_status: "Premium Partner (15 ans)", rating: 4.7, review_count: 34, specs: { power: "5.5 kW", capacity: "140 cadres/jour", dimensions: "5200x3500x2700 mm", weight: "980 kg", material: "Acier inoxydable 304" }, delivery: "15-30 jours", warranty: "12 mois", parts_available: "Stock Europe", after_sales: "Contrat maintenance" }
  ]
},

"chaine_assemblage_velos": {
  machine_ref: "chaine_assemblage_velos",
  machine_name: "Chaîne assemblage",
  machine_role: "Montage des vélos",
  default_capacity: "100 vélos/jour",
  default_utilities: "Air comprimé",
  models: [
    // ===== CHINE =====
    { id: "assemblage_cn_std", origin: "chinese", name: "Chaîne AS-100", price_ttc: 2800, brand: "Jinfeng", supplier: "Henan Jinfeng Machinery", supplier_status: "Verified Supplier (5 ans)", rating: 4.3, review_count: 89, specs: { power: "1.5 kW", capacity: "80 vélos/jour", dimensions: "8000x1500x2000 mm", weight: "800 kg", material: "Acier" }, delivery: "30 jours", warranty: "12 mois", parts_available: "Stock Chine", after_sales: "Support technique" },
    { id: "assemblage_cn_premium", origin: "chinese", name: "Chaîne AS-150", price_ttc: 4800, brand: "Jinfeng", supplier: "Henan Jinfeng Machinery", supplier_status: "Gold Supplier (7 ans)", rating: 4.7, review_count: 78, specs: { power: "2.2 kW", capacity: "120 vélos/jour", dimensions: "10000x1800x2200 mm", weight: "1200 kg", material: "Acier inoxydable" }, delivery: "45 jours", warranty: "18 mois", parts_available: "Stock Abidjan", after_sales: "Pièces détachées" },
    
    // ===== CORÉE =====
    { id: "assemblage_kr_std", origin: "korean", name: "Chaîne KR-AS-120", price_ttc: 3800, brand: "Daeyeong", supplier: "Daeyeong Machinery Co.", supplier_status: "Premium Partner (7 ans)", rating: 4.7, review_count: 56, specs: { power: "1.8 kW", capacity: "100 vélos/jour", dimensions: "9000x1600x2100 mm", weight: "950 kg", material: "Acier inoxydable 304" }, delivery: "30-45 jours", warranty: "36 mois", parts_available: "Stock Abidjan", after_sales: "Technicien local + hotline" },
    { id: "assemblage_kr_premium", origin: "korean", name: "Chaîne KR-AS-180", price_ttc: 5800, brand: "Daeyeong", supplier: "Daeyeong Machinery Co.", supplier_status: "Premium Partner (9 ans)", rating: 4.9, review_count: 42, specs: { power: "2.5 kW", capacity: "150 vélos/jour", dimensions: "11000x2000x2400 mm", weight: "1450 kg", material: "Acier inoxydable 316L" }, delivery: "30-45 jours", warranty: "48 mois", parts_available: "Stock Abidjan + Dépôt France", after_sales: "Contrat maintenance + formation" },
    
    // ===== EUROPE (Bosch Rexroth - Allemagne) =====
    { id: "assemblage_eu_std", origin: "europe", name: "Chaîne EU-AS-90", price_ttc: 3200, brand: "Bosch Rexroth", supplier: "Bosch Rexroth AG", supplier_status: "Certified Partner (15 ans)", rating: 4.5, review_count: 45, specs: { power: "1.5 kW", capacity: "90 vélos/jour", dimensions: "8500x1500x2000 mm", weight: "850 kg", material: "Acier inoxydable" }, delivery: "15-30 jours", warranty: "6 mois", parts_available: "Stock Europe", after_sales: "SAV Europe + pièces 72h" },
    { id: "assemblage_eu_premium", origin: "europe", name: "Chaîne EU-AS-160", price_ttc: 5200, brand: "Bosch Rexroth", supplier: "Bosch Rexroth AG", supplier_status: "Premium Partner (18 ans)", rating: 4.8, review_count: 34, specs: { power: "2.2 kW", capacity: "160 vélos/jour", dimensions: "10000x1800x2200 mm", weight: "1200 kg", material: "Acier inoxydable 304" }, delivery: "15-30 jours", warranty: "12 mois", parts_available: "Stock Europe", after_sales: "Contrat maintenance" }
  ]
},

"machine_monter_roues": {
  machine_ref: "machine_monter_roues",
  machine_name: "Machine à monter roues",
  machine_role: "Montage des roues",
  default_capacity: "100 vélos/jour",
  default_utilities: "Air comprimé",
  models: [
    // ===== CHINE =====
    { id: "roues_cn_std", origin: "chinese", name: "Monte-roues MR-100", price_ttc: 2000, brand: "Jinfeng", supplier: "Henan Jinfeng Machinery", supplier_status: "Verified Supplier (4 ans)", rating: 4.2, review_count: 67, specs: { power: "0.8 kW", capacity: "80 vélos/jour", dimensions: "1200x800x1500 mm", weight: "180 kg", material: "Acier" }, delivery: "30 jours", warranty: "12 mois", parts_available: "Stock Chine", after_sales: "Support technique" },
    { id: "roues_cn_premium", origin: "chinese", name: "Monte-roues MR-150", price_ttc: 3500, brand: "Jinfeng", supplier: "Henan Jinfeng Machinery", supplier_status: "Gold Supplier (6 ans)", rating: 4.6, review_count: 89, specs: { power: "1.2 kW", capacity: "120 vélos/jour", dimensions: "1500x1000x1600 mm", weight: "250 kg", material: "Acier inoxydable" }, delivery: "45 jours", warranty: "18 mois", parts_available: "Stock Abidjan", after_sales: "Formation" },
    
    // ===== CORÉE =====
    { id: "roues_kr_std", origin: "korean", name: "Monte-roues KR-MR-120", price_ttc: 2800, brand: "Daeyeong", supplier: "Daeyeong Machinery Co.", supplier_status: "Premium Partner (7 ans)", rating: 4.7, review_count: 56, specs: { power: "1 kW", capacity: "100 vélos/jour", dimensions: "1400x900x1550 mm", weight: "220 kg", material: "Acier inoxydable 304" }, delivery: "30-45 jours", warranty: "36 mois", parts_available: "Stock Abidjan", after_sales: "Technicien local + hotline" },
    { id: "roues_kr_premium", origin: "korean", name: "Monte-roues KR-MR-180", price_ttc: 4500, brand: "Daeyeong", supplier: "Daeyeong Machinery Co.", supplier_status: "Premium Partner (9 ans)", rating: 4.9, review_count: 42, specs: { power: "1.5 kW", capacity: "150 vélos/jour", dimensions: "1700x1100x1700 mm", weight: "320 kg", material: "Acier inoxydable 316L" }, delivery: "30-45 jours", warranty: "48 mois", parts_available: "Stock Abidjan + Dépôt France", after_sales: "Contrat maintenance + formation" },
    
    // ===== EUROPE (BOSCH - Allemagne) =====
    { id: "roues_eu_std", origin: "europe", name: "Monte-roues EU-MR-90", price_ttc: 2200, brand: "Bosch", supplier: "Bosch Manufacturing", supplier_status: "Certified Partner (12 ans)", rating: 4.4, review_count: 45, specs: { power: "0.8 kW", capacity: "90 vélos/jour", dimensions: "1300x800x1500 mm", weight: "200 kg", material: "Acier inoxydable" }, delivery: "15-30 jours", warranty: "6 mois", parts_available: "Stock Europe", after_sales: "SAV Europe + pièces 72h" },
    { id: "roues_eu_premium", origin: "europe", name: "Monte-roues EU-MR-160", price_ttc: 3800, brand: "Bosch", supplier: "Bosch Manufacturing", supplier_status: "Premium Partner (15 ans)", rating: 4.7, review_count: 34, specs: { power: "1.2 kW", capacity: "160 vélos/jour", dimensions: "1600x1000x1600 mm", weight: "290 kg", material: "Acier inoxydable 304" }, delivery: "15-30 jours", warranty: "12 mois", parts_available: "Stock Europe", after_sales: "Contrat maintenance" }
  ]
},

"poste_reglage": {
  machine_ref: "poste_reglage",
  machine_name: "Poste réglage",
  machine_role: "Réglage transmission",
  default_capacity: "100 vélos/jour",
  default_utilities: "Standard",
  models: [
    // ===== CHINE =====
    { id: "reglage_cn_std", origin: "chinese", name: "Poste réglage PR-100", price_ttc: 800, brand: "Jinfeng", supplier: "Henan Jinfeng Machinery", supplier_status: "Verified Supplier (4 ans)", rating: 4.1, review_count: 56, specs: { power: "0.2 kW", capacity: "80 vélos/jour", dimensions: "1200x600x1200 mm", weight: "80 kg", material: "Acier" }, delivery: "15 jours", warranty: "12 mois", parts_available: "Stock Chine", after_sales: "Support technique" },
    { id: "reglage_cn_premium", origin: "chinese", name: "Poste réglage PR-150", price_ttc: 1500, brand: "Jinfeng", supplier: "Henan Jinfeng Machinery", supplier_status: "Gold Supplier (6 ans)", rating: 4.5, review_count: 78, specs: { power: "0.3 kW", capacity: "120 vélos/jour", dimensions: "1500x800x1400 mm", weight: "120 kg", material: "Acier inoxydable" }, delivery: "30 jours", warranty: "18 mois", parts_available: "Stock Abidjan", after_sales: "Formation" },
    
    // ===== CORÉE =====
    { id: "reglage_kr_std", origin: "korean", name: "Poste réglage KR-PR-120", price_ttc: 1200, brand: "Daeyeong", supplier: "Daeyeong Machinery Co.", supplier_status: "Premium Partner (7 ans)", rating: 4.7, review_count: 56, specs: { power: "0.25 kW", capacity: "100 vélos/jour", dimensions: "1400x700x1300 mm", weight: "100 kg", material: "Acier inoxydable 304" }, delivery: "30-45 jours", warranty: "36 mois", parts_available: "Stock Abidjan", after_sales: "Technicien local + hotline" },
    { id: "reglage_kr_premium", origin: "korean", name: "Poste réglage KR-PR-180", price_ttc: 1900, brand: "Daeyeong", supplier: "Daeyeong Machinery Co.", supplier_status: "Premium Partner (9 ans)", rating: 4.9, review_count: 42, specs: { power: "0.4 kW", capacity: "150 vélos/jour", dimensions: "1700x900x1500 mm", weight: "150 kg", material: "Acier inoxydable 316L" }, delivery: "30-45 jours", warranty: "48 mois", parts_available: "Stock Abidjan + Dépôt France", after_sales: "Contrat maintenance + formation" },
    
    // ===== EUROPE (HBM - Allemagne) =====
    { id: "reglage_eu_std", origin: "europe", name: "Poste réglage EU-PR-90", price_ttc: 900, brand: "HBM", supplier: "HBM Test and Measurement", supplier_status: "Certified Partner (12 ans)", rating: 4.4, review_count: 45, specs: { power: "0.2 kW", capacity: "90 vélos/jour", dimensions: "1300x600x1200 mm", weight: "90 kg", material: "Acier inoxydable" }, delivery: "15-30 jours", warranty: "6 mois", parts_available: "Stock Europe", after_sales: "SAV Europe + pièces 72h" },
    { id: "reglage_eu_premium", origin: "europe", name: "Poste réglage EU-PR-160", price_ttc: 1600, brand: "HBM", supplier: "HBM Test and Measurement", supplier_status: "Premium Partner (15 ans)", rating: 4.7, review_count: 34, specs: { power: "0.3 kW", capacity: "160 vélos/jour", dimensions: "1600x800x1400 mm", weight: "130 kg", material: "Acier inoxydable 304" }, delivery: "15-30 jours", warranty: "12 mois", parts_available: "Stock Europe", after_sales: "Contrat maintenance" }
  ]
},

"banc_controle": {
  machine_ref: "banc_controle",
  machine_name: "Banc de contrôle",
  machine_role: "Test freinage",
  default_capacity: "80 vélos/jour",
  default_utilities: "Électricité",
  models: [
    // ===== CHINE =====
    { id: "controle_cn_std", origin: "chinese", name: "Banc BC-80", price_ttc: 2500, brand: "Jinfeng", supplier: "Henan Jinfeng Machinery", supplier_status: "Verified Supplier (5 ans)", rating: 4.3, review_count: 67, specs: { power: "2 kW", capacity: "60 vélos/jour", dimensions: "2000x1000x1500 mm", weight: "300 kg", material: "Acier" }, delivery: "30 jours", warranty: "12 mois", parts_available: "Stock Chine", after_sales: "Support technique" },
    { id: "controle_cn_premium", origin: "chinese", name: "Banc BC-120", price_ttc: 4200, brand: "Jinfeng", supplier: "Henan Jinfeng Machinery", supplier_status: "Gold Supplier (7 ans)", rating: 4.7, review_count: 89, specs: { power: "3 kW", capacity: "100 vélos/jour", dimensions: "2500x1200x1600 mm", weight: "450 kg", material: "Acier inoxydable" }, delivery: "45 jours", warranty: "18 mois", parts_available: "Stock Abidjan", after_sales: "Formation + pièces" },
    
    // ===== CORÉE =====
    { id: "controle_kr_std", origin: "korean", name: "Banc KR-BC-100", price_ttc: 3500, brand: "Daeyeong", supplier: "Daeyeong Machinery Co.", supplier_status: "Premium Partner (7 ans)", rating: 4.7, review_count: 56, specs: { power: "2.5 kW", capacity: "80 vélos/jour", dimensions: "2300x1100x1500 mm", weight: "380 kg", material: "Acier inoxydable 304" }, delivery: "30-45 jours", warranty: "36 mois", parts_available: "Stock Abidjan", after_sales: "Technicien local + hotline" },
    { id: "controle_kr_premium", origin: "korean", name: "Banc KR-BC-150", price_ttc: 5600, brand: "Daeyeong", supplier: "Daeyeong Machinery Co.", supplier_status: "Premium Partner (9 ans)", rating: 4.9, review_count: 42, specs: { power: "3.5 kW", capacity: "120 vélos/jour", dimensions: "2800x1300x1700 mm", weight: "520 kg", material: "Acier inoxydable 316L" }, delivery: "30-45 jours", warranty: "48 mois", parts_available: "Stock Abidjan + Dépôt France", after_sales: "Contrat maintenance + formation" },
    
    // ===== EUROPE (Kistler - Suisse) =====
    { id: "controle_eu_std", origin: "europe", name: "Banc EU-BC-70", price_ttc: 2800, brand: "Kistler", supplier: "Kistler Group", supplier_status: "Certified Partner (12 ans)", rating: 4.4, review_count: 45, specs: { power: "2 kW", capacity: "70 vélos/jour", dimensions: "2100x1000x1500 mm", weight: "320 kg", material: "Acier inoxydable" }, delivery: "15-30 jours", warranty: "6 mois", parts_available: "Stock Europe", after_sales: "SAV Europe + pièces 72h" },
    { id: "controle_eu_premium", origin: "europe", name: "Banc EU-BC-130", price_ttc: 4800, brand: "Kistler", supplier: "Kistler Group", supplier_status: "Premium Partner (15 ans)", rating: 4.7, review_count: 34, specs: { power: "3 kW", capacity: "130 vélos/jour", dimensions: "2600x1200x1600 mm", weight: "480 kg", material: "Acier inoxydable 304" }, delivery: "15-30 jours", warranty: "12 mois", parts_available: "Stock Europe", after_sales: "Contrat maintenance" }
  ]
},

"poste_emballage_velos": {
  machine_ref: "poste_emballage_velos",
  machine_name: "Poste emballage",
  machine_role: "Conditionnement",
  default_capacity: "100 vélos/jour",
  default_utilities: "Électricité",
  models: [
    // ===== CHINE =====
    { id: "emballage_velos_cn_std", origin: "chinese", name: "Emballage PE-100", price_ttc: 1800, brand: "Jinfeng", supplier: "Henan Jinfeng Machinery", supplier_status: "Verified Supplier (4 ans)", rating: 4.2, review_count: 56, specs: { power: "1 kW", capacity: "80 vélos/jour", dimensions: "3000x1500x2000 mm", weight: "250 kg", material: "Acier" }, delivery: "30 jours", warranty: "12 mois", parts_available: "Stock Chine", after_sales: "Support technique" },
    { id: "emballage_velos_cn_premium", origin: "chinese", name: "Emballage PE-150", price_ttc: 3200, brand: "Jinfeng", supplier: "Henan Jinfeng Machinery", supplier_status: "Gold Supplier (6 ans)", rating: 4.6, review_count: 78, specs: { power: "1.5 kW", capacity: "120 vélos/jour", dimensions: "4000x1800x2200 mm", weight: "400 kg", material: "Acier inoxydable" }, delivery: "45 jours", warranty: "18 mois", parts_available: "Stock Abidjan", after_sales: "Pièces détachées" },
    
    // ===== CORÉE =====
    { id: "emballage_velos_kr_std", origin: "korean", name: "Emballage KR-PE-120", price_ttc: 2500, brand: "Daeyeong", supplier: "Daeyeong Machinery Co.", supplier_status: "Premium Partner (7 ans)", rating: 4.7, review_count: 56, specs: { power: "1.2 kW", capacity: "100 vélos/jour", dimensions: "3500x1600x2100 mm", weight: "320 kg", material: "Acier inoxydable 304" }, delivery: "30-45 jours", warranty: "36 mois", parts_available: "Stock Abidjan", after_sales: "Technicien local + hotline" },
    { id: "emballage_velos_kr_premium", origin: "korean", name: "Emballage KR-PE-180", price_ttc: 4000, brand: "Daeyeong", supplier: "Daeyeong Machinery Co.", supplier_status: "Premium Partner (9 ans)", rating: 4.9, review_count: 42, specs: { power: "1.8 kW", capacity: "150 vélos/jour", dimensions: "4500x2000x2400 mm", weight: "480 kg", material: "Acier inoxydable 316L" }, delivery: "30-45 jours", warranty: "48 mois", parts_available: "Stock Abidjan + Dépôt France", after_sales: "Contrat maintenance + formation" },
    
    // ===== EUROPE (Sealed Air - France) =====
    { id: "emballage_velos_eu_std", origin: "europe", name: "Emballage EU-PE-90", price_ttc: 1600, brand: "Sealed Air", supplier: "Sealed Air Corporation", supplier_status: "Certified Partner (12 ans)", rating: 4.4, review_count: 45, specs: { power: "1 kW", capacity: "90 vélos/jour", dimensions: "3200x1400x2000 mm", weight: "280 kg", material: "Acier inoxydable" }, delivery: "15-30 jours", warranty: "6 mois", parts_available: "Stock Europe", after_sales: "SAV Europe + pièces 72h" },
    { id: "emballage_velos_eu_premium", origin: "europe", name: "Emballage EU-PE-160", price_ttc: 3000, brand: "Sealed Air", supplier: "Sealed Air Corporation", supplier_status: "Premium Partner (15 ans)", rating: 4.7, review_count: 34, specs: { power: "1.5 kW", capacity: "160 vélos/jour", dimensions: "4200x1800x2200 mm", weight: "420 kg", material: "Acier inoxydable 304" }, delivery: "15-30 jours", warranty: "12 mois", parts_available: "Stock Europe", after_sales: "Contrat maintenance" }
  ]
},
// ==============================================
// ASSEMBLAGE D'ORDINATEURS - MODÈLES RÉELS
// ==============================================

"poste_assemblage_pc": {
  machine_ref: "poste_assemblage_pc",
  machine_name: "Poste assemblage",
  machine_role: "Montage manuel",
  default_capacity: "100 PC/jour",
  default_utilities: "Standard",
  models: [
    // ===== CHINE (Shenzhen Xinyi) =====
    { id: "poste_assemblage_cn_econo", origin: "chinese", name: "Xinyi PA-ECO", price_ttc: 6000, brand: "Xinyi", supplier: "Shenzhen Xinyi Machinery", supplier_status: "Verified Supplier (5 ans)", rating: 4.2, review_count: 67, specs: { power: "0.2 kW", capacity: "80 PC/jour", dimensions: "1500x800x1800 mm", weight: "80 kg", material: "Acier" }, delivery: "30 jours", warranty: "12 mois", parts_available: "Stock Chine", after_sales: "Support technique" },
    { id: "poste_assemblage_cn_std", origin: "chinese", name: "Xinyi PA-STD", price_ttc: 8000, brand: "Xinyi", supplier: "Shenzhen Xinyi Machinery", supplier_status: "Gold Supplier (7 ans)", rating: 4.5, review_count: 112, specs: { power: "0.3 kW", capacity: "100 PC/jour", dimensions: "1800x900x1900 mm", weight: "100 kg", material: "Acier inoxydable" }, delivery: "45 jours", warranty: "18 mois", parts_available: "Stock Abidjan (à venir)", after_sales: "Formation" },
    { id: "poste_assemblage_cn_premium", origin: "chinese", name: "Xinyi PA-PRO", price_ttc: 12000, brand: "Xinyi", supplier: "Shenzhen Xinyi Machinery", supplier_status: "Platinum Partner (8 ans)", rating: 4.8, review_count: 56, specs: { power: "0.5 kW", capacity: "150 PC/jour", dimensions: "2000x1000x2000 mm", weight: "120 kg", material: "Acier inoxydable 304" }, delivery: "60 jours", warranty: "24 mois", parts_available: "Dépôt France (à venir)", after_sales: "Contrat maintenance" },
    
    // ===== CORÉE (Samsung) =====
    { id: "poste_assemblage_kr_std", origin: "korean", name: "Samsung PA-120", price_ttc: 10000, brand: "Samsung", supplier: "Samsung Electronics", supplier_status: "Premium Partner (8 ans)", rating: 4.7, review_count: 56, specs: { power: "0.3 kW", capacity: "120 PC/jour", dimensions: "1600x850x1850 mm", weight: "90 kg", material: "Acier inoxydable 304" }, delivery: "30-45 jours", warranty: "36 mois", parts_available: "Stock Abidjan (à venir)", after_sales: "Technicien local + hotline" },
    { id: "poste_assemblage_kr_premium", origin: "korean", name: "Samsung PA-180", price_ttc: 15000, brand: "Samsung", supplier: "Samsung Electronics", supplier_status: "Platinum Partner (10 ans)", rating: 4.9, review_count: 42, specs: { power: "0.5 kW", capacity: "180 PC/jour", dimensions: "2200x1100x2100 mm", weight: "140 kg", material: "Acier inoxydable 316L" }, delivery: "30-45 jours", warranty: "48 mois", parts_available: "Dépôt France (à venir)", after_sales: "Contrat maintenance + formation" },
    
    // ===== EUROPE (Bosch Rexroth - Allemagne) =====
    { id: "poste_assemblage_eu_std", origin: "europe", name: "Bosch Rexroth PA-100", price_ttc: 9000, brand: "Bosch Rexroth", supplier: "Bosch Rexroth AG", supplier_status: "Premium Partner (15 ans)", rating: 4.6, review_count: 45, specs: { power: "0.3 kW", capacity: "100 PC/jour", dimensions: "1500x800x1800 mm", weight: "95 kg", material: "Acier inoxydable" }, delivery: "15-30 jours", warranty: "18 mois", parts_available: "Stock Europe", after_sales: "SAV Europe + pièces 72h" },
    { id: "poste_assemblage_eu_premium", origin: "europe", name: "Bosch Rexroth PA-160", price_ttc: 14000, brand: "Bosch Rexroth", supplier: "Bosch Rexroth AG", supplier_status: "Platinum Partner (18 ans)", rating: 4.8, review_count: 34, specs: { power: "0.5 kW", capacity: "160 PC/jour", dimensions: "1900x1000x2000 mm", weight: "130 kg", material: "Acier inoxydable 304" }, delivery: "15-30 jours", warranty: "24 mois", parts_available: "Stock Europe", after_sales: "Contrat maintenance" }
  ]
},

"machine_visser": {
  machine_ref: "machine_visser",
  machine_name: "Machine à visser",
  machine_role: "Vissage automatique",
  default_capacity: "50 PC/heure",
  default_utilities: "Air comprimé",
  models: [
    // ===== CHINE (Nitto - Japon via Chine) =====
    { id: "visser_cn_econo", origin: "chinese", name: "Nitto VS-ECO", price_ttc: 12000, brand: "Nitto", supplier: "Nitto Seiko (China)", supplier_status: "Verified Supplier (6 ans)", rating: 4.3, review_count: 78, specs: { power: "0.5 kW", capacity: "40 PC/h", dimensions: "800x600x1400 mm", weight: "150 kg", material: "Acier" }, delivery: "45 jours", warranty: "12 mois", parts_available: "Stock Chine", after_sales: "Support technique" },
    { id: "visser_cn_std", origin: "chinese", name: "Nitto VS-STD", price_ttc: 16000, brand: "Nitto", supplier: "Nitto Seiko (China)", supplier_status: "Gold Supplier (7 ans)", rating: 4.6, review_count: 134, specs: { power: "0.8 kW", capacity: "50 PC/h", dimensions: "1000x800x1500 mm", weight: "200 kg", material: "Acier inoxydable" }, delivery: "60 jours", warranty: "18 mois", parts_available: "Stock Abidjan (à venir)", after_sales: "Pièces détachées" },
    { id: "visser_cn_premium", origin: "chinese", name: "Nitto VS-PRO", price_ttc: 25000, brand: "Nitto", supplier: "Nitto Seiko (China)", supplier_status: "Platinum Partner (8 ans)", rating: 4.9, review_count: 67, specs: { power: "1 kW", capacity: "70 PC/h", dimensions: "1200x1000x1600 mm", weight: "280 kg", material: "Acier inoxydable 304" }, delivery: "75 jours", warranty: "24 mois", parts_available: "Dépôt France (à venir)", after_sales: "Contrat maintenance" },
    
    // ===== CORÉE (Hyundai Robotics) =====
    { id: "visser_kr_std", origin: "korean", name: "Hyundai VS-60", price_ttc: 16000, brand: "Hyundai", supplier: "Hyundai Robotics", supplier_status: "Premium Partner (7 ans)", rating: 4.7, review_count: 56, specs: { power: "0.6 kW", capacity: "60 PC/h", dimensions: "900x700x1500 mm", weight: "180 kg", material: "Acier inoxydable 304" }, delivery: "30-45 jours", warranty: "36 mois", parts_available: "Stock Abidjan (à venir)", after_sales: "Technicien local + hotline" },
    { id: "visser_kr_premium", origin: "korean", name: "Hyundai VS-90", price_ttc: 24000, brand: "Hyundai", supplier: "Hyundai Robotics", supplier_status: "Platinum Partner (9 ans)", rating: 4.9, review_count: 42, specs: { power: "0.9 kW", capacity: "90 PC/h", dimensions: "1300x900x1700 mm", weight: "260 kg", material: "Acier inoxydable 316L" }, delivery: "30-45 jours", warranty: "48 mois", parts_available: "Dépôt France (à venir)", after_sales: "Contrat maintenance + formation" },
    
    // ===== EUROPE (Weber - Allemagne) =====
    { id: "visser_eu_std", origin: "europe", name: "Weber VS-50", price_ttc: 14000, brand: "Weber", supplier: "Weber Schraubautomaten", supplier_status: "Premium Partner (12 ans)", rating: 4.5, review_count: 45, specs: { power: "0.5 kW", capacity: "50 PC/h", dimensions: "800x600x1400 mm", weight: "160 kg", material: "Acier inoxydable" }, delivery: "15-30 jours", warranty: "18 mois", parts_available: "Stock Europe", after_sales: "SAV Europe + pièces 72h" },
    { id: "visser_eu_premium", origin: "europe", name: "Weber VS-80", price_ttc: 22000, brand: "Weber", supplier: "Weber Schraubautomaten", supplier_status: "Platinum Partner (15 ans)", rating: 4.8, review_count: 34, specs: { power: "0.8 kW", capacity: "80 PC/h", dimensions: "1100x800x1600 mm", weight: "230 kg", material: "Acier inoxydable 304" }, delivery: "15-30 jours", warranty: "24 mois", parts_available: "Stock Europe", after_sales: "Contrat maintenance" }
  ]
},

"testeur_alimentation": {
  machine_ref: "testeur_alimentation",
  machine_name: "Testeur alimentation",
  machine_role: "Test PSU",
  default_capacity: "50 PC/heure",
  default_utilities: "Électricité",
  models: [
    // ===== CHINE (Chroma - Taïwan via Chine) =====
    { id: "testeur_alim_cn_econo", origin: "chinese", name: "Chroma TA-ECO", price_ttc: 8000, brand: "Chroma", supplier: "Chroma ATE (China)", supplier_status: "Verified Supplier (5 ans)", rating: 4.3, review_count: 89, specs: { power: "0.3 kW", capacity: "40 PC/h", dimensions: "600x500x1200 mm", weight: "50 kg", material: "Plastique renforcé" }, delivery: "45 jours", warranty: "12 mois", parts_available: "Stock Chine", after_sales: "Support technique" },
    { id: "testeur_alim_cn_std", origin: "chinese", name: "Chroma TA-STD", price_ttc: 12000, brand: "Chroma", supplier: "Chroma ATE (China)", supplier_status: "Gold Supplier (7 ans)", rating: 4.7, review_count: 156, specs: { power: "0.5 kW", capacity: "50 PC/h", dimensions: "800x600x1400 mm", weight: "80 kg", material: "Aluminium" }, delivery: "60 jours", warranty: "18 mois", parts_available: "Stock Abidjan (à venir)", after_sales: "Formation" },
    { id: "testeur_alim_cn_premium", origin: "chinese", name: "Chroma TA-PRO", price_ttc: 20000, brand: "Chroma", supplier: "Chroma ATE (China)", supplier_status: "Platinum Partner (8 ans)", rating: 4.9, review_count: 78, specs: { power: "0.8 kW", capacity: "70 PC/h", dimensions: "1000x800x1600 mm", weight: "120 kg", material: "Aluminium anodisé" }, delivery: "75 jours", warranty: "24 mois", parts_available: "Dépôt France (à venir)", after_sales: "Contrat maintenance" },
    
    // ===== CORÉE (Samsung) =====
    { id: "testeur_alim_kr_std", origin: "korean", name: "Samsung TA-60", price_ttc: 16000, brand: "Samsung", supplier: "Samsung Electronics", supplier_status: "Premium Partner (7 ans)", rating: 4.7, review_count: 56, specs: { power: "0.4 kW", capacity: "60 PC/h", dimensions: "700x600x1300 mm", weight: "70 kg", material: "Aluminium anodisé" }, delivery: "30-45 jours", warranty: "36 mois", parts_available: "Stock Abidjan (à venir)", after_sales: "Technicien local + hotline" },
    { id: "testeur_alim_kr_premium", origin: "korean", name: "Samsung TA-90", price_ttc: 24000, brand: "Samsung", supplier: "Samsung Electronics", supplier_status: "Platinum Partner (9 ans)", rating: 4.9, review_count: 42, specs: { power: "0.7 kW", capacity: "90 PC/h", dimensions: "900x800x1500 mm", weight: "110 kg", material: "Aluminium anodisé" }, delivery: "30-45 jours", warranty: "48 mois", parts_available: "Dépôt France (à venir)", after_sales: "Contrat maintenance + formation" },
    
    // ===== EUROPE (Rohde & Schwarz - Allemagne) =====
    { id: "testeur_alim_eu_std", origin: "europe", name: "R&S TA-50", price_ttc: 10000, brand: "Rohde & Schwarz", supplier: "Rohde & Schwarz", supplier_status: "Premium Partner (12 ans)", rating: 4.5, review_count: 45, specs: { power: "0.3 kW", capacity: "50 PC/h", dimensions: "600x500x1200 mm", weight: "55 kg", material: "Acier inoxydable" }, delivery: "15-30 jours", warranty: "18 mois", parts_available: "Stock Europe", after_sales: "SAV Europe + pièces 72h" },
    { id: "testeur_alim_eu_premium", origin: "europe", name: "R&S TA-80", price_ttc: 18000, brand: "Rohde & Schwarz", supplier: "Rohde & Schwarz", supplier_status: "Platinum Partner (15 ans)", rating: 4.8, review_count: 34, specs: { power: "0.6 kW", capacity: "80 PC/h", dimensions: "900x700x1400 mm", weight: "100 kg", material: "Acier inoxydable 304" }, delivery: "15-30 jours", warranty: "24 mois", parts_available: "Stock Europe", after_sales: "Contrat maintenance" }
  ]
},

"testeur_ram": {
  machine_ref: "testeur_ram",
  machine_name: "Testeur mémoire RAM",
  machine_role: "Test RAM",
  default_capacity: "100 barrettes/heure",
  default_utilities: "Électricité",
  models: [
    // ===== CHINE (ADATA - Taïwan via Chine) =====
    { id: "testeur_ram_cn_econo", origin: "chinese", name: "ADATA TR-ECO", price_ttc: 6000, brand: "ADATA", supplier: "ADATA Technology (China)", supplier_status: "Verified Supplier (4 ans)", rating: 4.2, review_count: 67, specs: { power: "0.2 kW", capacity: "80 barrettes/h", dimensions: "400x400x1000 mm", weight: "30 kg", material: "Plastique" }, delivery: "30 jours", warranty: "12 mois", parts_available: "Stock Chine", after_sales: "Support technique" },
    { id: "testeur_ram_cn_std", origin: "chinese", name: "ADATA TR-STD", price_ttc: 10000, brand: "ADATA", supplier: "ADATA Technology (China)", supplier_status: "Gold Supplier (6 ans)", rating: 4.5, review_count: 112, specs: { power: "0.3 kW", capacity: "100 barrettes/h", dimensions: "500x500x1200 mm", weight: "50 kg", material: "Aluminium" }, delivery: "45 jours", warranty: "18 mois", parts_available: "Stock Abidjan (à venir)", after_sales: "Formation" },
    { id: "testeur_ram_cn_premium", origin: "chinese", name: "ADATA TR-PRO", price_ttc: 16000, brand: "ADATA", supplier: "ADATA Technology (China)", supplier_status: "Platinum Partner (7 ans)", rating: 4.8, review_count: 56, specs: { power: "0.5 kW", capacity: "150 barrettes/h", dimensions: "600x600x1400 mm", weight: "80 kg", material: "Acier inoxydable" }, delivery: "60 jours", warranty: "24 mois", parts_available: "Dépôt France (à venir)", after_sales: "Contrat maintenance" },
    
    // ===== CORÉE (Samsung) =====
    { id: "testeur_ram_kr_std", origin: "korean", name: "Samsung TR-120", price_ttc: 13000, brand: "Samsung", supplier: "Samsung Electronics", supplier_status: "Premium Partner (7 ans)", rating: 4.7, review_count: 56, specs: { power: "0.4 kW", capacity: "120 barrettes/h", dimensions: "600x600x1300 mm", weight: "60 kg", material: "Aluminium anodisé" }, delivery: "30-45 jours", warranty: "36 mois", parts_available: "Stock Abidjan (à venir)", after_sales: "Technicien local + hotline" },
    { id: "testeur_ram_kr_premium", origin: "korean", name: "Samsung TR-200", price_ttc: 20000, brand: "Samsung", supplier: "Samsung Electronics", supplier_status: "Platinum Partner (9 ans)", rating: 4.9, review_count: 42, specs: { power: "0.7 kW", capacity: "200 barrettes/h", dimensions: "800x800x1500 mm", weight: "90 kg", material: "Aluminium anodisé" }, delivery: "30-45 jours", warranty: "48 mois", parts_available: "Dépôt France (à venir)", after_sales: "Contrat maintenance + formation" },
    
    // ===== EUROPE (Infineon - Allemagne) =====
    { id: "testeur_ram_eu_std", origin: "europe", name: "Infineon TR-100", price_ttc: 8000, brand: "Infineon", supplier: "Infineon Technologies", supplier_status: "Premium Partner (12 ans)", rating: 4.5, review_count: 45, specs: { power: "0.3 kW", capacity: "100 barrettes/h", dimensions: "500x500x1200 mm", weight: "50 kg", material: "Acier inoxydable" }, delivery: "15-30 jours", warranty: "18 mois", parts_available: "Stock Europe", after_sales: "SAV Europe + pièces 72h" },
    { id: "testeur_ram_eu_premium", origin: "europe", name: "Infineon TR-180", price_ttc: 15000, brand: "Infineon", supplier: "Infineon Technologies", supplier_status: "Platinum Partner (15 ans)", rating: 4.8, review_count: 34, specs: { power: "0.6 kW", capacity: "180 barrettes/h", dimensions: "700x700x1400 mm", weight: "80 kg", material: "Acier inoxydable 304" }, delivery: "15-30 jours", warranty: "24 mois", parts_available: "Stock Europe", after_sales: "Contrat maintenance" }
  ]
},

"bruleur_bios": {
  machine_ref: "bruleur_bios",
  machine_name: "Brûleur BIOS",
  machine_role: "Flash BIOS",
  default_capacity: "50 PC/heure",
  default_utilities: "Électricité",
  models: [
    // ===== CHINE (Dediprog - Suisse via Chine) =====
    { id: "bios_cn_econo", origin: "chinese", name: "Dediprog BB-ECO", price_ttc: 5000, brand: "Dediprog", supplier: "Dediprog (China)", supplier_status: "Verified Supplier (5 ans)", rating: 4.3, review_count: 78, specs: { power: "0.2 kW", capacity: "40 PC/h", dimensions: "300x300x800 mm", weight: "20 kg", material: "Plastique" }, delivery: "30 jours", warranty: "12 mois", parts_available: "Stock Chine", after_sales: "Support technique" },
    { id: "bios_cn_std", origin: "chinese", name: "Dediprog BB-STD", price_ttc: 8000, brand: "Dediprog", supplier: "Dediprog (China)", supplier_status: "Gold Supplier (7 ans)", rating: 4.6, review_count: 134, specs: { power: "0.3 kW", capacity: "50 PC/h", dimensions: "400x400x900 mm", weight: "35 kg", material: "Aluminium" }, delivery: "45 jours", warranty: "18 mois", parts_available: "Stock Abidjan (à venir)", after_sales: "Pièces détachées" },
    { id: "bios_cn_premium", origin: "chinese", name: "Dediprog BB-PRO", price_ttc: 12000, brand: "Dediprog", supplier: "Dediprog (China)", supplier_status: "Platinum Partner (8 ans)", rating: 4.9, review_count: 67, specs: { power: "0.5 kW", capacity: "70 PC/h", dimensions: "500x500x1000 mm", weight: "50 kg", material: "Acier inoxydable" }, delivery: "60 jours", warranty: "24 mois", parts_available: "Dépôt France (à venir)", after_sales: "Contrat maintenance" },
    
    // ===== CORÉE (Daeyeong) =====
    { id: "bios_kr_std", origin: "korean", name: "Daeyeong BB-60", price_ttc: 7000, brand: "Daeyeong", supplier: "Daeyeong Machinery Co.", supplier_status: "Premium Partner (7 ans)", rating: 4.7, review_count: 56, specs: { power: "0.3 kW", capacity: "60 PC/h", dimensions: "400x400x900 mm", weight: "30 kg", material: "Aluminium anodisé" }, delivery: "30-45 jours", warranty: "36 mois", parts_available: "Stock Abidjan (à venir)", after_sales: "Technicien local + hotline" },
    { id: "bios_kr_premium", origin: "korean", name: "Daeyeong BB-90", price_ttc: 10000, brand: "Daeyeong", supplier: "Daeyeong Machinery Co.", supplier_status: "Platinum Partner (9 ans)", rating: 4.9, review_count: 42, specs: { power: "0.5 kW", capacity: "90 PC/h", dimensions: "500x500x1100 mm", weight: "45 kg", material: "Aluminium anodisé" }, delivery: "30-45 jours", warranty: "48 mois", parts_available: "Dépôt France (à venir)", after_sales: "Contrat maintenance + formation" },
    
    // ===== EUROPE (Elnec - Slovaquie) =====
    { id: "bios_eu_std", origin: "europe", name: "Elnec BB-50", price_ttc: 6000, brand: "Elnec", supplier: "Elnec s.r.o.", supplier_status: "Premium Partner (12 ans)", rating: 4.5, review_count: 45, specs: { power: "0.2 kW", capacity: "50 PC/h", dimensions: "300x300x800 mm", weight: "25 kg", material: "Acier inoxydable" }, delivery: "15-30 jours", warranty: "18 mois", parts_available: "Stock Europe", after_sales: "SAV Europe + pièces 72h" },
    { id: "bios_eu_premium", origin: "europe", name: "Elnec BB-80", price_ttc: 9000, brand: "Elnec", supplier: "Elnec s.r.o.", supplier_status: "Platinum Partner (15 ans)", rating: 4.8, review_count: 34, specs: { power: "0.4 kW", capacity: "80 PC/h", dimensions: "400x400x1000 mm", weight: "40 kg", material: "Acier inoxydable 304" }, delivery: "15-30 jours", warranty: "24 mois", parts_available: "Stock Europe", after_sales: "Contrat maintenance" }
  ]
},

"config_os": {
  machine_ref: "config_os",
  machine_name: "Configuration OS",
  machine_role: "Installation OS",
  default_capacity: "50 PC/heure",
  default_utilities: "Électricité",
  models: [
    // ===== CHINE (Microsoft - USA via Chine) =====
    { id: "config_os_cn_econo", origin: "chinese", name: "Microsoft OS-ECO", price_ttc: 8000, brand: "Microsoft", supplier: "Microsoft (China)", supplier_status: "Verified Supplier (5 ans)", rating: 4.2, review_count: 89, specs: { power: "0.5 kW", capacity: "40 PC/h", dimensions: "800x600x1400 mm", weight: "60 kg", material: "Acier" }, delivery: "30 jours", warranty: "12 mois", parts_available: "Stock Chine", after_sales: "Support technique" },
    { id: "config_os_cn_std", origin: "chinese", name: "Microsoft OS-STD", price_ttc: 12000, brand: "Microsoft", supplier: "Microsoft (China)", supplier_status: "Gold Supplier (7 ans)", rating: 4.6, review_count: 156, specs: { power: "0.8 kW", capacity: "50 PC/h", dimensions: "1000x800x1600 mm", weight: "90 kg", material: "Acier inoxydable" }, delivery: "45 jours", warranty: "18 mois", parts_available: "Stock Abidjan (à venir)", after_sales: "Formation" },
    { id: "config_os_cn_premium", origin: "chinese", name: "Microsoft OS-PRO", price_ttc: 20000, brand: "Microsoft", supplier: "Microsoft (China)", supplier_status: "Platinum Partner (8 ans)", rating: 4.9, review_count: 78, specs: { power: "1 kW", capacity: "70 PC/h", dimensions: "1200x1000x1800 mm", weight: "120 kg", material: "Acier inoxydable 304" }, delivery: "60 jours", warranty: "24 mois", parts_available: "Dépôt France (à venir)", after_sales: "Contrat maintenance" },
    
    // ===== CORÉE (Samsung) =====
    { id: "config_os_kr_std", origin: "korean", name: "Samsung OS-60", price_ttc: 11000, brand: "Samsung", supplier: "Samsung Electronics", supplier_status: "Premium Partner (7 ans)", rating: 4.7, review_count: 56, specs: { power: "0.6 kW", capacity: "60 PC/h", dimensions: "900x700x1500 mm", weight: "75 kg", material: "Acier inoxydable 304" }, delivery: "30-45 jours", warranty: "36 mois", parts_available: "Stock Abidjan (à venir)", after_sales: "Technicien local + hotline" },
    { id: "config_os_kr_premium", origin: "korean", name: "Samsung OS-90", price_ttc: 19000, brand: "Samsung", supplier: "Samsung Electronics", supplier_status: "Platinum Partner (9 ans)", rating: 4.9, review_count: 42, specs: { power: "0.9 kW", capacity: "90 PC/h", dimensions: "1100x900x1700 mm", weight: "100 kg", material: "Acier inoxydable 316L" }, delivery: "30-45 jours", warranty: "48 mois", parts_available: "Dépôt France (à venir)", after_sales: "Contrat maintenance + formation" },
    
    // ===== EUROPE (Canonical - UK) =====
    { id: "config_os_eu_std", origin: "europe", name: "Canonical OS-50", price_ttc: 7000, brand: "Canonical", supplier: "Canonical Ltd.", supplier_status: "Premium Partner (12 ans)", rating: 4.5, review_count: 45, specs: { power: "0.5 kW", capacity: "50 PC/h", dimensions: "800x600x1400 mm", weight: "65 kg", material: "Acier inoxydable" }, delivery: "15-30 jours", warranty: "18 mois", parts_available: "Stock Europe", after_sales: "SAV Europe + pièces 72h" },
    { id: "config_os_eu_premium", origin: "europe", name: "Canonical OS-80", price_ttc: 14000, brand: "Canonical", supplier: "Canonical Ltd.", supplier_status: "Platinum Partner (15 ans)", rating: 4.8, review_count: 34, specs: { power: "0.8 kW", capacity: "80 PC/h", dimensions: "1100x900x1600 mm", weight: "95 kg", material: "Acier inoxydable 304" }, delivery: "15-30 jours", warranty: "24 mois", parts_available: "Stock Europe", after_sales: "Contrat maintenance" }
  ]
},

"poste_emballage_pc": {
  machine_ref: "poste_emballage_pc",
  machine_name: "Poste emballage",
  machine_role: "Conditionnement",
  default_capacity: "50 PC/heure",
  default_utilities: "Électricité",
  models: [
    // ===== CHINE (Sealed Air - USA via Chine) =====
    { id: "emballage_pc_cn_econo", origin: "chinese", name: "Sealed Air PE-ECO", price_ttc: 5000, brand: "Sealed Air", supplier: "Sealed Air (China)", supplier_status: "Verified Supplier (4 ans)", rating: 4.2, review_count: 67, specs: { power: "0.5 kW", capacity: "40 PC/h", dimensions: "1500x800x1800 mm", weight: "150 kg", material: "Acier" }, delivery: "30 jours", warranty: "12 mois", parts_available: "Stock Chine", after_sales: "Support technique" },
    { id: "emballage_pc_cn_std", origin: "chinese", name: "Sealed Air PE-STD", price_ttc: 7000, brand: "Sealed Air", supplier: "Sealed Air (China)", supplier_status: "Gold Supplier (6 ans)", rating: 4.5, review_count: 134, specs: { power: "0.8 kW", capacity: "50 PC/h", dimensions: "1800x1000x2000 mm", weight: "200 kg", material: "Acier inoxydable" }, delivery: "45 jours", warranty: "18 mois", parts_available: "Stock Abidjan (à venir)", after_sales: "Pièces détachées" },
    { id: "emballage_pc_cn_premium", origin: "chinese", name: "Sealed Air PE-PRO", price_ttc: 10000, brand: "Sealed Air", supplier: "Sealed Air (China)", supplier_status: "Platinum Partner (7 ans)", rating: 4.8, review_count: 56, specs: { power: "1 kW", capacity: "70 PC/h", dimensions: "2000x1200x2200 mm", weight: "280 kg", material: "Acier inoxydable 304" }, delivery: "60 jours", warranty: "24 mois", parts_available: "Dépôt France (à venir)", after_sales: "Contrat maintenance" },
    
    // ===== CORÉE (Daeyeong) =====
    { id: "emballage_pc_kr_std", origin: "korean", name: "Daeyeong PE-60", price_ttc: 6500, brand: "Daeyeong", supplier: "Daeyeong Machinery Co.", supplier_status: "Premium Partner (7 ans)", rating: 4.7, review_count: 56, specs: { power: "0.6 kW", capacity: "60 PC/h", dimensions: "1600x900x1900 mm", weight: "180 kg", material: "Acier inoxydable 304" }, delivery: "30-45 jours", warranty: "36 mois", parts_available: "Stock Abidjan (à venir)", after_sales: "Technicien local + hotline" },
    { id: "emballage_pc_kr_premium", origin: "korean", name: "Daeyeong PE-90", price_ttc: 10000, brand: "Daeyeong", supplier: "Daeyeong Machinery Co.", supplier_status: "Platinum Partner (9 ans)", rating: 4.9, review_count: 42, specs: { power: "0.9 kW", capacity: "90 PC/h", dimensions: "2200x1100x2100 mm", weight: "260 kg", material: "Acier inoxydable 316L" }, delivery: "30-45 jours", warranty: "48 mois", parts_available: "Dépôt France (à venir)", after_sales: "Contrat maintenance + formation" },
    
    // ===== EUROPE (Sealed Air - France) =====
    { id: "emballage_pc_eu_std", origin: "europe", name: "Sealed Air PE-50", price_ttc: 4500, brand: "Sealed Air", supplier: "Sealed Air France", supplier_status: "Premium Partner (12 ans)", rating: 4.4, review_count: 45, specs: { power: "0.5 kW", capacity: "50 PC/h", dimensions: "1400x700x1700 mm", weight: "160 kg", material: "Acier inoxydable" }, delivery: "15-30 jours", warranty: "18 mois", parts_available: "Stock Europe", after_sales: "SAV Europe + pièces 72h" },
    { id: "emballage_pc_eu_premium", origin: "europe", name: "Sealed Air PE-75", price_ttc: 8500, brand: "Sealed Air", supplier: "Sealed Air France", supplier_status: "Platinum Partner (15 ans)", rating: 4.7, review_count: 34, specs: { power: "0.8 kW", capacity: "75 PC/h", dimensions: "1900x1000x1900 mm", weight: "240 kg", material: "Acier inoxydable 304" }, delivery: "15-30 jours", warranty: "24 mois", parts_available: "Stock Europe", after_sales: "Contrat maintenance" }
  ]
},
  // ==================== ALIMENTS POUR BÉTAIL ====================

  "granulateur": {
    machine_ref: "granulateur",
    machine_name: "Granulateur",
    machine_role: "Granulation des aliments pour bétail",
    default_capacity: "500-2000 kg/h",
    default_utilities: "Électricité",
    models: [
      { id: "granulateur_econo", name: "Granulateur G-500", price_ttc: 18900, brand: "Jinfeng Feed", supplier: "Henan Jinfeng Feed Machinery", supplier_status: "Verified Supplier (5 ans)", rating: 4.3, review_count: 78, specs: { power: "30 kW", capacity: "500 kg/h", dimensions: "2000x1000x1800 mm", weight: "1200 kg", material: "Acier inoxydable 304" }, delivery: "45-60 jours", warranty: "12 mois", parts_available: "Stock Chine", after_sales: "Support technique" },
      { id: "granulateur_std", name: "Granulateur G-1200", price_ttc: 28900, brand: "Jinfeng Feed", supplier: "Henan Jinfeng Feed Machinery", supplier_status: "Gold Supplier (7 ans)", rating: 4.7, review_count: 134, specs: { power: "55 kW", capacity: "1200 kg/h", dimensions: "2800x1200x2200 mm", weight: "2200 kg", material: "Acier inoxydable 304" }, delivery: "60-75 jours", warranty: "18 mois", parts_available: "Stock Abidjan", after_sales: "Formation + pièces" },
      { id: "granulateur_premium", name: "Granulateur G-2000", price_ttc: 45900, brand: "Jinfeng Feed", supplier: "Henan Jinfeng Feed Machinery", supplier_status: "Gold Supplier (8 ans)", rating: 4.9, review_count: 67, specs: { power: "90 kW", capacity: "2000 kg/h", dimensions: "3500x1500x2500 mm", weight: "3500 kg", material: "Acier inoxydable 316L" }, delivery: "75-90 jours", warranty: "24 mois", parts_available: "Stock France", after_sales: "Contrat maintenance" }
    ]
  }
};
window.MODELS_DB = MODELS_DB;

console.log(
  "✅ MODELS_DB chargé :",
  Object.keys(MODELS_DB).length,
  "familles de machines"
);
// ============================================================
// P2I MODELS DB V2
// Architecture commerciale P2I documentée
// Pilote : Biscuiterie industrielle
// ============================================================

window.P2I_MODELS_DB_V2 = window.P2I_MODELS_DB_V2 || {};

window.P2I_MODELS_DB_V2["melangeur_biscuiterie"] = {

  // ----------------------------------------------------------
  // BESOIN TECHNIQUE DE RÉFÉRENCE P2I
  // ----------------------------------------------------------
  machine_key: "melangeur_biscuiterie",

  machine_name: "Mélangeur / pétrin industriel",

  up_id: "biscuiterie",

  target: {
    line_capacity_kg_h: 500,

    applications: [
      "biscuits_mous",
      "biscuits_durs",
      "crackers"
    ]
  },

  // ----------------------------------------------------------
  // MODÈLES COMMERCIAUX
  // ----------------------------------------------------------
  models: [

    // ========================================================
    // 1. CHINE — SKYWIN
    // ========================================================
    {
      model_id: "CN_SKYWIN_VDM_500",

      machine_key: "melangeur_biscuiterie",

      name: "Vertical Dough Mixer 500 kg",

      manufacturer: "Foshan Shunde Skywin Foodstuff Machinery Co., Ltd.",

      supplier_id: "SUP_SKYWIN_CN",

      supplier: "Skywin Foodstuff Machinery",

      supplier_country: "China",

      origin: "chinese",

      condition: "new",

      p2i_status: "candidate",

      supplier_status: "identified",

      // ------------------------------------------------------
      // APPLICATION INDUSTRIELLE
      // ------------------------------------------------------
      applications: [
        "soft_biscuit",
        "hard_biscuit",
        "cookie",
        "cracker"
      ],

      role:
        "Mélange industriel des pâtes à biscuits avant alimentation de la ligne de formage.",

      // ------------------------------------------------------
      // CAPACITÉ
      // ------------------------------------------------------
      capacity: {
        line_target_kg_h: 500,

        batch_capacity_kg_min: 300,
        batch_capacity_kg_max: 500,

        cycle_time_min_min: 15,
        cycle_time_min_max: 35,

        claimed_throughput_kg_h_min: 300,
        claimed_throughput_kg_h_max: 500,

        verified_throughput_kg_h: null,

        capacity_basis: "supplier_listing",

        compatibility_status: "to_confirm",

        compatibility_note:
          "Le fournisseur annonce une production de 300 à 500 kg/h et une capacité de pâte pouvant atteindre 500 kg par batch. La capacité effective à 500 kg/h doit être confirmée pour la formulation P2I retenue."
      },

      // ------------------------------------------------------
      // CARACTÉRISTIQUES TECHNIQUES
      // ------------------------------------------------------
      specifications: {
        mixing_type: "vertical",

        automation_level: "automatic",

        plc_control: true,

        variable_speed: true,

        food_contact_material: "304 stainless steel",

        mixer_spirals: 3,

        electrical_voltage_v: 380,

        installation_requirements: [
          "electricity",
          "industrial_floor",
          "operator_access",
          "cleaning_access"
        ]
      },

      utilities: {
        electricity: true,
        compressed_air: "to_confirm",
        water: false,
        steam: false
      },

      // ------------------------------------------------------
      // MODE D'ACQUISITION
      // ------------------------------------------------------
      acquisition: {
        supply_mode: "standalone",

        package_id: null,

        can_be_integrated_in_line_package: true,

        quantity_reference: 1
      },

      // ------------------------------------------------------
      // PRIX DE RÉFÉRENCE
      // ------------------------------------------------------
      price_reference: {
        amount_min: 45000,
        amount_max: 48500,

        currency: "USD",

        basis: "public_listing",

        incoterm: null,

        status: "documented",

        source_type: "professional_marketplace",

        source_name: "Made-in-China",

        source_url:
          "https://www.made-in-china.com/price/prodetail_Cooking-Baking-Equipment_rflRwCoTXvcY.html",

        observed_at: "2026-09-12",

        included_items: [
          "mixer"
        ],

        excluded_items: [
          "international_freight",
          "marine_insurance",
          "customs",
          "local_transport",
          "installation",
          "commissioning"
        ],

        confidence_score: 85,

        note:
          "Prix public documenté. L'incoterm exact et le périmètre commercial doivent être confirmés par offre fournisseur."
      },

      // ------------------------------------------------------
      // CONDITIONS COMMERCIALES P2I
      // ------------------------------------------------------
      p2i_commercial_conditions: {
        status: "not_negotiated",

        negotiated_price: null,

        negotiated_currency: null,

        negotiated_discount_percent: null,

        validity_until: null,

        official_supplier_quote: false
      },

      // ------------------------------------------------------
      // ÉVALUATION P2I
      // ------------------------------------------------------
      scores: {
        supplier_score: {
          value: 90,
          status: "provisional"
        },

        technical_score: {
          value: 88,
          status: "provisional"
        },

        price_confidence_score: {
          value: 85,
          status: "documented"
        }
      },

      // ------------------------------------------------------
      // PREUVES
      // ------------------------------------------------------
      evidence: {
        manufacturer_confirmed: true,

        model_confirmed: true,

        biscuit_application_confirmed: true,

        public_price_available: true,

        hourly_capacity_directly_verified: false,

        last_reviewed_at: "2026-09-12",

        validation_status: "documented"
      }
    },


    // ========================================================
    // 2. CORÉE DU SUD — ASAN ENG
    // ========================================================
    {
      model_id: "KR_ASAN_ADM_500",

      machine_key: "melangeur_biscuiterie",

      name: "ADM Series — configuration 500 kg",

      manufacturer: "ASAN ENG",

      supplier_id: "SUP_ASAN_ENG_KR",

      supplier: "ASAN ENG",

      supplier_country: "South Korea",

      origin: "korean",

      condition: "new",

      p2i_status: "candidate",

      supplier_status: "identified",

      applications: [
        "biscuit_dough",
        "cream"
      ],

      role:
        "Mélange industriel homogène de pâtes à biscuits et de crèmes.",

      // ------------------------------------------------------
      // CAPACITÉ
      // ------------------------------------------------------
      capacity: {
        line_target_kg_h: 500,

        configurable_batch_capacity_kg_min: 100,
        configurable_batch_capacity_kg_max: 700,

        selected_reference_batch_kg: 500,

        cycle_time_min: null,

        verified_throughput_kg_h: null,

        capacity_basis: "manufacturer_batch_capacity",

        compatibility_status: "to_confirm",

        compatibility_note:
          "ASAN confirme une série ADM configurable de 100 à 700 kg. Le temps de cycle et le débit réel correspondant à une ligne P2I de 500 kg/h doivent être obtenus auprès du fabricant."
      },

      specifications: {
        mixing_type: "industrial_dough_mixer",

        automation_level: "industrial",

        food_contact_material: "to_confirm",

        plc_control: "to_confirm",

        variable_speed: "to_confirm",

        installation_requirements: [
          "electricity",
          "industrial_floor",
          "operator_access",
          "cleaning_access"
        ]
      },

      utilities: {
        electricity: true,
        compressed_air: "to_confirm",
        water: false,
        steam: false
      },

      acquisition: {
        supply_mode: "standalone",

        package_id: null,

        can_be_integrated_in_line_package: true,

        quantity_reference: 1
      },

      // ------------------------------------------------------
      // AUCUN FAUX PRIX
      // ------------------------------------------------------
      price_reference: {
        amount_min: null,
        amount_max: null,

        currency: "USD",

        basis: null,

        incoterm: null,

        status: "rfq_required",

        source_type: "manufacturer",

        source_name: "ASAN ENG",

        source_url: "https://asaneng.net/",

        observed_at: "2026-09-12",

        included_items: [],

        excluded_items: [],

        confidence_score: 0,

        note:
          "Aucun prix public suffisamment fiable identifié. Une demande de cotation officielle est nécessaire."
      },

      p2i_commercial_conditions: {
        status: "not_negotiated",

        negotiated_price: null,

        negotiated_currency: null,

        negotiated_discount_percent: null,

        validity_until: null,

        official_supplier_quote: false
      },

      scores: {
        supplier_score: {
          value: 91,
          status: "provisional"
        },

        technical_score: {
          value: 92,
          status: "provisional"
        },

        price_confidence_score: {
          value: 0,
          status: "rfq_required"
        }
      },

      evidence: {
        manufacturer_confirmed: true,

        model_series_confirmed: true,

        biscuit_application_confirmed: true,

        public_price_available: false,

        hourly_capacity_directly_verified: false,

        last_reviewed_at: "2026-09-12",

        validation_status: "manufacturer_confirmed_price_pending"
      }
    },


    // ========================================================
    // 3. EUROPE — WP INDUSTRIAL BAKERY TECHNOLOGIES
    // ========================================================
    {
      model_id: "EU_WP_BATCH_MIXER_BISCUIT",

      machine_key: "melangeur_biscuiterie",

      name: "Industrial Biscuit Batch Mixer",

      manufacturer:
        "Werner & Pfleiderer Industrielle Backtechnik GmbH",

      supplier_id: "SUP_WP_GERMANY",

      supplier: "WP Industrial Bakery Technologies",

      supplier_country: "Germany",

      origin: "europe",

      condition: "new",

      p2i_status: "candidate",

      supplier_status: "identified",

      applications: [
        "soft_biscuit",
        "hard_biscuit",
        "cracker"
      ],

      role:
        "Production industrielle de pâte intégrée aux lignes de biscuits et crackers WP.",

      // ------------------------------------------------------
      // CAPACITÉ
      // ------------------------------------------------------
      capacity: {
        line_target_kg_h: 500,

        batch_capacity_kg: null,

        cycle_time_min: null,

        verified_throughput_kg_h: null,

        capacity_basis: "manufacturer_line_documentation",

        compatibility_status: "to_confirm",

        compatibility_note:
          "WP documente un batch mixer dans ses lignes de biscuits ainsi que des solutions de mélange industriel. Le dimensionnement exact pour une ligne P2I de 500 kg/h doit faire l'objet d'une proposition technique."
      },

      specifications: {
        mixing_type: "industrial_batch_mixer",

        automation_level: "industrial",

        line_integration: true,

        food_contact_material: "to_confirm",

        plc_control: "to_confirm",

        installation_requirements: [
          "electricity",
          "industrial_floor",
          "line_interface",
          "operator_access",
          "cleaning_access"
        ]
      },

      utilities: {
        electricity: true,
        compressed_air: "to_confirm",
        water: "to_confirm",
        steam: false
      },

      acquisition: {
        supply_mode: "integrated_or_standalone",

        package_id: null,

        can_be_integrated_in_line_package: true,

        quantity_reference: 1
      },

      price_reference: {
        amount_min: null,
        amount_max: null,

        currency: "EUR",

        basis: null,

        incoterm: null,

        status: "rfq_required",

        source_type: "manufacturer",

        source_name: "WP Industrial Bakery Technologies",

        source_url:
          "https://www.wpib.de/en/world-of-products/dry-baked-goods/hard-biscuit-lines.html",

        observed_at: "2026-09-12",

        included_items: [],

        excluded_items: [],

        confidence_score: 0,

        note:
          "Aucun prix public retenu. Le fabricant doit dimensionner la solution et établir une offre adaptée au débit P2I."
      },

      p2i_commercial_conditions: {
        status: "not_negotiated",

        negotiated_price: null,

        negotiated_currency: null,

        negotiated_discount_percent: null,

        validity_until: null,

        official_supplier_quote: false
      },

      scores: {
        supplier_score: {
          value: 95,
          status: "provisional"
        },

        technical_score: {
          value: 94,
          status: "provisional"
        },

        price_confidence_score: {
          value: 0,
          status: "rfq_required"
        }
      },

      evidence: {
        manufacturer_confirmed: true,

        biscuit_line_mixer_confirmed: true,

        exact_reference_confirmed: false,

        public_price_available: false,

        hourly_capacity_directly_verified: false,

        last_reviewed_at: "2026-09-12",

        validation_status: "manufacturer_confirmed_configuration_pending"
      }
    }

  ]
};

// ============================================================
// BISCUITERIE INDUSTRIELLE
// ALIMENTATEUR DE PÂTE
// ============================================================

window.P2I_MODELS_DB_V2["alimentateur_pate_biscuiterie"] = {

  machine_key: "alimentateur_pate_biscuiterie",

  machine_name: "Alimentateur / convoyeur de pâte",

  up_id: "biscuiterie",

  target: {
    line_capacity_kg_h: 500,

    applications: [
      "biscuits_mous",
      "biscuits_durs",
      "crackers"
    ]
  },

  models: [

    // ========================================================
    // 1. CHINE — SHANDONG PENGXIANG
    // ========================================================
    {
      model_id: "CN_PENGXIANG_PXDFC",

      machine_key: "alimentateur_pate_biscuiterie",

      name: "PXDFC Dough Feeding Conveyor",

      manufacturer:
        "Shandong Pengxiang Machinery Technology Co., Ltd.",

      supplier_id: "SUP_PENGXIANG_CN",

      supplier:
        "Shandong Pengxiang Machinery Technology Co., Ltd.",

      supplier_country: "China",

      origin: "chinese",

      condition: "new",

      p2i_status: "candidate",

      supplier_status: "identified",

      applications: [
        "biscuit",
        "cookie",
        "cake"
      ],

      role:
        "Transport de portions de pâte vers la trémie de la machine de formage.",

      capacity: {
        line_target_kg_h: 500,

        claimed_throughput_kg_h_min: null,
        claimed_throughput_kg_h_max: null,

        verified_throughput_kg_h: null,

        capacity_basis: "not_published",

        compatibility_status: "to_confirm",

        compatibility_note:
          "Le fabricant documente la fonction d'alimentation de pâte mais ne publie pas de débit en kg/h. La compatibilité avec une ligne P2I de 500 kg/h doit être confirmée."
      },

      specifications: {
        equipment_type: "dough_feeding_conveyor",

        model: "PXDFC",

        belt_material: "food-grade PU",

        construction_material: "stainless steel",

        power_kw: 1.5,

        voltage: [
          "220V",
          "380V"
        ],

        dimensions: "customized",

        automatic_operation: true,

        food_contact_standard:
          "food-grade belt declared by supplier",

        downstream_function:
          "feeding forming-machine hopper"
      },

      utilities: {
        electricity: true,
        compressed_air: false,
        water: false,
        steam: false
      },

      acquisition: {
        supply_mode: "standalone_or_integrated",

        package_id: null,

        can_be_integrated_in_line_package: true,

        likely_package:
          "dough_preparation_and_forming_section",

        quantity_reference: 1
      },

      price_reference: {
        amount_min: 1500,
        amount_max: 3000,

        currency: "USD",

        basis: "public_listing",

        incoterm: null,

        status: "documented",

        source_type: "professional_marketplace",

        source_name: "Made-in-China",

        source_url:
          "https://pengxiang-machinery.en.made-in-china.com/product/XmEUpvilvbrP/China-Automated-Biscuit-Production-Line-with-Dough-Feeding-Conveyor.html",

        observed_at: "2026-09-12",

        quantity_basis: 1,

        included_items: [
          "dough feeding conveyor"
        ],

        excluded_items: [
          "international_freight",
          "marine_insurance",
          "customs",
          "local_transport",
          "installation",
          "commissioning",
          "forming_machine"
        ],

        confidence_score: 88,

        note:
          "Prix public documenté. Le débit réel de pâte et la configuration exacte pour une ligne de 500 kg/h doivent être confirmés."
      },

      p2i_commercial_conditions: {
        status: "not_negotiated",

        negotiated_price: null,
        negotiated_currency: null,
        negotiated_discount_percent: null,

        validity_until: null,

        official_supplier_quote: false
      },

      scores: {
        supplier_score: {
          value: null,

          status: "pending_evaluation",

          note:
            "Fabricant réel identifié, mais Score Fournisseur P2I complet non encore établi."
        },

        technical_score: {
          value: null,

          status: "pending_capacity_confirmation",

          note:
            "Le débit de pâte doit être confirmé avant attribution d'un Score Technique définitif."
        },

        price_confidence_score: {
          value: 88,

          status: "documented"
        }
      },

      evidence: {
        manufacturer_confirmed: true,

        model_confirmed: true,

        biscuit_application_confirmed: true,

        public_price_available: true,

        hourly_capacity_directly_verified: false,

        source_url:
          "https://pengxiang-machinery.en.made-in-china.com/product/XmEUpvilvbrP/China-Automated-Biscuit-Production-Line-with-Dough-Feeding-Conveyor.html",

        last_reviewed_at: "2026-09-12",

        validation_status:
          "documented_capacity_pending"
      }
    },


    // ========================================================
    // 2. EUROPE — WP INDUSTRIAL BAKERY TECHNOLOGIES
    // ========================================================
    {
      model_id: "EU_WP_CONTINUOUS_DOUGH_FEED",

      machine_key: "alimentateur_pate_biscuiterie",

      name: "Continuous Dough Feed System",

      manufacturer:
        "Werner & Pfleiderer Industrielle Backtechnik GmbH",

      supplier_id: "SUP_WP_GERMANY",

      supplier:
        "WP Industrial Bakery Technologies",

      supplier_country: "Germany",

      origin: "europe",

      condition: "new",

      p2i_status: "candidate",

      supplier_status: "identified",

      applications: [
        "hard_biscuit",
        "cracker"
      ],

      role:
        "Alimentation continue de pâte entre la préparation de pâte et la section de formage.",

      capacity: {
        line_target_kg_h: 500,

        claimed_throughput_kg_h_min: null,
        claimed_throughput_kg_h_max: null,

        verified_throughput_kg_h: null,

        capacity_basis:
          "manufacturer_line_documentation",

        compatibility_status:
          "to_confirm",

        compatibility_note:
          "WP documente le dough feed comme module de ses lignes hard biscuit/cracker, mais aucun débit ni modèle individuel n'est publié dans la source retenue."
      },

      specifications: {
        equipment_type:
          "continuous_dough_feed",

        automation_level:
          "industrial",

        continuous_feed:
          true,

        line_integration:
          true,

        exact_model_reference:
          null,

        food_contact_material:
          "to_confirm"
      },

      utilities: {
        electricity: true,
        compressed_air: "to_confirm",
        water: false,
        steam: false
      },

      acquisition: {
        supply_mode:
          "integrated_package",

        package_id:
          null,

        can_be_integrated_in_line_package:
          true,

        likely_package:
          "WP_dough_preparation_and_forming_section",

        quantity_reference:
          1,

        standalone_purchase_confirmed:
          false
      },

      price_reference: {
        amount_min:
          null,

        amount_max:
          null,

        currency:
          "EUR",

        basis:
          null,

        incoterm:
          null,

        status:
          "rfq_required",

        source_type:
          "manufacturer",

        source_name:
          "WP Industrial Bakery Technologies",

        source_url:
          "https://www.wpib.de/en/world-of-products/dry-baked-goods/hard-biscuit-lines.html",

        observed_at:
          "2026-09-12",

        confidence_score:
          0,

        note:
          "Prix non publié. Le dough feed semble appartenir à une solution de ligne intégrée ; le périmètre commercial doit être défini par WP."
      },

      p2i_commercial_conditions: {
        status:
          "not_negotiated",

        negotiated_price:
          null,

        negotiated_currency:
          null,

        negotiated_discount_percent:
          null,

        validity_until:
          null,

        official_supplier_quote:
          false
      },

      scores: {
        supplier_score: {
          value:
            95,

          status:
            "provisional"
        },

        technical_score: {
          value:
            null,

          status:
            "configuration_pending",

          note:
            "La fonction est pertinente mais le modèle et le dimensionnement 500 kg/h doivent être définis par WP."
        },

        price_confidence_score: {
          value:
            0,

          status:
            "rfq_required"
        }
      },

      evidence: {
        manufacturer_confirmed:
          true,

        function_confirmed:
          true,

        exact_model_confirmed:
          false,

        biscuit_application_confirmed:
          true,

        public_price_available:
          false,

        hourly_capacity_directly_verified:
          false,

        source_url:
          "https://www.wpib.de/en/world-of-products/dry-baked-goods/hard-biscuit-lines.html",

        last_reviewed_at:
          "2026-09-12",

        validation_status:
          "manufacturer_confirmed_exact_configuration_pending"
      }
    }

  ],

  regional_coverage: {

    china: {
      status:
        "documented",

      reference_model:
        "CN_PENGXIANG_PXDFC"
    },

    korea: {
      status:
        "research_pending",

      reference_model:
        null,

      note:
        "Aucun modèle coréen exact suffisamment documenté n'est encore retenu par P2I pour cette fonction."
    },

    europe: {
      status:
        "manufacturer_solution_confirmed",

      reference_model:
        "EU_WP_CONTINUOUS_DOUGH_FEED"
    }

  }

};
// ============================================================
// BISCUITERIE INDUSTRIELLE
// CONVOYEUR D'ALIMENTATION DU FOUR
// ============================================================

window.P2I_MODELS_DB_V2["convoyeur_alimentation_four_biscuiterie"] = {

  machine_key: "convoyeur_alimentation_four_biscuiterie",

  machine_name: "Convoyeur d'alimentation du four",

  up_id: "biscuiterie",

  target: {
    line_capacity_kg_h: 500,

    applications: [
      "biscuits_mous",
      "biscuits_durs",
      "crackers"
    ]
  },

  commercial_positioning: {

    technical_function:
      "Transfert synchronisé des biscuits formés vers le convoyeur ou la bande du four tunnel.",

    procurement_note:
      "Cette fonction est souvent intégrée commercialement à la section de formage et/ou au système d'entrée du four. P2I doit vérifier le périmètre exact de l'offre fournisseur afin d'éviter tout double comptage CAPEX."
  },

  models: [

    // ========================================================
    // 1. CHINE — SINOBAKE
    // ========================================================
    {
      model_id: "CN_SINOBAKE_ENTER_OVEN_SYSTEM",

      machine_key:
        "convoyeur_alimentation_four_biscuiterie",

      name:
        "Enter Oven Machine / Biscuit Feeding System",

      manufacturer:
        "SINOBAKE GROUP LIMITED",

      supplier_id:
        "SUP_SINOBAKE_CN",

      supplier:
        "SINOBAKE GROUP LIMITED",

      supplier_country:
        "China",

      origin:
        "chinese",

      condition:
        "new",

      p2i_status:
        "candidate",

      supplier_status:
        "identified",

      applications: [
        "soft_biscuit",
        "hard_biscuit",
        "cracker"
      ],

      role:
        "Transfert des biscuits formés vers la bande du four tunnel avec synchronisation de la ligne.",

      capacity: {

        line_target_kg_h:
          500,

        claimed_throughput_kg_h_min:
          150,

        claimed_throughput_kg_h_max:
          5000,

        verified_throughput_kg_h:
          null,

        capacity_basis:
          "complete_line_capacity",

        compatibility_status:
          "to_confirm",

        compatibility_note:
          "SINOBAKE annonce pour ses lignes complètes une capacité pouvant aller d'environ 150 à 5000 kg/h selon le type de biscuit et la longueur du four. Cette plage concerne la ligne complète et ne constitue pas un débit certifié du convoyeur d'entrée pris isolément."
      },

      specifications: {

        equipment_type:
          "oven_entry_feeding_system",

        line_components_context: [
          "transition_conveyor",
          "oven_belt_drive",
          "enter_oven_machine",
          "tunnel_oven"
        ],

        synchronization_required:
          true,

        working_width_mm:
          null,

        conveyor_speed:
          "to_confirm",

        belt_type:
          "to_confirm",

        food_contact_material:
          "to_confirm",

        automation_level:
          "industrial_line"
      },

      utilities: {
        electricity:
          true,

        compressed_air:
          "to_confirm",

        water:
          false,

        steam:
          false
      },

      acquisition: {

        supply_mode:
          "integrated_package",

        package_id:
          "PKG_BISCUIT_BAKING_ENTRY_CN_SINOBAKE",

        can_be_integrated_in_line_package:
          true,

        likely_package:
          "forming_to_oven_section",

        quantity_reference:
          1,

        standalone_purchase_confirmed:
          false,

        capex_double_counting_risk:
          true
      },

      price_reference: {

        amount_min:
          null,

        amount_max:
          null,

        currency:
          "USD",

        basis:
          null,

        incoterm:
          null,

        status:
          "rfq_required",

        source_type:
          "manufacturer",

        source_name:
          "SINOBAKE GROUP LIMITED",

        source_url:
          "https://www.sinobake.net/SINOBAKE-High-Capacity-Hard-And-Soft-Biscuit-Production-Line-pd528605398.html",

        observed_at:
          "2026-09-12",

        included_items:
          [],

        excluded_items:
          [],

        confidence_score:
          0,

        note:
          "Aucun prix public fiable n'est disponible pour le convoyeur ou système d'entrée de four pris isolément. Le fournisseur doit préciser s'il est inclus dans le lot formage/four."
      },

      p2i_commercial_conditions: {

        status:
          "not_negotiated",

        negotiated_price:
          null,

        negotiated_currency:
          null,

        negotiated_discount_percent:
          null,

        validity_until:
          null,

        official_supplier_quote:
          false
      },

      scores: {

        supplier_score: {

          value:
            null,

          status:
            "pending_evaluation",

          note:
            "Le fabricant et ses lignes biscuits sont identifiés, mais le Score Fournisseur P2I complet n'est pas encore établi."
        },

        technical_score: {

          value:
            null,

          status:
            "configuration_pending",

          note:
            "Le convoyeur d'entrée doit être dimensionné avec la largeur de ligne, le type de four, la vitesse de bande et le système de formage."
        },

        price_confidence_score: {

          value:
            0,

          status:
            "rfq_required"
        }
      },

      evidence: {

        manufacturer_confirmed:
          true,

        function_confirmed:
          true,

        biscuit_application_confirmed:
          true,

        exact_standalone_model_confirmed:
          false,

        public_price_available:
          false,

        line_capacity_documented:
          true,

        standalone_capacity_verified:
          false,

        source_url:
          "https://www.sinobake.net/SINOBAKE-High-Capacity-Hard-And-Soft-Biscuit-Production-Line-pd528605398.html",

        last_reviewed_at:
          "2026-09-12",

        validation_status:
          "manufacturer_line_component_confirmed"
      }
    },


    // ========================================================
    // 2. EUROPE — WP INDUSTRIAL BAKERY TECHNOLOGIES
    // ========================================================
    {
      model_id:
        "EU_WP_OVEN_FEED_INTEGRATED",

      machine_key:
        "convoyeur_alimentation_four_biscuiterie",

      name:
        "Integrated Biscuit Oven Feed System",

      manufacturer:
        "Werner & Pfleiderer Industrielle Backtechnik GmbH",

      supplier_id:
        "SUP_WP_GERMANY",

      supplier:
        "WP Industrial Bakery Technologies",

      supplier_country:
        "Germany",

      origin:
        "europe",

      condition:
        "new",

      p2i_status:
        "candidate",

      supplier_status:
        "identified",

      applications: [
        "hard_biscuit",
        "cracker"
      ],

      role:
        "Transfert synchronisé des produits formés ou découpés vers le tunnel oven dans une ligne WP intégrée.",

      capacity: {

        line_target_kg_h:
          500,

        claimed_throughput_kg_h_min:
          null,

        claimed_throughput_kg_h_max:
          null,

        verified_throughput_kg_h:
          null,

        capacity_basis:
          "manufacturer_integrated_line",

        compatibility_status:
          "to_confirm",

        compatibility_note:
          "WP documente le transfert des produits de la section de formage vers le tunnel oven dans son architecture de ligne. Aucun modèle autonome ni débit propre au convoyeur d'entrée n'est publié dans la source retenue."
      },

      specifications: {

        equipment_type:
          "integrated_oven_feed",

        line_integration:
          true,

        exact_model_reference:
          null,

        working_width_mm:
          null,

        conveyor_speed:
          "to_confirm",

        oven_interface:
          "WP_SNK_or_configured_oven",

        synchronization_required:
          true,

        food_contact_material:
          "to_confirm"
      },

      utilities: {

        electricity:
          true,

        compressed_air:
          "to_confirm",

        water:
          false,

        steam:
          false
      },

      acquisition: {

        supply_mode:
          "integrated_package",

        package_id:
          "PKG_BISCUIT_BAKING_ENTRY_EU_WP",

        can_be_integrated_in_line_package:
          true,

        likely_package:
          "forming_and_baking_section",

        quantity_reference:
          1,

        standalone_purchase_confirmed:
          false,

        capex_double_counting_risk:
          true
      },

      price_reference: {

        amount_min:
          null,

        amount_max:
          null,

        currency:
          "EUR",

        basis:
          null,

        incoterm:
          null,

        status:
          "rfq_required",

        source_type:
          "manufacturer",

        source_name:
          "WP Industrial Bakery Technologies",

        source_url:
          "https://www.wpib.de/en/world-of-products/dry-baked-goods/hard-biscuit-lines.html",

        observed_at:
          "2026-09-12",

        confidence_score:
          0,

        note:
          "Pas de prix public pour cette fonction prise isolément. Le convoyage d'entrée doit être chiffré dans le périmètre réel de la ligne proposée par WP."
      },

      p2i_commercial_conditions: {

        status:
          "not_negotiated",

        negotiated_price:
          null,

        negotiated_currency:
          null,

        negotiated_discount_percent:
          null,

        validity_until:
          null,

        official_supplier_quote:
          false
      },

      scores: {

        supplier_score: {

          value:
            95,

          status:
            "provisional"
        },

        technical_score: {

          value:
            null,

          status:
            "configuration_pending",

          note:
            "L'intégration industrielle est documentée, mais le dimensionnement exact pour la ligne P2I de 500 kg/h doit être défini avec WP."
        },

        price_confidence_score: {

          value:
            0,

          status:
            "rfq_required"
        }
      },

      evidence: {

        manufacturer_confirmed:
          true,

        function_confirmed:
          true,

        biscuit_application_confirmed:
          true,

        exact_standalone_model_confirmed:
          false,

        public_price_available:
          false,

        hourly_capacity_directly_verified:
          false,

        source_url:
          "https://www.wpib.de/en/world-of-products/dry-baked-goods/hard-biscuit-lines.html",

        last_reviewed_at:
          "2026-09-12",

        validation_status:
          "manufacturer_integrated_function_confirmed"
      }
    }

  ],


  // ========================================================
  // COUVERTURE RÉGIONALE
  // ========================================================

  regional_coverage: {

    china: {

      status:
        "manufacturer_line_component_confirmed",

      reference_model:
        "CN_SINOBAKE_ENTER_OVEN_SYSTEM"
    },

    korea: {

      status:
        "research_pending",

      reference_model:
        null,

      note:
        "Des fabricants coréens de lignes biscuit/pâtisserie et de convoyage ont été identifiés, mais aucune référence exacte de convoyeur d'alimentation de four suffisamment documentée n'est encore retenue par P2I."
    },

    europe: {

      status:
        "manufacturer_integrated_solution_confirmed",

      reference_model:
        "EU_WP_OVEN_FEED_INTEGRATED"
    }
  },


  // ========================================================
  // RÈGLE CAPEX P2I
  // ========================================================

  capex_rule: {

    standalone_cost_allowed:
      false,

    package_cost_preferred:
      true,

    avoid_double_counting:
      true,

    note:
      "Ne pas additionner automatiquement un coût de convoyeur d'alimentation du four si ce composant est déjà compris dans le prix du lot de formage, du four tunnel ou de la ligne intégrée."
  }

};
