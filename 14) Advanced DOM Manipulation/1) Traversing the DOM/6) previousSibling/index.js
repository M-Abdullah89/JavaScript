//! The previousSibling property is used to access the previous sibling node of a specified node in the DOM tree.
//? This property returns the previous sibling node, which can be an element node, a text node, or a comment node.
//? If the specified node is the first child, previousSibling returns null

let currentNode = document.getElementById("child2");
let previousSiblingNode = currentNode.previousSibling;

console.log(previousSiblingNode); // Outputs the previous sibling child1
