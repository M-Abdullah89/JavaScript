//! remove method is used to remove an element from the DOM. 
//? This method is straightforward and can be called on any DOM element.

//* syntax : element.remove();


let el1 = document.querySelector('.el1');
el1.remove()
// it does not have any parameter or return value

//! While removeChild requires you to specify the parent and child elements, remove is called directly on the element you want to remove, making it simpler for many use cases.