const arr13 = [1,2,[3,[4,[5,[6,[7,[8,[9,[10]]]]]]]]];
// ? Merge / concatenate nested arrays in the main array
// ? we can use .flat(number of nested arrays) if we have a nested array in an array e.g arr [1,2,[3,4,[5,6,[7,8]]]]
// ? default value is 1
// ? Doesn't change the original array
console.log(".flat");
console.log(arr13);
console.log(arr13.flat(4));
console.log(arr13);