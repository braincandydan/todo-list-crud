import flatpickr from "flatpickr";

// Initialize Flatpickr
flatpickr("#dueDateTime", {
    enableTime: true,
    dateFormat: "Y-m-d H:i:S",
});

function addTask() {
    const taskName = document.getElementById('newTask').value;
    const dueDateTime = document.getElementById('dueDateTime').value;
    const priority = document.getElementById('priority').value;
    const category = document.getElementById('category').value;
    const notes = document.getElementById('notes').value;
    const completed = document.getElementById('completed').checked;
    const subtasks = document.getElementById('subtasks').value;
    const labels = document.getElementById('labels').value;
    const attachments = document.getElementById('attachments').value;
    const reminder = document.getElementById('reminder').value;
    const recurring = document.getElementById('recurring').value;
    const estimateTime = document.getElementById('estimateTime').value;

    if (taskName.trim() !== '' && dueDateTime.trim() !== '') {
        const taskList = document.getElementById('taskList');
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${taskName}</span>
            <span>Due: ${formatDueDate(dueDateTime)}</span>
            <span>Priority: ${priority}</span>
            <span>Category: ${category}</span>
            <span>Notes: ${notes}</span>
            <span>Completed: ${completed ? 'Yes' : 'No'}</span>
            <span>Subtasks: ${subtasks}</span>
            <span>Labels/Colors: ${labels}</span>
            <span>Attachments: ${attachments}</span>
            <span>Reminder/Alert: ${reminder}</span>
            <span>Recurring Tasks: ${recurring}</span>
            <span>Estimate Time: ${estimateTime} minutes</span>
            <button onclick="deleteTask(this)">Delete</button>
        `;
        taskList.appendChild(li);
        document.getElementById('newTask').value = '';
        document.getElementById('dueDateTime').value = '';
        document.getElementById('priority').value = 'high';
        document.getElementById('category').value = '';
        document.getElementById('notes').value = '';
        document.getElementById('completed').checked = false;
        document.getElementById('subtasks').value = '';
        document.getElementById('labels').value = '';
        document.getElementById('attachments').value = '';
        document.getElementById('reminder').value = '';
        document.getElementById('recurring').value = '';
        document.getElementById('estimateTime').value = '';
    }
}

function deleteTask(button) {
    button.parentElement.remove();
}

function formatDueDate(dateTimeString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
    return new Date(dateTimeString).toLocaleDateString('en-US', options);
}
