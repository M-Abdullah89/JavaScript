//! The nextElementSibling property  is used to get the next sibling element of a specified element.
//? This property is read-only and returns the next sibling element as an Element object, or null if there is no next sibling element

const parent = document.getElementById("parent");
  const firstChild = parent.firstElementChild;
  // const firstChild = document.getElementById("first");
  const nextSibling = firstChild.nextElementSibling;
  console.log(nextSibling); // Outputs: <p id="second">Second child</p>
