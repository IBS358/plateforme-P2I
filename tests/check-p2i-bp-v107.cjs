'use strict';
const fs=require('node:fs'),vm=require('node:vm'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.resolve(__dirname,'..'),c=vm.createContext({});c.window=c;
for(const n of ['p2i-economic-result-engine','p2i-financial-engine','p2i-bp-decouverte-bfr-engine','p2i-bp-decouverte-tresorerie-12-mois','p2i-bp-decouverte-v107-scenarios','p2i-bp-decouverte-simulation-commune'])vm.runInContext(fs.readFileSync(path.join(root,'js',n+'.js'),'utf8'),c);
const calls={};for(const [name,method] of [['P2I_ECONOMIC_RESULT_ENGINE','calculer'],['P2I_FINANCIAL_ENGINE','calculer'],['P2I_BP_BFR_MENSUEL','calculate'],['P2I_BP_MOTEUR_TRESORERIE','calculer']]){const original=c[name];c[name]={[method]:(...args)=>{calls[name]=(calls[name]||0)+1;return original[method](...args);},...Object.fromEntries(Object.entries(original).filter(([k])=>k!==method))};}
const calculate=c.P2I_BP_SIMULATION_COMMUNE.calculer;
for(const variant of ['crackers','biscuits_mous','biscuits_durs']){
 const input=c.P2I_BP_V107_SCENARIOS.obtenir(variant),before=JSON.stringify(input),r=calculate(input);
 assert.equal(JSON.stringify(input),before,'Les entrées ne doivent pas être mutées');
 assert.equal(r.bfr.length,36);assert.equal(r.tresorerie.length,12);assert.equal(r.annuel.length,3);assert.equal(r.bilans.length,3);
 assert.equal(r.financement.apport,input.investissement*.3);assert.equal(r.financement.dette,input.investissement*.7);
 assert.equal(r.statut,'simulation_indicative_non_documentee');
 for(const balance of r.bilans)assert.ok(Math.abs(balance.ecart)<.01,'Aucun équilibrage fictif');
 for(let i=0;i<36;i++){
  const m=r.mois[i],b=r.bfr[i];
  assert.ok(Math.abs(b.stocks_produits_finis-m.stock_valeur)<.001);
  assert.ok(Math.abs(m.banque-m.is_cumule-m.tresorerie_libre)<.001);
  assert.ok(Math.abs(m.stock_quantite-((i?r.mois[i-1].stock_quantite:0)+m.production-m.ventes))<.001);
 }
 const changed=JSON.parse(before);changed.prix=changed.prix.map(x=>x*1.1);const r2=calculate(changed);
 assert.ok(r2.annuel[0].chiffre_affaires>r.annuel[0].chiffre_affaires);
 assert.ok(r2.annuel[0].resultat_net>r.annuel[0].resultat_net,'Le moteur doit recalculer le résultat');
}
for(const n of Object.keys(calls))assert.ok(calls[n]>0,'Appel du moteur commun requis : '+n);
let bad=c.P2I_BP_V107_SCENARIOS.obtenir('biscuits_mous');bad.part_apport=.4;bad.part_dette=.6;assert.throws(()=>calculate(bad),/30\/70/);
bad=c.P2I_BP_V107_SCENARIOS.obtenir('biscuits_mous');bad.ventes[0]=99999999;assert.throws(()=>calculate(bad),/stock/);
bad=c.P2I_BP_V107_SCENARIOS.obtenir('biscuits_mous');bad.prix[0]=null;assert.throws(()=>calculate(bad),/prix/);
const s=c.P2I_BP_V107_SCENARIOS.obtenir('biscuits_durs');assert.equal(s.machines,null,'Ne pas inventer le budget machines absent');
assert.ok(c.P2I_BP_V107_SCENARIOS.obtenir('crackers').statut_exploitation.includes('Biscuits mous'));
const html=fs.readFileSync(path.join(root,'business-plan-decouverte-v107.html'),'utf8');assert.ok(!/<script src=|<link rel="stylesheet"/.test(html));assert.ok(html.includes('data:image/jpeg;base64,'));
assert.ok(fs.existsSync(path.join(root,'business-plan-decouverte-avant-v107.html')));
console.log('V107 : moteurs communs réellement appelés, recalculs, 30/70, stocks, 36 BFR, 12 trésorerie et 9 bilans contrôlés.');
