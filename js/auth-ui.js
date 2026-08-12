// js/auth-ui.js
(function () {
  "use strict";

  // =========================================================
  // 1) CONFIGURATION SUPABASE
  // =========================================================

  const SUPABASE_URL = "https://cfbbpmxdtiuicaitssjp.supabase.co";

  const SUPABASE_KEY =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNmYmJwbXhkdGl1aWNhaXRzc2pwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njg4MzQ5MjUsImV4cCI6MjA4NDQxMDkyNX0._wukYnxJ27JJgW_YTU_m88YKNBVzAQFpMjBP7t8zT18";


  // =========================================================
  // 2) CRÉATION / RÉUTILISATION DU CLIENT SUPABASE
  // =========================================================

  function getSupabaseClient() {

    // Si un client existe déjà, on le réutilise
    if (window.supabaseClient) {
      return window.supabaseClient;
    }

    // Vérification du SDK Supabase
    if (
      !window.supabase ||
      typeof window.supabase.createClient !== "function"
    ) {
      console.warn(
        "[auth-ui] Le SDK Supabase n'est pas encore disponible."
      );

      return null;
    }

    // Création du client
    window.supabaseClient = window.supabase.createClient(
      SUPABASE_URL,
      SUPABASE_KEY
    );

    return window.supabaseClient;
  }


  // =========================================================
  // 3) NAVIGATION VERS "MON ESPACE PERSONNEL"
  // =========================================================

  window.goToPersonalSpace = async function goToPersonalSpace() {

    console.log("[auth-ui] Clic sur Mon Espace Personnel");

    const client = getSupabaseClient();

    // -------------------------------------------------------
    // Si Supabase n'est pas disponible
    // -------------------------------------------------------

    if (!client) {

      console.warn(
        "[auth-ui] Supabase indisponible → redirection login"
      );

      window.location.href = "login.html?mode=login";

      return;
    }


    // -------------------------------------------------------
    // Vérification de la session
    // -------------------------------------------------------

    try {

      const {
        data,
        error
      } = await client.auth.getSession();


      if (error) {

        console.warn(
          "[auth-ui] Erreur getSession :",
          error.message
        );
      }


      const session = data?.session ?? null;


      // -----------------------------------------------------
      // Utilisateur connecté
      // -----------------------------------------------------

      if (session) {

        console.log(
          "[auth-ui] Session détectée → Dashboard"
        );

        window.location.href = "dashboard.html";

        return;
      }


      // -----------------------------------------------------
      // Utilisateur non connecté
      // -----------------------------------------------------

      console.log(
        "[auth-ui] Aucune session → Login"
      );

      window.location.href = "login.html?mode=login";

    } catch (error) {

      console.error(
        "[auth-ui] Erreur pendant la vérification de session :",
        error
      );

      window.location.href = "login.html?mode=login";
    }
  };


  // =========================================================
  // 4) INITIALISATION DU LIEN
  // =========================================================

  async function syncPersonalSpaceLink() {

    const link =
      document.querySelector("[data-personal-space]");


    // -------------------------------------------------------
    // Si le bouton n'existe pas sur cette page
    // -------------------------------------------------------

    if (!link) {

      console.log(
        "[auth-ui] Aucun bouton Mon Espace Personnel sur cette page."
      );

      return;
    }


    // -------------------------------------------------------
    // IMPORTANT :
    // On empêche le href="#" de fonctionner.
    // Le clic passe obligatoirement par goToPersonalSpace().
    // -------------------------------------------------------

    link.addEventListener(
      "click",
      function (event) {

        event.preventDefault();
        event.stopPropagation();

        window.goToPersonalSpace();
      }
    );


    // -------------------------------------------------------
    // Vérification de Supabase
    // -------------------------------------------------------

    const client = getSupabaseClient();

    if (!client) {

      console.warn(
        "[auth-ui] Client Supabase indisponible."
      );

      return;
    }


    // -------------------------------------------------------
    // Adaptation du href selon la session
    // -------------------------------------------------------

    try {

      const {
        data
      } = await client.auth.getSession();


      const session =
        data?.session ?? null;


      if (session) {

        // Utilisateur connecté
        link.setAttribute(
          "href",
          "dashboard.html"
        );

      } else {

        // Utilisateur non connecté
        link.setAttribute(
          "href",
          "login.html?mode=login"
        );
      }

    } catch (error) {

      console.warn(
        "[auth-ui] Impossible de déterminer la session :",
        error
      );
    }
  }


  // =========================================================
  // 5) ATTENTE DU CHARGEMENT COMPLET DU DOM
  // =========================================================

  if (
    document.readyState === "loading"
  ) {

    document.addEventListener(
      "DOMContentLoaded",
      syncPersonalSpaceLink
    );

  } else {

    syncPersonalSpaceLink();
  }


  // =========================================================
  // 6) MESSAGE DE CONTRÔLE
  // =========================================================

  console.log(
    "[auth-ui] auth-ui.js chargé correctement."
  );

})();
