class Liquid {
  constructor(x = 0, y = height / 2, _width = width, _height = height / 2) {
    this.location = createVector(x, y);
    this.width = _width;
    this.height = _height;
    this.coeff = -0.1;
  }
  draw() {
    rect(this.location.x, this.location.y, this.width, this.height);
  }
  contains(location) {
    const distance = this.location.y - location.y;
    return distance < 0;
  }
  drag(velocity) {
    const force = velocity.copy();
    force.normalize();
    const speed = velocity.mag();
    force.mult(this.coeff * speed * speed);
    return force;
  }
}
