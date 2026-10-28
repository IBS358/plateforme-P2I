/* Orchestration commune de simulation. Réutilise les moteurs économique,
 * financier, BFR et trésorerie. Séparée du statut documentaire de publication.
 * Aucune simulation indicative n'est publiée comme prévision validée.
 */
(function(root){'use strict';
const positive=x=>typeof x==='number'&&Number.isFinite(x)&&x>=0;
const close=(a,b)=>Math.abs(a-b)<.02;
function uniteProduction(s){
 const units={'kg/h':{nom:'kg',pluriel:'kg'},'pièces/h':{nom:'pièce',pluriel:'pièces'}};
 const key=s.unite??'kg/h';if(!Object.prototype.hasOwnProperty.call(units,key))throw Error('Unité de production non prise en charge');
 return {...units[key],capacite:key};
}
function normaliserAmortissements(value){
 if(!Array.isArray(value)||value.length>30)throw Error('Amortissements spécifiques invalides');
 const ids=new Set();return value.map(x=>{
  if(!x||typeof x.id!=='string'||!x.id||x.id.length>200||ids.has(x.id)||!positive(x.base_usd)||!positive(x.duree_ans)||x.duree_ans<3||x.duree_ans>50)throw Error('Amortissement spécifique invalide');
  ids.add(x.id);return {id:x.id,base_usd:x.base_usd,duree_ans:x.duree_ans};
 });
}
// Le détail accompagne les paramètres enregistrés, sans remplacer un budget modifié.
function normaliserInvestissements(value){
 if(!value||value.schema!=='p2i.bp-investissements.v1'||!Array.isArray(value.postes)||value.postes.length>60)throw Error('Ventilation des investissements invalide');
 const text=x=>typeof x==='string'&&x.length>0&&x.length<=2000;
 const ids=new Set();
 const postes=value.postes.map(p=>{
  if(!p||!text(p.id)||ids.has(p.id)||!text(p.libelle)||!text(p.categorie)||!text(p.qualification)||!(p.montant_usd===null||positive(p.montant_usd)))throw Error('Poste d’investissement invalide');
  ids.add(p.id);return {id:p.id,libelle:p.libelle,categorie:p.categorie,montant_usd:p.montant_usd,qualification:p.qualification};
 });
 const m=value.manutention;
 if(!m||!text(m.besoins)||!text(m.mode)||!Array.isArray(m.postes_budget_mutualise)||m.postes_budget_mutualise.some(id=>!ids.has(id)))throw Error('Manutention invalide');
 const dedie=m.postes_budget_dedie??[];
 if(!Array.isArray(dedie)||new Set([...dedie,...m.postes_budget_mutualise]).size!==dedie.length+m.postes_budget_mutualise.length||[...dedie,...m.postes_budget_mutualise].some(id=>!ids.has(id)||postes.find(p=>p.id===id).montant_usd===null))throw Error('Budget manutention invalide ou compté deux fois');
 if(m.description_budget!==undefined&&!text(m.description_budget))throw Error('Description du budget manutention invalide');
 return {schema:value.schema,postes,manutention:{besoins:m.besoins,mode:m.mode,...(m.description_budget?{description_budget:m.description_budget}:{}),postes_budget_mutualise:m.postes_budget_mutualise.slice(),postes_budget_dedie:dedie.slice()}};
}
function ventilerInvestissement(s){
 const fallback={statut:'non_ventile',postes:[{id:'equipements',libelle:'Équipements de production',categorie:'Production',montant_usd:s.machines??null,qualification:'Budget du scénario'}, {id:'non_ventile',libelle:'Autres investissements non ventilés',categorie:'À détailler',montant_usd:s.machines==null?null:s.investissement-s.machines,qualification:'Contenu à documenter'}],total_chiffre_usd:s.investissement,manutention:{statut:'a_chiffrer',besoins:'Moyens de manutention propres au dossier à dimensionner.',mode:'Achat ou location et frais d’utilisation à chiffrer.',postes_budget_mutualise:[],postes_budget_dedie:[],budget_mutualise_usd:null,budget_dedie_usd:null}};
 if(!s.investissements_detail)return fallback;
 const d=normaliserInvestissements(s.investissements_detail),total=d.postes.reduce((n,p)=>n+(p.montant_usd??0),0),equipment=d.postes.find(p=>p.id==='equipements');
 if(!close(total,s.investissement)||!equipment||!close(equipment.montant_usd,s.machines??-1))return {...fallback,statut:'detail_a_reconcilier'};
 const related=d.manutention.postes_budget_mutualise.map(id=>d.postes.find(p=>p.id===id)),dedicated=d.manutention.postes_budget_dedie.map(id=>d.postes.find(p=>p.id===id));
 return {statut:'ventile',postes:d.postes,total_chiffre_usd:total,postes_a_chiffrer:d.postes.filter(p=>p.montant_usd===null).map(p=>p.id),manutention:{...d.manutention,statut:dedicated.length?'budget_dedie':related.length?'budget_mutualise':'a_chiffrer',budget_dedie_usd:dedicated.length?dedicated.reduce((n,p)=>n+p.montant_usd,0):null,budget_mutualise_usd:related.length?related.reduce((n,p)=>n+p.montant_usd,0):null}};
}
const REPERES=Object.freeze({marge_nette_min:.10,roi_annuel_min:.15});
function evaluerPerformance(annuel,investissement){
 const serie=annuel.map(a=>({annee:a.annee,marge_nette:a.chiffre_affaires>0?a.resultat_net/a.chiffre_affaires:null,roi_annuel:investissement>0?a.resultat_net/investissement:null}));
 const premier=serie[0];return {reperes:REPERES,annuel:serie,marge_atteinte:premier.marge_nette===null?null:premier.marge_nette>=REPERES.marge_nette_min,roi_atteint:premier.roi_annuel===null?null:premier.roi_annuel>=REPERES.roi_annuel_min,qualification:'repères indicatifs P2I, sans garantie ni seuil bancaire, sans modification des résultats'};
}

// Calcule un prix cible A1 sans modifier les données du dossier. Il suppose que
// volumes, coûts et taux d'IS restent inchangés : ce n'est pas un prix de marché.
function diagnosticPrix(input,annee,performance){
 const ventes=input.ventes[0],tax=input.taux_is,m=REPERES.marge_nette_min,roi=REPERES.roi_annuel_min;
 if(!ventes||tax>=1||1-tax<=m)return {statut:'non_calculable',prix_cible:null};
 const charges=annee.chiffre_affaires-annee.resultat_avant_impot;
 const caMarge=charges/(1-m/(1-tax));
 const caRoi=charges+input.investissement*roi/(1-tax);
 const prix=Math.max(0,caMarge,caRoi)/ventes;
 return {statut:performance.marge_atteinte&&performance.roi_atteint?'reperes_atteints':'ajustement_a_etudier',prix_cible:prix,prix_actuel:input.prix[0],marge_cible:m,roi_cible:roi,qualification:'Prix mathématique indicatif, à comparer aux prix de marché ; volumes et coûts inchangés. Non appliqué automatiquement.'};
}
function calculer(input){
 const s=JSON.parse(JSON.stringify(input)),unite=uniteProduction(s);
 for(const k of ['investissement','matieres_kg','personnel','charges_fixes','part_apport','part_dette','taux_interet','duree_dette_mois','duree_amortissement_ans','taux_tva','taux_is','coussin_tresorerie','croissance_personnel','croissance_charges'])if(!positive(s[k]))throw Error('Hypothèse manquante ou invalide : '+k);
 if(s.machines!=null&&(!positive(s.machines)||s.machines>s.investissement))throw Error('Le budget machines dépasse le budget global de simulation');
 if(!close(s.part_apport+s.part_dette,1)||s.part_apport!==.3||s.part_dette!==.7)throw Error('Financement attendu 30/70');
 if(s.duree_dette_mois<36||s.duree_amortissement_ans<3||s.taux_is>1||s.taux_tva>1)throw Error('Durées ou taux incompatibles');
 for(const k of ['production','ventes','prix','cout_production_kg'])if(!Array.isArray(s[k])||s[k].length!==3||!s[k].every(positive))throw Error('Trois années requises : '+k);
 if(unite.nom==='pièce'&&[...s.production,...s.ventes].some(x=>!Number.isInteger(x)))throw Error('Les quantités en pièces doivent être entières');
 const stockMatieresJours=s.stock_matieres_jours??30;if(!positive(stockMatieresJours)||stockMatieresJours>30)throw Error('Stock matières : entre 0 et 30 jours');
 const packActive=s.cout_emballages_stockables_unite!==undefined||s.stock_emballages_jours!==undefined;
 if(packActive&&(!positive(s.cout_emballages_stockables_unite)||!positive(s.stock_emballages_jours)||s.stock_emballages_jours>90))throw Error('Stock emballages : coût et jours entre 0 et 90 requis');
 let packQty=0,packValue=0;
 const specifics=normaliserAmortissements(s.amortissements_specifiques||[]),specificBase=specifics.reduce((n,x)=>n+x.base_usd,0);
 if(specificBase>s.investissement)throw Error('Bases amortissables spécifiques supérieures à l’investissement');
 const debt=s.investissement*.7,principal=debt/s.duree_dette_mois,amortissement=(s.investissement-specificBase)/s.duree_amortissement_ans+specifics.reduce((n,x)=>n+x.base_usd/x.duree_ans,0);
 let stockQty=0,stockValue=0,rawPrevious=0,receivablesPrevious=0,debtRemaining=debt,vatCredit=0,vatDuePrevious=0,isTotal=0;
 const months=[],annual=[],economic=[];
 for(let y=0;y<3;y++){
  const prodMean=s.production[y]/12,soldMean=s.ventes[y]/12,cost=s.cout_production_kg[y],material=s.matieres_kg*(1+s.croissance_charges)**y;
  if(cost<material)throw Error('Coût industriel inférieur aux matières');
  const yearRows=[];
  for(let m=0;m<12;m++){
   const prod=unite.nom==='pièce'?Math.floor(s.production[y]*(m+1)/12)-Math.floor(s.production[y]*m/12):prodMean,sold=unite.nom==='pièce'?Math.floor(s.ventes[y]*(m+1)/12)-Math.floor(s.ventes[y]*m/12):soldMean;
   const available=stockQty+prod;if(sold>available+.00001)throw Error('Ventes supérieures au stock disponible');
   const packPrice=packActive?s.cout_emballages_stockables_unite*(1+s.croissance_charges)**y:0;
   if(packActive&&cost+1e-9<material+packPrice)throw Error('Coût industriel inférieur aux matières et emballages');
   const packTarget=packActive?(unite.nom==='pièce'?Math.ceil(prod*s.stock_emballages_jours/30):prod*s.stock_emballages_jours/30):0;
   const packPurchasesQty=packActive?Math.max(0,prod+packTarget-packQty):0;
   const packPurchases=packPurchasesQty*packPrice,packAvailable=packQty+packPurchasesQty;
   const packAverage=packAvailable?(packValue+packPurchases)/packAvailable:0;
   const packConsumption=packActive?prod*packAverage:0;
   packQty=packActive?packAvailable-prod:0;packValue=packQty*packAverage;
   const effectiveCost=cost+(packActive&&prod>0?packConsumption/prod-packPrice:0);
   const average=available?(stockValue+prod*effectiveCost)/available:0;
   const e=root.P2I_ECONOMIC_RESULT_ENGINE.calculer({type_activite:'fabrication',quantite_produite:available,quantite_vendue:sold,quantite_perdue:0,cout_variable_unitaire:average,charges_fixes_industrielles:0,chiffre_affaires_usd:sold*s.prix[y]});
   stockQty=e.quantite_stockee;stockValue=e.valeur_stock_indicative_usd;
   const raw=prod*material*stockMatieresJours/30,purchases=prod*material+raw-rawPrevious;
   const ca=e.chiffre_affaires_usd,collection=.4*ca+receivablesPrevious,interest=debtRemaining*s.taux_interet/12;
   const personnel=s.personnel*(1+s.croissance_personnel)**y/12,fixed=s.charges_fixes*(1+s.croissance_charges)**y/12;
   const inputVat=purchases*s.taux_tva,invoiceVat=ca*s.taux_tva;
   const vatPaid=vatDuePrevious,netVat=invoiceVat-inputVat-vatCredit;
   vatCredit=Math.max(0,-netVat);vatDuePrevious=Math.max(0,netVat);
   const row={mois:y*12+m+1,production:prod,ventes:sold,prix:s.prix[y],ca,cpv:e.cout_produits_vendus_usd,stock_quantite:stockQty,stock_valeur:stockValue,stock_matieres:raw,stock_emballages:packValue,stock_emballages_quantite:packQty,cout_emballages_moyen:packAverage,consommation_emballages:packConsumption,achats_emballages:packPurchases,creances:.6*ca,encaissements:collection,achats_matieres:purchases,cout_process:prod*(cost-material-packPrice),personnel,charges_fixes:fixed,interets:interest,principal,tva_facturee:invoiceVat,tva_encaissee:collection*s.taux_tva,tva_deductible:inputVat,tva_payee:vatPaid,tva_due:vatDuePrevious,credit_tva:vatCredit,dette_fin:Math.max(0,debtRemaining-principal)};
   row.ebit=ca-row.cpv-personnel-fixed-amortissement/12;
   debtRemaining=row.dette_fin;receivablesPrevious=row.creances;rawPrevious=raw;months.push(row);yearRows.push(row);economic.push(e);
  }
  const sum=k=>yearRows.reduce((a,x)=>a+x[k],0);
  const post=v=>({montant_usd:v,statut:'estime_p2i',source:s.source});
  const postes=Object.fromEntries(Object.entries(root.P2I_FINANCIAL_ENGINE.POSTES).filter(([k])=>k!=='couts_directs').flatMap(([,keys])=>keys.map(k=>[k,post(0)])));
  // Zéros explicites = postes non ventilés dans cette simulation agrégée;
  // personnel et charges fixes regroupés sans les compter dans les CPV.
  postes.personnel_administratif_commercial=post(sum('personnel'));postes.autres_exploitation=post(sum('charges_fixes'));postes.amortissements=post(amortissement);postes.interets_emprunts=post(sum('interets'));
  const data={type_activite:'fabrication',controle_non_double_compte:true,lignes:[{id:s.configuration_id||s.up_id,type_activite:'fabrication',chiffre_affaires:post(sum('ca')),cout_prestations_ou_produits_vendus:post(sum('cpv')),variation_stock:post(0)}],postes};
  const before=root.P2I_FINANCIAL_ENGINE.calculer(data);postes.impot_resultat=post(Math.max(0,before.resultat_avant_impot_usd)*s.taux_is);
  const f=root.P2I_FINANCIAL_ENGINE.calculer(data);if(!f.complet)throw Error('Compte financier incomplet');
  const tax=f.postes.fiscal.impot_resultat.montant_usd;
  for(const row of yearRows){row.is_reserve=tax/12;isTotal+=row.is_reserve;row.is_cumule=isTotal;}
  annual.push({annee:y+1,production:sum('production'),ventes:sum('ventes'),stock_quantite:stockQty,chiffre_affaires:f.chiffre_affaires_total_usd,cout_produits_vendus:f.cout_ventes_total_usd,personnel:sum('personnel'),charges_fixes:sum('charges_fixes'),charges_exploitation:f.autres_charges_exploitation_usd,amortissements:amortissement,charges_financieres:sum('interets'),impots:tax,resultat_net:f.resultat_net_usd,resultat_avant_impot:f.resultat_avant_impot_usd,ebit:f.resultat_exploitation_usd,ebitda:f.resultat_exploitation_usd+amortissement,financier:f});
 }
 const bfr=root.P2I_BP_BFR_MENSUEL.calculate({hypotheses:{part_clients_comptant:.4,part_clients_30_jours:.6,stock_matieres_jours:stockMatieresJours,stock_produits_finis_jours:15,delai_fournisseurs_jours:0,jours_mois:30},creances_ouverture_usd:0,mois:months.map(r=>({ventes_usd:r.ca,consommation_matieres_usd:r.production*s.matieres_kg*(1+s.croissance_charges)**Math.floor((r.mois-1)/12),cout_production_vendue_usd:r.cpv,stock_emballages_quantite:r.stock_emballages,cout_unitaire_emballages_usd:1,stock_matieres_quantite:r.stock_matieres,cout_unitaire_matieres_usd:1,stock_finis_quantite:r.stock_quantite,cout_unitaire_finis_usd:r.stock_quantite?r.stock_valeur/r.stock_quantite:0}))});
 if(!bfr.valide)throw Error(bfr.blocages.join('; '));
 const flows=rows=>rows.map(r=>({ventes_clients:r.encaissements*(1+s.taux_tva),autres_encaissements:0,achats_matiere:r.achats_matieres*(1+s.taux_tva),salaires:r.personnel,charges_exploitation:r.charges_fixes+r.cout_process+r.achats_emballages,investissements:0,service_dette:r.interets+r.principal,impots:r.tva_payee,autres_decaissements:0}));
 const baseline=root.P2I_BP_MOTEUR_TRESORERIE.calculer({solde_initial:0,mois:flows(months.slice(0,12))});
 if(!baseline.valide)throw Error(baseline.erreurs.join('; '));
 const minimum=Math.min(0,...baseline.tresorerie_mensuelle.map((r,i)=>r.solde_final-months[i].is_cumule));
 const reserve=Math.max(0,s.investissement*s.coussin_tresorerie-minimum);
 let opening=reserve,netCumulative=0;const bilans=[],cash=[];
 for(let y=0;y<3;y++){
  const rows=months.slice(y*12,y*12+12),t=root.P2I_BP_MOTEUR_TRESORERIE.calculer({solde_initial:opening,mois:flows(rows)});
  if(!t.valide)throw Error(t.erreurs.join('; '));
  rows.forEach((r,i)=>{r.banque=t.tresorerie_mensuelle[i].solde_final;r.tresorerie_libre=r.banque-r.is_cumule;});
  opening=t.solde_final;cash.push(t);netCumulative+=annual[y].resultat_net;
  const last=rows[11],b=bfr.bfr_mensuel[y*12+11],fixed=Math.max(0,s.investissement-amortissement*(y+1));
  const assets=fixed+b.stocks+b.creances_clients+last.creances*s.taux_tva+last.credit_tva+last.banque;
  const equity=s.investissement*.3+reserve+netCumulative,liabilities=equity+last.dette_fin+last.tva_due+last.is_cumule;
  bilans.push({annee:y+1,immobilisations:fixed,stocks_matieres:b.stocks_matieres,stocks_emballages:b.stocks_emballages,stocks_finis:b.stocks_produits_finis,creances:b.creances_clients,tva_clients:last.creances*s.taux_tva,credit_tva:last.credit_tva,banque:last.banque,fonds_propres:equity,dette:last.dette_fin,tva_due:last.tva_due,is_du:last.is_cumule,actif_total:assets,passif_total:liabilities,ecart:assets-liabilities});
  if(!close(assets,liabilities))throw Error('Bilan déséquilibré A'+(y+1)+' : '+(assets-liabilities));
 }
 const performance=evaluerPerformance(annual,s.investissement);performance.diagnostic_prix=diagnosticPrix(s,annual[0],performance);
 return {version:'107',statut:'simulation_indicative_non_documentee',entrees:s,unite_production:unite,investissements:ventilerInvestissement(s),emballages:{statut:packActive?'stock_modele':'non_isole_dossier_historique',jours:packActive?s.stock_emballages_jours:null,cout_stockable_unite:packActive?s.cout_emballages_stockables_unite:null,stock_lancement:packActive?months[0].stock_emballages:null,convention:'Achats et stock au coût moyen pondéré ; consommation déjà comprise dans le coût de production. TVA des emballages non isolée, convention de simulation.'},mois:months,annuel:annual,performance,bfr:bfr.bfr_mensuel,tresorerie:cash[0].tresorerie_mensuelle,bilans,reserve_initiale:reserve,financement:{apport:s.investissement*.3,dette:debt,apport_reserve:reserve,apport_total:s.investissement*.3+reserve,besoin_total:s.investissement+reserve,total_ressources:s.investissement*.3+reserve+debt,hypothese_reserve_financee_par_apport:true},moteurs:['P2I_ECONOMIC_RESULT_ENGINE','P2I_FINANCIAL_ENGINE','P2I_BP_BFR_MENSUEL','P2I_BP_MOTEUR_TRESORERIE'],controles:{bilans_equilibres:true,bfr_mois:36,tresorerie_mois:12,financement:'30/70'}};
}
root.P2I_BP_SIMULATION_COMMUNE=Object.freeze({calculer,uniteProduction,evaluerPerformance,ventilerInvestissement,normaliserInvestissements,normaliserAmortissements,reperes:REPERES});
})(typeof window!=='undefined'?window:globalThis);
