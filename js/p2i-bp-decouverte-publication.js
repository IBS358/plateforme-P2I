/* Contrôle documentaire distinct de la cohérence arithmétique des moteurs. */
(function(root){
"use strict";
const variants=Object.freeze({biscuiterie:Object.freeze({crackers:"Crackers",biscuits_mous:"Biscuits mous",biscuits_durs:"Biscuits durs"}),nettoyage:Object.freeze({nettoyage_intensif:"Nettoyage industriel intensif",decontamination_chimique:"Décontamination chimique",decontamination_biologique:"Décontamination biologique"})});
const text=v=>typeof v==="string"&&v.trim().length>0;
const amount=v=>typeof v==="number"&&Number.isFinite(v)&&v>=0;
const source=s=>s&&text(s.url)&&/^https:\/\/[^/\s]+\//.test(s.url)&&text(s.date_verification)&&/^\d{4}-\d{2}-\d{2}$/.test(s.date_verification)&&text(s.extrait)&&s.verifie===true;
function inspect(id,config,registry,evidence){
 const u=registry&&registry[id],e=evidence||{},issues=[];
 const add=(code,message)=>issues.push({code,message});
 if(!u)add("identite","UP absente du référentiel");
 if(u?.bp_configurations&&!u.bp_configurations.includes(config||"reference"))add("variante","Variante textile à sélectionner ou inconnue");
 if(variants[id]&&!Object.prototype.hasOwnProperty.call(variants[id],config||""))add("variante","Variante à sélectionner ou inconnue");
 if(e.up_id!==id||e.configuration_id!==(config||null))add("contexte","Dossier documentaire absent ou rattaché à un autre contexte");
 const r=e.reference||{};
 if(!text(r.fabricant)||!text(r.modele)||!text(r.origine))add("reference","Fabricant, modèle et origine de la configuration à documenter");
 if(!(amount(r.capacite)&&r.capacite>0&&text(r.unite)))add("capacite","Capacité effective et unité de la ligne à justifier");
 if(!(amount(r.prix)&&r.prix>0&&r.devise==="USD"&&["EXW","FOB"].includes(r.incoterm)&&source(r.source)))add("prix","Prix fournisseur EXW/FOB, devise, date et preuve vérifiée manquants");
 for(const k of ["fonctions","utilites","interfaces","securite"]){
  const checks=e[k];
  if(!Array.isArray(checks)||!checks.length||!checks.every(x=>text(x?.description)&&x.statut==="verifie"&&source(x.source)))add(k,"Contrôles techniques à justifier : "+k);
 }
 if(!e.capex||!Array.isArray(e.capex.postes)||!e.capex.postes.length||!e.capex.postes.every(x=>amount(x?.montant)&&source(x.source)))add("capex","Postes du CAPEX complet et coûts complémentaires à sourcer");
 if(!Array.isArray(e.hypotheses)||!e.hypotheses.length||!e.hypotheses.every(x=>text(x?.description)&&source(x.source)))add("hypotheses","Hypothèses économiques à documenter");
 const validator=root.P2I_BP_CONTROLES_FINANCIERS;
 const f=e.previsions;
 if(!f||f.up_id!==id||f.configuration_id!==(config||null)||!validator||!validator.validate(f).valide)add("previsions","États cohérents requis : trois exercices, BFR 36 mois, trésorerie 12 mois");
 if(f&&f.investissement&&amount(r.prix)&&f.investissement.equipements<r.prix)add("prix_budget","Budget équipements inférieur au prix de la référence documentée");
 if(e.capex&&f&&f.investissement){
  const keys=validator?validator.requiredInvestment:[];
  const posts=e.capex.postes||[];
  if(!keys.every(k=>posts.filter(x=>x?.poste===k).length===1&&posts.find(x=>x?.poste===k).montant===f.investissement[k])||posts.length!==keys.length)add("rapprochement","CAPEX sourcé différent des postes financiers");
 }
 return {up_id:id,configuration_id:config||null,statut:issues.length?"a_completer":"valide_documente",blocages:issues,
 reference_p2i:id==="biscuiterie"&&config==="crackers"?{equipements_usd:450000,capacite_kg_h:500,statut:"hypothese_p2i_justificatif_fournisseur_manquant"}:null};
}
function audit(registry,evidence){
 const dossiers=Object.keys(registry).flatMap(id=>(registry[id].bp_configurations||Object.keys(variants[id]||{standard:"Standard"})).map(v=>{
 const config=registry[id].bp_configurations?(v==='reference'?null:v):variants[id]?v:null;
 return inspect(id,config,registry,(evidence||[]).find(x=>x.up_id===id&&x.configuration_id===config));
 }));
 return {objectif_up:96,up_presentes:Object.keys(registry).length,ecart_up:96-Object.keys(registry).length,configurations:dossiers.length,
 valides:dossiers.filter(x=>x.statut==="valide_documente").length,dossiers};
}
root.P2I_BP_PUBLICATION=Object.freeze({inspect,audit,variants,source});
})(typeof window!=="undefined"?window:globalThis);
