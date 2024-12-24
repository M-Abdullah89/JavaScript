//! Displays a dialog box with a message and an OK and a Cancel button
//? The confirm() method returns true if the user clicked "OK", otherwise false.

const quit = confirm("Do you Want to quit");

console.log(quit); // true or false
if (quit) {
    window.close();
}