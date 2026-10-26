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
function monthlyMatrix(title,columns,months){
 if(!Number.isInteger(months)||months<1)throw new Error("Nombre de mois invalide");
 const head='<thead><tr><th>Mois</th>'+columns.map(c=>'<th>'+safe(c)+'</th>').join('')+'</tr></thead>';
 const body=Array.from({length:months},(_,i)=>'<tr><td>A'+(Math.floor(i/12)+1)+' · M'+String(i%12+1).padStart(2,'0')+'</td>'+columns.map(()=>'<td>À calculer</td>').join('')+'</tr>').join('');
 return '<h3>'+safe(title)+'</h3><div class="bp-table-wrap"><table>'+head+'<tbody>'+body+'</tbody></table></div>';
}
function annualMatrix(title,rows){
 const head='<thead><tr><th>Poste</th><th>Année 1</th><th>Année 2</th><th>Année 3</th></tr></thead>';
 const body=rows.map(label=>'<tr><th scope="row">'+safe(label)+'</th><td>À calculer</td><td>À calculer</td><td>À calculer</td></tr>').join('');
 return '<h3>'+safe(title)+'</h3><div class="bp-table-wrap"><table>'+head+'<tbody>'+body+'</tbody></table></div>';
}
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
// Ne pas construire un faux BP pour une simulation dont l’UP n’est pas encore hydratée.
if(!id||(!up.nom&&!up.id&&!up.description))return;
const name=up.nom||new URLSearchParams(location.search).get("unit")||"Unité de production";
const filiere=up.filiereNom||up.filiere||"À documenter";
const consultationDate=new Intl.DateTimeFormat("fr-FR",{day:"2-digit",month:"long",year:"numeric"}).format(new Date());
// Titre explicite pour les onglets et le nom proposé lors de l’impression PDF.
document.title="BP Découverte P2I — "+name;
const params=new URLSearchParams(location.search);
const simId=params.get("simulation_id");
const savedVariant=simId&&id==="biscuiterie"?localStorage.getItem("p2i_bp_decouverte_biscuiterie_sim_"+simId):null;
const requestedConfig=params.get("configuration_id")||savedVariant||"";
const biscuitVariants={crackers:"Crackers",biscuits_mous:"Biscuits mous",biscuits_durs:"Biscuits durs"};
const validBiscuitConfig=id!=="biscuiterie"||Object.prototype.hasOwnProperty.call(biscuitVariants,requestedConfig);
const config=validBiscuitConfig?requestedConfig:"";
const selectedVariant=id==="biscuiterie"&&Object.prototype.hasOwnProperty.call(biscuitVariants,config)?config:null;
let configLabel=id==="biscuiterie"?(biscuitVariants[config]||"À choisir"):config||"À choisir";
const unitPictures=(window.P2I_BP_IMAGES||{})[id]||{};
const pictureUrl=value=>{
 if(typeof value!=="string")return "";
 const url=value.trim();
 // Autoriser les chemins relatifs du dépôt, sans protocoles actifs ni traversée de répertoires.
 if(!/^(?:https:\/\/[a-z0-9.-]+(?:\/[a-z0-9_./%+-]*)?|[a-z0-9_./-]+)$/i.test(url))return "";
 if(/(?:^|\/)\.\.(?:\/|$)/.test(url))return "";
 return url;
};

const old=document.querySelector(".wrap");
if(!old)return;
const legacy=document.createElement("div");legacy.id="p2i-bp-legacy";legacy.hidden=true;legacy.style.display="none";old.parentNode.insertBefore(legacy,old);legacy.appendChild(old);
document.body.classList.add("p2i-bp17");
const isCrackers=id==="biscuiterie"&&selectedVariant==="crackers";
const capex=null; // CAPEX générique non validé pour la configuration
const equipmentReference=isCrackers?450000:null;
const invest=up.investment_breakdown||{};
const machineRegistry=typeof MACHINES_DATA!=="undefined"?MACHINES_DATA:null;
const machineSource=machineRegistry&&machineRegistry[id];
const referenceMachines=Array.isArray(machineSource)?machineSource:
 (machineSource&&Array.isArray(machineSource.machines)?machineSource.machines:
 (Array.isArray(up.machines)?up.machines:[]));
