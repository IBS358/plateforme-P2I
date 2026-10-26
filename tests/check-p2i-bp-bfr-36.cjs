/** Tests du moteur BFR P2I sur 36 mois : paiements, stocks, données absentes. */
"use strict";
const fs=require("node:fs"),path=require("node:path"),vm=require("node:vm"),assert=require("node:assert/strict");
const ctx=vm.createContext({});
vm.runInContext(fs.readFileSync(path.resolve(__dirname,"../js/p2i-bp-decouverte-bfr-36.js"),"utf8"),ctx);
const calc=ctx.P2I_BP_BFR_MENSUEL.calculer;
const month=()=>({ventes_facturees_usd:100000,achats_fournisseurs_usd:45000,
 stock_matieres_fin_usd:12000,stock_produits_finis_fin_usd:8000,
 autres_dettes_exploitation_fin_usd:2000,dettes_fournisseurs_fin_usd:0});
const base={creances_initiales_usd:0,conditions_clients:{comptant:.4,a_30_jours:.6},
 conditions_fournisseurs:"comptant",mois:Array.from({length:36},month)};
const good=calc(base);
assert.equal(good.valide,true,JSON.stringify(good.blocages));
assert.equal(good.bfr_mensuel.length,36);
assert.equal(good.bfr_mensuel[0].encaissements_ventes_usd,40000);
assert.equal(good.bfr_mensuel[1].encaissements_ventes_usd,100000);
assert.equal(good.bfr_mensuel[0].creances_clients,60000);
assert.equal(good.bfr_mensuel[0].stocks,20000);
assert.equal(good.bfr_mensuel[0].bfr,78000);
assert.equal(good.bfr_mensuel[0].achats_payes_comptant_usd,45000);
const clone=()=>JSON.parse(JSON.stringify(base));
let d=clone();d.mois[1].ventes_facturees_usd=null;
assert.equal(calc(d).valide,false);
assert.equal(calc(d).bfr_mensuel,null);
d=clone();d.mois[2].stock_produits_finis_fin_usd=-1;
assert.equal(calc(d).valide,false);
d=clone();d.mois[2].dettes_fournisseurs_fin_usd=100;
assert.equal(calc(d).valide,false);
d=clone();d.mois.length=12;
assert.equal(calc(d).valide,false);
d=clone();d.creances_initiales_usd=1000;
assert.equal(calc(d).valide,false);
d=clone();d.conditions_clients.comptant=.5;
assert.equal(calc(d).valide,false);
assert.equal(calc({}).valide,false);
console.log("BFR 36 mois : encaissements 40/60, stocks, fournisseurs comptant et données manquantes contrôlés.");
