/* GameZoneX — Local games, same-tab navigation */

// LOCAL PAGES (you can add more later)
const crazyLoadout = [
  {
    title: "Neon Runner",
    cover: "assets/neonrunner.jpg", // optional thumbnail; if missing, a gradient shows
    url: "games/neon-runner/index.html",
    tags: ["Runner","Reflex","Neon"]
  }
  // Add more local games here as you create them:
  // { title:"...", cover:"assets/...", url:"games/<slug>/index.html", tags:[...] }
];

const browserGames = [
  // You can list the same local games or different ones
  {
    title: "Neon Runner",
    cover: "assets/neonrunner.jpg",
    url: "games/neon-runner/index.html",
    tags: ["Runner","Reflex"]
  }
];

function imgTag(src, alt) {
  return src ? `${src}` : `<div class="thumb" aria-hidden="true"></div>`;
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
        ${url}Play Now</a>
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
