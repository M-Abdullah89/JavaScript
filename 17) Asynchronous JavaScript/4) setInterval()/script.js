const start = document.querySelector(".start");
const stop = document.querySelector(".stop");
const timer = document.querySelector(".timer");

//! run the code every interval of time

let startcounter;
let counter = 0;
start.addEventListener("click", () => {
  startcounter = setInterval(() => {
    counter++;
    timer.textContent = counter;
  }, 1000);
});
stop.addEventListener("click", () => {
  clearInterval(startcounter);
});
