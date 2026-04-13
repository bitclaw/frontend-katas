# 02 — Task Manager (Node.js API + React)

## Problem

You're building a mini task manager.

- The **Node.js backend** exposes a REST API with a list of tasks
- The **React frontend** fetches those tasks on load and displays them
- The user can **add new tasks** via a form — they appear instantly without a page reload

## API

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/tasks` | Returns all tasks |
| POST | `/tasks` | Creates a new task (body: `{ title }`) |

## What to focus on
- `useEffect` with `fetch` to load data on mount
- `useState` for the task list and the input field
- Optimistic or post-confirm UI update after adding a task
- Controlled input (`value` + `onChange`)
- Spreading state arrays: `[...tasks, newTask]`

## Run it

```bash
# Terminal 1 — start the API
cd backend
npm install
node server.js

# Terminal 2 — open the frontend
# Just open frontend/index.html in a browser
# (React is loaded via CDN, no build step needed)
```
