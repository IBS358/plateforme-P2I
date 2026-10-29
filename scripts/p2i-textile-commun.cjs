'use strict';
function dimensionner(d){
 const pos=x=>typeof x==='number'&&Number.isFinite(x)&&x>=0;
 if(!d||!pos(d.efficacite_postes)||d.efficacite_postes===0||d.efficacite_postes>1||!pos(d.heures_jour)||d.heures_jour===0||!pos(d.jours_an)||d.jours_an===0)throw Error('Dimensionnement textile invalide');
 const capacites={};for(const [poste,temps]of Object.entries(d.temps_minutes_par_article||{})){
  if(!pos(temps))throw Error('Temps textile invalide');if(poste==='part_brodee'){if(temps>1)throw Error('Part brodée invalide');continue;}if(temps===0)continue;
  const n=d.moyens[poste];if(!Number.isInteger(n)||n<1)throw Error('Poste textile absent : '+poste);capacites[poste]=n*60*d.efficacite_postes/temps;
 }
 const part=d.temps_minutes_par_article.part_brodee||0;
 if(part){const b=d.broderie,m=d.moyens;if(!b||!pos(b.points_par_motif)||!pos(b.points_minute_effectifs)||!pos(b.preparation_minutes_par_tete)||!b.points_par_motif||!b.points_minute_effectifs||!Number.isInteger(m.brodeuses)||m.brodeuses<1||!Number.isInteger(m.tetes_par_brodeuse)||m.tetes_par_brodeuse<1)throw Error('Broderie invalide');if(!Number.isInteger(m.tetes_productives_par_brodeuse??m.tetes_par_brodeuse)||(m.tetes_productives_par_brodeuse??m.tetes_par_brodeuse)<1||(m.tetes_productives_par_brodeuse??m.tetes_par_brodeuse)>m.tetes_par_brodeuse)throw Error('Têtes productives invalides');capacites.broderie=m.brodeuses*(m.tetes_productives_par_brodeuse??m.tetes_par_brodeuse)*60/(b.points_par_motif/b.points_minute_effectifs+b.preparation_minutes_par_tete)/part;}
 if(d.effectif_productif_total!==undefined){if(!Number.isInteger(d.effectif_productif_total)||d.effectif_productif_total<1)throw Error('Effectif productif invalide');const minutes=Object.entries(d.temps_minutes_par_article).filter(([k])=>k!=='part_brodee').reduce((n,[,t])=>n+t,0);if(!minutes)throw Error('Temps de gamme absent');capacites.personnel_polyvalent=d.effectif_productif_total*60*d.efficacite_postes/minutes;}
 const entries=Object.entries(capacites).sort((a,b)=>a[1]-b[1]);if(!entries.length)throw Error('Aucun poste textile dimensionné');
 const equipes=d.equipes??1;if(!Number.isInteger(equipes)||equipes<1||equipes>3)throw Error('Nombre d’équipes invalide');const capacite=Math.floor(entries[0][1]);if(capacite<1)throw Error('Cadence textile insuffisante');return {capacite_unites_h:capacite,goulot:entries[0][0],capacites_unites_h:capacites,plafond_annuel:capacite*d.heures_jour*d.jours_an*equipes,...(equipes>1?{equipes}:{}),qualification:d.qualification};
}
// Débits en kg de produit fini : distinguer entrée, rendement et goulot.
function dimensionnerFibres(d){
 const positive=x=>Number.isFinite(x)&&x>0;
 if(!d||!positive(d.heures_jour)||!positive(d.jours_an)||!positive(d.rendement)||d.rendement>1)throw Error('Dimensionnement fibres invalide');
 const capacities={};
 if(d.type==='tricotage'){
  for(const k of ['machines','aiguilles','alimentations','rpm','longueur_boucle_mm','titre_ne','efficacite','inspection_kg_h'])if(!positive(d[k]))throw Error('Tricotage incomplet : '+k);
  if(!Number.isInteger(d.machines)||!Number.isInteger(d.aiguilles)||!Number.isInteger(d.alimentations)||d.efficacite>1)throw Error('Tricotage invalide');
  // 1 Ne = 1 693,36 m/kg ; chaque aiguille forme une boucle par alimentation/tour.
  capacities.tricotage=d.machines*d.aiguilles*d.alimentations*d.rpm*60*(d.longueur_boucle_mm/1000)/(d.titre_ne*1693.36)*d.efficacite*d.rendement;
  capacities.controle=d.inspection_kg_h;
 }else if(d.type==='recyclage'){
  for(const k of ['ligne_entree_kg_h','tri_entree_kg_h','presse_sortie_kg_h'])if(!positive(d[k]))throw Error('Recyclage incomplet : '+k);
  capacities.tri=d.tri_entree_kg_h*d.rendement;capacities.ligne=d.ligne_entree_kg_h*d.rendement;capacities.presse=d.presse_sortie_kg_h;
 }else if(d.type==='aiguilletage'){
  for(const k of ['largeur_m','vitesse_m_min','grammage_g_m2','goulot_kg_h'])if(!positive(d[k]))throw Error('Aiguilletage incomplet : '+k);
  capacities.formation=d.largeur_m*d.vitesse_m_min*d.grammage_g_m2*60/1000;capacities.ligne=d.goulot_kg_h;
 }else throw Error('Procédé fibres inconnu');
 const [goulot,val]=Object.entries(capacities).sort((a,b)=>a[1]-b[1])[0],capacite=Math.floor(val);
 if(capacite<1)throw Error('Cadence fibres insuffisante');
 return {capacite_produit_fini_kg_h:capacite,capacites_produit_fini_kg_h:capacities,goulot,plafond_annuel_kg:capacite*d.heures_jour*d.jours_an,qualification:d.qualification};
}
module.exports={dimensionner,dimensionnerFibres};

