"use strict";
const fs=require("node:fs"),path=require("node:path"),{spawnSync}=require("node:child_process");
const root=path.resolve(__dirname,"..");let count=0;
for(const file of fs.readdirSync(path.join(root,"tests")).filter(x=>/^check-.*\.cjs$/.test(x)).sort()){
 const result=spawnSync(process.execPath,[path.join(root,"tests",file)],{cwd:root,stdio:"inherit"});
 if(result.error)throw result.error;if(result.status!==0)process.exit(result.status||1);count++;
}
console.log(count+" suites Node réussies.");