const variantMachineData=id==="biscuiterie"&&machineSource&&machineSource.configurations&&selectedVariant
 ?machineSource.configurations[selectedVariant]:null;
const cleaningVariants={
 nettoyage_intensif:{title:"Nettoyage industriel intensif",description:"Prestations de nettoyage et d’entretien mécanisé d’installations industrielles, selon diagnostic du site."},
 decontamination_chimique:{title:"Décontamination chimique",description:"Prestations spécialisées sur des contaminations chimiques : diagnostic préalable, protocoles adaptés, habilitations et filières de déchets à confirmer."},
 decontamination_biologique:{title:"Décontamination biologique",description:"Prestations spécialisées sur des risques biologiques : analyse préalable, protections, procédures et filières de traitement à confirmer."}
};
const selectedCleaning=id==="nettoyage"&&Object.prototype.hasOwnProperty.call(cleaningVariants,config)?cleaningVariants[config]:null;
if(id==="nettoyage")configLabel=selectedCleaning?selectedCleaning.title:"À choisir";
const isSpecialCleaning=!!selectedCleaning&&config!=="nettoyage_intensif";
const variantMachines=(id==="nettoyage"&&!selectedCleaning)||isSpecialCleaning?[]:variantMachineData?[
 ...(Array.isArray(machineSource.base_machines)?machineSource.base_machines:[]),
 ...(Array.isArray(variantMachineData.specific_machines)?variantMachineData.specific_machines:[])
]:referenceMachines;
const machineNames=variantMachines.map(m=>typeof m==="string"?m:(m.name||m.nom||m.machine||m.machine_name||"Équipement à qualifier"));
const machineCount=variantMachines.length;
const equipmentSummary=id==="nettoyage"&&!selectedCleaning?"Sélectionnez une activité de nettoyage avant de consulter une configuration d’équipements.":isSpecialCleaning?"Le catalogue général de nettoyage n’est pas validé pour cette activité spécialisée. Équipements, habilitations, EPI, protocoles et gestion des déchets sont à qualifier avant toute estimation.":variantMachineData?
 "Référentiel Biscuiterie : "+machineCount+" entrées de fonctions ou d’équipements (communs et spécifiques). Les options alternatives ne doivent pas être additionnées dans le budget.":
 machineCount?machineCount+" équipements référencés dans MACHINES_DATA. Les prix et la compatibilité de la ligne restent à confirmer.":
 "Liste des équipements à compléter dans le référentiel P2I.";
