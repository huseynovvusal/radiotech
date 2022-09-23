const sliderGroup = document.querySelector("#slider ul");
const sliderItems = document.querySelectorAll("#slider ul li");
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");
const dots = document.querySelectorAll(".dots div");
let index = 0;
const duration = 7000;

setInterval(next, duration);

function next(e) {
  if (index < 2) index++;
  else index = 0;

  removeActive(dots);
  removeActive(sliderItems);

  sliderItems[index].classList.add("active");

  dots[index].classList.add("active");

  sliderGroup.style.left = -index * document.body.offsetWidth + "px";
}
function prev(e) {
  if (index > 0) index--;

  removeActive(dots);
  removeActive(sliderItems);

  sliderItems[index].classList.add("active");

  dots[index].classList.add("active");

  sliderGroup.style.left = -index * document.body.offsetWidth + "px";
}

function removeActive(els) {
  els.forEach((el) => {
    el.classList.remove("active");
  });
}

function goIndex(index) {
  sliderGroup.style.left = -index * document.body.offsetWidth + "px";

  removeActive(dots);
  removeActive(sliderItems);

  sliderItems[index].classList.add("active");
  dots[index].classList.add("active");
}

// prevButton.addEventListener("click", prev);
// nextButton.addEventListener("click", next);

dots.forEach((dot) => {
  dot.addEventListener("click", () => {
    goIndex(dot.getAttribute("index"));
  });
});

window.addEventListener("resize", () => {
  index = 0;
  sliderGroup.style.left = -index * window.innerWidth + "px";

  removeActive(dots);
  removeActive(sliderItems);

  sliderItems[index].classList.add("active");
  dots[index].classList.add("active");
});

document.addEventListener("keyup", (e) => {
  if (e.keyCode == 37) prev();
  if (e.keyCode == 39) next();
});
