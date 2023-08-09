const body = document.body;
const slides = document.querySelectorAll(".slide");
const leftBtn = document.querySelector("#left");
const rightBtn = document.querySelector("#right");

let activeSlide = 0;

setBgToBoddy();

function setBgToBoddy() {
  body.style.backgroundImage = slides[activeSlide].style.backgroundImage;
}
