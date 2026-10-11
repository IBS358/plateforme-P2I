
/*
 * P2I — Biscuiterie industrielle
 * Référentiel de modèles candidats — pilote indépendant
 * Version 0.2.0 — 2026-10-12
 *
 * Données documentaires uniquement.
 * Aucun modèle n'est encore validé commercialement.
 * Aucune modification de MODELS_DB, P2I_MODELS_DB_V2
 * ou Supabase.
 */

(function (global) {
  'use strict';

  const SOURCE_WENVA_LAMINATEUR =
    'https://wenva668.en.made-in-china.com/product/gZuxksQTJJVe/China-Biscuit-Machine-Cut-Sheet-Laminator-with-Flour-Sprayer.html';

  const SOURCE_WENVA_LIGNE =
    'https://wenva668.en.made-in-china.com/product/aFeQECKHhtWl/China-Wenva-Delicious-Soda-Cracker-Production-Line.html';

  const dateConsultation = '2026-10-12';

  function creerVarianteWenva(code, dimensions, poidsKg) {
    return {
      id: 'wenva_laminateur_' + code,
      marque: 'WENVA',
      fabricant_declare: 'Yangjiang Wenva Yuandong Industry Co., Ltd.',
      designation: 'Cut-sheet laminator',
      variante: code,
      origine_declaree: 'Chine',

      fonction: 'Laminage de pâte pour soda crackers',

      caracteristiques_annoncees: {
        couches_min: 12,
        couches_max: 16,
        epaisseur_pate_min_mm: 3,
        epaisseur_pate_max_mm: 8,
        puissance_nominale_kw: 5.05,
        dimensions_mm: dimensions,
        poids_kg: poidsKg
      },

      capacite_cible_p2i_kg_h: 500,
      debit_kg_h_verifie: null,

      prix_reference: {
        devise: 'USD',
        montant_min: 35000,
        montant_max: 45000,
        nature: 'fourchette_publique_pour_annonce_multivariantes',
        prix_individuel_variante: null,
        incoterm: null,
        prix_public_documente: true,
        prix_variante_verifie: false,
        date_consultation: dateConsultation,
        source_url: SOURCE_WENVA_LAMINATEUR
      },

      rouleaux_calibrage_inclus: null,
      convoyeurs_inclus: null,
      compatibilite_ligne_500kg_h: 'a_confirmer',

      statut: 'candidat_documente_non_valide',
      fournisseur_confirme: false,
      prix_verifie: false,
      admissible_catalogue_p2i: false,

      points_a_verifier: [
        'Débit réel en kg/h pour la recette de crackers',
        'Largeur utile réelle de la variante',
        'Prix individuel de cette variante',
        'Incoterm et conditions de livraison',
        'Rouleaux de calibrage inclus ou séparés',
        'Convoyeurs et accessoires inclus',
        'Alimentation électrique et installation',
        'Garantie, pièces de rechange et SAV'
      ],

      sources: [
        SOURCE_WENVA_LAMINATEUR,
        SOURCE_WENVA_LIGNE
      ]
    };
  }

  const familles = {

    laminateur_cracker_biscuiterie: {
      nom: 'Laminateur pour crackers',
      fonction: 'Laminage de pâte pour crackers',
      configuration: ['crackers'],
      capacite_cible_kg_h: 500,
      achat_separe: 'a_confirmer',

      interfaces_a_verifier: [
        'Largeur utile',
        'Épaisseur entrée et sortie',
        'Nombre de couches',
        'Vitesse de fonctionnement',
        'Liaison avec rouleaux de calibrage',
        'Liaison avec découpeuse'
      ],

      modeles_candidats: [
        {
          id: 'piste_wenva_620_800_1000',
          fournisseur_declare:
            'Yangjiang Wenva Yuandong Industry Co., Ltd.',
          designation:
            'Cut-sheet laminator pour crackers',
          statut: 'annonce_publique_documentee',

          prix_annonce: {
            min: 35000,
            max: 45000,
            devise: 'USD',
            nature: 'fourchette_annonce_multivariantes',
            incoterm: null
          },

          source_url: SOURCE_WENVA_LAMINATEUR,
          date_source_consultee: dateConsultation,

          debit_kg_h_verifie: null,
          rouleaux_calibrage_inclus: null,

          fournisseur_confirme: false,
          prix_verifie: false,
          admissible_catalogue_p2i: false,

          variantes_documentees: [
            creerVarianteWenva(
              '620',
              '1990 x 1140 x 1960',
              2600
            ),
            creerVarianteWenva(
              '800',
              '2500 x 1240 x 1960',
              2800
            ),
            creerVarianteWenva(
              '1000',
              '2500 x 1240 x 1960',
              2900
            )
          ],

          notes:
            'Prix public documenté pour l’annonce générale, ' +
            'mais prix par variante et capacité réelle non confirmés.'
        },

        {
          id: 'piste_huaji_laminateur',
          fournisseur_declare: 'Guangdong Shunde Huaji',
          designation: 'Laminateur pour biscuits durs',
          statut: 'piste_a_documenter',

          prix_annonce: {
            min: 25000,
            max: 45000,
            devise: 'USD',
            nature: 'fourchette_historique_a_reverifier',
            incoterm: null
          },

          source_url: null,
          date_source_consultee: null,
          debit_kg_h_verifie: null,
          rouleaux_calibrage_inclus: null,
          compatibilite_crackers: 'non_demontree',

          fournisseur_confirme: false,
          prix_verifie: false,
          admissible_catalogue_p2i: false
        },

        {
          id: 'piste_dingson_laminateur',
          fournisseur_declare: 'Zhongshan Dingson',
          designation: 'Laminateur pour biscuits et crackers',
          statut: 'piste_a_documenter',

          prix_annonce: {
            min: 75000,
            max: 125000,
            devise: 'USD',
            nature: 'fourchette_historique_a_reverifier',
            incoterm: null
          },

          source_url: null,
          date_source_consultee: null,

          debit_annonce_kg_h: {
            min: 500,
            max: 2000
          },

          debit_kg_h_verifie: null,
          rouleaux_calibrage_inclus: null,

          fournisseur_confirme: false,
          prix_verifie: false,
          admissible_catalogue_p2i: false
        }
      ]
    },

    rouleaux_calibrage_biscuiterie: {
      nom: 'Rouleaux de calibrage',
      fonction: 'Calibrage final de l’épaisseur de pâte',
      configuration: [
        'biscuits_durs',
        'crackers'
      ],

      capacite_cible_kg_h: 500,
      achat_separe: 'a_confirmer',

      inclusion_possible: [
        'etaleuse_pate_biscuiterie',
        'laminateur_cracker_biscuiterie'
      ],

      note_documentaire:
        'La ligne complète Wenva distingue le laminateur ' +
        'des rouleaux de calibrage B/C/D. ' +
        'Cela ne confirme pas leur inclusion ou exclusion ' +
        'dans une offre commerciale de laminateur seul.',

      source_url: SOURCE_WENVA_LIGNE,
      modeles_candidats: []
    },

    decoupeuse_cracker_biscuiterie: {
      nom: 'Découpeuse à crackers',
      fonction: 'Découpe de la bande de pâte laminée',
      configuration: ['crackers'],
      capacite_cible_kg_h: 500,
      achat_separe: 'a_confirmer',
      modeles_candidats: []
    }
  };

  function copie(objet) {
    return JSON.parse(JSON.stringify(objet));
  }

  const api = Object.freeze({
    version: '0.2.0',
    up_id: 'biscuiterie',

    avertissement:
      'Référentiel pilote : modèles non encore validés ' +
      'pour le catalogue commercial P2I.',

    obtenirFamille: function (cle) {
      return familles[cle] ? copie(familles[cle]) : null;
    },

    obtenirToutes: function () {
      return copie(familles);
    }
  });

  global.P2I_BISCUITERIE_MODELES_CANDIDATS_PILOTE = api;

})(typeof window !== 'undefined' ? window : globalThis);
