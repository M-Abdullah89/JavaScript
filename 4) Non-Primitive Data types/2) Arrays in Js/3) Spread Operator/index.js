//! The spread operator is a special operator.
// ? It consists of three dots used before a referenced expression or string, and it spreads out the arguments or elements of an array.
let arr = ["so", "much", "fun"];
let message = ["JavaScript", "is", ...arr, "and", "very", "powerful"];

console.log(message);

function addTwoNumbers(x,y) {
    console.log(x + y); 
  } 
  let arr2 = [10,15,20];
  addTwoNumbers(...arr2); // 25

  let arr3 = [10, 15, 20];
let sum = arr3.reduce((num1 , num2) => { return  num1 + num2; });

console.log(sum);  //45
