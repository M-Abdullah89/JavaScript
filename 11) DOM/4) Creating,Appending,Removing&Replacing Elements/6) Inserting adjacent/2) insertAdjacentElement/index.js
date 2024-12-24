function up() {
        const span = document.getElementById('mySpan');
       const h2 = document.getElementById('myH2');
        h2.insertAdjacentElement('afterend', span);
}
function down() {
    const span = document.getElementById('mySpan');
    const h2 = document.getElementById('myH2');
     h2.insertAdjacentElement("beforebegin", span)
}

//! insertAdjacentElement works same as insertAdjacentHTML 
//* h2.insertAdjacentElement("position", element)