let slider;
function setup() {
  createCanvas(windowWidth, windowHeight);
}

const balls = [];

function draw() {
  background(0);
  for (const ball of balls) {
    ball.render();
  }
  if (balls.length > 30) {
    balls.splice(0, 1);
  }
}

function mousePressed() {
  const ball = new Ball(mouseX, mouseY);
  balls.push(ball);
}

class Ball {
  constructor(x, y, r = random(30, 50), brightness = 255) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.brightness = brightness;
    this.direction = 1;
    this.speed = 0;
    this.gravity = 0.5;
  }
  render() {
    noStroke();
    fill(this.brightness);
    ellipse(this.x, this.y, this.r);
    this.y += this.speed;
    this.x += this.direction * 5;
    if (this.x + this.r / 2 > width) {
      this.direction = -1;
    }
    if (this.x + this.r / 2 < 0) {
      this.direction = 1;
    }
    this.speed += this.gravity;
    if (this.y > height) {
      this.y = height;
      this.speed *= -0.9;
    }
  }
}
