/* P2I — Raccordement des prévisions financières validées aux rubriques 7, 10, 11 et 13.
 * Le contrat est P2I_BP_PREVISIONS_VALIDABLES = {up_id,configuration_id,
 * investissement,compte_resultat,bfr_mensuel,tresorerie_mensuelle,bilans_annuels}.
 * En l'absence de jeu de données complet et cohérent, aucun chiffre n'est publié.
 */
(function(){
"use strict";
const $=id=>document.getElementById(id);
const esc=s=>String(s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const money=v=>v.toLocaleString("fr-FR",{minimumFractionDigits:2,maximumFractionDigits:2})+" USD";
const fmt=v=>Number(v).toLocaleString("fr-FR",{maximumFractionDigits:2});
function renderTable(headers,rows){
 return '<div class="bp-table-wrap"><table><thead><tr>'+
  headers.map(h=>'<th>'+esc(h)+'</th>').join("")+'</tr></thead><tbody>'+
  rows.map(row=>'<tr>'+row.map(cell=>'<td>'+esc(cell)+'</td>').join("")+'</tr>').join("")+
  '</tbody></table></div>';
}
function current(){
 const p=new URLSearchParams(location.search),id=p.get("unit_id")||p.get("id")||localStorage.getItem("currentProductionKey")||"";
 const sim=p.get("simulation_id");
 const saved=sim&&id==="biscuiterie"?localStorage.getItem("p2i_bp_decouverte_biscuiterie_sim_"+sim):null;
 return {id,config:p.get("configuration_id")||saved||""};
}
function remove(){
 for(const id of ["p2i-validated-finance-r7","p2i-validated-finance-r10","p2i-validated-finance-r11","p2i-validated-finance-r13"])$(id)?.remove();
}
function add(section,id,html){
 const parent=$(section);if(!parent)return;
 let node=$(id);if(!node){node=document.createElement("div");node.id=id;parent.appendChild(node);}
 node.innerHTML=html;
}
function update(){
 remove();
 const v=window.P2I_BP_CONTROLES_FINANCIERS;
 const d=window.P2I_BP_PREVISIONS_VALIDABLES;
 if(!v||typeof v.validate!=="function"||!d)return;
 const selected=current();
 if(d.up_id!==selected.id||d.configuration_id!==(selected.config||null))return;
 const result=v.validate(d);
 if(!result.valide)return;
 const f=result.financement_indicatif;
 add("p2i-r7","p2i-validated-finance-r7",'<h3>Financement de l’investissement consolidé</h3>'+
  renderTable(["Poste","Montant"],[
   ["CAPEX complet",money(f.investissement_total_usd)],
   ["Apport 40 %",money(f.apport_40_usd)],
   ["Dette 60 %",money(f.dette_60_usd)],
   ["Réserve de trésorerie distincte",f.reserve_tresorerie_distincte_usd===null?"Non renseignée":money(f.reserve_tresorerie_distincte_usd)]
  ]));
 add("p2i-r10","p2i-validated-finance-r10",'<h3>BFR mensuel — 36 mois contrôlés</h3>'+
  renderTable(["Mois","Stocks","Créances clients","Dettes d’exploitation","BFR"],
   d.bfr_mensuel.map((x,i)=>[String(i+1),money(x.stocks),money(x.creances_clients),money(x.dettes_exploitation),money(x.bfr)])));
 add("p2i-r11","p2i-validated-finance-r11",'<h3>Bilans prévisionnels équilibrés</h3>'+
  renderTable(["Exercice","Actif total","Passif total"],d.bilans_annuels.map((x,i)=>[
   "Année "+(i+1),money(x.actif_total),money(x.passif_total)])));
 add("p2i-r13","p2i-validated-finance-r13",'<h3>Trésorerie mensuelle — 12 mois uniquement</h3>'+
  renderTable(["Mois","Encaissements","Décaissements","Solde initial","Solde final"],
   d.tresorerie_mensuelle.map((x,i)=>[String(i+1),money(x.encaissements),money(x.decaissements),money(x.solde_initial),money(x.solde_final)])));
}
function init(){
 update();
 window.addEventListener("p2i:bp17-rendered",update);
 window.addEventListener("p2i:financial-result-ready",update);
 window.addEventListener("p2i:bp-previsions-ready",update);
 window.addEventListener("pageshow",update);
 document.addEventListener("change",update);
}
if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",init);else init();
})();
