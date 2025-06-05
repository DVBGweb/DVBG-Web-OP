// Safe Admin-Zugang
const ADMIN_USERNAME = "admin";
const ADMIN_PASSWORD = "dvbg2025";

// Admin-Login
document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;
  const panel = document.getElementById("adminPanel");
  const status = document.getElementById("loginStatus");

  if (user === ADMIN_USERNAME && pass === ADMIN_PASSWORD) {
    panel.classList.remove("hidden");
    status.classList.add("hidden");
    logAdmin("Admin eingeloggt");
    loadLinks();
  } else {
    status.classList.remove("hidden");
  }
});

// Links speichern
document.getElementById("saveLinksBtn").addEventListener("click", function () {
  const discord = document.getElementById("discordLink").value;
  const twitch1 = document.getElementById("twitchLink1").value;
  const twitch2 = document.getElementById("twitchLink2").value;

  localStorage.setItem("discord", discord);
  localStorage.setItem("twitch1", twitch1);
  localStorage.setItem("twitch2", twitch2);

  updateFooterLinks();
  logAdmin("Links gespeichert");
});

// Links laden
function loadLinks() {
  document.getElementById("discordLink").value = localStorage.getItem("discord") || "";
  document.getElementById("twitchLink1").value = localStorage.getItem("twitch1") || "";
  document.getElementById("twitchLink2").value = localStorage.getItem("twitch2") || "";
}

// Footer aktualisieren
function updateFooterLinks() {
  document.getElementById("footerDiscord").href = localStorage.getItem("discord") || "#";
  document.getElementById("footerTwitch1").href = localStorage.getItem("twitch1") || "#";
  document.getElementById("footerTwitch2").href = localStorage.getItem("twitch2") || "#";
}

// Admin-Log
function logAdmin(msg) {
  const ul = document.getElementById("adminLog");
  const li = document.createElement("li");
  li.textContent = `${new Date().toLocaleTimeString()} – ${msg}`;
  ul.appendChild(li);
}

// Suche
document.getElementById("searchInput").addEventListener("input", function (e) {
  const query = e.target.value.toLowerCase();
  const news = document.querySelectorAll("#news-list article");
  const results = document.getElementById("searchResults");
  results.innerHTML = "";

  news.forEach(article => {
    const text = article.textContent.toLowerCase();
    if (text.includes(query)) {
      const clone = article.cloneNode(true);
      results.appendChild(clone);
    }
  });
});

// Initiale Links im Footer anzeigen
updateFooterLinks();
