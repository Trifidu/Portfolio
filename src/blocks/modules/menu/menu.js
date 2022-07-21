const hamburger = document.querySelector(".hamburger"),
  menu = document.querySelector(".menu"),
  closeElem = document.querySelector(".menu__close"),
  closeElemOverlay = document.querySelector(".menu__overlay");

hamburger.addEventListener("click", () => {
  menu.classList.add("active");
});

closeElem.addEventListener("click", () => {
  menu.classList.remove("active");
});
closeElemOverlay.addEventListener("click", () => {
  menu.classList.remove("active");
});

//TODO: off scroll, when menu is active.
