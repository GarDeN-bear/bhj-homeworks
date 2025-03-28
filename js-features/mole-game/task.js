
let hole = Array.from(document.getElementsByClassName('hole'));
let dead = document.getElementById('dead');
let lost = document.getElementById('lost');

hole.forEach(element => {
  element.onclick = checkClickOnMole;
});

let deadCount = parseInt(dead.textContent);
let lostCount = parseInt(lost.textContent);
function checkClickOnMole() {
  //   console.log(this);

  if (this.className.includes('hole_has-mole')) {
    dead.textContent = (++deadCount).toString();
    if (deadCount >= 10) {
      alert('WIN');
      resetStatistics();
    }
  } else {
    lost.textContent = (++lostCount).toString();
    if (lostCount >= 5) {
      alert('WASTED');
      resetStatistics();
    }
  }
}

function resetStatistics() {
  deadCount = 0;
  lostCount = 0;
  dead.textContent = deadCount.toString();
  lost.textContent = lostCount.toString();
}
