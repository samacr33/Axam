function selectCharacter(character) {
    document.getElementById("selected-character").innerText = "Personnage sélectionné : " + character;

    // Vérifier et afficher le bouton si nécessaire
    let startButton = document.getElementById("start-game");
    startButton.style.display = "block";

    // Sauvegarder le personnage sélectionné (optionnel si besoin)
    localStorage.setItem("selectedCharacter", character);
}

// Assurer que le bouton est cliquable et redirige
document.getElementById("start-game").addEventListener("click", function() {
    let selectedCharacter = localStorage.getItem("selectedCharacter");
    if (selectedCharacter) {
        window.location.href = "jeu.html"; // Remplace par la bonne page
    } else {
        alert("Veuillez sélectionner un personnage avant de commencer.");
    }
});
