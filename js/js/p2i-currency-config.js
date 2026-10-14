
/* ==============================================
   P2I — RÉFÉRENTIEL MONÉTAIRE COMMUN
   Devise de calcul : USD
   Devise d'affichage complémentaire : XOF
   ============================================== */

(function () {
  "use strict";

  const EUR_XOF = 655.957;

  // Le taux EUR/USD doit provenir d'une source
  // vérifiée avant toute conversion opérationnelle.
  let tauxEURUSD = null;
  let dateTaux = null;
  let sourceTaux = null;

  function definirTauxEURUSD(taux, date, source) {
    const valeur = Number(taux);

    if (!Number.isFinite(valeur) || valeur <= 0) {
      throw new Error("Taux EUR/USD invalide.");
    }

    if (!date || !source) {
      throw new Error(
        "Date et source du taux obligatoires."
      );
    }

    tauxEURUSD = valeur;
    dateTaux = String(date);
    sourceTaux = String(source);
  }

  function obtenirTauxUSDXOF() {
    if (tauxEURUSD === null) return null;

    // EUR/USD = nombre de USD pour 1 EUR
    return EUR_XOF / tauxEURUSD;
  }

  function convertir(montant, deviseSource, deviseCible) {
    const valeur = Number(montant);

    if (!Number.isFinite(valeur)) {
      throw new Error("Montant invalide.");
    }

    const source = deviseSource.toUpperCase();
    const cible = deviseCible.toUpperCase();

    const devises = ["USD", "EUR", "XOF"];

    if (!devises.includes(source) ||
        !devises.includes(cible)) {
      throw new Error("Devise non prise en charge.");
    }

    if (source === cible) return valeur;

    let montantEUR;

    if (source === "EUR") {
      montantEUR = valeur;
    } else if (source === "XOF") {
      montantEUR = valeur / EUR_XOF;
    } else {
      if (tauxEURUSD === null) {
        throw new Error(
          "Taux EUR/USD non encore renseigné."
        );
      }
      montantEUR = valeur / tauxEURUSD;
    }

    if (cible === "EUR") return montantEUR;

    if (cible === "XOF") {
      return montantEUR * EUR_XOF;
    }

    if (tauxEURUSD === null) {
      throw new Error(
        "Taux EUR/USD non encore renseigné."
      );
    }

    return montantEUR * tauxEURUSD;
  }

  function formater(montant, devise, decimales = 2) {
    return new Intl.NumberFormat("fr-FR", {
      style: "currency",
      currency: devise,
      minimumFractionDigits: decimales,
      maximumFractionDigits: decimales
    }).format(montant);
  }

  function obtenirConfiguration() {
    return {
      devise_calcul: "USD",
      devise_affichage: "XOF",
      parite_EUR_XOF: EUR_XOF,
      taux_EUR_USD: tauxEURUSD,
      taux_USD_XOF: obtenirTauxUSDXOF(),
      date_taux: dateTaux,
      source_taux: sourceTaux,
      statut: tauxEURUSD === null
        ? "taux_a_renseigner"
        : "taux_renseigne_non_garanti_actuel"
    };
  }

  window.P2I_CURRENCY = Object.freeze({
    definirTauxEURUSD,
    obtenirTauxUSDXOF,
    convertir,
    formater,
    obtenirConfiguration
  });

})();
