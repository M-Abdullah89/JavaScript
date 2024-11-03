const yes = document.querySelector(".Yes");
const no = document.querySelector(".No");
const res = document.querySelector(".res");
const img = document.querySelector("img");
no.addEventListener("click", () => {
  res.textContent = "I don't give a fuck";
  res.style.visibility = "visible";
  img.style.visibility = "visible";
});

yes.addEventListener("click", () => {
  res.textContent = "I love you too";
  res.style.visibility = "visible";
});

no.addEventListener("mouseover", () => {
  moveElement(
    no,
    Math.floor(Math.random() * 300),
    Math.floor(Math.random() * 300)
  );
});

no.addEventListener("touchstart", (event) => {
  event.preventDefault();
  moveElement(
    no,
    Math.floor(Math.random() * 400),
    Math.floor(Math.random() * 400)
  );
});

function moveElement(element, x, y) {
  element.style.transiton = "none";
  element.style.left = x + "px";
  element.style.top = y + "px";
}
