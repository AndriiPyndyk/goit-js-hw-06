const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientList = document.querySelector("#ingredients");

const listElements = ingredients.map((ingredient) => {
  const listItem = document.createElement("li");

  listItem.textContent = ingredient;
  listItem.classList.add("item");

  return listItem;
});

ingredientList.append(...listElements);
