const form = document.querySelector('[data-js="form"]');
const cardContainer = document.querySelector('[data-js="card-container"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);
  //   console.log("data:", data);

  const cardList = document.createElement("ul");
  cardList.classList.add("card-list");

  const card = document.createElement("li");
  card.classList.add("card");

  const question = document.createElement("p");
  question.classList.add("card__question");
  question.innerHTML = data.question;

  const button = document.createElement("button");
  button.classList.add("button");
  button.innerHTML = "Show answer";

  const answer = document.createElement("p");
  answer.classList.add("card__answer");
  answer.innerHTML = data.answer;

  const cardTag = document.createElement("div");
  cardTag.classList.add("card__tag");

  const tagCategory = document.createElement("p");
  tagCategory.classList.add("card__tag-category");
  tagCategory.innerHTML = `#${data.tag}`;

  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("class", "card__bookmark");
  svg.setAttribute("data-js", "card__bookmark");
  svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  svg.setAttribute("width", "28");
  svg.setAttribute("height", "28");
  svg.setAttribute("viewBox", "0 0 24 24");
  svg.setAttribute("fill", "var(--complement-color-2)");
  svg.setAttribute("stroke", "var(--complement-color-1)");
  svg.setAttribute("stroke-width", "2.5");
  svg.setAttribute("stroke-linecap", "round");
  svg.setAttribute("stroke-linejoin", "round");
  const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path.setAttribute("d", "m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z");
  svg.appendChild(path);

  cardContainer.appendChild(cardList);
  cardList.appendChild(card);
  card.appendChild(question);
  card.appendChild(button);
  card.appendChild(answer);
  card.appendChild(cardTag);
  cardTag.appendChild(tagCategory);
  card.appendChild(svg);

  form.reset();
});
