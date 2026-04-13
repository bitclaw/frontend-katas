# 03 — Debounced Search

## Problem

Same as exercise 01, but now the filtering only runs **300ms after the user stops typing**. This simulates a real-world
search that hits an API instead of a local array — you don't want to fire a request on every single keystroke.

## What to focus on
- `setTimeout` / `clearTimeout` pattern
- Why debounce matters (API rate limits, performance)
- The difference between `input` (fires immediately) and debounced behavior

## Run it

Open `index.html` in a browser. Open DevTools console to see when the search actually fires.
