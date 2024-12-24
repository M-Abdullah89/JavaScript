"use strict";
//!In strict mode, this is undefined in functions when they're called directly. It’s a way of avoiding errors and unexpected behavior.
function strictFunc() {
  console.log(this); // logs undefined
}
strictFunc();
