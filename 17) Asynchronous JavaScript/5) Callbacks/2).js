//! link this file in index.html first
function myDisplayer(some) {
  document.getElementById("demo").innerHTML = some;
}

function myCalculator(num1, num2) {
  let sum = num1 + num2;
  myDisplayer(sum);
}

myCalculator(5, 5);
//! this is better
//? The problem with the first example , was that you have to call two functions to display the result.

//? The problem with this example, is that you cannot prevent the calculator function from displaying the result.