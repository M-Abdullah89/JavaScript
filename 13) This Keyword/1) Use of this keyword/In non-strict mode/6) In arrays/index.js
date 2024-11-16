//! In arrays this keyword isn't typically used directly within arrays unless in a method of an array object

const arr = [1, 2, 3];
arr.method = function () {
  console.log(this); // logs the array `arr`
};
arr.method();

const numbers = [1, 2, 3, 4, 5];

numbers.customForEach = function (callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i], i, this);
  }
};

const numbers2 = [10, 20, 30, 40, 50];
const context = { multiplier: 2 };

numbers2.forEach(function (value) {
  console.log(value * this.multiplier);
}, context);
//? the context passed as second argument is used to set the this in this.multiplier to the object "context" . Then we can assume this code as :
//? numbers2.forEach(function (value) {console.log(value * context.multiplier); });
