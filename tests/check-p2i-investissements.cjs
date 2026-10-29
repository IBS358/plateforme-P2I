'use strict';
const fs=require('fs'),vm=require('vm'),assert=require('assert/strict'),path=require('path');
const root=path.resolve(__dirname,'..'),c=vm.createContext({});c.window=c;
for(const f of ['js/p2i-economic-result-engine.js','js/p2i-financial-engine.js','js/p2i-bp-decouverte-bfr-engine.js','js/p2i-bp-decouverte-tresorerie-12-mois.js','js/p2i-bp-decouverte-simulation-commune.js','js/p2i-bp-decouverte-donnees.js','js/p2i-bp-decouverte-v108-contexte.js'])vm.runInContext(fs.readFileSync(path.join(root,f),'utf8'),c);
c.P2I_BP_DONNEES=require('./helpers/avant-paie-ci.cjs')(c.P2I_BP_DONNEES);
const api=c.P2I_BP_SIMULATION_COMMUNE,clone=x=>JSON.parse(JSON.stringify(x));let count=0;
const baseline=require('./fixtures/p2i-avant-manutention-2026-10-28.json');
const near=(a,b)=>assert.ok(Math.abs(a-b)<1e-7,`${a} != ${b}`);
for(const u of Object.values(c.P2I_BP_DONNEES.unites)){
 assert.ok(u.manutention.besoins);
 for(const [config,v]of Object.entries(u.variantes))if(v.reference?.investissements_detail){
  if(u.up_id==='confection'||!baseline[u.up_id+'__'+config])continue; // Les 6 nouvelles configurations sont contrôlées dans check-p2i-textile.
  const s=v.reference,r=api.calculer(s),old=baseline[u.up_id+'__'+config],before=api.calculer(old),mc=v.hypotheses_explicites.manutention_chiffree;
  assert.equal(r.investissements.statut,'ventile');assert.equal(r.investissements.postes_a_chiffrer.length,0,'Plus de manutention absente sur une UP traitée');
  near(r.investissements.postes.reduce((n,p)=>n+(p.montant_usd??0),0),s.investissement);
  near(r.investissements.manutention.budget_dedie_usd,mc.budget_livre_estime_usd);
  const isConserve=u.up_id==='conserverie_legumes',deltaMachines=isConserve?50000:0,deltaPackaging=isConserve?v.emballage.cout_usd_par_kg-.24:0;
  near(s.investissement-old.investissement,(mc.mode==='budget_ajoute'?mc.budget_livre_estime_usd:0)+deltaMachines);
  near(s.cout_production_kg[0]-old.cout_production_kg[0],mc.entretien_supplementaire_usd_an/s.production[0]+deltaPackaging);
  assert.deepEqual(clone(s.prix),old.prix,'Aucun prix de vente relevé pour compenser les coûts');assert.deepEqual(clone(s.ventes),old.ventes);assert.equal(s.machines,old.machines+deltaMachines);
  const comparable=api.calculer({...old,cout_production_kg:old.cout_production_kg.map((x,i)=>x+deltaPackaging*(1+old.croissance_charges)**i)});
  assert.ok(r.annuel[0].resultat_net<comparable.annuel[0].resultat_net,'Effet investissement vérifié à coût emballage comparable');
  near(r.annuel[0].amortissements,(s.investissement-mc.budget_livre_estime_usd)/s.duree_amortissement_ans+mc.budget_livre_estime_usd/5);
  near(r.financement.apport,.3*s.investissement);near(r.financement.dette,.7*s.investissement);
  near(r.financement.apport_total,r.financement.apport+r.reserve_initiale);near(r.financement.besoin_total,s.investissement+r.reserve_initiale);near(r.financement.total_ressources,r.financement.besoin_total);
  assert.ok(Math.min(...r.mois.slice(0,12).map(x=>x.tresorerie_libre))>=s.investissement*s.coussin_tresorerie-.01,'Réserve couvre le point bas et le coussin sous hypothèses');
  assert.ok(r.bilans.every(x=>Math.abs(x.ecart)<.02));assert.equal(r.bfr.length,36);assert.equal(r.tresorerie.length,12);
  const normalized=c.P2I_BP_V108_CONTEXTE.normalizeInput(s,u.up_id,s.configuration_id);
  assert.deepEqual(clone(normalized.investissements_detail),clone(s.investissements_detail));assert.deepEqual(clone(normalized.amortissements_specifiques),clone(s.amortissements_specifiques));
  assert.equal(api.calculer({...s,investissement:s.investissement+1000}).investissements.statut,'detail_a_reconcilier');
  // Les paramètres historiques restent calculables sans ajout rétroactif.
  assert.equal(api.calculer(old).entrees.investissement,old.investissement);
  count++;
 }
}
assert.equal(count,18);
const s=clone(c.P2I_BP_DONNEES.unites.adhesifs.variantes.reference.reference),v=api.ventilerInvestissement(s);
assert.equal(s.machines,21250);assert.equal(s.investissement,99850);assert.equal(v.manutention.statut,'budget_dedie');assert.equal(v.manutention.budget_dedie_usd,1420.52);
near(v.postes.find(p=>p.id==='pompe_flexibles_balance_manutention').montant_usd+v.manutention.budget_dedie_usd,10000);
assert.equal(api.ventilerInvestissement({...s,investissements_detail:undefined}).statut,'non_ventile');
const bad=clone(s.investissements_detail);bad.postes[1].montant_usd=-1;assert.throws(()=>api.normaliserInvestissements(bad),/invalide/);
const dup=clone(s.investissements_detail);dup.manutention.postes_budget_mutualise=dup.manutention.postes_budget_dedie;assert.throws(()=>api.normaliserInvestissements(dup),/deux fois/);
assert.throws(()=>api.normaliserAmortissements([{id:'x',base_usd:100,duree_ans:2}]),/invalide/);
assert.throws(()=>api.calculer({...s,amortissements_specifiques:[{id:'x',base_usd:s.investissement+1,duree_ans:5}]}),/supérieures/);
const legacy=clone(baseline['aliments_betail__reference']);assert.equal(api.ventilerInvestissement(legacy).manutention.statut,'a_chiffrer');assert.equal(api.ventilerInvestissement(legacy).postes.find(p=>p.id==='manutention_a_chiffrer').montant_usd,null,'Ancien montant inconnu jamais remplacé par zéro');
console.log('Investissements : 18 paniers historiques chiffrés, 3 enveloppes réaffectées sans double compte ; entretien, amortissement 5 ans, apport total avec réserve, dette, trésorerie, bilans et dossiers historiques contrôlés.');
