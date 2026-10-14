
/*
 * P2I — Moteur financier commun v0.1.0
 * USD, annuel, hors TVA récupérable.
 * Simulation de gestion, pas un état SYSCOHADA certifié.
 * Aucun montant manquant n'est implicitement remplacé par zéro.
 */
(function (root) {
  'use strict';

  const TYPES = [
    'fabrication',
    'assemblage',
    'services',
    'mixte'
  ];

  const POSTES = Object.freeze({
    couts_directs: [
      'matieres',
      'composants',
      'emballages',
      'energie_directe',
      'sous_traitance_directe',
      'personnel_direct',
      'maintenance_directe',
      'autres_directs'
    ],

    exploitation: [
      'marketing',
      'prospection',
      'commissions',
      'distribution',
      'loyers',
      'assurances',
      'telecom_informatique',
      'honoraires',
      'administration',
      'personnel_administratif_commercial',
      'taxes_exploitation',
      'autres_exploitation'
    ],

    dotations: [
      'amortissements',
      'depreciations_provisions'
    ],

    financier: [
      'produits_financiers',
      'interets_emprunts',
      'autres_charges_financieres'
    ],

    fiscal: [
      'impot_resultat'
    ]
  });

  const STATUTS = [
    'documente',
    'estime_p2i',
    'a_renseigner'
  ];

  function montant(v, nom) {
    if (
      typeof v !== 'number' ||
      !Number.isFinite(v) ||
      v < 0
    ) {
      throw new Error(
        nom + ' : montant USD positif ou nul requis.'
      );
    }

    return v;
  }

  function poste(v, nom) {
    if (v == null) {
      return {
        montant_usd: null,
        statut: 'a_renseigner',
        source: null
      };
    }

    if (typeof v === 'number') {
      throw new Error(
        nom + ' : fournir {montant_usd, statut, source}, pas un nombre nu.'
      );
    }

    if (
      !v ||
      typeof v !== 'object' ||
      !STATUTS.includes(v.statut)
    ) {
      throw new Error(nom + ' : statut invalide.');
    }

    if (v.statut === 'a_renseigner') {
      if (v.montant_usd != null) {
        throw new Error(
          nom + ' : montant interdit si à renseigner.'
        );
      }

      return {
        montant_usd: null,
        statut: v.statut,
        source: v.source || null
      };
    }

    if (!v.source || typeof v.source !== 'string') {
      throw new Error(nom + ' : source obligatoire.');
    }

    return {
      montant_usd: montant(v.montant_usd, nom),
      statut: v.statut,
      source: v.source
    };
  }

  function addition(valeurs) {
    return valeurs.some(v => v == null)
      ? null
      : valeurs.reduce((a, b) => a + b, 0);
  }

  function calculer(d) {
    if (
      !d ||
      typeof d !== 'object' ||
      !TYPES.includes(d.type_activite)
    ) {
      throw new Error('Type d’activité invalide.');
    }

    if (!Array.isArray(d.lignes) || !d.lignes.length) {
      throw new Error(
        'Au moins une ligne d’activité est nécessaire.'
      );
    }

    const ids = new Set();

    const lignes = d.lignes.map((l, i) => {
      if (!l || typeof l !== 'object') {
        throw new Error('Ligne ' + i + ' invalide.');
      }

      const id = String(l.id || '').trim();

      if (!id || ids.has(id)) {
        throw new Error(
          'Identifiant de ligne absent ou dupliqué : ' + id
        );
      }

      ids.add(id);

      if (!TYPES.slice(0, 3).includes(l.type_activite)) {
        throw new Error('Type de ligne invalide : ' + id);
      }

      if (
        d.type_activite !== 'mixte' &&
        l.type_activite !== d.type_activite
      ) {
        throw new Error(
          'Type de ligne incompatible : ' + id
        );
      }

      const ca = poste(
        l.chiffre_affaires,
        id + '.chiffre_affaires'
      );

      const cpv = poste(
        l.cout_prestations_ou_produits_vendus,
        id + '.cout_prestations_ou_produits_vendus'
      );

      const variation = poste(
        l.variation_stock,
        id + '.variation_stock'
      );

      if (
        l.type_activite === 'services' &&
        variation.montant_usd !== null
      ) {
        throw new Error(
          'Services : aucune variation de stock physique automatique. ' +
          'Traiter les travaux en cours séparément.'
        );
      }

      /*
       * Le coût des ventes est déjà agrégé.
       * Les coûts directs détaillés servent au contrôle :
       * ils ne sont PAS déduits une deuxième fois.
       */
      const details = {};

      for (const k of POSTES.couts_directs) {
        details[k] = poste(
          l.details_couts_directs?.[k],
          id + '.' + k
        );
      }

      return {
        id,
        type_activite: l.type_activite,
        chiffre_affaires: ca,
        cout_prestations_ou_produits_vendus: cpv,
        variation_stock: variation,
        details_couts_directs: details,

        marge_industrielle_ou_sur_prestations_usd:
          ca.montant_usd === null ||
          cpv.montant_usd === null
            ? null
            : ca.montant_usd - cpv.montant_usd
      };
    });

    const autres = {};

    for (const [groupe, noms] of Object.entries(POSTES)) {
      if (groupe === 'couts_directs') continue;

      autres[groupe] = {};

      for (const nom of noms) {
        autres[groupe][nom] = poste(
          d.postes?.[nom],
          nom
        );
      }
    }

    /*
     * Les charges d'exploitation ne doivent pas
     * inclure une deuxième fois les coûts des ventes.
     *
     * Une confirmation explicite est requise.
     */
    const separation =
      d.controle_non_double_compte === true;

    const caTotal = addition(
      lignes.map(l => l.chiffre_affaires.montant_usd)
    );

    const coutVentes = addition(
      lignes.map(
        l => l.cout_prestations_ou_produits_vendus.montant_usd
      )
    );

    const marge =
      caTotal === null || coutVentes === null
        ? null
        : caTotal - coutVentes;

    const exploitation = addition(
      Object.values(autres.exploitation)
        .map(p => p.montant_usd)
    );

    const dotations = addition(
      Object.values(autres.dotations)
        .map(p => p.montant_usd)
    );

    const resultatExploitation =
      separation &&
      marge !== null &&
      exploitation !== null &&
      dotations !== null
        ? marge - exploitation - dotations
        : null;

    const financier = autres.financier;

    const resultatFinancier =
      addition([
        financier.produits_financiers.montant_usd,
        financier.interets_emprunts.montant_usd,
        financier.autres_charges_financieres.montant_usd
      ]) === null
        ? null
        : financier.produits_financiers.montant_usd -
          financier.interets_emprunts.montant_usd -
          financier.autres_charges_financieres.montant_usd;

    const avantImpot =
      resultatExploitation !== null &&
      resultatFinancier !== null
        ? resultatExploitation + resultatFinancier
        : null;

    const impot =
      autres.fiscal.impot_resultat.montant_usd;

    const net =
      avantImpot !== null && impot !== null
        ? avantImpot - impot
        : null;

    const manquants = [];

    for (const l of lignes) {
      if (l.chiffre_affaires.montant_usd === null) {
        manquants.push(l.id + '.chiffre_affaires');
      }

      if (
        l.cout_prestations_ou_produits_vendus.montant_usd === null
      ) {
        manquants.push(
          l.id + '.cout_prestations_ou_produits_vendus'
        );
      }
    }

    for (const groupe of Object.values(autres)) {
      for (const [nom, p] of Object.entries(groupe)) {
        if (p.montant_usd === null) {
          manquants.push(nom);
        }
      }
    }

    if (!separation) {
      manquants.push('controle_non_double_compte');
    }

    return {
      version: '0.1.0',
      devise: 'USD',
      type_activite: d.type_activite,

      lignes,
      postes: autres,

      chiffre_affaires_total_usd: caTotal,
      cout_ventes_total_usd: coutVentes,

      marge_industrielle_ou_sur_prestations_usd: marge,

      autres_charges_exploitation_usd: exploitation,
      dotations_usd: dotations,

      resultat_exploitation_usd: resultatExploitation,
      resultat_financier_usd: resultatFinancier,

      resultat_avant_impot_usd: avantImpot,
      resultat_net_usd: net,

      complet:
        net !== null && manquants.length === 0,

      postes_a_renseigner: manquants,

      avertissement:
        'Simulation de gestion provisoire. ' +
        'Valorisation des stocks, charges et classification ' +
        'SYSCOHADA à justifier. ' +
        'Aucun poste manquant n’est assimilé à zéro.'
    };
  }

  // ============================================
  // P2I — CALCUL AUTOMATIQUE DES POSTES FINANCIERS
  // ============================================

  function calculerPosteAutomatique(regle, donnees) {
    if (!regle || typeof regle !== "object") {
      throw new Error("Règle financière P2I manquante.");
    }

    const methode = regle.methode;
    const d = donnees || {};

    function verifier(v, nom) {
      if (
        typeof v !== "number" ||
        !Number.isFinite(v) ||
        v < 0
      ) {
        throw new Error(
          "Valeur manquante ou invalide : " + nom
        );
      }
      return v;
    }

    let resultat;

    switch (methode) {

      case "pourcentage_ca":
        resultat =
          verifier(d.chiffre_affaires_usd, "CA") *
          verifier(regle.taux, "taux");
        break;

      case "pourcentage_base":
        resultat =
          verifier(d.base_usd, "base") *
          verifier(regle.taux, "taux");
        break;

      case "quantite_tarif":
        resultat =
          verifier(d.quantite, "quantite") *
          verifier(d.tarif_unitaire_usd, "tarif");
        break;

      case "effectif_salaire":
        resultat =
          verifier(d.effectif, "effectif") *
          verifier(d.cout_annuel_salarial_usd, "salaire");
        break;

      case "montant_periodique":
        resultat =
          verifier(d.montant_periode_usd, "montant") *
          verifier(d.nombre_periodes, "periodes");
        break;

      case "amortissement_lineaire":
        const valeur =
          verifier(d.valeur_amortissable_usd, "valeur");

        const duree =
          verifier(d.duree_ans, "duree");

        if (duree === 0) {
          throw new Error("Durée d'amortissement nulle.");
        }

        resultat = valeur / duree;
        break;

      case "interets_simples":
        resultat =
          verifier(d.encours_moyen_usd, "encours") *
          verifier(d.taux_annuel, "taux");
        break;

      case "montant_documente":
        resultat =
          verifier(d.montant_usd, "montant");
        break;

      default:
        throw new Error(
          "Méthode financière inconnue : " + methode
        );
    }

    return {
      montant_usd: resultat,
      statut: regle.statut || "estime_p2i",
      source: regle.source || "reference_p2i",
      methode: methode
    };
  }

  // ============================================
  // P2I — COMPTE DE RÉSULTAT AUTOMATIQUE v0.3
  // ============================================

  function calculerCompteResultatAutomatique(configuration) {
    if (!configuration || typeof configuration !== "object") {
      throw new Error("Configuration financière P2I manquante.");
    }

    const {
      type_activite,
      lignes,
      regles = {},
      donnees = {},
      postes_manuels = {},
      postes_deja_inclus = []
    } = configuration;

    const postes = { ...postes_manuels };
    const calculs = {};
    const controles = [];

    const nomsAutorises = [
      ...POSTES.exploitation,
      ...POSTES.dotations,
      ...POSTES.financier,
      ...POSTES.fiscal
    ];

    for (const nom of Object.keys(regles)) {
      if (!nomsAutorises.includes(nom)) {
        throw new Error("Poste financier inconnu : " + nom);
      }
    }

    for (const nom of Object.keys(postes)) {
      if (!nomsAutorises.includes(nom)) {
        throw new Error("Poste manuel inconnu : " + nom);
      }
    }

    for (const nom of postes_deja_inclus) {
      if (!nomsAutorises.includes(nom)) {
        throw new Error("Poste déjà inclus inconnu : " + nom);
      }

      if (regles[nom] || postes[nom] != null) {
        throw new Error(
          "Double comptabilisation potentielle : " + nom
        );
      }

      postes[nom] = {
        montant_usd: 0,
        statut: "documente",
        source: "Déjà inclus dans les coûts des ventes"
      };

      controles.push({
        poste: nom,
        controle: "deja_inclus",
        montant_supplementaire_usd: 0
      });
    }

    for (const [nom, regle] of Object.entries(regles)) {
      if (postes[nom] != null) {
        throw new Error(
          "Poste défini deux fois : " + nom
        );
      }

      const resultat = calculerPosteAutomatique(
        regle,
        donnees[nom]
      );

      if (!STATUTS.includes(resultat.statut) ||
          resultat.statut === "a_renseigner") {
        throw new Error(
          "Statut calculé invalide : " + nom
        );
      }

      postes[nom] = resultat;
      calculs[nom] = resultat;
    }

    const resultat = calculer({
      type_activite,
      lignes,
      postes,
      controle_non_double_compte: true
    });

    return {
      ...resultat,
      version_automatisation: "0.3.0",
      calculs_automatiques: calculs,
      controles_double_compte: controles
    };
  }

  root.P2I_FINANCIAL_ENGINE = Object.freeze({
  calculer,
  calculerPosteAutomatique,
  calculerCompteResultatAutomatique,
  POSTES,
  TYPES: Object.freeze(TYPES),
  STATUTS: Object.freeze(STATUTS)
});

})(
  typeof window !== 'undefined'
    ? window
    : globalThis
);

