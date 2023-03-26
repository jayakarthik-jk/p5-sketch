let cols, rows;
const grid = [];
const stack = [];
let current;
function setup() {
  createCanvas(windowWidth, windowHeight);
  cols = floor(width / 2 / Cell.size);
  rows = floor(height / 2 / Cell.size);
  for (let i = 0; i < cols; i++) {
    const row = [];
    for (let j = 0; j < rows; j++) {
      const cell = new Cell(i, j);
      cell.setOffset(width / 4, height / 4);
      row.push(cell);
    }
    grid.push(row);
  }
  current = grid[0][0];
}

function draw() {
  background(0);
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      grid[i][j].draw();
    }
  }
  current.visited = true;
  current.highlight();
  const next = current.checkNeighbors();
  if (next) {
    next.visited = true;
    stack.push(current);
    current = next;
  } else if (stack.length > 0) {
    current = stack.pop();
  }
}
