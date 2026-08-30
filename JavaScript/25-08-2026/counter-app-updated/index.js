let count = 0;

const countElement = document.querySelector(".count");
countElement.textContent = count;

// const incrementBtn = document.querySelector(".inc");
// incrementBtn.addEventListener("click", () => {
//   count++; // count = count + 1
//   countElement.textContent = count;
// });

// const decrementBtn = document.querySelector(".inc");
// decrementBtn.addEventListener("click", () => {
//   count--; // count = count - 1;
//   countElement.textContent = count;
// });

// const resetBtn = document.querySelector(".inc");
// resetBtn.addEventListener("click", () => {
//   count = 0;
//   countElement.textContent = count;
// });

const performIncrement = () => {
  count++; // count = count + 1
  countElement.textContent = count;
};

const performDecrement = () => {
  count--; // count = count - 1
  countElement.textContent = count;
};

const performReset = () => {
  count = 0;
  countElement.textContent = count;
};
