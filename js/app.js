/*
 * Create a list that holds all of your cards
 */
const icons = [
  "fa fa-anchor",
  "fa fa-bolt",
  "fa fa-bomb",
  "fa fa-bicycle",
  "fa fa-cube",
  "fa fa-diamond",
  "fa fa-leaf",
  "fa fa-paper-plane-o",
  "fa fa-anchor",
  "fa fa-bolt",
  "fa fa-bomb",
  "fa fa-bicycle",
  "fa fa-cube",
  "fa fa-diamond",
  "fa fa-leaf",
  "fa fa-paper-plane-o"
];

/////////////////////////////
//// Global Variables ////
//////////////////////////

// cards board
const cardsBoard = document.querySelector("#cards-board");

// Moves
let moves = 0;
const movesCounter = document.querySelector(".moves");

// Rating
const stars = document.querySelector(".stars").childNodes;
const starsForRate = document.querySelector(".stars");

// Restart
const restart = document.querySelector(".restart");

// Modal
const modal = document.querySelector(".modal");
const ratingModal = document.querySelector(".rating-modal");
const movesModal = document.querySelector(".moves-modal");
const btnModal = document.querySelector(".btn-modal");

////////////////////////////
////// Cards array //////
////////////////////////

let checkCards = [];
let matchedCards = [];

////////////////////////////////////////////////////////////////////////
// Shuffle function from http://stackoverflow.com/a/2450976//
/////////////////////////////////////////////////////////////////////

function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

//////////////////////////////////////////////////////////////////

creatCardsBoard();

///////////////////////////////////////////////////////////////
/////// Deck Creation and adding EventListener ////////
////////////////////////////////////////////////////////////

function creatCardsBoard() {
  // To clear the old card board
  cardsBoard.innerHTML = "";
  // creat new ul element to append it to "cardsBoard"
  const myNewDeck = document.createElement("ul");
  myNewDeck.classList.add("deck");
  // shuffle the icons list
  let shufIcons = shuffle(icons);
  for (let i = 0; i < shufIcons.length; i++) {
    const newLi = document.createElement("li");
    newLi.classList.add("card");
    newLi.innerHTML = `<i class="${shufIcons[i]}"></i>`;
    myNewDeck.appendChild(newLi);
  }
  cardsBoard.append(myNewDeck);
  // add event listener to the cards board
  cardsBoard.addEventListener("click", respondToTheClick);
}
