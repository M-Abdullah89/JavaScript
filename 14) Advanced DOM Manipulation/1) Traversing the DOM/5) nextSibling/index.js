//! The nextSibling property  is used to access the next sibling node of a specified node in the DOM tree. 
//? This property returns the next sibling node, which can be an element node, a text node, or a comment node.
//* If the specified node is the last child, nextSibling returns null
let currentNode = document.getElementById("child1");
let nextSiblingNode = currentNode.nextSibling;

console.log(nextSiblingNode); // Outputs the next sibling node of the element with id "myElement"
