const add = document.querySelector(".add");
const subtract = document.querySelector(".subtract");
const reset = document.querySelector(".reset");
const result = document.querySelector(".result");

var i = 0;

add.addEventListener("click", () => {
  i++;
  result.textContent = i;
});
subtract.addEventListener("click", () => {
  if (i == 0) {
    result.textContent = "";
  } else {
    i--;
    result.textContent = i;
  }
});

reset.addEventListener("click", () => {
  i = 0;
  result.textContent = "";
});
