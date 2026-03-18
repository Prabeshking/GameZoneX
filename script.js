/* GameZoneX — No-chooser build for root files (style.css, script.js) */

const DEFAULT_HUB = "https://classroom-6x.io/home/"; // change this one line if needed

// ----- Crazy Loadout (Fast • Neon • Intense) -----
const crazyLoadout = [
  {
    title: "1v1.LOL",
    cover: "assets/1v1lol.jpg",
    url: "https://classrooms6x.gitlab.io/game/1v1-lol.html", // direct page
    tags: ["Shooter",".io","Multiplayer"]
  },
  { title: "Drift Hunters", cover: "assets/drifthunters.jpg", url: DEFAULT_HUB, tags: ["Racing","3D","Drift"] },
  { title: "Slope",          cover: "assets/slope.jpg",         url: DEFAULT_HUB, tags: ["Reflex","Runner","Neon"] },
  { title: "Drive Mad",      cover: "assets/drivemad.jpg",      url: DEFAULT_HUB, tags: ["Physics","Challenge"] },
  { title: "Super Tunnel Rush", cover: "assets/supertunnelrush.jpg", url: DEFAULT_HUB, tags: ["Reflex","Speed","Neon"] },
  {
    title: "Snow Rider 3D",
    cover: "assets/snowrider3d.jpg",
    url: "https://classroom6xonline.github.io/game/snow-rider-3d", // direct page
    tags: ["Arcade","3D"]
  }
];

// ----- Instant Play (Browser Games) -----
const browserGames = [
  { title: "Crossy Road (Browser)",       cover: "assets/crossyroad.jpg",     url: DEFAULT_HUB, tags: ["Arcade","Casual"] },
  { title: "Paper.io 2",                  cover: "assets/paperio2.jpg",       url: DEFAULT_HUB, tags: ["Competitive",".io"] },
  { title: "Bloxd.io",                    cover: "assets/bloxdio.jpg",        url: DEFAULT_HUB, tags: ["Sandbox",".io","Multiplayer"] },
  { title: "Geometry Dash (Lite/Meltdown)", cover: "assets/geometrydash.jpg", url: DEFAULT_HUB, tags: ["Rhythm","Hardcore"] },
  { title: "Rooftop Snipers",             cover: "assets/rooftopsnipers.jpg", url: DEFAULT_HUB, tags: ["2‑Player","Physics"] }
];

// ----- Helpers -----
function imgTag(src, alt) {
  // Show gradient block if image is missing (so it still looks nice)
  if (!src) return `<div class="thumb" aria-hidden="true"></div>`;
  return `<img class="thumb" src="${src}" alt="${alt}">`;
}
function tagsRow(tags) {
  if (!tags || !tags.length) return "";
  return `<div class="tags">${tags.map(t => `<span class="tag">${t}</span>`).join("")}</div>`;
}
function card({ title, cover, url, tags }) {
  return `
    <article class="card">
      ${imgTag(cover, title)}
      <div class="content">
        <h3>${title}</h3>
        ${tagsRow(tags)}
        <a class="btn" href="${url}" target="_blank" rel="noopener">Play Now</a>
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

document.addEventListener("DOMContentLoaded", () => {
  const y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();
  renderAll();
});
``
