const slider = document.querySelector(".carousel-images");
const slides = document.querySelectorAll(".carousel-image");
const prev_button = document.getElementById("prev-button");
const next_button = document.getElementById("next-button");

let current = 0;
let prev = 4;
let next = 1;

const gotoPrev = () =>
  current > 0 ? gotoNum(current - 1) : gotoNum(slides.length - 1);

const gotoNext = () =>
  current < slides.length - 1 ? gotoNum(current + 1) : gotoNum(0);

const gotoNum = (number) => {
  current = number;
  prev = current - 1;
  next = current + 1;

  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active");
    slides[i].classList.remove("prev");
    slides[i].classList.remove("next");
  }

  if (next === slides.length) {
    next = 0;
  }

  if (prev === -1) {
    prev = 4;
  }

  slides[current].classList.add("active");
  slides[prev].classList.add("prev");
  slides[next].classList.add("next");
};

prev_button.addEventListener("click", () => gotoPrev());
next_button.addEventListener("click", () => gotoNext());
