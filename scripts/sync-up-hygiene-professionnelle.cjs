'use strict';
// Synchronise les surfaces P2I historiques sans changer l’identifiant javel.
const fs=require('node:fs'),path=require('node:path');
const root=path.resolve(__dirname,'..');
const lot=JSON.parse(fs.readFileSync(path.join(root,'data/p2i-bp-lot-chimie-06.json'),'utf8'));
const {identite}=lot,p=lot.profils.javel,s=lot.sources[0];
const budget=p.prix_retenu+Object.values(p.complements_usd).reduce((a,b)=>a+b,0);
const machines=[
 ['Traitement de l’eau','Osmose inverse, UV, pompe et stockage eau','500 L/h ; cuve 1 000 L','Électricité + eau'],
 ['Cuve de mélange','Mélange et homogénéisation','1 000 L par lot','Électricité ; chauffage à confirmer selon recette'],
 ['Cuves et transfert','Deux cuves mobiles et pompe à vis','2 × 1 000 L','Électricité 4 kW pour la pompe'],
 ['Remplisseuse','Dosage semi-automatique','100–10 000 ml ; bidon cylindrique 5 L retenu','Électricité'],
 ['Boucheuse','Fermeture semi-automatique à quatre roues','Bouchon du bidon 5 L à vérifier','Électricité + air selon montage'],
 ['Étiqueteuse','Étiquetage de contenants ronds et codage','Bidon cylindrique 5 L à vérifier','Électricité'],
 ['Compresseur','Air comprimé de la ligne','1,5 kW annoncés','Électricité'],
 ['Poste contrôle','Pesée et contrôle du produit','Budget laboratoire et dosage distinct','Électricité']
].map(([name,role,capacity,utilities],i)=>({name,role,capacity,utilities,price:null,qualification:i===7?'enveloppe_P2I_non_prix_catalogue':'inclus_dans_prix_ligne_sans_ventilation',source_url:i===7?null:s.url}));
const base={id:'javel',nom:identite.nom,anciens_noms:identite.anciens_noms,filiereNom:'Chimie, Cosmétiques & Détergents',type:'production',description:identite.description,capex_min:budget,budget_reference_statut:'estimation_p2i_hors_reserve',exclure_reperes_historiques:true,chiffre_affaires_estime:null,marge_brute:null,estimated_revenue:null,gross_margin:null,net_profitability:null,roi_estime:'Calculé par le moteur commun ; hypothèses indicatives',machines,processus:s.fonctions,produits:['Concentré aqueux d’hygiène des surfaces en bidons de 5 L'],raw_materials:['Base active compatible avec la formulation retenue','Tensioactifs et auxiliaires biosourcés privilégiés, origine et danger à documenter','Eau traitée','Bidons PEHD, bouchons, étiquettes et regroupement'],target_markets:['Hôtels et restauration','Collectivités','Entreprises de propreté','Ateliers et sites industriels hors médical'],avantages:['Conditionnement professionnel de 5 L','Formulation concentrée et accompagnement à l’usage','Approvisionnement de proximité à organiser'],challenges:['Qualification des formulations et efficacité','Coût livré des intrants','Prospection et délais de règlement B2B','Traçabilité et compatibilité des emballages'],sanitaires:['Documenter l’efficacité avant toute allégation','Tracer les lots et contrôler les matières','Former le personnel et utiliser les protections adaptées','Contrôler stabilité, pH et conditionnement','Vérifier les exigences de mise sur le marché'],energie:['35–45 kW installés annoncés pour la ligne','Distinguer puissance installée et consommation réelle','Adapter le cycle thermique à la formulation','Suivre eau, air comprimé et consommations'],amenagement:['Séparer matières, formulation et produits finis','Prévoir un poste de contrôle et une zone de stockage','Organiser nettoyage, ventilation et rétention','Surface machine annoncée 15 × 6 m, hors autres locaux'],marketing:['Prospecter hôtels, restauration et collectivités','Présenter le coût par usage selon dilution validée','Tester les performances avec les clients professionnels','Convenir de contrats et conditions de règlement'],competitive_advantages:['Réactivité locale à construire','Format adapté aux professionnels','Traçabilité documentée, sans certification présumée'],reglementation:['Vérifier les exigences applicables à la formulation et à ses usages','Établir fiche technique, fiche de sécurité et étiquetage','Étayer les allégations par des essais appropriés'],securite:['Formation au risque chimique','Protection des yeux et des mains','Stockage séparé des produits incompatibles','Ventilation et rétention adaptées'],environnement:['Suivre consommations et effluents','Organiser la collecte des contenants','Ne pas présumer d’un bénéfice écologique'],etiquetage:['Identification et destination du produit','Lot et durée de conservation justifiée','Mode d’emploi validé et précautions','Coordonnées du fabricant'],monthly_capacity:'Selon programme de production ; référence 1 000 L par lot',suggestions:[p.suggestion]};
function replaceObject(file,value){
 const full=path.join(root,file);let text=fs.readFileSync(full,'utf8');
 const match=/\bjavel\s*:\s*\{/.exec(text);if(!match)throw Error('Entrée javel absente : '+file);
 const start=text.indexOf('{',match.index);let depth=0,quote=null,escape=false,end=-1;
 for(let i=start;i<text.length;i++){const c=text[i];if(quote){if(escape){escape=false;continue;}if(c==='\\'){escape=true;continue;}if(c===quote)quote=null;continue;}if(c==='"'||c==="'"||c==='`'){quote=c;continue;}if(c==='{')depth++;if(c==='}'&&--depth===0){end=i+1;break;}}
 if(end<0)throw Error('Objet non fermé : '+file);
 text=text.slice(0,start)+JSON.stringify(value,null,2)+text.slice(end);fs.writeFileSync(full,text);
}
for(const f of ['up-data.js','js/up-data.js','tutoriel-decouverte.html'])replaceObject(f,base);
for(const f of ['machines-data.js','js/machines-data.js'])replaceObject(f,{up_nom:identite.nom,machines});
for(const f of ['fiche-production.html','fiche-production1.html'])replaceObject(f,{...base,superficie:'Surface ligne 90 m², autres locaux à dimensionner',personnel:'5–7 personnes annoncées pour la ligne ; organisation à préciser',marche:base.target_markets.join(', '),production_annuelle:'120 à 180 tonnes dans la simulation indicative'});
replaceObject('service-detail.html',{nom:identite.nom,filiereNom:base.filiereNom,capex_min:budget});
const fil=path.join(root,'filieres.html');let html=fs.readFileSync(fil,'utf8');
if(!/\{\s*(?:"id"|id)\s*:\s*"javel"\s*,[^{}]*\}/.test(html))throw Error("Identité javel absente de filieres.html");
html=html.replace(/\{\s*(?:"id"|id)\s*:\s*"javel"\s*,[^{}]*\}/,JSON.stringify({id:"javel",name:identite.nom,minCapex:budget/1000,description:identite.description}));fs.writeFileSync(fil,html);
console.log('Identité javel conservée ; hygiène professionnelle synchronisée sur les écrans P2I.');
