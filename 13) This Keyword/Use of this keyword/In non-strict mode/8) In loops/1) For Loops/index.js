//! this in a for loop usually refers to the context in which the loop is placed, but it doesn't change within the loop unless explicitly modified.

const obj = {
  multiplier: 2,
  numbers: [1, 2, 3],
  multiplyNumbers: function() {
    for (let i = 0; i < this.numbers.length; i++) {
      console.log(this.numbers[i] * this.multiplier); // refers to `obj`
    }
  }
};

obj.multiplyNumbers(); // logs 2, 4, 6
