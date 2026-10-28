'use strict';
const fs=require('node:fs'),vm=require('node:vm'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.resolve(__dirname,'..'),read=f=>fs.readFileSync(path.join(root,f),'utf8');
const json=f=>JSON.parse(read(f));
const lot=json('data/p2i-bp-lot-chimie-06.json'),p=lot.profils.javel,s=lot.sources[0],name=lot.identite.nom;
function evaluate(file,symbol){const c=vm.createContext({});vm.runInContext(read(file),c);return vm.runInContext(symbol,c);}
const u=evaluate('up-data.js','P2I_UP_DATA').javel;
assert.equal(u.nom,name);assert.equal(u.id,'javel');assert.equal(u.capex_min,p.prix_retenu+Object.values(p.complements_usd).reduce((a,b)=>a+b,0));
assert.equal(JSON.stringify(u),JSON.stringify(evaluate('js/up-data.js','P2I_UP_DATA').javel));
assert.equal(u.exclure_reperes_historiques,true);assert.equal(u.net_profitability,null);assert.equal(u.chiffre_affaires_estime,null);
for(const f of ['machines-data.js','js/machines-data.js']){const m=evaluate(f,'MACHINES_DATA').javel;assert.equal(m.up_nom,name);assert.equal(m.machines.length,s.fonctions.length);assert.ok(m.machines.every(x=>x.price===null),'Ne pas répartir fictivement le prix de ligne entre machines');}
for(const f of ['filieres.html','fiche-production.html','fiche-production1.html','service-detail.html','tutoriel-decouverte.html'])assert.ok(read(f).includes(name),f);
const html=read('filieres.html'),start=html.indexOf('const filieresData = '),end=html.indexOf('];',start)+2,c=vm.createContext({});vm.runInContext(html.slice(start,end)+';this.filieres=filieresData;',c);
assert.equal(c.filieres.length,12);assert.ok(c.filieres.every(f=>f.units.length===8));assert.equal(c.filieres.flatMap(f=>f.units).filter(x=>x.id==='javel').length,1);
const d=json('data/p2i-bp-decouverte-donnees.json'),v=d.unites.javel.variantes.reference;
assert.equal(d.unites.javel.up_nom,name);assert.equal(d.unites.javel.economie.budget_minimum_historique.valeur,null);assert.equal(d.unites.javel.economie.fourchette_ca_historique.texte,null);
assert.equal(v.reference.machines,18440);assert.equal(v.reference.investissement,u.capex_min);assert.equal(v.reference.capacite,375);assert.equal(v.reference.prix[0],2.8);
assert.equal(v.prix_equipement.composition_catalogue.find(x=>x.nom.includes('Cuve mobile')).quantite,2);
assert.equal(v.emballage.cout_usd_par_kg*5,.8);assert.ok(v.emballage.format.includes('cylindrique'));assert.ok(v.hypotheses_explicites.suggestion.includes('ne sont pas inclus'));
assert.equal(v.hypotheses_explicites.qualite_produit.statut,'a_formuler_et_a_tester');assert.ok(v.hypotheses_explicites.qualite_produit.verification_separee.securite.includes('aucune garantie'));
assert.equal(new Set(v.visuels.indices).size,s.fonctions.length);assert.deepEqual(v.visuels.indices,[1,2,3,4,5,6,7,8]);
const ctx=vm.createContext({});ctx.window=ctx;vm.runInContext(read('js/p2i-bp-decouverte-v108-contexte.js'),ctx);
assert.equal(ctx.P2I_BP_V108_CONTEXTE.resolveUnit({unit:'Eau de javel & désinfectants'},{javel:u}),'javel');
assert.equal(ctx.P2I_BP_V108_CONTEXTE.resolveUnit({unit_id:'javel'},{javel:u}),'javel');
const archive=json('data/archives/p2i-bp-javel-menagere-2026-10-27.json');assert.equal(archive.profils.javel.nom,'Eau de Javel ménagère');assert.equal(archive.profils.javel.prix_retenu,45000);
console.log('Hygiène professionnelle : identité globale, ancien nom, 96 UP, prix de ligne sans ventilation fictive, conditionnement 5 L et archive Javel contrôlés.');
