/**
 * Test dynamique du pont financier BP Découverte, sans navigateur ni Supabase.
 * Exécution : node tests/check-bp-decouverte-bridge.cjs
 */
"use strict";
const fs=require("node:fs"),vm=require("node:vm"),assert=require("node:assert/strict"),path=require("node:path");
const source=fs.readFileSync(path.resolve(__dirname,"../js/p2i-bp-decouverte-17-engine-bridge.js"),"utf8");
const nodes=new Map(),listeners={};
function element(id){
 const e={id,isConnected:true,innerHTML:"",hidden:false,value:"",children:[],parent:null,
  querySelector(selector){return selector===".bp-table-wrap"?this.placeholder||null:null;},
  appendChild(child){child.isConnected=true;child.parent=this;this.children.push(child);nodes.set(child.id,child);},
  remove(){nodes.delete(this.id);this.isConnected=false;if(this.parent)this.parent.children=this.parent.children.filter(x=>x!==this);}
 };
 nodes.set(id,e);return e;
}
const r2=element("p2i-r2"),r8=element("p2i-r8"),r9=element("p2i-r9"),r12=element("p2i-r12"),choice=element("p2iBiscuiterieSelect");
r8.placeholder={hidden:false};r9.placeholder={hidden:false};choice.value="crackers";
const document={readyState:"complete",getElementById:id=>nodes.get(id)||null,
 createElement:()=>({id:"",isConnected:false,innerHTML:"",remove(){nodes.delete(this.id);this.isConnected=false;if(this.parent)this.parent.children=this.parent.children.filter(x=>x!==this);}}),
 addEventListener:(event,fn)=>{listeners[event]=fn;}};
const window={P2I_CRACKERS_RESULTAT:{chiffre_affaires_usd:100,cout_produits_vendus_usd:40,quantite_produite:500,quantite_vendue:400},
 P2I_COMPTE_FINANCIER:{chiffre_affaires_total_usd:100,cout_ventes_total_usd:40,resultat_net_usd:20},
 addEventListener:(event,fn)=>{listeners[event]=fn;}};
const location={search:"?unit_id=biscuiterie&configuration_id=crackers"};
const context={document,window,location,URLSearchParams,localStorage:{getItem:()=>null},MutationObserver:class{observe(){}},console};
vm.runInNewContext(source,context,{filename:"p2i-bp-decouverte-17-engine-bridge.js"});
const has=id=>nodes.has(id);
assert.ok(has("p2i-r8-engine")&&has("p2i-r9-engine"),"Les tableaux validés sont affichés");
assert.ok(has("p2i-r2-engine")&&has("p2i-r12-engine"),"Synthèse et indicateurs calculés sont affichés");
assert.equal(r8.placeholder.hidden,true);assert.equal(r9.placeholder.hidden,true);
window.P2I_COMPTE_FINANCIER.cout_ventes_total_usd=41;listeners["p2i:financial-result-ready"]();
assert.equal(has("p2i-r9-engine"),false,"Incohérence : compte de résultat retiré");
assert.equal(r9.placeholder.hidden,false,"Incohérence : tableau provisoire restauré");
window.P2I_COMPTE_FINANCIER.cout_ventes_total_usd=40;listeners["p2i:financial-result-ready"]();
assert.equal(has("p2i-r9-engine"),true,"Recalcul : résultat rétabli");
assert.equal(r9.placeholder.hidden,true);
choice.value="biscuits_mous";listeners.change();
assert.equal(has("p2i-r8-engine"),false);assert.equal(has("p2i-r9-engine"),false);
assert.equal(r8.placeholder.hidden,false);assert.equal(r9.placeholder.hidden,false);
choice.value="crackers";listeners.change();
assert.equal(has("p2i-r8-engine"),true);assert.equal(has("p2i-r9-engine"),true);
choice.value="";listeners.change();
assert.equal(has("p2i-r8-engine"),false,"Sélecteur vide : retirer la production périmée");
assert.equal(has("p2i-r9-engine"),false,"Sélecteur vide : retirer le résultat périmé");
assert.equal(r8.placeholder.hidden,false);assert.equal(r9.placeholder.hidden,false);

choice.value="crackers";
listeners.change();
assert.equal(has("p2i-r8-engine"),true,"Revenir aux Crackers pour les tests de cohérence");
// Contrôles de cohérence physique : une survente ou un stock négatif invalide les résultats.
window.P2I_CRACKERS_RESULTAT.quantite_vendue=600;
listeners["p2i:economic-result-ready"]();
assert.equal(has("p2i-r8-engine"),false,"Refuser une quantité vendue supérieure à la production");
assert.equal(has("p2i-r2-engine"),false,"Masquer aussi la synthèse en cas de survente");
assert.equal(has("p2i-r12-engine"),false,"Masquer aussi les indicateurs en cas de survente");
assert.equal(has("p2i-r9-engine"),false,"Ne pas publier le compte financier après une survente");
window.P2I_CRACKERS_RESULTAT.quantite_vendue=400;
window.P2I_CRACKERS_RESULTAT.quantite_non_vendue=-1;
listeners["p2i:economic-result-ready"]();
assert.equal(has("p2i-r8-engine"),false,"Refuser une quantité non vendue négative");
window.P2I_CRACKERS_RESULTAT.quantite_non_vendue=100;
listeners["p2i:economic-result-ready"]();
assert.equal(has("p2i-r8-engine"),true,"Réafficher après correction des quantités");
window.P2I_CRACKERS_RESULTAT.quantite_non_vendue=99;
listeners["p2i:economic-result-ready"]();
assert.equal(has("p2i-r8-engine"),false,"Refuser un bilan de quantités incohérent");
window.P2I_CRACKERS_RESULTAT.quantite_non_vendue=100;
listeners["p2i:economic-result-ready"]();
assert.equal(has("p2i-r8-engine"),true,"Restaurer après retour à la cohérence");


// Un stock final incompatible avec les invendus doit masquer les résultats.
window.P2I_CRACKERS_RESULTAT.quantite_stockee=99;
listeners["p2i:economic-result-ready"]();
assert.equal(has("p2i-r8-engine"),false,"Refuser un stock final incohérent");
window.P2I_CRACKERS_RESULTAT.quantite_stockee=100;
listeners["p2i:economic-result-ready"]();
assert.equal(has("p2i-r8-engine"),true,"Restaurer les résultats après correction du stock");

// Vérifier chaque concordance financière indépendamment, même si l'autre montant manque.
window.P2I_DONNEES_FINANCIERES={chiffre_affaires_usd:101};
listeners["p2i:financial-result-ready"]();
assert.equal(has("p2i-r8-engine"),false,"Refuser un chiffre d'affaires divergent même si le CPV est absent");
window.P2I_DONNEES_FINANCIERES={cout_produits_vendus_usd:41};
listeners["p2i:financial-result-ready"]();
assert.equal(has("p2i-r8-engine"),false,"Refuser un CPV divergent même si le CA est absent");
window.P2I_DONNEES_FINANCIERES={chiffre_affaires_usd:100,cout_produits_vendus_usd:40};
listeners["p2i:financial-result-ready"]();
assert.equal(has("p2i-r8-engine"),true,"Restaurer les chiffres concordants");
assert.equal(has("p2i-r2-engine"),true,"Restaurer la synthèse concordante");
assert.equal(has("p2i-r12-engine"),true,"Restaurer les indicateurs concordants");

console.log("Pont financier P2I : scénarios de cohérence dynamique réussis.");
