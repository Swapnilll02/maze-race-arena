export function createGrid(rows, cols) {
  const grid = [];

  for (let r = 0; r < rows; r++) {
    let row = [];

    for (let c = 0; c < cols; c++) {
      row.push({
        row: r,
        col: c,
        isWall: Math.random() < 0.15,
        div: null
      });
    }

    grid.push(row);
  }

  return grid;
}