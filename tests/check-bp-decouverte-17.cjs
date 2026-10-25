/**
 * P2I — Contrôles statiques de non-régression de la refonte BP Découverte.
 * Exécution : node tests/check-bp-decouverte-17.cjs
 * Ces contrôles ne remplacent PAS un essai navigateur avec Supabase.
 */
const fs=require("node:fs");
const vm=require("node:vm");
const assert=require("node:assert/strict");
const path=require("node:path");
const root=path.resolve(__dirname,"..");
const read=p=>fs.readFileSync(path.join(root,p),"utf8");
const html=read("business-plan-decouverte.html");
const layout=read("js/p2i-bp-decouverte-17-layout.js");
const bridge=read("js/p2i-bp-decouverte-17-engine-bridge.js");
const css=read("css/p2i-bp-decouverte-17.css");
const financial=read("js/p2i-financial-display.js");
for(const [file,source] of [["layout",layout],["bridge",bridge],["financial",financial]])
  assert.doesNotThrow(()=>new vm.Script(source,{filename:file}),file+" doit être syntaxiquement valide");
const sectionList=layout.match(/const TITRES=(\[[^\n]+\]);/);
assert.ok(sectionList,"Le tableau des rubriques doit exister");
const titles=JSON.parse(sectionList[1]);
assert.equal(titles.length,17,"Exactement 17 rubriques");
assert.equal(new Set(titles).size,17,"Aucune rubrique dupliquée");
assert.deepEqual(titles.slice(7,13),["Production et ventes","Compte de résultat","BFR mensuel","Bilan simplifié","Indicateurs","Trésorerie"]);
assert.ok(html.includes('src="js/p2i-bp-decouverte-17-layout.js"'));
assert.ok(html.includes('src="js/p2i-bp-decouverte-17-engine-bridge.js"'));
assert.ok(html.includes('href="css/p2i-bp-decouverte-17.css"'));
assert.ok(html.includes("p2iBiscuiterieSelect"),"Le sélecteur historique doit être conservé");
assert.ok(html.includes("p2iCompteResultat"),"La sortie historique du moteur doit être conservée");
assert.ok(layout.includes("450000"),"La référence équipement Crackers doit rester 450 000 USD");
assert.ok(layout.includes("capex=null"),"Ne pas convertir le coût de la ligne en investissement total");
assert.ok(layout.includes("40 %")&&layout.includes("60 %"));
assert.ok(layout.includes("12 mois exclusivement"),"Trésorerie : 12 mois seulement");
assert.ok(layout.includes('id==="nettoyage"'),"Les variantes nettoyage doivent rester accessibles");
assert.ok(layout.includes("decontamination_chimique")&&layout.includes("decontamination_biologique"));
assert.ok(bridge.includes("P2I_COMPTE_FINANCIER"),"Raccordement au moteur financier historique");
assert.ok(bridge.includes("P2I_CRACKERS_RESULTAT"),"Raccordement au moteur économique Crackers");
assert.ok(bridge.includes("number(f.resultat_net_usd)")==false,"Ne pas exiger un résultat net artificiellement complet");
assert.ok(css.includes("bp-sidebar"),"La navigation doit être stylée");
console.log("P2I BP Découverte : contrôles statiques réussis (17 rubriques, liens, garde-fous).");
