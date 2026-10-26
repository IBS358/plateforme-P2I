/* Passage Découverte -> BP Pro initial. Transport de session, jamais de résultats
 * financiers importés : les entrées sont normalisées puis recalculées. */
(function(root){'use strict';
const params=new URLSearchParams(location.search),token=params.get('passage_id');
if(!token)return;
const own=(o,k)=>o&&Object.prototype.hasOwnProperty.call(o,k);
const esc=x=>String(x??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const money=x=>typeof x==='number'&&Number.isFinite(x)?x.toLocaleString('fr-FR',{maximumFractionDigits:2})+' USD':'À documenter';
let payload,inputs,result,partial,up,editor,ready=false;
const panel=document.createElement('aside');panel.id='p2i-passage-pro';panel.style.cssText='margin:20px auto;padding:22px;max-width:1180px;background:#112e50;color:#fff;border:1px solid #4c95cb;border-radius:12px;font:15px/1.7 Arial,sans-serif';
const style=document.createElement('style');style.textContent='#p6 [hidden]{display:none!important} body.p2i-passage-error #p6{display:none!important} #p2i-pro-moteur-commun input{max-width:180px;color:#fff;background:#10243a;padding:8px} #p2i-pro-moteur-commun button{padding:10px;margin:8px;color:#fff;background:#225882;border:1px solid #56b3df;border-radius:8px}';document.head.append(style);
panel.innerHTML='<h2>Reprise du BP Découverte dans le BP Pro initial</h2><p role="status">Vérification du dossier transmis…</p>';document.body.prepend(panel);
function error(e){const block=document.getElementById('p6');if(block)block.hidden=true;root.calculateAll=()=>{};
 panel.innerHTML='<h2>Reprise du dossier interrompue</h2><p role="alert">'+esc(e.message)+'</p><a href="business-plan-decouverte.html" style="color:#b9e5ff">Revenir au BP Découverte</a>';document.body.classList.add('p2i-passage-error');}
function set(id,value){const el=document.getElementById(id);if(el&&value!==null&&value!==undefined)el.value=String(value);}
function table(title,heads,rows){return '<h3>'+esc(title)+'</h3><div style="overflow:auto"><table style="width:100%;border-collapse:collapse"><thead><tr>'+heads.map(x=>'<th style="text-align:left;padding:8px;border-bottom:1px solid #578">'+esc(x)+'</th>').join('')+'</tr></thead><tbody>'+rows.map(row=>'<tr>'+row.map(x=>'<td style="padding:8px;border-bottom:1px solid #345">'+esc(x)+'</td>').join('')+'</tr>').join('')+'</tbody></table></div>';}
function financialCore(){
 if(!result)return {revenue:null,ebitda:null,netProfit:null,dscr:null,minCashflow:null,totalCapex:payload.reference?.investissement??null,totalInvestment:null,equity:null,debt:null,grants:null,totalFinancing:null,financingGap:null,equityRatio:null,debtRatio:null,ebitdaMargin:null,netMargin:null,roi:null,bfrExploitation:null,incomplet:true};
 const a=result.annuel[0],s=result.entrees,total=s.investissement+result.reserve_initiale,service=result.mois.slice(0,12).reduce((n,m)=>n+m.interets+m.principal,0);
 return {revenue:a.chiffre_affaires,ebitda:a.ebitda,netProfit:a.resultat_net,dscr:service?(a.resultat_net+a.amortissements)/service:null,minCashflow:Math.min(...result.tresorerie.map(x=>x.solde_final)),totalCapex:s.investissement,bfrExploitation:result.bfr[11].bfr,totalInvestment:total,equity:result.financement.apport+result.reserve_initiale,debt:result.financement.dette,grants:0,totalFinancing:total,financingGap:0,equityRatio:(result.financement.apport+result.reserve_initiale)/total,debtRatio:result.financement.dette/total,ebitdaMargin:a.ebitda/a.chiffre_affaires,netMargin:a.resultat_net/a.chiffre_affaires,roi:a.resultat_net/total,statut:'simulation_indicative_non_documentee'};
}
function apply(){
 // Les anciens tableaux agrégés ne doivent pas concurrencer le moteur commun.
 const block=document.getElementById('p6');if(block){for(const child of Array.from(block.children))if(child!==editor)child.hidden=true;if(!editor){editor=document.createElement('div');editor.id='p2i-pro-moteur-commun';block.append(editor);}}
 const ref=payload.reference;
 set('f_capacity',inputs?.capacite??ref?.capacite);const unit=document.getElementById('f_capacity_unit');if(unit){const value=inputs?.unite||ref?.unite;if(value&&!Array.from(unit.options).some(x=>x.value===value))unit.add(new Option(value,value));set('f_capacity_unit',value);}
 if(!document.getElementById('f_process')?.value)set('f_process',ref?.technique?.etapes?.join(' → ')||up.processus?.join(' → '));
 if(!document.getElementById('f_offer')?.value)set('f_offer',ref?.nom||up.produits?.join('\n'));
 set('capex_machines',inputs?.machines??ref?.machines);set('equity',result?.financement.apport);set('debt',result?.financement.dette);set('revenue',result?.annuel[0].chiffre_affaires);set('interest_rate',inputs?inputs.taux_interet*100:null);
 root.P2I_BP_PRO_PASSAGE={schema:'p2i.passage.v1',up_id:payload.up_id,configuration_id:payload.configuration_id,simulation_id:payload.simulation_id,entrees:inputs,resultat:result,partiel:partial,reference:ref,up,statut:'hypotheses_non_verifiees',passage:{...payload,entrees:inputs,partiel:null,up:undefined}};
 if(root.p2iBpExportData)root.p2iBpExportData.decouverte=root.P2I_BP_PRO_PASSAGE;
 root.p2iReadFinancialCore=financialCore;
 let html='<h2>Bloc 6 — Prévisions reprises du moteur commun</h2><p>Hypothèses indicatives non validées. Les données disponibles sont conservées; les postes manquants restent à documenter. La personnalisation de l’identité, du site, du marché et des justificatifs se poursuit dans les autres blocs.</p>';
 if(result){html+='<form id="p2i-pro-scenario"><label>Investissement de simulation (USD) <input name="investment" type="number" min="1" step="any" value="'+inputs.investissement+'" required></label> <label>Prix de vente A1 (USD/kg) <input name="price" type="number" min="0.0001" step="any" value="'+inputs.prix[0]+'" required></label> <button type="submit">Recalculer avec le moteur commun</button><p role="status" id="p2i-pro-feedback"></p></form>';
 html+=table('Investissement et financement',['Poste','USD'],[['Investissement',money(inputs.investissement)],['Apport 30 %',money(result.financement.apport)],['Dette 70 %',money(result.financement.dette)],['Réserve initiale supplémentaire à financer',money(result.reserve_initiale)]]);
 html+=table('Compte de résultat sur trois ans',['Poste','A1','A2','A3'],[['Chiffre d’affaires','chiffre_affaires'],['Coût des produits vendus','cout_produits_vendus'],['Personnel','personnel'],['Charges fixes','charges_fixes'],['Amortissements','amortissements'],['Intérêts','charges_financieres'],['Impôts','impots'],['Résultat net','resultat_net']].map(([label,key])=>[label,...result.annuel.map(x=>money(x[key]))]));
 html+=table('BFR mensuel — 36 mois',['Mois','Stocks','Créances','Fournisseurs','BFR'],result.bfr.map((x,i)=>['M'+(i+1),money(x.stocks),money(x.creances_clients),money(x.dettes_exploitation),money(x.bfr)]));
 html+=table('Trésorerie — 12 mois',['Mois','Solde initial','Encaissements','Décaissements','Solde final'],result.tresorerie.map((x,i)=>['M'+(i+1),money(x.solde_initial),money(x.encaissements),money(x.decaissements),money(x.solde_final)]));
 html+=table('Bilans simplifiés',['Année','Actif','Passif','Écart'],result.bilans.map(x=>[x.annee,money(x.actif_total),money(x.passif_total),money(x.ecart)]));
 }else{html+='<p>Dossier incomplet : résultat net, BFR et trésorerie à documenter.</p>'+table('Référence propre à la configuration',['Donnée','Valeur'],[['Budget machines',money(ref?.machines)],['Budget global indicatif',money(ref?.investissement)],['Capacité',ref?.capacite?ref.capacite+' '+ref.unite:'À documenter']]);if(partial)html+=table('Calcul industriel partiel',['Donnée','Valeur'],Object.entries(partial.economique).filter(([,v])=>typeof v==='number').map(([k,v])=>[k,v]));}
 html+='<details><summary>Toutes les données et sources transmises</summary><pre style="white-space:pre-wrap;overflow-wrap:anywhere">'+esc(JSON.stringify({up,reference:ref,entrees:inputs,calcul_industriel_partiel:partial},null,2))+'</pre></details><button type="button" id="p2i-pro-export">Exporter les données reprises</button>';
 if(editor)editor.innerHTML=html;
 const core=financialCore();for(const [id,value] of Object.entries({total_capex_dynamic:core.totalCapex,total_investment_display:core.totalInvestment,credit_total_investment:core.totalInvestment,credit_debt:core.debt,credit_kpi_cash_min:core.minCashflow})) {const el=document.getElementById(id);if(el)el.textContent=money(value);}
 document.getElementById('p2i-pro-scenario')?.addEventListener('submit',e=>{e.preventDefault();try{const f=e.currentTarget,price=Number(f.elements.price.value),investment=Number(f.elements.investment.value),next={...inputs,investissement:investment,prix:inputs.prix.map(x=>x*price/inputs.prix[0])};const normalized=root.P2I_BP_V108_CONTEXTE.normalizeInput(next,payload.up_id,payload.configuration_id);const computed=root.P2I_BP_SIMULATION_COMMUNE.calculer(normalized);inputs=normalized;result=computed;payload.entrees=inputs;sessionStorage.setItem('p2i.passage:'+token,JSON.stringify(payload));apply();document.getElementById('p2i-pro-feedback').textContent='Paramètres recalculés et conservés dans cette session.';}catch(e){document.getElementById('p2i-pro-feedback').textContent=e.message;}});
 document.getElementById('p2i-pro-export')?.addEventListener('click',()=>{const blob=new Blob([JSON.stringify(root.P2I_BP_PRO_PASSAGE,null,2)],{type:'application/json'}),url=URL.createObjectURL(blob),a=document.createElement('a');a.href=url;a.download='P2I-BP-Pro-initial-'+payload.up_id+'.json';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);});
}
async function init(){
 if(ready)return;ready=true;
 try{
  if(!/^[a-f0-9-]{36}$/.test(token))throw Error('Identifiant de passage invalide.');
  payload=JSON.parse(sessionStorage.getItem('p2i.passage:'+token)||'null');
  const registry=typeof P2I_UP_DATA==='undefined'?{}:P2I_UP_DATA;
  if(!payload||payload.schema!=='p2i.passage.v1'||!own(registry,payload.up_id)||payload.up_id!==params.get('unit_id')||(payload.configuration_id||'')!==(params.get('configuration_id')||'')||!Number.isFinite(payload.date)||Date.now()-payload.date>86400000||payload.date>Date.now()+60000)throw Error('Dossier de passage absent, expiré ou incohérent. Rouvrez-le depuis le BP Découverte.');
  if(payload.simulation_id){const cfg=root.P2I_BP_SUPABASE_CONFIG,client=root.P2I_SUPABASE_CLIENT||root.P2I_SUPABASE_SDK.createClient(cfg.url,cfg.anon_key);const {data,error:err}=await client.auth.getUser();if(err||!data?.user?.id||data.user.id!==payload.owner_id)throw Error('Reconnectez-vous au compte propriétaire du BP Découverte.');}
  up=registry[payload.up_id];
  const choices=payload.up_id==='biscuiterie'?root.P2I_BP_V108_REFERENCES.variants:payload.up_id==='nettoyage'?root.P2I_BP_V108_REFERENCES.nettoyage:null;
  if(choices&&payload.configuration_id&&!own(choices,payload.configuration_id))throw Error('Configuration inconnue.');
  payload.reference=payload.up_id==='biscuiterie'?root.P2I_BP_V108_REFERENCES.obtenir(payload.configuration_id):payload.up_id==='nettoyage'&&own(root.P2I_BP_V108_REFERENCES.nettoyage,payload.configuration_id)?root.P2I_BP_V108_REFERENCES.nettoyage[payload.configuration_id]:null;
  inputs=payload.entrees?root.P2I_BP_V108_CONTEXTE.normalizeInput(payload.entrees,payload.up_id,payload.configuration_id):null;
  if(inputs&&up.type==='service')throw Error('Contrat de fabrication incompatible avec cette activité.');
  result=inputs?root.P2I_BP_SIMULATION_COMMUNE.calculer(inputs):null;
  partial=!result&&payload.up_id==='biscuiterie'?root.P2I_BP_V108_REFERENCES.partiel(payload.configuration_id):null;
  panel.innerHTML='<h2>Votre BP Découverte est repris dans le BP Pro initial</h2><p>'+esc(up.nom)+' · '+esc(payload.reference?.nom||payload.configuration_id||'Configuration à qualifier')+'</p><p>Les hypothèses et les sources sont disponibles au bloc 6. '+(result?'Résultats recalculés par les mêmes moteurs : financement 30/70, BFR 36 mois, trésorerie 12 mois.':'Les données financières manquantes restent signalées.')+' Aucun devis ni financement n’est validé par ce transfert.</p><a style="color:#b9e5ff" href="#p6">Consulter et personnaliser les données reprises</a>';
  panel.querySelector('a').addEventListener('click',e=>{e.preventDefault();document.querySelector('.toc a[data-goto="6"]')?.click();});
  // Neutralise l’ancien calcul pour ce parcours : les fonctions existantes
  // appelées par timers et événements accèdent désormais au même résultat.
  root.calculateAll=()=>{};
  apply();
  root.dispatchEvent(new Event('p2i:passage-ready'));
 }catch(e){error(e);}
}
root.addEventListener('p2i:pro-ready',init);
// L'initialisation du Pro peut déjà avoir fini avant le chargement du module.
if(document.readyState==='complete')init();
})(window);
