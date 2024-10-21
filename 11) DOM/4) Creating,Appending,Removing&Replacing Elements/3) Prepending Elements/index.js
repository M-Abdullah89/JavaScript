//! the prepend() method is used to insert content at the beginning of a specified element. 
// ? This method can be particularly useful when you want to add new elements or text before the existing content of an element.

let div = document.createElement("div");
div.append("Some text");
div.prepend("Headline: ");

document.body.appendChild(div)//* Headline: Some text


