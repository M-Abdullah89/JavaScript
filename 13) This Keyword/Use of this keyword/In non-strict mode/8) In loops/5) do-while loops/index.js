//! Similar to while, this in a do...while loop also depends on the surrounding context

const obj = {
  multiplier: 2,
  numbers: [1, 2, 3],
  multiplyNumbers: function() {
    let i = 0;
    do {
      console.log(this.numbers[i] * this.multiplier); // refers to `obj`
      i++;
    } while (i < this.numbers.length);
  }
};

obj.multiplyNumbers(); // logs 2, 4, 6
