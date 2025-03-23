let rotatorCases = Array.from(document.getElementsByClassName('rotator__case'));
let indexActiveCase = 0;

function setCase() {
  rotatorCases[indexActiveCase].classList.remove('rotator__case_active');
  ++indexActiveCase;
  if (indexActiveCase >= rotatorCases.length) {
    indexActiveCase = 0;
  }
  rotatorCases[indexActiveCase].classList.add('rotator__case_active');
}

setInterval(setCase, 1000);