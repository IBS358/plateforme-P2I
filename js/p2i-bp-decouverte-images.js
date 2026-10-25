/* P2I — Registre de photographies documentées pour le BP Découverte.
 * Remplir UNIQUEMENT avec des photographies dont la source et les droits sont vérifiés.
 * Ne pas réutiliser une photo de variante pour une autre.
 * Les champs vides ne sont pas affichés; aucun visuel fictif n'est généré.
 * Chemins autorisés : images/..., assets/..., ./..., ../... ou HTTPS.
 */
(function(){
 const registry=window.P2I_BP_IMAGES=window.P2I_BP_IMAGES||{};
 const defaults={
  biscuiterie:["crackers","biscuits_mous","biscuits_durs"],
  nettoyage:["nettoyage_intensif","decontamination_chimique","decontamination_biologique"]
 };
 for(const [unit,variants] of Object.entries(defaults)){
  const data=registry[unit]=registry[unit]||{};
  data.hero=data.hero||"";
  data.product=data.product||"";
  data.variants=data.variants||{};
  for(const variant of variants){
   const item=data.variants[variant]=data.variants[variant]||{};
   item.hero=item.hero||"";
   item.product=item.product||"";
  }
 }
})();
