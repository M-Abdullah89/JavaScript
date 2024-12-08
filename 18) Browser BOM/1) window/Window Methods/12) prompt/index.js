//! The prompt() method displays a dialog box that prompts the user for input.

//? The prompt() method returns the input value if the user clicks "OK", otherwise it returns null.
//* prompt(text, defaultText)

let person = prompt("Please enter your name", "Harry Potter");

if (person != null) {
  document.getElementById("res").innerHTML =
    "Hello " + person + "! How are you today?";
}
