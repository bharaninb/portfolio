/* global random TWO_PI sin cos */
/* eslint no-undef: "error" */
import * as Sketch from './sketch.lib';

class Particle {
  constructor(x, y, radius) {
    this.init(x, y, radius);
  }

  init = (x, y, radius) => {
    this.alive = true;

    this.radius = radius || 10;
    this.wander = 0.15;
    this.theta = random(TWO_PI);
    this.drag = 0.92;
    this.color = '#fff';

    this.x = x || 0.0;
    this.y = y || 0.0;

    this.vx = 0.0;
    this.vy = 0.0;
  }

  move = () => {
    this.x += this.vx;
    this.y += this.vy;

    this.vx *= this.drag;
    this.vy *= this.drag;

    this.theta += random(-0.5, 0.5) * this.wander;
    this.vx += sin(this.theta) * 0.1;
    this.vy += cos(this.theta) * 0.1;

    this.radius *= 0.96;
    this.alive = this.radius > 0.5;
  }

  draw = (ctx) => {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, TWO_PI);
    ctx.fillStyle = this.color;
    ctx.fill();
  }
}

export const Bubbles = (element) => {
  const MAX_PARTICLES = 280;
  const COLOURS = ['#69D2E7', '#A7DBD8', '#E0E4CC', '#F38630', '#FA6900', '#FF4E50', '#F9D423'];

  const particles = [];
  const pool = [];

  const bubble = Sketch.create({
    container: element,
    retina: 'auto',
  });

  bubble.setup = () => {
    let x;
    let y;

    for (let i = 0; i < 20; i += 1) {
      x = (bubble.width * 0.5) + random(-100, 100);
      y = (bubble.height * 0.5) + random(-100, 100);
      bubble.spawn(x, y);
    }
  };

  bubble.spawn = (x, y) => {
    if (particles.length >= MAX_PARTICLES) {
      pool.push(particles.shift());
    }

    const particle = pool.length ? pool.pop() : new Particle();
    particle.init(x, y, random(5, 40));

    particle.wander = random(0.5, 2.0);
    particle.color = random(COLOURS);
    particle.drag = random(0.9, 0.99);

    const theta = random(TWO_PI);
    const force = random(2, 8);

    particle.vx = sin(theta) * force;
    particle.vy = cos(theta) * force;

    particles.push(particle);
  };

  bubble.update = () => {
    let particle;

    for (let i = particles.length - 1; i >= 0; i -= 1) {
      particle = particles[i];

      if (particle.alive) {
        particle.move();
      } else {
        pool.push(particles.splice(i, 1)[0]);
      }
    }
  };

  bubble.draw = () => {
    bubble.globalCompositeOperation = 'lighter';

    for (let i = particles.length - 1; i >= 0; i -= 1) {
      particles[i].draw(bubble);
    }
  };

  bubble.mousemove = () => {
    let touch;
    let max;

    for (let i = 0, n = bubble.touches.length; i < n; i += 1) {
      touch = bubble.touches[i];
      max = random(1, 4);

      for (let j = 0; j < max; j += 1) {
        bubble.spawn(touch.x, touch.y);
      }
    }
  };
};
