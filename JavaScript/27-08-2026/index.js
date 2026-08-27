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

// 3. Change/input event => for all types of inputs
const nameInput = document.querySelector("#name-input");
nameInput.addEventListener("input", (event) => {
  console.log(event);
  console.log(event.target.value);
});

const emailInput = document.querySelector("#email-input");
emailInput.addEventListener("change", (event) => {
  console.log(event);
  console.log(event.target.value);
});

const textboxInput = document.querySelector("#textbox-input");
textboxInput.addEventListener("change", (event) => {
  console.log(event.target.value);
});

let isMarried = "";

// const firstRadioInput = document.querySelector("#yes-option");
// firstRadioInput.addEventListener("change", (event) => {
//   isMarried = event.target.value;
//   console.log(isMarried);
// });

// const secondRadioInput = document.querySelector("#no-option");
// secondRadioInput.addEventListener("change", (event) => {
//   isMarried = event.target.value;
//   console.log(isMarried);
// });

const radioInputs = document.querySelectorAll(".radio-input");

for (let radioInput of radioInputs) {
  radioInput.addEventListener("change", (event) => {
    isMarried = event.target.value;
    console.log(isMarried);
  });
}

let pets = [];

const checkboxInputs = document.querySelectorAll(".checkbox-input");

for (let checkboxInput of checkboxInputs) {
  checkboxInput.addEventListener("change", (event) => {
    // console.log(event.target.checked);
    if (event.target.checked) {
      console.log(event);
      pets.push(event.target.value);
      console.log(pets);
    } else {
      pets = pets.filter((ele) => ele !== event.target.value);
      console.log(pets);
    }
  });
}

const selectInput = document.querySelector("#select-input");

selectInput.addEventListener("change", (event) => {
  console.log(event.target.value);
});

// event bubbling -> effect
// stop propagation -> method/function to stop event bubbling

const btnContainer = document.querySelector("#btn-container");
btnContainer.addEventListener("click", () => {
  console.log("btn container is clicked");
});

const btnEle = document.querySelector("#btn-element");
btnEle.addEventListener("click", (event) => {
  event.stopPropagation();
  console.log("btn element is clicked");
});

// 4. Submit event -> associated with forms

const signinForm = document.querySelector("#signin-form");

signinForm.addEventListener("submit", (event) => {
  event.preventDefault(); // prevents browser's default behaviour.
  const email = signinForm.querySelector("#email-input").value;
  const password = signinForm.querySelector("#password-input").value;
  console.log("sign in form values", { userMail: email, password });
});

// 5. mouse enter
btnContainer.addEventListener("mouseenter", (event) => {
  console.log("mouser entered");
});

// 6. mouse leave
btnContainer.addEventListener("mouseleave", (event) => {
  console.log("mouser leave");
});
