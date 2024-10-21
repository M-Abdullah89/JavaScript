//! deletes an element from a map.

let fruits = new Map([
    ['apple', 5],   
    ['banana', 3],
    ['mango', 2]
]);

// Delete an element from the Map
fruits.delete('banana');

// Print the Map
console.log(fruits);
console.log("element banana deleted");