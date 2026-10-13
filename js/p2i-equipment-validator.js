
/* =====================================================
   P2I — VALIDATEUR DE PLAN D'ÉQUIPEMENT
   Version pilote 1.0 — Biscuiterie / Crackers

   Lecture seule : aucune modification Supabase,
   localStorage ou catalogue machines.
   ===================================================== */

(function () {
  "use strict";

  function validerPlan(options = {}) {
    const {
      catalogue,
      upId = "biscuiterie",
      configurationId = "crackers",
      machinesSelectionnees = []
    } = options;

    if (!catalogue || !catalogue[upId]) {
      return {
        statut: "erreur",
        alertes: ["Référentiel UP introuvable."]
      };
    }

    const up = catalogue[upId];
    const configuration = up.configurations?.[configurationId];

    if (!configuration) {
      return {
        statut: "erreur",
        alertes: ["Configuration industrielle introuvable."]
      };
    }

    const exigences = [
      ...(up.base_machines || []),
      ...(configuration.specific_machines || [])
    ];

    const indispensables = exigences.filter(
      m => m.importance === "indispensable"
    );

    const recommandees = exigences.filter(
      m => m.importance === "recommended"
    );

    const selection = Array.isArray(machinesSelectionnees)
      ? machinesSelectionnees
      : [];

    const alertes = [];
    const details = [];

    const machinesValidees = new Map();

    selection.forEach(machine => {
      if (!machine || typeof machine.machine_key !== "string") {
        return;
      }

      // Un équipement ne couvre une fonction que si
      // sa correspondance machine_key est explicite.
      if (!machinesValidees.has(machine.machine_key)) {
        machinesValidees.set(machine.machine_key, machine);
      } else {
        alertes.push(
          "Sélection répétée : " + machine.machine_key
        );
      }
    });

    exigences.forEach(exigence => {
      const machine = machinesValidees.get(exigence.machine_key);
      const couverte = Boolean(machine);

      details.push({
        machine_key: exigence.machine_key,
        nom: exigence.name,
        importance: exigence.importance,
        couverte,
        modele: machine?.model || machine?.model_nom || null
      });
    });

    const manquantes = indispensables.filter(
      m => !machinesValidees.has(m.machine_key)
    );

    const recommandationsManquantes = recommandees.filter(
      m => !machinesValidees.has(m.machine_key)
    );

    manquantes.forEach(m => {
      alertes.push("Fonction indispensable manquante : " + m.name);
    });

    recommandationsManquantes.forEach(m => {
      alertes.push("Équipement recommandé absent : " + m.name);
    });

    // Les capacités textuelles du référentiel P2I
    // ne constituent pas des capacités commerciales.
    // Seul un champ numérique explicite et documenté
    // peut être utilisé.
    const capacites = [];

    indispensables.forEach(exigence => {
      const machine = machinesValidees.get(exigence.machine_key);

      if (!machine) return;

      const valeur = machine.capacite_nominale_kg_h;

      if (
        typeof valeur === "number" &&
        Number.isFinite(valeur) &&
        valeur > 0 &&
        machine.capacite_documentee === true &&
        machine.capacite_applicable_crackers === true
      ) {
        capacites.push(valeur);
      } else {
        alertes.push(
          "Capacité exploitable à confirmer : " + exigence.name
        );
      }
    });

    const capacitesCompletes =
      manquantes.length === 0 &&
      capacites.length === indispensables.length;

    // Minimum indicatif seulement :
    // les rendements et interfaces restent à vérifier.
    const capaciteIndicative = capacitesCompletes
      ? Math.min(...capacites)
      : null;

    const capaciteCible = up.capacity_reference?.value ?? null;

    if (
      capaciteIndicative !== null &&
      capaciteCible !== null &&
      capaciteIndicative < capaciteCible
    ) {
      alertes.push(
        "Débit indicatif inférieur à l'objectif de " +
        capaciteCible + " kg/h."
      );
    }

    const statut = manquantes.length > 0
      ? "incomplet"
      : capacitesCompletes
        ? "complet_a_verifier"
        : "capacites_a_confirmer";

    return {
      up_id: upId,
      configuration_id: configurationId,
      capacite_cible_kg_h: capaciteCible,

      fonctions_total: exigences.length,
      fonctions_indispensables: indispensables.length,
      fonctions_recommandees: recommandees.length,

      fonctions_indispensables_couvertes:
        indispensables.length - manquantes.length,

      fonctions_indispensables_manquantes: manquantes.length,

      recommandations_manquantes:
        recommandationsManquantes.length,

      capacite_indicative_kg_h: capaciteIndicative,

      capacite_validee_kg_h: null,

      statut,
      details,
      alertes
    };
  }

  window.P2I_EQUIPMENT_VALIDATOR = Object.freeze({
    version: "1.0.0",
    validerPlan
  });
})();
