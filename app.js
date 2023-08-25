const shareBtn = document.querySelectorAll(".share-btn");

const shareSection = document.querySelector(".share-section");
const person = document.querySelector(".person");

shareBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    shareSection.classList.toggle("disable");
    console.log(window.innerWidth);
    if (window.innerWidth >= 1080) {
      person.classList.remove("disable");
      return;
    }
    person.classList.toggle("disable");
  });
});
