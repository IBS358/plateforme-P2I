
/* P2I — Biscuiterie industrielle : pistes de référencement (pilote indépendant)
 * Version 0.1.0 — 2026-10-12
 * Aucun modèle ici n'est validé, aucun prix n'est vérifié.
 * Ce fichier ne modifie ni MODELS_DB, ni P2I_MODELS_DB_V2, ni Supabase.
 */
(function (global) {
  'use strict';

  const familles = {
    laminateur_cracker_biscuiterie: {
      nom: 'Laminateur pour crackers',
      fonction: 'Laminage de la pâte à crackers, avec couches selon recette',
      configuration: ['crackers'],
      capacite_cible_kg_h: 500,
      achat_separe: 'a_confirmer',
      interfaces_a_verifier: [
        'largeur utile',
        'épaisseur entrée/sortie',
        'nombre de couches',
        'vitesse',
        'liaison rouleaux de calibrage',
        'liaison découpeuse'
      ],
      modeles_candidats: [
        {
          id: 'piste_wenva_620_800_1000',
          fournisseur_declare: 'Yangjiang Wenva Yuandong',
          designation: 'Laminateur soda crackers — variantes 620 / 800 / 1000 (à distinguer)',
          statut: 'piste_a_documenter',
          prix_annonce: {
            min: 35000,
            max: 45000,
            devise: 'USD',
            nature: 'fourchette_mentionnee_non_verifiee',
            incoterm: null
          },
          source_url: null,
          date_source: null,
          debit_kg_h_verifie: null,
          rouleaux_calibrage_inclus: null,
          fournisseur_confirme: false,
          prix_verifie: false,
          admissible_catalogue_p2i: false,
          notes: 'Piste citée dans les échanges ; fiche fabricant, lien exact, variantes et périmètre de prix à contrôler.'
        },
        {
          id: 'piste_huaji_laminateur',
          fournisseur_declare: 'Guangdong Shunde Huaji',
          designation: 'Laminateur pour biscuits durs (compatibilité crackers non démontrée)',
          statut: 'piste_a_documenter',
          prix_annonce: {
            min: 25000,
            max: 45000,
            devise: 'USD',
            nature: 'fourchette_mentionnee_non_verifiee',
            incoterm: null
          },
          source_url: null,
          date_source: null,
          debit_kg_h_verifie: null,
          rouleaux_calibrage_inclus: null,
          fournisseur_confirme: false,
          prix_verifie: false,
          admissible_catalogue_p2i: false
        },
        {
          id: 'piste_dingson_laminateur',
          fournisseur_declare: 'Zhongshan Dingson',
          designation: 'Laminateur pour biscuits et crackers (référence exacte à établir)',
          statut: 'piste_a_documenter',
          prix_annonce: {
            min: 75000,
            max: 125000,
            devise: 'USD',
            nature: 'fourchette_mentionnee_non_verifiee',
            incoterm: null
          },
          source_url: null,
          date_source: null,
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
      configuration: ['biscuits_durs', 'crackers'],
      capacite_cible_kg_h: 500,
      achat_separe: 'a_confirmer',
      inclusion_possible: [
        'etaleuse_pate_biscuiterie',
        'laminateur_cracker_biscuiterie'
      ],
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

  const api = Object.freeze({
    version: '0.1.0',
    up_id: 'biscuiterie',
    avertissement: 'Pistes non vérifiées, non admissibles au catalogue commercial P2I.',

    obtenirFamille: function (cle) {
      return familles[cle]
        ? JSON.parse(JSON.stringify(familles[cle]))
        : null;
    },

    obtenirToutes: function () {
      return JSON.parse(JSON.stringify(familles));
    }
  });

  global.P2I_BISCUITERIE_MODELES_CANDIDATS_PILOTE = api;

})(typeof window !== 'undefined' ? window : globalThis);
