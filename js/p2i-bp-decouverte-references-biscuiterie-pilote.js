
/* P2I — Référentiel BP Découverte, Biscuiterie industrielle
   Version 1.1.0 — préparation de la configuration crackers
   Aucune donnée commerciale non vérifiée n'est comptabilisée.
   Aucun accès à Supabase ni modification des autres fichiers.
*/
(function () {
  'use strict';

  const SOURCES = Object.freeze({
    sinobake: 'https://www.sinobake.net/Customized-Cracker-Biscuit-Hard-Biscuit-Production-Line-pd557569458.html',
    biscuitpro: 'https://www.biscuitpro.com/fr/les-lignes/ligne-de-production-de-cracker',
    skywin: 'https://skywinbake.en.made-in-china.com/product/qwrfULYWYpMl/China-Soda-Cracker-Biscuit-Production-Line-Tunnel-Oven-Biscuit-Making-Machine.html'
  });

  function fonction(id, nom, notes, groupe) {
    return {
      machine_key: id,
      machine_nom: nom,
      groupe: groupe || 'production',
      notes: notes || '',
      modele_id: null,
      modele_nom: null,
      fournisseur: null,
      capacite: {
        valeur: null,
        unite: 'kg/h',
        statut: 'a_verifier'
      },
      prix_reference: {
        montant: null,
        devise: 'USD',
        incoterm: null,
        statut: 'non_verifie',
        source_url: null,
        date_verification: null
      },
      fonctions_incluses: [id],
      statut: 'a_referencer'
    };
  }

  const REFERENTIEL = {
    version: '1.1.0',
    up_id: 'biscuiterie',
    up_nom: 'Biscuiterie industrielle',
    devise: 'USD',
    sources_documentaires: SOURCES,

    configurations: {

      biscuits_mous: {
        configuration_id: 'biscuits_mous',
        nom: 'Biscuits mous',
        capacite_cible: {
          valeur: 500,
          unite: 'kg/h',
          statut: 'indicative_non_validee'
        },
        machines: [],
        statut: 'inventaire_a_etablir'
      },

      biscuits_durs: {
        configuration_id: 'biscuits_durs',
        nom: 'Biscuits durs',
        capacite_cible: {
          valeur: 500,
          unite: 'kg/h',
          statut: 'indicative_non_validee'
        },
        machines: [],
        statut: 'inventaire_a_etablir'
      },

      crackers: {
        configuration_id: 'crackers',
        nom: 'Crackers',
        capacite_cible: {
          valeur: 500,
          unite: 'kg/h',
          statut: 'indicative_non_validee'
        },
        statut: 'fonctions_identifiees_modeles_a_verifier',

        machines: [
          fonction(
            'melangeur_biscuiterie',
            'Mélangeur / pétrin industriel',
            'Vérifier le volume par lot et la cadence effective.'
          ),

          fonction(
            'alimentation_pate_cracker',
            'Alimentation et transfert de pâte',
            'Peut être intégré à un ensemble de préparation.'
          ),

          fonction(
            'prelaminoir_cracker',
            'Pré-laminoir / mise en nappe',
            'Vérifier si inclus dans le laminateur.'
          ),

          fonction(
            'laminateur_cracker',
            'Laminateur pour crackers',
            'Fonction de laminage indispensable selon la recette retenue.'
          ),

          fonction(
            'rouleaux_calibrage',
            'Rouleaux de calibrage',
            'Plusieurs stations possibles ; ne pas compter deux fois si intégrées.'
          ),

          fonction(
            'decoupeuse_cracker',
            'Découpeuse rotative crackers',
            'Vérifier format, largeur et rendement.'
          ),

          fonction(
            'retour_rognures',
            'Retour des rognures',
            'Peut être intégré à la découpeuse ou à la ligne.'
          ),

          fonction(
            'convoyeur_entree_four',
            'Convoyeur d’entrée du four',
            'Vérifier si fourni avec le four tunnel.'
          ),

          fonction(
            'four_tunnel_biscuiterie',
            'Four tunnel',
            'Dimensionnement selon temps de cuisson et cadence.'
          ),

          fonction(
            'convoyeur_sortie_four',
            'Convoyeur de sortie du four',
            'Vérifier si fourni avec le four tunnel.'
          ),

          fonction(
            'refroidisseur_biscuiterie',
            'Convoyeur de refroidissement',
            'Dimensionner selon temps de refroidissement.'
          ),

          fonction(
            'conditionneuse_biscuiterie',
            'Conditionneuse / emballeuse',
            'Vérifier cadence en paquets/minute.',
            'conditionnement'
          )
        ]
      }
    }
  };

  // ----------------------------------------------------------
  // VALIDATION DES PRIX
  // ----------------------------------------------------------

  function estNombrePositif(n) {
    return (
      typeof n === 'number' &&
      Number.isFinite(n) &&
      n > 0
    );
  }

  function estPrixVerifie(machine) {
    const p = machine && machine.prix_reference;

    return !!(
      p &&
      p.statut === 'verifie' &&
      estNombrePositif(p.montant) &&
      p.devise === 'USD' &&
      typeof p.source_url === 'string' &&
      /^https?:\/\//i.test(p.source_url) &&
      typeof p.date_verification === 'string' &&
      /^\d{4}-\d{2}-\d{2}$/.test(
        p.date_verification
      )
    );
  }

  function estMachineValideBP(machine) {
    return !!(
      machine &&
      machine.statut === 'valide_bp' &&
      typeof machine.modele_id === 'string' &&
      machine.modele_id.trim() &&
      typeof machine.modele_nom === 'string' &&
      machine.modele_nom.trim() &&
      machine.fournisseur &&
      machine.fournisseur.nom &&
      estPrixVerifie(machine)
    );
  }

  // ----------------------------------------------------------
  // CONSULTATION DES CONFIGURATIONS
  // ----------------------------------------------------------

  function copie(obj) {
    return JSON.parse(JSON.stringify(obj));
  }

  function getConfiguration(configurationId) {
    const c = REFERENTIEL.configurations[configurationId];

    return c ? copie(c) : null;
  }

  function getMachinesValidees(configurationId) {
    const c = REFERENTIEL.configurations[configurationId];

    return c
      ? copie(c.machines.filter(estMachineValideBP))
      : [];
  }

  // ----------------------------------------------------------
  // CALCUL DU BUDGET MACHINES
  // ----------------------------------------------------------

  function calculerBudgetMachines(configurationId) {
    const c = REFERENTIEL.configurations[configurationId];

    if (!c) {
      return {
        erreur: 'Configuration introuvable'
      };
    }

    const machines = c.machines.filter(
      estMachineValideBP
    );

    const totalPartiel = machines.reduce(
      (s, m) => s + m.prix_reference.montant,
      0
    );

    const complet = (
      c.machines.length > 0 &&
      machines.length === c.machines.length
    );

    return {
      configuration_id: configurationId,
      configuration_nom: c.nom,
      devise: 'USD',

      nombre_fonctions_referencees: c.machines.length,
      nombre_modeles_valides: machines.length,

      nombre_fonctions_a_traiter:
        c.machines.length - machines.length,

      sous_total_partiel_usd: totalPartiel,

      total_machines: complet
        ? totalPartiel
        : null,

      statut:
        c.machines.length === 0
          ? 'inventaire_a_etablir'
          : complet
            ? 'prix_modeles_verifies'
            : 'referencement_incomplet',

      investissement_complet: false,

      avertissement:
        'Aucun montant incomplet ne doit alimenter automatiquement le BP.'
    };
  }

  // ----------------------------------------------------------
  // SYNTHÈSE DES TROIS VERSIONS
  // ----------------------------------------------------------

  function getSyntheseBiscuiterie() {
    return Object.keys(
      REFERENTIEL.configurations
    ).map(calculerBudgetMachines);
  }

  // ----------------------------------------------------------
  // EXPOSITION DES FONCTIONS
  // ----------------------------------------------------------

  window.P2I_BP_BISCUITERIE_REFERENCES = Object.freeze({
    version: REFERENTIEL.version,
    up_id: REFERENTIEL.up_id,
    up_nom: REFERENTIEL.up_nom,
    devise: REFERENTIEL.devise,

    getConfiguration: getConfiguration,
    getMachinesValidees: getMachinesValidees,
    calculerBudgetMachines: calculerBudgetMachines,
    getSyntheseBiscuiterie: getSyntheseBiscuiterie
  });

  console.log(
    'P2I — Référentiel Biscuiterie pilote chargé (v' +
    REFERENTIEL.version +
    ')'
  );

})();
