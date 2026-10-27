/** BFR P2I : vérifie 36 mois, stock sans doublon et crédit clients 30 jours. */
"use strict";
const fs=require("node:fs"),path=require("node:path"),vm=require("node:vm"),assert=require("node:assert/strict");
const ctx=vm.createContext({});
vm.runInContext(fs.readFileSync(path.resolve(__dirname,"../js/p2i-bp-decouverte-bfr-engine.js"),"utf8"),ctx);
const calculate=ctx.P2I_BP_BFR_MENSUEL.calculate;
const hypotheses={part_clients_comptant:.4,part_clients_30_jours:.6,stock_matieres_jours:30,
 stock_produits_finis_jours:15,delai_fournisseurs_jours:0,jours_mois:30};
const mois=Array.from({length:36},(_,i)=>({
 ventes_usd:10000+i*100,consommation_matieres_usd:2000,
 cout_production_vendue_usd:4000
}));
const input={hypotheses,mois,creances_ouverture_usd:0};
assert.equal(calculate({hypotheses,mois}).valide,false,"Créances initiales non présumées nulles");
const result=calculate(input);
assert.equal(result.valide,true,JSON.stringify(result.blocages));
assert.equal(result.bfr_mensuel.length,36);
assert.equal(result.bfr_mensuel[0].stocks_matieres,2000);
assert.equal(result.bfr_mensuel[0].stocks_produits_finis,2000);
assert.equal(result.bfr_mensuel[0].stocks,4000);
assert.equal(result.bfr_mensuel[0].creances_clients,6000);
assert.equal(result.bfr_mensuel[0].dettes_exploitation,0);
assert.equal(result.bfr_mensuel[0].bfr,10000);
assert.equal(result.bfr_mensuel[0].encaissements_clients,4000);
assert.equal(result.bfr_mensuel[1].encaissements_clients,4040+6000);
const clone=()=>JSON.parse(JSON.stringify(input));
let bad=clone();bad.mois[4].consommation_matieres_usd=null;
assert.equal(calculate(bad).valide,false);
assert.equal(calculate(bad).bfr_mensuel,null);
bad=clone();bad.mois.pop();
assert.equal(calculate(bad).valide,false);
bad=clone();bad.hypotheses.delai_fournisseurs_jours=30;
assert.equal(calculate(bad).valide,false);
bad=clone();bad.mois[0].ventes_usd=-1;
assert.equal(calculate(bad).valide,false);
const actual=clone();
actual.mois[0].stock_matieres_quantite=100;
actual.mois[0].cout_unitaire_matieres_usd=10;
actual.mois[0].stock_finis_quantite=20;
actual.mois[0].cout_unitaire_finis_usd=30;
const actualResult=calculate(actual);
assert.equal(actualResult.valide,true);
assert.equal(actualResult.bfr_mensuel[0].stocks_matieres,1000);
assert.equal(actualResult.bfr_mensuel[0].stocks_produits_finis,600);
assert.equal(actualResult.bfr_mensuel[0].stocks,1600,"Stocks physiques sans addition des stocks cibles");
assert.equal(actualResult.bfr_mensuel[0].bfr,7600);
assert.equal(actualResult.bfr_mensuel[0].methode_stock,"stock_physique_valorise");
assert.equal(actualResult.bfr_mensuel[1].methode_stock,"stock_cible_30_15_jours");
const short=clone();short.hypotheses.stock_matieres_jours=1;assert.equal(calculate(short).bfr_mensuel[0].stocks_matieres,2000/30);
const incompleteStock=clone();
incompleteStock.mois[0].stock_matieres_quantite=100;
assert.equal(calculate(incompleteStock).valide,false,"Rejeter la valorisation physique incomplète");
console.log("BFR : 36 mois, 40/60 clients, 30/15 jours de stocks, fournisseurs comptant vérifiés.");
