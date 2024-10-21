//! Stops the event from propagating further.
document.querySelector('button').addEventListener('click', function(event) {
    event.stopPropagation(); // Stops the event from bubbling up
    
});
