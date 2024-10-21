//! if statements are used when a condition is to be checked 
let marks = 33;


if (marks > 32) {
    console.log("Passed");
}

//! if else is used when we want to do things also if condition is not true

let m = 30;

if (m>32) {
    console.log("Passed");
    
} else {
    console.log("failed");
    
}

//! for multiple conditions we can use else if

let num1 = 30 , num2 = 20 , num3 = 25;

if (num1 >= num2 && num1 >= num3) {
    console.log(num1,'is greatest'); ;
} else if (num2 >= num1 && num2 >= num3) {
    console.log(num2,"is greatest");
} else {
    console.log(num3,"is greatest");
}
