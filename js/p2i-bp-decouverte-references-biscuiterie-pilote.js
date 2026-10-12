
/* ==========================================================
   P2I - REFERENTIEL BISCUITERIE INDUSTRIELLE
   Version 1.3.0

   Fichier :
   js/p2i-bp-decouverte-references-biscuiterie-pilote.js

   OBJECTIFS :
   - Conserver les 3 configurations de biscuiterie
   - Documenter les 12 fonctions de la ligne crackers
   - Conserver les prix documentaires QHBake
   - Ajouter la ligne candidate KH-800
   - Evaluer provisoirement son fournisseur
   - Preparer les alternatives du BP Pro
   - Ne jamais inventer un prix ou une compatibilite
   - Ne pas modifier Supabase ou les BP existants
   ========================================================== */

(function () {
  "use strict";

  // ========================================================
  // 1. SOURCES DOCUMENTAIRES
  // ========================================================

  const SOURCES = {
    qhbake_catalogue:
      "https://fliphtml5.com/hhabw/zsvb/Cookie_Machine/",

    qhbake_qh600:
      "https://www.qhbake.ltd/products/--biscuit-production-line",

    kuihong_fabricant:
      "https://www.khfoodmachine.com/",

    kuihong_kh800_prix:
      "https://www.madeinchina.com/mall/show-Automatic-Biscuit-Production-Line-for-Food-Equipments_206908.html",

    kuihong_kh800_technique:
      "https://kuihong.en.made-in-china.com/product/BNRxSIguCvcp/China-Kh-800-Automatic-Biscuit-Production-Line-Machine.html",

    kuihong_catalogue:
      "https://shkuihong.goldsupplier.com/375065-Complete-automatic-biscuit-production-line/"
  };

  const DATE_CONTROLE = "2026-10-12";

  // ========================================================
  // 2. OUTILS
  // ========================================================

  function copie(objet) {
    return JSON.parse(JSON.stringify(objet));
  }

  function nombrePositif(valeur) {
    return (
      typeof valeur === "number" &&
      Number.isFinite(valeur) &&
      valeur > 0
    );
  }

  function urlValide(url) {
    return (
      typeof url === "string" &&
      /^https?:\/\//i.test(url)
    );
  }

  // ========================================================
  // 3. FOURNISSEURS
  // ========================================================

  const FOURNISSEURS = {

    shanghai_kuihong: {
      fournisseur_id: "shanghai_kuihong",

      nom:
        "Shanghai Kuihong Food Machinery Manufacturing Co., Ltd.",

      pays: "Chine",

      ville: "Shanghai",

      site_web: SOURCES.kuihong_fabricant,

      activite:
        "Fabrication de machines agroalimentaires et lignes de biscuiterie",

      annee_creation_annoncee: 2002,

      statut_p2i: "identified",

      statut_p2i_confirme: false,

      relation_commerciale_p2i: false,

      evaluation: {

        existence_commerciale:
          "Presence commerciale documentee",

        audit_tiers:
          "Audit fournisseur annonce sur Made-in-China",

        audit_verifie_par_p2i: false,

        certifications_annoncees: [
          "CE",
          "ISO9001"
        ],

        certifications_verifiees: false,

        garantie_annoncee:
          "Un an selon les annonces commerciales",

        garantie_contractuelle_confirmee: false,

        installation_internationale:
          "Assistance technique a l'etranger annoncee",

        installation_cote_ivoire_confirmee: false,

        formation_operateurs:
          "Annoncee, conditions a confirmer",

        pieces_rechange:
          "Disponibilite et delais a confirmer",

        sav_local_cote_ivoire:
          "Non confirme",

        references_clients_independantes:
          "A verifier",

        conditions_negociees_p2i:
          "Non negociees",

        recommandation:
          "Fournisseur candidat - verification complementaire necessaire"
      },

      sources: [
        SOURCES.kuihong_fabricant,
        SOURCES.kuihong_kh800_technique
      ]
    }
  };

  // ========================================================
  // 4. PRIX DOCUMENTAIRES QHBAKE
  // ========================================================

  const DONNEES_QHBAKE = [
    ["mixeur_100kg_farine", "Melangeur 100 kg de farine", 4300],
    ["formeuse_rotative_durs", "Formeuse rotative biscuits durs", 13680],
    ["formeuse_rotative_mous", "Formeuse rotative biscuits mous", 10360],
    ["convoyeur_entree", "Convoyeur entree four", 5700],
    ["four_gaz_30m", "Four tunnel gaz 30 m", 73000],
    ["convoyeur_sortie", "Convoyeur sortie four", 7200],
    ["armoire_electrique", "Armoire electrique", 6800],
    ["pulverisateur_huile", "Pulverisateur huile", 6900],
    ["retour_180", "Convoyeur retour 180 degres", 5800],
    ["refroidisseur_15m", "Convoyeur refroidissement 15 m", 4200],
    ["empileuse_table", "Empileuse et table", 6800],
    ["fourreuse", "Machine biscuits fourres", 8800],
    ["conditionneuse", "Conditionneuse biscuits", 8480]
  ];

  const REFERENCES_DOCUMENTAIRES = DONNEES_QHBAKE.map(
    function (ligne) {
      return {
        reference_documentaire: "QHB-400/" + ligne[0],

        designation: ligne[1],

        prix_usd: ligne[2],

        devise: "USD",

        incoterm: "EXW usine",

        fabricant: "QHBake",

        pays: "Chine",

        gamme: "QHB-400",

        source_url: SOURCES.qhbake_catalogue,

        date_controle: DATE_CONTROLE,

        statut:
          "prix_documentaire_non_valide_pour_crackers_500kg_h"
      };
    }
  );

  // ========================================================
  // 5. FONCTIONS NECESSAIRES AUX CRACKERS
  // ========================================================

  const FONCTIONS_CRACKERS = [
    ["melangeur_biscuiterie", "Melangeur / petrin"],
    ["alimentation_pate_cracker", "Alimentation de pate"],
    ["prelaminoir_cracker", "Pre-laminoir"],
    ["laminateur_cracker", "Laminateur crackers"],
    ["rouleaux_calibrage", "Rouleaux de calibrage"],
    ["decoupeuse_cracker", "Decoupeuse rotative"],
    ["retour_rognures", "Retour des rognures"],
    ["convoyeur_entree_four", "Convoyeur entree four"],
    ["four_tunnel_biscuiterie", "Four tunnel"],
    ["convoyeur_sortie_four", "Convoyeur sortie four"],
    ["refroidisseur_biscuiterie", "Refroidissement"],
    ["conditionneuse_biscuiterie", "Conditionnement"]
  ];

  function creerFonction(ligne) {
    return {
      machine_key: ligne[0],

      machine_nom: ligne[1],

      modele_id: null,

      modele_nom: null,

      fournisseur: null,

      capacite: {
        valeur: null,
        unite: "kg/h",
        statut: "a_verifier"
      },

      prix_reference: {
        montant: null,
        devise: "USD",
        incoterm: null,
        statut: "non_verifie",
        source_url: null,
        date_verification: null
      },

      fonctions_incluses: [ligne[0]],

      statut: "a_referencer"
    };
  }

  // ========================================================
  // 6. LIGNE CANDIDATE KH-800
  // ========================================================

  const KH800 = {

    modele_id: "kuihong_kh800",

    modele_nom: "KH-800",

    type: "ligne_integree",

    fournisseur_id: "shanghai_kuihong",

    fabricant: "Shanghai Kuihong",

    origine: "chinese",

    pays: "Chine",

    configuration_cible: "crackers",

    capacite: {
      minimum_annonce_kg_h: 100,
      maximum_annonce_kg_h: 500,
      objectif_p2i_kg_h: 500,

      capacite_crackers_confirmee: false,

      statut:
        "plage_fabricant_annoncee_non_validee_pour_crackers"
    },

    prix_reference: {
      montant: 100000,

      devise: "USD",

      incoterm: null,

      statut:
        "prix_public_indicatif_perimetre_a_confirmer",

      source_url: SOURCES.kuihong_kh800_prix,

      date_controle: DATE_CONTROLE,

      prix_config_crackers_confirme: false,

      commentaire:
        "Prix affiche pour KH-800. La variante exacte, " +
        "les equipements inclus et les conditions commerciales " +
        "restent a confirmer."
    },

    fonctions_potentielles: [
      "melangeur_biscuiterie",
      "alimentation_pate_cracker",
      "prelaminoir_cracker",
      "laminateur_cracker",
      "rouleaux_calibrage",
      "decoupeuse_cracker",
      "retour_rognures",
      "convoyeur_entree_four",
      "four_tunnel_biscuiterie",
      "convoyeur_sortie_four",
      "refroidisseur_biscuiterie",
      "conditionneuse_biscuiterie"
    ],

    fonctions_confirmees_dans_offre: [],

    compatibilite: {
      largeur_bande_mm: null,

      debit_reel_crackers_kg_h: null,

      puissance_electrique_kw: null,

      energie_four: null,

      dimensions_ligne: null,

      conditionnement_inclus: null,

      laminateur_inclus: null,

      retour_rognures_inclus: null,

      statut:
        "verification_technique_necessaire"
    },

    statut_selection:
      "candidate_reference_p2i",

    statut_validation:
      "non_validee_pour_bp",

    sources: [
      SOURCES.kuihong_kh800_prix,
      SOURCES.kuihong_kh800_technique,
      SOURCES.kuihong_catalogue
    ]
  };

  // ========================================================
  // 7. CONFIGURATIONS BISCUITERIE
  // ========================================================

  const REFERENTIEL = {

    version: "1.3.0",

    up_id: "biscuiterie",

    up_nom: "Biscuiterie industrielle",

    devise: "USD",

    configurations: {

      biscuits_mous: {
        configuration_id: "biscuits_mous",

        nom: "Biscuits mous",

        capacite_cible: {
          valeur: 500,
          unite: "kg/h",
          statut: "non_validee"
        },

        machines: [],

        statut: "inventaire_a_etablir"
      },

      biscuits_durs: {
        configuration_id: "biscuits_durs",

        nom: "Biscuits durs",

        capacite_cible: {
          valeur: 500,
          unite: "kg/h",
          statut: "non_validee"
        },

        machines: [],

        statut: "inventaire_a_etablir"
      },

      crackers: {
        configuration_id: "crackers",

        nom: "Crackers",

        capacite_cible: {
          valeur: 500,
          unite: "kg/h",
          statut: "non_validee"
        },

        machines:
          FONCTIONS_CRACKERS.map(creerFonction),

        ligne_candidate_id:
          "kuihong_kh800",

        statut:
          "configuration_candidate_non_validee"
      }
    }
  };

  // ========================================================
  // 8. CONTROLE DES MACHINES VALIDEES
  // ========================================================

  function estMachineValideBP(machine) {
    if (!machine || machine.statut !== "valide_bp") {
      return false;
    }

    const prix = machine.prix_reference;

    return !!(
      machine.modele_id &&
      machine.modele_nom &&
      machine.fournisseur &&
      prix &&
      prix.statut === "verifie" &&
      nombrePositif(prix.montant) &&
      prix.devise === "USD" &&
      urlValide(prix.source_url) &&
      prix.date_verification
    );
  }

  // ========================================================
  // 9. CONSULTATION DES CONFIGURATIONS
  // ========================================================

  function getConfiguration(id) {
    const configuration =
      REFERENTIEL.configurations[id];

    return configuration
      ? copie(configuration)
      : null;
  }

  function getMachinesValidees(id) {
    const configuration =
      REFERENTIEL.configurations[id];

    if (!configuration) {
      return [];
    }

    return copie(
      configuration.machines.filter(
        estMachineValideBP
      )
    );
  }

  // ========================================================
  // 10. BUDGET MACHINES BP
  // ========================================================

  function calculerBudgetMachines(id) {
    const configuration =
      REFERENTIEL.configurations[id];

    if (!configuration) {
      return {
        erreur: "Configuration introuvable"
      };
    }

    const machinesValidees =
      getMachinesValidees(id);

    const nombreFonctions =
      configuration.machines.length;

    const nombreValidees =
      machinesValidees.length;

    const complet = (
      nombreFonctions > 0 &&
      nombreValidees === nombreFonctions
    );

    const total = machinesValidees.reduce(
      function (somme, machine) {
        return (
          somme +
          machine.prix_reference.montant
        );
      },
      0
    );

    return {
      configuration_id: id,

      devise: "USD",

      nombre_fonctions: nombreFonctions,

      nombre_modeles_valides: nombreValidees,

      nombre_fonctions_a_traiter:
        nombreFonctions - nombreValidees,

      total_machines: complet
        ? total
        : null,

      investissement_complet: false,

      statut: complet
        ? "prix_verifies_controle_technique_restant"
        : "incomplet",

      avertissement:
        "Le prix de la KH-800 n'est pas encore " +
        "valide pour une ligne crackers de 500 kg/h."
    };
  }

  // ========================================================
  // 11. REFERENCES DOCUMENTAIRES
  // ========================================================

  function getReferencesDocumentaires() {
    return copie(REFERENCES_DOCUMENTAIRES);
  }

  function getSousTotalDocumentaire() {
    const total =
      REFERENCES_DOCUMENTAIRES.reduce(
        function (somme, machine) {
          return somme + machine.prix_usd;
        },
        0
      );

    return {
      montant_usd: total,

      devise: "USD",

      incoterm: "EXW usine",

      statut:
        "liste_complete_QHB400_non_validee_pour_crackers_500kg_h",

      source_url: SOURCES.qhbake_catalogue,

      attention:
        "Inclut des equipements alternatifs ou non requis. " +
        "Ce total ne constitue pas un budget BP."
    };
  }

  // ========================================================
  // 12. FICHE FOURNISSEUR
  // ========================================================

  function getFournisseur(fournisseurId) {
    const fournisseur =
      FOURNISSEURS[fournisseurId];

    return fournisseur
      ? copie(fournisseur)
      : null;
  }

  // ========================================================
  // 13. FICHE LIGNE CANDIDATE
  // ========================================================

  function getLigneCandidate(id) {
    if (id === "kuihong_kh800") {
      return copie(KH800);
    }

    return null;
  }

  // ========================================================
  // 14. COMPARAISON DES CHOIX
  // ========================================================

  function getChoixReferenceCrackers() {
    return {
      configuration_id: "crackers",

      ligne_reference_candidate:
        copie(KH800),

      fournisseur:
        copie(FOURNISSEURS.shanghai_kuihong),

      alternatives_autorisees: true,

      conditions_remplacement: [
        "Capacite compatible",
        "Interfaces techniques compatibles",
        "Prix propre au modele remplace",
        "Verification des fonctions integrees",
        "Absence de double comptage",
        "Garantie et SAV a reevaluer"
      ],

      personnalisation_bp_pro:
        "future_integration",

      avertissement:
        "Le remplacement d'une partie de ligne " +
        "integree peut necessiter un nouveau prix " +
        "global du fournisseur."
    };
  }

  // ========================================================
  // 15. SYNTHESE BISCUITERIE
  // ========================================================

  function getSyntheseBiscuiterie() {
    return Object.keys(
      REFERENTIEL.configurations
    ).map(calculerBudgetMachines);
  }

  // ========================================================
  // 16. COMPATIBILITE AVEC VERSION 1.2
  // ========================================================

  function getLigneComparative() {
    return {
      fabricant: "QHBake",

      modele: "QH-600",

      capacite_annoncee_kg_h: 500,

      source_url: SOURCES.qhbake_qh600,

      prix_usd: null,

      statut:
        "capacite_annoncee_prix_inconnu_compatibilite_crackers_a_confirmer"
    };
  }

  // ========================================================
  // 17. EXPOSITION DU REFERENTIEL
  // ========================================================

  window.P2I_BP_BISCUITERIE_REFERENCES =
    Object.freeze({

      version: REFERENTIEL.version,

      up_id: REFERENTIEL.up_id,

      up_nom: REFERENTIEL.up_nom,

      devise: REFERENTIEL.devise,

      getConfiguration:
        getConfiguration,

      getMachinesValidees:
        getMachinesValidees,

      calculerBudgetMachines:
        calculerBudgetMachines,

      getSyntheseBiscuiterie:
        getSyntheseBiscuiterie,

      getReferencesDocumentaires:
        getReferencesDocumentaires,

      getSousTotalDocumentaire:
        getSousTotalDocumentaire,

      getLigneComparative:
        getLigneComparative,

      getFournisseur:
        getFournisseur,

      getLigneCandidate:
        getLigneCandidate,

      getChoixReferenceCrackers:
        getChoixReferenceCrackers
    });

  console.log(
    "P2I Biscuiterie - referentiel pilote v" +
    REFERENTIEL.version +
    " charge"
  );

})();
