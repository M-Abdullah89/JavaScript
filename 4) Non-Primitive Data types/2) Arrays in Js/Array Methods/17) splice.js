const arr = [1, 2, 3, 4, 5, "Cat", "Dog", "Lion"];

//? To add , remove or change elements from an array
//? The first value is the index and the second value is the number of elements
//? returns the removed arrays
//? changes the original arrays
console.log(arr.splice(0, 3)); //* 1 ,2 ,3
console.log(arr); //* [4,5,"Cat","Dog","Lion"] because [1,2,3] are removed

const arr2 = [1, 2, 3, 4, 5, "Cat", "Dog", "Lion"];
// * to add elements
console.log(arr2.splice(5, 0, 6, 7, 8, 9));
console.log(arr2);
//3 is index where we want to add (in this case it is at last )
// 0 is necessary because we don't want to remove elements
// after 0 we add the elements as we want
