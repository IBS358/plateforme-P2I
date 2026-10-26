/** P2I — plan de consolidation industrialo-financière des 95 dossiers.
 * Génère une matrice CSV auditable, sans inventer de prix ni de prévisions.
 * Exécution : node scripts/build-bp-decouverte-plan-consolidation.cjs
 */
"use strict";
const fs=require("node:fs"),path=require("node:path"),assert=require("node:assert/strict");
const root=path.resolve(__dirname,"..");
const data=JSON.parse(fs.readFileSync(path.join(root,"data/p2i-bp-decouverte-95-dossiers-17-rubriques.json"),"utf8"));
const sourceFiles=fs.readdirSync(path.join(root,"data")).filter(n=>/^p2i-bp-decouverte-lot-\d\d-sources\.json$/.test(n)).sort();
const sources=new Map();
for(const file of sourceFiles){
 const lot=JSON.parse(fs.readFileSync(path.join(root,"data",file),"utf8"));
 for(const u of lot.unites||[]){
  assert.ok(!sources.has(u.up_id),"UP en double dans les lots : "+u.up_id);
  sources.set(u.up_id,{u,file});
 }
}
const fields=["up_id","up_nom","filiere","fichier_source","machines_catalogue","reference_industrielle","capacite_reference","prix_ligne_documente","sources_externes_verifiees","capex_complet","hypotheses_ventes","charges_et_fiscalite","bfr_36_mois","tresorerie_12_mois","bilans_3_ans","statut_publication","prochaine_action"];
const rows=[],counts={total:0,configuration:0,prix:0,capex:0,financier:0};
for(const d of data.dossiers){
 const entry=sources.get(d.up_id);
 assert.ok(entry,"UP sans dossier source : "+d.up_id);
 const {u,file}=entry,ref=u.reference_industrielle_validee;
 const machineCount=(u.machines_catalogue||[]).length;
 const price=!!(ref&&Number.isFinite(ref.prix_ligne_usd)&&ref.prix_ligne_usd>0);
 const capex=Number.isFinite(d.sections[6].contenu.capex_complet_usd)&&d.sections[6].contenu.capex_complet_usd>0&&u.controle?.capex_complet_valide_usd===d.sections[6].contenu.capex_complet_usd;
 const validFinancial=[8,9,10,12].every(i=>d.sections[i].contenu?.etat!=="a_documenter");
 const control=u.controle||{};
 const ventes=control.projections_3_ans_validees===true;
 const bfr=control.bfr_36_mois_valide===true;
 const tresorerie=control.tresorerie_12_mois_validee===true;
 const bilans=validFinancial&&ventes&&bfr&&tresorerie;
 const charges=ventes; // La validation détaillée des charges est incluse dans le contrôle des projections.
 const ext=(u.controle?.sources_externes_verifiees||[]).length;
 const capacity=ref&&Number.isFinite(ref.capacite_kg_h)&&ref.capacite_kg_h>0;
 const action=!ref?"Sélectionner une configuration de référence cohérente, vérifier ses fonctions et interfaces":
  !capacity?"Documenter la capacité effective et les utilités":
  !price||!ext?"Vérifier fabricant, modèle, prix EXW/FOB et justificatif fournisseur":
  !capex?"Documenter fret, douane, génie civil, utilités, installation, pièces et sécurité":
  !validFinancial?"Documenter volumes, prix de vente, charges, fiscalité, stocks et règlements puis calculer les états":
  "Contrôle final de cohérence et publication";
 rows.push([d.up_id,d.up_nom,d.filiere,file,machineCount,!!ref,!!capacity,price,ext,capex,
  ventes,charges,bfr,tresorerie,bilans,d.statut,action]);
 counts.total++;if(ref)counts.configuration++;if(price)counts.prix++;if(capex)counts.capex++;if(validFinancial)counts.financier++;
}
assert.equal(counts.total,95);
assert.equal(sources.size,95);
const csv=x=>'"'+String(x??"").replace(/"/g,'""')+'"';
const output=[fields.map(csv).join(";"),...rows.map(r=>r.map(csv).join(";"))].join("\n")+"\n";
const target=path.join(root,"data/p2i-bp-decouverte-plan-consolidation.csv");
fs.writeFileSync(target,output,"utf8");
console.log("Consolidation P2I : "+JSON.stringify(counts)+" ; matrice : "+path.relative(root,target));
