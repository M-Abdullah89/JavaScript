document.addEventListener('DOMContentLoaded', function () {
    const video = document.querySelector('video');
    const res = document.querySelector('.res');

    video.addEventListener('ended', function () {
        video.style.display="none"
        res.textContent = 'The video has ended.';
        setTimeout(() => {
        res.textContent = 'Thanks for watching...';
        }, 1000);
    });
});