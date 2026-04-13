# 07 — Abbreviate String

## Problem

Given a string, replace any word longer than a minimum length with its abbreviated form:
**first letter + count of middle letters + last letter**.

```
"internationalization"  →  "i18n"   (1 + 18 middle + 1 last... wait, let's count)
```

Actually: `i` + 18 + `n` = `i18n` ✓ (20 chars total, 20 - 2 = 18 middle)

```
abbreviate("The internationalization of our application is complex", 10)
→ "The i18n of our a9n is complex"
```

Words with length <= `minLength` are left unchanged.

## What to focus on
- `str.split(" ")` to get words
- `word.length` to check the threshold
- Template literals: `` `${first}${middle}${last}` ``
- `array.map().join(" ")` to rebuild the string

## Run it

Open `index.html` in a browser.
