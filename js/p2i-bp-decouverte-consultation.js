/* Consultation V106 indépendante des simulations et de l'authentification. */
(function(){
"use strict";
const p=new URLSearchParams(location.search);
const id=p.get("unit_id")||p.get("up_id")||"biscuiterie";
if(!Object.prototype.hasOwnProperty.call(P2I_UP_DATA,id)){
 document.addEventListener("DOMContentLoaded",()=>{document.querySelector(".wrap").textContent="UP inconnue. Choisissez une unité dans le catalogue P2I.";
 const a=document.createElement("a");a.href=location.pathname;a.textContent="Ouvrir le catalogue";document.body.append(a);});return;
}
p.set("unit_id",id);p.delete("up_id");
if(!p.has("configuration_id")&&id==="biscuiterie")p.set("configuration_id","crackers");
history.replaceState(null,"",location.pathname+"?"+p.toString());
function mount(){
 const main=document.querySelector(".bp-main");if(!main||document.getElementById("p2i-consultation"))return;
 const api=window.P2I_BP_PUBLICATION,audit=api.audit(P2I_UP_DATA);
 const panel=document.createElement("section");panel.className="bp-note bp-consultation";panel.id="p2i-consultation";
 const title=document.createElement("h2");title.textContent="Consultation des configurations P2I";panel.append(title);
 const count=document.createElement("p");count.textContent=audit.up_presentes+" UP disponibles sur 96 attendues · "+audit.configurations+" dossiers de configuration · "+audit.valides+" BP validés et documentés. La 96e UP reste à identifier.";panel.append(count);
 const label=document.createElement("label");label.htmlFor="p2i-up-consultation";label.textContent="Unité de production à consulter";panel.append(label);
 const select=document.createElement("select");select.id=label.htmlFor;
 const groups=new Map();
 for(const [key,u] of Object.entries(P2I_UP_DATA)){
  const sector=u.filiereNom||"Autres";let group=groups.get(sector);
  if(!group){group=document.createElement("optgroup");group.label=sector;groups.set(sector,group);select.append(group);}
  const option=document.createElement("option");option.value=key;option.textContent=u.nom;option.selected=key===id;group.append(option);
 }
 select.addEventListener("change",()=>{const q=new URLSearchParams({unit_id:select.value});location.assign(location.pathname+"?"+q.toString());});panel.append(select);
 const config=p.get("configuration_id"),status=api.inspect(id,config,P2I_UP_DATA);
 const h=document.createElement("h3");h.textContent="Dossier incomplet — validation documentaire requise";panel.append(h);
 const details=document.createElement("details"),summary=document.createElement("summary");summary.textContent="Informations manquantes pour cette configuration";details.append(summary);
 const ul=document.createElement("ul");for(const issue of status.blocages){const li=document.createElement("li");li.textContent=issue.message;ul.append(li);}details.append(ul);panel.append(details);
 const links=document.createElement("p");links.textContent="Parcours représentatifs : ";
 for(const [key,name,variant] of [["biscuiterie","Crackers","crackers"],["biscuiterie","Biscuits mous","biscuits_mous"],["nettoyage","Décontamination chimique","decontamination_chimique"],["conserverie_legumes","Conserverie",null],["peintures_btp","Peintures BTP",null]]){
  const a=document.createElement("a"),q=new URLSearchParams({unit_id:key});if(variant)q.set("configuration_id",variant);a.href=location.pathname+"?"+q;a.textContent=name;links.append(a,document.createTextNode(" · "));
 }panel.append(links);main.prepend(panel);
}
window.addEventListener("p2i:bp17-rendered",mount);
document.addEventListener("DOMContentLoaded",mount);
})();
