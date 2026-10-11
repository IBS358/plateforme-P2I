
/* P2I — Audit pilote biscuiterie v2.0.0 (lecture seule).
 * Chargement conseillé, dans une page de test isolée :
 *   <script src="machines-data.js"></script>
 *   <script src="js/models-db.js"></script>
 *   <script src="js/p2i-biscuiterie-reference-pilote.js"></script>
 * Aucun prix ni compatibilité ne sont certifiés par ce module.
 */
(function (root) {
  'use strict';
  const CONFIGS = Object.freeze(['biscuits_mous', 'biscuits_durs', 'crackers']);
  const ALIASES = Object.freeze({
    mouleuse_rotative_biscuiterie: 'faconneuse_rotative',
    etaleuse_pate_biscuiterie: 'lamineuse_biscuiterie',
    roto_decoupoir_biscuiterie: 'faconneuse_rotative',
    enrobeuse_chocolat_biscuiterie: 'enrobeuse_saupoudreuse',
    saupoudreuse_biscuiterie: 'enrobeuse_saupoudreuse'
  });

  function sources(overrides) {
    const o = overrides || {};
    // Un `const` global peut être accessible par son nom sans être une propriété de window.
    return {
      machines: o.machinesData || root.MACHINES_DATA ||
        (typeof MACHINES_DATA !== 'undefined' ? MACHINES_DATA : null),
      models: o.modelsDb || root.MODELS_DB ||
        (typeof MODELS_DB !== 'undefined' ? MODELS_DB : null),
      modelsV2: o.modelsDbV2 || root.P2I_MODELS_DB_V2 || null
    };
  }

  function snapshot(configId, overrides) {
    const config = CONFIGS.includes(configId) ? configId : 'biscuits_mous';
    const data = sources(overrides);
    const up = data.machines && data.machines.biscuiterie;

    if (!up || !Array.isArray(up.base_machines) || !up.configurations) {
      return {
        ok: false,
        configuration: config,
        error: 'Configuration détaillée absente : charger machines-data.js à la racine, pas js/machines-data.js.'
      };
    }

    const definition = up.configurations[config];
    if (!definition) {
      return {
        ok: false,
        configuration: config,
        error: 'Configuration produit absente.'
      };
    }

    const catalogue = data.models || {};
    const catalogueV2 = data.modelsV2 || {};

    const equipment = [
      ...up.base_machines,
      ...(definition.specific_machines || [])
    ].map(function (m) {
      const key = m.machine_key;
      const aliasKey = ALIASES[key];

      const direct = catalogue[key];
      const alias = aliasKey && aliasKey !== key
        ? catalogue[aliasKey]
        : null;
      const v2 = catalogueV2[key];

      const directModels = direct && Array.isArray(direct.models)
        ? direct.models
        : [];

      const aliasModels = alias && Array.isArray(alias.models)
        ? alias.models
        : [];

      const v2Models = v2 && Array.isArray(v2.models)
        ? v2.models
        : [];

      const candidates = [
        ...directModels.map(x => ({
          id: x.id || null,
          name: x.name || null,
          source: 'catalogue_direct',
          price_catalogue_declared: x.price_ttc ?? null,
          price_verified: false,
          technical_compatibility_verified: false
        })),

        ...aliasModels.map(x => ({
          id: x.id || null,
          name: x.name || null,
          source: 'alias_a_valider',
          price_catalogue_declared: x.price_ttc ?? null,
          price_verified: false,
          technical_compatibility_verified: false
        })),

        ...v2Models.map(x => ({
          id: x.model_id || x.id || null,
          name: x.name || null,
          source: 'catalogue_v2_direct',
          price_catalogue_declared: null,
          price_verified: false,
          technical_compatibility_verified: false
        }))
      ];

      return {
        machine_key: key,
        name: m.name,
        role: m.role || null,
        importance: m.importance || 'a_confirmer',
        process_stage: m.process_stage || null,
        choice_group: m.choice_group || null,
        utilities: m.utilities || null,
        capacity_reference: m.capacity || null,
        candidate_count: candidates.length,

        correspondence: directModels.length || v2Models.length
          ? 'directe'
          : aliasModels.length
            ? 'alias_a_valider'
            : 'manquante',

        candidates,
        commercial_status: 'verification_documentaire_requise',
        throughput_500kg_h_validated: false,
        electrical_consumption_kwh_verified: false
      };
    });

    const stats = {
      equipment_count: equipment.length,
      direct: equipment.filter(
        x => x.correspondence === 'directe'
      ).length,
      aliases_to_validate: equipment.filter(
        x => x.correspondence === 'alias_a_valider'
      ).length,
      missing: equipment.filter(
        x => x.correspondence === 'manquante'
      ).length,
      candidate_entries: equipment.reduce(
        (n, x) => n + x.candidate_count, 0
      )
    };

    return {
      ok: true,
      version: '2.0.0',
      up_id: 'biscuiterie',
      configuration: config,

      capacity_reference: up.capacity_reference || {
        value: 500,
        unit: 'kg/h',
        status: 'p2i_initial_reference'
      },

      catalogue_loaded: !!data.models,
      catalogue_v2_loaded: !!data.modelsV2,
      equipment,
      stats,
      choice_groups: definition.choice_groups || {},

      optional_modules: (up.optional_modules || []).filter(
        x => Array.isArray(x.applies_to) &&
          x.applies_to.includes(config)
      ),

      alerts: [
        'Les équipements conditionnels d’un même groupe sont des alternatives, non des achats cumulés.',
        'Les alias ne prouvent pas l’équivalence technique.',
        'Une correspondance directe ne prouve ni la compatibilité, ni le prix fournisseur vérifié.',
        'Vérifier si les convoyeurs et accessoires sont déjà inclus dans une offre de ligne complète.',
        '500 kg/h est une cible de dimensionnement, non une capacité fournisseur garantie.',
        'La puissance nominale (kW) ne permet pas seule de calculer la consommation (kWh).'
      ],

      totals: {
        verified_machine_capex_usd: null,
        validated_line_capacity_kg_h: null,
        verified_operating_cost_usd: null
      }
    };
  }

  root.P2I_BISCUITERIE_REFERENCE_PILOTE = Object.freeze({
    version: '2.0.0',
    configurations: CONFIGS,
    snapshot
  });

})(typeof window !== 'undefined' ? window : globalThis);
