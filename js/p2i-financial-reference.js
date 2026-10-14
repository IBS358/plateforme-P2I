
/*
 * P2I — Référentiel financier commun v0.4.0
 *
 * Règles de calcul et d'affectation des charges.
 * Aucun taux sectoriel n'est inventé.
 * Les hypothèses non documentées restent à renseigner.
 *
 * Ce référentiel ne modifie pas les calculs existants.
 */

(function (root) {
  "use strict";

  const METHODES = Object.freeze([
    "pourcentage_ca",
    "pourcentage_base",
    "quantite_tarif",
    "effectif_salaire",
    "montant_periodique",
    "amortissement_lineaire",
    "interets_simples",
    "montant_documente"
  ]);

  const TYPES_ACTIVITE = Object.freeze([
    "fabrication",
    "assemblage",
    "services",
    "mixte"
  ]);

  const AFFECTATIONS = Object.freeze([
    "cout_ventes",
    "exploitation",
    "dotations",
    "financier",
    "fiscal"
  ]);

  const REGLES = Object.freeze({
    marketing: {
      affectation: "exploitation",
      methodes: ["pourcentage_ca", "montant_documente"],
      statut_initial: "a_renseigner"
    },

    prospection: {
      affectation: "exploitation",
      methodes: ["pourcentage_ca", "montant_documente"],
      statut_initial: "a_renseigner"
    },

    commissions: {
      affectation: "exploitation",
      methodes: ["pourcentage_ca", "montant_documente"],
      statut_initial: "a_renseigner"
    },

    distribution: {
      affectation: "exploitation",
      methodes: ["quantite_tarif", "montant_documente"],
      statut_initial: "a_renseigner"
    },

    loyers: {
      affectation: "exploitation",
      methodes: ["montant_periodique", "montant_documente"],
      statut_initial: "a_renseigner"
    },

    assurances: {
      affectation: "exploitation",
      methodes: ["montant_periodique", "montant_documente"],
      statut_initial: "a_renseigner"
    },

    telecom_informatique: {
      affectation: "exploitation",
      methodes: ["montant_periodique", "montant_documente"],
      statut_initial: "a_renseigner"
    },

    honoraires: {
      affectation: "exploitation",
      methodes: ["montant_periodique", "montant_documente"],
      statut_initial: "a_renseigner"
    },

    administration: {
      affectation: "exploitation",
      methodes: ["montant_periodique", "montant_documente"],
      statut_initial: "a_renseigner"
    },

    personnel_administratif_commercial: {
      affectation: "exploitation",
      methodes: ["effectif_salaire", "montant_documente"],
      statut_initial: "a_renseigner"
    },

    taxes_exploitation: {
      affectation: "exploitation",
      methodes: ["pourcentage_base", "montant_documente"],
      statut_initial: "a_renseigner"
    },

    autres_exploitation: {
      affectation: "exploitation",
      methodes: ["montant_documente"],
      statut_initial: "a_renseigner"
    },

    amortissements: {
      affectation: "dotations",
      methodes: ["amortissement_lineaire", "montant_documente"],
      statut_initial: "a_renseigner"
    },

    depreciations_provisions: {
      affectation: "dotations",
      methodes: ["montant_documente"],
      statut_initial: "a_renseigner"
    },

    produits_financiers: {
      affectation: "financier",
      methodes: ["montant_documente"],
      statut_initial: "a_renseigner"
    },

    interets_emprunts: {
      affectation: "financier",
      methodes: ["interets_simples", "montant_documente"],
      statut_initial: "a_renseigner"
    },

    autres_charges_financieres: {
      affectation: "financier",
      methodes: ["montant_documente"],
      statut_initial: "a_renseigner"
    },

    impot_resultat: {
      affectation: "fiscal",
      methodes: ["montant_documente"],
      statut_initial: "a_renseigner"
    }
  });

  function verifierRegle(nom, methode) {
    const regle = REGLES[nom];

    if (!regle) {
      throw new Error("Poste financier P2I inconnu : " + nom);
    }

    if (!METHODES.includes(methode)) {
      throw new Error("Méthode financière inconnue : " + methode);
    }

    if (!regle.methodes.includes(methode)) {
      throw new Error(
        "Méthode non autorisée pour " + nom + " : " + methode
      );
    }

    return true;
  }

  root.P2I_FINANCIAL_REFERENCE = Object.freeze({
    version: "0.4.0",
    METHODES,
    TYPES_ACTIVITE,
    AFFECTATIONS,
    REGLES,
    verifierRegle
  });

})(typeof window !== "undefined" ? window : globalThis);
