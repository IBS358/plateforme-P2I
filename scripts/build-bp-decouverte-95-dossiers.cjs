/** Régénère les 95 brouillons documentaires de BP Découverte à 17 rubriques. */
"use strict";
const fs=require("node:fs"),path=require("node:path"),vm=require("node:vm");
const root=path.resolve(__dirname,"..");
const context=vm.createContext({});
vm.runInContext(fs.readFileSync(path.join(root,"js/p2i-bp-decouverte-dossier-builder.js"),"utf8"),context);
const builder=context.P2I_BP_DOSSIER_BUILDER;
const dossiers=[];
for(let n=1;n<=12;n++){
 const id=String(n).padStart(2,"0");
 const pack=JSON.parse(fs.readFileSync(path.join(root,"data/p2i-bp-decouverte-lot-"+id+"-sources.json"),"utf8"));
 for(const up of pack.unites)dossiers.push(builder.build(up));
}
const output={version:"1.0.0",nature:"Brouillons documentaires P2I — données financières non validées",
 nombre_up:dossiers.length,rubriques_par_up:17,dossiers};
fs.writeFileSync(path.join(root,"data/p2i-bp-decouverte-96-dossiers-17-rubriques.json"),JSON.stringify(output,null,2)+"\n");
console.log(dossiers.length+" dossiers BP documentaires générés, "+dossiers.length*17+" rubriques.");
