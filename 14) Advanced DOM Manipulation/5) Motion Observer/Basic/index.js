//! MutationObserver is a built-in JavaScript object that allows you to watch for changes in the DOM (Document Object Model). This means you can detect when elements are added, removed, or modified in your HTML document.
//? create a new MutationObserver object and pass a callback function to it. This function will be called whenever a mutation occurs.
const parent = document.querySelector('.parent');
const observer = new MutationObserver((mutation) => {
   console.log(mutation)
  });
observer.observe(parent,{
    childList:true,
    
})

function delDiv() {
    document.querySelector('.parent').children[0].remove();
}
//! When the button is deleted a mutation is recorded due to the observer