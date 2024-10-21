//? To clone nodes, you can use the cloneNode() method. This method creates a copy of the node on which it is called
//! Be cautious with IDs, as cloning nodes with IDs can lead to duplicate IDs in the document, which is invalid HTML

//* There are two types of clone


//! 1) Shallow clone
//? Copies only the node itself, without its child nodes.
//* Syntax: node.cloneNode(false)

let originalNode = document.getElementById("parent1");
let shallowClone = originalNode.cloneNode(false);

document.body.appendChild(shallowClone);// the text content in parent1 is not cloned. To clone it we can do 
shallowClone.textContent = originalNode.textContent // the text content is copied(i.e same as original node)

//! 2) Deep clone
//? Copies the node and all of its descendants (child nodes).
//* syntax: node.cloneNode(true)

let originalNode2 = document.getElementById("parent2");
let deepClone = originalNode2.cloneNode(true);
document.body.appendChild(deepClone); //? textContent and its child are also copied