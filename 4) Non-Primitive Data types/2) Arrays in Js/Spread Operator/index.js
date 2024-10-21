//! The spread operator is a special operator.
// ? It consists of three dots used before a referenced expression or string, and it spreads out the arguments or elements of an array.
let arr = ["so", "much", "fun"];
let message = ["JavaScript", "is", ...arr, "and", "very", "powerful"];

console.log(message);

function addTwoNumbers(x,y) {
    console.log(x + y); 
  } 
  let arr2 = [10,15,20];
  addTwoNumbers(...arr2);