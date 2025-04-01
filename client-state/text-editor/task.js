let editor = document.getElementById('editor');
editor.value = localStorage.getItem('editor');
editor.addEventListener('input', () => {
  localStorage.setItem('editor', editor.value);
});

let button = document.createElement('button');
button.classList.add('button__clear');
button.textContent = 'Очистить';
button.addEventListener('click', () => {
  editor.value = '';
  localStorage.setItem('editor', editor.value);
});
document.querySelector('.card').appendChild(button);
