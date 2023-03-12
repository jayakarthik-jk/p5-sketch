const bubbles = [];
function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < 10000; i++) {
    const circle = { x: random(width), y: random(height), r: random(50) };
    let flag = true;
    for (let j = 0; j < bubbles.length; j++) {
      const distance = dist(circle.x, circle.y, bubbles[j].x, bubbles[j].y);
      if (distance <= bubbles[j].r + circle.r) {
        flag = false;
        break;
      }
    }
    if (flag) {
      bubbles.push(circle);
    }
  }
}

function draw() {
  background(0);
  stroke(255);
  noFill();
  for (let i = 0; i < bubbles.length; i++) {
    ellipse(bubbles[i].x, bubbles[i].y, bubbles[i].r * 2);
  }
}
