class Ball {
  constructor(
    x = random(width),
    y = random(height),
    mass = random(3, 5),
    c = color(255, 255, 255)
  ) {
    this.location = createVector(x, y);
    this.velocity = createVector(0, 0);
    this.acceleration = createVector(0, 0);
    this.mass = mass;
    this.color = c;
  }
  move() {
    this.velocity.add(this.acceleration);
    this.location.add(this.velocity);
    this.acceleration.mult(0);
  }
  applyForce(force) {
    const f = force.copy();
    f.div(this.mass);
    this.acceleration.add(f);
  }

  attractTo(attractor, insensity) {
    const force = p5.Vector.sub(attractor.location, this.location);
    let distance = force.mag();
    distance = constrain(distance, 5.0, 25.0);
    force.normalize();
    const strength = (insensity * this.mass) / (distance * distance);
    force.mult(strength);
    this.applyForce(force);
  }

  edge() {
    if (this.location.x >= width) {
      this.location.x = width;
      this.velocity.x *= -1;
    }
    if (this.location.y >= height) {
      this.location.y = height;
      this.velocity.y *= -1;
    }
    if (this.location.x <= 0) {
      this.location.x = 0;
      this.velocity.x *= -1;
    }
    if (this.location.y <= 0) {
      this.location.y = 0;
      this.velocity.y *= -1;
    }
  }
  draw() {
    fill(this.color);
    ellipse(this.location.x, this.location.y, this.mass * 10);
  }
  isColliding(ball) {
    const distance = dist(
      this.location.x,
      this.location.y,
      ball.location.x,
      ball.location.y
    );
    return distance < this.mass * 5 + ball.mass * 5;
  }
}
