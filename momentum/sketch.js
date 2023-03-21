const balls = [];
let gravity;
let momentum;
function setup() {
  createCanvas(windowWidth, windowHeight);
  gravity = createVector(0, 1);
  momentum = new Momentum();
}

function mousePressed() {
  const ball = new Ball(mouseX, mouseY);
  ball.color = color(random(255), random(255), random(255));
  ball.velocity.x = 5;
  balls.push(ball);
  if (balls.length > 10) balls.shift();
}

function draw() {
  background(0);
  noStroke();
  for (let i = 0; i < balls.length; i++) {
    balls[i].move();
    balls[i].edge();
    balls[i].draw();
    balls[i].applyForce(gravity);
    for (let j = 0; j < balls.length; j++) {
      if (i != j) {
        momentum.apply(balls[i], balls[j]);
      }
    }
  }
}
