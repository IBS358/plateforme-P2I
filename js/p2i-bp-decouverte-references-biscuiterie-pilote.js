
/* ============================================================
   P2I — RÉFÉRENCES MACHINES POUR BP DÉCOUVERTE
   Unité pilote : Biscuiterie industrielle

   Fichier :
   js/p2i-bp-decouverte-references-biscuiterie-pilote.js

   Version : 1.0.0

   PRINCIPES :
   - Une configuration de référence par version d'UP.
   - Prix de référence vérifiable obligatoire pour le BP.
   - Aucun prix inventé.
   - Les modèles sans prix vérifié restent hors chiffrage.
   - Aucun accès à Supabase.
   - Aucune modification des autres fichiers P2I.
   ============================================================ */

(function () {
  "use strict";

  // ----------------------------------------------------------
  // 1. INFORMATIONS GÉNÉRALES
  // ----------------------------------------------------------

  const REFERENTIEL = {
    version: "1.0.0",
    up_id: "biscuiterie",
    up_nom: "Biscuiterie industrielle",
    devise: "USD",

    configurations: {

      // ------------------------------------------------------
      // BISCUITS MOUS
      // ------------------------------------------------------

      biscuits_mous: {
        configuration_id: "biscuits_mous",
        nom: "Biscuits mous",

        capacite_cible: {
          valeur: 500,
          unite: "kg/h",
          statut: "indicative_non_validee"
        },

        machines: []
      },

      // ------------------------------------------------------
      // BISCUITS DURS
      // ------------------------------------------------------

      biscuits_durs: {
        configuration_id: "biscuits_durs",
        nom: "Biscuits durs",

        capacite_cible: {
          valeur: 500,
          unite: "kg/h",
          statut: "indicative_non_validee"
        },

        machines: []
      },

      // ------------------------------------------------------
      // CRACKERS
      // ------------------------------------------------------

      crackers: {
        configuration_id: "crackers",
        nom: "Crackers",

        capacite_cible: {
          valeur: 500,
          unite: "kg/h",
          statut: "indicative_non_validee"
        },

        machines: []
      }
    }
  };

  // ----------------------------------------------------------
  // 2. FORMAT D'UNE MACHINE DE RÉFÉRENCE
  // ----------------------------------------------------------

  /*
    Chaque machine validée pourra être ajoutée sous cette forme :

    {
      machine_key: "identifiant_machine",

      machine_nom: "Nom de la machine",

      modele_id: "identifiant_modele",

      modele_nom: "Nom commercial du modèle",

      fournisseur: {
        nom: "Nom du fabricant",
        pays: "Pays d'origine",
        site: "https://exemple.com"
      },

      capacite: {
        valeur: 500,
        unite: "kg/h",
        statut: "confirmee"
      },

      prix_reference: {
        montant: 10000,
        devise: "USD",
        incoterm: "FOB",
        statut: "verifie",
        source_url: "https://exemple.com/produit",
        date_verification: "AAAA-MM-JJ"
      },

      photo: {
        url: "https://exemple.com/photo.jpg",
        source_url: "https://exemple.com/produit"
      },

      fonctions_incluses: [
        "Fonction 1",
        "Fonction 2"
      ],

      statut: "valide_bp"
    }

    IMPORTANT :
    Cet exemple est uniquement documentaire.
    Il ne représente aucune machine validée.
  */

  // ----------------------------------------------------------
  // 3. OUTILS DE VALIDATION
  // ----------------------------------------------------------

  function estNombrePositif(valeur) {
    return (
      typeof valeur === "number" &&
      Number.isFinite(valeur) &&
      valeur > 0
    );
  }

  function estPrixVerifie(machine) {
    if (!machine || !machine.prix_reference) {
      return false;
    }

    const prix = machine.prix_reference;

    return (
      prix.statut === "verifie" &&
      estNombrePositif(prix.montant) &&
      typeof prix.devise === "string" &&
      prix.devise.trim() !== "" &&
      typeof prix.source_url === "string" &&
      /^https?:\/\//i.test(prix.source_url) &&
      typeof prix.date_verification === "string" &&
      /^\d{4}-\d{2}-\d{2}$/.test(
        prix.date_verification
      )
    );
  }

  function estMachineValideBP(machine) {
    return (
      machine &&
      machine.statut === "valide_bp" &&
      typeof machine.machine_key === "string" &&
      machine.machine_key.trim() !== "" &&
      typeof machine.modele_id === "string" &&
      machine.modele_id.trim() !== "" &&
      estPrixVerifie(machine)
    );
  }

  // ----------------------------------------------------------
  // 4. RÉCUPÉRER UNE CONFIGURATION
  // ----------------------------------------------------------

  function getConfiguration(configurationId) {
    return (
      REFERENTIEL.configurations[configurationId] || null
    );
  }

  // ----------------------------------------------------------
  // 5. RÉCUPÉRER LES MACHINES VALIDÉES
  // ----------------------------------------------------------

  function getMachinesValidees(configurationId) {
    const configuration = getConfiguration(
      configurationId
    );

    if (!configuration) {
      return [];
    }

    return configuration.machines.filter(
      estMachineValideBP
    );
  }

  // ----------------------------------------------------------
  // 6. CALCULER LE BUDGET MACHINES
  // ----------------------------------------------------------

  function calculerBudgetMachines(configurationId) {
    const configuration = getConfiguration(
      configurationId
    );

    if (!configuration) {
      return {
        erreur: "Configuration introuvable"
      };
    }

    const machines = getMachinesValidees(
      configurationId
    );

    const devises = [
      ...new Set(
        machines.map(
          machine => machine.prix_reference.devise
        )
      )
    ];

    // Ne pas additionner des devises différentes.
    const deviseUnique = devises.length <= 1;

    const total = deviseUnique
      ? machines.reduce(
          (somme, machine) =>
            somme + machine.prix_reference.montant,
          0
        )
      : null;

    const nombreTotal = configuration.machines.length;

    return {
      configuration_id: configurationId,
      configuration_nom: configuration.nom,

      devise: deviseUnique
        ? (devises[0] || REFERENTIEL.devise)
        : null,

      nombre_machines_referencees: nombreTotal,
      nombre_machines_validees: machines.length,

      nombre_machines_a_verifier:
        nombreTotal - machines.length,

      total_machines: total,

      statut:
        nombreTotal === 0
          ? "referencement_a_completer"
          : !deviseUnique
            ? "devises_a_harmoniser"
            : machines.length === nombreTotal
              ? "prix_modeles_verifies"
              : "referencement_incomplet",

      // Le total reste un sous-total de prix catalogue.
      // Il ne constitue pas un investissement complet.
      investissement_complet: false
    };
  }

  // ----------------------------------------------------------
  // 7. SYNTHÈSE DES TROIS VERSIONS
  // ----------------------------------------------------------

  function getSyntheseBiscuiterie() {
    return Object.keys(
      REFERENTIEL.configurations
    ).map(configurationId =>
      calculerBudgetMachines(configurationId)
    );
  }

  // ----------------------------------------------------------
  // 8. EXPOSITION EN LECTURE SEULE
  // ----------------------------------------------------------

  window.P2I_BP_BISCUITERIE_REFERENCES = Object.freeze({
    version: REFERENTIEL.version,
    up_id: REFERENTIEL.up_id,
    up_nom: REFERENTIEL.up_nom,
    devise: REFERENTIEL.devise,

    getConfiguration,
    getMachinesValidees,
    calculerBudgetMachines,
    getSyntheseBiscuiterie
  });

  console.log(
    "P2I — Référentiel BP Biscuiterie pilote chargé",
    REFERENTIEL.version
  );

})();
