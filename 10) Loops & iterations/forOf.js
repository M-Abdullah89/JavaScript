//! for of statement loops through the values of an iterable object.

/* for (variable of iterable) {
  code block to be executed
}
 */

//!Looping over an Array
const person = ["Abdullah", 10, 15.5, true, null];

let text = "";
for (let x of person) {
  text = x;
  console.log(text)
}
/* 
Abdullah
10  
15.5
true
null
*/

//! Looping over a String

let name = "Abdullah";

let res = "";
for (let x of name) {
res = x;
console.log(res)
}
/* 
A   
b   
d   
u   
l   
l   
a   
h */