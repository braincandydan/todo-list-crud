function addTask() {
    const taskName = document.getElementById('newTask').value;
    const dueDate = document.getElementById('dueDate').value;
  
    if (taskName.trim() !== '') {
      const taskList = document.getElementById('taskList');
      const li = document.createElement('li');
      li.innerHTML = `
        <span>${taskName}</span>
        <span>Due: ${formatDueDate(dueDate)}</span>
        <button onclick="deleteTask(this)">Delete</button>
      `;
      taskList.appendChild(li);
      document.getElementById('newTask').value = '';
      document.getElementById('dueDate').value = '';
    }
  }
  
  function deleteTask(button) {
    button.parentElement.remove();
  }
  
  function formatDueDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  }
  