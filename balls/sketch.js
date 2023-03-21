const balls = [];
let gravity;
function setup() {
  createCanvas(windowWidth, windowHeight);
  gravity = createVector(0, 1);
}

function mousePressed() {
  const ball = new Ball(mouseX, mouseY);
  balls.push(ball);
  if (balls.length > 100) {
    balls.shift();
  }
}

function draw() {
  background(0);
  noStroke();
  for (const ball of balls) {
    ball.move();
    ball.edge();
    ball.draw();
    ball.applyForce(gravity);
  }
}
