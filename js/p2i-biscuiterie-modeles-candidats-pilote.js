
/*
 * P2I — Biscuiterie industrielle
 * Référentiel de modèles candidats — pilote indépendant
 *
 * Version : 0.3.0
 * Date : 2026-10-12
 *
 * OBJECTIFS
 * - Documenter les modèles candidats.
 * - Distinguer données annoncées et données vérifiées.
 * - Éviter le double comptage des équipements intégrés.
 * - Préparer un référencement réutilisable par la P2I.
 *
 * SÉCURITÉ
 * - Aucun modèle n'est validé commercialement.
 * - Aucun prix n'est considéré comme confirmé.
 * - Aucun appel à Supabase.
 * - Aucune modification des catalogues existants.
 */

(function (global) {
  'use strict';

  const VERSION = '0.3.0';

  const SOURCES = {
    wenva_laminateur:
      'https://wenva668.en.made-in-china.com/product/gZuxksQTJJVe/China-Biscuit-Machine-Cut-Sheet-Laminator-with-Flour-Sprayer.html',

    wenva_ligne:
      'https://wenva668.en.made-in-china.com/product/aFeQECKHhtWl/China-Wenva-Delicious-Soda-Cracker-Production-Line.html'
  };

  const DATE_REFERENCE = '2026-10-12';

  function copier(objet) {
    return JSON.parse(JSON.stringify(objet));
  }

  /*
   * Statuts de référencement :
   *
   * piste_a_documenter
   * candidat_documente_non_valide
   * modele_valide
   *
   * Le statut modele_valide n'est attribué
   * à aucun modèle dans cette version.
   */

  function creerVarianteWenva(code, dimensions, poidsKg) {
    return {
      id: 'wenva_laminateur_' + code,

      marque: 'WENVA',

      fabricant_declare:
        'Yangjiang Wenva Yuandong Industry Co., Ltd.',

      designation: 'Cut-sheet laminator',

      variante: code,

      origine_declaree: 'Chine',

      fonction:
        'Laminage de pâte pour fabrication de crackers',

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

        nature:
          'fourchette_annonce_generale_multivariantes',

        prix_individuel_variante: null,

        incoterm: null,

        prix_public_documente: true,

        prix_variante_verifie: false,

        date_consultation: DATE_REFERENCE,

        source_url: SOURCES.wenva_laminateur
      },

      rouleaux_calibrage_inclus: null,

      convoyeurs_inclus: null,

      compatibilite_ligne_500kg_h: 'a_confirmer',

      statut: 'candidat_documente_non_valide',

      fournisseur_confirme: false,

      prix_verifie: false,

      admissible_catalogue_p2i: false,

      points_a_verifier: [
        'Référence commerciale exacte',
        'Capacité réelle en kg/h',
        'Largeur utile de travail',
        'Prix individuel de la variante',
        'Devise et incoterm',
        'Rouleaux de calibrage inclus ou séparés',
        'Convoyeurs inclus ou séparés',
        'Compatibilité avec la découpeuse',
        'Alimentation électrique',
        'Installation et mise en service',
        'Garantie et pièces de rechange',
        'Service après-vente'
      ],

      sources: [
        SOURCES.wenva_laminateur,
        SOURCES.wenva_ligne
      ]
    };
  }

  /*
   * FAMILLE 1
   * Laminateur pour crackers
   */

  const laminateur = {
    machine_ref: 'laminateur_cracker_biscuiterie',

    nom: 'Laminateur pour crackers',

    fonction:
      'Former les couches de pâte nécessaires au procédé de fabrication des crackers',

    configurations: ['crackers'],

    capacite_cible_kg_h: 500,

    importance: 'indispensable',

    achat_separe: 'a_confirmer',

    fonctions_a_verifier: [
      'Laminage de pâte',
      'Nombre de couches',
      'Réglage de l’épaisseur',
      'Transfert de la pâte',
      'Synchronisation avec le calibrage'
    ],

    modeles_candidats: [
      {
        id: 'piste_wenva_620_800_1000',

        fournisseur_declare:
          'Yangjiang Wenva Yuandong Industry Co., Ltd.',

        designation:
          'Cut-sheet laminator pour soda crackers',

        statut: 'candidat_documente_non_valide',

        prix_annonce: {
          min: 35000,
          max: 45000,
          devise: 'USD',

          nature:
            'fourchette_annonce_generale_multivariantes',

          incoterm: null
        },

        source_url: SOURCES.wenva_laminateur,

        date_source_consultee: DATE_REFERENCE,

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
          'Prix public annoncé pour plusieurs variantes. ' +
          'Le prix individuel, le débit réel et le ' +
          'périmètre de fourniture restent à confirmer.'
      },

      {
        id: 'piste_huaji_laminateur',

        fournisseur_declare:
          'Guangdong Shunde Huaji',

        designation:
          'Laminateur pour biscuits durs',

        statut: 'piste_a_documenter',

        prix_annonce: {
          min: 25000,
          max: 45000,
          devise: 'USD',

          nature:
            'fourchette_historique_a_reverifier',

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

        fournisseur_declare:
          'Zhongshan Dingson',

        designation:
          'Laminateur pour biscuits et crackers',

        statut: 'piste_a_documenter',

        prix_annonce: {
          min: 75000,
          max: 125000,
          devise: 'USD',

          nature:
            'fourchette_historique_a_reverifier',

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
  };

  /*
   * FAMILLE 2
   * Rouleaux de calibrage
   */

  const calibrage = {
    machine_ref: 'rouleaux_calibrage_biscuiterie',

    nom: 'Rouleaux de calibrage',

    fonction:
      'Obtenir une épaisseur régulière de la bande de pâte avant découpe',

    configurations: [
      'biscuits_durs',
      'crackers'
    ],

    capacite_cible_kg_h: 500,

    importance: 'indispensable',

    achat_separe: 'a_confirmer',

    inclusion_possible: [
      'etaleuse_pate_biscuiterie',
      'laminateur_cracker_biscuiterie'
    ],

    criteres_techniques: {
      largeur_utile_mm: null,

      epaisseur_min_mm: null,

      epaisseur_max_mm: null,

      nombre_paires_rouleaux: null,

      vitesse_reglable: null,

      synchronisation_ligne: null,

      debit_kg_h_verifie: null
    },

    questions_fournisseur: [
      'Les rouleaux de calibrage sont-ils inclus dans le laminateur ?',
      'Combien de paires de rouleaux sont nécessaires ?',
      'Quelle est la largeur utile ?',
      'Quelle est la plage de réglage de l’épaisseur ?',
      'Quelle est la capacité réelle en kg/h ?',
      'Les convoyeurs de liaison sont-ils inclus ?',
      'Quel est le prix si les rouleaux sont vendus séparément ?'
    ],

    note_documentaire:
      'Une présentation de ligne Wenva distingue le ' +
      'laminateur des rouleaux de calibrage B/C/D. ' +
      'Cette distinction ne prouve pas que les rouleaux ' +
      'soient exclus de toute offre de laminateur.',

    source_url: SOURCES.wenva_ligne,

    statut_referencement: 'modeles_a_rechercher',

    modeles_candidats: []
  };

  /*
   * FAMILLE 3
   * Découpeuse pour crackers
   */

  const decoupeuse = {
    machine_ref: 'decoupeuse_cracker_biscuiterie',

    nom: 'Découpeuse pour crackers',

    fonction:
      'Découper la bande de pâte laminée et calibrée aux dimensions des crackers',

    configurations: ['crackers'],

    capacite_cible_kg_h: 500,

    importance: 'indispensable',

    achat_separe: 'a_confirmer',

    criteres_techniques: {
      type_decoupe: null,

      largeur_utile_mm: null,

      dimensions_produits_mm: null,

      cadence_annoncee: null,

      debit_kg_h_verifie: null,

      recuperation_rognures: null,

      convoyeur_sortie_inclus: null,

      synchronisation_ligne: null
    },

    questions_fournisseur: [
      'Quel système de découpe est proposé ?',
      'Quelle est la largeur utile de travail ?',
      'Quelles dimensions de crackers sont réalisables ?',
      'Quelle est la cadence réelle pour notre recette ?',
      'Le retour des rognures est-il intégré ?',
      'Les convoyeurs de sortie sont-ils inclus ?',
      'La découpeuse est-elle synchronisable avec le laminateur ?',
      'Quel est le prix catalogue et son incoterm ?'
    ],

    statut_referencement: 'modeles_a_rechercher',

    modeles_candidats: []
  };

  /*
   * RÉFÉRENTIEL DES TROIS FAMILLES
   */

  const familles = {
    laminateur_cracker_biscuiterie: laminateur,

    rouleaux_calibrage_biscuiterie: calibrage,

    decoupeuse_cracker_biscuiterie: decoupeuse
  };

  /*
   * CONTRÔLE DES DOUBLES COMPTAGES
   *
   * Une fonction peut être nécessaire à la ligne
   * sans correspondre à un achat supplémentaire.
   *
   * inclus = équipement déjà fourni
   * separe = équipement à acquérir séparément
   * a_confirmer = information manquante
   */

  function analyserAchatSepare(statutInclusion) {
    if (statutInclusion === 'inclus') {
      return {
        achat_separe_requis: false,
        ajouter_prix_separe: false,
        statut: 'inclus',
        message:
          'Fonction assurée par un équipement déjà inclus.'
      };
    }

    if (statutInclusion === 'separe') {
      return {
        achat_separe_requis: true,
        ajouter_prix_separe: null,
        statut: 'separe',
        message:
          'Équipement séparé requis. Prix à vérifier avant chiffrage.'
      };
    }

    return {
      achat_separe_requis: null,
      ajouter_prix_separe: false,
      statut: 'a_confirmer',
      message:
        'Inclusion non confirmée : aucun coût supplémentaire automatique.'
    };
  }

  /*
   * CONTRÔLE D'ADMISSIBILITÉ COMMERCIALE
   *
   * Vérification conservatrice :
   * un modèle ne devient jamais automatiquement
   * validé du seul fait de posséder un prix annoncé.
   */

  function verifierAdmissibilite(modele) {
    if (!modele || typeof modele !== 'object') {
      return {
        admissible: false,
        motif: 'Modèle absent ou invalide'
      };
    }

    if (
      modele.fournisseur_confirme !== true ||
      modele.prix_verifie !== true ||
      modele.admissible_catalogue_p2i !== true
    ) {
      return {
        admissible: false,
        motif:
          'Fournisseur, prix ou validation commerciale non confirmés'
      };
    }

    return {
      admissible: true,
      motif:
        'Indicateurs de validation présents ; justificatifs à contrôler'
    };
  }

  /*
   * BILAN DOCUMENTAIRE
   */

  function obtenirBilan() {
    const listeFamilles = Object.values(familles);

    const candidats = listeFamilles.flatMap(
      famille => famille.modeles_candidats || []
    );

    const variantesWenva =
      laminateur.modeles_candidats[0]
        .variantes_documentees.length;

    return {
      version: VERSION,

      up_id: 'biscuiterie',

      familles: listeFamilles.length,

      pistes_fournisseurs: candidats.length,

      variantes_wenva: variantesWenva,

      modeles_commerciaux_valides:
        candidats.filter(
          modele => verifierAdmissibilite(modele).admissible
        ).length,

      familles_sans_modeles: listeFamilles
        .filter(
          famille => !famille.modeles_candidats.length
        )
        .map(famille => famille.machine_ref),

      avertissement:
        'Les modèles candidats ne sont pas encore ' +
        'validés pour le catalogue commercial P2I.'
    };
  }

  /*
   * API PUBLIQUE
   *
   * Lecture seule :
   * les objets retournés sont des copies.
   */

  const api = Object.freeze({
    version: VERSION,

    up_id: 'biscuiterie',

    obtenirFamille: function (cle) {
      return familles[cle]
        ? copier(familles[cle])
        : null;
    },

    obtenirToutes: function () {
      return copier(familles);
    },

    obtenirBilan: obtenirBilan,

    analyserAchatSepare: analyserAchatSepare,

    verifierAdmissibilite: verifierAdmissibilite
  });

  global.P2I_BISCUITERIE_MODELES_CANDIDATS_PILOTE = api;

})(typeof window !== 'undefined' ? window : globalThis);
