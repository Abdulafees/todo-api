const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// ✅ Default todo list
const staticTodos = [
    { id: 1, task: "Wake up early" },
    { id: 2, task: "Brush teeth" },
    { id: 3, task: "Eat breakfast" },
    { id: 4, task: "Read emails" },
    { id: 5, task: "Work on Node.js project" },
    { id: 6, task: "Attend Zoom meeting" },
    { id: 7, task: "Lunch break" },
    { id: 8, task: "Continue project tasks" },
    { id: 9, task: "Review team progress" },
    { id: 10, task: "Plan for tomorrow" }
];

// ✅ Initialize current todos
let todos = [
    { id: 1, task: "Wake up early" },
    { id: 2, task: "Brush teeth" },
    { id: 3, task: "Eat breakfast" },
    { id: 4, task: "Read emails" },
    { id: 5, task: "Work on Node.js project" },
    { id: 6, task: "Attend Zoom meeting" },
    { id: 7, task: "Lunch break" },
    { id: 8, task: "Continue project tasks" },
    { id: 9, task: "Review team progress" },
    { id: 10, task: "Plan for tomorrow" }
];
// ✅ Get all todos
app.get('/todos', (req, res) => {
    res.json(todos);
});

// ✅ Add a new todo
app.post('/todos', (req, res) => {
    const { task } = req.body;
    if (!task) {
        return res.status(400).json({ message: "Task is required" });
    }
    const newTodo = { id: Date.now(), task };
    todos.push(newTodo);
    res.status(201).json(newTodo);
});

// ✅ Delete a todo by ID
app.delete('/todos/:id', (req, res) => {
    const id = parseInt(req.params.id);
    todos = todos.filter(todo => todo.id !== id);
    res.json({ message: 'Todo deleted' });
});

// ✅ Reset todos to initial list
app.get('/reset', (req, res) => {
    todos = [...staticTodos];
    res.json({ message: 'Todo list has been reset', todos });
});

// ✅ Start server
app.listen(port, () => {
    console.log(`Todo API running at http://localhost:${port}`);
});
