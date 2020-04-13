import * as Constants from "./constants.js";

let queue = [];
let solved = 0;
let won = false;

export let addElementToQueue = (card) => {
    queue.push(card);
    if (queue.length == 2) {
        checkSolution();
    }
}


let unFlip = (card) => {
    setTimeout(() => card.classList.toggle('is-flipped'), Constants.RE_FLIP_TIME);
}

let checkSolution = () => {
    const firstCard = queue.shift();
    const secondCard = queue.shift();
    if (isMatch(firstCard, secondCard)) {
        solved++;
        changeScoreBoard();
        checkForWon();
    } else {
        unFlip(firstCard);
        unFlip(secondCard);
    }
}
let isMatch = (firstCard, secondCard) => {
    const firstCardId = firstCard.getAttribute("id").split("_")[0];
    const secondCardId = secondCard.getAttribute("id").split("_")[0];
    return firstCardId === secondCardId;
}
let changeScoreBoard = () => {
    document.getElementById(Constants.SCORE_ID).innerHTML = solved + "/" + currentLevel.toSolve;
}
let checkForWon = () => {
    if (solved === currentLevel.toSolve) {
        showOverlay();
        won = true;
    }
}
export let resetGame = () => {
    queue = [];
    solved = 0;
    won = false;
    changeScoreBoard();
}
