/* GameZoneX — PlayStation‑Blue Build (Fixed)
   - Correct <img> and <a> tags
   - Working mirror switcher
   - Renders cards properly
*/

// ===== Mirrors / Hubs =====
const MIRRORS = [
  "https://classroom-6x.io/home/",                 // main hub
  "https://sites.google.com/view/classroom6xofficial/", // Google Sites hub
  "https://classroom6x.us.com/"                    // alt hub info
];
let currentMirror = MIRRORS[0];

// Mirror dropdown
document.addEventListener("DOMContentLoaded", () => {
  const sel = document.getElementById("mirrorSelect");
  if (sel) {
    sel.value = currentMirror;
    sel.addEventListener("change", (e) => {
      currentMirror = e.target.value;
      renderAll();
    });
  }
});

// ===== Crazy Loadout (Fast • Neon • Intense) =====
const crazyLoadout = [
  {
    title: "1v1.LOL",
    cover: "assets/1v1lol.jpg",
    url: "https://classrooms6x.gitlab.io/game/1v1-lol.html",
    tags: ["Shooter",".io","Multiplayer"]
  },
  { title: "Drift Hunters", cover: "assets/drifthunters.jpg", url: "HUB", tags: ["Racing","3D","Drift"] },
  { title: "Slope",          cover: "assets/slope.jpg",         url: "HUB", tags: ["Reflex","Runner","Neon"] },
  { title: "Drive Mad",      cover: "assets/drivemad.jpg",      url: "HUB", tags: ["Physics","Challenge"] },
  { title: "Super Tunnel Rush", cover: "assets/supertunnelrush.jpg", url: "HUB", tags: ["Reflex","Speed","Neon"] },
  {
    title: "Snow Rider 3D",
    cover: "assets/snowrider3d.jpg",
    url: "https://classroom6xonline.github.io/game/snow-rider-3d",
    tags: ["Arcade","3D"]
  }
];

// ===== Instant Play (Browser Games) =====
const browserGames = [
  { title: "Crossy Road (Browser)",       cover: "assets/crossyroad.jpg",     url: "HUB", tags: ["Arcade","Casual"] },
  { title: "Paper.io 2",                  cover: "assets/paperio2.jpg",       url: "HUB", tags: ["Competitive",".io"] },
  { title: "Bloxd.io",                    cover: "assets/bloxdio.jpg",        url: "HUB", tags: ["Sandbox",".io","Multiplayer"] },
  { title: "Geometry Dash (Lite/Meltdown)", cover: "assets/geometrydash.jpg", url: "HUB", tags: ["Rhythm","Hardcore"] },
  { title: "Rooftop Snipers",             cover: "assets/rooftopsnipers.jpg", url: "HUB", tags: ["2‑Player","Physics"] }
];

// ===== Helpers =====
function resolveUrl(u) {
  return u === "HUB" ? currentMirror : u;
}
function imgTag(src, alt) {
  if (!src) return `<div class="thumb" aria-hidden="true"></div>`;
  return `${src}`;
}
function tagsRow(tags) {
  if (!tags || !tags.length) return "";
  return `<div class="tags">${tags.map(t => `<span class="tag">${t}</span>`).join("")}</div>`;
}
function card({ title, cover, url, tags }) {
  const href = resolveUrl(url);
  return `
    <article class="card">
      ${imgTag(cover, title)}
      <div class="content">
        <h3>${title}</h3>
        ${tagsRow(tags)}
        <div style="display:flex; gap:8px; margin-top:6px;">
          ${href}Play Now</a>
          ${url === "HUB" ? `${currentMirror}Open Hub</a>` : ""}
        </div>
      </div>
    </article>
  `;
}

function render(list, elId) {
  const el = document.getElementById(elId);
  if (!el) return;
  el.innerHTML = list.map(card).join("");
}

function renderAll() {
  render(crazyLoadout, "loadout-grid");
  render(browserGames, "browser-grid");
}

// Footer year + initial render
document.addEventListener("DOMContentLoaded", () => {
  const y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();
  renderAll();
});
