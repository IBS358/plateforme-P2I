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
const ids=["p2i-validated-finance-r7","p2i-validated-finance-r9","p2i-validated-finance-r10","p2i-validated-finance-r11","p2i-validated-finance-r13"];
const sections=["p2i-r7","p2i-r9","p2i-r10","p2i-r11","p2i-r13"];
function placeholders(section){
 const parent=$(section);
 if(!parent)return [];
 // Seuls les tableaux de préparation directement contenus dans la rubrique
 // sont masqués : ne jamais masquer les tableaux du moteur économique.
 return Array.from(parent.children||[]).filter(child=>
  child.classList&&child.classList.contains("bp-table-wrap")||
  child.dataset&&child.dataset.p2iForecastPlaceholder==="true");
}
function togglePreparation(visible){
 for(const section of sections)for(const node of placeholders(section))node.hidden=!visible;
}
function remove(){
 for(const id of ids)$(id)?.remove();
 togglePreparation(true);
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
 // Le jeu annuel doit correspondre au résultat économique réellement calculé
 // pour le pilote Crackers. Éviter deux comptes de résultat contradictoires.
 if(selected.id==="biscuiterie"&&selected.config==="crackers"){
  const economic=window.P2I_CRACKERS_RESULTAT;
  const financial=window.P2I_COMPTE_FINANCIER;
  const first=d.compte_resultat[0];
  const close=(a,b)=>typeof a==="number"&&Number.isFinite(a)&&
   typeof b==="number"&&Number.isFinite(b)&&
   Math.abs(a-b)<=Math.max(.01,Math.abs(a)*1e-8);
  if(!economic||!financial||
   !close(first.chiffre_affaires,economic.chiffre_affaires_usd)||
   !close(first.cout_produits_vendus,economic.cout_produits_vendus_usd)||
   !close(first.chiffre_affaires,financial.chiffre_affaires_total_usd)||
   !close(first.cout_produits_vendus,financial.cout_ventes_total_usd))return;
 }

 togglePreparation(false);
 const f=result.financement_indicatif;
 add("p2i-r7","p2i-validated-finance-r7",'<h3>Financement de l’investissement consolidé</h3>'+
  renderTable(["Poste","Montant"],[
   ["CAPEX complet",money(f.investissement_total_usd)],
   ["Apport 40 %",money(f.apport_40_usd)],
   ["Dette 60 %",money(f.dette_60_usd)],
   ["Réserve de trésorerie distincte",f.reserve_tresorerie_distincte_usd===null?"Non renseignée":money(f.reserve_tresorerie_distincte_usd)]
  ]));
 add("p2i-r9","p2i-validated-finance-r9",
  '<h3>Compte de résultat — trois exercices validés</h3>'+
  renderTable(["Année","CA","Coût des ventes","Charges d’exploitation","Amortissements","Intérêts","Impôts","Résultat net"],
   d.compte_resultat.map((x,i)=>[String(i+1),money(x.chiffre_affaires),money(x.cout_produits_vendus),
   money(x.charges_exploitation),money(x.amortissements),money(x.charges_financieres),
   money(x.impots),money(x.resultat_net)])));
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
