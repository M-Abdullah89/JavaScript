document.addEventListener('DOMContentLoaded', function () {
    const image = document.getElementById('image');
    const message = document.getElementById('message');

    image.addEventListener('error', function () {
        message.textContent = 'Error loading image. Please check the URL.';
    });
});