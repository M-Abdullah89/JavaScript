const arr = [1, 2, 3, 4, 5, 6,[7]];
//?  maps all array elements and creates a new flat 
//! It is same as  a map() +  a flat() of depth 1

const result = arr.flatMap((value) => {
    return value *2;
});
console.log(arr);
console.log(result);