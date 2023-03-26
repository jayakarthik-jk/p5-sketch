class Cell {
  static size = 25;
  constructor(i, j) {
    this.i = i;
    this.j = j;
    this.offsetX = 0;
    this.offsetY = 0;
    this.x = this.i * Cell.size;
    this.y = this.j * Cell.size;
    this.visited = false;
    this.walls = {
      top: true,
      right: true,
      bottom: true,
      left: true,
    };
    this.visitedColor = color(255, 0, 255, 100);
    this.activeColor = color(0, 255, 0);
  }

  setOffset(x, y) {
    this.x = this.i * Cell.size + x;
    this.y = this.j * Cell.size + y;
  }

  highlight() {
    noStroke();
    fill(this.activeColor);
    rect(this.x, this.y, Cell.size, Cell.size);
  }

  removeWall(a, b) {
    if (b) {
      const x = a.i - b.i;
      if (x === 1) {
        a.walls.left = false;
        b.walls.right = false;
      } else if (x === -1) {
        a.walls.right = false;
        b.walls.left = false;
      }
      const y = a.j - b.j;
      if (y === 1) {
        a.walls.top = false;
        b.walls.bottom = false;
      } else if (y === -1) {
        a.walls.bottom = false;
        b.walls.top = false;
      }
    }
  }

  checkNeighbors() {
    const neighbors = [];
    const top = grid[this.i]?.[this.j - 1];
    const right = grid[this.i + 1]?.[this.j];
    const bottom = grid[this.i]?.[this.j + 1];
    const left = grid[this.i - 1]?.[this.j];
    if (top && !top.visited) {
      neighbors.push(top);
    }
    if (right && !right.visited) {
      neighbors.push(right);
    }
    if (bottom && !bottom.visited) {
      neighbors.push(bottom);
    }
    if (left && !left.visited) {
      neighbors.push(left);
    }

    if (neighbors.length > 0) {
      const r = floor(random(0, neighbors.length));
      this.removeWall(this, neighbors[r]);
      return neighbors[r];
    } else {
      return null;
    }
  }

  draw() {
    stroke(255);
    if (this.walls.top) {
      line(this.x, this.y, this.x + Cell.size, this.y);
    }
    if (this.walls.right) {
      line(this.x + Cell.size, this.y, this.x + Cell.size, this.y + Cell.size);
    }
    if (this.walls.bottom) {
      line(this.x + Cell.size, this.y + Cell.size, this.x, this.y + Cell.size);
    }
    if (this.walls.left) {
      line(this.x, this.y + Cell.size, this.x, this.y);
    }

    if (this.visited) {
      noStroke();
      fill(this.visitedColor);
      rect(this.x, this.y, Cell.size, Cell.size);
    }
  }
}
