const balls = [];
let liquid;
let gravity;
function setup() {
  createCanvas(windowWidth, windowHeight);
  liquid = new Liquid();
  gravity = createVector(0, 1);
}

function mousePressed() {
  balls.push(new Ball(mouseX, mouseY));
  if (balls.length > 100) {
    balls.shift();
  }
}

function draw() {
  background(0);
  noStroke();
  fill(255, 75);
  liquid.draw();
  fill(255);
  for (let i = 0; i < balls.length; i++) {
    if (liquid.contains(balls[i].location)) {
      const dragForce = liquid.drag(balls[i].velocity);
      dragForce.mult(balls[i].mass);
      balls[i].applyForce(dragForce);
    }
    balls[i].applyForce(gravity);
    balls[i].move();
    balls[i].edge();
    balls[i].draw();
  }
}
