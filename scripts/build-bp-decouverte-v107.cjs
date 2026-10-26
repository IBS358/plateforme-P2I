'use strict';
const fs=require('node:fs'),path=require('node:path');const root=path.resolve(__dirname,'..');
let html=fs.readFileSync(path.join(root,'bp-decouverte-v107-source.html'),'utf8');
const atlas='data:image/jpeg;base64,'+fs.readFileSync(path.join(root,'assets/bp-v107/illustrations-biscuiterie-ia.jpg')).toString('base64');
html=html.replace(/<link rel="stylesheet" href="([^"]+)">/g,(_,file)=>'<style>\n'+fs.readFileSync(path.join(root,file),'utf8').replace("url('../assets/bp-v107/illustrations-biscuiterie-ia.jpg')",'url("'+atlas+'")')+'\n</style>');
html=html.replace(/<script src="([^"]+)"><\/script>/g,(_,file)=>'<script>\n'+fs.readFileSync(path.join(root,file),'utf8').replace(/<\/script/gi,'<\\/script')+'\n</script>');
fs.writeFileSync(path.join(root,'business-plan-decouverte-v107.html'),html);
console.log('V107 autonome générée : moteurs, référentiels, styles et illustrations incorporés.');
