document.addEventListener("DOMContentLoaded", () => {
  // --- Status & Daten ---
  let isAdmin = false;

  // Admin Login (Benutzer & Passwort)
  const ADMIN_USER = "admin";
  const ADMIN_PASS = "DVBG2025!";

  // Links (konfigurierbar)
  let discordLink = "https://discord.gg/opsucht";
  let twitchLink1 = "https://twitch.tv/streamer1";
  let twitchLink2 = "https://twitch.tv/streamer2";

  // Bilder Base64 (in Session)
  let images = [];

  // News Array
  let news = [
    {
      title: "🎉 DVBG gewinnt das Opsucht Clan-Event!",
