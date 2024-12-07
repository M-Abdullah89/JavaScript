let slider = document.querySelector(".slider");
let nextbtn = document.querySelector(".next");
let prevbtn = document.querySelector(".prev");

nextbtn.addEventListener("click", () => {
    slider.append(slider.querySelector('img:first-of-type'));
});

prevbtn.addEventListener("click", () => {
    slider.prepend(slider.querySelector('img:last-of-type'));
});