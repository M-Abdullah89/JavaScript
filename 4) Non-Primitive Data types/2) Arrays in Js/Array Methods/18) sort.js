const arr = [5, 4, 3, 2, 1, "Lion", "Cat", "Dog"];

// ? sorts the elements of an array in alphabetical order.
// ? method sorts the elements as strings in alphabetical and ascending order.
// ? changes the original array
console.log(arr);
console.log(arr.sort());

const points = [40, 100, 1, 5, 25, 10];
console.log(points);





//! Sort numbers in ascending order:
points.sort(function (a, b) {
  return a - b;
});

//!  To find the smallest value
console.log("The smallest value is", points[0]);

//! Sort numbers in descending order:
points.sort(function (a, b) {
  return b - a;
});







//? the function repeatedly compares pairs of elements and swaps them if they are in the wrong order according to the compare function. This process continues until the entire array is sorted in ascending order.
