
/*
 * P2I — Affichage financier BP Découverte
 * Version initiale : pilote Crackers
 * Aucun montant manquant n'est remplacé par zéro.
 */
(function () {
  "use strict";

  function afficherCompteFinancier() {
    const donnees = window.P2I_DONNEES_FINANCIERES;
    const moteur = window.P2I_FINANCIAL_ENGINE;
    const synthese = document.getElementById("p2iCompteResultat");

    if (!synthese || !donnees || !moteur) return;

    // Ne pas utiliser les données des Crackers
    // lorsqu'une autre configuration est sélectionnée.
    const select = document.getElementById("p2iBiscuiterieSelect");
    if (!select || select.value !== "crackers") return;

    const ca = donnees.chiffre_affaires_usd;
    const cpv = donnees.cout_produits_vendus_usd;

    if (!Number.isFinite(ca) || !Number.isFinite(cpv)) return;

    const source = "Synthèse économique P2I — Crackers";

    const resultat = moteur.calculer({
      type_activite: "fabrication",
      lignes: [{
        id: "crackers",
        type_activite: "fabrication",
        chiffre_affaires: {
          montant_usd: ca,
          statut: "estime_p2i",
          source
        },
        cout_prestations_ou_produits_vendus: {
          montant_usd: cpv,
          statut: "estime_p2i",
          source
        }
      }],
      postes: {},
      controle_non_double_compte: false
    });

    const ancien = document.getElementById("p2iFinancialDetails");
    if (ancien) ancien.remove();

    const bloc = document.createElement("div");
    bloc.id = "p2iFinancialDetails";
    bloc.style.cssText =
      "margin-top:16px;padding:16px;border:1px solid #4cc9f0;" +
      "border-radius:14px;background:#121c36;color:white";

    const format = n =>
      n == null
        ? "À renseigner"
        : n.toLocaleString("fr-FR", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
          }) + " USD";

    const ligne = (libelle, valeur) => {
      const p = document.createElement("p");
      p.style.margin = "8px 0";
      p.textContent = libelle + " : " + format(valeur);
      bloc.appendChild(p);
    };

    const titre = document.createElement("h3");
    titre.textContent = "Compte de résultat financier — Crackers";
    titre.style.marginBottom = "12px";
    bloc.appendChild(titre);

    ligne("Chiffre d'affaires", resultat.chiffre_affaires_total_usd);
    ligne("Coût des produits vendus", resultat.cout_ventes_total_usd);
    ligne(
      "Marge industrielle indicative",
      resultat.marge_industrielle_ou_sur_prestations_usd
    );
    ligne(
      "Autres charges d'exploitation",
      resultat.autres_charges_exploitation_usd
    );
    ligne("Dotations", resultat.dotations_usd);
    ligne(
      "Résultat d'exploitation",
      resultat.resultat_exploitation_usd
    );
    ligne(
      "Résultat financier",
      resultat.resultat_financier_usd
    );
    ligne(
      "Résultat avant impôt",
      resultat.resultat_avant_impot_usd
    );
    ligne("Résultat net", resultat.resultat_net_usd);

    const info = document.createElement("p");
    info.style.cssText =
      "margin-top:14px;color:#fbbf24;line-height:1.5";

    info.textContent =
      resultat.postes_a_renseigner.length +
      " postes ou contrôles restent à renseigner. " +
      "Le résultat net ne peut pas encore être déterminé. " +
      "Les montants manquants ne sont pas assimilés à zéro.";

    bloc.appendChild(info);

    synthese.insertAdjacentElement("afterend", bloc);

    window.P2I_COMPTE_FINANCIER = resultat;
  }

  function initialiser() {
    const select = document.getElementById("p2iBiscuiterieSelect");

    if (select) {
      select.addEventListener("change", () => {
        document.getElementById("p2iFinancialDetails")?.remove();
        delete window.P2I_COMPTE_FINANCIER;
        setTimeout(afficherCompteFinancier, 600);
      });
    }

    setTimeout(afficherCompteFinancier, 600);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initialiser);
  } else {
    initialiser();
  }
})();
