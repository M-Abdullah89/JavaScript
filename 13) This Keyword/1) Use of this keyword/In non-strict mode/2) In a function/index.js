//!In a function: this depends on how the function is called.
//? The keyword thithes when used in a function refers to  global object(window object).
function test() {
  console.log(this);
}
test(); // logs  `global`(window) object in non-strict mode
    