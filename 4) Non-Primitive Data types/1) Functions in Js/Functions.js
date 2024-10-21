//! Function Definition
function Greeting() {
  console.log("Hello World");
}
//! Function invocation / Calling a function
Greeting();

//! Function with parameter
//? Parameter is written under paranthesis
// num1 in this case
function square(num1) {
  return num1 * num1;
}
//! Argument
//(2) is argument
console.log(square(2));

//! Examples
function fullName(fname = "M", lname = "Abdullah") {
  return "Hello" + " " + fname + " " + lname;
}

console.log(fullName());
console.log(fullName("Abdullah", "M"));

//! We need to log it when we use return
//! return is more preffered

//! Default Params
function multiplyby2(a, b = 2) {
  return a * b;
}
console.log(multiplyby2(5))
//*10


//! Rest
//? The rest parameter syntax allows a function to accept an indefinite number of arguments as an array

function sum(...theArgs) {
    let total = 0;
    for (const arg of theArgs) {
      total += arg;
    }
    return total;
  }
  
//! The arguments object
//? arguments is an array-like object accessible inside functions that contains the values of the arguments passed to that function.


  console.log(sum(1,2,3,4,5));
  // * 15

  function func1(a, b, c) {
    console.log(arguments[0]);
    // Expected output: 1
  
    console.log(arguments[1]);
    // Expected output: 2
  
    console.log(arguments[2]);
    // Expected output: 3
  }
  
  func1(1,2,3);


//! Immediately invoked function expressions (IIFE)
//? it will be used in async await not explaining it now
