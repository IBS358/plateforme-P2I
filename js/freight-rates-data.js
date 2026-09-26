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
// Les montants peuvent provenir ultérieurement de :
// - cotations de transitaires,
// - compagnies maritimes,
// - partenaires logistiques P2I,
// - références de marché vérifiables.
//
// ==================================================


window.P2I_FREIGHT_RATES = {

  version:
    '1.0',

  updated_at:
    null,


  // ==================================================
  // ROUTES MARITIMES
  // ==================================================

  routes: {


    // ------------------------------------------------
    // CHINE — SHANGHAI → ABIDJAN
    // ------------------------------------------------

    'shanghai_abidjan': {

      origin_country:
        'Chine',

      origin_port:
        'Shanghai',

      destination_country:
        "Côte d'Ivoire",

      destination_port:
        'Abidjan',


      // ----------------------------------------------
      // LCL
      // ----------------------------------------------

      lcl: {

        status:
          'not_available',

        currency:
          'USD',

        rate_type:
          'per_revenue_ton',

        rate_unit:
          'RT',

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
          null,

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


      // ----------------------------------------------
      // FCL
      // ----------------------------------------------

      fcl: {


        // --------------------------
        // 20' DRY
        // --------------------------

        '20ft_dry': {

          status:
            'not_available',

          currency:
            'USD',

          rate_type:
            'per_container',

          rate_unit:
            'container',

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
            null,

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


        // --------------------------
        // 40' DRY
        // --------------------------

        '40ft_dry': {

          status:
            'not_available',

          currency:
            'USD',

          rate_type:
            'per_container',

          rate_unit:
            'container',

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
            null,

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


        // --------------------------
        // 40' HIGH CUBE
        // --------------------------

        '40ft_high_cube': {

          status:
            'not_available',

          currency:
            'USD',

          rate_type:
            'per_container',

          rate_unit:
            'container',

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
            null,

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

};
