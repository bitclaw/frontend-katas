# 01 — Real-time Search / Filter

## Problem

Given a predefined list of strings, filter and display results in real time as the user types. Matching should be case-insensitive and substring-based (not just prefix).

**Example:**
```
List: ["banana", "apple", "pineapple", "kiwi"]
User types: "ap"
Result: apple, pineapple
```

## What to focus on
- `array.filter()` + `string.includes()`
- `input` event (not `keyup` — catches paste and autocomplete)
- Lowercasing both the query and the item
- Empty input → show all results

## Run it

Just open `index.html` in a browser. No build step needed.
