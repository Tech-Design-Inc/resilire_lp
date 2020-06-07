const btn = document.querySelector(".menu");
const ul = document.querySelector("ul");

btn.addEventListener("click", () => {
  ul.classList.toggle("open-menu");
});
