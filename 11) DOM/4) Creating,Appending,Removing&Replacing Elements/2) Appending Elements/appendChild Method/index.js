//! the appendChild() method is used to add a new child node to the end of the list of children of a specified parent node.
//?  This method is commonly used in DOM manipulation to dynamically add new elements to an existing HTML structure
//! This method is not safe
const newParagraph1 = document.createElement("p");
newParagraph1.innerText="Hello"

document.body.appendChild(newParagraph1);

//! This is safe method
const newParagraph2 = document.createElement("p");
const textContent = document.createTextNode("This is a new paragraph.");
newParagraph2.appendChild(textContent);
document.body.appendChild(newParagraph2);
    