//! This property gets or sets the text content of an element, ignoring any HTML tags.

const element = document.querySelector('p');
element.textContent = "<strong>Hello</strong> World!";
console.log(element.textContent); 
// Outputs: <strong>Hello</strong> World!

//! This property allows to show and edit content of hidden elements
const element2 = document.querySelector('h1');
element2.textContent;
//* shows Heading