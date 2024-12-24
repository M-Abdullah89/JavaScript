//! The history.forward() method loads the next URL (page) in the history list.
//? The history.back() method only works if a next page exists.
let btn = document.querySelector('.gobackward');

btn.addEventListener('click', () =>{
 history.back(); 
});

//! we can also do  <button class="gobackward" onclick="history.back();">Go to Previous page</button>