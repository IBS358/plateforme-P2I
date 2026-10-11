
/* P2I — Référentiel d'audit Biscuiterie (pilote, lecture seule).
 * Ne remplace aucun fichier existant, ne modifie aucune donnée.
 * Charger APRES machines-data.js et models-db.js pour obtenir les candidats.
 * Aucun prix du catalogue n'est réputé vérifié sans preuve documentaire.
 */
(function (root) {
  'use strict';

  const CONFIGS = Object.freeze([
    'biscuits_mous',
    'biscuits_durs',
    'crackers'
  ]);

  const ALIASES = Object.freeze({
    mouleuse_rotative_biscuiterie: 'faconneuse_rotative',
    etaleuse_pate_biscuiterie: 'lamineuse_biscuiterie',
    roto_decoupoir_biscuiterie: 'faconneuse_rotative',
    enrobeuse_chocolat_biscuiterie: 'enrobeuse_saupoudreuse',
    saupoudreuse_biscuiterie: 'enrobeuse_saupoudreuse'
  });

  function snapshot(configId) {
    const config = CONFIGS.includes(configId)
      ? configId
      : 'biscuits_mous';

    const up = root.MACHINES_DATA &&
      root.MACHINES_DATA.biscuiterie;

    if (!up || !Array.isArray(up.base_machines) || !up.configurations) {
      return {
        ok: false,
        error: 'Référentiel MACHINES_DATA.biscuiterie indisponible',
        configuration: config
      };
    }

    const definition = up.configurations[config];

    if (!definition) {
      return {
        ok: false,
        error: 'Configuration absente',
        configuration: config
      };
    }

    const catalogue = root.MODELS_DB || {};
    const catalogueV2 = root.P2I_MODELS_DB_V2 || {};

    const equipment = [
      ...up.base_machines,
      ...(definition.specific_machines || [])
    ].map(function (m) {
      const key = m.machine_key;
      const lookupKey = ALIASES[key] || key;

      const direct = catalogue[key];
      const alias = key !== lookupKey
        ? catalogue[lookupKey]
        : null;

      const v2 = catalogueV2[key];

      const legacyModels = direct && Array.isArray(direct.models)
        ? direct.models
        : [];

      const aliasModels = alias && Array.isArray(alias.models)
        ? alias.models
        : [];

      const v2Models = v2 && Array.isArray(v2.models)
        ? v2.models
        : [];

      const candidates = [
        ...legacyModels.map(x => ({
          id: x.id || null,
          name: x.name || null,
          source: 'legacy_direct',
          price_catalogue_declared: x.price_ttc ?? null,
          price_verified: false
        })),

        ...aliasModels.map(x => ({
          id: x.id || null,
          name: x.name || null,
          source: 'legacy_alias_to_review',
          price_catalogue_declared: x.price_ttc ?? null,
          price_verified: false
        })),

        ...v2Models.map(x => ({
          id: x.model_id || x.id || null,
          name: x.name || null,
          source: 'v2_direct',
          price_catalogue_declared: null,
          price_verified: false
        }))
      ];

      return {
        machine_key: key,
        name: m.name,
        importance: m.importance || 'a_confirmer',
        process_stage: m.process_stage || null,
        choice_group: m.choice_group || null,
        candidate_count: candidates.length,

        correspondence: v2Models.length || legacyModels.length
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

    return {
      ok: true,
      up_id: 'biscuiterie',
      configuration: config,

      capacity_reference: up.capacity_reference || {
        value: 500,
        unit: 'kg/h',
        status: 'p2i_initial_reference'
      },

      equipment,
      choice_groups: definition.choice_groups || {},

      alerts: [
        'Les machines conditionnelles d’un même groupe sont des alternatives : ne pas les additionner automatiquement.',
        'Une correspondance par alias n’établit pas l’équivalence technique.',
        'Prix, puissances, capacités et fournisseurs doivent être justifiés par des sources externes.',
        'Ne pas additionner un convoyeur déjà inclus dans une ligne ou un autre équipement.',
        'La capacité de 500 kg/h est une cible de dimensionnement et non une garantie.',
        'La puissance nominale (kW) ne suffit pas à déterminer la consommation (kWh).'
      ],

      totals: {
        verified_machine_capex_usd: null,
        validated_line_capacity_kg_h: null,
        verified_operating_cost_usd: null
      }
    };
  }

  root.P2I_BISCUITERIE_REFERENCE_PILOTE = Object.freeze({
    version: '1.0.0',
    configurations: CONFIGS,
    snapshot
  });

})(typeof window !== 'undefined' ? window : globalThis);
