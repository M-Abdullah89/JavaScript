//! MutationObserver is a built-in JavaScript object that allows you to watch for changes in the DOM (Document Object Model). This means you can detect when elements are added, removed, or modified in your HTML document.

//? create a new MutationObserver object and pass a callback function to it. This function will be called whenever a mutation occurs.
const parent = document.querySelector(".parent");

const mutationObserver = new MutationObserver((e) => {
  console.log(e);
});

mutationObserver.observe(parent,{
  attributes: true,
  childList: true,
  subtree: true,
});

function deldiv() {
    parent.children[0].remove()
}
//! if the button is clicked , the div will be removed and the MutationObserver will detect the change and log it to the console as an array it will have other things also but the main thing we need is
//* removedNodes: NodeList [div.child2]