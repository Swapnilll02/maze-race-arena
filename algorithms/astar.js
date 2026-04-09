import { getNeighbors, sleep, heuristic } from "../utils/helpers.js";

export async function astar(start, goal, grid, visit) {
  let openSet = [start];
  let closedSet = new Set();

  // initialize
  start.g = 0;
  start.f = heuristic(start, goal);

  while (openSet.length > 0) {

    // 🔥 pick best node (lowest f)
    let bestIndex = 0;
    for (let i = 1; i < openSet.length; i++) {
      if (openSet[i].f < openSet[bestIndex].f) {
        bestIndex = i;
      }
    }

    let current = openSet.splice(bestIndex, 1)[0];

    if (closedSet.has(current)) continue;
    closedSet.add(current);

    visit(current, "astar");

    if (current === goal) {
      return { winner: "A*" };
    }

    for (let neighbor of getNeighbors(current, grid)) {
      if (neighbor.isWall || closedSet.has(neighbor)) continue;

      let tentativeG = current.g + 1;

      // 🔥 KEY: only accept BETTER paths
      if (neighbor.g === undefined || tentativeG < neighbor.g) {

        neighbor.g = tentativeG;
        neighbor.f = neighbor.g + heuristic(neighbor, goal);

        // 🔥 IMPORTANT: avoid duplicates
        if (!openSet.includes(neighbor)) {
          openSet.push(neighbor);
        }
      }
    }

    await sleep(40);
  }

  return null;
}