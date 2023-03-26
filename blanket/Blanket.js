class Blanket {
  world;
  particles = [];
  springs = [];
  particleRadius = 10;
  n = 10;
  size = this.n * this.n;
  padding = 50;
  constructor() {
    this.world = new World();
    this.world.addGravity();
    this.placeParticle();
    this.constrainSpring();
  }
  placeParticle() {
    const start = 500;
    let x = start;
    let y = 100;
    for (let i = 0; i < this.size; i++) {
      this.particles[i] = new Particle(x, y, this.particleRadius);
      this.world.addParticle(this.particles[i]);
      x += this.padding;
      if (x >= this.padding * this.n + start) {
        x = start;
        y += this.padding;
      }
    }
    this.particles[0].lock();
    this.particles[this.n - 1].lock();
  }
  constrainSpring() {
    const createSpring = (p1, p2) => {
      const spring = new Spring(p1, p2, this.padding, 0.1);
      this.springs.push(spring);
      this.world.addSpring(spring);
    };
    for (let i = 0; i < this.particles.length; i++) {
      if (i % this.n === 0) {
        createSpring(this.particles[i], this.particles[i + 1]);
        if (i !== 0) {
          createSpring(this.particles[i], this.particles[i - this.n]);
        }
        if (i !== this.size - this.n) {
          createSpring(this.particles[i], this.particles[i + this.n]);
        }
      } else if (i % this.n === this.n - 1) {
        createSpring(this.particles[i], this.particles[i - 1]);
        if (i !== this.n - 1) {
          createSpring(this.particles[i], this.particles[i - this.n]);
        }
        if (i !== this.size - 1) {
          createSpring(this.particles[i], this.particles[i + this.n]);
        }
      } else if (i > this.size - this.n - 1) {
        createSpring(this.particles[i], this.particles[i - this.n]);
        if (i !== this.size - this.n) {
          createSpring(this.particles[i], this.particles[i - 1]);
        }
        if (i !== this.size - 1) {
          createSpring(this.particles[i], this.particles[i + 1]);
        }
      } else if (i < this.n) {
        createSpring(this.particles[i], this.particles[i + this.n]);
        if (i !== 0) {
          createSpring(this.particles[i], this.particles[i - 1]);
        }
        if (i !== this.n - 1) {
          createSpring(this.particles[i], this.particles[i + 1]);
        }
      } else {
        createSpring(this.particles[i], this.particles[i - 1]);
        createSpring(this.particles[i], this.particles[i + 1]);
        createSpring(this.particles[i], this.particles[i - this.n]);
        createSpring(this.particles[i], this.particles[i + this.n]);
      }
    }
  }

  draw() {
    for (let i = 0; i < this.particles.length; i++) {
      fill(255);
      this.particles[i].draw();
    }
    for (let i = 0; i < this.springs.length; i++) {
      stroke(255);
      strokeWeight(1);
      this.springs[i].draw();
    }
    this.world.update();
  }
}
