document.addEventListener("keydown", function (event) {
  const character = document.querySelector(".character");
  if (event.key.toLowerCase() === "w") {
    if (!character.classList.contains("jumping")) {
      character.classList.add("jumping");
      setTimeout(() => {
        character.classList.remove("jumping");
      }, 500); // This should match the animation duration (0.5s = 500ms)
    }
  }
});
