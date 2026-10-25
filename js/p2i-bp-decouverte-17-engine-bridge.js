/*
 * P2I — Pont de lecture des moteurs existants vers la présentation 17 rubriques.
 * Ne recalcule pas les finances; ne transforme pas des montants inconnus en zéro.
 * N'affiche les résultats que pour la variante Crackers lorsque les contrôles
 * du moteur existant ont abouti.
 */
(function(){
"use strict";
const $=id=>document.getElementById(id);
const number=v=>typeof v==="number"&&Number.isFinite(v);
const money=v=>number(v)?v.toLocaleString("fr-FR",{minimumFractionDigits:2,maximumFractionDigits:2})+" USD":"À renseigner";
const qty=v=>number(v)?v.toLocaleString("fr-FR")+" kg":"À renseigner";
const esc=s=>String(s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
function setPlaceholder(section,visible){
 const placeholder=section.querySelector(".bp-table-wrap");
 if(placeholder)placeholder.hidden=!visible;
}
function invalidate(){
 $("p2i-r8-engine")?.remove();$("p2i-r9-engine")?.remove();
 const r8=$("p2i-r8"),r9=$("p2i-r9");
 if(r8)setPlaceholder(r8,true);
 if(r9)setPlaceholder(r9,true);
}
const table=rows=>'<div class="bp-table-wrap"><table><thead><tr><th>Indicateur</th><th>Valeur issue du moteur</th></tr></thead><tbody>'+rows.map(([a,b])=>'<tr><td>'+esc(a)+'</td><td>'+esc(b)+'</td></tr>').join("")+'</tbody></table></div>';
function update(){
const r8=$("p2i-r8"),r9=$("p2i-r9");
if(!r8||!r9)return;
const p=new URLSearchParams(location.search);
const sim=p.get("simulation_id");
const saved=sim?localStorage.getItem("p2i_bp_decouverte_biscuiterie_sim_"+sim):null;
const selected=p.get("configuration_id")||saved||"";
const id=p.get("unit_id")||p.get("id")||localStorage.getItem("currentProductionKey")||"";
if(id!=="biscuiterie"||selected!=="crackers"){
invalidate();
return;
}
const e=window.P2I_CRACKERS_RESULTAT;
const f=window.P2I_COMPTE_FINANCIER;
const d=window.P2I_DONNEES_FINANCIERES;
const legacyChoice=$("p2iBiscuiterieSelect");
// La configuration affichée dans l’URL et celle réellement calculée doivent coïncider.
if(legacyChoice&&legacyChoice.value&&legacyChoice.value!=="crackers"){
 $("p2i-r8-engine")?.remove();$("p2i-r9-engine")?.remove();
 return;
}
// Ne jamais exposer un résultat financier d’une autre configuration.
if(!e||!number(e.chiffre_affaires_usd)||!number(e.cout_produits_vendus_usd)){
invalidate();
return;
}
if(d&&number(d.chiffre_affaires_usd)&&number(d.cout_produits_vendus_usd)&&
 (Math.abs(d.chiffre_affaires_usd-e.chiffre_affaires_usd)>.01||Math.abs(d.cout_produits_vendus_usd-e.cout_produits_vendus_usd)>.01)){
invalidate();
return;
}
{
const div=$("p2i-r8-engine")||document.createElement("div");div.id="p2i-r8-engine";div.innerHTML='<h3>Production et ventes — données du moteur économique</h3>'+table([
["Quantité produite",qty(e.quantite_produite)],["Quantité vendue",qty(e.quantite_vendue)],
["Quantité non vendue",qty(e.quantite_non_vendue)],["Stock final théorique",qty(e.quantite_stockee)],
["Valorisation indicative du stock",money(e.valeur_stock_indicative_usd)],
["Chiffre d’affaires",money(e.chiffre_affaires_usd)],
["Coût total de production",money(e.cout_production_total_usd)]]);
if(!div.isConnected)r8.appendChild(div);
setPlaceholder(r8,false);
}
if(f&&number(f.chiffre_affaires_total_usd)&&number(f.cout_ventes_total_usd)&&
 Math.abs(f.chiffre_affaires_total_usd-e.chiffre_affaires_usd)<=.01&&
 Math.abs(f.cout_ventes_total_usd-e.cout_produits_vendus_usd)<=.01){
const div=$("p2i-r9-engine")||document.createElement("div");div.id="p2i-r9-engine";div.innerHTML='<h3>Compte de résultat consolidé — moteur P2I</h3>'+table([
["Chiffre d’affaires",money(f.chiffre_affaires_total_usd)],
["Coût des produits vendus",money(f.cout_ventes_total_usd)],
["Marge industrielle indicative",money(f.marge_industrielle_ou_sur_prestations_usd)],
["Autres charges d’exploitation",money(f.autres_charges_exploitation_usd)],
["Dotations",money(f.dotations_usd)],["Résultat d’exploitation",money(f.resultat_exploitation_usd)],
["Résultat financier",money(f.resultat_financier_usd)],["Résultat avant impôt",money(f.resultat_avant_impot_usd)],
["Résultat net",money(f.resultat_net_usd)]])+
'<p class="bp-note">Simulation indicative. Les postes inconnus restent à renseigner. La marge industrielle ne constitue pas un bénéfice net.</p>';
if(!div.isConnected)r9.appendChild(div);
setPlaceholder(r9,false);
}else{$("p2i-r9-engine")?.remove();setPlaceholder(r9,true);}
}
function init(){
const legacy=$("p2iCompteResultat");
if(legacy){new MutationObserver(update).observe(legacy,{childList:true,subtree:true,characterData:true,attributes:true,attributeFilter:["style"]});}
update();
document.addEventListener("change",update);
window.addEventListener("p2i:economic-result-ready",update);
window.addEventListener("p2i:financial-result-ready",update);
window.addEventListener("pageshow",update);
// Une modification de configuration invalide immédiatement les résultats précédents.
document.addEventListener("input",update);
}
if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",init);else init();
})();