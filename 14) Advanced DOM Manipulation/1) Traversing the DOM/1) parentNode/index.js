//! The parentNode property in JavaScript is used to access the parent node of a specified node in the DOM (Document Object Model) tree. 
//? if the node has no parent, it returns null

let parent = document.getElementById("child1").parentNode;
const button = document.querySelector('button');
const text = document.getElementById("text");

console.log(parent); //* Logs the parent node of the element with id "child1"
button.addEventListener('click', ()=>{
    parent.remove();
    text.innerText="parent is deleted which means all his childs are deleted too"
})

//! There is a way we can remove a parent without deleting its 

 // Get the parent and new parent elements
 const parent2 = document.getElementById('parent2');
 const newParent = document.getElementById('newparent');

 // Move all child nodes to the new parent
 while (parent2.firstChild) {
   newParent.appendChild(parent2.firstChild);
 }

 // Remove the original parent
 parent2.remove();

//! it first appends the childs of the parent to a new parent and then removes the parent