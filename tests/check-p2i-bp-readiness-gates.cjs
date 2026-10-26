/** Portes de publication : distinguer brouillon, référence et BP financier validé. */
"use strict";
const fs=require("node:fs"),path=require("node:path"),assert=require("node:assert/strict");
const root=path.resolve(__dirname,"..");
const data=JSON.parse(fs.readFileSync(path.join(root,"data/p2i-bp-decouverte-95-dossiers-17-rubriques.json"),"utf8"));
const ids=new Set();
const report={total:0,reference_industrielle:0,prix_ligne_documente:0,capex_complet:0,previsions_financieres:0,blocages:[]};
for(const d of data.dossiers){
 report.total++;
 assert.ok(d.up_id&&!ids.has(d.up_id),"Identité UP absente ou dupliquée");
 ids.add(d.up_id);
 assert.equal(d.sections.length,17,"17 rubriques obligatoires");
 const industrial=d.sections[2].contenu,investment=d.sections[6].contenu;
 const reference=industrial.configuration_reference;
 if(reference)report.reference_industrielle++;
 if(reference&&Number.isFinite(reference.prix_ligne_usd)&&reference.prix_ligne_usd>0)report.prix_ligne_documente++;
 if(Number.isFinite(investment.capex_complet_usd)&&investment.capex_complet_usd>0)report.capex_complet++;
 const financial=[8,9,10,12].every(i=>d.sections[i].contenu.etat!=="a_documenter");
 if(financial)report.previsions_financieres++;
 if(d.statut==="brouillon_documentaire_non_bancable"){
  assert.equal(investment.capex_complet_usd,null,"Un brouillon ne publie pas de CAPEX non validé");
  assert.equal(investment.apport_30_usd,null);
  assert.equal(investment.dette_70_usd,null);
  for(const i of [8,9,10,12])assert.equal(d.sections[i].contenu.etat,"a_documenter",
   "Prévision fictive dans un brouillon : "+d.up_id);
 }
 const manquants=[];
 if(!reference)manquants.push("configuration_reference");
 if(!reference||!Number.isFinite(reference.prix_ligne_usd))manquants.push("prix_ligne");
 if(investment.capex_complet_usd===null)manquants.push("capex");
 if(!financial)manquants.push("previsions");
 if(manquants.length)report.blocages.push({up_id:d.up_id,manquants});
}
assert.equal(report.total,data.nombre_up);
assert.equal(report.total,95,"Périmètre des 95 dossiers attendu");
assert.equal(report.previsions_financieres,0,
 "Si des prévisions sont disponibles, faire évoluer le test et contrôler les justificatifs");
console.log("Audit publication P2I : "+JSON.stringify({
 total:report.total,reference_industrielle:report.reference_industrielle,
 prix_ligne_documente:report.prix_ligne_documente,capex_complet:report.capex_complet,
 previsions_financieres:report.previsions_financieres,
 dossiers_a_completer:report.blocages.length
}));
