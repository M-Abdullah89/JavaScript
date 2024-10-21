//! The Object.freeze() method prevents any changes to an object.
"use strict";

const object  = {
    age : 15,
}
Object.freeze(object);

object.age = 10;
//? Throws a type  error in strict mode
//? fail silently in non-strict mode



console.log(object.age);//15



// ? Frozen objects are read-only. No modification, addition or deletion of properties are allowed.