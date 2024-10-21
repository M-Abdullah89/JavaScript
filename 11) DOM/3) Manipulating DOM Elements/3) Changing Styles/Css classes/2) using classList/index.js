//! The classList property provides a more flexible way to work with classes. It has methods to add, remove, and toggle classes:

//? Add a class
const n1 = document.querySelector(".child1");
n1.classList.add("add");

//? remove a class
const n2 = document.querySelector(".child2");
n2.classList.remove("child2");

//? toggle a class
const myDiv = document.querySelector("#childd");
myDiv.classList.toggle("change");

//? Check if an element has a class
const n4 = document.querySelector(".child4");
console.log(n4.classList.contains("child"));//*true
if (n4.classList.contains("child")) {
    console.log("It is a child")
}
