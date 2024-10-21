//! The typeof operator returns the type of a variable or an expression.

console.log(typeof "Abdullah")            
 //? Returns string

console.log(typeof ("M"+"Abdullah"))  
 //? Returns string


console.log(typeof 3.14)      
  //? Returns number

console.log(typeof 33)       
  //? Returns number

console.log(typeof (33 + 66))      
 //? Returns number

console.log(typeof true)   
 //? Returns boolean

console.log(typeof false)   
 //? Returns boolean
console.log(typeof 1234n)   
 //? Returns bigint

console.log(typeof Symbol())   
 //? Returns symbol

console.log(typeof x)  
//? Returns undefined
console.log(typeof null) 
//! Returns object
//? it is primitie datatype but will return object

console.log(typeof function (){})   
//? Returns function

console.log(typeof new Date());    
//? returns object
