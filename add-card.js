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

  cardContainer.appendChild(cardList);
  cardList.appendChild(card);

  form.reset();
  // console.log(`The age-badness-sum of ${data.firstName} is ${ageBadnessSum}`);
});
