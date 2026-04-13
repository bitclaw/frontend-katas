const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

let tasks = [
  { id: 1, title: "Buy groceries", done: false },
  { id: 2, title: "Walk the dog", done: false },
  { id: 3, title: "Read a book", done: true },
];

app.get("/tasks", (req, res) => {
  res.json(tasks);
});

app.post("/tasks", (req, res) => {
  const { title } = req.body;
  if (!title || !title.trim()) {
    return res.status(400).json({ error: "Title is required" });
  }
  const task = { id: Date.now(), title: title.trim(), done: false };
  tasks.push(task);
  res.status(201).json(task);
});

app.listen(3000, () => {
  console.log("API running on http://localhost:3000");
});
