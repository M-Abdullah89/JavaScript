//! this in a while loop depends on the surrounding context.

// For example, if you're using a while loop to iterate over a collection,

const obj = {
  multiplier: 2,
  numbers: [1, 2, 3],
  multiplyNumbers: function () {
    let i = 0;  
    while (i < this.numbers.length) {
      //=numbers.length
      console.log(this.numbers[i] * this.multiplier); // refers to `obj`
      i++;
    }
  },
};

obj.multiplyNumbers(); // logs 2, 4, 6
