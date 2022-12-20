"use strict";
// ------------------modal__newGame
// const overlay = document.querySelector(".overlay");
const newGame = document.querySelector(".addNewGame");
const addNewGame = document.querySelector(".newGame");

newGame.addEventListener("click", function () {
  addNewGame.classList.remove("modal-hidden");
  overlay.classList.remove("hidden-overlay");
  overlay.addEventListener("click", function () {
    addNewGame.classList.add("modal-hidden");
    overlay.classList.add("hidden-overlay");
  });
});
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !addNewGame.classList.contains("modal-hidden")) {
    addNewGame.classList.add("modal-hidden");
    overlay.classList.add("hidden-overlay");
  }
});