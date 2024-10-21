//! In arrow functions this is lexically bound, meaning it uses this from the surrounding code

const obj = {
  arrowFunc: () => {
    console.log(this); // logs `this` from the surrounding scope
  },
};
obj.arrowFunc();

//? The keyword this when used in an arrow function refers to the parent object.