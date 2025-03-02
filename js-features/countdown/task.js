const timer = document.getElementById('timer');
timer.textContent = 5;
const id = setInterval(() => {
  timer.textContent = parseInt(timer.textContent) - 1;
  if (timer.textContent === '0') {
    clearInterval(id);
    alert('Вы победили в конкурсе!');
  }
}, 1000);
console.log(timer);