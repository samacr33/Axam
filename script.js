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
document.addEventListener("DOMContentLoaded", function () {
    const statsBtn = document.getElementById("stats");
    const inventoryBtn = document.getElementById("inventory");
    const questsBtn = document.getElementById("quests");
    const popupContainer = document.getElementById("popup-container");
    const popupBody = document.getElementById("popup-body");
    const popupClose = document.getElementById("popup-close");

    // Données fictives pour l'exemple
    let playerStats = {
        "PV": 100,
        "Énergie": 50,
        "Force": 10,
        "Magie": 15,
        "Défense": 8,
        "Résistance Magique": 6,
        "Vitesse": 12,
        "Précision": 14,
        "Évasion": 10,
        "Critique": 5,
        "Volonté": 8,
        "Chance": 7,
        "Esquive Magique": 9,
        "Dégâts de Foudre": 12,
        "Résistance à la Foudre": 10,
        "Dégâts de Poison": 15,
        "Résistance au Poison": 10,
        "Dégâts de Glace": 10,
        "Résistance à la Glace": 10,
        "Dégâts de Feu": 20,
        "Résistance au Feu": 15,
        "Dégâts du Néant": 30,
        "Résistance au Néant": 20
    };

    let inventory = ["Potion de soin", "Épée rouillée", "Talisman magique"];
    let equippedItems = {
        "Tête": "Casque en cuir",
        "Torse": "Armure légère",
        "Jambes": "Pantalon en tissu",
        "Bottes": "Bottes de voyage",
        "Anneau": "Anneau de puissance",
        "Arme": "Dague de chasseur",
        "Artefact": "Pierre des anciens"
    };

    let quests = ["Tuer 5 gobelins", "Explorer les ruines maudites"];

    function showPopup(content) {
        popupBody.innerHTML = content;
        popupContainer.style.display = "block";
    }

    statsBtn.addEventListener("click", function () {
        let statsContent = "<h2>Caractéristiques</h2><ul>";
        for (const [stat, value] of Object.entries(playerStats)) {
            statsContent += `<li>${stat}: ${value}</li>`;
        }
        statsContent += "</ul>";
        showPopup(statsContent);
    });

    inventoryBtn.addEventListener("click", function () {
        let inventoryContent = "<h2>Inventaire</h2><ul>";
        inventory.forEach(item => {
            inventoryContent += `<li>${item}</li>`;
        });
        inventoryContent += "</ul><h2>Équipement</h2><ul>";
        for (const [slot, item] of Object.entries(equippedItems)) {
            inventoryContent += `<li>${slot}: ${item}</li>`;
        }
        inventoryContent += "</ul>";
        showPopup(inventoryContent);
    });

    questsBtn.addEventListener("click", function () {
        let questsContent = "<h2>Quêtes</h2><ul>";
        quests.forEach(quest => {
            questsContent += `<li>${quest}</li>`;
        });
        questsContent += "</ul>";
        showPopup(questsContent);
    });

    popupClose.addEventListener("click", function () {
        popupContainer.style.display = "none";
    });

    popupContainer.addEventListener("click", function (event) {
        if (event.target === popupContainer) {
            popupContainer.style.display = "none";
        }
    });
});
