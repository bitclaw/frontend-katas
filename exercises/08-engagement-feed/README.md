# 08 — Engagement Feed

## Problem

You have a list of events (comments, likes, shares). Build a feed that:
- Only shows **published** events
- Lets the user **filter by type** (all / comment / like / share)
- Sorts events by **most recent first**
- Shows a **relative timestamp** ("2 hours ago", "3 days ago")

This comes from a real Svitla interview exercise originally written in Ruby.

## What to focus on
- `array.filter()` chaining (published + type)
- `array.sort()` with dates
- `Date` arithmetic for relative timestamps
- Keeping the full list in memory and re-filtering on every UI change

## Run it

Open `index.html` in a browser.
