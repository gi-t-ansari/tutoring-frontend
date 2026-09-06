// const DUMMY_TASK_DATA = [
//   { id: 1, title: "Task 1" },
//   { id: 2, title: "Task 2" },
//   { id: 3, title: "Task 3" },
//   { id: 4, title: "Task 4" },
//   { id: 5, title: "Task 5" },
// ];

const sliderElement = document.querySelector("#slider");

const openSliderBtn = document.querySelector("#task-btn");

openSliderBtn.addEventListener("click", () => {
  sliderElement.classList.add("open-slider");
});

const closeSliderBtn = document.querySelector("#slider-close-btn");

closeSliderBtn.addEventListener("click", () => {
  sliderElement.classList.remove("open-slider");
});

const popupElement = document.querySelector("#success-popup");

const formElement = document.querySelector("#task-form");

const tableBodyElement = document.querySelector("#table-body");

formElement.addEventListener("submit", (event) => {
  event.preventDefault();

  const title = formElement.querySelector("#task-title").value;

  console.log({ title });

  sliderElement.classList.remove("open-slider");

  popupElement.classList.add("open-popup");

  formElement.reset();
});

const popupCloseBtn = document.querySelector("#popup-close-btn");
popupCloseBtn.addEventListener("click", () => {
  popupElement.classList.remove("open-popup");
});

// for (let tableData of DUMMY_TASK_DATA) {
//   console.log(tableData);
//   const tableRowElement = document.createElement("tr");
//   tableRowElement.classList.add("t-row");

//   const firstTdElement = document.createElement("td");
//   firstTdElement.classList.add("t-data");
//   firstTdElement.textContent = tableData.id;
//   tableRowElement.append(firstTdElement);

//   const secondTdElement = document.createElement("td");
//   secondTdElement.classList.add("t-data");
//   secondTdElement.textContent = tableData.title;
//   tableRowElement.append(secondTdElement);

//   const thirdTdElement = document.createElement("td");
//   thirdTdElement.classList.add("t-data");
//   thirdTdElement.textContent = tableData.id;
//   tableRowElement.append(thirdTdElement);

//   tableBodyElement.append(tableRowElement);
//   console.log(tableBodyElement.innerHTML);
// }
