/*
    STORAGE SYSTEM
    - Save selected game
    - Save last navigation state
    - Save settings (future Stage 3 expansion)
*/

const STORAGE_KEYS = {
    SELECTED_GAME: "ps5_selected_game",
    ACTIVE_NAV: "ps5_active_nav"
};

// Save selected game index
function saveSelectedGame(index) {
    localStorage.setItem(STORAGE_KEYS.SELECTED_GAME, index);
}

// Load selected game index
function loadSelectedGame() {
    const data = localStorage.getItem(STORAGE_KEYS.SELECTED_GAME);
    return data !== null ? parseInt(data) : 0;
}

// Save active navigation tab
function saveNav(index) {
    localStorage.setItem(STORAGE_KEYS.ACTIVE_NAV, index);
}

// Load active navigation tab
function loadNav() {
    const data = localStorage.getItem(STORAGE_KEYS.ACTIVE_NAV);
    return data !== null ? parseInt(data) : 0;
}

// Clear all saved data (debug / reset)
function resetStorage() {
    localStorage.removeItem(STORAGE_KEYS.SELECTED_GAME);
    localStorage.removeItem(STORAGE_KEYS.ACTIVE_NAV);
}

// Optional: debug helper
function debugStorage() {
    console.log("STORAGE STATE:");
    console.log("Selected Game:", loadSelectedGame());
    console.log("Active Nav:", loadNav());
}