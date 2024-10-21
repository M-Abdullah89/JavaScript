//! store a collection of Key-Value pairs. It has  the same properties of Map. The Major difference is that keys of WeakMap cannot be a primitive data type (only objects)

const m = new WeakMap();
obj1 = {name : "abdullah"}  
m.set(obj1, "Object 1"); 
obj2 = {} 
m.set(obj2, "Object 2"); 
console.log(m,typeof m);

//? the values are weakly refrenced


//! it has same properties and methods like map
console.log(m.get(obj1)); 
console.log(m.has(obj2)); //true