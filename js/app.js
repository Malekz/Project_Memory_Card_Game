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
