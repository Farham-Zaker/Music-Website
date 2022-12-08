// Left part of main
const weekBtn = document.querySelector("main .left .buttons-container .week");
const monthBtn = document.querySelector("main .left .buttons-container .month");
const yearBtn = document.querySelector("main .left .buttons-container .year");

weekBtn.classList.add("change-color-of-border");

const bestOfweek = document.querySelector("main .best-of-week");
const bestOfMonth = document.querySelector("main .best-of-month");
const bestOfYear = document.querySelector("main .best-of-year");

bestOfweek.classList.remove("inactive");
bestOfMonth.classList.add("inactive");
bestOfYear.classList.add("inactive");

weekBtn.addEventListener("click", () => {
  weekBtn.classList.add("change-color-of-border");
  monthBtn.classList.remove("change-color-of-border");
  yearBtn.classList.remove("change-color-of-border");

  bestOfweek.classList.remove("inactive");
  bestOfMonth.classList.add("inactive");
  bestOfYear.classList.add("inactive");
});
monthBtn.addEventListener("click", () => {
  monthBtn.classList.add("change-color-of-border");
  weekBtn.classList.remove("change-color-of-border");
  yearBtn.classList.remove("change-color-of-border");

  bestOfweek.classList.add("inactive");
  bestOfMonth.classList.remove("inactive");
  bestOfYear.classList.add("inactive");
});
yearBtn.addEventListener("click", () => {
  weekBtn.classList.remove("change-color-of-border");
  monthBtn.classList.remove("change-color-of-border");
  yearBtn.classList.add("change-color-of-border");

  bestOfweek.classList.add("inactive");
  bestOfMonth.classList.add("inactive");
  bestOfYear.classList.remove("inactive");
});

// Right of main

const iranianbuttons = document.querySelectorAll(
  "main .right .buttons-container button.iranian"
);

iranianbuttons.forEach((iranianbtn) => {
  let iranianPart = iranianbtn.parentElement.nextElementSibling;
  let foreignerPart = iranianbtn.parentElement.nextElementSibling.nextElementSibling;

  foreignerPart.classList.add('inactive');
  iranianbtn.classList.add("change-color-of-border");
  
  let foreignerBtn = iranianbtn.nextElementSibling;

  iranianbtn.addEventListener("click", () => {
    iranianbtn.classList.add("change-color-of-border");
    foreignerBtn.classList.remove("change-color-of-border");

    foreignerPart.classList.add("inactive");
    iranianPart.classList.remove("inactive");
  });
});

const foreignerbuttons = document.querySelectorAll(
  "main .right .buttons-container button.foreigner"
);

foreignerbuttons.forEach((foreignerBtn) => {
  let iranianPart = foreignerBtn.parentElement.nextElementSibling;
  let foreignerPart = foreignerBtn.parentElement.nextElementSibling.nextElementSibling;
  let iranianBtn = foreignerBtn.previousElementSibling;

  foreignerBtn.addEventListener("click", () => {
    foreignerBtn.classList.add("change-color-of-border");
    iranianBtn.classList.remove("change-color-of-border");

    iranianPart.classList.add("inactive");
    foreignerPart.classList.remove("inactive");
  });
});
