//! addEventListener method in JavaScript is used to attach an event handler to a specified element.
//? This method allows you to specify the type of event to listen for and the function to execute when that event occurs

//* Syntax: target.addEventListener(type, listener, options);

// Selecting the element
const button = document.querySelector("#myButton");
const para = document.querySelector("#para");
const reset = document.querySelector('#reset');

var i = 0;

// Attach an event listener
button.addEventListener("click", () => {
    i++;
    para.textContent = `Button is clicked ${i}, times`;
});

    reset.addEventListener("click",()=>{
       i = 0;
        para.textContent = ``;
    })
//! Using function parameter in events
const test =  document.querySelector('#test');
test.addEventListener("click",function Test(event) {
    console.log(event)
})