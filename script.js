const flatpickr = require("flatpickr");

flatpickr("#dueDateTime", {
  enableTime: true,
  dateFormat: "Y-m-d H:i:S",
});

function addTask() {
  const taskName = document.getElementById('newTask').value;
  const dueDateTime = document.getElementById('dueDateTime').value;

  if (taskName.trim() !== '' && dueDateTime.trim() !== '') {
    const taskList = document.getElementById('taskList');
    const li = document.createElement('li');
    li.innerHTML = `
      <span>${taskName}</span>
      <span>Due: ${formatDueDate(dueDateTime)}</span>
      <button onclick="deleteTask(this)">Delete</button>
    `;
    taskList.appendChild(li);
    document.getElementById('newTask').value = '';
    document.getElementById('dueDateTime').value = '';
  }
}

function deleteTask(button) {
  button.parentElement.remove();
}

function formatDueDate(dateTimeString) {
  const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
  return new Date(dateTimeString).toLocaleDateString('en-US', options);
}
