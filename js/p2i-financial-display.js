/*
 * P2I — Compte de résultat consolidé
 * BP Découverte — Pilote Biscuiterie / Crackers
 *
 * Conserve les moteurs économique et financier.
 * Aucun montant manquant n'est remplacé par zéro.
 */
(function () {
  "use strict";

  const ID_COMPTE = "p2iCompteResultat";
  const ID_ANCIEN = "p2iFinancialDetails";
  const ID_SELECT = "p2iBiscuiterieSelect";

  function formatMontant(valeur, decimales = 2) {
    return Number.isFinite(valeur)
      ? valeur.toLocaleString("fr-FR", {
          minimumFractionDigits: decimales,
          maximumFractionDigits: decimales
        }) + " USD"
      : "À renseigner";
  }

  function formatQuantite(valeur) {
    return Number.isFinite(valeur)
      ? valeur.toLocaleString("fr-FR", {
          maximumFractionDigits: 0
        }) + " kg"
      : "À renseigner";
  }

  function nettoyer() {
    document.getElementById(ID_ANCIEN)?.remove();
    delete window.P2I_COMPTE_FINANCIER;
  }

  function consolider() {
    const select = document.getElementById(ID_SELECT);
    const sortie = document.getElementById(ID_COMPTE);

    if (!select || !sortie) return;

    nettoyer();

    if (select.value !== "crackers") {
      sortie.style.display = "none";
      return;
    }

    const economique = window.P2I_CRACKERS_RESULTAT;
    const donnees = window.P2I_DONNEES_FINANCIERES;
    const moteur = window.P2I_FINANCIAL_ENGINE;

    if (!economique || !donnees || !moteur) {
      sortie.style.display = "none";
      return;
    }

    const ca = economique.chiffre_affaires_usd;
    const cpv = economique.cout_produits_vendus_usd;

    if (!Number.isFinite(ca) ||
        !Number.isFinite(cpv)) return;

    // Contrôle de cohérence avec le raccordement.
    if (
      Math.abs(ca - donnees.chiffre_affaires_usd) > 0.01 ||
      Math.abs(cpv - donnees.cout_produits_vendus_usd) > 0.01
    ) {
      console.error(
        "P2I : incohérence entre données économiques et financières."
      );
      return;
    }

    try {
      const source = "Synthèse économique P2I — Crackers";

      const financier = moteur.calculer({
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

      const postesManquants =
        Array.isArray(financier.postes_a_renseigner)
          ? financier.postes_a_renseigner.length
          : null;

      const ligne = (libelle, valeur, important = false) => `
        <tr>
          <td style="padding:9px;border-bottom:1px solid #334155">
            ${important ? "<strong>" : ""}
            ${libelle}
            ${important ? "</strong>" : ""}
          </td>
          <td style="padding:9px;text-align:right;border-bottom:1px solid #334155">
            ${important ? "<strong>" : ""}
            ${valeur}
            ${important ? "</strong>" : ""}
          </td>
        </tr>
      `;

      sortie.innerHTML = `
        <div style="padding:16px;border:1px solid #4cc9f0;
                    border-radius:14px;background:#121c36;color:white">

          <h3 style="color:#4cc9f0;margin-bottom:8px">
            Compte de résultat prévisionnel P2I
          </h3>

          <p style="font-size:0.9rem">
            Biscuiterie industrielle — Crackers<br>
            Exercice annuel · USD · Simulation provisoire
          </p>

          <table style="width:100%;border-collapse:collapse;margin-top:14px">
            <tbody>
              ${ligne("Chiffre d'affaires",
                formatMontant(financier.chiffre_affaires_total_usd))}

              ${ligne("Coût des produits vendus",
                formatMontant(financier.cout_ventes_total_usd))}

              ${ligne("Marge industrielle indicative",
                formatMontant(financier.marge_industrielle_ou_sur_prestations_usd),
                true)}

              ${ligne("Autres charges d'exploitation",
                formatMontant(financier.autres_charges_exploitation_usd))}

              ${ligne("Dotations et amortissements",
                formatMontant(financier.dotations_usd))}

              ${ligne("Résultat d'exploitation",
                formatMontant(financier.resultat_exploitation_usd))}

              ${ligne("Résultat financier",
                formatMontant(financier.resultat_financier_usd))}

              ${ligne("Résultat avant impôt",
                formatMontant(financier.resultat_avant_impot_usd))}

              ${ligne("Résultat net prévisionnel",
                formatMontant(financier.resultat_net_usd),
                true)}
            </tbody>
          </table>

          <p style="margin-top:16px;color:#fbbf24">
            ${postesManquants === null
              ? "Des postes restent à vérifier."
              : postesManquants + " postes ou contrôles restent à renseigner."}
            La marge industrielle ne constitue pas un bénéfice net.
            Les charges inconnues ne sont pas assimilées à zéro.
          </p>

          <h4 style="color:#4cc9f0;margin-top:20px">
            Production et stocks — Informations complémentaires
          </h4>

          <p><b>Production annuelle :</b>
            ${formatQuantite(economique.quantite_produite)}
          </p>

          <p><b>Quantité vendue :</b>
            ${formatQuantite(economique.quantite_vendue)}
          </p>

          <p><b>Quantité non vendue :</b>
            ${formatQuantite(economique.quantite_non_vendue)}
          </p>

          <p><b>Stock final théorique :</b>
            ${formatQuantite(economique.quantite_stockee)}
          </p>

          <p><b>Valorisation indicative du stock :</b>
            ${formatMontant(economique.valeur_stock_indicative_usd)}
          </p>

          <p><b>Coût total de production :</b>
            ${formatMontant(economique.cout_production_total_usd)}
          </p>

          <p><b>Coût industriel unitaire :</b>
            ${formatMontant(economique.cout_production_unitaire_usd, 4)}
            /kg
          </p>

          <p style="margin-top:14px;font-size:0.85rem;color:#cbd5e1">
            Simulation indicative P2I. La valorisation du stock
            suppose que les quantités non vendues sont stockables,
            sans pertes non comptabilisées, et que les coûts
            industriels sont répartis selon les hypothèses
            du moteur économique. Ces hypothèses doivent
            être vérifiées avant toute utilisation financière.
          </p>
        </div>
      `;

      sortie.style.display = "block";
      window.P2I_COMPTE_FINANCIER = financier;

      console.log(
        "P2I : compte de résultat consolidé affiché."
      );

    } catch (erreur) {
      console.error(
        "P2I : erreur de consolidation financière",
        erreur
      );
    }
  }

  function initialiser() {
    const select = document.getElementById(ID_SELECT);
    if (!select) return;

    // Le raccordement HTML émet cet événement uniquement après la
    // disponibilité des données économiques de la configuration courante.
    window.addEventListener("p2i:financial-data-ready", event => {
      if (event.detail?.up_id !== "biscuiterie" ||
          event.detail?.configuration_id !== "crackers") return;
      consolider();
    });

    select.addEventListener("change", () => {
      nettoyer();
      const sortie = document.getElementById(ID_COMPTE);
      if (sortie) sortie.style.display = "none";
      // Pas de délai arbitraire : attendre l'événement de données prêtes.
    });

    // Cas du chargement initial si les données sont déjà prêtes.
    if (window.P2I_DONNEES_FINANCIERES) consolider();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initialiser);
  } else {
    initialiser();
  }

})();
