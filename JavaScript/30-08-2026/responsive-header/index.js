const humburgerIcon = document.querySelector(".humberger");
const rightElement = document.querySelector(".right");

humburgerIcon.addEventListener("click", (event) => {
  if (rightElement.classList.contains("active")) {
    rightElement.classList.remove("active");
  } else {
    rightElement.classList.add("active");
  }
  console.log(rightElement.classList);
});