const sourceCapex=equipmentReference!==null?fmt(equipmentReference)+" (ligne intégrée Crackers 500 kg/h, équipements uniquement)":"À documenter pour la configuration choisie";
const finance=capex===null?note("Financement de référence : 40 % d’apport et 60 % de dette, calculés sur l’investissement total validé (et non sur le seul prix des machines). Réserve initiale de trésorerie distincte. Aucun montant ne peut être calculé tant que ce total manque."):table([["Investissement indicatif",sourceCapex],["Apport de référence (40 %)",fmt(capex*.4)],["Dette de référence (60 %)",fmt(capex*.6)],["Réserve de trésorerie initiale","À calculer séparément"]]);
const sections=[
'<div class="bp-cards">'+card("Unité industrielle",name)+card("Filière",filiere)+card("Configuration",selectedCleaning?selectedCleaning.title:(config||"Référence P2I à préciser"))+'</div>'+note("<b>Activité :</b> "+text(selectedCleaning?selectedCleaning.description:up.description)),
'<div class="bp-cards">'+card("Investissement machines",sourceCapex)+card("Chiffre d’affaires prévisionnel","À calculer par le moteur économique")+card("Emplois directs","À valider pour la configuration")+'</div>'+note("Données préliminaires du référentiel. Ne constituent pas des prévisions financières validées."),
note("Les équipements sont présentés verticalement par fonction. Les capacités, interfaces, utilités et prix doivent être vérifiés pour chaque configuration. Pour les biscuits mous, les équipements alternatifs de formage ne sont pas tous à acheter : le choix technique reste à valider.")+note(safe(equipmentSummary))+'<div class="bp-equipment-vertical">'+(variantMachines.length?variantMachines.map(m=>'<article><b>'+safe(typeof m==='string'?m:(m.name||m.nom||m.machine||m.machine_name||'Équipement'))+'</b><p>Fonction : '+text(typeof m==='string'?null:(m.role||m.machine_role))+'</p><p>Capacité : '+text(typeof m==='string'?null:(m.capacity||m.machine_capacity))+'</p><p>Utilités : '+text(typeof m==='string'?null:(m.utilities||m.machine_utilities))+'</p></article>').join(""):'<article>Configuration industrielle de référence à documenter.</article>')+'</div>',
'<h3>Marchés cibles</h3>'+(isSpecialCleaning?"<p>Segments de clientèle spécialisés à documenter.</p>":list(up.target_markets))+'<h3>Positionnement concurrentiel</h3>'+(isSpecialCleaning?"<p>Positionnement et concurrence spécialisés à documenter.</p>":list(up.competitive_advantages)),
'<h3>Canaux et actions commerciales</h3>'+(isSpecialCleaning?"<p>Canaux commerciaux spécialisés à valider.</p>":list(up.marketing))+note("Prix de vente, volumes, circuits de distribution et budget marketing : à justifier par hypothèses documentées."),
'<h3>Opportunités</h3>'+(isSpecialCleaning?"<p>Opportunités propres à cette activité à étudier.</p>":list(up.avantages))+'<h3>Risques et contraintes</h3>'+(isSpecialCleaning?"<p>Risques chimiques ou biologiques, conformité, sécurité du personnel et traitement des déchets à qualifier.</p>":list(up.challenges)),
'<div class="bp-cards">'+card("Machines",equipmentReference!==null?fmt(equipmentReference):"À documenter")+card("Investissement total","À consolider : équipements et coûts complémentaires")+card("Apport 40 %",capex!==null?fmt(capex*.4):"À documenter")+card("Dette 60 %",capex!==null?fmt(capex*.6):"À documenter")+'</div>'+finance+note("Attention : un CAPEX minimal indicatif ne remplace pas le budget détaillé d’une ligne intégrée ou d’un devis fournisseur. La réserve de trésorerie reste distincte."),
'<h3>Capacité et processus</h3>'+table([["Capacité de référence",up.monthly_capacity||"À documenter"],["Volume commercialisé","À calculer"],["Prix unitaire","À documenter"]])+'<h3>Étapes de production ou de prestation</h3>'+(isSpecialCleaning?"<p>Processus spécialisé à documenter après diagnostic des risques, vérification des habilitations et validation des protocoles.</p>":list(up.processus)),
note("Le compte de résultat sur trois années (A1, A2, A3) sera calculé par le moteur financier commun lorsque les hypothèses de ventes, charges, amortissements, dette et fiscalité seront complètes. Aucun montant absent n’est remplacé par zéro.")+annualMatrix("Compte de résultat prévisionnel — trois exercices",["Chiffre d’affaires","Coût des produits vendus","Marge brute","Charges commerciales","Charges d’exploitation","Dotations aux amortissements","Résultat d’exploitation","Charges financières","Résultat avant impôt","Impôts","Résultat net"]),
note("BFR mensuel = stocks + créances clients − dettes d’exploitation. Les délais de règlement et stocks cibles doivent être propres à la configuration. Aucun stock n’est compté deux fois.")+(isCrackers?note("Hypothèses de référence Crackers à appliquer au moteur : matières premières 30 jours ; produits finis 15 jours de stock cible total, rotation et sécurité comprises ; fournisseurs réglés comptant ; clients 40 % comptant et 60 % à 30 jours. Le BFR est calculé mois par mois, sans double comptabilisation du stock."):note("Les délais clients, fournisseurs et stocks cibles doivent être documentés pour cette activité."))+monthlyMatrix("BFR prévisionnel — 36 périodes mensuelles (3 ans)",["Stock MP","Stock PF","Créances clients","Dettes exploitation","BFR net"],36),
note("Bilan simplifié prévisionnel sur trois exercices (A1, A2, A3). Il ne peut être équilibré automatiquement sans financement complet, immobilisations, BFR, amortissements et trésorerie validés. Chaque année doit vérifier Actif = Passif.")+annualMatrix("Bilan simplifié — trois exercices",["Immobilisations nettes","Stocks","Créances clients","Trésorerie active","Total actif","Capital et réserves","Résultat de l’exercice","Dettes financières","Dettes d’exploitation","Total passif","Écart de contrôle actif − passif"]),
'<div class="bp-cards">'+card("Capacité",isCrackers?"500 kg/h (référence)":up.monthly_capacity||"À documenter")+card("Emplois directs","À valider pour la configuration")+card("ROI financier","Non calculable sans flux de trésorerie validés")+'</div>'+note("Les indicateurs de rentabilité nécessitent des calculs financiers traçables, non une simple reprise de fourchettes.")+annualMatrix("Indicateurs économiques — trois exercices",["Chiffre d’affaires","Marge brute (%)","Résultat net","Marge nette (%)","Capacité d’autofinancement","Service de la dette","DSCR","Rentabilité des capitaux propres"]),
note("Trésorerie prévisionnelle : 12 mois exclusivement. Chaque mois doit rapprocher solde initial, encaissements, décaissements, service de la dette et solde final. Les variations de BFR ne doivent pas être décaissées deux fois.")+monthlyMatrix("Plan de trésorerie — année 1 uniquement",["Solde initial","Encaissements","Décaissements","Service dette","Solde final"],12),
table([["Source unité",id||"Non identifié"],["Référentiel","js/up-data.js"],["Statut des montants","Estimations indicatives / à documenter"],["Devise de calcul","USD"],["Conversion FCFA","À afficher selon taux daté"]])+note("Les données financières non documentées sont volontairement laissées en attente."),
note("La P2I accompagne la conception, la configuration industrielle, la simulation, le financement et la mise en relation avec les fournisseurs. Une estimation indicative ne déclenche pas de négociation."),
note("Le BP Initial permet de personnaliser le projet. Le BP Pro nécessite des contrôles techniques et financiers approfondis ainsi que des devis et justificatifs. Les services additionnels sont distincts du BP Pro."),
'<h3>Éléments techniques disponibles</h3>'+table([["Unité",name],["Filière",filiere],["Configuration",config||"À préciser"],["Utilités","À confirmer"],["Sécurité / conformité","À documenter"]])+'<h3>Équipements et fonctions</h3>'+list(machineNames)
];
// Détail du budget d'investissement : ne jamais assimiler le prix de la ligne au CAPEX total.
const investmentItems=[
 ["Équipements de production",isCrackers?"450 000 USD — ligne intégrée de référence":"À documenter selon la configuration"],
 ["Fret maritime et assurance","À documenter — calcul CIF Port d’Abidjan"],
 ["Transit, douane et frais portuaires","À documenter"],
 ["Transport du port au site","À documenter"],
 ["Génie civil et aménagement du site","À documenter"],
 ["Électricité, eau et autres utilités","À documenter"],
 ["Installation, mise en service et formation","À documenter"],
 ["Pièces de rechange initiales","À documenter"],
 ["Sécurité, conformité et environnement","À documenter"],
 ["Investissement total hors réserve de trésorerie","Non calculable tant que les coûts complémentaires manquent"],
 ["Apport (40 % de l’investissement total)","Non calculable à ce stade"],
 ["Dette (60 % de l’investissement total)","Non calculable à ce stade"],
 ["Réserve de trésorerie initiale","À calculer séparément"]
];
sections[6]+='<h3>Décomposition de l’investissement et financement</h3>'+table(investmentItems)+
 note("Le prix de référence de la ligne intégrée Crackers est une donnée d’équipement, pas un CAPEX complet. Le financement 40 % / 60 % s’applique au total d’investissement documenté ; la réserve de trésorerie initiale est distincte.");
