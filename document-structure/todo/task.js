let taskAdd = document.getElementById('tasks__add');
let taskInput = document.getElementById('task__input');
let taskList = document.getElementById('tasks__list');

function createHtmlElement(text) {
  let div1 = document.createElement('div');
  let div2 = document.createElement('div');
  let a = document.createElement('a');

  div1.classList.add('task');
  div2.classList.add('task__title');
  a.setAttribute('href', '#');
  a.classList.add('task__remove');
  a.textContent = 'X';
  a.addEventListener('click', (event) => {
    event.preventDefault();
    div1.remove();
  });
  div2.textContent = text;
  div1.append(div2, a);
  taskList.append(div1);
}

taskAdd.addEventListener('click', (event) => {
  event.preventDefault();

  if (!taskInput.value.length == 0) {
    createHtmlElement(taskInput.value);
  }
});

document.addEventListener('keydown', function(event) {
  event.preventDefault();
  if ((event.key === 'Enter') && !taskInput.value.length == 0) {
    createHtmlElement(taskInput.value);
  }
});