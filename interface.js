// Données fictives
const playerStats = {
  "PV": 120,
  "Énergie": 60,
  "Force": 15,
  "Magie": 18,
  "Défense": 10,
  "Résistance Magique": 12,
  "Vitesse": 9,
  "Précision": 14,
  "Évasion": 8,
  "Critique": 5,
  "Volonté": 10,
  "Chance": 7,
  "Esquive Magique": 6,
  "Dégâts de Foudre": 20,
  "Résistance à la Foudre": 10,
  "Dégâts de Poison": 15,
  "Résistance au Poison": 8,
  "Dégâts de Glace": 12,
  "Résistance à la Glace": 5,
  "Dégâts de Feu": 18,
  "Résistance au Feu": 9,
  "Dégâts du Néant": 25,
  "Résistance au Néant": 10
};

const inventory = ["Potion de soin", "Talisman magique", "Clé rouillée"];
const equippedItems = {
  "Tête": "Casque en cuir",
  "Torse": "Armure légère",
  "Jambes": "Pantalon renforcé",
  "Bottes": "Bottes de voyage",
  "Anneau": "Anneau ancien",
  "Arme": "Épée en argent",
  "Artefact": "Pierre du néant"
};

const quests = ["Explorer les ruines", "Vaincre 5 vampires", "Retrouver l'amulette perdue"];

// Pop-up
const popupContainer = document.getElementById("popupContainer");
const popupBody = document.getElementById("popupBody");
const popupClose = document.getElementById("popupClose");

// Boutons
const statsBtn = document.getElementById("statsBtn");
const inventoryBtn = document.getElementById("inventoryBtn");
const questsBtn = document.getElementById("questsBtn");

// Affichage des fenêtres
function showPopup(content) {
  popupBody.innerHTML = content;
  popupContainer.style.display = "flex";
}

// Fermeture
popupClose.addEventListener("click", () => {
  popupContainer.style.display = "none";
});

popupContainer.addEventListener("click", (e) => {
  if (e.target === popupContainer) {
    popupContainer.style.display = "none";
  }
});

// Écouteurs
statsBtn.addEventListener("click", () => {
  let html = "<h2>Caractéristiques</h2><ul>";
  for (const [stat, val] of Object.entries(playerStats)) {
    html += `<li>${stat} : ${val}</li>`;
  }
  html += "</ul>";
  showPopup(html);
});

inventoryBtn.addEventListener("click", () => {
  let html = "<h2>Inventaire</h2><ul>";
  inventory.forEach(objet => {
    html += `<li>${objet}</li>`;
  });
  html += "</ul><h3>Équipement</h3><ul>";
  for (const [slot, item] of Object.entries(equippedItems)) {
    html += `<li>${slot} : ${item}</li>`;
  }
  html += "</ul>";
  showPopup(html);
});

questsBtn.addEventListener("click", () => {
  let html = "<h2>Quêtes</h2><ul>";
  quests.forEach(quete => {
    html += `<li>${quete}</li>`;
  });
  html += "</ul>";
  showPopup(html);
});