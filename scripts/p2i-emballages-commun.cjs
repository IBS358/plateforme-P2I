'use strict';
const regles=require('../data/p2i-emballages-regles.json');
const conserve=require('../data/p2i-conserverie-conditionnements.json');
const valid=x=>typeof x==='number'&&Number.isFinite(x)&&x>=0;
function comparer(options,sources,masse,change){
 if(!Array.isArray(options)||!valid(masse)||masse===0)throw Error('Base de comparaison invalide');
 const ids=new Set();
 const rows=options.map(o=>{
  if(ids.has(o.id)||!o.id)throw Error('Option dupliquée ou sans identifiant');ids.add(o.id);
  const s=sources[o.source_id];if(!s||!s.url||!s.consulte_le||!valid(s.prix_min)||!valid(s.prix_max)||!valid(o.prix_retenu)||o.prix_retenu<s.prix_min||o.prix_retenu>s.prix_max)throw Error('Source ou prix hors fourchette publiée');
  if(s.minimum_pieces!==null&&(!Number.isInteger(s.minimum_pieces)||s.minimum_pieces<1))throw Error('Minimum de commande invalide');
  const rate={USD:1,EUR:change.eur_usd,XOF:change.eur_usd/change.eur_xof}[s.devise];if(!valid(rate)||rate===0)throw Error('Conversion invalide');
  for(const k of ['fret_usd_piece','assurance_taux','provision_import_transit_taux','livraison_usd_piece','marquage_usd_piece','regroupement_usd_piece'])if(!valid(o[k]))throw Error('Provision invalide : '+k);
  const achat=o.prix_retenu*rate,assurance=achat*o.assurance_taux;
  const composants={contenant_fermeture:achat,fret:o.fret_usd_piece,assurance,import_transit:(achat+o.fret_usd_piece+assurance)*o.provision_import_transit_taux,livraison_locale:o.livraison_usd_piece,marquage:o.marquage_usd_piece,regroupement:o.regroupement_usd_piece};
  const emballage=Object.values(composants).reduce((n,x)=>n+x,0);
  const quality=regles.criteres_qualite.map(k=>o.qualite?.[k]);
  if(quality.some(x=>!regles.statuts_qualite.includes(x)))throw Error('Critère qualité manquant ou invalide');
  const incompatible=quality.includes('incompatible'),unknown=quality.includes('a_documenter');
  const economicKeys=['pertes_taux','energie_conditionnement_usd_piece','main_oeuvre_conditionnement_usd_piece','capex_adaptation_usd','amortissement_ans','entretien_annuel_usd','volume_annuel_pieces'];
  const missing=economicKeys.filter(k=>o[k]===null||o[k]===undefined);
  for(const k of economicKeys)if(o[k]!==null&&o[k]!==undefined&&!valid(o[k]))throw Error('Coût de comparaison invalide : '+k);
  if(o.pertes_taux!=null&&o.pertes_taux>=1)throw Error('Pertes de conditionnement invalides');
  if(o.amortissement_ans===0||o.volume_annuel_pieces===0)throw Error('Durée et volume strictement positifs requis');
  const complet=missing.length===0;
  // Le coût complet inclut l'annuité d'amortissement et l'entretien : comparaison
  // économique, pas un flux de trésorerie ni un ajout automatique au coût industriel.
  const coutComplet=complet?(emballage+o.energie_conditionnement_usd_piece+o.main_oeuvre_conditionnement_usd_piece)/(1-o.pertes_taux)+(o.capex_adaptation_usd/o.amortissement_ans+o.entretien_annuel_usd)/o.volume_annuel_pieces:null;
  return {...o,source:s,composants_usd_piece:composants,cout_approvisionnement_estime_usd_piece:emballage,cout_approvisionnement_estime_usd_kg:emballage/masse,cout_complet_comparatif_usd_piece:coutComplet,commande_minimale_achat_usd:s.minimum_pieces===null?null:s.minimum_pieces*achat,couts_manquants:missing,admissible_comparaison:!incompatible&&!unknown&&complet,statut:incompatible?'incompatible':unknown||!complet?'a_completer':quality.includes('hypothese_p2i')?'comparaison_sous_hypotheses':'comparaison_documentee',resultat_net:null,roi:null};
 });
 const admissibles=rows.filter(x=>x.admissible_comparaison).sort((a,b)=>a.cout_complet_comparatif_usd_piece-b.cout_complet_comparatif_usd_piece);
 return {options:rows,option_moins_couteuse_admissible:admissibles[0]?.id??null,baisse_prix_automatique:false,calcul_rentabilite_automatique:false};
}
function suivi(u){
 if(u.type_activite==='services')return {statut:'non_applicable_prestation',exigences:'Pas de produit emballé dans cette prestation.',pistes_locales:[]};
 const family=Object.entries(regles.familles).find(([,f])=>f.up_ids.includes(u.up_id));
 return {statut:'reference_exacte_et_prix_livre_a_documenter',famille:family?.[0]||'produit_a_qualifier',exigences:family?.[1].exigences||'Protection, manutention, conservation éventuelle et traçabilité adaptées au produit ; matériau, fermeture et machines à qualifier.',pistes_locales:(family?.[1].pistes_locales||[]).map(id=>({id,...regles.sources_locales[id]})),prix_livre_confirme:false,compatibilite_confirmee:false,baisse_prix_automatique:false,fabrication_auxiliaire_incluse:false};
}
function appliquer(data,change){
 data.parametres_communs.emballages=regles;
 for(const u of Object.values(data.unites)){
  u.controle_emballages=suivi(u);
  for(const v of Object.values(u.variantes))v.controle_emballages={...u.controle_emballages,format:v.emballage?.format??null,cout_actuel_qualification:v.emballage?.source||'a_documenter'};
 }
 data.unites.conserverie_legumes.comparaison_conditionnements={...conserve,...comparer(conserve.options,conserve.sources,conserve.masse_produit_kg,change),limites:'Les frais sont des provisions P2I, pas des prix livrés confirmés ni des droits officiels. Formats exacts et fermetures à préciser ; aucun rabais de quantité présumé. Aucun ROI des nouvelles options calculé avant consolidation de leur configuration.'};
 return data;
}
module.exports={comparer,suivi,appliquer,regles};
