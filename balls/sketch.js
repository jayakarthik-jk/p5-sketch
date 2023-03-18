const balls = [];
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function mousePressed() {
  balls.push(new Ball(mouseX, mouseY));
  if (balls.length > 100) {
    balls.shift();
  }
}

function draw() {
  background(0);
  for (const ball of balls) {
    ball.move();
    ball.edge();
    ball.display();
  }
}

class Ball {
  constructor(x = random(width), y = random(height), radius = random(20, 50)) {
    this.location = createVector(x, y);
    this.velocity = createVector(0, 1);
    this.accelaration = createVector(0, 1);
    this.radius = radius;
  }
  move() {
    this.velocity.add(this.accelaration);
    this.location.add(this.velocity);
  }
  edge() {
    if (this.location.x >= width) {
      this.location.x = width;
      this.velocity.x *= -1;
    }
    if (this.location.y >= height) {
      this.location.y = height;
      this.velocity.y *= -1;
    }
  }
  display() {
    noStroke();
    fill(255);
    ellipse(this.location.x, this.location.y, this.radius);
  }
}
