// Selects all elements with the class 'example'
const allElements = document.querySelectorAll('.example');
allElements.forEach(element => {
    allElements.innerHTML="element";
});
// Output: 
// "First"
// "Second"
// "Third"
