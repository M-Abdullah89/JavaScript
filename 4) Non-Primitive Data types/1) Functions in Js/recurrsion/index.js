//! Recursion is a programming technique where a function calls itself repeatedly to solve a problem

//? it has two parts 1) base case & 2) recursive function

//? Without base cases, a recursive function won't know when to stop, resulting in an infinite recursion (error).

// Program to countdown till 1

// recursive function
function counter(count) {

    // display count
    console.log(count);

    // condition for stopping (Base case)
    if(count > 1) {

        // decrease count
        count = count - 1;

        // call counter with new value of count
        counter(count);
    } else {

        // terminate execution
        return;
    };
};

// access function
counter(5);


//! Example 2
// recursive function
function factorial(num) {
    // base case
    // recurse only if num is greater than 0
    if (num > 1) {
        return num * factorial(num - 1);
    }
    else {
        return 1;
    };
};

let x = -1;

// store result of factorial() in variable
let y = factorial(x);

console.log(`The factorial of ${x} is ${y}`);