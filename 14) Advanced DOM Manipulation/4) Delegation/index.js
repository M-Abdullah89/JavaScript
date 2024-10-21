//! Event delegation in JavaScript is a technique that leverages event propagation (bubbling) to handle events more efficiently.
//? Instead of adding an event listener to each individual element, you attach a single event listener to a parent element. 
// ?This listener can then manage all events that bubble up from its child elements.

document.getElementById('parent').addEventListener('click', function(event) {
    if (event.target.tagName === 'BUTTON') { //! Must be uppercase
      console.log(event.target.innerText + ' was clicked');
    }
  });