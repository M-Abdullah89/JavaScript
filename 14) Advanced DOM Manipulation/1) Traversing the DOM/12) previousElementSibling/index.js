//! The previousElementSibling property is used to return the previous element sibling of a specified element.
//? This property is read-only and returns null if the specified element is the first one in the list.

let currentElement = document.querySelector('.current2');
let previousElement = currentElement.previousElementSibling;

console.log(previousElement); // Logs the previous sibling element
