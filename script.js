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
