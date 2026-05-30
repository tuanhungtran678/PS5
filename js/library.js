const games = [
    {
        id: 1,
        title: "Spider-Man 2",
        genre: "Action",
        size: "98 GB"
    },
    {
        id: 2,
        title: "God of War Ragnarok",
        genre: "Adventure",
        size: "84 GB"
    },
    {
        id: 3,
        title: "Horizon Forbidden West",
        genre: "Open World",
        size: "95 GB"
    },
    {
        id: 4,
        title: "Grand Theft Auto VI",
        genre: "Open World",
        size: "150 GB"
    },
    {
        id: 5,
        title: "Ghost of Tsushima",
        genre: "Action Stealth",
        size: "60 GB"
    },
    {
        id: 6,
        title: "The Last of Us Part II",
        genre: "Story",
        size: "100 GB"
    }
];

// Render library UI
function renderLibrary() {
    const library = document.getElementById("library");
    library.innerHTML = "";

    games.forEach((game, index) => {
        const card = document.createElement("div");
        card.classList.add("card");

        if (index === 0) card.classList.add("active");

        card.dataset.index = index;

        card.innerHTML = `
            <div class="title">${game.title}</div>
            <div class="meta">${game.genre} • ${game.size}</div>
        `;

        library.appendChild(card);
    });
}

// Get game by index
function getGame(index) {
    return games[index];
}