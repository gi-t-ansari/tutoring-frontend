const sliderContainer = document.querySelector("#slider");

const sliderOpenBtn = document.querySelector("#slider-btn");

sliderOpenBtn.addEventListener("click", () => {
  sliderContainer.classList.add("open-slider");
});

const sliderCloseBtn = document.querySelector("#close-button");

sliderCloseBtn.addEventListener("click", () => {
  sliderContainer.classList.remove("open-slider");
});

const popupContainer = document.querySelector("#popup");

const popupOpenBtn = document.querySelector("#popup-btn");

popupOpenBtn.addEventListener("click", () => {
  popupContainer.classList.add("open-popup");
});

const popupCloseBtns = document.querySelectorAll(".p-btn");

for (let popupCloseBtn of popupCloseBtns) {
  popupCloseBtn.addEventListener("click", () => {
    popupContainer.classList.remove("open-popup");
  });
}
