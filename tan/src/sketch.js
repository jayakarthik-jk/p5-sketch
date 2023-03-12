let padding;
let gap = 5;
let circleDiameter;
let circleRadius;
let circleX;
let circleY;
let high;
let low;
let degree = 0;
let angle = 0;
let circumference;
let pointWidth = 5;
const trail = [];
function setup() {
  createCanvas(windowWidth, windowHeight);
  padding = (width / 100) * 5;
  circleDiameter = width > height ? (height / 100) * 20 : (width / 100) * 20;
  circleRadius = circleDiameter / 2;
  circumference = 2 * PI * circleRadius;
  circleX = padding + circleRadius - gap;
  circleY = height / 2 - circleRadius - gap;
  high = circleY - circleRadius;
  low = circleY + circleRadius;
}

function draw() {
  background(0);
  stroke(255);
  strokeWeight(2);
  noFill();
  // Draw the horizontal line
  line(
    padding + circleDiameter,
    height / 2 - circleDiameter - gap - padding,
    padding + circleDiameter,
    height / 2 + circleDiameter + gap + padding
  );

  // Draw the vertical line
  line(padding - gap, height / 2, width - padding, height / 2);

  // Draw the circle

  ellipse(circleX, circleY, circleDiameter);

  fill(255);

  cpoint(circleX, circleY, pointWidth);
  strokeWeight(1);
  line(circleX, circleY, circleX + circleRadius, circleY);

  // Calculate the point
  const value = map(tan(degree), -1, 1, low, high);
  // Draw the point

  ellipse(padding + circleDiameter, value, pointWidth);
  // Add the point to the trail
  trail.unshift(value);
  // Draw the trail
  for (let i = 0; i < trail.length; i++) {
    ellipse(padding + circleDiameter + i, trail[i], 2);
  }
  if (trail.length > circumference * 2) {
    trail.pop();
  }
  // Draw the line between the point and the circle
  let x = circleX + circleRadius * cos(angle);
  let y = circleY + circleRadius * sin(angle);
  cpoint(x, y, pointWidth);

  drawingContext.setLineDash([5, 5]);
  line(padding + circleDiameter, value, x, y);
  line(x, y, x, high);
  drawingContext.setLineDash([]);
  line(circleX, circleY, x, y);
  cpoint(x, high, pointWidth);
  degree -= 0.025;
  angle += 0.025;
}

function cpoint(x, y, w = pointWidth, r = 219, g = 174, b = 237) {
  fill(r, g, b);
  stroke(r, g, b);
  ellipse(x, y, w);
  fill(255);
  stroke(255);
}
