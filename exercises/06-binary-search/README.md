# 06 — Binary Search

## Problem

Given a **sorted** array and a target value, return the index of the target. Return `null` if not found.
Do NOT use `Array.indexOf()` — the point is to implement the algorithm.

```
binarySearch([1, 2, 3, 4, 5], 3)  → 2
binarySearch([1, 2, 3, 4, 5], 6)  → null
```

## Why binary search?

Linear search (`indexOf`) checks every element — O(n).
Binary search cuts the remaining space in half each step — O(log n).
With 1 million items, linear = up to 1,000,000 checks. Binary = up to 20.

## The algorithm

1. Set `low = 0`, `high = array.length - 1`
2. While `low <= high`:
   - Find `mid = Math.floor((low + high) / 2)`
   - If `array[mid] === target` → return `mid`
   - If `array[mid] < target` → target is in the right half, set `low = mid + 1`
   - If `array[mid] > target` → target is in the left half, set `high = mid - 1`
3. Return `null` (not found)

## What to focus on
- The `low <= high` condition (not `<`)
- Moving `low` and `high`, not the array itself
- The `Math.floor` on mid

## Run it

Open `index.html` in a browser. All test cases run on load.
