var form = document.querySelector("#main_form");
var input = document.querySelector("#main_text");

form.addEventListener("submit", (e) => {
  e.preventDefault();
   
  var container = document.querySelector(".container");
  if (input.value == "") {
    //! if the entered string is empty then nothing will happen
  } else {
    //! Parent Element res (for result)
    var result = document.createElement("div");
    result.classList.add("res");
    result.id = "res";
    const text = document.createElement("div");
    text.classList.add("text");
    text.innerText = input.value;
    result.appendChild(text);
    //! creating  buttons div
    var buttons = document.createElement("div");
    //! creating X button
    var delete1 = document.createElement("button");
    delete1.className = 'svg-button'; 
    delete1.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="grey"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg>`;
    delete1.classList.add("delete1");
    //! Creating ✓ button
    var checked = document.createElement("button");
    checked.innerHTML = "✓";
    checked.classList.add("checked");
    //! Adding buttons and res to document
    buttons.appendChild(delete1);
    buttons.appendChild(checked);
    result.appendChild(buttons);
    container.appendChild(result);
    input.value = "";
    
    //! To delete result on  click of X
    delete1.addEventListener("click", () => {
      result.remove();
    });
    //! to add & remove textdecoration on click of button
    
    checked.addEventListener("click", () => {
      text.classList.toggle("text2");
      checked.classList.toggle("checked2")
    });
    
  }
});
