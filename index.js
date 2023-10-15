var timer = null;
const audio = new Audio("./assets/poyo.mp3");

function animate(e) {
  e.target.classList.add("animation");
  timer = setTimeout(() => {
    e.target.classList.remove("animation");
    timer = null;
  }, 300);
  if (audio.paused) {
    audio.play();
  } else {
    audio.currentTime = 0;
  }
}

document.getElementById("poyo").addEventListener("mousedown", (e) => {
  if (timer) {
    e.target.classList.remove("animation");
    clearTimeout(timer);
    timer = setTimeout(() => animate(e), 1);
  } else {
    animate(e);
  }
});
