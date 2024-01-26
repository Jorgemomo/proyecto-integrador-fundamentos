// modal para nosotros
const openModal = document.querySelector(".btn--about");
const closeModalBtn = document.querySelector(".closeModal");
const modal = document.querySelector("#modal");
function modalAbout() {
  modal.showModal();
}

function closeModal() {
  modal.close();
}

openModal.addEventListener("click", modalAbout);
closeModalBtn.addEventListener("click", closeModal);