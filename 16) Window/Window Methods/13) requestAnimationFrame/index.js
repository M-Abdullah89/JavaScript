const adiv = document.getElementById("mydiv");
let leftPos = 0;

function moveDiv(timestamp) {
  leftPos += 5;
  adiv.style.left = leftPos + "px";
  requestAnimationFrame(moveDiv);
}

requestAnimationFrame(moveDiv);
