let rotatorCases = Array.from(document.getElementsByClassName('rotator__case'));
let indexActiveCase = 0;
let id;

function setCase() {
  rotatorCases[indexActiveCase].classList.remove('rotator__case_active');
  ++indexActiveCase;
  if (indexActiveCase >= rotatorCases.length) {
    indexActiveCase = 0;
  }
  rotatorCases[indexActiveCase].classList.add('rotator__case_active');
  rotatorCases[indexActiveCase].style.color =
      rotatorCases[indexActiveCase].getAttribute('data-color');
  clearInterval(id);
  id = setInterval(
      setCase, rotatorCases[indexActiveCase].getAttribute('data-speed'));
}

let colors = Array('red', 'green', 'blue');
let speeds = Array(1000, 500, 2000);

rotatorCases.forEach((el) => {
  el.setAttribute(
      'data-color', colors[Math.floor(Math.random() * colors.length)]);
  el.setAttribute(
      'data-speed', speeds[Math.floor(Math.random() * speeds.length)])
});

setCase();