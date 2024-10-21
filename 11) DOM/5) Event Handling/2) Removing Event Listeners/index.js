//! The removeEventListener() method in JavaScript is used to remove an event listener that was previously added with addEventListener()
//? This method is essential for managing event listeners and ensuring they don’t continue to trigger when no longer needed.
//* Syntax: element.removeEventListener(event, listener, useCapture);

const button = document.querySelector("#myButton");
const para = document.querySelector("#para");
const reset = document.querySelector('#reset');
const disable = document.querySelector('#Disable');

var i = 0;

//? the count increased as button is clicked
function myFunction() {
    i++;
    para.textContent = `Button is clicked ${i}, times`;
}
button.addEventListener("click",myFunction);

//? the count is declared to zero and an empty string is put  
reset.addEventListener("click",()=>{
       i = 0;
        para.textContent = ``;
        button.addEventListener("click",myFunction);
    })
 
disable.addEventListener("click",()=>{
    para.textContent = `Button is disabled`;
    button.removeEventListener("click",myFunction)
})

//? when the button is clicked the eventlistener from button is removed causing button to disable