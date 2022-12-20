"use strict";
// ------------------modal__Sing-in
const overlay = document.querySelector(".hidden-overlay");
const headerNav = document.querySelector(".header__nav__sign-in")
const singIn = document.querySelector(".header__nav__sign-in");
const authorization = document.querySelector(".authorization");
function singInClick() {
  inputName.value = "";
  inputPassword.value = "";
  authorization.classList.remove("modal-hidden");
  overlay.classList.remove("hidden-overlay");
  headerNav.classList.add("hidden");
  overlay.addEventListener("click", function () {
    authorization.classList.add("modal-hidden");
    overlay.classList.add("hidden-overlay");
  });
};
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !authorization.classList.contains("modal-hidden")) {
    authorization.classList.add("modal-hidden");
    overlay.classList.add("hidden-overlay");
  }
});
