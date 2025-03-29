let taskAdd = document.getElementById('tasks__add');
let taskInput = document.getElementById('task__input');
let tasksList = document.getElementById('tasks__list');

function createHtmlElement(title) {
  tasksList.insertAdjacentHTML('afterbegin', `
        <div class="task">
          <div class="task__title">
            ${title}
          </div>
          <a href="#" class="task__remove">X</a>
        </div>
    `);
  let lastTaskRemove =
      Array.from(tasksList.getElementsByClassName('task__remove'))[0];
  let lastTask = Array.from(tasksList.getElementsByClassName('task'))[0];
  lastTaskRemove.addEventListener('click', (event) => {
    event.preventDefault();
    lastTask.remove();
  });
}

taskAdd.addEventListener('click', (event) => {
  event.preventDefault();

  if (!taskInput.value.length == 0) {
    createHtmlElement(taskInput.value);
  }
});
