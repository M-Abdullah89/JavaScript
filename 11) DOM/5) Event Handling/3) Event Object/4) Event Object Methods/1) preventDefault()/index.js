//! Prevents the default action associated with the event

document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevents the form from submitting
    console.log("Form submission prevented.");
});
