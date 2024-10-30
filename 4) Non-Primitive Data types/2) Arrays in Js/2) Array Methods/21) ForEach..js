const arr = [1, 2, 3, 4, 5, "Cat", "Dog", "Lion"];

console.log(arr.forEach(function val(element,index){
    console.log(element,":",index);
}));

//? calls a function for each element in an array.
//! Do not store it in a variable and then log it will show undefined


let array = [1, 2, 3, 4, 5];
let sum = 0;

array.forEach(function(element) {
    sum += element;
});
//? Since the function is only used as a callback so we don't need to declare a name

console.log(sum); // Output will be 15
array.push(sum);
console.log(array);