sections[13]+='<h3>Traçabilité de l’hypothèse industrielle</h3>'+table([
 ["Périmètre",name],
 ["Variante",configLabel],
 ["Équipements",isCrackers?"450 000 USD — référence P2I, ligne intégrée 500 kg/h":"Prix de référence à documenter"],
 ["Nature du prix",isCrackers?"Prix de la ligne, hors coûts complémentaires":"À préciser"],
 ["Fret, assurance, taxes, installation et utilités","Non intégrés sans données vérifiées"],
 ["Financement de référence","40 % apport / 60 % dette, sur CAPEX complet uniquement"],
 ["Horizon BFR","36 périodes mensuelles"],
 ["Horizon trésorerie","12 mois"],
 ["Horizon autres états prévisionnels","3 exercices"]
 ]);
// Les deux actions du parcours conservent l'UP, la configuration et la simulation.
const destinationParams=new URLSearchParams(location.search);
destinationParams.set("unit_id",id);
destinationParams.delete("id");
// Ne pas transmettre au BP Pro une variante inconnue ou non sélectionnée.
if(id==="biscuiterie"){
 if(selectedVariant)destinationParams.set("configuration_id",selectedVariant);
 else destinationParams.delete("configuration_id");
}else if(id==="nettoyage"){
 if(selectedCleaning)destinationParams.set("configuration_id",config);
 else destinationParams.delete("configuration_id");
}
const proParams=new URLSearchParams(destinationParams);
proParams.set("redirect","bp-pro");
const proUrl="fiche-production.html?"+proParams.toString();
sections[16]+='<div class="bp-note"><h3>Continuer votre parcours P2I</h3><p>Conservez une copie du BP Découverte avant de passer à la préparation du dossier approfondi. Les données manquantes devront être complétées et vérifiées.</p><div class="bp-actions"><a id="p2i-bp17-go-pro" href="'+safe(proUrl)+'">Aller au Pro</a></div><p>Le passage au BP Pro ne constitue ni une validation bancaire ni un devis fournisseur.</p></div>';
const header=document.createElement("header");header.className="bp-topbar";header.innerHTML='<div class="bp-brand"><span class="bp-logo" aria-hidden="true"><svg viewBox="0 0 40 40" width="30" height="30" focusable="false"><path d="M7 31V9M7 31H34" fill="none" stroke="#fff" stroke-width="2.4" stroke-linecap="round"/><path d="M10 27L18 20L24 23L33 11" fill="none" stroke="#ffffff" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"/><circle cx="18" cy="20" r="2.6" fill="#fff"/><circle cx="33" cy="11" r="2.8" fill="#fff"/></svg></span> P2I<small>Plateforme Industrielle Ivoirienne · Business Plan Découverte</small></div><div class="bp-tag">BP Découverte · '+safe(name)+'</div><div class="bp-top-actions"><a href="dashboard.html" class="bp-dashboard-link">← Retour au dashboard</a><button class="bp-export" type="button" id="p2i-bp17-print">▣ Imprimer / Enregistrer en PDF</button></div>';
const layout=document.createElement("div");layout.className="bp-layout";layout.id="p2i-bp17-root";
const aside=document.createElement("nav");aside.className="bp-sidebar";aside.setAttribute("aria-label","Parcours du business plan");aside.innerHTML='<h2>PARCOURS DU BP</h2>'+TITRES.map((t,i)=>'<a href="#p2i-r'+(i+1)+'">'+String(i+1).padStart(2,"0")+' · '+safe(t)+'</a>').join("");
const main=document.createElement("main");main.className="bp-main";
main.innerHTML='<div class="bp-intro"><b>P2I · PLATEFORME INDUSTRIELLE IVOIRIENNE</b><h1>Business Plan Découverte — '+safe(name)+'</h1><p>Une première vision structurée pour évaluer la faisabilité de votre projet.</p><div class="bp-intro-meta"><span>Unité : '+safe(name)+'</span><span>Filière : '+safe(filiere)+'</span><span>Configuration : '+safe(configLabel)+'</span><span>Date de consultation : '+safe(consultationDate)+'</span></div></div><div class="bp-hero"><div class="bp-hero-copy"><b>BP DÉCOUVERTE · CÔTE D’IVOIRE</b><h1>'+safe(name)+'</h1><p>'+text(up.description||"Configuration industrielle de référence P2I")+'</p><p>GRATUIT — version « Découverte »</p></div><div class="bp-medallion" aria-label="Illustration de l’activité"></div></div>'+TITRES.map((t,i)=>'<section class="bp-section" id="p2i-r'+(i+1)+'"><h2>'+String(i+1).padStart(2,"0")+' · '+safe(t)+'</h2>'+sections[i]+'</section>').join("");
// Le sommaire se place après la bannière, avant la première rubrique.
const summary=document.createElement("section");
summary.className="bp-summary";
summary.setAttribute("aria-label","Sommaire des 17 rubriques");
summary.innerHTML='<h2>Votre BP Découverte en 17 rubriques</h2><p>Accédez directement aux analyses techniques, commerciales et financières.</p><div class="bp-summary-links">'+TITRES.map((t,i)=>'<a href="#p2i-r'+(i+1)+'">'+String(i+1).padStart(2,"0")+' · '+safe(t)+'</a>').join("")+'</div>';
main.insertBefore(summary,main.querySelector("#p2i-r1"));
const statusNote=document.createElement("div");
statusNote.className="bp-note";
statusNote.innerHTML="<b>Statut des données :</b> hypothèses indicatives, à documenter et à vérifier. Aucun devis fournisseur ni financement bancaire n’est présumé.";
main.insertBefore(statusNote,main.querySelector("#p2i-r1"));
if(id==="biscuiterie"){
 const selector=document.createElement("div");
 selector.className="bp-variant-selector";
 const variants=[["crackers","Crackers","Biscuits salés croquants"],["biscuits_mous","Biscuits mous","Biscuits tendres et moelleux"],["biscuits_durs","Biscuits durs","Biscuits secs à texture ferme"]];
 selector.innerHTML='<h2>Choisissez la version de votre biscuiterie</h2><p>Trois configurations distinctes. Chaque sélection actualise le périmètre du projet.</p><div class="bp-variant-grid">'+variants.map(v=>'<button type="button" class="bp-variant-choice'+(selectedVariant===v[0]?' is-active':'')+'" data-variant="'+v[0]+'">'+(pictureUrl(unitPictures.variants?.[v[0]]?.product)?'<img class="bp-variant-photo" loading="lazy" alt="Produit fini : '+safe(v[1])+'" src="'+safe(pictureUrl(unitPictures.variants[v[0]].product))+'">':'')+'<strong>'+v[1]+'</strong><span>'+v[2]+'</span><small>'+(v[0]==="crackers"?"Ligne intégrée de référence : 500 kg/h · équipements 450 000 USD (hors autres investissements)":"Capacité et investissement à documenter pour cette variante")+'</small></button>').join("")+'</div><select id="p2i-bp17-variant" aria-label="Variante de biscuiterie" class="bp-visually-hidden"><option value="">Choisir</option>'+variants.map(v=>'<option value="'+v[0]+'">'+v[1]+'</option>').join("")+'</select>';
 main.insertBefore(selector,main.querySelector(".bp-hero"));
 const select=selector.querySelector("select");
 select.value=selectedVariant||"";
 const legacySelect=$("p2iBiscuiterieSelect");
 if(legacySelect&&selectedVariant&&legacySelect.value!==selectedVariant){
   legacySelect.value=selectedVariant;
   legacySelect.dispatchEvent(new Event("change",{bubbles:true}));
 }
 selector.querySelectorAll("[data-variant]").forEach(button=>button.addEventListener("click",()=>{select.value=button.dataset.variant;select.dispatchEvent(new Event("change",{bubbles:true}));}));
 select.addEventListener("change",()=>{
  const p=new URLSearchParams(location.search);
  if(select.value)p.set("configuration_id",select.value);else p.delete("configuration_id");
  location.assign(location.pathname+"?"+p.toString());
 });
}
if(id==="nettoyage"){
 const variants=[
  {id:"nettoyage_intensif",title:"Nettoyage industriel intensif",detail:"Entretien mécanisé des sols, décapage et dégraissage des surfaces compatibles, aspiration et gestion des déchets ordinaires.",status:"Scénario indicatif, équipements et prix à qualifier"},
  {id:"decontamination_chimique",title:"Décontamination chimique",detail:"Interventions sur contamination chimique nécessitant un diagnostic, des procédures spécialisées et des habilitations adaptées.",status:"Investissements, habilitations et hypothèses financières non validés"},
  {id:"decontamination_biologique",title:"Décontamination biologique",detail:"Interventions spécialisées avec protocoles de confinement, protection et gestion des déchets adaptés aux risques biologiques.",status:"Investissements, habilitations et hypothèses financières non validés"}
 ];
 const p=new URLSearchParams(location.search);
 const chosen=p.get("configuration_id")||"";
 const panel=document.createElement("section");panel.className="bp-section bp-variants";panel.setAttribute("aria-label","Variantes de nettoyage industriel");
 panel.innerHTML='<h2>Les trois activités de nettoyage industriel</h2><p>Chaque activité constitue un périmètre technique et économique distinct. Les montants d’une activité ne sont pas automatiquement transférables aux autres.</p><div class="bp-cards">'+variants.map(v=>'<article class="bp-card">'+(pictureUrl(unitPictures.variants?.[v.id]?.product)?'<img class="bp-variant-photo" loading="lazy" alt="Illustration de l’activité : '+safe(v.title)+'" src="'+safe(pictureUrl(unitPictures.variants[v.id].product))+'">':'')+'<small>'+safe(v.title)+'</small><p>'+safe(v.detail)+'</p><p><b>Statut :</b> '+safe(v.status)+'</p><a href="?'+safe((()=>{const q=new URLSearchParams(location.search);q.set("configuration_id",v.id);return q.toString()})())+'">Consulter cette activité</a></article>').join("")+'</div>';
 main.insertBefore(panel,main.querySelector(".bp-hero"));
 if(chosen&&variants.some(v=>v.id===chosen)){
  const v=variants.find(v=>v.id===chosen);
  const info=document.createElement("div");info.className="bp-note";info.innerHTML='<b>Activité sélectionnée :</b> '+safe(v.title)+'. '+safe(v.status)+'. Aucun compte de résultat consolidé des trois activités n’est présumé.';
  panel.insertBefore(info,panel.querySelector(".bp-cards"));
 }
}
layout.append(aside,main);document.body.prepend(layout);document.body.prepend(header);
$("p2i-bp17-print").addEventListener("click",()=>{
 // L’export utilise le dialogue natif du navigateur : l’utilisateur choisit « Enregistrer au format PDF ».
 // Attendre le chargement des polices et des photographies pour éviter un PDF incomplet.
 const button=$("p2i-bp17-print");
 if(button.disabled)return;
 button.disabled=true;
 const readyImages=Array.from(main.querySelectorAll("img")).map(img=>{
   if(img.complete)return Promise.resolve();
   if(typeof img.decode==="function")return img.decode().catch(()=>{});
   return new Promise(resolve=>{
     if(img.complete){resolve();return;}
     img.addEventListener("load",resolve,{once:true});
     img.addEventListener("error",resolve,{once:true});
     if(img.complete)resolve();
   });
 });
 const readyFonts=document.fonts&&document.fonts.ready?document.fonts.ready.catch(()=>{}):Promise.resolve();
 const waitResources=Promise.all([readyFonts,...readyImages]);
 const maxWait=new Promise(resolve=>setTimeout(resolve,4000));
 Promise.race([waitResources,maxWait]).then(()=>window.print()).finally(()=>{button.disabled=false;});
});

