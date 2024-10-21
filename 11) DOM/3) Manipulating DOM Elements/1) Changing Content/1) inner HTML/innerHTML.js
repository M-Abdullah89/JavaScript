//! This property allows you to get or set the HTML content of an element, including any HTML tags.
//? When you use innerHTML, it reads both the HTML markup and the text content of the element.
document.querySelector(".p").innerHTML = "<strong>Hello</strong> <i>World!</i>"
//* (in bold) Hello (in italic) World!
//!: Be cautious when using innerHTML with user input, as it can lead to security vulnerabilities like XSS (Cross-Site Scripting) attacks1