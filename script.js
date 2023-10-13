function addTask() {
  const taskName = document.getElementById('newTask').value;
  if (taskName.trim() !== '') {
    const taskList = document.getElementById('taskList');
    const li = document.createElement('li');
    li.innerHTML = `
      <span>${taskName}</span>
      <button onclick="deleteTask(this)">Delete</button>
    `;
    taskList.appendChild(li);
    document.getElementById('newTask').value = '';
  }
}

function deleteTask(button) {
  button.parentElement.remove();
}
