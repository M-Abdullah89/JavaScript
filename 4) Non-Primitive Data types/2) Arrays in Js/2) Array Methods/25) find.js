// ? returns the value of the first element that passes a test
const arr = [1,2,12,34,56,82];

function checkAge(age) {
    return age > 18;
  }
//* This functions checks if an entry is greater than number 18
  const result = arr.find(checkAge);
  
  console.log(result);//* 34
  

//? returns undefined if no elements are found.

  const $2 = [1,2,3,4,5,6,7];
  const result2 = $2.find(checkAge);
  console.log(result2);
