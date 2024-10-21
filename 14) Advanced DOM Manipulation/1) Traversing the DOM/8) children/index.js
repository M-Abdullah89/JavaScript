//! the children property is used to get a live HTMLCollection of all child elements of a specified element.
//? This property only includes element nodes, not text or comment nodes
const parent = document.getElementById("parent");
const children = parent.children;
console.log(children);

//? In this example, parent.children returns an HTMLCollection of the three <p> elements inside the <div> with the id of “parent”.

//* it returns an array which changes dynamically if there is a change in html.