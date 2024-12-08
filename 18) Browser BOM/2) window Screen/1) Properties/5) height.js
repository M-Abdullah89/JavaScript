//! The height property returns the total height of the user's screen (including Taskbar).
//? The height property returns the height in pixels.
//* The height property is read only.

console.log("Screen Height: " + window.screen.height + "px");

//! Use Cases
//? Use height when the application needs to consider the entire screen space, regardless of usability.
//? Typically used in conjunction with availHeight to calculate reserved space for system UI.
console.log("Screen Height",screen.height,
"availHeight",screen.availHeight 
);