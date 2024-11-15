const bookmark = document.querySelector('[data-js="card__bookmark"]');

bookmark.addEventListener("click", () => {
  bookmark.classList.toggle("card__bookmark--selected");
});

const showButton = document.querySelector('[data-js="button"]');
const solution = document.querySelector('[data-js="solution"]');

showButton.addEventListener("click", () => {
  solution.toggleAttribute("hidden");
  showButton.innerText = solution.hasAttribute("hidden")
    ? "Show answer"
    : "Hide answer";
});
