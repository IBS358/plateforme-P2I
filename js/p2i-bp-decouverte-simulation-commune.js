/* Orchestration commune de simulation. Réutilise les moteurs économique,
 * financier, BFR et trésorerie. Séparée du statut documentaire de publication.
 * Aucune simulation indicative n'est publiée comme prévision validée.
 */
(function(root){'use strict';
const positive=x=>typeof x==='number'&&Number.isFinite(x)&&x>=0;
const close=(a,b)=>Math.abs(a-b)<.02;
function calculer(input){
 const s=JSON.parse(JSON.stringify(input));
 for(const k of ['investissement','matieres_kg','personnel','charges_fixes','part_apport','part_dette','taux_interet','duree_dette_mois','duree_amortissement_ans','taux_tva','taux_is','coussin_tresorerie','croissance_personnel','croissance_charges'])if(!positive(s[k]))throw Error('Hypothèse manquante ou invalide : '+k);
 if(!close(s.part_apport+s.part_dette,1)||s.part_apport!==.3||s.part_dette!==.7)throw Error('Financement attendu 30/70');
 if(s.duree_dette_mois<36||s.duree_amortissement_ans<3||s.taux_is>1||s.taux_tva>1)throw Error('Durées ou taux incompatibles');
 for(const k of ['production','ventes','prix','cout_production_kg'])if(!Array.isArray(s[k])||s[k].length!==3||!s[k].every(positive))throw Error('Trois années requises : '+k);
 const debt=s.investissement*.7,principal=debt/s.duree_dette_mois,amortissement=s.investissement/s.duree_amortissement_ans;
 let stockQty=0,stockValue=0,rawPrevious=0,receivablesPrevious=0,debtRemaining=debt,vatCredit=0,vatDuePrevious=0,isTotal=0;
 const months=[],annual=[],economic=[];
 for(let y=0;y<3;y++){
  const prod=s.production[y]/12,sold=s.ventes[y]/12,cost=s.cout_production_kg[y],material=s.matieres_kg*(1+s.croissance_charges)**y;
  if(cost<material)throw Error('Coût industriel inférieur aux matières');
  const yearRows=[];
  for(let m=0;m<12;m++){
   const available=stockQty+prod;if(sold>available+.00001)throw Error('Ventes supérieures au stock disponible');
   const average=available?(stockValue+prod*cost)/available:0;
   const e=root.P2I_ECONOMIC_RESULT_ENGINE.calculer({type_activite:'fabrication',quantite_produite:available,quantite_vendue:sold,quantite_perdue:0,cout_variable_unitaire:average,charges_fixes_industrielles:0,chiffre_affaires_usd:sold*s.prix[y]});
   stockQty=e.quantite_stockee;stockValue=e.valeur_stock_indicative_usd;
   const raw=prod*material,purchases=prod*material+raw-rawPrevious;
   const ca=e.chiffre_affaires_usd,collection=.4*ca+receivablesPrevious,interest=debtRemaining*s.taux_interet/12;
   const personnel=s.personnel*(1+s.croissance_personnel)**y/12,fixed=s.charges_fixes*(1+s.croissance_charges)**y/12;
   const inputVat=purchases*s.taux_tva,invoiceVat=ca*s.taux_tva;
   const vatPaid=vatDuePrevious,netVat=invoiceVat-inputVat-vatCredit;
   vatCredit=Math.max(0,-netVat);vatDuePrevious=Math.max(0,netVat);
   const row={mois:y*12+m+1,production:prod,ventes:sold,prix:s.prix[y],ca,cpv:e.cout_produits_vendus_usd,stock_quantite:stockQty,stock_valeur:stockValue,stock_matieres:raw,creances:.6*ca,encaissements:collection,achats_matieres:purchases,cout_process:prod*(cost-material),personnel,charges_fixes:fixed,interets:interest,principal,tva_facturee:invoiceVat,tva_encaissee:collection*s.taux_tva,tva_deductible:inputVat,tva_payee:vatPaid,tva_due:vatDuePrevious,credit_tva:vatCredit,dette_fin:Math.max(0,debtRemaining-principal)};
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
 const bfr=root.P2I_BP_BFR_MENSUEL.calculate({hypotheses:{part_clients_comptant:.4,part_clients_30_jours:.6,stock_matieres_jours:30,stock_produits_finis_jours:15,delai_fournisseurs_jours:0,jours_mois:30},creances_ouverture_usd:0,mois:months.map(r=>({ventes_usd:r.ca,consommation_matieres_usd:r.stock_matieres,cout_production_vendue_usd:r.cpv,stock_matieres_quantite:r.stock_matieres,cout_unitaire_matieres_usd:1,stock_finis_quantite:r.stock_quantite,cout_unitaire_finis_usd:r.stock_quantite?r.stock_valeur/r.stock_quantite:0}))});
 if(!bfr.valide)throw Error(bfr.blocages.join('; '));
 const flows=rows=>rows.map(r=>({ventes_clients:r.encaissements*(1+s.taux_tva),autres_encaissements:0,achats_matiere:r.achats_matieres*(1+s.taux_tva),salaires:r.personnel,charges_exploitation:r.charges_fixes+r.cout_process,investissements:0,service_dette:r.interets+r.principal,impots:r.tva_payee,autres_decaissements:0}));
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
  bilans.push({annee:y+1,immobilisations:fixed,stocks_matieres:b.stocks_matieres,stocks_finis:b.stocks_produits_finis,creances:b.creances_clients,tva_clients:last.creances*s.taux_tva,credit_tva:last.credit_tva,banque:last.banque,fonds_propres:equity,dette:last.dette_fin,tva_due:last.tva_due,is_du:last.is_cumule,actif_total:assets,passif_total:liabilities,ecart:assets-liabilities});
  if(!close(assets,liabilities))throw Error('Bilan déséquilibré A'+(y+1)+' : '+(assets-liabilities));
 }
 return {version:'107',statut:'simulation_indicative_non_documentee',entrees:s,mois:months,annuel:annual,bfr:bfr.bfr_mensuel,tresorerie:cash[0].tresorerie_mensuelle,bilans,reserve_initiale:reserve,financement:{apport:s.investissement*.3,dette:debt},moteurs:['P2I_ECONOMIC_RESULT_ENGINE','P2I_FINANCIAL_ENGINE','P2I_BP_BFR_MENSUEL','P2I_BP_MOTEUR_TRESORERIE'],controles:{bilans_equilibres:true,bfr_mois:36,tresorerie_mois:12,financement:'30/70'}};
}
root.P2I_BP_SIMULATION_COMMUNE=Object.freeze({calculer});
})(typeof window!=='undefined'?window:globalThis);
