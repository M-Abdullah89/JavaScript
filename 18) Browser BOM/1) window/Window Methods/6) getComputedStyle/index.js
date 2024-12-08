//!  The getComputedStyle() method gets the computed CSS properties and values of an HTML element.
//? The getComputedStyle() method returns a CSSStyleDeclaration object.
const element = document.getElementById("test");
const cssObj = window.getComputedStyle(element, null);

let bgColor = cssObj.getPropertyValue("background-color");
document.getElementById("demo").innerHTML = bgColor;
