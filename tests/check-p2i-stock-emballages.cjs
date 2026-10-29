'use strict';
const assert=require('node:assert/strict'),fs=require('node:fs'),vm=require('node:vm');
const c=vm.createContext({});c.window=c;
for(const f of ['js/p2i-economic-result-engine.js','js/p2i-financial-engine.js','js/p2i-bp-decouverte-bfr-engine.js','js/p2i-bp-decouverte-tresorerie-12-mois.js','js/p2i-bp-decouverte-simulation-commune.js','js/p2i-bp-decouverte-donnees.js','js/p2i-bp-decouverte-v108-contexte.js'])vm.runInContext(fs.readFileSync(f,'utf8'),c);
const api=c.P2I_BP_SIMULATION_COMMUNE,clone=x=>JSON.parse(JSON.stringify(x)),near=(a,b)=>assert.ok(Math.abs(a-b)<.02,`${a} != ${b}`);let count=0;
for(const u of Object.values(c.P2I_BP_DONNEES.unites))for(const v of Object.values(u.variantes)){
 const s=v.reference;if(!s?.production)continue;
 const r=api.calculer(s),legacy=clone(s);delete legacy.cout_emballages_stockables_unite;delete legacy.stock_emballages_jours;
 const before=api.calculer(legacy);near(r.annuel[0].resultat_net,before.annuel[0].resultat_net);near(r.financement.dette,before.financement.dette);near(r.entrees.investissement,before.entrees.investissement);assert.ok(r.reserve_initiale>=before.reserve_initiale-.02);
 assert.equal(r.emballages.statut,'stock_modele');assert.equal(before.emballages.statut,'non_isole_dossier_historique');
 assert.equal(r.bfr.length,36);assert.equal(r.tresorerie.length,12);for(const b of r.bilans)near(b.ecart,0);
 let previous=0;for(const m of r.mois){near(previous+m.achats_emballages-m.consommation_emballages,m.stock_emballages);previous=m.stock_emballages;const b=r.bfr[m.mois-1];near(b.stocks,b.stocks_matieres+b.stocks_emballages+b.stocks_produits_finis);}
 const n=c.P2I_BP_V108_CONTEXTE.normalizeInput(s,u.up_id,s.configuration_id);assert.equal(n.stock_emballages_jours,s.stock_emballages_jours);assert.equal(n.cout_emballages_stockables_unite,s.cout_emballages_stockables_unite);
 assert.equal(c.P2I_BP_V108_CONTEXTE.normalizeInput(legacy,u.up_id,s.configuration_id).stock_emballages_jours,undefined);
 count++;
}
assert.equal(count,27);
const juice=c.P2I_BP_DONNEES.unites.jus_boissons.variantes.reference.reference,juiceR=api.calculer(juice);near(juiceR.emballages.stock_lancement,5000);near(juiceR.mois[0].achats_emballages,15000);near(juiceR.mois[0].consommation_emballages,10000);
const zero=api.calculer({...clone(juice),stock_emballages_jours:0});near(juiceR.reserve_initiale-zero.reserve_initiale,5000);
near(c.P2I_BP_DONNEES.unites.produits_industriels.variantes.reference.reference.cout_emballages_stockables_unite,.005);
assert.throws(()=>api.calculer({...clone(juice),stock_emballages_jours:91}),/emballages/);
const missing=clone(juice);delete missing.stock_emballages_jours;assert.throws(()=>api.calculer(missing),/emballages/);
console.log('27 simulations : stocks vides CUMP, conservation des achats, absence de double compte, BFR/bilans, réserve en apport, IBC loués exclus et dossiers historiques préservés.');
