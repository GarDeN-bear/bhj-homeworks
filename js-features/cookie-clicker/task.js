var img = document.getElementById('cookie');
var clickerCounter = document.getElementById('clicker__counter');

const baseImgWidth = img.width;

var isClicked = false;
var countCliks = 0;

function changeImgSize() {
  clickerCounter.textContent = (++countCliks).toString();
  if (isClicked) {
    img.width = baseImgWidth;
    isClicked = false;
  } else {
    img.width = baseImgWidth / 2;
    isClicked = true;
  }
}

img.onclick = changeImgSize;
