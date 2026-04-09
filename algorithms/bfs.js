import { getNeighbors, sleep } from "../utils/helpers.js";

export async function bfs(start, goal, grid, visit) {
  let q = [start];
  let visited = new Set();

  while (q.length) {
    let cur = q.shift();

    if (visited.has(cur)) continue;
    visited.add(cur);

    visit(cur, "bfs");

    if (cur === goal) return { winner: "BFS" };

    for (let n of getNeighbors(cur, grid)) {
      if (!visited.has(n) && !n.isWall) q.push(n);
    }

    await sleep(40);
  }
}