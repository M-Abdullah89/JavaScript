const draggable = document.querySelector('.draggable');
const dropzone = document.querySelector('.dropzone');

draggable.addEventListener('dragstart', (event) => {
    event.dataTransfer.setData('text/plain', event.target.textContent);
    console.log('Drag started');
});

draggable.addEventListener('dragend', () => {
    console.log('Drag ended');
});

dropzone.addEventListener('dragenter', () => {
    dropzone.classList.add('hover');
    console.log('Drag entered dropzone');
});

dropzone.addEventListener('dragleave', () => {
    dropzone.classList.remove('hover');
    console.log('Drag left dropzone');
});

dropzone.addEventListener('dragover', (event) => {
    event.preventDefault(); // Prevent default to allow drop
    console.log('Dragging over dropzone');
});

dropzone.addEventListener('drop', (event) => {
    event.preventDefault(); // Prevent default behavior (e.g., opening as link for some elements)
    const data = event.dataTransfer.getData('text/plain');
    dropzone.textContent = `Dropped: ${data}`; // Update dropzone content
    dropzone.classList.remove('hover'); // Remove hover effect
    console.log('Dropped:', data);
});

//! we will learn setData in storage 