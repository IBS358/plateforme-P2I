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

      // --------------------------------------------
// RÉFÉRENCE DE MARCHÉ — ICC A
// --------------------------------------------
//
// Type de marchandise :
// Machines / équipements
//
// Référence indicative 2026 :
// 0,15 % à 0,30 %
//
// Le moteur P2I calcule automatiquement
// le point milieu :
//
// (0,15 + 0,30) / 2 = 0,225 %
//
// Base publiée : valeur assurée CIF + 10 %.
//
// Cette référence n'est PAS une cotation
// d'assurance pour une expédition précise.
//
// Les éventuelles surprimes liées à la route,
// guerre, grèves ou autres risques spécifiques
// ne sont pas incluses ici.
// --------------------------------------------

market_reference: {

  status:
    'available',

  premium_rate_percent:
    null,

  min_premium_rate_percent:
    0.15,

  max_premium_rate_percent:
    0.30,

  minimum_premium_usd:
    null,

  source_count:
    1,

  source_type:
    'market_reference',

  source_name:
    'Unicore Overseas SIA',

  source_date:
    '2026-09-24',

  valid_until:
    null,

  verification_status:
    'verified',

  notes:
    'Référence indicative 2026 pour machines / équipements en couverture standard ICC A : 0,15–0,30 % de la valeur assurée. Point milieu P2I : 0,225 %. Prime minimale publiée en EUR non intégrée au calcul USD. Les surprimes éventuelles liées à la route ou aux extensions War & Strikes ne sont pas incluses.'

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
