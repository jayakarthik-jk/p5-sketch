class Wave {
  constructor(x, y, amplitude = 50, period = 5) {
    this.wave = [];
    this.angle = 0;
    this.amplitude = amplitude;
    this.x = x;
    this.y = y;
    this.period = period;
  }
  draw() {
    noStroke();
    for (let i = 0; i < this.wave.length; i++) {
      ellipse(i + this.x, this.wave[i] + this.y, 2, 2);
    }
  }
  update() {
    this.wave.unshift(sin(this.angle) * this.amplitude);
    if (this.wave.length > 1000) {
      this.wave.pop();
    }
    this.angle += this.period * 0.01;
  }
}
