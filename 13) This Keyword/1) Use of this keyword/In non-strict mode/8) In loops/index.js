//! Within a loop, this behaves according to the scope it's in.

const obj = {
  data: [1, 2, 3],
  showData: function () {
    this.data.forEach(function (item) {
      console.log(this); // `this` refers to `global` in non-strict mode or `undefined` in strict mode
    });
  },
};
obj.showData();
