/** Tests de raccordement des projections : jeu valide, jeu incomplet, mauvaise UP. */
"use strict";
const fs=require("node:fs"),path=require("node:path"),vm=require("node:vm"),assert=require("node:assert/strict");
const root=path.resolve(__dirname,"..");
const source=name=>fs.readFileSync(path.join(root,"js",name),"utf8");
const nodes=new Map();
const makeNode=id=>({id,innerHTML:"",children:[],appendChild(child){this.children.push(child);nodes.set(child.id,child);child.parentNode=this;},remove(){nodes.delete(this.id)}});
for(const id of ["p2i-r7","p2i-r9","p2i-r10","p2i-r11","p2i-r13","p2i-r14"])nodes.set(id,makeNode(id));
// Tableaux d'attente présents dans le rendu initial : ils doivent être
// masqués quand les prévisions validées arrivent, puis rétablis à l'invalidation.
const pending={};
for(const section of ["p2i-r7","p2i-r9","p2i-r10","p2i-r11","p2i-r13"]){
 const node={hidden:false,classList:{contains:name=>name==="bp-table-wrap"}};
 nodes.get(section).children.push(node);pending[section]=node;
}
const events={};
const document={readyState:"complete",getElementById:id=>nodes.get(id)||null,createElement:()=>makeNode(""),addEventListener:(e,fn)=>{events[e]=fn}};
const window={addEventListener:(e,fn)=>{events[e]=fn}};
const localStorage={getItem:()=>null};
const location={search:"?unit_id=biscuiterie&configuration_id=crackers"};
const ctx=vm.createContext({document,window,localStorage,location,URLSearchParams,console});
vm.runInContext(source("p2i-bp-decouverte-financial-validation.js"),ctx);
vm.runInContext(source("p2i-bp-decouverte-17-validated-projections.js"),ctx);
assert.equal(nodes.has("p2i-validated-finance-r10"),false);
const investment=Object.fromEntries(window.P2I_BP_CONTROLES_FINANCIERS.requiredInvestment.map(k=>[k,1000]));
investment.equipements=450000;
investment.total=459000;
const annual=()=>({chiffre_affaires:1000000,cout_produits_vendus:500000,charges_exploitation:200000,amortissements:100000,charges_financieres:20000,impots:30000,resultat_net:150000});
const treasury=i=>({encaissements:100000,decaissements:95000,solde_initial:10000+i*5000,solde_final:15000+i*5000});
window.P2I_BP_PREVISIONS_VALIDABLES={
 up_id:"biscuiterie",configuration_id:"crackers",investissement:investment,
 compte_resultat:Array.from({length:3},annual),
 bfr_mensuel:Array.from({length:36},()=>({stocks:30000,creances_clients:20000,dettes_exploitation:10000,bfr:40000})),
 tresorerie_mensuelle:Array.from({length:12},(_,i)=>treasury(i)),
 bilans_annuels:Array.from({length:3},()=>({actif_total:900000,passif_total:900000}))
};
window.P2I_CRACKERS_RESULTAT={chiffre_affaires_usd:1000000,cout_produits_vendus_usd:500000};
window.P2I_COMPTE_FINANCIER={chiffre_affaires_total_usd:1000000,cout_ventes_total_usd:500000};
events["p2i:bp-previsions-ready"]();
for(const id of ["r7","r9","r10","r11","r13"])assert.ok(nodes.has("p2i-validated-finance-"+id),id);
assert.equal(pending["p2i-r7"].hidden,false,"Conserver la décomposition du CAPEX");
for(const section of ["p2i-r9","p2i-r10","p2i-r11","p2i-r13"])
 assert.equal(pending[section].hidden,true,"Masquer les tableaux provisoires "+section);

assert.equal((nodes.get("p2i-validated-finance-r9").innerHTML.match(/<tr>/g)||[]).length,4);
assert.equal((nodes.get("p2i-validated-finance-r10").innerHTML.match(/<tr>/g)||[]).length,37);
assert.equal((nodes.get("p2i-validated-finance-r13").innerHTML.match(/<tr>/g)||[]).length,13);
delete window.P2I_CRACKERS_RESULTAT;
events["p2i:bp-previsions-ready"]();
assert.equal(nodes.has("p2i-validated-finance-r9"),false,"Aucun tableau sans résultat économique courant");
for(const section of ["p2i-r9","p2i-r10","p2i-r11","p2i-r13"])
 assert.equal(pending[section].hidden,false,"Restaurer les tableaux provisoires "+section);

window.P2I_CRACKERS_RESULTAT={chiffre_affaires_usd:1000000,cout_produits_vendus_usd:500000};
events["p2i:bp-previsions-ready"]();
assert.ok(nodes.has("p2i-validated-finance-r9"));
window.P2I_COMPTE_FINANCIER.cout_ventes_total_usd=490000;
events["p2i:bp-previsions-ready"]();
assert.equal(nodes.has("p2i-validated-finance-r9"),false,"Compte annuel contradictoire bloqué");
window.P2I_COMPTE_FINANCIER.cout_ventes_total_usd=500000;
events["p2i:bp-previsions-ready"]();
assert.ok(nodes.has("p2i-validated-finance-r9"));
window.P2I_BP_PREVISIONS_VALIDABLES.bfr_mensuel[2].bfr=0;
events["p2i:bp-previsions-ready"]();
assert.ok(nodes.has("p2i-validated-finance-diagnostic"),"Afficher les blocages financiers");
assert.ok(nodes.get("p2i-validated-finance-diagnostic").innerHTML.includes("BFR sur 36 mois"));

assert.equal(nodes.has("p2i-validated-finance-r10"),false);
window.P2I_BP_PREVISIONS_VALIDABLES.bfr_mensuel[2].bfr=40000;
events["p2i:bp-previsions-ready"]();
assert.equal(nodes.has("p2i-validated-finance-diagnostic"),false,"Retirer le diagnostic quand les données sont cohérentes");
window.P2I_BP_PREVISIONS_VALIDABLES.up_id="conserverie_legumes";
events["p2i:bp-previsions-ready"]();
assert.equal(nodes.has("p2i-validated-finance-r10"),false);
console.log("Raccordement projections : 36 BFR, 12 trésorerie, invalidation et identité contrôlés.");
