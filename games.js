/* GameZoneX — PlayStation‑Blue Build
   Notes:
   - Some games deep‑link directly (e.g., 1v1.LOL, Snow Rider 3D).
   - Others point to a Classroom 6x HUB mirror; users can switch mirror in the hero.
   Sources for game availability & mirrors: classroom 6x hubs and pages.  */
/* Hubs / Mirrors (swap if one is blocked) */
const MIRRORS = [
  "https://classroom-6x.io/home/",                 // hub (popular listings)  [1](https://classroom-6x.io/home/)
  "https://sites.google.com/view/classroom6xofficial/", // Google Sites hub   [4](https://sites.google.com/view/classroom6xofficial/)
  "https://classroom6x.us.com/"                    // alt info/hub page       [5](https://classroom6x.us.com/)
];
let currentMirror = MIRRORS[0];
const mirrorSelect = document.getElementById("mirrorSelect");
if (mirrorSelect){
  mirrorSelect.value = currentMirror;
  mirrorSelect.addEventListener("change", (e)=>{
    currentMirror = e.target.value;
    renderAll(); // re-render HUB links with new mirror
  });
}

/* ============================
   CRAZY LOADOUT (Fast • Neon • Intense)
   ============================ */
const crazyLoadout = [
  {
    title: "1v1.LOL",
    cover: "assets/1v1lol.jpg",
    url: "https://classrooms6x.gitlab.io/game/1v1-lol.html", // direct classroom 6x page  [2](https://classrooms6x.gitlab.io/game/1v1-lol.html)
    tags: ["Shooter",".io","Multiplayer"]
  },
  {
    title: "Drift Hunters",
    cover: "assets/drifthunters.jpg",
    url: "HUB", // listed under popular on 6x hubs                              [1](https://classroom-6x.io/home/)
    tags: ["Racing","3D","Drift"]
  },
  {
    title: "Slope",
    cover: "assets/slope.jpg",
    url: "HUB", // popular neon reflex runner on 6x hubs                         [1](https://classroom-6x.io/home/)
    tags: ["Reflex","Runner","Neon"]
  },
  {
    title: "Drive Mad",
    cover: "assets/drivemad.jpg",
    url: "HUB", // widely featured on 6x hubs                                    [1](https://classroom-6x.io/home/)
    tags: ["Physics","Challenge"]
  },
  {
    title: "Super Tunnel Rush",
    cover: "assets/supertunnelrush.jpg",
    url: "HUB", // hot/featured rotation                                         [1](https://classroom-6x.io/home/)
    tags: ["Reflex","Speed","Neon"]
  },
  {
    title: "Snow Rider 3D",
    cover: "assets/snowrider3d.jpg",
    url: "https://classroom6xonline.github.io/game/snow-rider-3d", // direct page [3](https://classroom6xonline.github.io/game/snow-rider-3d)
    tags: ["Arcade","3D"]
  }
];

/* ============================
   INSTANT PLAY (Browser Games)
   ============================ */
const browserGames = [
  {
    title: "Crossy Road (Browser)",
    cover: "assets/crossyroad.jpg",
    url: "HUB", // present in 6x hubs                                            [1](https://classroom-6x.io/home/)
    tags: ["Arcade","Casual"]
  },
  {
    title: "Paper.io 2",
    cover: "assets/paperio2.jpg",
    url: "HUB", // many .io games on hub                                        [1](https://classroom-6x.io/home/)
    tags: ["Competitive",".io"]
  },
  {
    title: "Bloxd.io",
    cover: "assets/bloxdio.jpg",
    url: "HUB", // sandbox/.io on hub                                           [1](https://classroom-6x.io/home/)
    tags: ["Sandbox",".io","Multiplayer"]
  },
  {
    title: "Geometry Dash (Lite/Meltdown)",
    cover: "assets/geometrydash.jpg",
    url: "HUB", // listed on hubs                                                [1](https://classroom-6x.io/home/)
    tags: ["Rhythm","Hardcore"]
  },
  {
    title: "Rooftop Snipers",
    cover: "assets/rooftopsnipers.jpg",
    url: "HUB", // physics/2P on hub                                            [1](https://classroom-6x.io/home/)
    tags: ["2‑Player","Physics"]
  }
];

/* ============== Utilities ============== */
function imgTag(src, alt){
  // Fallback gradient if image missing
  return src
    ? `<img class="thumb" src="${src}" alt="${alt} cover" onerror="this.style.display='none'; this.nextElementSibling?.classList.add('noimg');" />`
    : `<div class="thumb" aria-hidden="true"></div>`;
}
function toUrl(u){
  return u === "HUB" ? currentMirror : u;
}
function tagsRow(tags){
  if(!tags?.length) return "";
  return `<div class="tags">${tags.map(t=>`<span class="tag">${t}</span>`).join("")}</div>`;
}
function card({title, cover, url, tags}){
  return `
    <article class="card">
      ${imgTag(cover, title)}
      <div class="content">
        <h3>${title}</h3>
        ${tagsRow(tags)}
        <div style="display:flex; gap:8px; margin-top:4px;">
          <a class="btn" href="${toUrl(url)}" target="_blank" rel="noopener">Play Now</a>
          ${url==="HUB" ? `<a class="btn secondary" href="${currentMirror}" target="_blank" rel="noopener">Open Hub</a>` : ""}
        </div>
      </div>
    </article>
  `;
}

/* Renderers */
function renderSection(elId, list){
  const el = document.getElementById(elId);
  if(!el) return;
  el.innerHTML = list.map(card).join("");
}
function renderAll(){
  renderSection("loadout-grid", crazyLoadout);
  renderSection("browser-grid", browserGames);
}

/* Init */
document.getElementById("year").textContent = new Date().getFullYear();
renderAll();
