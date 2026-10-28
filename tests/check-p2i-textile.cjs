'use strict';
const fs=require('fs'),vm=require('vm'),path=require('path'),assert=require('assert/strict');
const root=path.resolve(__dirname,'..'),c=vm.createContext({});c.window=c;
for(const f of ['js/p2i-economic-result-engine.js','js/p2i-financial-engine.js','js/p2i-bp-decouverte-bfr-engine.js','js/p2i-bp-decouverte-tresorerie-12-mois.js','js/p2i-bp-decouverte-simulation-commune.js','js/p2i-bp-decouverte-donnees.js','js/p2i-bp-decouverte-v108-contexte.js'])vm.runInContext(fs.readFileSync(path.join(root,f),'utf8'),c);
const d=c.P2I_BP_DONNEES,api=c.P2I_BP_SIMULATION_COMMUNE,lot=JSON.parse(fs.readFileSync(path.join(root,'data/p2i-bp-lot-textile-01.json'),'utf8'));
for(const [id,qty,nombre]of [['confection',8,14],['uniformes',10,16],['linge',6,9]]){
 const v=d.unites[id].variantes.reference,s=v.reference,r=api.calculer(s),p=lot.profils[id];
 assert.equal(s.unite,'pièces/h');assert.equal(r.unite_production.nom,'pièce');assert.equal(v.prix_equipement.quantite_retenue,qty);assert.equal(v.prix_equipement.nombre_machines_reference,nombre);
 const equipment=(875*qty+p.equipements_complementaires.reduce((n,e)=>n+e.prix_retenu*e.quantite,0))*1.1193;
 assert.ok(Math.abs(s.machines-equipment)<1e-8,'Prix unitaires multipliés une seule fois par quantité');
 for(const y of r.annuel){assert.equal(y.production,s.production[y.annee-1]);assert.equal(y.ventes,s.ventes[y.annee-1]);assert.ok(Math.abs(y.chiffre_affaires-y.ventes*s.prix[y.annee-1])<1e-7);}
 assert.ok(r.mois.every(m=>Number.isInteger(m.production)&&Number.isInteger(m.ventes)&&Number.isInteger(m.stock_quantite)),'Pièces indivisibles, report de stock réel');
 assert.equal(r.bfr.length,36);assert.equal(r.tresorerie.length,12);assert.ok(r.bilans.every(x=>Math.abs(x.ecart)<.02));assert.ok(Math.abs(r.financement.apport_total+r.financement.dette-r.financement.besoin_total)<1e-7);
 assert.equal(r.investissements.postes_a_chiffrer.length,0);assert.equal(v.visuels.indices.length,8);assert.equal(new Set(v.visuels.indices).size,8);
 assert.equal(Object.values(v.emballage.composants_usd_par_unite).reduce((n,x)=>n+x,0).toFixed(2),v.emballage.cout_usd_par_unite.toFixed(2));
 assert.equal(v.emballage.cout_usd_par_kg,undefined,'Aucune fausse conversion en kilogrammes');
 const normalized=c.P2I_BP_V108_CONTEXTE.normalizeInput(s,id,null);assert.equal(normalized.unite,'pièces/h');assert.equal(api.calculer(normalized).annuel[0].resultat_net,r.annuel[0].resultat_net);
 assert.throws(()=>api.calculer({...s,ventes:[s.ventes[0]+.5,...s.ventes.slice(1)]}),/entières/);
 assert.throws(()=>c.P2I_BP_V108_CONTEXTE.normalizeInput({...s,unite:'mystère/h'},id,null),/Unité/);
 const stress=api.calculer({...s,prix:s.prix.map(x=>x*.5)});assert.ok(stress.annuel[0].resultat_net<0,'Prix stressé jamais relevé automatiquement');assert.equal(stress.entrees.prix[0],s.prix[0]*.5);
}
assert.equal(lot.profils.linge.equipements_complementaires.some(e=>/surjet|bouton/.test(e.source_id)),false,'Drap à double ourlet : pas de surjeteuse ou boutonnière redondante');
assert.equal(d.unites.linge.variantes.reference.visuels.atlas,'linge');
console.log('Textile : 3 UP distinctes en pièces, prix unitaires et quantités sourcés, aucun poste redondant dans les draps, emballage/manutention, états équilibrés, sensibilité et passage normalisé contrôlés.');
