class FlameSystem {
  constructor(x = width / 2, y = height - 100) {
    this.flames = [];
    this.x = x;
    this.y = y;
    this.src = null;
  }

  setParticleImage(img) {
    this.src = img;
  }

  applyForce(force) {
    for (const flame of this.flames) {
      flame.applyForce(force);
    }
  }

  applyRandomForce() {
    for (const flame of this.flames) {
      const randomForce = createVector(random(-0.1, 0.1), random(-0.1, 0.1));
      flame.applyForce(randomForce);
    }
  }

  addFlame() {
    this.flames.push(new Flame(this.x, this.y, 50, 50, this.src));
  }

  draw() {
    this.addFlame();
    for (let i = this.flames.length - 1; i >= 0; i--) {
      const flame = this.flames[i];
      flame.draw();
      flame.move();
      if (!flame.isAlive()) {
        this.flames.splice(i, 1);
      }
    }
  }
}
