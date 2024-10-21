//! The element.dispatchEvent() method is used to trigger an event on a specified element programmatically
//? This can be useful for testing event handlers or creating custom events
//* syntax: element.dispatchEvent(event);

  // Select the button element
  const button = document.getElementById('myButton');

  // Add an event listener to the button
  button.addEventListener('click', function() {
    console.log("Button clicked")
  });

  // Create a new click event
  const clickEvent = new Event('click');

  // Dispatch the event on the button
  button.dispatchEvent(clickEvent);
//? dispatchEvent triggers the event listener as if the button was clicked by the user.
