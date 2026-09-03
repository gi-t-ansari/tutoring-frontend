const imageInput = document.querySelector("#image");
const imageElement = document.querySelector("#image-element");

imageInput.addEventListener("change", (event) => {
  console.log(event.target.files);
  //   console.log(URL.createObjectURL(event.target.files[0]));

  imageElement.setAttribute("src", URL.createObjectURL(event.target.files[0]));
});

const multiImageInput = document.querySelector("#multiple-image");

multiImageInput.addEventListener("change", (event) => {
  console.log(event.target.files);
  //   console.log(event.target.files[2]);
  const imagesContainerElement = document.querySelector("#multiple-images");

  for (let file in event.target.files) {
    const imageElement = document.createElement("img");
    imageElement.style.height = "200px";
    imageElement.style.width = "100px";
    imageElement.setAttribute(
      "src",
      URL.createObjectURL(event.target.files[file]),
    );

    imagesContainerElement.append(imageElement);
  }
});

// const someObject = { name: "some name", age: 11, gender: "male" };

// for (let key in someObject) {
//   console.log(key);
// }

const dateInput = document.querySelector("#date-input");
dateInput.addEventListener("change", (event) => {
  console.log(event.target.value);
});

const timeInput = document.querySelector("#time-input");
timeInput.addEventListener("change", (event) => {
  console.log(event.target.value);
});

// const files = {
//   0: { file: "some time" },
//   1: { file: "fimle name" },
// };

// files[0];

// for (let file in files) {
//   console.log(file);
// }
