
/* ==============================================
   P2I — HYPOTHÈSES COMMERCIALES
   Référentiels par UP et configuration
   ============================================== */

(function () {
  "use strict";

  const REFERENCES = {
    biscuiterie: {
      crackers: {
        up_id: "biscuiterie",
        configuration_id: "crackers",
        type_activite: "fabrication",

        lignes: [
          {
            id: "vente_crackers",
            designation: "Vente de crackers",
            unite: "kg",

            capacite_annuelle: 760000,
            taux_commercialisation: 0.70,

            prix_unitaire: 1500,
            devise: "XOF",

            statut: "hypothese_p2i_a_valider"
          }
        ]
      }
    }
  };

  function obtenirReference(upId, configurationId) {
    const up = REFERENCES[upId];

    if (!up || !up[configurationId]) {
      return null;
    }

    // Copie indépendante pour éviter toute modification
    // accidentelle du référentiel P2I.
    return JSON.parse(JSON.stringify(up[configurationId]));
  }

  function calculerReference(upId, configurationId) {
    const reference = obtenirReference(upId, configurationId);

    if (!reference) {
      throw new Error(
        "Référence commerciale P2I introuvable."
      );
    }

    if (!window.P2I_COMMERCIAL_ENGINE) {
      throw new Error(
        "Moteur commercial P2I indisponible."
      );
    }

    return window.P2I_COMMERCIAL_ENGINE.calculerProjet(
      reference
    );
  }

  window.P2I_HYPOTHESES_COMMERCIALES = Object.freeze({
    obtenirReference,
    calculerReference
  });

})();
