/* Restauration et enregistrement propriétaire : aucune écriture automatique.
 * Les états calculés ne sont jamais réimportés comme données vérifiées.
 * Le SDK Supabase gère la session déjà utilisée sur la même origine P2I. */
(function(root){'use strict';
const arrayKeys=['production','ventes','prix','cout_production_kg'];
const numericKeys=['capacite','investissement','matieres_kg','personnel','charges_fixes','part_apport','part_dette','taux_interet','duree_dette_mois','duree_amortissement_ans','taux_tva','taux_is','coussin_tresorerie','croissance_personnel','croissance_charges'];
const strKeys=['unite','nom','sous_titre','description','source','conventions','statut_exploitation','up_id','configuration_id'];
const validId=id=>typeof id==='string'&&(/^[1-9]\d{0,18}$/.test(id)||/^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(id));
const canonical=x=>Array.isArray(x)?x.map(canonical):x&&typeof x==='object'?Object.fromEntries(Object.keys(x).sort().map(k=>[k,canonical(x[k])])):x;
const sameData=(a,b)=>JSON.stringify(canonical(a))===JSON.stringify(canonical(b));
const plain=x=>x!==null&&typeof x==='object'&&!Array.isArray(x);
function normalizeInput(value,upId,config){
 if(typeof upId!=='string'||!upId.trim()||upId.length>200||config!==null&&(typeof config!=='string'||!/^[a-z0-9_-]{1,100}$/i.test(config)))throw Error('Identité UP ou variante invalide.');
 if(!plain(value)||value.up_id!==upId||value.configuration_id!==(config||null))throw Error('Les entrées financières ne correspondent pas à cette UP et cette variante.');
 const allowed=new Set([...arrayKeys,...numericKeys,...strKeys,'machines','photo','technique','qualification','complet','manquants','devise']);
 for(const key of Object.keys(value))if(!allowed.has(key))throw Error('Paramètre non pris en charge par ce contrat : '+key);
 if(value.devise&&value.devise!=='USD')throw Error('Les entrées du moteur doivent être en USD.');
 const out={};
 for(const key of arrayKeys){const a=value[key];if(!Array.isArray(a)||a.length!==3||a.some(x=>typeof x!=='number'||!Number.isFinite(x)||x<0))throw Error('Entrées incomplètes : '+key);out[key]=a.slice();}
 for(const key of numericKeys){const v=value[key];if(typeof v!=='number'||!Number.isFinite(v)||v<0)throw Error('Entrée invalide ou absente : '+key);out[key]=v;}
 for(const key of strKeys){if(key==='configuration_id'){out[key]=config||null;continue;}const v=value[key];if(typeof v!=='string'||v.length>5000)throw Error('Texte absent ou trop long : '+key);out[key]=v;}
 if(out.unite!=='kg/h')throw Error('Ce contrat de simulation industrielle accepte une capacité en kg/h.');
 out.machines=value.machines===null?null:typeof value.machines==='number'&&Number.isFinite(value.machines)&&value.machines>=0?value.machines:null;
 if(out.machines!==null&&out.machines>out.investissement)throw Error('Le budget machines dépasse le budget global.');
 out.qualification='hypotheses_utilisateur_non_verifiees';
 if(out.capacite<=0||out.production.some(x=>x>out.capacite*8760))throw Error('Production incompatible avec la capacité horaire déclarée.');
 return out;
}
function decodeImport(data){
 if(!plain(data)||!['p2i.bp-decouverte.v107','p2i.bp-decouverte.v108','p2i.bp-entrees.v108'].includes(data.schema))throw Error('Format de dossier P2I non reconnu.');
 const entry=data.entrees||data.simulation?.entrees;
 return normalizeInput(entry,data.up_id,data.configuration_id||null);
}
function resolveUnit(sim,registry){
 const id=String(sim.unit_id||sim.up_id||'').trim();
 if(id&&Object.prototype.hasOwnProperty.call(registry,id))return id;
 const normalize=x=>String(x||'').normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/[^a-z0-9]/g,'');
 const name=normalize(sim.up_name||sim.unit_name||sim.unit);if(!name)throw Error('UP absente ou inconnue dans la simulation.');
 const matches=Object.entries(registry).filter(([,u])=>normalize(u.nom)===name);
 if(matches.length!==1)throw Error('Impossible d’identifier une UP unique pour cette simulation.');
 return matches[0][0];
}
function create({client,registry,configuration}={}){
 let owned=null;
 const normalizeOwned=(value,upId,config)=>{if(registry[upId]?.type==='service')throw Error('Le contrat de fabrication en kg/h ne convient pas à cette activité de services.');return normalizeInput(value,upId,config);};
 const getClient=()=>{
  if(client)return client;
  if(root.P2I_SUPABASE_CLIENT)return root.P2I_SUPABASE_CLIENT;
  if(!root.P2I_SUPABASE_SDK||!configuration)throw Error('Client Supabase indisponible.');
  client=root.P2I_SUPABASE_SDK.createClient(configuration.url,configuration.anon_key,{auth:{persistSession:true,autoRefreshToken:true,detectSessionInUrl:false}});return client;
 };
 const timed=p=>{const operation=Promise.resolve(p);return Promise.race([operation,new Promise((_,reject)=>{const timer=setTimeout(()=>reject(Error('Le serveur met trop de temps à répondre. Réessayez.')),15000);operation.finally(()=>clearTimeout(timer)).catch(()=>{});})]);};
 async function user(){const {data,error}=await timed(getClient().auth.getUser());if(error||!data?.user?.id)throw Error('Connexion P2I requise pour ouvrir cette simulation.');return data.user.id;}
 async function read(id,owner){const {data,error}=await timed(getClient().from('user_simulations').select('id,user_id,simulation_data').eq('id',id).eq('user_id',owner).maybeSingle());if(error||!data||data.user_id!==owner||String(data.id)!==String(id))throw Error('Simulation inaccessible pour ce compte.');if(!plain(data.simulation_data))throw Error('Contenu de simulation invalide.');return data;}
 async function restore(id){
  owned=null;if(!validId(id))throw Error('Identifiant de simulation invalide.');
  const owner=await user(),row=await read(id,owner),sim=row.simulation_data,upId=resolveUnit(sim,registry);
  const nested=plain(sim.bp_decouverte_v108)?sim.bp_decouverte_v108:null;
  if(sim.configuration_id&&nested?.configuration_id&&sim.configuration_id!==nested.configuration_id)throw Error('La variante du dossier enregistré ne correspond pas à sa simulation.');
  let config=sim.configuration_id||nested?.configuration_id||null;
  if(config!==null&&(typeof config!=='string'||!/^[a-z0-9_-]{1,100}$/i.test(config)))throw Error('Variante enregistrée invalide.');
  if(upId==='biscuiterie'&&config&&!Object.prototype.hasOwnProperty.call(root.P2I_BP_V108_REFERENCES.variants,config))throw Error('Variante Biscuiterie enregistrée inconnue.');
  let inputs=null,warning=null;
  if(nested?.entrees){try{inputs=normalizeOwned(nested.entrees,upId,config);}catch(e){warning=e.message;}}
  // Contrat historique explicite uniquement : aucun montant ambigu n'est deviné.
  if(!nested&&sim.bp_decouverte_entrees){try{inputs=normalizeOwned(sim.bp_decouverte_entrees,upId,config);}catch(e){warning=e.message;}}
  owned={id:String(row.id),owner,up_id:upId,configuration_id:config,has_financial_payload:Boolean(nested?.entrees||sim.bp_decouverte_entrees),simulation_data:JSON.parse(JSON.stringify(sim))};
  root.P2I_BP_PASSAGE_OWNER=owner;
  return {id:owned.id,up_id:upId,configuration_id:config,entrees:inputs,statut:inputs?'parametres_restaures':'contexte_restaure',avertissement:warning||(!inputs?'Cette simulation contient le contexte du projet, sans paramètres financiers complets. La référence de cette variante reste utilisée lorsqu’elle est disponible.':null)};
 }
 async function commit(transform){
  if(!owned)throw Error('Aucune simulation propriétaire chargée.');
  const active=owned,context={...active,simulation_data:JSON.parse(JSON.stringify(active.simulation_data))};
  const owner=await user();if(owner!==context.owner)throw Error('La session a changé. Rechargez la simulation avant d’enregistrer.');
  const fresh=await read(context.id,owner);
  if(!sameData(fresh.simulation_data,context.simulation_data))throw Error('La simulation a été modifiée ailleurs. Rechargez-la avant d’enregistrer.');
  const payload=transform(fresh.simulation_data,context);
  const {data,error}=await timed(getClient().from('user_simulations').update({simulation_data:payload}).eq('id',context.id).eq('user_id',owner).eq('simulation_data',JSON.stringify(fresh.simulation_data)).select('id').maybeSingle());
  if(error||!data)throw Error('Enregistrement non effectué : accès refusé ou modification concurrente.');
  if(owned===active){owned.simulation_data=payload;owned.has_financial_payload=Boolean(payload.bp_decouverte_v108?.entrees||payload.bp_decouverte_entrees);}
  return {id:context.id,configuration_id:context.configuration_id,statut:'enregistre'};
 }
 async function save(inputs){
  if(!owned)throw Error('Aucune simulation propriétaire chargée.');
  const normalized=normalizeOwned(inputs,owned.up_id,owned.configuration_id);
  if(!root.P2I_BP_SIMULATION_COMMUNE)throw Error('Moteur de contrôle indisponible.');
  root.P2I_BP_SIMULATION_COMMUNE.calculer(normalized);
  const result=await commit((original,context)=>({...original,configuration_id:context.configuration_id,bp_decouverte_v108:{schema:'p2i.bp-entrees.v108',up_id:context.up_id,configuration_id:context.configuration_id,entrees:normalized,statut:'hypotheses_utilisateur_non_verifiees',enregistre_le:new Date().toISOString()}}));
  return {...result,entrees:normalized};
 }
 function selectMetadataConfiguration(config){
  if(!owned||owned.has_financial_payload)return false;
  const choices=owned.up_id==='biscuiterie'?root.P2I_BP_V108_REFERENCES.variants:owned.up_id==='nettoyage'?root.P2I_BP_V108_REFERENCES.nettoyage:null;
  if(!choices||!Object.prototype.hasOwnProperty.call(choices,config))return false;
  owned.configuration_id=config;return true;
 }
 async function saveSelection(){
  if(!owned||owned.has_financial_payload||!owned.configuration_id)throw Error('Le choix de variante ne peut pas être enregistré seul dans ce dossier.');
  return commit((original,context)=>({...original,configuration_id:context.configuration_id}));
 }
 function detach(){owned=null;}
 function snapshot(){return owned?{id:owned.id,up_id:owned.up_id,configuration_id:owned.configuration_id,selection_seule:!owned.has_financial_payload}:null;}
 return Object.freeze({restore,save,saveSelection,selectMetadataConfiguration,detach,snapshot});
}
root.P2I_BP_V108_CONTEXTE=Object.freeze({create,normalizeInput,decodeImport,resolveUnit});
})(typeof window!=='undefined'?window:globalThis);
