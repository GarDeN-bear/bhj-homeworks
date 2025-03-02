const timer = document.getElementById('timer');
// timer.textContent = '01:00:05';
const id = setInterval(() => {
  timer.textContent =
      convertToHhMmSs(parseInt(timeToSeconds(timer.textContent)) - 1);
  if (timer.textContent === '00:00:00') {
    clearInterval(id);
    alert('Вы победили в конкурсе!');
  }
}, 1000);

function convertToHhMmSs(seconds) {
  const hh = Math.floor(Math.abs(seconds / 3600)).toString().padStart(2, '0');
  const mm =
      Math.floor(Math.abs((seconds % 3600) / 60)).toString().padStart(2, '0');
  const ss = (seconds % 60).toString().padStart(2, '0');
  console.log(seconds);
  return `${hh}:${mm}:${ss}`;
}

function timeToSeconds(seconds) {
  const [hh, mm, ss] = seconds.split(':').map(Number);
  return parseInt(hh * 3600 + mm * 60 + ss);
}
