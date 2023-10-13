
function addTask() {
    const taskName = document.getElementById('newTask').value;
    const dueDate = document.getElementById('dueDate').value;
    const dueTime = document.getElementById('dueTime').value;
  
    if (taskName.trim() !== '') {
      const taskList = document.getElementById('taskList');
      const li = document.createElement('li');
      li.innerHTML = `
        <span>${taskName}</span>
        <span>Due: ${formatDueDate(dueDate, dueTime)}</span>
        <button onclick="deleteTask(this)">Delete</button>
      `;
      taskList.appendChild(li);
      document.getElementById('newTask').value = '';
      document.getElementById('dueDate').value = '';
      document.getElementById('dueTime').value = '';
    }
  }
  
  function deleteTask(button) {
    button.parentElement.remove();
  }
  
  function formatDueDate(dateString, timeString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
    return new Date(`${dateString}T${timeString}`).toLocaleDateString('en-US', options);
  }
  
  import flatpickr from "flatpickr";
  flatpickr("#dueDateTime", {
    enableTime: true,
    dateFormat: "Y-m-d H:i:S",
  });
  
