// select the modal btn, modal overlay and close btn

const modalBtn = document.querySelector(".modal-btn");
const modal = document.querySelector(".modal-overlay");
const closeBtn = document.querySelector(".close-btn");

//listen for click events on the button
modalBtn.addEventListener("click", () => {
  modal.classList.add("open-modal");
});
closeBtn.addEventListener("click", () => {
  modal.classList.remove("open-modal");
});
