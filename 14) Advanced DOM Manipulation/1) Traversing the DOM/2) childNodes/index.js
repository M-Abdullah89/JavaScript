//! childNodes property in JavaScript is used to access a live NodeList of all child nodes of a specified element.
//?  This includes not only element nodes but also text nodes and comment nodes and whitespaces
//? updates automatically when the DOM changes.
//? returns an array of nodes

// Get the child nodes of the body element
const nodeList = document.body.childNodes;
console.log(nodeList)
// Loop through the child nodes
nodeList.forEach(node => {
  console.log(node);
});




