let img = document.getElementById('cookie');
let clickerCounter = document.getElementById('clicker__counter');
let clickerStopwatch = document.getElementById('clicker__stopwatch');

const baseImgWidth = img.width;

let totalCountCliks = 0;
let clickSpeed = 0;
let countClicksPerSec = 0;

let time = new Date().getTime();

function changeImgSize() {
  clickerCounter.textContent = (++totalCountCliks).toString();

  ++countClicksPerSec;
  let currentTime = new Date().getTime();
  clickerStopwatch.textContent =
      (countClicksPerSec / (currentTime - time) * 1000).toFixed(2).toString();
  time = currentTime;
  countClicksPerSec = 0;

  img.width = totalCountCliks % 2 ? img.width / 2 : baseImgWidth;
}

img.onclick = changeImgSize;
