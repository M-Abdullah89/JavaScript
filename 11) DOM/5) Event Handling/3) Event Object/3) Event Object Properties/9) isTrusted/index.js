//! Indicates if the event was created by a user action.

const btn = document.querySelector('button');

btn.addEventListener('click', function(event) {
    console.log("The event was triggered by a user action:",event.isTrusted); // Output: true (if the event was triggered by a user action)
});
