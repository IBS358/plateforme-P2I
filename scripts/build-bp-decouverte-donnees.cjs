/* Référentiel consommable : 96 UP, contenus propres et économie qualifiée. */
'use strict';
const fs=require('fs'),vm=require('vm'),path=require('path'),crypto=require('crypto');const root=path.resolve(__dirname,'..'),ctx=vm.createContext({});ctx.window=ctx;
for(const f of ['up-data.js','machines-data.js','js/p2i-bp-decouverte-v107-scenarios.js','js/p2i-currency-config.js','js/p2i-economic-result-engine.js','js/p2i-commercial-engine.js','js/p2i-hypotheses-commerciales.js','js/p2i-recettes-biscuiterie.js','js/p2i-bp-decouverte-v108-references.js'])vm.runInContext(fs.readFileSync(path.join(root,f),'utf8'),ctx);
const ups=vm.runInContext('P2I_UP_DATA',ctx),machines=vm.runInContext('MACHINES_DATA',ctx);
const source=fs.readFileSync(path.join(root,'filieres.html'),'utf8'),start=source.indexOf('const filieresData = '),end=source.indexOf('];',start)+2;vm.runInContext(source.slice(start,end)+';this.filieres=filieresData;',ctx);
const rows=ctx.filieres.flatMap(f=>f.units.map(u=>({...u,id:u.id==='profilés'?'profiles':u.id,id_parcours:u.id,filiere_id:f.id,filiere_nom:f.name})));
if(rows.length!==96||new Set(rows.map(u=>u.id)).size!==96||Object.keys(ups).length!==96)throw Error('96 UP distinctes requises');
const hygienePolicy=JSON.parse(fs.readFileSync(path.join(root,'data/p2i-hygiene-politique-qualite.json'),'utf8'));
const list=x=>Array.isArray(x)?x.filter(v=>typeof v==='string'&&v.trim()):[];
const measure=(value,field,id)=>({valeur:value??null,unite:field==='gross_margin'?'%':'USD',qualification:value==null?'a_documenter':'historique_p2i_non_verifie',source:{fichier:'up-data.js',up_id:id,champ:field},utilisation:'repere_historique_seulement_pas_une_prevision'});
const units={};
const investmentRules=JSON.parse(fs.readFileSync(path.join(root,'data/p2i-bp-investissements-regles.json'),'utf8'));
const handling=id=>({...investmentRules.manutention_defaut,...investmentRules.manutention_par_up[id],mode:investmentRules.mode});
const handlingCosts=JSON.parse(fs.readFileSync(path.join(root,'data/p2i-bp-manutention-couts.json'),'utf8'));
const money=x=>Math.round(x*100)/100;
function costHandling(id){
 const profile=handlingCosts.profils[id];if(!profile)return null;
 const lignes=Object.entries(profile.panier).map(([code,quantite])=>{
  if(!Number.isInteger(quantite)||quantite<=0)throw Error('Quantité manutention invalide : '+id);
  const source=handlingCosts.sources[code],estimated=handlingCosts.accessoires_estimes[code];
  if(!source&&!estimated)throw Error('Référence manutention inconnue : '+code);
  const prix=source?money((source.prix_unitaire+(source.eco_participation_unitaire||0))*ctx.P2I_BP_V108_REFERENCES.change.eur_usd):estimated.prix_unitaire_usd;
  return {code,nom:(source||estimated).nom,quantite,prix_unitaire_usd:prix,montant_usd:money(prix*quantite),qualification:source?'Prix catalogue HT converti ; quantité hypothèse P2I':'Estimation P2I',source:source||estimated};
 });
 const c=handlingCosts.conventions,base=money(lignes.reduce((n,l)=>n+l.montant_usd,0));
 const frais={fret:money(base*c.fret_taux),assurance:money(base*c.assurance_taux),import_transit:money(base*c.import_transit_taux),transport_local:c.transport_local_usd};
 const budget=money(base+Object.values(frais).reduce((n,v)=>n+v,0));
 return {...profile,lignes,base_achat_usd:base,frais_estimes_usd:frais,budget_livre_estime_usd:budget,entretien_supplementaire_usd_an:profile.mode==='budget_ajoute'?money(Math.max(c.entretien_supplementaire_min_usd_an,base*c.entretien_supplementaire_taux)):0,amortissement_ans:c.amortissement_ans,qualification:c.qualification,limites:handlingCosts.limites};
}

