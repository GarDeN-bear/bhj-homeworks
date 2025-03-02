let img = document.getElementById('cookie');
let clickerCounter = document.getElementById('clicker__counter');
let clickerStopwatch = document.getElementById('clicker__stopwatch');

const baseImgWidth = img.width;

let isClicked = false;
let totalCountCliks = 0;
let clickSpeed = 0;
let countClicksPerSec = 0;

let time = new Date().getTime();

function changeImgSize() {
  clickerCounter.textContent = (++totalCountCliks).toString();

  ++countClicksPerSec;
  let currentTime = new Date().getTime();
  clickerStopwatch.textContent =
      (countClicksPerSec / (currentTime - time) * 1000).toString();
  time = currentTime;
  countClicksPerSec = 0;

  if (isClicked) {
    img.width = baseImgWidth;
    isClicked = false;
  } else {
    img.width = baseImgWidth / 2;
    isClicked = true;
  }
}

img.onclick = changeImgSize;
