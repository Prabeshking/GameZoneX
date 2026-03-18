/* GameZoneX — Local games, same-tab navigation (FIXED) */

const crazyLoadout = [
  {
    title: "Neon Runner",
    cover: "assets/neonrunner.jpg",   // optional; if missing, a gradient placeholder will show
    url: "games/neon-runner/index.html",
    tags: ["Runner","Reflex","Neon"]
  }
];

const browserGames = [
  {
    title: "Neon Runner",
    cover: "assets/neonrunner.jpg",
    url: "games/neon-runner/index.html",
    tags: ["Runner","Reflex"]
  }
];

function imgTag(src, alt) {
  // ✅ real <img> tag (fallback to gradient block if image not present)
  return src
    ? `<img class="thumb" src="${src}" alt="${alt}" loading="lazy">`
    : `<div class="thumb" aria-hidden="true"></div>`;
}

function tagsRow(tags) {
  if (!tags || !tags.length) return "";
  return `<div class="tags">${tags.map(t => `<span class="tag">${t}</span>`).join("")}</div>`;
}

function card({ title, cover, url, tags }) {
  // ✅ real <a href="..."> link (same tab by default)
  return `
    <article class="card">
      ${imgTag(cover, title)}
      <div class="content">
        <h3>${title}</h3>
        ${tagsRow(tags)}
        <a class="btn" href="${url}">Play Now</a>
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
