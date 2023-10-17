var timer = null;
const audio = new Audio("./assets/poyo.mp3");
const frame_percentages = [0.15, 0.5, 0.35];
const duration = 300;

function setFrame(e, frame) {
  e.target.src = `./assets/svg/frame${frame}.svg`;
  const length = frame_percentages[frame - 1] * duration;
  if (frame < 3) {
    timer = setTimeout(() => setFrame(e, frame + 1), length);
  } else {
    timer = setTimeout(() => {
      e.target.src = "./assets/svg/frame1.svg";
      timer = null;
    }, length);
  }
}

document.getElementById("poyo").addEventListener("mousedown", (e) => {
  if (e.button != 0) {
    return;
  }
  if (timer) {
    clearTimeout(timer);
  }
  if (audio.paused) {
    audio.play();
  } else {
    audio.currentTime = 0;
  }
  setFrame(e, 1);
});
