'use strict';
const fs=require('fs'),vm=require('vm'),assert=require('assert/strict'),path=require('path');const root=path.resolve(__dirname,'..'),c=vm.createContext({});c.window=c;
for(const f of ['js/p2i-financial-engine.js','js/p2i-bp-decouverte-donnees.js','js/p2i-bp-decouverte-donnees-engine.js'])vm.runInContext(fs.readFileSync(path.join(root,f),'utf8'),c);
const data=c.P2I_BP_DONNEES,engine=c.P2I_BP_DONNEES_ENGINE,json=JSON.parse(fs.readFileSync(path.join(root,'data/p2i-bp-decouverte-donnees.json'),'utf8'));
assert.equal(JSON.stringify(data),JSON.stringify(json));assert.equal(data.nombre_up,96);assert.equal(data.nombre_configurations,105);assert.equal(data.filieres.length,12);assert.equal(new Set(data.filieres.flatMap(f=>f.up_ids)).size,96);
for(const f of data.filieres)assert.equal(f.up_ids.length,8);
let budgets=0,ranges=0;
for(const [id,u]of Object.entries(data.unites)){
 assert.equal(u.up_id,id);assert.equal(u.sources.length,3);assert.equal(u.economie.capex_consolide_usd,null);assert.ok(u.machines.length>0);
 for(const field of ['projet','procede','marche','commercial','risques','utilites','implantation','bfr','tresorerie'])assert.ok(u.redaction[field].length>20,id+' / '+field);
 for(const m of u.machines){assert.equal(m.prix_fournisseur_verifie_usd,null);assert.equal(m.fabricant,null);}
 const r=engine.calculer(u);assert.equal(r.resultat_net,null);assert.equal(r.financier.resultat_net_usd,null);assert.equal(r.bfr,null);assert.equal(r.tresorerie,null);assert.equal(r.financier.complet,false);
 if(r.financement_historique_indicatif){budgets++;const f=r.financement_historique_indicatif;assert.ok(Math.abs(f.apport+f.dette-r.budget_minimum_historique_usd)<1e-8);assert.ok(Math.abs(f.apport/r.budget_minimum_historique_usd-.3)<1e-10);}
 if(u.economie.fourchette_ca_historique.texte)ranges++;
 if(u.configurations.length>1)for(const v of Object.values(u.variantes)){assert.equal(v.economique,null);assert.equal(v.economique_herite_up,false);}
}
assert.equal(budgets,91);assert.equal(ranges,90);assert.notEqual(data.unites.peintures.filiere_id,data.unites.peintures_btp.filiere_id);assert.equal(data.unites.peintures.economie.fourchette_ca_historique.texte,null);
assert.equal(engine.reference('biscuiterie','crackers').personnel,20700);assert.equal(data.nombre_simulations_completes,27);assert.equal(engine.reference('biscuiterie','biscuits_durs').production.length,3);assert.equal(engine.reference('biscuiterie','biscuits_mous').production.length,3);assert.equal(engine.reference('nettoyage','decontamination_chimique').besoins.length,5);
assert.equal(data.alias_identifiants['profilés'],'profiles');assert.throws(()=>engine.electricite({}),/requises/);assert.throws(()=>engine.electricite({kw_souscrits:0,kwh_pleines_an:0,kwh_pointe_an:0,kwh_creuses_an:0}),/positive/);assert.throws(()=>engine.electricite({kw_souscrits:1,kwh_pleines_an:5001,kwh_pointe_an:0,kwh_creuses_an:0}),/plage/);
const bill=engine.electricite({kw_souscrits:100,kwh_pleines_an:200000,kwh_pointe_an:10000,kwh_creuses_an:50000});assert.equal(bill.energie_ht_xof,18886500);assert.equal(bill.prime_ht_xof,3364367);
console.log('Référentiel économique/rédactionnel : 96 UP, 105 configurations recensées, 91 budgets historiques, 90 fourchettes CA, aucun bénéfice inventé, barème CIE calculable avec profil explicite.');
