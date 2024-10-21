//! insertBefore method is used to insert a new node before a specified existing node as a child of that specified existing node

const newNode = document.createElement("div");
newNode.textContent = "This is a new node";

// Get a reference to the parent element
const parentElement = document.getElementById("parent");

// Get a reference to the existing child element
const existingChild = document.getElementById("child");

// Insert the new node before the existing child

parentElement.insertBefore(newNode, existingChild);

//! If you want to insert the new node at the end of the parent node’s children, you can pass null as the second argument 
//? or you can use append child method
//* uncommment the code below and comment the last code up

// parentElement.insertBefore(newNode, null);