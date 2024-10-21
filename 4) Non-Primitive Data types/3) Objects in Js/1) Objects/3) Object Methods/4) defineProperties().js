//! defines new or modifies existing properties directly on an object, returning the object
//* Object.defineProperty(objectName , property, descriptor)

const object = {
    name : "Abdullah",
    age : 15
}; 
console.log(object);//* { name: 'Abdullah', age: 15 }

 Object.defineProperties(object,{
     class : {value : 10},
     language : {value : "Js"},
 })
 console.log(object);
//* {name: 'Abdullah', age: 15, class: 10, language: 'Js'}