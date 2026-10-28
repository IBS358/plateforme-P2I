'use strict';
const assert=require('node:assert/strict'),fs=require('node:fs'),vm=require('node:vm');
const {comparer}=require('../scripts/p2i-emballages-commun.cjs');
const clone=x=>JSON.parse(JSON.stringify(x)),fx={eur_usd:1.1193,eur_xof:655.957};
const data=require('../data/p2i-bp-decouverte-donnees.json');
assert.equal(Object.keys(data.unites).length,96);
for(const u of Object.values(data.unites)){
 const ctrl=u.controle_emballages;assert.ok(ctrl);assert.equal(ctrl.statut==='non_applicable_prestation',u.type_activite==='services');
 for(const v of Object.values(u.variantes))assert.ok(v.controle_emballages);
 if(u.type_activite!=='services'){assert.equal(ctrl.prix_livre_confirme,false);assert.equal(ctrl.baisse_prix_automatique,false);assert.equal(ctrl.fabrication_auxiliaire_incluse,false);}
}
const def=require('../data/p2i-conserverie-conditionnements.json'),r=comparer(def.options,def.sources,.4,fx);
assert.equal(data.unites.conserverie_legumes.comparaison_conditionnements.piste_prioritaire,'poche_sterilisable');
assert.equal(r.option_moins_couteuse_admissible,null,'Un prix de contenant bas ne vaut pas une solution complète compatible');
assert.ok(Math.abs(r.options[0].cout_approvisionnement_estime_usd_piece-.16496)<1e-12);
assert.ok(Math.abs(r.options[1].cout_approvisionnement_estime_usd_piece-.2382)<1e-12);
for(const o of r.options){assert.equal(o.resultat_net,null);assert.equal(o.roi,null);assert.equal(o.cout_complet_comparatif_usd_piece,null);}
// Hypothèses explicites admises pour le Découverte : aucun devis ni certificat exigé.
const options=clone(def.options);for(const o of options){o.qualite=Object.fromEntries(Object.keys(o.qualite).map(k=>[k,'hypothese_p2i']));Object.assign(o,{pertes_taux:.02,energie_conditionnement_usd_piece:.01,main_oeuvre_conditionnement_usd_piece:.02,capex_adaptation_usd:10000,amortissement_ans:5,entretien_annuel_usd:500,volume_annuel_pieces:100000});}
let result=comparer(options,def.sources,.4,fx);assert.equal(result.option_moins_couteuse_admissible,'poche_sterilisable');assert.equal(result.options[0].statut,'comparaison_sous_hypotheses');
options[0].qualite.fermeture='incompatible';assert.equal(comparer(options,def.sources,.4,fx).option_moins_couteuse_admissible,'boite_metal','La moins chère est exclue si incompatible');
options[0].qualite.fermeture='hypothese_p2i';options[0].capex_adaptation_usd=1000000;assert.equal(comparer(options,def.sources,.4,fx).option_moins_couteuse_admissible,'boite_metal','Coût machines inclus dans le classement économique');
const bad=clone(def.options);bad[0].prix_retenu=.001;assert.throws(()=>comparer(bad,def.sources,.4,fx),/fourchette/);
const g=require('../data/archives/p2i-conserverie-verre-2026-10-28.json').dossier.variantes.reference.emballage;assert.ok(Math.abs(g.cout_usd_par_kg-385*1.1193/655.957/.4)<1e-12);assert.equal(g.source_prix.prix_bocal_xof,350);
console.log('Emballages communs : 96 UP suivies ; qualité, coûts complets, hypothèses admises, prix sourcés, absence de baisse automatique et priorité poche contrôlés.');

const {chiffrerFormat}=require('../scripts/p2i-emballages-commun.cjs');
const f={masse_produit_kg:1,pertes_emballages_taux:.02,composants_usd_piece:{achat:.045,frais:.12554}};
const one=chiffrerFormat(f),small=chiffrerFormat({...f,masse_produit_kg:.4});
assert.ok(Math.abs(one.cout_usd_par_kg-.17054/.98)<1e-12);assert.ok(Math.abs(small.cout_usd_par_kg-one.cout_usd_par_kg*2.5)<1e-12);
for(const patch of [{masse_produit_kg:0},{pertes_emballages_taux:1},{composants_usd_piece:{x:-1}},{composants_usd_piece:[]}])assert.throws(()=>chiffrerFormat({...f,...patch}),/invalide/);
