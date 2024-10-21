//! The toggleAttribute method in JavaScript is used to toggle a boolean attribute on an HTML element. 
//? This means it will add the attribute if it is not present, and remove it if it is present.

//*  element.toggleAttribute(name, force);

const button = document.querySelector('button');
        const input = document.querySelector('input');

        button.addEventListener('click', () => {
            input.toggleAttribute('disabled');

        });