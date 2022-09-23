const hamburger = document.querySelector(".hamburger");
const ul = document.querySelector(".nav-list");
const navLinks = document.querySelectorAll("nav ul li a");
const nav = document.querySelector("nav");

hamburger.addEventListener("click", () => {
  ul.classList.toggle("active");
  document.body.classList.toggle("stop-scrolling");
});

window.addEventListener("resize", () => {
  ul.classList.remove("active");
  document.body.classList.remove("stop-scrolling");
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 0) nav.classList.add("scrolled");
  else nav.classList.remove("scrolled");
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    ul.classList.remove("active");
    document.body.classList.remove("stop-scrolling");
  });
});
