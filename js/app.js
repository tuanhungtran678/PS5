/*
    PS5 EMULATOR - STAGE 2 CORE ENGINE
    Controls:
    ← → : move game selection
    Enter: open detail
    Esc: back
    N: notifications
*/

let currentIndex = 0;
let navIndex = 0;
let inDetail = false;

// DOM
const startup = document.getElementById("startup");
const app = document.getElementById("app");
const loading = document.getElementById("loading");

const detail = document.getElementById("detail");
const gameTitle = document.getElementById("gameTitle");
const gameGenre = document.getElementById("gameGenre");
const gameSize = document.getElementById("gameSize");

const navItems = document.querySelectorAll(".nav-item");

// ================= STARTUP SEQUENCE =================
window.addEventListener("load", () => {

    renderLibrary();

    setTimeout(() => {
        startup.style.opacity = "0";

        setTimeout(() => {
            startup.classList.add("hidden");
            app.classList.remove("hidden");

            initState();
            updateUI();

        }, 1000);

    }, 2500);
});

// ================= INIT =================
function initState() {
    currentIndex = loadSelectedGame();
    navIndex = loadNav();

    updateNav();
    highlightCard();
}

// ================= NAVIGATION =================
function updateNav() {
    navItems.forEach((item, i) => {
        item.classList.toggle("active", i === navIndex);
    });
}

// ================= LIBRARY =================
function highlightCard() {
    const cards = document.querySelectorAll(".card");

    cards.forEach((card, i) => {
        card.classList.toggle("active", i === currentIndex);
    });

    const game = getGame(currentIndex);

    if (game) {
        gameTitle.textContent = game.title;
        gameGenre.textContent = "Genre: " + game.genre;
        gameSize.textContent = "Size: " + game.size;
    }

    saveSelectedGame(currentIndex);
}

// ================= DETAIL =================
function openDetail() {
    inDetail = true;
    detail.classList.remove("hidden");
}

// ================= CLOSE DETAIL =================
function closeDetail() {
    inDetail = false;
    detail.classList.add("hidden");
}

// ================= NOTIFICATIONS =================
function showNotification(text) {
    const box = document.getElementById("notifications");
    box.classList.remove("hidden");

    const n = document.createElement("div");
    n.className = "notification";
    n.textContent = text;

    box.appendChild(n);

    setTimeout(() => {
        n.remove();
    }, 3000);
}

// ================= FAKE LOADING =================
function launchGame() {

    loading.classList.remove("hidden");

    const steps = [
        "Initializing Kernel...",
        "Loading GPU...",
        "Compiling Shaders...",
        "Mounting Game Files...",
        "Starting Game..."
    ];

    let p = 0;

    const interval = setInterval(() => {

        p += 5;

        const stepIndex = Math.min(
            Math.floor(p / 20),
            steps.length - 1
        );

        document.getElementById("loadingText").textContent =
            steps[stepIndex];

        if (p >= 100) {
            clearInterval(interval);

            setTimeout(() => {
                loading.classList.add("hidden");
                alert("Game Started (Fake Simulation)");
            }, 800);
        }

    }, 120);
}

// ================= INPUT CONTROLS =================
window.addEventListener("keydown", (e) => {

    const cards = document.querySelectorAll(".card");

    switch (e.key) {

        case "ArrowRight":
            if (!inDetail) {
                currentIndex = (currentIndex + 1) % games.length;
                highlightCard();
            }
            break;

        case "ArrowLeft":
            if (!inDetail) {
                currentIndex = (currentIndex - 1 + games.length) % games.length;
                highlightCard();
            }
            break;

        case "ArrowDown":
            navIndex = (navIndex + 1) % navItems.length;
            updateNav();
            saveNav(navIndex);
            break;

        case "ArrowUp":
            navIndex = (navIndex - 1 + navItems.length) % navItems.length;
            updateNav();
            saveNav(navIndex);
            break;

        case "Enter":
            if (!inDetail) {
                openDetail();
                showNotification("Game Selected: " + games[currentIndex].title);
            }
            break;

        case "Escape":
            if (inDetail) {
                closeDetail();
            }
            break;

        case "n":
        case "N":
            showNotification("🔔 New system notification");
            break;

        case " ":
            launchGame();
            break;
    }
});

// ================= PLAY BUTTON =================
document.getElementById("playBtn").addEventListener("click", () => {
    launchGame();
});