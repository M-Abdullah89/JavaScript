//! The Event constructor is used to create a new Event object, which can then be dispatched to an element.
//? This is particularly useful for creating custom events or simulating user interactions
//* Syntax: new Event(type, options);

// Creating a new event

const event = new Event('build', {
    bubbles: true,
    cancelable: true
  });
  
// Add an event listener for the custom event
  document.addEventListener('build', function(e) {
    console.log('The build event was triggered!');
  });
  
// Now the eventlistener is created . It is a custom event so it is activated automatically .
// it will not work because it is not dispatched
  