//! The colorDepth property returns the screen's color depth.
//? The colorDepth property returns the depth in bits per pixel.
//*Syntax: screen.colorDepth
// The colorDepth property is read-only.

console.log("Color Depth: " + window.screen.colorDepth + " bits per pixel");

//! Common values:
//? 24: True color (16,777,216 colors)
//? 32: True color with an alpha channel (same color range as 24-bit, but with transparency)
//* It gives an idea of the screen's color capabilities, which can be useful for applications that require precise color control (e.g., graphic design tools or high-quality media apps).


if (window.screen.colorDepth >= 24) {
    console.log("The screen supports True Color.");
  } else {
    console.log("The screen has a lower color depth.");
  }
  