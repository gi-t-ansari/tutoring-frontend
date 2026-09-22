const DUMMY_TASK_DATA = [
  { id: 1, title: "Task 1" },
  { id: 2, title: "Task 2" },
  { id: 3, title: "Task 3" },
  { id: 4, title: "Task 4" },
  { id: 5, title: "Task 5" },
];

const tableBodyElement = document.querySelector("#table-body");

// tableBodyElement.innerHTML = `<tr class="t-row">
//                                   <td class="t-data">1</td>
//                                   <td class="t-data">Task 1</td>
//                               </tr>`;

for (let taskData of DUMMY_TASK_DATA) {
  // tableBodyElement.innerHTML = tableBodyElement.innerHTML + `<tr class="t-row">
  //       <td class="t-data">${taskData.id}</td>
  //       <td class="t-data">${taskData.title}</td>
  //   </tr>`;

  tableBodyElement.innerHTML += `<tr class="t-row">
        <td class="t-data">${taskData.id}</td>
        <td class="t-data">${taskData.title}</td>
    </tr>`;

  // console.log("table body inner html", tableBodyElement.innerHTML);
}

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

formElement.addEventListener("submit", (event) => {
  event.preventDefault();

  const title = formElement.querySelector("#task-title").value;

  // console.log({ title });\

  tableBodyElement.innerHTML += `<tr class="t-row">
        <td class="t-data">${DUMMY_TASK_DATA.length + 1}</td>
        <td class="t-data">${title}</td>
    </tr>`;

  sliderElement.classList.remove("open-slider");

  popupElement.classList.add("open-popup");

  formElement.reset();
});

const popupCloseBtn = document.querySelector("#popup-close-btn");
popupCloseBtn.addEventListener("click", () => {
  popupElement.classList.remove("open-popup");
});

const addtwoNumber = (a, b) => {
  return a + b;
};

addtwoNumber(1, 2);
addtwoNumber(2, 3);
