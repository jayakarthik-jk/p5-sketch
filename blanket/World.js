class World extends toxi.physics2d.VerletPhysics2D {
  constructor() {
    super();
    this.setWorldBounds(new toxi.geom.Rect(0, 0, width, height));
  }
  addGravity() {
    this.addBehavior(
      new toxi.physics2d.behaviors.GravityBehavior(new toxi.geom.Vec2D(0, 0.1))
    );
  }
}
