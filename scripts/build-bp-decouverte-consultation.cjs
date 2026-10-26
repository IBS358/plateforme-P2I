/** Paquet de consultation autonome : données, rendu V106 et CSS du dépôt. */
"use strict";
const fs=require('node:fs'),path=require('node:path');
const root=path.resolve(__dirname,'..');
let html=fs.readFileSync(path.join(root,'bp-decouverte-consultation.html'),'utf8');
html=html.replace(/<link rel="stylesheet" href="([^"]+)">/g,(_,file)=>'<style>\n'+fs.readFileSync(path.join(root,file),'utf8')+'\n</style>');
html=html.replace(/<script src="([^"]+)" defer><\/script>/g,(_,file)=>'<script>\n'+fs.readFileSync(path.join(root,file),'utf8').replace(/<\/script/gi,'<\\/script')+'\n</script>');
html=html.replaceAll('bp-decouverte-consultation.html','bp-decouverte-consultation-autonome.html');
fs.writeFileSync(path.join(root,'bp-decouverte-consultation-autonome.html'),html);
console.log('Consultation autonome générée, sans ressource distante obligatoire.');
