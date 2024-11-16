"use strict";
//!In arrow functions this is lexically bound and uses the value from the surrounding context.


const obj = {
  value: 20,
  arrowFunc: () => {
    console.log(this); // logs the global object or `undefined`
  },
};
obj.arrowFunc();
