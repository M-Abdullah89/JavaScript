//! The availWidth property returns the width of the user's screen.
//? The availWidth property returns the width in pixels.
//! The availWidth property returns the width minus interface features like the Windows Taskbar.
//* The availWidth property is read-only.

let availableWidth = window.screen.availWidth;
console.log("Available Screen Width: " + window.screen.availWidth + "px");
