class Momentum {
  apply(ball1, ball2) {
    if (ball1.isColliding(ball2)) {
      let u1 = ball1.velocity.copy();
      let u2 = ball2.velocity.copy();
      let m1 = ball1.mass;
      let m2 = ball2.mass;
      u1.mult(m1 - m2);
      u2.mult(2 * m2);
      u1.div(m1 + m2);
      u2.div(m1 + m2);
      let v1 = u1.add(u2);
      u1 = ball1.velocity.copy();
      u2 = ball2.velocity.copy();
      u1.mult(2 * m1);
      u2.mult(m2 - m1);
      u1.div(m1 + m2);
      u2.div(m1 + m2);
      let v2 = u1.add(u2);
      ball1.velocity = v1;
      ball2.velocity = v2;
    }
  }
}
