const balls = [];
let attraction;
function setup() {
  createCanvas(windowWidth, windowHeight);
  attraction = new Attraction(2);
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
  fill(255);
  for (let i = 0; i < balls.length; i++) {
    for (let j = 0; j < balls.length; j++) {
      balls[i].move();
      balls[i].edge();
      balls[i].draw();
      attraction.apply(balls[i], balls[j]);
    }
  }
}
