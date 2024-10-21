//! A DocumentFragment is a lightweight container used to hold and manipulate a group of DOM nodes
//? It’s not part of the main DOM tree, which means changes made to it don’t affect the document until it’s appended to the DOM. 
//?This makes it useful for batch operations, improving performance by reducing reflows and repaints.

// Create a DocumentFragment
let fragment = document.createDocumentFragment();

// Array of items to add
let items = ['Item 1', 'Item 2', 'Item 3'];

// Create and append list items to the fragment

items.forEach((value) => {
    let li = document.createElement('li');
  li.textContent = value;
  fragment.appendChild(li);
})

// Append the fragment to the DOM
document.getElementById('myList').appendChild(fragment);

//? a DocumentFragment has no parent, making it a standalone container.
//? It is a smaller, more efficient version of a Document, designed to hold a portion of the DOM temporarily.
//? Changes made to a DocumentFragment do not affect the live DOM, allowing for efficient updates.


// Create a document fragment
const fragment2 = document.createDocumentFragment();

// Create some elements
const div1 = document.createElement('div');
div1.textContent = 'Hello';
const div2 = document.createElement('div');
div2.textContent = 'World';

// Append elements to the fragment
fragment2.appendChild(div1);
fragment2.appendChild(div2);

// Append the fragment to the document body
document.body.appendChild(fragment2);
