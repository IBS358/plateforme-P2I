// ======================================================
// P2I - CONFIGURATION DES MODÈLES DE RÉFÉRENCE
// ======================================================
//
// Ce fichier indique, pour chaque UP, quel modèle commercial
// constitue la référence initiale P2I pour chaque besoin machine.
//
// IMPORTANT :
// - machine_key = besoin technique défini dans machines-data.js
// - valeur = id exact du modèle défini dans MODELS_DB
// ======================================================

const P2I_REFERENCE_CONFIG = {

  // ====================================================
  // BISCUITERIE INDUSTRIELLE
  // ====================================================
  biscuiterie: {

    melangeur_biscuiterie: "melangeur_kr_std",

    lamineuse_biscuiterie: "lamineuse_kr_std",

    faconneuse_rotative: "rotative_kr_std",

    four_biscuiterie: "four_biscuit_kr_std",

    refroidisseur_biscuiterie: "refroidisseur_kr_std",

    enrobeuse_saupoudreuse: "enrobeuse_kr_std",

    emballeuse_horizontale: "emballeuse_horiz_kr_std"

  }

};


// ======================================================
// EXPOSITION GLOBALE
// ======================================================

window.P2I_REFERENCE_CONFIG = P2I_REFERENCE_CONFIG;

console.log(
  "✅ P2I_REFERENCE_CONFIG chargé :",
  Object.keys(P2I_REFERENCE_CONFIG)
);
