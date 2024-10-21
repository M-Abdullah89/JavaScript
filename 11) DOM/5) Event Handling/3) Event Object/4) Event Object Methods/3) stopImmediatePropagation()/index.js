//! Stops the event from propagating and prevents other listeners of the same event from being called.
document.querySelector('#btn1').addEventListener('click', function(event) {
    event.stopImmediatePropagation(); // Stops the event and prevents other listeners from being called
});