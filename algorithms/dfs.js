import { getNeighbors, sleep } from "../utils/helpers.js";

export async function dfs(start, goal, grid, visit) {
  let stack = [start];
  let visited = new Set();

  while (stack.length) {
    let current = stack.pop();

    if (visited.has(current)) continue;
    visited.add(current);

    visit(current, "dfs");

    if (current === goal) return { winner: "DFS" };

    let neighbors = getNeighbors(current, grid);

    // 🔥 reverse order to make it go deep visually
    neighbors.reverse();

    for (let n of neighbors) {
      if (!visited.has(n) && !n.isWall) {
        stack.push(n);
      }
    }

    await sleep(40);
  }
}