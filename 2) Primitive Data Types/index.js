//! Data types
//?Primitive Data types
//!  1) String
let greeting = "Hello, world!";
let meet = "Hi!";
let Interjection = "Wow!";

//!  2) Undefined

let FirstName;
let LastName;
console.log(FirstName); //* This will output: undefined

//! 3) BigInt

let largeNumber = 1234567890123456789012345678901234567890n; // This is a BigInt

// ! 4) Number

let number = 123; // This is a Number
let anynumber = 787; // This is a Number

// ! 5) Null

let emptyValue = null;
let avalue = null; // this is null but an object is printed

// ! 6) Boolean

let isLearning = true;
let AbdullahisSmart = true;

//! 7) Symbol

// var x = Symbol("Hello");  //Unique value
// var y = Symbol("Hello");  //Unique value
// console.log(x==y); //false

let variable = Symbol("Hello");
let variable2 = Symbol("Hello");
console.log(variable); // Symbol(Hello)
console.log(typeof variable); //Symbol
console.log(variable == variable2); //false bcz variable is not equal to variable 2

let id = Symbol("I am a Symbol");
console.log(id);
//  alert(id); //Shows an error in console because can't convert symbol to a string
// instead use this
alert(id.toString()); //it will show Symbol(I am a Symbol) in alert
//  to show the description use this
alert(id.description)
console.log(id.description);

let age = Symbol();
let user ={
 name: 'Abdullah',
 class:'10',
 [age]:25
};

