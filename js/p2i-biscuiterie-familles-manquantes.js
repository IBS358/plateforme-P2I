
/*
 * P2I — Référentiel complémentaire Biscuiterie
 * Version 1.1.0
 *
 * Module indépendant, en lecture seule.
 * Aucune modification des catalogues ou de Supabase.
 *
 * Les caractéristiques ci-dessous sont des critères
 * de vérification, pas des performances garanties.
 */

(function (root) {
  "use strict";

  const familles = {

    convoyeur_sortie_four_biscuiterie: {
      nom: "Convoyeur de sortie du four",
      configurations: [
        "biscuits_mous",
        "biscuits_durs",
        "crackers"
      ],
      importance: "indispensable",
      fonction:
        "Assurer le transfert des biscuits à la sortie du four vers le refroidissement.",
      caracteristiques_a_verifier: [
        "Largeur utile du convoyeur",
        "Vitesse réglable",
        "Résistance à la température des produits",
        "Compatibilité avec la sortie du four",
        "Compatibilité avec le refroidisseur",
        "Conditions d'hygiène et de nettoyage"
      ],
      inclusion_possible:
        "Peut être intégré au four ou au système de refroidissement.",
      controle_double_comptage: true,
      prix_verifie: false,
      modele_valide: false
    },

    empileur_biscuiterie: {
      nom: "Système d'alignement / empilage",
      configurations: [
        "biscuits_mous",
        "biscuits_durs",
        "crackers"
      ],
      importance: "recommended",
      fonction:
        "Aligner, organiser ou empiler les biscuits avant conditionnement, selon le procédé.",
      caracteristiques_a_verifier: [
        "Formats et dimensions des biscuits",
        "Cadence de traitement",
        "Fragilité des produits",
        "Compatibilité avec l'emballeuse",
        "Niveau d'automatisation",
        "Réglages et changements de format"
      ],
      inclusion_possible:
        "Peut être intégré à l'alimentation de l'emballeuse.",
      controle_double_comptage: true,
      prix_verifie: false,
      modele_valide: false
    },

    rouleaux_calibrage_biscuiterie: {
      nom: "Rouleaux de calibrage",
      configurations: [
        "biscuits_durs",
        "crackers"
      ],
      importance: "indispensable",
      fonction:
        "Réduire et régulariser l'épaisseur de la bande de pâte avant découpe.",
      caracteristiques_a_verifier: [
        "Largeur de travail",
        "Plage d'épaisseur de pâte",
        "Réglage de l'écartement des rouleaux",
        "Débit de pâte admissible",
        "Compatibilité avec le laminateur ou l'étaleuse",
        "Nettoyage et sécurité des opérateurs"
      ],
      inclusion_possible:
        "Peut être intégré à une étaleuse ou à un laminateur.",
      controle_double_comptage: true,
      prix_verifie: false,
      modele_valide: false
    },

    retour_rognures_biscuiterie: {
      nom: "Convoyeur de retour des rognures",
      configurations: [
        "biscuits_durs",
        "crackers"
      ],
      importance: "recommended",
      fonction:
        "Récupérer les chutes de pâte après découpe et les acheminer vers le point de réintroduction prévu.",
      caracteristiques_a_verifier: [
        "Quantité de rognures à transporter",
        "Compatibilité avec la texture de pâte",
        "Distance et implantation du circuit",
        "Point de réintroduction",
        "Hygiène et prévention des contaminations",
        "Compatibilité avec le système de découpe"
      ],
      inclusion_possible:
        "Peut être intégré au système de découpe ou à la ligne de préparation de pâte.",
      controle_double_comptage: true,
      prix_verifie: false,
      modele_valide: false
    },

    laminateur_cracker_biscuiterie: {
      nom: "Laminateur pour crackers",
      configurations: ["crackers"],
      importance: "indispensable",
      fonction:
        "Former les couches de pâte nécessaires au procédé de fabrication des crackers retenu.",
      caracteristiques_a_verifier: [
        "Type de crackers et procédé de laminage",
        "Nombre de couches réalisables",
        "Largeur utile",
        "Débit réel de pâte",
        "Épaisseur de pâte en entrée et en sortie",
        "Compatibilité avec les rouleaux de calibrage",
        "Puissance électrique et encombrement"
      ],
      inclusion_possible:
        "Peut inclure certains rouleaux de calibrage.",
      controle_double_comptage: true,
      prix_verifie: false,
      modele_valide: false
    },

    decoupeuse_cracker_biscuiterie: {
      nom: "Découpeuse à crackers",
      configurations: ["crackers"],
      importance: "indispensable",
      fonction:
        "Découper et former les crackers dans la bande de pâte avant cuisson.",
      caracteristiques_a_verifier: [
        "Type de découpe et de perforation",
        "Dimensions et formes des crackers",
        "Largeur de travail",
        "Cadence de production",
        "Compatibilité avec la bande de pâte",
        "Système d'évacuation des rognures",
        "Compatibilité avec l'alimentation du four"
      ],
      inclusion_possible:
        "Peut intégrer la récupération initiale des rognures.",
      controle_double_comptage: true,
      prix_verifie: false,
      modele_valide: false
    },

    deposeuse_cookie_biscuiterie: {
      nom: "Déposeuse / formeuse à cookies",
      configurations: ["biscuits_mous"],
      importance: "conditional",
      choice_group: "formage_biscuits_mous",
      fonction:
        "Déposer ou former des portions de pâte à biscuits mous sur un support de cuisson, selon le procédé retenu.",
      caracteristiques_a_verifier: [
        "Type de pâte accepté : souple, semi-liquide ou autre",
        "Principe de formage : dépôt, extrusion ou dosage",
        "Poids et dimensions des portions",
        "Cadence réelle en kg/h et en pièces/minute",
        "Précision et régularité du dosage",
        "Largeur utile de travail",
        "Compatibilité avec les plaques ou le convoyeur de cuisson",
        "Facilité de nettoyage et changements de recette",
        "Puissance électrique et éventuel besoin en air comprimé"
      ],
      inclusion_possible:
        "Peut intégrer un système de dosage, un convoyeur ou un dispositif de transfert vers la cuisson.",
      controle_double_comptage: true,
      prix_verifie: false,
      modele_valide: false,
      remarque:
        "Alternative à la mouleuse rotative. Le choix dépend du type de pâte et du biscuit recherché. Ne pas additionner automatiquement les deux machines."
    }

  };

  function copier(valeur) {
    return JSON.parse(JSON.stringify(valeur));
  }

  function obtenirFamille(machineKey) {
    if (!Object.prototype.hasOwnProperty.call(familles, machineKey)) {
      return null;
    }

    return copier(familles[machineKey]);
  }

  function obtenirParConfiguration(configurationId) {
    const resultat = {};

    Object.keys(familles).forEach(function (cle) {
      if (familles[cle].configurations.includes(configurationId)) {
        resultat[cle] = copier(familles[cle]);
      }
    });

    return resultat;
  }

  function obtenirToutes() {
    return copier(familles);
  }

  root.P2I_BISCUITERIE_FAMILLES_MANQUANTES =
    Object.freeze({
      version: "1.1.0",
      obtenirFamille: obtenirFamille,
      obtenirParConfiguration: obtenirParConfiguration,
      obtenirToutes: obtenirToutes
    });

})(window);

