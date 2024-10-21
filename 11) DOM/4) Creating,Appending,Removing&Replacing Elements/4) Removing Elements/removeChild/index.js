//! removeChild method is used to remove a specified child node from the DOM (Document Object Model)

// Select the parent element
const parentElement = document.getElementById("parent");

// Select the child element to be removed
const childElement = document.getElementById("child");

// Remove the child element
parentElement.removeChild(childElement);

//! removeChild requires you to specify the parent and child elements
