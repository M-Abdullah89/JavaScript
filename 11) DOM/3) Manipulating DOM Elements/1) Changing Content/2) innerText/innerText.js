//! This property gets or sets the text content of an element, but it takes CSS styles into account
//?  It returns the text as it is rendered on the screen, excluding hidden elements

const element = document.querySelector('p');;
element.innerText = "Hello<b>World!</b>";

//! innerText doesn't work for invisible elements
const element2 =document.querySelector('h1');
element2.innerText
//* shows ''