//! Indicates if the default action has been prevented.
const btn = document.querySelector('button');
btn.addEventListener('click', function(event) {
    event.preventDefault();
    console.log(event.defaultPrevented); // Output: true
});
