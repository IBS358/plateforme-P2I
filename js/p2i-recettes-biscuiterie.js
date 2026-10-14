
/* P2I — Référentiel des recettes Biscuiterie
   Version pilote : Crackers
   Quantités et prix provisoires, non vérifiés.
*/

window.P2I_RECETTES_BISCUITERIE = {
  crackers: {
    nom: "Crackers nature",
    methode_economique: "fabrication",
    unite_produit: "kg",

    ingredients: [
      ["Farine de blé", 0.88, 0.42],
      ["Matières grasses", 0.11, 1.30],
      ["Sucre", 0.04, 0.65],
      ["Sel", 0.012, 0.20],
      ["Agents levants", 0.008, 2.00],
      ["Eau de fabrication", 0.10, 0.002]
    ],

    statut: "hypothese_p2i",
    validation_technique: "en_attente",
    validation_prix: "en_attente"
  }
};
