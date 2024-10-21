const age = [8, 14, 18, 4, 20, 30];
// ?   checks if any of the elements in an array pass a test
// ?  returns true (and stops) if the function returns true for one of the array elements.
//?  returns false if the function returns false for all of the array elements
// ? does not change the original array
age.some(checkAdult);
function checkAdult(age) {
  return age > 18;
}
console.log(age.some(checkAdult));
// true at 20 bcz it comes before 30