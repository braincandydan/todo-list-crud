const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

let tasks = [];

// Create
app.post('/tasks', (req, res) => {
  const task = req.body;
  tasks.push(task);
  res.json({ message: 'Task added successfully', task });
});

// Read
app.get('/tasks', (req, res) => {
  res.json(tasks);
});

// Update
app.put('/tasks/:id', (req, res) => {
  const id = req.params.id;
  const updatedTask = req.body;

  tasks = tasks.map(task => (task.id === id ? updatedTask : task));
  res.json({ message: 'Task updated successfully', tasks });
});

// Delete
app.delete('/tasks/:id', (req, res) => {
  const id = req.params.id;
  tasks = tasks.filter(task => task.id !== id);
  res.json({ message: 'Task deleted successfully', tasks });
});
