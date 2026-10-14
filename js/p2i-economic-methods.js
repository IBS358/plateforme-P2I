
/* P2I — Méthodes technico-économiques communes
   Référentiel pilote v1
   Aucun calcul financier exécuté ici.
*/

window.P2I_ECONOMIC_METHODS = {
  fabrication: {
    nom: "Fabrication industrielle",
    unite: "kg, litre, pièce ou tonne",
    ressources: [
      "matieres_premieres",
      "emballages",
      "energie",
      "main_oeuvre",
      "equipements"
    ],
    controles: [
      "bilan_matiere",
      "capacite",
      "rendement",
      "volume_vendu"
    ]
  },

  assemblage: {
    nom: "Assemblage industriel",
    unite: "produit ou lot",
    ressources: [
      "composants",
      "main_oeuvre",
      "energie",
      "equipements"
    ],
    controles: [
      "nomenclature",
      "temps_cycle",
      "capacite",
      "qualite"
    ]
  },

  services: {
    nom: "Services industriels",
    unite: "heure, intervention ou contrat",
    ressources: [
      "personnel",
      "consommables",
      "deplacements",
      "equipements"
    ],
    controles: [
      "heures_disponibles",
      "heures_facturables",
      "taux_utilisation",
      "prestations_vendues"
    ]
  },

  mixte: {
    nom: "Activité mixte",
    unite: "produit et prestation",
    ressources: [
      "fabrication",
      "installation",
      "maintenance"
    ],
    controles: [
      "cout_produit",
      "cout_prestation",
      "revenus_distincts"
    ]
  }
};
