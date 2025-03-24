let selectedCharacter = "";

function selectCharacter(name) {
    selectedCharacter = name;
    document.getElementById("selected-character").innerText = "Personnage sélectionné : " + name;
    document.getElementById("start-game").style.display = "block";
}

document.getElementById("start-game").addEventListener("click", function() {
    if (selectedCharacter) {
        alert("Vous avez choisi " + selectedCharacter + "! L'aventure commence...");
        // Rediriger vers la page de jeu (à modifier selon ta structure)
        window.location.href = "game.html"; 
    }
});
