/** Raccordement du BFR 40/60 à l'assembleur et à la trésorerie 12 mois. */
"use strict";
const fs=require("node:fs"),path=require("node:path"),vm=require("node:vm"),assert=require("node:assert/strict");
const root=path.resolve(__dirname,".."),ctx=vm.createContext({});
for(const file of ["js/p2i-bp-decouverte-bfr-engine.js","js/p2i-bp-decouverte-bfr-36-mois.js",
 "js/p2i-bp-decouverte-tresorerie-12-mois.js","js/p2i-bp-decouverte-financial-validation.js",
 "js/p2i-bp-decouverte-assembleur-previsions.js"])
 vm.runInContext(fs.readFileSync(path.join(root,file),"utf8"),ctx,{filename:file});
const hypotheses={part_clients_comptant:.4,part_clients_30_jours:.6,stock_matieres_jours:30,
 stock_produits_finis_jours:15,delai_fournisseurs_jours:0,jours_mois:30};
const mois=Array.from({length:36},()=>({ventes_usd:100000,consommation_matieres_usd:30000,cout_production_vendue_usd:40000}));
const r=ctx.P2I_BP_BFR_MENSUEL.calculate({hypotheses,creances_ouverture_usd:0,mois});
assert.equal(r.valide,true,JSON.stringify(r.blocages));
assert.equal(r.bfr_mensuel.length,36);
assert.equal(r.bfr_mensuel[0].creances_clients,60000);
assert.equal(r.bfr_mensuel[0].encaissements_clients,40000);
assert.equal(r.bfr_mensuel[1].encaissements_clients,100000);
const investment=Object.fromEntries(ctx.P2I_BP_CONTROLES_FINANCIERS.requiredInvestment.map(k=>[k,1000]));
investment.equipements=450000;investment.total=459000;
const input={
 up_id:"biscuiterie",configuration_id:"crackers",
 investissement:investment,
 compte_resultat:Array.from({length:3},()=>({chiffre_affaires:1200000,cout_produits_vendus:480000,charges_exploitation:300000,amortissements:100000,charges_financieres:20000,impots:30000,resultat_net:270000})),
 bilans_annuels:Array.from({length:3},()=>({actif_total:700000,passif_total:700000})),
 entrees_bfr_scenario:{hypotheses,creances_ouverture_usd:0,mois},
 entrees_tresorerie:{solde_initial:20000,mois:Array.from({length:12},(_,i)=>({
  ventes_clients:i===0?40000:100000,autres_encaissements:0,achats_matiere:30000,
  salaires:10000,charges_exploitation:10000,investissements:0,service_dette:0,impots:0,autres_decaissements:0
 }))}
};
const assembler=ctx.P2I_BP_ASSEMBLEUR_PREVISIONS;
const good=assembler.construire(input);
assert.equal(good.valide,true,JSON.stringify(good.erreurs));
assert.equal(good.previsions.bfr_mensuel.length,36);
assert.equal(good.previsions.tresorerie_mensuelle.length,12);
const wrong=JSON.parse(JSON.stringify(input));wrong.entrees_tresorerie.mois[1].ventes_clients=40000;
const bad=assembler.construire(wrong);
assert.equal(bad.valide,false);
assert.ok(bad.erreurs.some(e=>e.includes("encaissements clients incompatibles")));
const both=JSON.parse(JSON.stringify(input));both.entrees_bfr={mois:[],bfr_initial:0};
assert.ok(assembler.construire(both).erreurs.some(e=>e.includes("Choisir un seul moteur BFR")));
console.log("Scénario 40/60 raccordé au BFR 36 mois et à la trésorerie 12 mois.");
