
/*
 * P2I — Biscuiterie industrielle
 * Référentiel de modèles candidats — pilote indépendant
 *
 * VERSION 0.4.0
 * DATE 2026-10-12
 *
 * Cette version :
 * - conserve les trois pistes de laminateurs ;
 * - conserve les trois variantes Wenva ;
 * - prépare le référencement du calibrage et de la découpe ;
 * - trace les sources et les informations manquantes ;
 * - évite le double comptage des équipements intégrés ;
 * - ne valide aucun prix ni modèle automatiquement.
 *
 * Aucune écriture dans Supabase.
 * Aucune modification des catalogues de production.
 */

(function (global) {
  'use strict';

  const VERSION = '0.4.0';
  const DATE_REFERENCE = '2026-10-12';

  const SOURCES = {
    wenva_laminateur:
      'https://wenva668.en.made-in-china.com/product/gZuxksQTJJVe/China-Biscuit-Machine-Cut-Sheet-Laminator-with-Flour-Sprayer.html',

    wenva_ligne:
      'https://wenva668.en.made-in-china.com/product/aFeQECKHhtWl/China-Wenva-Delicious-Soda-Cracker-Production-Line.html'
  };

  function copier(valeur) {
    return JSON.parse(JSON.stringify(valeur));
  }

  /*
   * Les données Wenva ci-dessous proviennent des
   * informations précédemment enregistrées.
   *
   * Elles restent déclaratives et doivent être
   * confirmées avant toute validation commerciale.
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
        'Débit réel en kg/h',
        'Largeur utile',
        'Prix individuel de la variante',
        'Incoterm',
        'Rouleaux de calibrage inclus ou séparés',
        'Convoyeurs inclus ou séparés',
        'Compatibilité avec la découpeuse',
        'Installation et mise en service',
        'Garantie et SAV'
      ],

      sources: [
        SOURCES.wenva_laminateur,
        SOURCES.wenva_ligne
      ]
    };
  }

  /*
   * FAMILLE 1 — LAMINATEUR CRACKERS
   */

  const laminateur = {
    machine_ref: 'laminateur_cracker_biscuiterie',

    nom: 'Laminateur pour crackers',

    fonction:
      'Former les couches de pâte nécessaires à la fabrication des crackers',

    configuration: ['crackers'],
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

    interfaces_a_verifier: [
      'Largeur utile',
      'Épaisseur entrée et sortie',
      'Vitesse de fonctionnement',
      'Rouleaux de calibrage',
      'Découpeuse',
      'Convoyeurs de liaison'
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
          'Prix annoncé pour plusieurs variantes. ' +
          'Prix individuel et débit réel à confirmer.'
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

        fournisseur_declare: 'Zhongshan Dingson',

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
   * FAMILLE 2 — ROULEAUX DE CALIBRAGE
   *
   * Les rouleaux peuvent être fournis séparément
   * ou intégrés à un autre équipement.
   *
   * Aucun modèle commercial suffisamment documenté
   * n'est encore enregistré.
   */

  const calibrage = {
    machine_ref: 'rouleaux_calibrage_biscuiterie',

    nom: 'Rouleaux de calibrage',

    fonction:
      'Obtenir une épaisseur régulière de la bande de pâte avant découpe',

    configuration: [
      'biscuits_durs',
      'crackers'
    ],

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

    criteres_referencement: {
      fabricant_identifie: false,
      modele_identifie: false,
      documentation_technique: false,
      prix_public_verifiable: false,
      debit_500kg_h_demontre: false,
      perimetre_fourniture_confirme: false
    },

    points_a_verifier: [
      'Référence exacte du fabricant',
      'Nombre de paires de rouleaux',
      'Largeur utile de travail',
      'Épaisseur minimale et maximale',
      'Réglage de la vitesse',
      'Capacité réelle pour la recette retenue',
      'Compatibilité avec le laminateur',
      'Compatibilité avec la découpeuse',
      'Présence de convoyeurs',
      'Prix public et incoterm',
      'Garantie et pièces de rechange'
    ],

    questions_fournisseur: [
      'Les rouleaux sont-ils inclus dans le laminateur ?',
      'Combien de paires sont nécessaires ?',
      'Quelle est la largeur utile ?',
      'Quelle est la plage d’épaisseur ?',
      'Quelle est la capacité réelle en kg/h ?',
      'Les convoyeurs sont-ils inclus ?',
      'Quel est le prix si vendus séparément ?'
    ],

    note_documentaire:
      'La présentation de la ligne Wenva distingue ' +
      'le laminateur des rouleaux de calibrage B/C/D. ' +
      'Le périmètre exact des offres reste à confirmer.',

    source_url: SOURCES.wenva_ligne,

    statut_referencement: 'modeles_a_rechercher',

    modeles_candidats: []
  };

  /*
   * FAMILLE 3 — DÉCOUPEUSE CRACKERS
   *
   * La découpe doit être adaptée à la bande de pâte
   * et à la cadence réelle de la ligne.
   *
   * Aucun modèle commercial suffisamment documenté
   * n'est encore enregistré.
   */

  const decoupeuse = {
    machine_ref: 'decoupeuse_cracker_biscuiterie',

    nom: 'Découpeuse pour crackers',

    fonction:
      'Découper la bande de pâte laminée et calibrée aux dimensions des crackers',

    configuration: ['crackers'],
    configurations: ['crackers'],

    capacite_cible_kg_h: 500,
    importance: 'indispensable',

    achat_separe: 'a_confirmer',

    inclusion_possible: [
      'ligne_complete_crackers'
    ],

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

    criteres_referencement: {
      fabricant_identifie: false,
      modele_identifie: false,
      documentation_technique: false,
      prix_public_verifiable: false,
      debit_500kg_h_demontre: false,
      perimetre_fourniture_confirme: false
    },

    points_a_verifier: [
      'Référence exacte du fabricant',
      'Principe de découpe',
      'Largeur utile',
      'Dimensions possibles des crackers',
      'Cadence réelle',
      'Compatibilité avec la pâte laminée',
      'Système de piquage éventuel',
      'Retour des rognures',
      'Convoyeur de sortie',
      'Synchronisation avec le four',
      'Prix public et incoterm',
      'Garantie et maintenance'
    ],

    questions_fournisseur: [
      'Quel système de découpe est proposé ?',
      'Quelle est la largeur utile ?',
      'Quelles dimensions de crackers sont possibles ?',
      'Quelle cadence est réalisable ?',
      'Le système de piquage est-il inclus ?',
      'Le retour des rognures est-il intégré ?',
      'Les convoyeurs sont-ils inclus ?',
      'La machine est-elle synchronisable avec la ligne ?',
      'Quel est le prix catalogue ?'
    ],

    statut_referencement: 'modeles_a_rechercher',

    modeles_candidats: []
  };

  /*
   * RÉFÉRENTIEL
   */

  const familles = {
    laminateur_cracker_biscuiterie: laminateur,
    rouleaux_calibrage_biscuiterie: calibrage,
    decoupeuse_cracker_biscuiterie: decoupeuse
  };

  /*
   * RÈGLES DE DOUBLE COMPTAGE
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
   * CONTRÔLE D'ADMISSIBILITÉ
   *
   * Les indicateurs sont conservateurs.
   * Une validation documentaire humaine reste requise.
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
        'Indicateurs présents : justificatifs à contrôler'
    };
  }

  /*
   * FICHE DE CONTRÔLE POUR UN NOUVEAU MODÈLE
   *
   * Permet de préparer les prochaines références
   * sans leur attribuer de données fictives.
   */

  function creerFicheCandidate(machineRef) {
    if (!familles[machineRef]) {
      return null;
    }

    return {
      machine_ref: machineRef,

      id: null,
      fabricant: null,
      fournisseur: null,
      marque: null,
      modele: null,
      pays_origine: null,

      caracteristiques_techniques: {
        capacite_annoncee_kg_h: null,
        capacite_verifiee_kg_h: null,
        largeur_utile_mm: null,
        puissance_kw: null,
        dimensions_mm: null,
        poids_kg: null
      },

      equipements_inclus: {
        rouleaux_calibrage: null,
        convoyeurs: null,
        retour_rognures: null,
        autres: []
      },

      prix_reference: {
        montant: null,
        devise: null,
        incoterm: null,
        source_url: null,
        date_source: null,
        prix_public_documente: false
      },

      fournisseur_confirme: false,
      prix_verifie: false,
      debit_500kg_h_valide: false,

      statut: 'piste_a_documenter',
      admissible_catalogue_p2i: false,

      observations: []
    };
  }

  /*
   * BILAN DU RÉFÉRENCEMENT
   */

  function obtenirBilan() {
    const listeFamilles = Object.values(familles);

    const candidats = listeFamilles.flatMap(
      famille => famille.modeles_candidats || []
    );

    return {
      version: VERSION,
      up_id: 'biscuiterie',

      familles: listeFamilles.length,
      pistes_fournisseurs: candidats.length,

      variantes_wenva:
        laminateur.modeles_candidats[0]
          .variantes_documentees.length,

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
        'Référentiel pilote. Aucun modèle commercial ' +
        'n’est encore validé pour intégration P2I.'
    };
  }

  /*
   * API PUBLIQUE — LECTURE SEULE
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

    verifierAdmissibilite: verifierAdmissibilite,

    creerFicheCandidate: creerFicheCandidate
  });

  global.P2I_BISCUITERIE_MODELES_CANDIDATS_PILOTE = api;

})(typeof window !== 'undefined' ? window : globalThis);
