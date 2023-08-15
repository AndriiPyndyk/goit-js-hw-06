const decrementButton = document.querySelector("[data-action = 'decrement']");
const incrementButton = document.querySelector("[data-action = 'increment']");
const counterValue = document.querySelector("#value");

let currentCounterValue = 0;

decrementButton.addEventListener("click", () => {
  currentCounterValue -= 1;
  updateValue();
});

incrementButton.addEventListener("click", () => {
  currentCounterValue += 1;
  updateValue();
});

function updateValue() {
  counterValue.textContent = currentCounterValue;
}
