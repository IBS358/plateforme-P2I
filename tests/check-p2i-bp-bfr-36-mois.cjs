/** P2I — Tests du BFR sur 36 mois et de la variation de trésorerie. */
"use strict";
const fs=require("node:fs"),path=require("node:path"),vm=require("node:vm"),assert=require("node:assert/strict");
const ctx=vm.createContext({});
vm.runInContext(fs.readFileSync(path.resolve(__dirname,"../js/p2i-bp-decouverte-bfr-36-mois.js"),"utf8"),ctx);
const engine=ctx.P2I_BP_MOTEUR_BFR;
const mois=Array.from({length:36},(_,i)=>({
 stocks_matieres:30000,stocks_produits_finis:15000,
 creances_clients:20000+i*100,dettes_exploitation:0
}));
const r=engine.calculer({bfr_initial:0,mois});
assert.equal(r.valide,true,JSON.stringify(r.erreurs));
assert.equal(r.bfr_mensuel.length,36);
assert.equal(r.bfr_mensuel[0].stocks,45000);
assert.equal(r.bfr_mensuel[0].bfr,65000);
assert.equal(r.bfr_mensuel[0].variation_bfr,65000);
assert.equal(r.bfr_mensuel[1].variation_bfr,100);
assert.equal(r.bfr_mensuel[35].bfr,68500);
assert.equal(r.variation_cumulee,68500);
assert.equal(engine.calculer({bfr_initial:0,mois:mois.slice(0,12)}).valide,false);
assert.equal(engine.calculer({bfr_initial:null,mois}).valide,false);
const missing=mois.map(x=>({...x}));delete missing[7].stocks_produits_finis;
const bad=engine.calculer({bfr_initial:0,mois:missing});
assert.equal(bad.valide,false);
assert.equal(bad.bfr_mensuel,null);
assert.ok(bad.erreurs.some(x=>x.includes("Mois 8")&&x.includes("stocks_produits_finis")));
const negative=mois.map(x=>({...x}));negative[2].dettes_exploitation=-1;
assert.equal(engine.calculer({bfr_initial:0,mois:negative}).valide,false);
const payable=mois.map(x=>({...x,dettes_exploitation:80000}));
const p=engine.calculer({bfr_initial:0,mois:payable});
assert.equal(p.valide,true);
assert.equal(p.bfr_mensuel[0].bfr,-15000,"BFR négatif autorisé");
console.log("BFR 36 mois : soldes, variations, stocks sans double compte et lacunes vérifiés.");
