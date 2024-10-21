const btn = document.querySelector('button');

btn.addEventListener('click', function(event) {    
    console.log(event.target); 
});
//! References the element that triggered the event.
