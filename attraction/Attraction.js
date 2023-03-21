class Attraction {
  constructor(strength) {
    this.strength = strength;
  }

  apply(attractor, mover) {
    const force = p5.Vector.sub(attractor.location, mover.location);
    let distance = force.mag();
    distance = constrain(distance, 5.0, 25.0);
    force.normalize();
    const strength = (this.strength * mover.mass) / (distance * distance);
    force.mult(strength);
    mover.applyForce(force);
  }
}
