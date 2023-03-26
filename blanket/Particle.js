class Particle extends toxi.physics2d.VerletParticle2D {
  constructor(x, y, r) {
    const v = new toxi.geom.Vec2D(x, y);
    super(v);
    this.r = r;
  }
  draw() {
    noStroke();
    ellipse(this.x, this.y, this.r);
  }
}
