let wave1;
let wave2;
let wave3;
function setup() {
  createCanvas(windowWidth, windowHeight);
  wave1 = new Wave(0, height / 4, 40);
  wave2 = new Wave(0, height / 2, 10, 30);
  wave3 = new Wave(0, (height / 4) * 3, 25, 30);
}

function draw() {
  background(0);
  wave1.draw();
  wave1.update();
  wave2.draw();
  wave2.update();
  wave3.draw();
  wave3.update();
}
