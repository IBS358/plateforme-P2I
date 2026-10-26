"use strict";
const fs=require("node:fs"),path=require("node:path"),vm=require("node:vm");
const root=path.resolve(__dirname,".."),ctx=vm.createContext({});
for(const file of ["up-data.js","js/p2i-bp-decouverte-financial-validation.js","js/p2i-bp-decouverte-publication.js"])vm.runInContext(fs.readFileSync(path.join(root,file),"utf8"),ctx,{filename:file});
const audit=ctx.P2I_BP_PUBLICATION.audit(vm.runInContext("P2I_UP_DATA",ctx));
const output=JSON.stringify(audit,null,2)+"\n";
fs.writeFileSync(path.join(root,"data/p2i-bp-decouverte-publication.json"),output);
console.log(JSON.stringify({up:audit.up_presentes,objectif:audit.objectif_up,configurations:audit.configurations,valides:audit.valides}));
