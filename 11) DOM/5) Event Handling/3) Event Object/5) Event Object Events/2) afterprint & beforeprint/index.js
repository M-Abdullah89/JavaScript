document.getElementById('printButton').addEventListener('click', function() {
    window.print();
});

window.addEventListener('beforeprint', function() {
    document.getElementById('message').textContent = 'Preparing to print...';
    document.getElementById('message').classList.remove('hidden');
});

window.addEventListener('afterprint', function() {
    document.getElementById('message').textContent = 'Printing completed!';
    document.getElementById('message').classList.remove('hidden');
});