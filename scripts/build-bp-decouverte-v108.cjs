'use strict';
const fs=require('node:fs'),path=require('node:path'),esbuild=require('esbuild');const root=path.resolve(__dirname,'..');
const vendor=path.join(root,'js/vendor/p2i-supabase-v108.min.js');fs.mkdirSync(path.dirname(vendor),{recursive:true});
esbuild.buildSync({stdin:{contents:"export {createClient} from '@supabase/supabase-js';",resolveDir:root,sourcefile:'p2i-supabase-entry.js'},bundle:true,platform:'browser',target:['es2020'],format:'iife',globalName:'P2I_SUPABASE_SDK',minify:true,legalComments:'inline',outfile:vendor,write:true});
const conf=fs.readFileSync(path.join(root,'js/p2i-bp-decouverte-v108-supabase-config.js'),'utf8');
const token=conf.match(/"anon_key":"([^"]+)"/)?.[1];if(!token||JSON.parse(Buffer.from(token.split('.')[1],'base64url').toString()).role!=='anon')throw Error('Seule la clé publique anon P2I est autorisée dans la page.');
let html=fs.readFileSync(path.join(root,'bp-decouverte-v108-source.html'),'utf8');
// Toutes les images locales référencées par les CSS sont incorporées automatiquement.
function inlineCss(file){
 const cssFile=path.resolve(root,file);
 const assetsRoot=path.join(root,'assets')+path.sep;
 const mime={'.jpg':'image/jpeg','.jpeg':'image/jpeg','.png':'image/png','.svg':'image/svg+xml','.webp':'image/webp','.gif':'image/gif'};
 return fs.readFileSync(cssFile,'utf8').replace(/url\((['"]?)(\.\.\/assets\/[^'"\)]+)\1\)/g,(_,quote,relative)=>{
  const asset=path.resolve(path.dirname(cssFile),relative),type=mime[path.extname(asset).toLowerCase()];
  if(!asset.startsWith(assetsRoot)||!type)throw Error('Image locale non prise en charge : '+relative);
  return 'url("data:'+type+';base64,'+fs.readFileSync(asset).toString('base64')+'")';
 });
}
html=html.replace(/<link rel="stylesheet" href="([^"]+)">/g,(_,file)=>'<style>\n'+inlineCss(file)+'\n</style>');
html=html.replace(/<script src="([^"]+)"><\/script>/g,(_,file)=>'<script>\n'+fs.readFileSync(path.join(root,file),'utf8').replace(/<\/script/gi,'<\\/script')+'\n</script>');
html=html.replace('</head>','<!-- SDK Supabase : '+fs.readFileSync(path.join(root,'js/vendor/NOTICE-supabase-v108.txt'),'utf8').replace(/-->/g,'-- >')+' -->\n</head>');
fs.writeFileSync(path.join(root,'business-plan-decouverte-v108.html'),html);fs.writeFileSync(path.join(root,'business-plan-decouverte.html'),html);console.log('V108 générée : moteurs communs, références indépendantes, SDK et restauration incorporés.');
