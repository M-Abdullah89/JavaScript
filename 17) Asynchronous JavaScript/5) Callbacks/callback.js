function myDisplayer(some) {
  document.getElementById("demo").innerHTML = some;
}

function myCalculator(num1, num2, myCallback) {
  let sum = num1 + num2;
  myCallback(sum);
}

myCalculator(5, 5, myDisplayer);

//! In the example above, myDisplayer is a called a callback function.
//? It is passed to myCalculator() as an argument . Such functions are called callback functions

//! Example

// Create an Array
const myNumbers = [4, 1, -20, -7, 5, 9, -6];

// Keep only positive numbers
function removeNeg(numbers, callback) {
  const myArray = [];
  for (const x of numbers) {
    // if x>=0
    if (callback(x)) {
      myArray.push(x);
    }
  }
  return myArray;
}

// Call removeNeg with a callback
const posNumbers = removeNeg(myNumbers, (x) => x >= 0);

// Display Result
document.getElementById("demo").innerHTML = posNumbers;


//! callbacks are most often used with asynchronous functions.