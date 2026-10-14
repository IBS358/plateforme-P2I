
/* ==============================================
   P2I — MOTEUR COMMERCIAL COMMUN
   Fabrication, assemblage, services, mixte
   ============================================== */

(function () {
  "use strict";

  const TYPES_ACTIVITE = [
    "fabrication",
    "assemblage",
    "services",
    "mixte"
  ];

  const UNITES = [
    "kg", "tonne", "litre", "unite",
    "heure", "jour", "intervention",
    "contrat", "forfait"
  ];

  function nombreValide(valeur, nom) {
    if (
      typeof valeur !== "number" ||
      !Number.isFinite(valeur) ||
      valeur < 0
    ) {
      throw new Error(nom + " doit être un nombre positif ou nul.");
    }
    return valeur;
  }

  function calculerLigne(ligne) {
    if (!ligne || typeof ligne !== "object") {
      throw new Error("Ligne commerciale invalide.");
    }

    const unite = ligne.unite;
    if (!UNITES.includes(unite)) {
      throw new Error("Unité commerciale non reconnue : " + unite);
    }

    const capacite = nombreValide(
      ligne.capacite_annuelle,
      "Capacité annuelle"
    );

    const taux = nombreValide(
      ligne.taux_commercialisation,
      "Taux de commercialisation"
    );

    if (taux > 1) {
      throw new Error("Le taux ne peut pas dépasser 100 %.");
    }

    const prix = nombreValide(
      ligne.prix_unitaire,
      "Prix unitaire"
    );

    const devise = ligne.devise || "USD";

    if (!["USD", "XOF", "EUR"].includes(devise)) {
      throw new Error("Devise non reconnue : " + devise);
    }

    const quantiteFacturee = capacite * taux;
    const chiffreAffairesOrigine = quantiteFacturee * prix;

    const monnaie = window.P2I_CURRENCY;
    if (!monnaie) {
      throw new Error("Référentiel monétaire P2I absent.");
    }

    return {
      id: ligne.id || null,
      designation: ligne.designation || "",
      unite: unite,
      capacite_annuelle: capacite,
      taux_commercialisation: taux,
      quantite_facturee: quantiteFacturee,
      quantite_non_facturee: capacite - quantiteFacturee,
      prix_unitaire: prix,
      devise_origine: devise,
      chiffre_affaires_origine: chiffreAffairesOrigine,
      chiffre_affaires_usd: monnaie.convertir(
        chiffreAffairesOrigine,
        devise,
        "USD"
      ),
      chiffre_affaires_xof: monnaie.convertir(
        chiffreAffairesOrigine,
        devise,
        "XOF"
      ),
      statut: ligne.statut || "hypothese_a_valider"
    };
  }

  function calculerProjet(projet) {
    if (!projet || !TYPES_ACTIVITE.includes(projet.type_activite)) {
      throw new Error("Type d'activité P2I non reconnu.");
    }

    if (!Array.isArray(projet.lignes) || !projet.lignes.length) {
      throw new Error("Aucune ligne commerciale renseignée.");
    }

    const lignes = projet.lignes.map(calculerLigne);

    const chiffreAffairesUSD = lignes.reduce(
      (total, ligne) => total + ligne.chiffre_affaires_usd,
      0
    );

    const chiffreAffairesXOF = lignes.reduce(
      (total, ligne) => total + ligne.chiffre_affaires_xof,
      0
    );

    return {
      up_id: projet.up_id || null,
      configuration_id: projet.configuration_id || null,
      type_activite: projet.type_activite,
      lignes: lignes,
      chiffre_affaires_usd: chiffreAffairesUSD,
      chiffre_affaires_xof: chiffreAffairesXOF,
      taux_change: window.P2I_CURRENCY.obtenirConfiguration(),
      statut: "simulation_commerciale_indicative"
    };
  }

  window.P2I_COMMERCIAL_ENGINE = Object.freeze({
    calculerLigne,
    calculerProjet
  });

})();