for(const row of rows){const u=ups[row.id];if(!u)throw Error('UP absente : '+row.id);const id=row.id,service=u.type==='service',process=list(u.processus),markets=list(u.target_markets),marketing=list(u.marketing),risks=list(u.challenges),opportunities=list(u.avantages),materials=list(u.raw_materials);
const budget=!u.exclure_reperes_historiques&&Number.isFinite(u.capex_min)?u.capex_min:null;
const configurations=u.bp_configurations|| (id==='biscuiterie'?['crackers','biscuits_mous','biscuits_durs']:id==='nettoyage'?['nettoyage_intensif','decontamination_chimique','decontamination_biologique']:['reference']);
const e={budget_minimum_historique:measure(budget,'capex_min',id),ca_annuel_historique:measure(Number.isFinite(u.estimated_revenue)?u.estimated_revenue:null,'estimated_revenue',id),fourchette_ca_historique:{texte:u.chiffre_affaires_estime||null,qualification:'historique_p2i_non_verifie',source:'up-data.js / '+id+' / chiffre_affaires_estime'},marge_brute_historique:{texte:u.marge_brute||null,valeur:Number.isFinite(u.gross_margin)?u.gross_margin:null,qualification:'historique_p2i_non_verifie',source:'up-data.js / '+id+' / marge_brute, gross_margin'},ventilation_historique:u.investment_breakdown||null,capacite_texte_historique:u.monthly_capacity||null,production:[null,null,null],ventes:[null,null,null],prix_vente_usd:[null,null,null],couts_directs_usd:[null,null,null],charges_exploitation_usd:[null,null,null],capex_consolide_usd:null,qualification:'references_historiques_a_documenter',aucune_repartition_fictive_des_charges:true};
const text={
projet:u.description||row.description,
positionnement:`${u.nom} : ${row.description}. Le périmètre économique est celui de cette activité; les chiffres d’une autre UP ou variante ne sont pas transposés.`,
procede:process.length?`Le flux de référence descriptif comprend ${process.join(' → ')}. Les cadences et les interfaces doivent être dimensionnées ensemble avant de retenir les équipements.`:'Le procédé ou la séquence de prestation doit être qualifié avant dimensionnement.',
marche:markets.length?`Segments à prospecter : ${markets.join(' ; ')}. Leur présence dans le référentiel ne démontre ni volume de demande, ni commande, ni prix de vente accepté.`:`La demande pour ${u.nom.toLowerCase()} doit être établie auprès des clients visés. Aucun volume de marché local n’est présumé.`,
commercial:marketing.length?`Axes commerciaux proposés : ${marketing.join(' ; ')}. Ils constituent un programme de prospection à tester, pas des débouchés acquis.`:'Définir les spécifications, obtenir des intentions de commande, tester le prix net et documenter les conditions de règlement.',
approvisionnement:materials.length?`Intrants recensés : ${materials.join(' ; ')}. Pour chaque intrant, préciser qualité, disponibilité, prix livré, rendement, conditionnement et délai de réapprovisionnement.`:service?'L’activité mobilise du personnel qualifié, des équipements, des consommables et des déplacements à chiffrer par contrat.':'La nomenclature matières et emballages doit être liée à une unité de produit vendable et à un rendement mesuré.',
opportunites:opportunities.length?opportunities.join(' ; '):'L’opportunité commerciale reste à étayer par une enquête ciblée.',
risques:risks.length?risks.join(' ; '):'Qualifier les risques de qualité, disponibilité des intrants, maintenance, demande et règlement.',
qualite:list(u.sanitaires).join(' ; ')||'Définir les contrôles de réception, les critères d’acceptation et la traçabilité des lots ou prestations.',
utilites:list(u.energie).join(' ; ')||'Relever les puissances, consommations, débits et contraintes des équipements avant de chiffrer les utilités.',
implantation:list(u.amenagement).join(' ; ')||'Définir surfaces, accès, stockage et réseaux en fonction du site retenu.',
production:service?'L’unité de facturation doit être précisée : intervention, contrat, heure, surface ou prestation. Ne pas utiliser des stocks de produits finis ou des kg/h par défaut.':`La capacité catalogue ne constitue pas un volume de ventes. Le programme de production de ${u.nom.toLowerCase()} doit intégrer temps disponible, cadence du goulot, rendements, rebuts, arrêts et invendus.`,
economie:'Les repères historiques ci-dessous ne sont pas des devis ou des prévisions. Le prix de vente, les volumes et les charges doivent être documentés séparément; aucune marge historique ne sert à fabriquer un résultat net.',
financement:'L’apport de 30 % et la dette de 70 % ne s’appliquent qu’à un budget explicitement retenu. Le budget minimum historique reste distinct du CAPEX consolidé; le BFR et la réserve initiale doivent être financés et présentés séparément.',
bfr:service?'Le BFR doit suivre les délais clients, acomptes et dettes d’exploitation. Les travaux en cours éventuels demandent une méthode spécifique; aucun stock physique de fabrication n’est créé automatiquement.':'Le BFR sur 36 mois suit stocks de matières, produits finis valorisés, créances clients et dettes fournisseurs. Prix, quantités et délais doivent provenir de ce dossier.',
tresorerie:'Le plan de trésorerie couvre 12 mois, à partir des encaissements et décaissements réels, du financement, des investissements et de l’échéancier de dette. Un montant absent ne vaut pas zéro.',
suite:'Priorités : documenter le produit ou la prestation vendue, fixer une capacité cohérente, obtenir les prix fournisseurs, chiffrer le site et les utilités, puis vérifier prix de vente, charges et règlements avant de calculer les états.',
qualification:'Redaction_interne_P2I_a_qualifier_non_etude_de_marche'
};
const variantes=Object.fromEntries(configurations.map(config=>[config,{configuration_id:config,nom:id==='biscuiterie'?ctx.P2I_BP_V107_SCENARIOS.variants[config].nom:id==='nettoyage'?{nettoyage_intensif:'Nettoyage industriel intensif',decontamination_chimique:'Décontamination chimique',decontamination_biologique:'Décontamination biologique'}[config]:u.nom,qualification:'configuration_a_documenter',reference:id==='biscuiterie'?ctx.P2I_BP_V108_REFERENCES.obtenir(config):id==='nettoyage'?ctx.P2I_BP_V108_REFERENCES.nettoyage[config]:null,economique_herite_up:configurations.length===1&&config==='reference',economique:configurations.length===1&&config==='reference'?e:null,source:id==='biscuiterie'?'js/p2i-bp-decouverte-v108-references.js':id==='nettoyage'?'js/p2i-bp-decouverte-v108-references.js / nettoyage':'up-data.js / '+id}]));
units[id]={manutention:{...handling(id),statut:'a_chiffrer',montant_usd:null},emballage:{statut:service?'non_applicable_prestation':'a_documenter',usage:null,presentation:null,composants:null,cout_usd_par_unite:null,ecologie:'Matière, réemploi, collecte et recyclage effectifs à qualifier; aucun bénéfice environnemental présumé.',source:null},variantes,autres_variantes:'a_recenser',up_id:id,up_nom:u.nom,filiere_id:row.filiere_id,filiere_nom:row.filiere_nom,type_activite:service?'services':row.filiere_id==='assemblage'?'assemblage':'fabrication',configurations,redaction:text,produits:list(u.produits),processus:process,matieres:materials,marches:markets,machines:(machines[id]?.machines||[]).map(m=>({nom:m.name,role:m.role,capacite_texte:m.capacity,utilites_texte:m.utilities,fabricant:null,modele:null,prix_fournisseur_verifie_usd:null,qualification:'besoin_fonctionnel_historique_non_valide'})),economie:e,sources:[{fichier:'filieres.html',champ:`filieresData / ${row.filiere_id} / ${id}`,qualification:'identite_et_rattachement_confirmes'},{fichier:'up-data.js',champ:id,qualification:'description_et_estimations_historiques_non_verifiees'},{fichier:'machines-data.js',champ:id,qualification:'besoins_fonctionnels_non_selection_fournisseur'}],manquants:['Configuration fournisseur vérifiable, capacité effective, utilités et interfaces','Prix fournisseurs, incoterms, dates et coûts complémentaires','Volumes et prix de vente sur trois ans','Recettes/nomenclatures ou coûts par prestation, personnel et charges','Fiscalité applicable et échéancier de financement','Stocks, pertes, conservation et délais de règlement selon activité'],statut:'dossier_redactionnel_et_reperes_historiques_non_valide'};
}
// Profils Découverte : prix publiés et hypothèses séparés; aucune preuve Pro exigée.
const simulationPack=JSON.parse(fs.readFileSync(path.join(root,'data/p2i-bp-decouverte-simulations.json'),'utf8'));
// Lots indépendants : validation des identifiants avant fusion au référentiel commun.
const batchFiles=fs.readdirSync(path.join(root,'data')).filter(f=>/^p2i-bp-lot-[a-z0-9-]+\.json$/.test(f)).sort();
const profileFile={};for(const filename of batchFiles){const lot=JSON.parse(fs.readFileSync(path.join(root,'data',filename),'utf8'));if(lot.schema!=='p2i.bp-lot.v1')throw Error('Lot non reconnu : '+filename);for(const source of lot.sources||[]){if(simulationPack.sources.some(x=>x.id===source.id))throw Error('Source dupliquée : '+source.id);simulationPack.sources.push(source);}for(const [key,profile] of Object.entries(lot.profils||{})){if(simulationPack.profils[key])throw Error('Profil dupliqué : '+key);if(!profile.source_equipement||!profile.methodes||!profile.prix_retenu||!(profile.prix_vente_usd_kg||profile.prix_vente_usd_unite))throw Error('Profil incomplet : '+key);simulationPack.profils[key]=profile;profileFile[key]='data/'+filename;}}