// Images liées à l’UP et à sa variante : pas de photo d’une autre activité.
const imageSet=unitPictures;
const imageVariant=id==="nettoyage"?(selectedCleaning?config:null):selectedVariant;
const variantImage=imageVariant&&imageSet.variants&&imageSet.variants[imageVariant];
const image=variantImage?{...imageSet,...variantImage}:imageSet;
if(pictureUrl(image.hero))main.querySelector(".bp-hero").style.setProperty("--bp-hero-image",'url("'+pictureUrl(image.hero)+'")');
if(pictureUrl(image.product))main.querySelector(".bp-medallion").style.setProperty("--bp-product-image",'url("'+pictureUrl(image.product)+'")');
// Le pont financier doit être notifié même lorsque le moteur a terminé avant l’affichage.
window.dispatchEvent(new CustomEvent("p2i:bp17-rendered",{detail:{unit_id:id,configuration_id:config}}));
}
// Les référentiels et la simulation peuvent arriver après DOMContentLoaded.
// Tentatives bornées : ne jamais fabriquer une UP à partir d’une donnée absente.
let renderAttempts=0;
function tryRender(){
 if(document.getElementById("p2i-bp17-root"))return;
 render();
 if(!document.getElementById("p2i-bp17-root")&&++renderAttempts<20)
   setTimeout(tryRender,250);
}
if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",tryRender);
else tryRender();
window.addEventListener("pageshow",tryRender);
})();