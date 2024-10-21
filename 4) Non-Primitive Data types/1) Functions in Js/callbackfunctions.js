//! A callback is a function passed as an argument to another function
//! This technique allows a function to call another function

const calculate = (param1,param2,func)=>{
   return func(param1,param2);
}

const result = calculate(3,4,(num1,num2)=>{return num1 + num2})
console.log(result);




//? Another example
const subtraction = (n1,n2)=>{return n1 - n2};
    
const result2 = calculate(8,-3,subtraction)
// subtraction is a callback function
console.log(result2);//5