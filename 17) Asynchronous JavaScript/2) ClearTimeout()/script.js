//! clearTimout cancels a timeout set by setTimeout()
const btn = document.querySelector("button");
const myTimeout = setTimeout(() => {
   alert("Hello, world!");
}, 5000);

btn.addEventListener("click", () => {
   clearTimeout(myTimeout);
});