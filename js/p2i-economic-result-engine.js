
/* ==============================================
   P2I — MOTEUR DE RAPPROCHEMENT ÉCONOMIQUE
   Production, ventes, stocks et coûts
   Version initiale — simulations indicatives
   ============================================== */

(function () {
  "use strict";

  function nombre(valeur, nom) {
    if (
      typeof valeur !== "number" ||
      !Number.isFinite(valeur) ||
      valeur < 0
    ) {
      throw new Error(
        "Valeur économique invalide : " + nom
      );
    }
    return valeur;
  }

  function calculer(donnees) {
    if (!donnees || typeof donnees !== "object") {
      throw new Error("Données économiques manquantes.");
    }

    const type = donnees.type_activite;

    if (![
      "fabrication",
      "assemblage",
      "services",
      "mixte"
    ].includes(type)) {
      throw new Error("Type d'activité non reconnu.");
    }

    const production = nombre(
      donnees.quantite_produite,
      "quantite_produite"
    );

    const vendue = nombre(
      donnees.quantite_vendue,
      "quantite_vendue"
    );

    if (vendue > production) {
      throw new Error(
        "Les ventes dépassent la production disponible."
      );
    }

    const nonVendue = production - vendue;

    const pertes = nombre(
      donnees.quantite_perdue ?? 0,
      "quantite_perdue"
    );

    if (pertes > nonVendue) {
      throw new Error(
        "Les pertes dépassent les quantités non vendues."
      );
    }

    const stock = nonVendue - pertes;

    const coutVariable = nombre(
      donnees.cout_variable_unitaire,
      "cout_variable_unitaire"
    );

    const chargesFixes = nombre(
      donnees.charges_fixes_industrielles,
      "charges_fixes_industrielles"
    );

    const ca = nombre(
      donnees.chiffre_affaires_usd,
      "chiffre_affaires_usd"
    );

    const coutVariableTotal =
      production * coutVariable;

    const coutProduction =
      coutVariableTotal + chargesFixes;

    const coutUnitaire =
      production > 0
        ? coutProduction / production
        : 0;

    // Allocation simplifiée proportionnelle.
    // Hypothèse : coûts homogènes par unité produite.
    const coutProduitsVendus =
      vendue * coutUnitaire;

    const valeurStock =
      stock * coutUnitaire;

    const coutPertes =
      pertes * coutUnitaire;

    const margeIndustrielle =
      ca - coutProduitsVendus;

    return {
      type_activite: type,

      quantite_produite: production,
      quantite_vendue: vendue,
      quantite_non_vendue: nonVendue,
      quantite_perdue: pertes,
      quantite_stockee: stock,

      cout_variable_total_usd: coutVariableTotal,
      charges_fixes_industrielles_usd: chargesFixes,
      cout_production_total_usd: coutProduction,
      cout_production_unitaire_usd: coutUnitaire,

      cout_produits_vendus_usd: coutProduitsVendus,
      valeur_stock_indicative_usd: valeurStock,
      cout_pertes_usd: coutPertes,

      chiffre_affaires_usd: ca,
      marge_industrielle_avant_pertes_usd:
        margeIndustrielle,
      resultat_industriel_apres_pertes_usd:
        margeIndustrielle - coutPertes,

      statut: "simulation_economique_indicative",

      avertissement:
        "Valorisation simplifiée au coût industriel moyen. " +
        "Stocks, pertes, amortissements, frais commerciaux, " +
        "financement et fiscalité restent à confirmer."
    };
  }

  window.P2I_ECONOMIC_RESULT_ENGINE =
    Object.freeze({
      calculer
    });

})();
