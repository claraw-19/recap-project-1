const bookmark = document.querySelector('[data-js="card__bookmark"]');

bookmark.addEventListener("click", () => {
  bookmark.classList.toggle("card__bookmark--selected");
});
