
// Creates list of stringfile names that we will feed into the createCard function
function createNameList(){
    let suitList = ['clubs', 'diamonds', 'spades', 'hearts'];
    let numberList = ['ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'jack', 'queen', 'king'];
    let finalList = [];

    let sizeOfNumberList = numberList.length;
    let sizeOfSuitList = suitList.length;
    
    for (let i = 0; i < sizeOfNumberList; i += 1){
        for (let k = 0; k < sizeOfSuitList; k += 1){ 
            let cardName = `./images/${numberList[i]}_of_${suitList[k]}.png`; 
            finalList.push(cardName);
        }
    }

    return finalList;
}

// Creates a single card given that this function is provided a filename
function createCard(imageFileName){
    let card = document.createElement('div');
    let image = document.createElement('img');
    image.src = imageFileName;
    card.appendChild(image);
    return card;
}

// Creates the list of card divs given that this function is provided a list of file names
function createCardList(cardNameList){
    let sizeOfCardNameList = cardNameList.length;
    let cardList = [];
    for(let i = 0; i < sizeOfCardNameList; i += 1){
        let card = createCard(cardNameList[i]);
        cardList.push(card);
    }
    return cardList;
}

// Adds a given card to the div with the id deck
function addCardToDeck(card, id){
    let deck = document.getElementById(id);
    deck.appendChild(card);
}

let cardNameList = createNameList();
let cardList = createCardList(cardNameList);


//lines 1 through 49 can be put in python tutor




// Randomly selects one card (list still needs to deplete howver after each pick)
function pickCard(cardList){
    let randomNumber = Math.floor(Math.random() * 52);

    let card = cardList[randomNumber];

    let filteredCardList = cardList.filter((card, index) => {
        return index != randomNumber;
    })
    

    let result = {
        chosenCard: card,
        cardList: filteredCardList
    };

    return result; 
}

let cardsObject = pickCard(cardList);
let remainingDeck = cardsObject.cardList;


let playerDeck = [];
let dealerDeck = [];

function handleButton(){
    let cardsObjectPlayer = pickCard(cardList);
    let cardsObjectDealer = pickCard(cardList);
    let cardPlayer = cardsObjectPlayer.chosenCard;
    let cardDealer = cardsObjectDealer.chosenCard;
    let remainingDeck = cardsObjectPlayer.cardList;
    let remainingDeckDealer = cardsObjectDealer.cardList;
    dealerDeck.push(cardDealer);
    playerDeck.push(cardPlayer);
    addCardToDeck(cardDealer, 'dealer-hand');
    addCardToDeck(cardPlayer, 'player-hand');
    console.log("in the deal btn")
}


function handleDealButton() {
    handleButton();
}

function handleHitButton(){
    handleButton();
}

function handleStandButton(){
    handleButton();
}
