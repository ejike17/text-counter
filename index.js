const maxChar = 50;
const totalCharEl = document.getElementById("total-counter");
const remainingCharEl = document.getElementById("remaining-counter");
const textAreaEl = document.getElementById("textarea");

textAreaEl.addEventListener("keyup", () => {
  updateCounter();
});

function updateCounter() {
    totalCharEl.innerText = textAreaEl.value.length;
    remainingCharEl.innerText = maxChar - textAreaEl.value.length
}
