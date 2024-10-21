document.getElementById('myButton').addEventListener('click', function(event) {
    console.log(event.currentTarget); // Output: <button id="myButton">...</button>
});
//! References the element to which the event handler is attached.
