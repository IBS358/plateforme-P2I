// ==================================================
// P2I — RÉFÉRENTIEL DES TARIFS D'ASSURANCE MARITIME
// ==================================================
//
// Ce fichier contient les références utilisées
// uniquement pour les ESTIMATIONS P2I.
//
// Il distingue :
//
// 1. market_reference
//    Référence indicative de marché documentée.
//
// 2. reference_quote
//    Cotation réelle obtenue auprès d'un assureur,
//    courtier ou partenaire et encore valide.
//
// Une cotation de référence valide est prioritaire
// sur une référence de marché.
//
// Aucun taux d'assurance n'est inventé.
// ==================================================


window.P2I_INSURANCE_RATES = {

  version:
    '1.0',

  updated_at:
    null,


  // ==================================================
  // ASSURANCE MARITIME — MARCHANDISES INDUSTRIELLES
  // ==================================================

  marine_cargo: {

    currency:
      'USD',

    coverage_basis:
      'cif_contract_value',

    // Valeur assurée :
    // 110 % de la valeur CIF.
    coverage_percent:
      110,


    // ==================================================
    // ICC A — COUVERTURE ÉTENDUE
    // ==================================================

    institute_cargo_clauses_a: {

      coverage_level:
        'institute_cargo_clauses_a',

      market_reference: {

        status:
          'not_available',

        premium_rate_percent:
          null,

        min_premium_rate_percent:
          null,

        max_premium_rate_percent:
          null,

        minimum_premium_usd:
          null,

        source_count:
          null,

        source_type:
          'market_reference',

        source_name:
          null,

        source_date:
          null,

        valid_until:
          null,

        verification_status:
          'not_verified',

        notes:
          null

      },

      reference_quote: {

        status:
          'not_available',

        premium_rate_percent:
          null,

        minimum_premium_usd:
          null,

        source_type:
          'reference_quote',

        source_name:
          null,

        source_date:
          null,

        valid_until:
          null,

        verification_status:
          'not_verified',

        notes:
          null

      }

    },


    // ==================================================
    // ICC B — COUVERTURE INTERMÉDIAIRE
    // ==================================================

    institute_cargo_clauses_b: {

      coverage_level:
        'institute_cargo_clauses_b',

      market_reference: {

        status:
          'not_available',

        premium_rate_percent:
          null,

        min_premium_rate_percent:
          null,

        max_premium_rate_percent:
          null,

        minimum_premium_usd:
          null,

        source_count:
          null,

        source_type:
          'market_reference',

        source_name:
          null,

        source_date:
          null,

        valid_until:
          null,

        verification_status:
          'not_verified',

        notes:
          null

      },

      reference_quote: {

        status:
          'not_available',

        premium_rate_percent:
          null,

        minimum_premium_usd:
          null,

        source_type:
          'reference_quote',

        source_name:
          null,

        source_date:
          null,

        valid_until:
          null,

        verification_status:
          'not_verified',

        notes:
          null

      }

    },


    // ==================================================
    // ICC C — COUVERTURE RESTREINTE
    // ==================================================

    institute_cargo_clauses_c: {

      coverage_level:
        'institute_cargo_clauses_c',

      market_reference: {

        status:
          'not_available',

        premium_rate_percent:
          null,

        min_premium_rate_percent:
          null,

        max_premium_rate_percent:
          null,

        minimum_premium_usd:
          null,

        source_count:
          null,

        source_type:
          'market_reference',

        source_name:
          null,

        source_date:
          null,

        valid_until:
          null,

        verification_status:
          'not_verified',

        notes:
          null

      },

      reference_quote: {

        status:
          'not_available',

        premium_rate_percent:
          null,

        minimum_premium_usd:
          null,

        source_type:
          'reference_quote',

        source_name:
          null,

        source_date:
          null,

        valid_until:
          null,

        verification_status:
          'not_verified',

        notes:
          null

      }

    }

  }

};
