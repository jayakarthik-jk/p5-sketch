const flameSystems = [];
let img;
function setup() {
  createCanvas(windowWidth, windowHeight);
  loadImage("../assets/particle.png", (image) => {
    img = image;
  });
}

function mousePressed() {
  if (!img) return;
  const flameSystem = new FlameSystem(mouseX, mouseY);
  flameSystem.setParticleImage(img);
  flameSystems.push(flameSystem);
  if (flameSystems.length > 5) {
    flameSystems.shift();
  }
}

function draw() {
  if (!img) return;
  background(0);
  noStroke();
  for (const flameSystem of flameSystems) {
    flameSystem.draw();
    flameSystem.applyRandomForce();
    const wind = createVector(0.02, -0.02);
    flameSystem.applyForce(wind);
  }
}
