//! creates an object from an existing object.
const obj = {
  name : "xyz"
  };
  
console.log(obj); //*{ name: 'xyz' }

const obj2 = Object.create(obj);
console.log(obj2) //* {}
//? "class" is a property set on "obj2",  not on "obj"

 obj2.class = 10;
console.log(obj2); //* { class: 10 }

//?properties can be overwritten
 obj2.name = "Abdullah";
 console.log(obj2); //*{ class: 10, name: 'Abdullah' }
