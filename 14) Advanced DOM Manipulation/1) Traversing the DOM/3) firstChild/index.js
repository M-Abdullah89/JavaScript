//! The firstChild property in JavaScript is used to access the first child node of a specified element.
//? This property returns the first child node, which can be an element node, a text node, or a comment node.
//?  If the element has no child nodes, firstChild returns null 

let parentElement = document.getElementById("parent");
let firstChildNode = parentElement.firstChild;

// firstChildNode.innerText="Hello";
console.log(firstChildNode); // Outputs the first child node of the element with id "myElement"

