//! parentElement property is used to get the parent element of a specified element. 
//? This property is read-only and returns the parent element as an Element object, or null if the node has no parent or if the parent is not an element node

//* similar to parentNode property but it ignores comment and whitespace text nodes

const child = document.getElementById("child");
const res = document.querySelector('#res');
console.log(child.parentElement); // Outputs: <div id="parent">...</div>
res.innerHTML=res //? [object HTMLDivElement]