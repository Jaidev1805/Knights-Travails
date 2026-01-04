# Knights Travails

A solution to the **Knights Travails** project from *The Odin Project — JavaScript Course*.

This program calculates the **shortest path a knight can take** on a standard 8×8 chessboard to move from one square to another, using a graph traversal algorithm (BFS).

---

## Project Overview

The purpose of this project is to:

- Treat the chessboard as a graph of nodes (each square).
- Use a breadth-first search (BFS) to find the **shortest path** between two squares.
- Build a function `knightMoves(start, end)` that returns an array of coordinates representing that shortest path.

---

## Features

- Validates knight moves within the 8×8 board.
- Finds the shortest path (fewest moves) using BFS.
- Outputs the full route taken from start to end.
- Handles cases where multiple shortest paths exist.

---

## Usage Example

```
import knightMoves from './knightsTravails.js';

const path1 = knightMoves([0, 0], [1, 2]);
console.log(path1);
// Output: [[0,0], [1,2]]

const path2 = knightMoves([0, 0], [3, 3]);
console.log(path2);
// Example Output: [[0,0], [2,1], [3,3]]
```
