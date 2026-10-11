
/* P2I — Sélection des machines, pilote Biscuiterie v1.0.0
 * Lecture seule : aucune écriture, aucun appel réseau, aucun accès Supabase.
 * À charger après machines-data.js (racine), js/models-db.js et le catalogue V2 si disponible.
 * API : window.P2I_SELECTION_MACHINES_PILOTE.analyser('biscuits_mous')
 */
(function (root) {
  'use strict';

  const VERSION = '1.0.0';
  const CONFIGURATIONS = Object.freeze(['biscuits_mous', 'biscuits_durs', 'crackers']);
  const ALIAS_CANDIDATS = Object.freeze({
    mouleuse_rotative_biscuiterie: ['faconneuse_rotative'],
    etaleuse_pate_biscuiterie: ['lamineuse_biscuiterie'],
    roto_decoupoir_biscuiterie: ['faconneuse_rotative'],
    enrobeuse_chocolat_biscuiterie: ['enrobeuse_saupoudreuse'],
    saupoudreuse_biscuiterie: ['enrobeuse_saupoudreuse']
  });

  const objet = value => value !== null && typeof value === 'object' && !Array.isArray(value);
  const texte = value => typeof value === 'string' ? value.trim() : '';
  const liste = value => Array.isArray(value) ? value : [];
  const copie = value => JSON.parse(JSON.stringify(value));
  const nombre = value => typeof value === 'number' && Number.isFinite(value) ? value : null;

  function sources(options) {
    const opts = objet(options) ? options : {};
    return {
      machines: opts.machinesData || root.MACHINES_DATA ||
        (typeof MACHINES_DATA !== 'undefined' ? MACHINES_DATA : null),
      historique: opts.modelsDb || root.MODELS_DB ||
        (typeof MODELS_DB !== 'undefined' ? MODELS_DB : null),
      v2: opts.modelsDbV2 || root.P2I_MODELS_DB_V2 || null
    };
  }

  function ficheModele(modele, catalogue, correspondance, famille) {
    const v2 = catalogue === 'v2';
    const referencePrix = objet(modele.price_reference) ? modele.price_reference : {};
    const prixHistorique = nombre(modele.price_ttc);
    const prixV2 = nombre(referencePrix.amount) ?? nombre(referencePrix.price) ??
      nombre(referencePrix.min) ?? nombre(referencePrix.min_amount);
    const prixPresent = v2 ? prixV2 !== null : prixHistorique !== null;
    const prixAffiche = v2 ? (prixV2 ?? null) : prixHistorique;
    const specs = objet(modele.specs) ? modele.specs : {};
    const compatibiliteDeclaree = texte(modele.compatibility_status) ||
      texte(modele.compatibility) || 'non_documentee';

    return {
      id: texte(modele.model_id) || texte(modele.id) || null,
      nom: texte(modele.name) || 'Modèle sans nom',
      fournisseur: texte(modele.supplier) || null,
      origine: texte(modele.origin) || null,
      famille_catalogue: famille,
      catalogue,
      correspondance,
      prix_reference_indicatif: prixAffiche,
      prix_reference_present: prixPresent,
      devise: texte(referencePrix.currency) || (v2 ? null : 'USD_a_confirmer'),
      prix_verifie: false,
      compatibilite_technique_validee: false,
      debit_500kg_h_valide: false,
      capacite_declaree: texte(specs.capacity) || null,
      compatibilite_declaree: compatibiliteDeclaree,
      statut_selection: 'a_verifier',
      points_a_verifier: [
        'Procédé et produit exacts',
        'Débit réel de production et compatibilité avec la ligne de 500 kg/h',
        'Interfaces, dimensions, utilités et équipements inclus',
        'Source du prix, date, devise, incoterm et conditions fournisseur'
      ]
    };
  }

  function candidatsPour(cle, data) {
    const resultat = [];
    const vus = new Set();
    const ajouter = (base, famille, catalogue, correspondance) => {
      const entree = objet(base) ? base[famille] : null;
      for (const modele of liste(entree && entree.models)) {
        if (!objet(modele)) continue;
        const identite = [catalogue, famille, texte(modele.model_id) || texte(modele.id) || texte(modele.name)].join('|');
        if (vus.has(identite)) continue;
        vus.add(identite);
        resultat.push(ficheModele(modele, catalogue, correspondance, famille));
      }
    };
    ajouter(data.historique, cle, 'historique', 'directe');
    ajouter(data.v2, cle, 'v2', 'directe');
    for (const alias of ALIAS_CANDIDATS[cle] || []) {
      ajouter(data.historique, alias, 'historique', 'alias_a_valider');
      ajouter(data.v2, alias, 'v2', 'alias_a_valider');
    }
    return resultat;
  }

  function analyser(configurationId, options) {
    const config = texte(configurationId) || 'biscuits_mous';
    if (!CONFIGURATIONS.includes(config)) {
      return {ok:false, erreur:'Configuration inconnue : ' + config, configurations_valides:[...CONFIGURATIONS]};
    }
    const data = sources(options);
    const up = objet(data.machines) ? data.machines.biscuiterie : null;
    if (!objet(up) || !Array.isArray(up.base_machines) || !objet(up.configurations)) {
      return {ok:false, erreur:'Données Biscuiterie absentes : charger machines-data.js situé à la racine du projet.'};
    }
    const definition = up.configurations[config];
    if (!objet(definition)) return {ok:false, erreur:'Configuration non définie : ' + config};

    const equipements = [...liste(up.base_machines), ...liste(definition.specific_machines)].map(machine => {
      const cle = texte(machine.machine_key);
      const candidats = candidatsPour(cle, data);
      const directs = candidats.filter(c => c.correspondance === 'directe');
      const aliases = candidats.filter(c => c.correspondance === 'alias_a_valider');
      return {
        machine_key: cle,
        nom: texte(machine.name),
        role: texte(machine.role),
        importance: texte(machine.importance) || 'a_confirmer',
        etape: texte(machine.process_stage) || null,
        groupe_choix: texte(machine.choice_group) || null,
        capacite_cible_declaree: texte(machine.capacity) || null,
        utilites: texte(machine.utilities) || null,
        correspondance: directs.length ? 'directe' : aliases.length ? 'alias_a_valider' : 'manquante',
        nombre_candidats: candidats.length,
        modeles: candidats,
        modele_valide: false
      };
    });

    const groupes = {};
    for (const e of equipements) {
      if (!e.groupe_choix) continue;
      if (!groupes[e.groupe_choix]) {
        const def = objet(definition.choice_groups) ? definition.choice_groups[e.groupe_choix] : null;
        groupes[e.groupe_choix] = {
          libelle: def && texte(def.label) || e.groupe_choix,
          minimum_choix: def && nombre(def.min_choices) !== null ? def.min_choices : 1,
          machines_alternatives: []
        };
      }
      groupes[e.groupe_choix].machines_alternatives.push(e.machine_key);
    }

    const optionsApplicables = liste(up.optional_modules)
      .filter(m => liste(m.applies_to).includes(config))
      .map(m => ({machine_key:texte(m.machine_key),nom:texte(m.name),importance:'optional',
        modeles_candidats:candidatsPour(texte(m.machine_key),data).length}));

    const statistiques = {
      equipements_repertories: equipements.length,
      correspondances_directes: equipements.filter(e => e.correspondance === 'directe').length,
      alias_a_valider: equipements.filter(e => e.correspondance === 'alias_a_valider').length,
      sans_correspondance: equipements.filter(e => e.correspondance === 'manquante').length,
      modeles_candidats: equipements.reduce((s,e) => s + e.nombre_candidats,0),
      modeles_valides: 0
    };

    return copie({
      ok:true,
      version:VERSION,
      up_id:'biscuiterie',
      configuration:config,
      nom_configuration:texte(definition.name),
      capacite_reference:up.capacity_reference || {value:500,unit:'kg/h',status:'p2i_initial_reference'},
      catalogues_charges:{historique:!!data.historique,v2:!!data.v2},
      statistiques,
      groupes_de_choix:groupes,
      equipements,
      modules_optionnels:optionsApplicables,
      regles:[
        'Les alternatives d’un même groupe ne sont pas cumulées automatiquement.',
        'Les alias sont des pistes de recherche, pas des équivalences techniques.',
        'Un prix présent ne signifie pas prix vérifié.',
        'La cible de 500 kg/h ne prouve pas le débit réel de chaque modèle.',
        'Contrôler les équipements inclus dans les offres pour éviter les doubles comptes.',
        'Une puissance nominale en kW ne permet pas seule de calculer les kWh consommés.'
      ],
      totaux_valides:{investissement_machines_usd:null,debit_ligne_kg_h:null,consommation_kwh:null}
    });
  }

  function analyserToutes(options) {
    return CONFIGURATIONS.map(id => analyser(id, options));
  }

  root.P2I_SELECTION_MACHINES_PILOTE = Object.freeze({
    version:VERSION,
    configurations:CONFIGURATIONS,
    analyser,
    analyserToutes
  });
})(typeof window !== 'undefined' ? window : globalThis);
