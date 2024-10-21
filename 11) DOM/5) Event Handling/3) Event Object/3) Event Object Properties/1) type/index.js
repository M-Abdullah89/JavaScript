const btn = document.querySelector('button');
btn.addEventListener('click', function(event) {
    console.log("Event type is",event.type); // Output: "click"
});
