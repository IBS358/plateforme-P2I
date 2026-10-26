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
 ["p2i-r2-engine","p2i-r8-engine","p2i-r9-engine","p2i-r12-engine"].forEach(id=>$(id)?.remove());
 const r8=$("p2i-r8"),r9=$("p2i-r9");
 if(r8)setPlaceholder(r8,true);
 if(r9)setPlaceholder(r9,true);
}
// Contrôles du compte financier : chaque rapprochement n'est appliqué que si ses composantes sont renseignées.
function financialConsistent(f,e){
 if(!f||!number(f.chiffre_affaires_total_usd)||!number(f.cout_ventes_total_usd))return false;
 if(Math.abs(f.chiffre_affaires_total_usd-e.chiffre_affaires_usd)>.01||
    Math.abs(f.cout_ventes_total_usd-e.cout_produits_vendus_usd)>.01)return false;
 const checks=[
  ["marge_industrielle_ou_sur_prestations_usd",f.chiffre_affaires_total_usd-f.cout_ventes_total_usd],
  ["resultat_exploitation_usd",
   ["marge_industrielle_ou_sur_prestations_usd","autres_charges_exploitation_usd","dotations_usd"].every(key=>number(f[key]))?
    f.marge_industrielle_ou_sur_prestations_usd-f.autres_charges_exploitation_usd-f.dotations_usd:null],
  ["resultat_avant_impot_usd",number(f.resultat_exploitation_usd)&&number(f.resultat_financier_usd)?
   f.resultat_exploitation_usd+f.resultat_financier_usd:null]
 ];
 return checks.every(([key,expected])=>!number(f[key])||expected===null||Math.abs(f[key]-expected)<=.02);
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
if(legacyChoice&&legacyChoice.value!=="crackers"){
 invalidate();
 return;
}
// Ne jamais exposer un résultat financier d’une autre configuration.
if(!e||!number(e.chiffre_affaires_usd)||!number(e.cout_produits_vendus_usd)){
invalidate();
return;
}
// Vérifications physiques et économiques minimales avant de publier les chiffres.
const nonnegative=["chiffre_affaires_usd","cout_produits_vendus_usd","cout_production_total_usd",
 "quantite_produite","quantite_vendue","quantite_non_vendue","quantite_stockee","valeur_stock_indicative_usd"];
if(nonnegative.some(key=>e[key]!==undefined&&e[key]!==null&&!number(e[key]))||
 nonnegative.some(key=>number(e[key])&&e[key]<0)||
 (number(e.quantite_produite)&&number(e.quantite_vendue)&&number(e.quantite_non_vendue)&&
  e.quantite_produite>0&&Math.abs(e.quantite_produite-e.quantite_vendue-e.quantite_non_vendue)>.001)||

 (number(e.quantite_produite)&&number(e.quantite_vendue)&&e.quantite_vendue>e.quantite_produite+.001)||
 (number(e.quantite_produite)&&number(e.quantite_vendue)&&number(e.quantite_non_vendue)&&
 Math.abs(e.quantite_produite-e.quantite_vendue-e.quantite_non_vendue)>.001)||
 (number(e.quantite_non_vendue)&&number(e.quantite_stockee)&&
 Math.abs(e.quantite_non_vendue-e.quantite_stockee)>.001)){
 invalidate();
 return;
}
// Ne jamais mélanger des données partielles de deux simulations différentes.
if(d&&((number(d.chiffre_affaires_usd)&&Math.abs(d.chiffre_affaires_usd-e.chiffre_affaires_usd)>.01)||
       (number(d.cout_produits_vendus_usd)&&Math.abs(d.cout_produits_vendus_usd-e.cout_produits_vendus_usd)>.01))){
 invalidate();
 return;
}
// Synthèse et indicateurs : seules les grandeurs réellement calculées sont affichées.
const margin=e.chiffre_affaires_usd-e.cout_produits_vendus_usd;
const percent=e.chiffre_affaires_usd>0?100*margin/e.chiffre_affaires_usd:null;
const summary=$("p2i-r2");
if(summary){
 const div=$("p2i-r2-engine")||document.createElement("div");
 div.id="p2i-r2-engine";
 div.innerHTML='<h3>Synthèse issue du moteur — Crackers</h3>'+table([
  ["Chiffre d’affaires",money(e.chiffre_affaires_usd)],
  ["Coût des produits vendus",money(e.cout_produits_vendus_usd)],
  ["Marge brute avant autres charges",money(margin)],
  ["Taux de marge brute",number(percent)?percent.toLocaleString("fr-FR",{maximumFractionDigits:2})+" %":"À renseigner"],
  ["Résultat net",financialConsistent(f,e)&&number(f.resultat_net_usd)?money(f.resultat_net_usd):"Non calculable à ce stade"]
 ])+'<p class="bp-note">Marge brute avant charges complémentaires, amortissements, intérêts et impôts. Ne pas assimiler cette marge au résultat net.</p>';
 if(!div.isConnected)summary.appendChild(div);
}
const indicators=$("p2i-r12");
if(indicators){
 const div=$("p2i-r12-engine")||document.createElement("div");
 div.id="p2i-r12-engine";
 div.innerHTML='<h3>Indicateurs calculables — référence Crackers</h3>'+table([
  ["Quantité vendue",qty(e.quantite_vendue)],
  ["Taux de marge brute",number(percent)?percent.toLocaleString("fr-FR",{maximumFractionDigits:2})+" %":"À renseigner"],
  ["Coût des produits vendus / kg vendu",number(e.quantite_vendue)&&e.quantite_vendue>0?
    money(e.cout_produits_vendus_usd/e.quantite_vendue).replace(" USD"," USD/kg"):"À renseigner"],
  ["Rentabilité des capitaux propres","Non calculable sans CAPEX et financement validés"],
  ["DSCR","Non calculable sans service de la dette validé"]
 ])+'<p class="bp-note">Indicateurs partiels de la simulation ; aucune extrapolation automatique sur trois années.</p>';
 if(!div.isConnected)indicators.appendChild(div);
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
if(financialConsistent(f,e)){
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
window.addEventListener("p2i:bp17-rendered",update);
window.addEventListener("pageshow",update);
// Une modification de configuration invalide immédiatement les résultats précédents.
document.addEventListener("input",update);
}
if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",init);else init();
})();