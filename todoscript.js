let taskCounter = 1;

function addTask() {
  const taskInput = document.getElementById('task');
  const taskText = taskInput.value.trim();

  if (taskText !== '') {
    const taskList = document.getElementById('taskList');

    const li = document.createElement('li');
    li.innerHTML = `${taskCounter}. ${taskText} <button onclick="removeTask(this)">Remove</button>`;
    taskList.appendChild(li);

    taskInput.value = '';
    taskCounter++;
  }
}

function removeTask(button) {
  const taskList = document.getElementById('taskList');
  taskList.removeChild(button.parentNode);
}
