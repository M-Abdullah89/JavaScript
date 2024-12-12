let res = document.querySelector('.res');

if (navigator.platform) {
    res.innerHTML = `navigator.platform: ${navigator.platform}`;
}