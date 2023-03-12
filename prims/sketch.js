const nodes = [];
let lines = [];
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function mousePressed() {
  lines = [];
  nodes.push({ x: mouseX, y: mouseY });
  prims();
}

function draw() {
  background(0);
  for (let i = 0; i < nodes.length; i++) {
    ellipse(nodes[i].x, nodes[i].y, 10);
  }
  for (let i = 0; i < lines.length; i++) {
    stroke(255);
    line(lines[i].x1, lines[i].y1, lines[i].x2, lines[i].y2);
  }
}

function prims() {
  let visited = [];
  let unvisited = [];
  for (let i = 0; i < nodes.length; i++) {
    unvisited.push(nodes[i]);
  }
  visited.push(unvisited[0]);
  unvisited.splice(0, 1);
  while (unvisited.length > 0) {
    let min = Infinity;
    let vIndex;
    let uIndex;
    for (let i = 0; i < visited.length; i++) {
      for (let j = 0; j < unvisited.length; j++) {
        const distance = dist(
          visited[i].x,
          visited[i].y,
          unvisited[j].x,
          unvisited[j].y
        );
        if (distance < min) {
          min = distance;
          vIndex = i;
          uIndex = j;
        }
      }
    }
    stroke(255);
    lines.push({
      x1: visited[vIndex].x,
      y1: visited[vIndex].y,
      x2: unvisited[uIndex].x,
      y2: unvisited[uIndex].y,
    });
    visited.push(unvisited[uIndex]);
    unvisited.splice(uIndex, 1);
  }
}
