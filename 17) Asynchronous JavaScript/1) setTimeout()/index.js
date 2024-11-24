//! setTimeout() function allows to schedule the execution of a function after an amount of time
//* setTimeout(callback,delay in ms)
setTimeout(() => {
    alert("hello")
}, 5000);
//? the alert will execute after 5 sec (1 sec=1000ms)
function active() {
    setTimeout(() => {
        alert("hello by button")
    }, 3000);
}