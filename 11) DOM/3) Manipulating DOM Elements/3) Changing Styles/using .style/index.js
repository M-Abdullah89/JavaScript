//! The style property in JavaScript DOM is used to get or set the inline style of an HTML element.

const para = document.querySelector('p');
const div = document.querySelector('div');

//? When using the style property, CSS property names are converted to camelCase. For example, background-color becomes backgroundColor
para.style.fontFamily = "Segoe Ui"
para.style.fontSize = "20px"
para.style.background = "red"
//? he style property only applies to inline styles. It does not include styles defined in external stylesheets or <style> tags in the <head> section

//! Javascript styles have the highest priority
div.style.height='100px'
div.style.width='100px'
//? uncomment code below
// div.style.background='lime'