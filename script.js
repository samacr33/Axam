function selectCharacter(name, description) {
    document.getElementById("selected-character").innerText = "Personnage sélectionné : " + name;
    localStorage.setItem("selectedCharacter", name);

    // Afficher le bouton une fois un personnage sélectionné
    document.getElementById("start-game").style.display = "block";
}

function startGame() {
    let character = localStorage.getItem("selectedCharacter");
    if (character) {
        window.location.href = "jeu.html"; // Remplace "jeu.html" par le bon fichier
    } else {
        alert("Veuillez sélectionner un personnage avant de commencer !");
    }
}
document.addEventListener("DOMContentLoaded", () => {
    const statsIcon = document.getElementById("stats-icon");
    const inventoryIcon = document.getElementById("inventory-icon");
    const questsIcon = document.getElementById("quests-icon");

    const statsPanel = document.getElementById("stats-panel");
    const inventoryPanel = document.getElementById("inventory-panel");
    const questsPanel = document.getElementById("quests-panel");

    function togglePanel(panel) {
        panel.classList.toggle("hidden");
    }

    statsIcon.addEventListener("click", () => togglePanel(statsPanel));
    inventoryIcon.addEventListener("click", () => togglePanel(inventoryPanel));
    questsIcon.addEventListener("click", () => togglePanel(questsPanel));
});