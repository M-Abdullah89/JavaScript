//! Indicates if the event can be canceled.
const btn = document.querySelector('button');
btn.addEventListener('click', function(event) {
console.log(event.cancelable); // Output: true (for most events)
});
