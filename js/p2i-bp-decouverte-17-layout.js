/* P2I BP Découverte — modèle commun à 17 rubriques.
   Les données absentes restent non renseignées; jamais de montants inventés.
   Les anciennes sections sont conservées dans le DOM pour les scripts historiques. */
(function(){
"use strict";
const TITRES=["Projet et activité","Synthèse économique","Configuration industrielle","Marché et concurrence","Stratégie commerciale, outils et marketing","Opportunités et risques","Investissements et financement","Production et ventes","Compte de résultat","BFR mensuel","Bilan simplifié","Indicateurs","Trésorerie","Hypothèses et sources","Suite avec la P2I","Passage vers le BP Pro","Dossier technique"];
const ICONES=["house","chart-pie","gears","bullseye","diamond","triangle-exclamation","table","truck","chart-column","clock","square","gauge","money-bill-transfer","pen","diagram-project","share","gear"];
const $=id=>document.getElementById(id);
const safe=s=>String(s??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const fmt=n=>typeof n==="number"&&Number.isFinite(n)?new Intl.NumberFormat("fr-FR").format(n)+" USD":"À documenter";
const text=(v)=>v===null||v===undefined||v===""?"À documenter":safe(v);
function list(v){return Array.isArray(v)&&v.length?'<ul>'+v.slice(0,12).map(x=>'<li>'+safe(typeof x==="string"?x:(x.name||x.nom||JSON.stringify(x)))+'</li>').join("")+'</ul>':'<p>À documenter dans le référentiel P2I.</p>'}
function card(k,v){return '<div class="bp-card"><small>'+safe(k)+'</small><strong>'+text(v)+'</strong></div>'}
function note(s){return '<div class="bp-note">'+s+'</div>'}
function row(k,v){return '<tr><td>'+safe(k)+'</td><td>'+text(v)+'</td></tr>'}
function table(rows){return '<div class="bp-table-wrap"><table><thead><tr><th>Poste</th><th>Référence P2I</th></tr></thead><tbody>'+rows.map(r=>row(...r)).join("")+'</tbody></table></div>'}
function getUP(){
const p=new URLSearchParams(location.search);
let id=p.get("unit_id")||p.get("id")||localStorage.getItem("currentProductionKey")||"";
let up=(typeof P2I_UP_DATA!=="undefined"&&P2I_UP_DATA[id])||null;
if(!up){try{const x=JSON.parse(localStorage.getItem("currentProduction")||"null");if(x&&(!id||x.id===id))up=x}catch(_){}}
return {id,up:up||{}};
}
function render(){
if(document.getElementById("p2i-bp17-root"))return;
const {id,up}=getUP();
const name=up.nom||new URLSearchParams(location.search).get("unit")||"Unité de production";
const filiere=up.filiereNom||up.filiere||"À documenter";
const config=new URLSearchParams(location.search).get("configuration_id")||"";
const old=document.querySelector(".wrap");
if(!old)return;
const legacy=document.createElement("div");legacy.id="p2i-bp-legacy";legacy.hidden=true;legacy.style.display="none";old.parentNode.insertBefore(legacy,old);legacy.appendChild(old);
document.body.classList.add("p2i-bp17");
const isCrackers=id==="biscuiterie"&&config==="crackers";
const capex=null; // CAPEX générique non validé pour la configuration
const equipmentReference=isCrackers?450000:null;
const invest=up.investment_breakdown||{};
const sourceCapex=equipmentReference!==null?fmt(equipmentReference)+" (ligne intégrée Crackers 500 kg/h, équipements uniquement)":"À documenter pour la configuration choisie";
const finance=capex===null?note("Financement 40 % apport / 60 % dette : calcul suspendu jusqu'à validation de l'investissement de référence."):table([["Investissement indicatif",sourceCapex],["Apport de référence (40 %)",fmt(capex*.4)],["Dette de référence (60 %)",fmt(capex*.6)],["Réserve de trésorerie initiale","À calculer séparément"]]);
const sections=[
'<div class="bp-cards">'+card("Unité industrielle",name)+card("Filière",filiere)+card("Configuration",config||"Référence P2I à préciser")+'</div>'+note("<b>Activité :</b> "+text(up.description)),
'<div class="bp-cards">'+card("Investissement machines",sourceCapex)+card("Chiffre d’affaires estimé",up.chiffre_affaires_estime||"À documenter")+card("Emplois directs",up.emplois_directs||"À documenter")+'</div>'+note("Données préliminaires du référentiel. Ne constituent pas des prévisions financières validées."),
note("Les équipements sont présentés verticalement par fonction. Les capacités, interfaces, utilités et prix doivent être vérifiés pour chaque configuration.")+'<div class="bp-equipment-vertical">'+((Array.isArray(up.machines)&&up.machines.length)?up.machines.map(m=>'<article><b>'+safe(m.name||m.nom||"Équipement")+'</b><p>Fonction : '+text(m.role)+'</p><p>Capacité : '+text(m.capacity)+'</p><p>Utilités : '+text(m.utilities)+'</p></article>').join(""):'<article>Configuration industrielle de référence à documenter.</article>')+'</div>',
'<h3>Marchés cibles</h3>'+list(up.target_markets)+'<h3>Positionnement concurrentiel</h3>'+list(up.competitive_advantages),
'<h3>Canaux et actions commerciales</h3>'+list(up.marketing)+note("Prix de vente, volumes, circuits de distribution et budget marketing : à justifier par hypothèses documentées."),
'<h3>Opportunités</h3>'+list(up.avantages)+'<h3>Risques et contraintes</h3>'+list(up.challenges),
'<div class="bp-cards">'+card("Machines",equipmentReference!==null?fmt(equipmentReference):"À documenter")+card("Investissement total","À consolider : équipements et coûts complémentaires")+card("Apport 40 %",capex!==null?fmt(capex*.4):"À documenter")+card("Dette 60 %",capex!==null?fmt(capex*.6):"À documenter")+'</div>'+finance+note("Attention : un CAPEX minimal indicatif ne remplace pas le budget détaillé d’une ligne intégrée ou d’un devis fournisseur. La réserve de trésorerie reste distincte."),
'<h3>Capacité et processus</h3>'+table([["Capacité de référence",up.monthly_capacity||"À documenter"],["Volume commercialisé","À calculer"],["Prix unitaire","À documenter"]])+'<h3>Étapes de production ou de prestation</h3>'+list(up.processus),
note("Le compte de résultat sur trois années sera calculé par le moteur financier commun lorsque les hypothèses de ventes, charges, amortissements, dette et fiscalité seront complètes. Aucun montant absent n’est remplacé par zéro.")+table([["Chiffre d'affaires annuel","À calculer sur hypothèses documentées"],["Charges d’exploitation","À documenter"],["Résultat net","Non calculable à ce stade"]]),
note("BFR mensuel = stocks + créances clients − dettes d’exploitation. Les délais de règlement et stocks cibles doivent être propres à la configuration. Aucun stock n’est compté deux fois.")+table([["Stock matières premières","À documenter"],["Stock produits finis","À documenter"],["Créances clients","À documenter"],["Dettes fournisseurs","À documenter"]]),
note("Le bilan simplifié ne peut être équilibré automatiquement sans financement complet, immobilisations, BFR, amortissements et trésorerie validés.")+table([["Actifs","À calculer"],["Dettes","À calculer"],["Capitaux propres","À calculer"]]),
'<div class="bp-cards">'+card("Capacité",isCrackers?"500 kg/h (référence)":up.monthly_capacity||"À documenter")+card("Emplois directs",up.emplois_directs||"À documenter")+card("ROI indicatif",up.roi_estime||"À documenter")+'</div>'+note("Les indicateurs de rentabilité nécessitent des calculs financiers traçables, non une simple reprise de fourchettes."),
note("Trésorerie prévisionnelle : 12 mois exclusivement. Encaissements, décaissements, échéances de dette et variations de BFR seront produits après validation des hypothèses.")+table([["Mois 1 à 12","À calculer"],["Solde initial","À documenter"],["Solde final","À calculer"]]),
table([["Source unité",id||"Non identifié"],["Référentiel","js/up-data.js"],["Statut des montants","Estimations indicatives / à documenter"],["Devise de calcul","USD"],["Conversion FCFA","À afficher selon taux daté"]])+note("Les données financières non documentées sont volontairement laissées en attente."),
note("La P2I accompagne la conception, la configuration industrielle, la simulation, le financement et la mise en relation avec les fournisseurs. Une estimation indicative ne déclenche pas de négociation."),
note("Le BP Initial permet de personnaliser le projet. Le BP Pro nécessite des contrôles techniques et financiers approfondis ainsi que des devis et justificatifs. Les services additionnels sont distincts du BP Pro."),
'<h3>Éléments techniques disponibles</h3>'+table([["Unité",name],["Filière",filiere],["Configuration",config||"À préciser"],["Utilités","À confirmer"],["Sécurité / conformité","À documenter"]])+'<h3>Équipements et fonctions</h3>'+list(up.machines)
];
const header=document.createElement("header");header.className="bp-topbar";header.innerHTML='<div class="bp-brand">▣ P2I<small>Plateforme Industrielle Ivoirienne · Business Plan Découverte</small></div><div class="bp-tag">BP Découverte · '+safe(name)+'</div><button class="bp-export" type="button" id="p2i-bp17-print">▣ Exporter le BP en PDF</button>';
const layout=document.createElement("div");layout.className="bp-layout";layout.id="p2i-bp17-root";
const aside=document.createElement("nav");aside.className="bp-sidebar";aside.setAttribute("aria-label","Parcours du business plan");aside.innerHTML='<h2>PARCOURS DU BP</h2>'+TITRES.map((t,i)=>'<a href="#p2i-r'+(i+1)+'">'+String(i+1).padStart(2,"0")+' · '+safe(t)+'</a>').join("");
const main=document.createElement("main");main.className="bp-main";
main.innerHTML='<div class="bp-intro"><b>P2I · PLATEFORME INDUSTRIELLE IVOIRIENNE</b><h1>Business Plan Découverte — '+safe(name)+'</h1><p>Une première vision structurée pour évaluer la faisabilité de votre projet.</p></div><div class="bp-hero"><div class="bp-hero-copy"><b>BP DÉCOUVERTE · CÔTE D’IVOIRE</b><h1>'+safe(name)+'</h1><p>'+text(up.description||"Configuration industrielle de référence P2I")+'</p><p>GRATUIT — version « Découverte »</p></div><div class="bp-medallion" aria-label="Illustration de l’activité"></div></div><div class="bp-note"><b>Statut :</b> les données disponibles sont indicatives. Les données manquantes restent à documenter. Aucun devis fournisseur ni prêt bancaire n’est présumé.</div>'+TITRES.map((t,i)=>'<section class="bp-section" id="p2i-r'+(i+1)+'"><h2>'+String(i+1).padStart(2,"0")+' · '+safe(t)+'</h2>'+sections[i]+'</section>').join("");
layout.append(aside,main);document.body.prepend(layout);document.body.prepend(header);
$("p2i-bp17-print").addEventListener("click",()=>window.print());
const imgRegistry=window.P2I_BP_IMAGES||{};
const image=imgRegistry[id]||{};
if(image.hero)main.querySelector(".bp-hero").style.setProperty("--bp-hero-image",'url("'+String(image.hero).replace(/["\\]/g,"")+'")');
if(image.product)main.querySelector(".bp-medallion").style.setProperty("--bp-product-image",'url("'+String(image.product).replace(/["\\]/g,"")+'")');
}
if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",()=>setTimeout(render,0));else setTimeout(render,0);
})();