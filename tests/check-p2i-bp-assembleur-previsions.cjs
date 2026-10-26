/** Contrôle d'assemblage des moteurs financiers sans données implicites. */
"use strict";
const fs=require("node:fs"),path=require("node:path"),vm=require("node:vm"),assert=require("node:assert/strict");
const ctx=vm.createContext({});
for(const file of ["p2i-bp-decouverte-bfr-36-mois.js","p2i-bp-decouverte-tresorerie-12-mois.js","p2i-bp-decouverte-financial-validation.js","p2i-bp-decouverte-assembleur-previsions.js"])
 vm.runInContext(fs.readFileSync(path.resolve(__dirname,"../js",file),"utf8"),ctx,{filename:file});
const assembler=ctx.P2I_BP_ASSEMBLEUR_PREVISIONS;
assert.equal(assembler.construire({}).valide,false);
const postes=ctx.P2I_BP_CONTROLES_FINANCIERS.requiredInvestment;
const investissement=Object.fromEntries(postes.map(k=>[k,1000]));
investissement.equipements=450000;investissement.total=459000;
const flux=Object.fromEntries(ctx.P2I_BP_MOTEUR_TRESORERIE.champs_requis.map(k=>[k,0]));
flux.ventes_clients=10000;flux.achats_matiere=4000;
const entree={up_id:"biscuiterie",configuration_id:"crackers",investissement,
 compte_resultat:Array.from({length:3},()=>({chiffre_affaires:120000,cout_produits_vendus:48000,charges_exploitation:20000,amortissements:10000,charges_financieres:2000,impots:10000,resultat_net:30000})),
 entrees_bfr:{bfr_initial:0,mois:Array.from({length:36},()=>({stocks_matieres:30000,stocks_produits_finis:15000,creances_clients:20000,dettes_exploitation:0}))},
 entrees_tresorerie:{solde_initial:1000,mois:Array.from({length:12},()=>({...flux}))},
 bilans_annuels:Array.from({length:3},()=>({actif_total:600000,passif_total:600000}))};
const good=assembler.construire(entree);
assert.equal(good.valide,true,JSON.stringify(good.erreurs));
assert.equal(good.previsions.bfr_mensuel.length,36);
assert.equal(good.previsions.tresorerie_mensuelle.length,12);
assert.equal(good.previsions.bfr_mensuel[0].bfr,65000);
assert.equal(good.previsions.tresorerie_mensuelle[0].solde_final,7000);
assert.equal(good.financement_indicatif.investissement_total_usd,459000);
const missing=structuredClone(entree);delete missing.entrees_bfr.mois[3].stocks_matieres;
assert.equal(assembler.construire(missing).valide,false);
const bad=structuredClone(entree);bad.compte_resultat[2].resultat_net=1;
assert.equal(assembler.construire(bad).valide,false);
const short=structuredClone(entree);short.entrees_tresorerie.mois.pop();
assert.equal(assembler.construire(short).valide,false);
console.log("Assembleur : 36 mois BFR, 12 mois trésorerie, 3 exercices, erreurs bloquantes.");
