const textareas = document.querySelectorAll('textarea')

textareas[0].addEventListener("copy",()=>{
    textareas[0].innerHTML=`Copy This Text \n You have copied this text`
});
textareas[1].addEventListener("cut",()=>{
    textareas[1].innerHTML=`You have cut this text`
});
textareas[2].addEventListener("paste",()=>{
    textareas[2].innerHTML=`You have pasted this text`
});