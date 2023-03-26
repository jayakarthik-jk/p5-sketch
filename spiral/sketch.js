let radius;
let angle = 0;
let aVelocity;
let aAcceleration;
function setup() {
  createCanvas(windowWidth, windowHeight);
  loc = createVector(10, 10);
  aVelocity = 0.01;
  // aAcceleration = 0.001;
  radius = width / 4;
  background(0);
}

function draw() {
  stroke(255);
  translate(width / 2, height / 2);
  loc.x = radius * cos(angle);
  loc.y = radius * sin(angle);
  point(loc.x, loc.y);
  angle += aVelocity;
  // aVelocity += aAcceleration;
  radius -= 0.01;
  radius = constrain(radius, 0, width);
}
