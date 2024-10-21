//? returns the value of the last element that passes a test.
const arr = [1,18,20,25,30,11];
function checkAge(age) {
    return age > 18;
  }
//* This functions checks if an entry is greater than number 18
  const result = arr.findLast(checkAge);
  
  console.log(result);//* 30


  //? returns undefined if no elements are found.

  const arr2  = [1,2,3,4,5,6,7];
  const result2 = arr2.findLast(checkAge);
  console.log(result2);//* undefined
