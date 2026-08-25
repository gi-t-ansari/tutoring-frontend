// const numbers = [1, 2, 3, 5, 6];

// for (let i = 0; i <= numbers.length - 1; i++) {
//   //   console.log(numbers[i]);
// }

// // for of loop: specifically built for array's iterations.
// for (number of numbers) {
//   //   console.log(number);
// }

// const findSum = (arr) => {
//   let sum = 0;
//   for (num of arr) {
//     sum = sum + num;
//   }
//   console.log(sum);
// };

// // findSum(numbers);

// // for in loop: specifically build for object's iteration.

// const student = {
//   name: "Neha",
//   age: 31,
//   hasChildren: true,
// };

// // student["name"];
// // student.age;

// for (key in student) {
//   console.log(student[key]);
// }

// accessing of elements with tag name: returns collection of data or a single data
const divs = document.getElementsByTagName("div");
console.log("result of divs -->", divs);

const heading = document.getElementsByTagName("h1");
console.log("result of heading --> ", heading);

const divsByClassName = document.getElementsByClassName("box");
console.log("result of divsByClassName -->", divsByClassName);

const footerElement = document.getElementById("footer");
console.log("result of footerElement -->", footerElement);
console.log("inner text of footer -->", footerElement.innerText);

// let updatedNumber = footerElement.innerText + 1;

footerElement.innerText = 0;

for (eachDiv of divs) {
  //   eachDiv.innerText = "Box";
}

for (eachHeader of heading) {
  eachHeader.innerText = "Header";
}

heading[0].innerText = "Some heading";

const firstDiv = document.querySelector("div");
console.log("result of firstDiv -->", firstDiv);

const allDivs = document.querySelectorAll("div");
console.log("result of allDivs -->", allDivs);

const footerAccessedByQuery = document.querySelector("#footer");
console.log("result of footerAccessedByQuery -->", footerAccessedByQuery);

const allDivsQueryClass = document.querySelectorAll(".box");
console.log("result of allDivsQueryClass -->", allDivsQueryClass);

firstDiv.innerText = "First box";

const containerDiv = document.querySelector(".container");

console.log("inner html of containerDiv", containerDiv.innerHTML);

containerDiv.innerHTML = "<span>single span</span> <span>second tag</span>";

console.log("inner html of containerDiv after update", containerDiv.innerHTML);

// attribute related access and manupulation.
const imageElement = document.querySelector("img");

console.log("src value -->", imageElement.getAttribute("src"));

imageElement.setAttribute("src", "image src values");
imageElement.setAttribute("alt", "some-image");

console.log("imag have src", imageElement.hasAttribute("src"));

imageElement.removeAttribute("src");

console.log("imag have src", imageElement.hasAttribute("src"));

// class related access and manupulation.
const diveWithClasses = document.querySelector("#box-element");

console.log("classes in diveWithClasses -->", diveWithClasses.classList);

console.log(
  "checks class existence",
  diveWithClasses.classList.contains("box"),
);
console.log(
  "checks class existence",
  diveWithClasses.classList.contains("some-box"),
);

diveWithClasses.classList.add("some-box");

console.log("classes in diveWithClasses -->", diveWithClasses.classList);

diveWithClasses.classList.add("active");

console.log("classes in diveWithClasses -->", diveWithClasses.classList);

diveWithClasses.classList.remove("active");

console.log("classes in diveWithClasses -->", diveWithClasses.classList);

// style manupulation.
diveWithClasses.style.backgroundColor = "blue";
diveWithClasses.style.height = "200px";
diveWithClasses.style.width = "200px";
diveWithClasses.style.borderRadius = "10px";
diveWithClasses.style.marginTop = "10px";

// creation and addition of new elements
const paragraphElement = document.createElement("p");
paragraphElement.innerText = "paragraph";

diveWithClasses.append(paragraphElement);

const headingElement = document.createElement("h2");
headingElement.innerText = "QTrip";
diveWithClasses.appendChild(headingElement);

// accessing and removing through parenet element
// diveWithClasses.removeChild(headingElement);

// accessing and removing itself
// paragraphElement.remove();
console.log("parent of paragraph -->", paragraphElement.parentElement);
console.log("parent of diveWithClasses -->", diveWithClasses.parentElement);

// events & event listeners

// 1. Click event

const btnElement = document.querySelector("#btn");
btnElement.addEventListener("click", (event) => {
  //   console.log(event);
  console.log("btn is clicked");
});

btnElement.addEventListener("dblclick", (event) => {
  //   console.log(event);
  console.log("btn is double clicked");
});
