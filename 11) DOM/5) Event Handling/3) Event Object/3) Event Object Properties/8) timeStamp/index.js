//! The time at which the event was created.
const btn = document.querySelector('button');
btn.addEventListener('click', function(event) {
    console.log(event.timeStamp); // Should output a large number in milliseconds
});
