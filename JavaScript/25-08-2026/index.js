// EVENTS AND EVENT LISTENERS
// EVENTS -> ANY TYPE OF USER INTERACTION
// EVENT LISTENERS -> PARTICULAR ACTION WITH RESPECT TO THE EVENT

const btnElement = document.querySelector("#btn");

// 1. Click Event & listener
btnElement.addEventListener("click", () => {
  console.log("btn is clicked");
});

const divElement = document.querySelector("#box");

divElement.addEventListener("click", () => {
  console.log("box element is clicked");
});

// 2. Double click & listener
btnElement.addEventListener("dblclick", () => {
  console.log("btn is double click");
});

// 3. On change/input event
const nameInput = document.querySelector("#name-input");
nameInput.addEventListener("input", (event) => {
  console.log(event);
  console.log(event.target.value);
});

const emailInput = document.querySelector("#email-input");
emailInput.addEventListener("input", (event) => {
  console.log(event);
  console.log(event.target.value);
});
