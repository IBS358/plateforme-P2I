/* P2I — Registre de photographies documentées pour le BP Découverte.
 * Remplir UNIQUEMENT avec des photographies dont la source et les droits sont vérifiés.
 * Ne pas réutiliser une photo de variante pour une autre.
 * Les champs vides ne sont pas affichés; aucun visuel fictif n'est généré.
 * Chemins autorisés : images/..., assets/..., ./..., ../... ou HTTPS.
 */
window.P2I_BP_IMAGES=Object.assign({},window.P2I_BP_IMAGES||{},{
 biscuiterie:{
  hero:"",
  product:"",
  variants:{
   crackers:{hero:"",product:""},
   biscuits_mous:{hero:"",product:""},
   biscuits_durs:{hero:"",product:""}
  }
 },
 nettoyage:{
  hero:"",
  product:"",
  variants:{
   nettoyage_intensif:{hero:"",product:""},
   decontamination_chimique:{hero:"",product:""},
   decontamination_biologique:{hero:"",product:""}
  }
 }
});
