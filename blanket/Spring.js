class Spring extends toxi.physics2d.VerletSpring2D {
  constructor(a, b, len, str) {
    super(a, b, len, str);
  }
  draw() {
    line(this.a.x, this.a.y, this.b.x, this.b.y);
  }
}
