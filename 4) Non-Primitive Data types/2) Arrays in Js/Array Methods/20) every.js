const age1 = [19, 20, 21, 22, 23, 24];
const age2 = [13, 14, 15, 16, 17, 18];
// ? executes a function for each array element.
// ? returns true if the function returns true for all elements.
// ? returns false if the function returns false for one element.
// ? does not execute the function for empty elements.
// ? does not change the original array

function checkAge(a) {
  return a > 18;
}
age1.every(checkAge);

console.log(age1.every(checkAge));
console.log(age1);