'use strict';
const fs=require('fs'),vm=require('vm'),assert=require('assert/strict'),path=require('path');
const root=path.resolve(__dirname,'..'),c=vm.createContext({});c.window=c;
for(const f of ['js/p2i-economic-result-engine.js','js/p2i-financial-engine.js','js/p2i-bp-decouverte-bfr-engine.js','js/p2i-bp-decouverte-tresorerie-12-mois.js','js/p2i-bp-decouverte-simulation-commune.js','js/p2i-bp-decouverte-donnees.js','js/p2i-bp-decouverte-v108-contexte.js'])vm.runInContext(fs.readFileSync(path.join(root,f),'utf8'),c);
const api=c.P2I_BP_SIMULATION_COMMUNE,clone=x=>JSON.parse(JSON.stringify(x));let count=0;
for(const u of Object.values(c.P2I_BP_DONNEES.unites)){
 assert.ok(u.manutention.besoins);assert.equal(u.manutention.montant_usd,null);
 for(const v of Object.values(u.variantes))if(v.reference?.investissements_detail){
  const s=v.reference,r=api.calculer(s),without=clone(s);delete without.investissements_detail;
  assert.equal(r.investissements.statut,'ventile');
  assert.ok(Math.abs(r.investissements.postes.reduce((n,p)=>n+(p.montant_usd??0),0)-s.investissement)<1e-8);
  assert.equal(r.annuel[0].resultat_net,api.calculer(without).annuel[0].resultat_net,'Présentation sans changement des chiffres');
  const normalized=c.P2I_BP_V108_CONTEXTE.normalizeInput(s,u.up_id,s.configuration_id);
  assert.deepEqual(clone(normalized.investissements_detail),clone(s.investissements_detail),'Détail conservé dans le contrat de passage');
  assert.equal(api.calculer({...s,investissement:s.investissement+1000}).investissements.statut,'detail_a_reconcilier');
  count++;
 }
}
assert.equal(count,18);
const s=clone(c.P2I_BP_DONNEES.unites.adhesifs.variantes.reference.reference),v=api.ventilerInvestissement(s);
assert.equal(s.machines,21250);assert.equal(s.investissement,99850);
assert.equal(v.manutention.statut,'budget_mutualise');assert.equal(v.manutention.budget_mutualise_usd,10000);
assert.equal(v.postes.filter(p=>p.id==='pompe_flexibles_balance_manutention').length,1);
assert.equal(api.ventilerInvestissement({...s,investissements_detail:undefined}).statut,'non_ventile','Ancien dossier sans détail préservé');
const feed=clone(c.P2I_BP_DONNEES.unites.aliments_betail.variantes.reference.reference),fv=api.ventilerInvestissement(feed);
assert.equal(fv.manutention.statut,'a_chiffrer');assert.equal(fv.postes.find(p=>p.id==='manutention_a_chiffrer').montant_usd,null);
feed.investissements_detail.postes=feed.investissements_detail.postes.filter(p=>p.id!=='manutention_a_chiffrer');
feed.investissements_detail.postes.push({id:'transpalette',libelle:'Transpalette de test',categorie:'Manutention',montant_usd:2000,qualification:'Hypothèse de test uniquement'});
feed.investissements_detail.manutention.postes_budget_dedie=['transpalette'];feed.investissement+=2000;
const dedicated=api.calculer(feed);assert.equal(dedicated.investissements.manutention.budget_dedie_usd,2000);assert.equal(dedicated.investissements.manutention.statut,'budget_dedie');assert.ok(Math.abs(dedicated.financement.dette-feed.investissement*.7)<1e-8);
const bad=clone(s.investissements_detail);bad.postes[1].montant_usd=-1;assert.throws(()=>api.normaliserInvestissements(bad),/invalide/);
const dup=clone(s.investissements_detail);dup.manutention.postes_budget_dedie=dup.manutention.postes_budget_mutualise;assert.throws(()=>api.normaliserInvestissements(dup),/deux fois/);
console.log('Investissements : 18 ventilations réconciliées, manutention propre aux UP, budget mutualisé/dédié et montant inconnu sans double compte ; chiffres et dossiers historiques préservés.');
