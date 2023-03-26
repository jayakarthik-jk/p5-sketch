let blanket;
function setup() {
  createCanvas(windowWidth, windowHeight);
  blanket = new Blanket();
}

function draw() {
  background(0);
  blanket.draw();
}
