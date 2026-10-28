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
 const entries=Object.entries(capacites).sort((a,b)=>a[1]-b[1]);if(!entries.length)throw Error('Aucun poste textile dimensionné');
 const capacite=Math.floor(entries[0][1]);if(capacite<1)throw Error('Cadence textile insuffisante');return {capacite_unites_h:capacite,goulot:entries[0][0],capacites_unites_h:capacites,plafond_annuel:capacite*d.heures_jour*d.jours_an,qualification:d.qualification};
}
module.exports={dimensionner};
