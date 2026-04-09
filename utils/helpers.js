export function getNeighbors(node, grid) {
  const dirs = [[1,0],[-1,0],[0,1],[0,-1]];
  let result = [];

  for (let [dr, dc] of dirs) {
    let r = node.row + dr;
    let c = node.col + dc;

    if (r>=0 && c>=0 && r<grid.length && c<grid[0].length) {
      result.push(grid[r][c]);
    }
  }

  return result;
}

export function sleep(ms) {
  return new Promise(r => setTimeout(r, ms));
}

export function heuristic(a, b) {
  // 🔥 multiply to exaggerate effect
  return 2 * (Math.abs(a.row - b.row) + Math.abs(a.col - b.col));
}