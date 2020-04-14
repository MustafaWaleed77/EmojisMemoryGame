import * as Constants from "./constants.js";
import {generateCardsGrid} from "./gridGenerator.js";
import {resetGame} from "./gameController.js";

window.currentLevel = Constants.LEVELS[0];

window.changeLevel = (event, index) => {
    const levelIndex = event ? event.target.value : index;
    currentLevel = Constants.LEVELS[levelIndex];
    resetGame();
    generateCardsGrid();
}

window.hideOverlay = () => {
    document.getElementById("overlay").style.display = "none";
    if (currentLevel.level < Constants.LAST_LEVEL) {
        document.getElementById("level-select").value = currentLevel.level;
        changeLevel(null, currentLevel.level);
    } else {
        document.getElementById("level-select").value = 0;
        resetGame();
    }
}
window.showOverlay = () => {
    if (currentLevel.level < Constants.LAST_LEVEL) {
        document.getElementById("overlay-text").innerHTML = "YOU WON CLICK TO PLAY NEXT LEVEL";
    } else {
        document.getElementById("overlay-text").innerHTML = "YOU WON NO MORE LEVELS WHAT A GENIUS!!";
    }
    document.getElementById("overlay").style.display = "block";
}

changeLevel(null, 0);

