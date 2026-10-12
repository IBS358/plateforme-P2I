
/* P2I - Referentiel Biscuiterie pilote - v1.2.0
   Donnees documentaires, non encore utilisables pour chiffrer un BP.
   Aucun appel Supabase. Aucun prix attribue a QH-600.
*/
(function () {
  'use strict';
  const SOURCE_PRIX = 'https://fliphtml5.com/hhabw/zsvb/Cookie_Machine/';
  const SOURCE_CAPACITE = 'https://www.qhbake.ltd/products/--biscuit-production-line';
  const dateConsultation = '2026-10-12';
  const catalogue = [
    ['mixeur_100kg_farine', 'Melangeur 100 kg de farine', 4300, 'melangeur_biscuiterie'],
    ['formeuse_rotative_durs', 'Formeuse-decoupeuse rotative (biscuits durs)', 13680, 'decoupeuse_cracker'],
    ['formeuse_rotative_mous', 'Formeuse rotative (biscuits mous)', 10360, null],
    ['convoyeur_entree', 'Convoyeur entree four', 5700, 'convoyeur_entree_four'],
    ['four_gaz_30m', 'Four tunnel gaz 30 m', 73000, 'four_tunnel_biscuiterie'],
    ['convoyeur_sortie', 'Convoyeur sortie four', 7200, 'convoyeur_sortie_four'],
    ['armoire_electrique', 'Armoire electrique', 6800, null],
    ['pulverisateur_huile', 'Pulverisateur huile', 6900, null],
    ['retour_180', 'Convoyeur retour 180 degres', 5800, null],
    ['refroidisseur_15m', 'Convoyeur refroidissement 15 m', 4200, 'refroidisseur_biscuiterie'],
    ['empileuse_table', 'Empileuse et table de conditionnement', 6800, null],
    ['fourreuse', 'Machine biscuits fourres', 8800, null],
    ['conditionneuse', 'Conditionneuse biscuits', 8480, 'conditionneuse_biscuiterie']
  ].map(function (r) {
    return {
      reference_documentaire: 'QHB-400/' + r[0],
      designation: r[1],
      prix_usd: r[2],
      machine_key_potentielle: r[3],
      fournisseur: 'QHBake',
      pays: 'Chine',
      gamme_source: 'QHB-400',
      incoterm: 'EXW usine',
      source_url: SOURCE_PRIX,
      date_consultation: dateConsultation,
      statut: 'prix_publie_non_valide_pour_crackers_500kg_h',
      commentaire: 'Prix de la liste QHB-400, non transposable automatiquement a QH-600.'
    };
  });

  const fonctionsCrackers = [
    ['melangeur_biscuiterie', 'Melangeur / petrin industriel'],
    ['alimentation_pate_cracker', 'Alimentation et transfert de pate'],
    ['prelaminoir_cracker', 'Pre-laminoir / mise en nappe'],
    ['laminateur_cracker', 'Laminateur crackers'],
    ['rouleaux_calibrage', 'Rouleaux de calibrage'],
    ['decoupeuse_cracker', 'Decoupeuse rotative crackers'],
    ['retour_rognures', 'Retour des rognures'],
    ['convoyeur_entree_four', 'Convoyeur entree four'],
    ['four_tunnel_biscuiterie', 'Four tunnel'],
    ['convoyeur_sortie_four', 'Convoyeur sortie four'],
    ['refroidisseur_biscuiterie', 'Convoyeur de refroidissement'],
    ['conditionneuse_biscuiterie', 'Conditionneuse / emballeuse']
  ].map(function (r) {
    return {
      machine_key: r[0], machine_nom: r[1],
      modele_id: null, modele_nom: null, fournisseur: null,
      capacite: { valeur: null, unite: 'kg/h', statut: 'a_verifier' },
      prix_reference: {
        montant: null, devise: 'USD', incoterm: null,
        statut: 'non_verifie_pour_la_configuration',
        source_url: null, date_verification: null
      },
      fonctions_incluses: [r[0]],
      statut: 'a_referencer'
    };
  });

  const referentiel = {
    version: '1.2.0', up_id: 'biscuiterie',
    up_nom: 'Biscuiterie industrielle', devise: 'USD',
    configurations: {
      biscuits_mous: {
        configuration_id: 'biscuits_mous', nom: 'Biscuits mous',
        capacite_cible: { valeur: 500, unite: 'kg/h', statut: 'non_validee' },
        machines: [], statut: 'inventaire_a_etablir'
      },
      biscuits_durs: {
        configuration_id: 'biscuits_durs', nom: 'Biscuits durs',
        capacite_cible: { valeur: 500, unite: 'kg/h', statut: 'non_validee' },
        machines: [], statut: 'inventaire_a_etablir'
      },
      crackers: {
        configuration_id: 'crackers', nom: 'Crackers',
        capacite_cible: { valeur: 500, unite: 'kg/h', statut: 'non_validee' },
        machines: fonctionsCrackers,
        statut: 'referencement_technique_et_commercial_incomplet'
      }
    },
    references_documentaires: catalogue,
    ligne_comparative: {
      fabricant: 'QHBake', modele: 'QH-600',
      capacite_annoncee_kg_h: 500,
      source_url: SOURCE_CAPACITE,
      prix_usd: null,
      statut: 'capacite_annoncee_prix_inconnu_compatibilite_crackers_a_confirmer'
    }
  };

  function copie(x) { return JSON.parse(JSON.stringify(x)); }
  function getConfiguration(id) {
    return referentiel.configurations[id] ? copie(referentiel.configurations[id]) : null;
  }
  function getMachinesValidees(id) {
    const c = referentiel.configurations[id];
    return c ? copie(c.machines.filter(function (m) {
      return m.statut === 'valide_bp' && m.prix_reference &&
        m.prix_reference.statut === 'verifie' &&
        Number.isFinite(m.prix_reference.montant) &&
        m.prix_reference.montant > 0 &&
        m.prix_reference.devise === 'USD';
    })) : [];
  }
  function calculerBudgetMachines(id) {
    const c = referentiel.configurations[id];
    if (!c) return { erreur: 'Configuration introuvable' };
    const valides = getMachinesValidees(id);
    const complet = c.machines.length > 0 && valides.length === c.machines.length;
    return {
      configuration_id: id,
      nombre_fonctions: c.machines.length,
      nombre_modeles_valides: valides.length,
      nombre_fonctions_a_traiter: c.machines.length - valides.length,
      total_machines: complet ? valides.reduce(function (s, m) {
        return s + m.prix_reference.montant;
      }, 0) : null,
      devise: 'USD',
      statut: complet ? 'modeles_prix_verifies_revoir_interfaces_et_doublons' : 'incomplet',
      investissement_complet: false
    };
  }
  function getSyntheseBiscuiterie() {
    return Object.keys(referentiel.configurations).map(calculerBudgetMachines);
  }
  function getReferencesDocumentaires() { return copie(catalogue); }
  function getSousTotalDocumentaire() {
    return {
      montant_usd: catalogue.reduce(function (s, r) { return s + r.prix_usd; }, 0),
      devise: 'USD', incoterm: 'EXW usine',
      statut: 'liste_complete_QHB400_non_validee_pour_crackers_500kg_h',
      source_url: SOURCE_PRIX,
      attention: 'Inclut des equipements non requis ou alternatifs ; pas un budget BP.'
    };
  }

  window.P2I_BP_BISCUITERIE_REFERENCES = Object.freeze({
    version: referentiel.version,
    up_id: referentiel.up_id,
    up_nom: referentiel.up_nom,
    devise: referentiel.devise,
    getConfiguration: getConfiguration,
    getMachinesValidees: getMachinesValidees,
    calculerBudgetMachines: calculerBudgetMachines,
    getSyntheseBiscuiterie: getSyntheseBiscuiterie,
    getReferencesDocumentaires: getReferencesDocumentaires,
    getSousTotalDocumentaire: getSousTotalDocumentaire,
    getLigneComparative: function () { return copie(referentiel.ligne_comparative); }
  });
  console.log('P2I Biscuiterie - referentiel pilote v' + referentiel.version + ' charge');
})();
