# frontend-katas

Deliberate practice exercises for frontend interviews. Each kata is self-contained with its own README explaining the problem and what to focus on.

## Exercises

| # | Exercise | Stack | Concepts |
|---|----------|-------|---------|
| 01 | [Real-time Search](./exercises/01-realtime-search/) | Vanilla JS | filter, includes, input events |
| 02 | [Task Manager](./exercises/02-task-manager/) | Node.js + React | REST API, fetch, useState, useEffect |
| 03 | [Debounced Search](./exercises/03-debounced-search/) | Vanilla JS | debounce, setTimeout, clearTimeout |
| 04 | [Todo List](./exercises/04-todo-list/) | Vanilla JS | CRUD, DOM manipulation, state |
| 05 | [Fetch & Filter](./exercises/05-fetch-and-filter/) | Vanilla JS | async/await, fetch, loading states |

---

## Cheat Sheet

### Array methods
```js
arr.filter(item => item.includes("ap"))   // keep items that match
arr.map(item => item.toUpperCase())        // transform every item
arr.find(item => item.id === 3)            // first match or undefined
arr.some(item => item.done)               // true if any match
arr.every(item => item.done)              // true if all match
arr.reduce((acc, item) => acc + item, 0)  // reduce to single value
```

### String methods
```js
str.toLowerCase()          // "Apple" → "apple"
str.trim()                 // "  hi  " → "hi"
str.includes("ap")         // true/false
str.startsWith("ap")       // true/false
str.split(",")             // "a,b" → ["a", "b"]
["a","b"].join(", ")       // ["a", "b"] → "a, b"
```

### DOM
```js
document.getElementById("search")
document.querySelector(".list")
document.querySelectorAll("li")

element.addEventListener("input", (e) => e.target.value)   // fires on every keystroke
element.addEventListener("click", handler)
element.addEventListener("submit", (e) => { e.preventDefault(); ... })

element.innerHTML = "<li>item</li>"   // replace inner HTML
element.textContent = "hello"          // replace text only
```

### Fetch / async
```js
// Promise chain
fetch("/tasks")
  .then(res => res.json())
  .then(data => console.log(data));

// async/await (prefer this)
async function getTasks() {
  const res = await fetch("/tasks");
  const data = await res.json();
  return data;
}

// POST
await fetch("/tasks", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ title: "New task" }),
});
```

### Events to know
| Event | When it fires |
|-------|--------------|
| `input` | Every keystroke, paste, autocomplete |
| `change` | When input loses focus after a change |
| `click` | Mouse click |
| `submit` | Form submission |
| `keydown` | Key pressed (has `e.key`) |

### Debounce pattern
```js
let timer;
input.addEventListener("input", (e) => {
  clearTimeout(timer);
  timer = setTimeout(() => {
    // runs 300ms after user stops typing
    doSearch(e.target.value);
  }, 300);
});
```

### React quick reference
```jsx
import { useState, useEffect } from "react";

function App() {
  const [tasks, setTasks] = useState([]);      // state
  const [input, setInput] = useState("");

  useEffect(() => {                             // runs on mount
    fetch("/tasks")
      .then(res => res.json())
      .then(data => setTasks(data));
  }, []);                                       // [] = run once

  function addTask() {
    setTasks([...tasks, { id: Date.now(), title: input }]);
    setInput("");
  }

  return (
    <div>
      <input value={input} onChange={e => setInput(e.target.value)} />
      <button onClick={addTask}>Add</button>
      <ul>
        {tasks.map(t => <li key={t.id}>{t.title}</li>)}
      </ul>
    </div>
  );
}
```

### Node.js / Express quick reference
```js
const express = require("express");
const app = express();

app.use(express.json());        // parse JSON bodies
app.use(require("cors")());     // allow cross-origin requests

app.get("/tasks", (req, res) => res.json(tasks));
app.post("/tasks", (req, res) => {
  const task = req.body;
  tasks.push(task);
  res.status(201).json(task);
});

app.listen(3000, () => console.log("Running on http://localhost:3000"));
```
