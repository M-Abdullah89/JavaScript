//! Used in function definitions to gather multiple arguments into an array.

//* Syntax: function(...args) { }

function show(...numbers) {
    return numbers;
}
console.log(show(1, 2, 3, 4)); //*[ 1, 2, 3, 4 ]

function sumAll(...numbers) {
    return numbers.reduce((sum, number) => sum + number);
}
console.log(sumAll(1, 2, 3, 4)); // Output: 10
