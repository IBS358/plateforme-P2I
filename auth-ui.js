// js/auth-ui.js
(function () {
  // =========================
  // 1) Init Supabase (une seule fois)
  // =========================
  const SUPABASE_URL = 'https://cfbbpmxdtiuicaitssjp.supabase.co';
  const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNmYmJwbXhkdGl1aWNhaXRzc2pwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njg4MzQ5MjUsImV4cCI6MjA4NDQxMDkyNX0._wukYnxJ27JJgW_YTU_m88YKNBVzAQFpMjBP7t8zT18';

  function getSupabaseClient() {
    // Si déjà créé ailleurs, on le réutilise
    if (window.supabaseClient) return window.supabaseClient;

    // Si le SDK n’est pas chargé, on ne peut pas faire la logique de session
    if (!window.supabase || !window.supabase.createClient) return null;

    window.supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
    return window.supabaseClient;
  }

  // =========================
  // 2) Navigation “Mon espace personnel”
  // =========================
  window.goToPersonalSpace = async function goToPersonalSpace() {
    const client = getSupabaseClient();

    // Fallback : si Supabase n’est pas dispo, on envoie au login
    if (!client) {
      window.location.href = "login.html?mode=login";
      return;
    }

    try {
      const { data, error } = await client.auth.getSession();
      if (error) console.warn("[goToPersonalSpace] getSession:", error.message);

      const session = data?.session ?? null;
      window.location.href = session ? "dashboard.html" : "login.html?mode=login";
    } catch (e) {
      window.location.href = "login.html?mode=login";
    }
  };

  // =========================
  // 3) Bonus UX : adapter automatiquement le lien du menu
  // =========================
  async function syncPersonalSpaceLink() {
    const link = document.querySelector('[data-personal-space]');
    if (!link) return;

    // On force toujours le clic à passer par goToPersonalSpace()
    link.addEventListener("click", function (e) {
      e.preventDefault();
      window.goToPersonalSpace();
    });

    // Optionnel : changer le texte selon l’état (facultatif)
    const client = getSupabaseClient();
    if (!client) return;

    try {
      const { data } = await client.auth.getSession();
      const session = data?.session ?? null;

      // Exemple: tu peux changer le label si tu veux
      // link.textContent = session ? "Mon espace personnel" : "Se connecter";

      // Ou mettre un href informatif (sans casser le handler)
      link.setAttribute("href", session ? "dashboard.html" : "login.html?mode=login");
    } catch (_) {}
  }

  document.addEventListener("DOMContentLoaded", syncPersonalSpaceLink);
})();