for(const [key,rawProfile] of Object.entries(simulationPack.profils)){
 const p=JSON.parse(JSON.stringify(rawProfile));
 const textile=p.dimensionnement_textile?require('./p2i-textile-commun.cjs').dimensionner(p.dimensionnement_textile):null;
 if(textile){p.capacite_unites_h=textile.capacite_unites_h;if(p.production_explicite.some(q=>q>textile.plafond_annuel))throw Error('Programme supérieur au goulot partagé : '+key);}
 if(p.emballage_produit?.calcul_format){
  const format=require('./p2i-emballages-commun.cjs').chiffrerFormat(p.emballage_produit.calcul_format);
  if(!Number.isFinite(p.cout_process_hors_emballage_usd_kg)||p.cout_process_hors_emballage_usd_kg<0)throw Error('Process hors emballage requis : '+key);
  Object.assign(p.emballage_produit,format);
  p.cout_process_usd_kg=p.cout_process_hors_emballage_usd_kg+format.cout_usd_par_kg;
 }

 // Les moteurs comptent des unités homogènes ; les anciennes clés internes _kg
 // restent compatibles, sans conversion fictive de pièces en masse.
 if(p.unite_production){
  if(p.unite_production!=='pièce')throw Error('Unité de production non prise en charge : '+key);
  p.capacite_entree_kg_h=p.capacite_unites_h;p.prix_vente_usd_kg=p.prix_vente_usd_unite;
  p.matieres_usd_kg_produit=p.matieres_usd_unite;p.cout_process_usd_kg=p.cout_process_usd_unite;
 }

 const id=p.up_id||key,config=p.configuration_id||'reference',u=units[id],source=simulationPack.sources.find(x=>x.id===p.source_equipement),h=simulationPack.hypotheses_communes;
 if(!u||!source)throw Error('Profil de simulation sans identité ou source');
 const handlingCost=costHandling(id);
 if(handlingCost){
  if(p.complements_usd.manutention!==undefined)throw Error('Manutention déjà chiffrée dans le profil : '+key);
  if(handlingCost.mode==='reaffectation_enveloppe'){
   const existing=p.complements_usd[handlingCost.enveloppe_existante];
   if(!Number.isFinite(existing)||existing<handlingCost.budget_livre_estime_usd)throw Error('Enveloppe auxiliaire insuffisante : '+key);
   p.complements_usd[handlingCost.enveloppe_existante]=money(existing-handlingCost.budget_livre_estime_usd);
  }
  p.complements_usd.manutention=handlingCost.budget_livre_estime_usd;
  p.fixes_industriels_an+=handlingCost.entretien_supplementaire_usd_an;
  p.methodes.manutention=handlingCost.mode==='reaffectation_enveloppe'?'Panier de manutention individualisé à l’intérieur de l’enveloppe auxiliaire existante, dont le solde reste une estimation P2I ; aucun nouvel achat ajouté en double, entretien déjà compris.':'Panier de manutention ajouté à l’investissement ; entretien supplémentaire '+handlingCost.entretien_supplementaire_usd_an+' USD/an en A1 dans le coût industriel, puis croissance commune des charges.';
 }

 if(p.redaction){for(const [champ,texte] of Object.entries(p.redaction)){if(!Object.prototype.hasOwnProperty.call(u.redaction,champ)||typeof texte!=='string'||!texte.trim())throw Error('Rédaction de profil invalide : '+key+' / '+champ);u.redaction[champ]=texte;}}
 if(p.marches){if(!Array.isArray(p.marches)||p.marches.some(x=>typeof x!=='string'||!x.trim()))throw Error('Marchés de profil invalides : '+key);u.marches=p.marches.slice();}
 for(const equipement of p.equipements_complementaires||[]){if(equipement.source_id){const preuve=simulationPack.sources.find(x=>x.id===equipement.source_id);if(!preuve||preuve.prix!==equipement.prix_retenu||preuve.devise!==equipement.devise)throw Error('Prix complémentaire sans source cohérente : '+key);}}

 if(profileFile[key]){
  if(!source.url||!/^https:\/\//.test(source.url)||!source.fournisseur||!source.consulte_le)throw Error('Source publique incomplète : '+key);
  if(source.prix!==undefined&&(p.prix_retenu!==source.prix||p.devise_prix!==source.devise))throw Error('Prix de référence incohérent : '+key);
  for(const field of ['production_explicite','ventes_explicites','prix_vente_usd_kg'])if(!Array.isArray(p[field])||p[field].length!==3||p[field].some(x=>!Number.isFinite(x)||x<0))throw Error('Trois valeurs numériques requises : '+key+' / '+field);
  if(p.ventes_explicites.some((v,i)=>v>p.production_explicite.slice(0,i+1).reduce((a,b)=>a+b,0)-p.ventes_explicites.slice(0,i).reduce((a,b)=>a+b,0)))throw Error('Ventes supérieures à la production et au stock : '+key);
  if(p.gamme){if(!Array.isArray(p.gamme)||!p.gamme.length||p.gamme.some(x=>!x.nom||!Number.isFinite(x.part)||x.part<0||['prix_usd_kg','matieres_usd_kg','process_usd_kg'].some(k=>!Number.isFinite(x[k])||x[k]<0)))throw Error('Gamme invalide : '+key);const total=p.gamme.reduce((n,x)=>n+x.part,0),moy=k=>p.gamme.reduce((n,x)=>n+x.part*x[k],0);if(Math.abs(total-1)>1e-9||Math.abs(moy('prix_usd_kg')-p.prix_vente_usd_kg[0])>1e-9||Math.abs(moy('matieres_usd_kg')-p.matieres_usd_kg_produit)>1e-9||Math.abs(moy('process_usd_kg')-p.cout_process_usd_kg)>1e-9)throw Error('Gamme et hypothèses agrégées incohérentes : '+key);}
  const pack=p.emballage_produit;if(!pack||!Number.isFinite(pack.cout_usd_par_kg??pack.cout_usd_par_unite)||!(pack.composants_usd_par_kg||pack.composants_usd_par_unite))throw Error('Emballage à documenter : '+key);
  const packSum=Object.values(pack.composants_usd_par_kg||pack.composants_usd_par_unite).reduce((a,b)=>a+b,0);if(Math.abs(packSum-(pack.cout_usd_par_kg??pack.cout_usd_par_unite))>1e-9||p.cout_process_usd_kg<packSum)throw Error('Coût emballage incohérent : '+key);
 }

 const supplemental=(p.equipements_complementaires||[]).map(x=>({...x,prix_usd:x.prix_retenu*(x.prix_par_unite?(x.quantite||1):1)*(x.devise==='EUR'?ctx.P2I_BP_V108_REFERENCES.change.eur_usd:1)}));
 const principalQty=p.quantite_equipement_principal||1;if(!Number.isInteger(principalQty)||principalQty<1)throw Error('Quantité équipement principal invalide : '+key);
 const equipment=p.prix_retenu*principalQty*(p.devise_prix==='EUR'?ctx.P2I_BP_V108_REFERENCES.change.eur_usd:1)+supplemental.reduce((n,x)=>n+x.prix_usd,0);
 const emballage=p.emballage?{...p.emballage,statut:'hypothese_P2I',cout_usd_par_bouteille:Object.values(p.emballage.composants_usd_bouteille).reduce((n,v)=>n+v,0),cout_usd_par_kg:Object.values(p.emballage.composants_usd_bouteille).reduce((n,v)=>n+v,0)/p.emballage.masse_produit_kg_par_bouteille}:null;
 const processCost=emballage?p.cout_process_hors_emballage_usd_kg+emballage.cout_usd_par_kg:p.cout_process_usd_kg;
 if(emballage)u.emballage=emballage;
 const packagingExisting=emballage||p.emballage_produit||p.emballage_biscuit||((key==='biscuiterie__crackers'||id==='aliments_betail')?{statut:'hypothese_P2I',format:'À préciser',cout_usd_par_kg:key==='biscuiterie__crackers'?.14:.012,mode_comptable:'inclus_dans_cout_industriel',ecologie:'Matériau, réemploi, collecte et recyclage effectifs à qualifier.',source:'Hypothèse P2I historique'}:null);
 const complement=Object.values(p.complements_usd).reduce((sum,v)=>sum+v,0);
 const production=p.production_explicite||p.utilisation.map(v=>p.capacite_entree_kg_h*p.heures_jour*p.jours_an*v*p.rendement_massique);
 const ventes=p.ventes_explicites||production.map((v,i)=>v*p.taux_vente[i]);
 const matieres=p.matieres_recette_crackers?ctx.P2I_RECETTES_BISCUITERIE.crackers.ingredients.reduce((n,x)=>n+x[1]*x[2],0):p.matieres_usd_kg_produit;
 const firstPrice=p.prix_vente_xof_kg?ctx.P2I_CURRENCY.convertir(p.prix_vente_xof_kg,'XOF','USD'):p.prix_vente_usd_kg[0];
 const prix=p.prix_vente_usd_kg||[firstPrice,firstPrice*1.02,firstPrice*1.02**2];
 const input={up_id:id,configuration_id:p.configuration_id,nom:p.nom,sous_titre:p.sous_titre,description:p.description,capacite:p.capacite_entree_kg_h,unite:p.unite_production==='pièce'?'pièces/h':'kg/h',machines:equipment,investissement:equipment+complement,production,ventes,prix,matieres_kg:matieres,cout_production_kg:production.map((q,y)=>(matieres+processCost)*(1+h.croissance_charges)**y+p.fixes_industriels_an*(1+h.croissance_charges)**y/q),personnel:p.personnel_hors_cout_industriel,charges_fixes:p.charges_fixes_hors_industriel,croissance_personnel:h.croissance_personnel,croissance_charges:h.croissance_charges,part_apport:h.apport,part_dette:h.dette,taux_interet:h.taux_interet_annuel,duree_dette_mois:h.dette_mois,duree_amortissement_ans:h.amortissement_ans,taux_tva:h.tva_simulation,taux_is:h.is_simulation,coussin_tresorerie:h.coussin_tresorerie,source:(profileFile[key]||'data/p2i-bp-decouverte-simulations.json')+' / '+key+' : prix catalogue ou budget de référence + hypothèses P2I explicites',conventions:'Mois uniformes; clients 40 % comptant / 60 % à 30 jours, fournisseurs comptant, stock matières '+(p.stock_matieres_jours??30)+' jours. Hypothèses standard de Découverte, non conditions négociées. Production, prix, salaires et charges sont des hypothèses de simulation; les sources de prix équipements restent séparées. IS affecté en réserve et dette fiscale, sans échéancier de paiement officiel. Réserve initiale supplémentaire distincte du 30/70.',statut_exploitation:'Simulation indicative Découverte : base équipements sourcée et hypothèses P2I explicites; aucun devis ni partenariat nécessaire.',qualification:'simulation_decouverte_prix_et_hypotheses'};

 const manutention=handling(id);
 if(handlingCost){
  manutention.postes_budget_mutualise=[];
  manutention.mode='Achat initial retenu, sans location récurrente ; amortissement linéaire '+handlingCost.amortissement_ans+' ans. '+p.methodes.manutention;
  manutention.description_budget=handlingCost.lignes.map(l=>l.quantite+' × '+l.nom).join(' ; ')+'. Fret, assurance, import/transit et livraison : provisions P2I incluses.';
 }
 const postes=[{id:'equipements',libelle:'Équipements de production',categorie:'Production',montant_usd:equipment,qualification:'Référence équipement et compléments : voir rubrique 3 ; périmètre à confirmer'}];
 for(const [key,amount] of Object.entries(p.complements_usd)){
  const rule=investmentRules.postes[key];if(!rule)throw Error('Poste complémentaire sans libellé : '+key);
  if(!Number.isFinite(amount)||amount<0)throw Error('Coût complémentaire invalide : '+key);
  postes.push({id:key,...rule,libelle:handlingCost?.enveloppe_existante===key?handlingCost.libelle_solde:rule.libelle,montant_usd:amount,qualification:key==='manutention'?'Panier catalogue HT + accessoires et frais livrés estimés P2I':handlingCost?.enveloppe_existante===key?'Solde réaffecté de l’enveloppe P2I initiale, non devis':'Estimation P2I, non prix catalogue'});
 }
 if(p.complements_usd.manutention!==undefined)manutention.postes_budget_dedie=['manutention'];
 if(!manutention.postes_budget_mutualise.length&&!manutention.postes_budget_dedie.length)postes.push({id:'manutention_a_chiffrer',libelle:'Matériel de manutention',categorie:'Manutention',montant_usd:null,qualification:'À chiffrer ; non compris dans le total présenté'});
 input.investissements_detail={schema:'p2i.bp-investissements.v1',postes,manutention};
 if(handlingCost)input.amortissements_specifiques=[{id:'manutention',base_usd:handlingCost.budget_livre_estime_usd,duree_ans:handlingCost.amortissement_ans}];
 const packCost=packagingExisting?.cout_usd_par_kg??packagingExisting?.cout_usd_par_unite;
 if(Number.isFinite(packCost)){
  input.cout_emballages_stockables_unite=id==='produits_industriels'?Object.entries(packagingExisting.composants_usd_par_kg).filter(([k])=>!['location_et_rotation_ibc','lavage_controle'].includes(k)).reduce((n,[,v])=>n+v,0):packCost;
  input.stock_emballages_jours=15;
 }
 if(p.stock_matieres_jours!==undefined)input.stock_matieres_jours=p.stock_matieres_jours;
 if(id==='biscuiterie'){input.photo={crackers:0,biscuits_mous:1,biscuits_durs:2}[config];input.technique=ctx.P2I_BP_V108_REFERENCES.technique[config];}
 if(p.visuels)u.variantes[config].visuels=p.visuels;
 if(p.redaction)u.variantes[config].redaction=p.redaction;
 u.variantes[config].nom=p.nom;
 u.variantes[config].reference=input;
 u.variantes[config].qualification='simulation_decouverte_calculable';
 u.variantes[config].prix_equipement={...source,nombre_machines_reference:p.nombre_machines_reference||null,quantite_retenue:principalQty,equipements_complementaires:supplemental};
 u.variantes[config].emballage=packagingExisting;
 u.variantes[config].hypotheses_explicites={...p.methodes,dimensionnement_textile:textile,manutention_chiffree:handlingCost,gamme:p.gamme||null,sources_prix_marche:p.sources_prix_marche||[],sources_techniques_produit:p.sources_techniques_produit||[],plan_commercial:p.plan_commercial||null,suggestion:p.suggestion||null,qualite_produit:p.politique_qualite_id===hygienePolicy.id?hygienePolicy:null,conventions:h,complements_usd:p.complements_usd,base_budget_equipements_usd:equipment,conversion:p.devise_prix==='EUR'?ctx.P2I_BP_V108_REFERENCES.change:null};
 if(handlingCost)u.manutention={...u.manutention,statut:'chiffree_dans_variantes',configurations_chiffrees:[...new Set([...(u.manutention.configurations_chiffrees||[]),config])]};
 u.statut='simulation_decouverte_disponible';
}
const data={schema:'p2i.bp-donnees.v1',date:'2026-10-29',nombre_up:96,nombre_configurations:Object.values(units).reduce((n,u)=>n+u.configurations.length,0),alias_identifiants:{"profilés":"profiles"},migrations_textile:{uniformes:{up_id:"confection",configuration_id:"uniformes_simples"},linge:{up_id:"confection",configuration_id:"linge_simple"},broderie:{up_id:"confection",configuration_id:"uniformes_brodes"}},source_perimetre_sha256:crypto.createHash('sha256').update(source).digest('hex'),parametres_communs:{hygiene_professionnelle:hygienePolicy,electricite_mt_general:{source:'https://www.cie.ci/entreprise/tarifs-electricite',consulte_le:'2026-10-26',regime:'MT général, utilisation annuelle 1 000 à 5 000 heures',devise:'XOF',prime_kw_an_ht:33643.67,kwh_pleines_ht:74.06,kwh_pointe_ht:101,kwh_creuses_ht:61.29,qualification:'bareme_publie_application_contractuelle_a_confirmer'}},financement:{apport:.3,dette:.7},horizons:{resultat_ans:3,bfr_mois:36,tresorerie_mois:12},filieres:ctx.filieres.map(f=>({id:f.id,nom:f.name,up_ids:f.units.map(u=>u.id)})),unites:units};
require('./p2i-emballages-commun.cjs').appliquer(data,ctx.P2I_BP_V108_REFERENCES.change);
data.regles_decouverte=simulationPack.philosophie;
data.nombre_simulations_completes=Object.values(units).flatMap(u=>Object.values(u.variantes)).filter(v=>v.reference?.production?.length===3).length;
fs.writeFileSync(path.join(root,'data/p2i-bp-decouverte-donnees.json'),JSON.stringify(data,null,2)+'\n');
fs.writeFileSync(path.join(root,'js/p2i-bp-decouverte-donnees.js'),'/* Généré par scripts/build-bp-decouverte-donnees.cjs. */\nwindow.P2I_BP_DONNEES = '+JSON.stringify(data)+';\n');
console.log(`Référentiel central : ${data.nombre_up} UP, ${data.nombre_configurations} configurations, ${Object.values(units).filter(u=>u.economie.budget_minimum_historique.valeur!==null).length} budgets historiques, rédaction et sources par UP.`);
