import { getNeighbors, sleep, heuristic } from "../utils/helpers.js";

export async function bestFirst(start, goal, grid, visit) {
  let open = [start];
  let visited = new Set();

  while (open.length) {
    // 🔥 ONLY heuristic (greedy)
    open.sort((a, b) => heuristic(a, goal) - heuristic(b, goal));

    let current = open.shift();

    if (visited.has(current)) continue;
    visited.add(current);

    visit(current, "best");

    if (current === goal) return { winner: "Best First" };

    for (let n of getNeighbors(current, grid)) {
      if (!visited.has(n) && !n.isWall) {
        open.push(n);
      }
    }

    await sleep(40);
  }
}