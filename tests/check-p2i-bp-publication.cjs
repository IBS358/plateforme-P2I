/** Dossiers de test uniquement : aucune preuve fictive publiée dans l'application. */
"use strict";
const fs=require('node:fs'),vm=require('node:vm'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.resolve(__dirname,'..'),ctx=vm.createContext({});
for(const f of ['up-data.js','js/p2i-bp-decouverte-financial-validation.js','js/p2i-bp-decouverte-publication.js'])vm.runInContext(fs.readFileSync(path.join(root,f),'utf8'),ctx);
const api=ctx.P2I_BP_PUBLICATION,registry=vm.runInContext('P2I_UP_DATA',ctx),report=api.audit(registry);
assert.equal(report.up_presentes,96);assert.equal(report.configurations,105);assert.equal(report.valides,0);assert.equal(report.ecart_up,0);
assert.equal(api.inspect('absent',null,registry).statut,'a_completer');
assert.ok(api.inspect('biscuiterie','inconnue',registry).blocages.some(x=>x.code==='variante'));
const source={url:'https://example.com/test-only',date_verification:'2026-10-26',extrait:'Preuve de test synthétique',verifie:true};
const investissement=Object.fromEntries(ctx.P2I_BP_CONTROLES_FINANCIERS.requiredInvestment.map(k=>[k,1000]));investissement.total=10000;
const e={up_id:'conserverie_legumes',configuration_id:null,reference:{fabricant:'TEST',modele:'TEST',origine:'TEST',capacite:1,unite:'kg/h',prix:1000,devise:'USD',incoterm:'FOB',source},capex:{postes:Object.keys(investissement).filter(k=>k!=='total').map(poste=>({poste,montant:investissement[poste],source}))},hypotheses:[{description:'test',source}],
previsions:{up_id:'conserverie_legumes',configuration_id:null,investissement,
compte_resultat:Array.from({length:3},()=>({chiffre_affaires:100,cout_produits_vendus:20,charges_exploitation:20,amortissements:20,charges_financieres:10,impots:10,resultat_net:20})),
bfr_mensuel:Array.from({length:36},()=>({stocks:1,creances_clients:1,dettes_exploitation:1,bfr:1})),
tresorerie_mensuelle:Array.from({length:12},()=>({encaissements:1,decaissements:1,solde_initial:1,solde_final:1})),
bilans_annuels:Array.from({length:3},()=>({actif_total:1,passif_total:1}))}};
for(const k of ['fonctions','utilites','interfaces','securite'])e[k]=[{description:'test',statut:'verifie',source}];
assert.equal(api.inspect(e.up_id,null,registry,e).statut,'valide_documente');
function change(fn,code){const d=structuredClone(e);fn(d);assert.ok(api.inspect(d.up_id,null,registry,d).blocages.some(x=>x.code===code),code);}
change(d=>d.reference.source.verifie=false,'prix');
change(d=>d.reference.incoterm=null,'prix');
change(d=>d.interfaces=[],'interfaces');
change(d=>d.interfaces=[null],'interfaces');
change(d=>d.capex.postes=[null],'capex');
change(d=>d.reference.prix=2000,'prix_budget');
change(d=>d.capex.postes[0].montant=2000,'rapprochement');
change(d=>d.previsions.tresorerie_mensuelle.push({}),'previsions');
assert.ok(api.inspect('peintures_btp',null,registry,e).blocages.some(x=>x.code==='contexte'));
assert.equal(api.source({url:'javascript:alert(1)',date_verification:'2026-10-26',extrait:'test',verifie:true}),false);
const saved=JSON.parse(fs.readFileSync(path.join(root,'data/p2i-bp-decouverte-publication.json'),'utf8'));
assert.deepEqual(JSON.parse(JSON.stringify(report)),saved,'Audit généré périmé');
console.log('Publication : 105 configurations, preuve fournisseur, contexte, compatibilité, CAPEX et horizons contrôlés.');
