//! In event handlers this typically refers to the element that received the event

document.querySelector("button").addEventListener("click", function () {
  console.log(this); // logs the button element
});

//!The keyword this when used in an event handler refers to the element that received the event.