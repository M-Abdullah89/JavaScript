//? creates a new array filled with elements that pass a test provided by a function.
const arr = [10,18,20,3,40,50];

const result = arr.filter(checkAdult);

function checkAdult(age) {
    return age >= 18;
}
console.log(result);

// ? does not change the original array.
console.log(arr);
