// ==================================================
// P2I — RÉFÉRENTIEL DES COTATIONS DE FRET
// ==================================================
//
// Ce fichier contient les références tarifaires
// utilisées uniquement pour les ESTIMATIONS P2I.
//
// Ces références ne constituent pas des devis
// officiels de transport.
//
// Deux niveaux de référence sont distingués :
//
// 1. market_reference
//    Référence / fourchette de marché.
//    Peut servir à produire un ordre de grandeur P2I.
//
// 2. reference_quote
//    Cotation précise, datée et vérifiable.
//    Utilisée prioritairement lorsqu'elle est valide.
//
// Les devis officiels propres à une opération réelle
// ne sont PAS stockés dans ce fichier.
// Ils seront gérés séparément, notamment via Supabase.
//
// ==================================================


window.P2I_FREIGHT_RATES = {

  version:
    '2.0',

  updated_at:
    null,


  // ==================================================
  // ROUTES MARITIMES
  // ==================================================

  routes: {


    // ==================================================
    // CHINE — SHANGHAI → ABIDJAN
    // ==================================================

    'shanghai_abidjan': {

      origin_country:
        'Chine',

      origin_port:
        'Shanghai',

      destination_country:
        "Côte d'Ivoire",

      destination_port:
        'Abidjan',


      // ==============================================
      // LCL
      // ==============================================

     lcl: {

  shipping_mode:
    'lcl',

  currency:
    'USD',

  rate_type:
    'per_cbm',

  rate_unit:
    'CBM',


  // --------------------------------------------
  // RÉFÉRENCE DE MARCHÉ
  // --------------------------------------------
  //
  // Référence indicative 2026 publiée pour :
  // Shanghai → Abidjan
  //
  // Fourchette publiée :
  // 250 à 320 USD / CBM
  //
  // Point milieu utilisé par l'Estimation P2I :
  // (250 + 320) / 2 = 285 USD / CBM
  //
  // Cette référence n'est PAS un devis de transport.
  // --------------------------------------------

  market_reference: {

    status:
      'available',

    min_rate_per_cbm_usd:
      250,

    max_rate_per_cbm_usd:
      320,

    midpoint_rate_per_cbm_usd:
      285,

    minimum_charge_usd:
      null,

    fixed_charge_per_shipment_usd:
      null,

    surcharges_usd:
      null,

    origin_charges_usd:
      null,

    destination_charges_usd:
      null,

    other_charges_usd:
      null,

    source_count:
      1,

    source_type:
      'market_reference',

    source_name:
      'DDPLINK',

    source_date:
      '2026',

    valid_until:
      null,

    verification_status:
      'verified',

    notes:
      'Référence indicative 2026 Shanghai → Abidjan : 250–320 USD/CBM. Point milieu P2I : 285 USD/CBM. À remplacer par une cotation récente lorsque disponible.'

  },


  // --------------------------------------------
  // COTATION DE RÉFÉRENCE
  // --------------------------------------------
  //
  // Aucune cotation P2I active pour l'instant.
  // Une future cotation vérifiée et encore valide
  // sera prioritaire sur la référence de marché.
  // --------------------------------------------

  reference_quote: {

    status:
      'not_available',

    rate_per_cbm_usd:
      null,

    minimum_charge_usd:
      null,

    fixed_charge_per_shipment_usd:
      null,

    surcharges_usd:
      null,

    origin_charges_usd:
      null,

    destination_charges_usd:
      null,

    other_charges_usd:
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


      // ==============================================
      // FCL
      // ==============================================

      fcl: {


        // --------------------------------------------
        // 20' DRY
        // --------------------------------------------

        '20ft_dry': {

          shipping_mode:
            'fcl',

          container_type:
            '20ft_dry',

          currency:
            'USD',

          rate_type:
            'per_container',

          rate_unit:
            'container',


          market_reference: {

            status:
              'not_available',

            min_rate_usd:
              null,

            max_rate_usd:
              null,

            midpoint_rate_usd:
              null,

            surcharges_usd:
              null,

            origin_charges_usd:
              null,

            destination_charges_usd:
              null,

            other_charges_usd:
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

            rate_amount:
              null,

            surcharges_usd:
              null,

            origin_charges_usd:
              null,

            destination_charges_usd:
              null,

            other_charges_usd:
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


        // --------------------------------------------
        // 40' DRY
        // --------------------------------------------

        '40ft_dry': {

          shipping_mode:
            'fcl',

          container_type:
            '40ft_dry',

          currency:
            'USD',

          rate_type:
            'per_container',

          rate_unit:
            'container',


          market_reference: {

            status:
              'not_available',

            min_rate_usd:
              null,

            max_rate_usd:
              null,

            midpoint_rate_usd:
              null,

            surcharges_usd:
              null,

            origin_charges_usd:
              null,

            destination_charges_usd:
              null,

            other_charges_usd:
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

            rate_amount:
              null,

            surcharges_usd:
              null,

            origin_charges_usd:
              null,

            destination_charges_usd:
              null,

            other_charges_usd:
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


        // --------------------------------------------
        // 40' HIGH CUBE
        // --------------------------------------------

        '40ft_high_cube': {

          shipping_mode:
            'fcl',

          container_type:
            '40ft_high_cube',

          currency:
            'USD',

          rate_type:
            'per_container',

          rate_unit:
            'container',


          market_reference: {

            status:
              'not_available',

            min_rate_usd:
              null,

            max_rate_usd:
              null,

            midpoint_rate_usd:
              null,

            surcharges_usd:
              null,

            origin_charges_usd:
              null,

            destination_charges_usd:
              null,

            other_charges_usd:
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

            rate_amount:
              null,

            surcharges_usd:
              null,

            origin_charges_usd:
              null,

            destination_charges_usd:
              null,

            other_charges_usd:
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

    },


    // ==================================================
    // CORÉE DU SUD — BUSAN → ABIDJAN
    // ==================================================

    'busan_abidjan': {

      origin_country:
        'Corée du Sud',

      origin_port:
        'Busan',

      destination_country:
        "Côte d'Ivoire",

      destination_port:
        'Abidjan',


      // ==============================================
      // LCL
      // ==============================================

      lcl: {

        shipping_mode:
          'lcl',

        currency:
          'USD',

        rate_type:
          'per_revenue_ton',

        rate_unit:
          'RT',


        market_reference: {

          status:
            'not_available',

          min_rate_per_rt_usd:
            null,

          max_rate_per_rt_usd:
            null,

          midpoint_rate_per_rt_usd:
            null,

          minimum_charge_usd:
            null,

          fixed_charge_per_shipment_usd:
            null,

          surcharges_usd:
            null,

          origin_charges_usd:
            null,

          destination_charges_usd:
            null,

          other_charges_usd:
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

          rate_per_rt_usd:
            null,

          minimum_charge_usd:
            null,

          fixed_charge_per_shipment_usd:
            null,

          surcharges_usd:
            null,

          origin_charges_usd:
            null,

          destination_charges_usd:
            null,

          other_charges_usd:
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


      // ==============================================
      // FCL
      // ==============================================

      fcl: {


        // --------------------------------------------
        // 20' DRY
        // --------------------------------------------

        '20ft_dry': {

          shipping_mode:
            'fcl',

          container_type:
            '20ft_dry',

          currency:
            'USD',

          rate_type:
            'per_container',

          rate_unit:
            'container',


          market_reference: {

            status:
              'not_available',

            min_rate_usd:
              null,

            max_rate_usd:
              null,

            midpoint_rate_usd:
              null,

            surcharges_usd:
              null,

            origin_charges_usd:
              null,

            destination_charges_usd:
              null,

            other_charges_usd:
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

            rate_amount:
              null,

            surcharges_usd:
              null,

            origin_charges_usd:
              null,

            destination_charges_usd:
              null,

            other_charges_usd:
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


        // --------------------------------------------
        // 40' DRY
        // --------------------------------------------

        '40ft_dry': {

          shipping_mode:
            'fcl',

          container_type:
            '40ft_dry',

          currency:
            'USD',

          rate_type:
            'per_container',

          rate_unit:
            'container',


          market_reference: {

            status:
              'not_available',

            min_rate_usd:
              null,

            max_rate_usd:
              null,

            midpoint_rate_usd:
              null,

            surcharges_usd:
              null,

            origin_charges_usd:
              null,

            destination_charges_usd:
              null,

            other_charges_usd:
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

            rate_amount:
              null,

            surcharges_usd:
              null,

            origin_charges_usd:
              null,

            destination_charges_usd:
              null,

            other_charges_usd:
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


        // --------------------------------------------
        // 40' HIGH CUBE
        // --------------------------------------------

        '40ft_high_cube': {

          shipping_mode:
            'fcl',

          container_type:
            '40ft_high_cube',

          currency:
            'USD',

          rate_type:
            'per_container',

          rate_unit:
            'container',


          market_reference: {

            status:
              'not_available',

            min_rate_usd:
              null,

            max_rate_usd:
              null,

            midpoint_rate_usd:
              null,

            surcharges_usd:
              null,

            origin_charges_usd:
              null,

            destination_charges_usd:
              null,

            other_charges_usd:
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

            rate_amount:
              null,

            surcharges_usd:
              null,

            origin_charges_usd:
              null,

            destination_charges_usd:
              null,

            other_charges_usd:
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

    }

  }

};
