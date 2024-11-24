

let currentIndex = Math.floor(Math.random() * poems.length);
let isPlaying = false;

const audio = document.getElementById("audio");
const progressBar = document.getElementById("progress-bar");

document.addEventListener("DOMContentLoaded", () => {
  loadPoem(currentIndex);
  updatePlayPauseButton();
  progressBar.addEventListener("input", seekAudio);
});

audio.addEventListener("timeupdate", updateProgressBar);
audio.addEventListener("ended", () => {
  isPlaying = false;
  updatePlayPauseButton();
});

function loadPoem(index) {
  const poem = poems[index];
  document.getElementById("poem").innerHTML = poem.english;

  audio.src = poem.audio;
  audio.currentTime = 0;
  progressBar.value = 0;
}

function togglePlayPause() {
  if (isPlaying) {
    audio.pause();
  } else {
    audio.play();
  }
  isPlaying = !isPlaying;
  updatePlayPauseButton();
}

function updatePlayPauseButton() {
  const button = document.getElementById("playPauseButton");
  if (isPlaying) {
    button.classList.remove("pause");
    button.classList.add("play");
    button.textContent = "Playing";
  } else {
    button.classList.remove("play");
    button.classList.add("pause");
    button.textContent = "Paused";
  }
}

function updateProgressBar() {
  const progress = (audio.currentTime / audio.duration) * 100;
  progressBar.value = progress;
}

function seekAudio() {
  const seekTime = (progressBar.value / 100) * audio.duration;
  audio.currentTime = seekTime;
}

function previousPoem() {
  currentIndex = currentIndex === 0 ? poems.length - 1 : currentIndex - 1;
  loadPoem(currentIndex);
  playAudio();
}

function nextPoem() {
  currentIndex = (currentIndex + 1) % poems.length;
  loadPoem(currentIndex);
  playAudio();
}

function playAudio() {
  audio.play();
  isPlaying = true;
  updatePlayPauseButton();
}
