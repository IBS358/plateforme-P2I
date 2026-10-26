/** Tests du contrat financier commun : valeurs manquantes, arithmétique et horizons. */
"use strict";
const fs=require("node:fs"),path=require("node:path"),vm=require("node:vm"),assert=require("node:assert/strict");
const source=fs.readFileSync(path.resolve(__dirname,"../js/p2i-bp-decouverte-financial-validation.js"),"utf8");
const ctx=vm.createContext({});vm.runInContext(source,ctx);
const check=ctx.P2I_BP_CONTROLES_FINANCIERS.validate;
const empty=check({});
assert.equal(empty.valide,false);
assert.equal(empty.financement_indicatif,null);
assert.ok(empty.blocages.some(x=>x.champ==="bfr_mensuel"));
assert.ok(empty.blocages.some(x=>x.champ==="tresorerie_mensuelle"));
const investment=Object.fromEntries(ctx.P2I_BP_CONTROLES_FINANCIERS.requiredInvestment.map(k=>[k,1000]));
investment.equipements=450000;
investment.reserve_tresorerie=15000;
const annual=()=>({chiffre_affaires:1000000,cout_produits_vendus:500000,charges_exploitation:200000,amortissements:100000,charges_financieres:20000,impots:30000,resultat_net:150000});
const bfr=()=>({stocks:30000,creances_clients:20000,dettes_exploitation:10000,bfr:40000});
const treasury=i=>({encaissements:100000,decaissements:95000,solde_initial:10000+i*5000,solde_final:15000+i*5000});
const data={investissement:investment,compte_resultat:Array.from({length:3},annual),
 bfr_mensuel:Array.from({length:36},bfr),
 tresorerie_mensuelle:Array.from({length:12},(_,i)=>treasury(i)),
 bilans_annuels:Array.from({length:3},()=>({actif_total:900000,passif_total:900000}))};
const good=check(data);
assert.equal(good.valide,true,JSON.stringify(good.blocages));
assert.equal(good.financement_indicatif.investissement_total_usd,459000);
assert.equal(good.financement_indicatif.apport_40_usd,183600);
assert.equal(good.financement_indicatif.dette_60_usd,275400);
assert.equal(good.financement_indicatif.reserve_tresorerie_distincte_usd,15000);
const clone=()=>JSON.parse(JSON.stringify(data));
let bad=clone();bad.bfr_mensuel[4].bfr=0;
assert.ok(check(bad).blocages.some(x=>x.champ==="bfr_mensuel.5.bfr"));
bad=clone();bad.tresorerie_mensuelle.push(treasury(12));
assert.ok(check(bad).blocages.some(x=>x.champ==="tresorerie_mensuelle"));
bad=clone();bad.compte_resultat[1].resultat_net=0;
assert.ok(check(bad).blocages.some(x=>x.champ==="compte_resultat.2.resultat_net"));
bad=clone();bad.investissement.fret=null;
assert.equal(check(bad).financement_indicatif,null);
bad=clone();bad.bilans_annuels[2].passif_total=0;
assert.ok(check(bad).blocages.some(x=>x.champ==="bilans_annuels.3"));
bad=clone();bad.tresorerie_mensuelle[3].solde_initial=0;
assert.ok(check(bad).blocages.some(x=>x.champ==="tresorerie_mensuelle.4.solde_initial"));
console.log("Validation financière : horizons, 40/60, BFR, bilans et trésorerie vérifiés.");
