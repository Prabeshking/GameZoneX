/* ============================
   GAMEZONEX FULL REDESIGN JS
   ============================ */

/* ===== LOADING SCREEN ===== */
window.addEventListener("load", () => {
    setTimeout(() => {
        const loader = document.getElementById("loader");
        loader.style.opacity = "0";
        setTimeout(() => {
            loader.style.display = "none";
        }, 500);
    }, 800);
});


/* ===== DARK MODE TOGGLE ===== */
const darkToggle = document.getElementById("darkToggle");

darkToggle.addEventListener("click", () => {
    document.body.classList.toggle("light");

    // Change icon
    if (document.body.classList.contains("light")) {
        darkToggle.textContent = "☀️";
    } else {
        darkToggle.textContent = "🌙";
    }
});


/* ===== FEATURED SLIDER ===== */
const featuredTrack = document.getElementById("featuredTrack");

// First 10 games become featured
const featuredGames = games.slice(0, 10);

featuredGames.forEach(g => {
    const slide = document.createElement("div");
    slide.className = "slide";
    slide.onclick = () => location.href = `game.html?id=${g.id}`;
    slide.innerHTML = `<img src="${g.thumbnail}" alt="${g.title}">`;
    featuredTrack.appendChild(slide);
});


/* ===== GAME GRID LOADING ===== */
const gameGrid = document.getElementById("gameGrid");

function loadGames(filter = "All") {
    gameGrid.innerHTML = "";

    games
        .filter(g => filter === "All" || g.category === filter)
        .forEach(game => {
            const card = document.createElement("div");
            card.className = "game-card";
            card.onclick = () => location.href = `game.html?id=${game.id}`;
            card.innerHTML = `
                <img src="${game.thumbnail}" alt="${game.title}">
                <h3>${game.title}</h3>
            `;
            gameGrid.appendChild(card);
        });
}

loadGames();


/* ===== CATEGORY FILTER (SIDEBAR) ===== */
function filterCategory(cat) {
    loadGames(cat);
}


/* ===== SEARCH BAR ===== */
document.getElementById("search").addEventListener("input", function () {
    const text = this.value.toLowerCase();
    gameGrid.innerHTML = "";

    games
        .filter(g => g.title.toLowerCase().includes(text))
        .forEach(game => {
            const card = document.createElement("div");
            card.className = "game-card";
            card.onclick = () => location.href = `game.html?id=${game.id}`;
            card.innerHTML = `
                <img src="${game.thumbnail}" alt="${game.title}">
                <h3>${game.title}</h3>
            `;
            gameGrid.appendChild(card);
        });
});
