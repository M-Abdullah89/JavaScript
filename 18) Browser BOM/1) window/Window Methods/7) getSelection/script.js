function foo() {
  const selObj = window.getSelection();
  alert(selObj)
}
const h1 =document.querySelector('h1');
h1.addEventListener("click",foo)