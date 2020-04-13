import * as Constants from "./constants.js";
import {addElementToQueue} from "./gameController.js";
export let generateCardsGrid = () => {
    const emojisName = getEmojiesNames();
    let cardsElements = [];
    for (let i = 0; i < emojisName.length; i++) {
        cardsElements.push(createCardEmoji(emojisName[i], emojisName[i] + "_1"));
        cardsElements.push(createCardEmoji(emojisName[i], emojisName[i] + "_2"));
    }
    shuffle(cardsElements);
    shuffle(cardsElements);
    appendCardsToGrid(cardsElements);
}

let getEmojiesNames = () => {
    let emojisLength = currentLevel.rows * currentLevel.columns / 2;
    let emojisNames = [];
    let index = 0;
    while (index < emojisLength)
        emojisNames.push(Constants.EMOJIS[index++]);
    return emojisNames;
}

let createCardEmoji = (emojiName, cardId) => {
    const card = createCard(cardId);
    const cardFace = createCardFace();
    const cardBack = createCardBack();
    const emojiImage = createEmojiImg(emojiName);
    cardBack.append(emojiImage);
    card.append(cardFace);
    card.append(cardBack);
    return card;
}


let createCard = (cardId) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.setAttribute("id", cardId);
    card.style.width = 100 /currentLevel.columns + "%";
    card.style.height = "100%";
    return card;
}

let createCardFace = () => {
    const classesToAdd = ["card_face", "front"];
    const cardFace = document.createElement("div");
    cardFace.classList.add(...classesToAdd);
    cardFace.addEventListener('click', onCardClick);
    return cardFace
}

let createCardBack = () => {
    const classesToAdd = ["card_face", "back"];
    const cardBack = document.createElement("div");
    cardBack.classList.add(...classesToAdd);
    return cardBack;
}


let createEmojiImg = (emojiName) => {
    const SRC = Constants.EMOJIS_PATH + "/" + emojiName + ".svg";
    const emojiImage = document.createElement("img");
    emojiImage.classList.add("emoji");
    emojiImage.setAttribute("src", SRC);
    return emojiImage;
}


let onCardClick = (event) => {
    const card = event.target;
    flipCard(card.parentElement);
    addElementToQueue(card.parentElement);
}


let flipCard = (card) => {
    card.classList.toggle('is-flipped');
}
//Fisher–Yates shuffle
//https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle
let shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}


let appendCardsToGrid = (cardsElement) => {
    const cardsGrid = document.getElementById("cards-grid");
    const gridRows = getGridRows();
    cardsGrid.innerHTML = '';
    for (let i = 0,j=0; i < cardsElement.length; i++) {
        gridRows[j].append(cardsElement[i]);
        if ((i + 1) % currentLevel.columns == 0) j++;
    }

    for (let i = 0; i < gridRows.length; i++) {
        cardsGrid.append(gridRows[i]);
    }

}

let getGridRows = () => {
    const gridRows = [];
    for (let i = 0; i < currentLevel.rows; i++) {
        const row = document.createElement("div");
        row.classList.add("grid_row");
        row.style.width = Constants.GRID_WIDTH + "px";
        row.style.height = Constants.GRID_HEIGHT / currentLevel.rows + "px";
        gridRows.push(row);
    }
    return gridRows;
}
