/**
 * Golden Shimmer & Warm Sand Particle Canvas System
 * Creates floating golden dust and soft ambient light particles for cream/beige aesthetics.
 */

(function() {
  const canvas = document.getElementById('particles-canvas');
  if (!canvas) return;
  
  const ctx = canvas.getContext('2d');
  let particles = [];
  let width, height;

  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  }

  window.addEventListener('resize', resize);
  resize();

  class Particle {
    constructor() {
      this.reset();
    }

    reset() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.size = Math.random() * 2.4 + 0.8;
      this.speedX = (Math.random() - 0.5) * 0.35;
      this.speedY = -(Math.random() * 0.5 + 0.2); // Gently floats upwards
      this.alpha = Math.random() * 0.6 + 0.15;
      this.fade = Math.random() * 0.006 + 0.002;
      // Warm gold & antique bronze colors tailored for light cream backgrounds
      const palette = ['#c59b3f', '#b89039', '#d4af37', '#e2c57a'];
      this.color = palette[Math.floor(Math.random() * palette.length)];
    }

    update() {
      this.x += this.speedX;
      this.y += this.speedY;
      this.alpha -= this.fade;

      if (this.alpha <= 0 || this.y < -10 || this.x < -10 || this.x > width + 10) {
        this.reset();
        this.y = height + 10;
        this.alpha = Math.random() * 0.6 + 0.15;
      }
    }

    draw() {
      ctx.save();
      ctx.globalAlpha = this.alpha;
      ctx.fillStyle = this.color;
      ctx.shadowBlur = 6;
      ctx.shadowColor = '#c59b3f';
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }
  }

  // Adjust count based on screen width
  const count = window.innerWidth < 600 ? 30 : 60;
  for (let i = 0; i < count; i++) {
    particles.push(new Particle());
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);
    for (let i = 0; i < particles.length; i++) {
      particles[i].update();
      particles[i].draw();
    }
    requestAnimationFrame(animate);
  }

  animate();
})();
