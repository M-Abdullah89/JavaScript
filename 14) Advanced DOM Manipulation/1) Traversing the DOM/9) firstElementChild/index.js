//! The firstElementChild property  is used to get the first child element of a specified element.
//? This property is read-only and returns the first child element as an Element object, or null if there are no child elements

const parent = document.getElementById("parent");
  const firstChild = parent.firstElementChild;
  console.log(firstChild); // Outputs: <p>First child</p>
//? In this example, parent.firstElementChild returns the first <p> element inside the <div> with the id of “parent”.