const formElement = document.querySelector(".form");

formElement.addEventListener("submit", (event) => {
  event.preventDefault();

  const email = formElement.querySelector("#email-input").value;
  const password = formElement.querySelector("#password-input").value;
  const confirmPassword = formElement.querySelector(
    "#confirm-password-input",
  ).value;

  if (password === confirmPassword) {
    console.log({ email, password, confirmPassword });
    formElement.reset(); // resets all the inputs inside form
  } else {
    alert("Password and confirm password must be same.");
  }
});
