// //! window.screen.orientation provides information about the current orientation of the screen.
// //? It returns an object with properties
// type: Indicates the orientation (e.g., "landscape-primary", "portrait-primary").
// angle: Shows the rotation angle in degrees (e.g., 0°, 90°).



// //! Properties
// //? type
// Describes the current screen orientation. It can have one of these values:

// //* "portrait-primary": The device is in its default portrait mode.
// //* "portrait-secondary": The device is in upside-down portrait mode.
// //* "landscape-primary": The device is in its default landscape mode.
// //* "landscape-secondary": The device is rotated 180° from its default landscape mode.
// console.log(window.screen.orientation.type);

// //? angle
// Indicates the number of degrees the screen is rotated from its natural orientation.
// Common values:

// //* 0 (no rotation)
// //* 90, 180, 270 (depending on the rotation)
// console.log(window.screen.orientation.angle);

// //! Methods
// //? lock(orientation)
// //* Locks the screen orientation to a specific type 

  
window.screen.orientation.lock("portrait").then(() => {
    console.log("Screen locked to portrait mode.");
  }).catch((err) => {
    console.error("Failed to lock orientation:", err);
  });
  
// //! Works only in fullscreen mode or in specific environments (like mobile apps or progressive web apps).
// //? unlock()
// //* Unlocks the screen orientation, allowing it to change dynamically based on how the device is held.
// window.screen.orientation.unlock();
// console.log("Orientation unlocked.");


