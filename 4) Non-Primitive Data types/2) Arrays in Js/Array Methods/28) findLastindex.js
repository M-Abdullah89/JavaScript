
const arr = [1,2,12,34,56,82];
//? returns the index  of the last  element that passes a test.
function checkAge(age) {
    return age > 18;
  }
//* This functions checks if an entry is greater than number 18
  const result = arr.findLastIndex(checkAge);
  
  console.log(result);//*3



//? returns -1 if no elements are found.

const arr2 = [1,2,3,4,5,6,7];
const result2 = arr2.findLastIndex(checkAge);
console.log(result2);//* -1



//! Important 
//?  index of array starts from 0 
