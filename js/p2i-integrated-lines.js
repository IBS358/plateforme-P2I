
/* =====================================================
   P2I — CATALOGUE DES LIGNES INTÉGRÉES
   Version 1.0 — Structure pilote

   Ce fichier définit la structure des lignes intégrées.
   Aucune offre commerciale n'est inventée.
   Aucun accès Supabase ni localStorage.
   ===================================================== */

(function () {
  "use strict";

  const lignes = [];

  function ajouterLigne(ligne) {
    if (!ligne || typeof ligne !== "object") {
      throw new Error("Ligne intégrée invalide.");
    }

    if (!ligne.line_id || !ligne.up_id ||
        !ligne.configuration_id || !ligne.model) {
      throw new Error(
        "Identifiants ou modèle de ligne manquants."
      );
    }

    if (!Array.isArray(ligne.fonctions_couvertes)) {
      throw new Error(
        "Liste des fonctions couvertes manquante."
      );
    }

    if (lignes.some(item => item.line_id === ligne.line_id)) {
      throw new Error(
        "Identifiant de ligne déjà utilisé."
      );
    }

    const nouvelleLigne = {
      line_id: ligne.line_id,
      up_id: ligne.up_id,
      configuration_id: ligne.configuration_id,

      model: ligne.model,
      supplier: ligne.supplier || null,
      origin: ligne.origin || null,

      capacite_nominale_kg_h:
        ligne.capacite_nominale_kg_h ?? null,

      capacite_documentee:
        ligne.capacite_documentee === true,

      fonctions_couvertes:
        ligne.fonctions_couvertes.map(f => ({
          machine_key: f.machine_key,
          couverture_documentee:
            f.couverture_documentee === true
        })),

      prix_catalogue_usd:
        ligne.prix_catalogue_usd ?? null,

      prix_statut:
        ligne.prix_statut || "a_confirmer",

      statut_verification:
        ligne.statut_verification || "a_verifier"
    };

    lignes.push(nouvelleLigne);

    return nouvelleLigne;
  }

  function obtenirLignes(upId, configurationId) {
    return lignes.filter(ligne =>
      ligne.up_id === upId &&
      ligne.configuration_id === configurationId
    );
  }

  window.P2I_INTEGRATED_LINES = Object.freeze({
    version: "1.0.0",
    ajouterLigne,
    obtenirLignes
  });
})();
