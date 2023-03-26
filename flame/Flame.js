class Flame {
  constructor(x, y, width, height, src) {
    this.width = width;
    this.height = height;
    this.src = src;
    this.color = color(255, 255, 255);
    this.location = createVector(x, y);
    this.velocity = createVector(0, 0);
    this.acceleration = createVector(0, 0);
    this.life = 255;
  }

  move() {
    this.location.add(this.velocity);
    this.velocity.add(this.acceleration);
    this.acceleration.mult(0);
    this.life -= 2;
  }

  draw() {
    if (this.src) {
      image(
        this.src,
        this.location.x,
        this.location.y,
        this.width,
        this.height
      );
    } else {
      fill(255, this.life);
      ellipse(this.location.x, this.location.y, this.width, this.height);
    }
  }
  applyForce(force) {
    this.acceleration.add(force);
  }
  isAlive() {
    return this.life > 0;
  }
}