// Une même nomenclature calcule matières, assortiment, temps et prix de la maille.
function chiffrerConfectionMaille(etude,usdXof){
 if(!etude||!(usdXof>0)||!(etude.rendement_coupe>0&&etude.rendement_coupe<=1)||!Array.isArray(etude.articles))throw Error('Étude maille invalide');
 const sum=x=>Object.values(x).reduce((a,b)=>a+b,0),gamme=[],temps={};let part=0;
 const process=sum(etude.packaging_usd_piece)+sum(etude.autres_variables_usd_piece);
 for(const a of etude.articles){
  if(!(a.part>0&&a.part<=1)||!(a.prix_depart_atelier_xof_ht>0))throw Error('Article maille invalide');part+=a.part;
  const nomenclature=Object.entries(a.matieres_net_kg).map(([code,masse])=>{const f=etude.fabrics[code];if(!f||!(masse>=0))throw Error('Matière maille invalide');const delivered=f.prix_catalogue_usd_kg+sum(f.provisions_usd_kg);return {code,masse_nette_kg:masse,achat_kg:masse/etude.rendement_coupe,prix_livre_estime_usd_kg:delivered,cout_usd:masse/etude.rendement_coupe*delivered};});
  for(const [k,t]of Object.entries(a.temps_minutes)){if(!(t>=0))throw Error('Temps maille invalide');temps[k]=(temps[k]||0)+a.part*t;}
  gamme.push({nom:a.nom,id:a.id,part:a.part,prix_usd_kg:a.prix_depart_atelier_xof_ht/usdXof,matieres_usd_kg:nomenclature.reduce((n,x)=>n+x.cout_usd,0)+sum(a.fournitures_usd),process_usd_kg:process,nomenclature,fournitures:a.fournitures_usd,prix_depart_atelier_xof_ht:a.prix_depart_atelier_xof_ht});
 }
 if(Math.abs(part-1)>1e-9)throw Error('Assortiment maille différent de 100 %');const avg=k=>gamme.reduce((n,x)=>n+x.part*x[k],0);
 return {gamme,temps_minutes_par_article:temps,prix_usd_unite:avg('prix_usd_kg'),matieres_usd_unite:avg('matieres_usd_kg'),process_usd_unite:process};
}
module.exports.chiffrerConfectionMaille=chiffrerConfectionMaille;
