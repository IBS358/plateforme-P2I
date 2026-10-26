/** Contrôle de chargement unique et d'ordre des modules financiers BP Découverte. */
"use strict";
const fs=require("node:fs"),path=require("node:path"),assert=require("node:assert/strict");
const root=path.resolve(__dirname,"..");
const html=fs.readFileSync(path.join(root,"business-plan-decouverte.html"),"utf8");
const scripts=[...html.matchAll(/<script\s+src="(js\/p2i-bp-decouverte-[^"]+)"\s+defer><\/script>/g)].map(x=>x[1]);
const required=[
 "js/p2i-bp-decouverte-bfr-36-mois.js",
 "js/p2i-bp-decouverte-tresorerie-12-mois.js",
 "js/p2i-bp-decouverte-financial-validation.js",
 "js/p2i-bp-decouverte-assembleur-previsions.js",
 "js/p2i-bp-decouverte-17-validated-projections.js"
];
for(const script of required){
 assert.equal(scripts.filter(x=>x===script).length,1,"Chargement unique requis : "+script);
 assert.ok(fs.existsSync(path.join(root,script)),"Script absent : "+script);
}
const order=required.map(x=>scripts.indexOf(x));
assert.ok(order[0]<order[3]&&order[1]<order[3]&&order[2]<order[3],"Les moteurs et le validateur précèdent l'assembleur");
assert.ok(order[3]<order[4],"L'assembleur précède l'affichage des prévisions");
console.log("Scripts financiers BP Découverte : chargement unique et ordre cohérent.");
