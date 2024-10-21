//! used to store a collection of objects
const h = new WeakSet();

h.add({name : "Abd"})
console.log(h)
console.log(h)

//! WeakSet is a collection of objects and not values of some particular type so it will only store objects
h.add([1,2,3,4]);
console.log(h)


//? it has same properties and methods as sets
console.log(h);