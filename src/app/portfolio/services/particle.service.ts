import { Injectable } from '@angular/core';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
}

@Injectable({
  providedIn: 'root'
})
export class ParticleService {
  private canvas: HTMLCanvasElement | null = null;
  private ctx: CanvasRenderingContext2D | null = null;
  private particles: Particle[] = [];
  private animationId: number | null = null;

  initParticles(canvasId: string): void {
    this.canvas = document.getElementById(canvasId) as HTMLCanvasElement;
    if (!this.canvas) return;

    this.ctx = this.canvas.getContext('2d');
    if (!this.ctx) return;

    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;

    this.createParticles(50);
    this.animate();

    window.addEventListener('resize', this.handleResize.bind(this));
  }

  private createParticles(count: number): void {
    this.particles = [];
    for (let i = 0; i < count; i++) {
      this.particles.push({
        x: Math.random() * (this.canvas?.width || 0),
        y: Math.random() * (this.canvas?.height || 0),
        size: Math.random() * 2 + 1,
        speedX: Math.random() * 0.5 - 0.25,
        speedY: Math.random() * 0.5 - 0.25
      });
    }
  }

  private animate(): void {
    if (!this.ctx || !this.canvas) return;

    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.particles.forEach(particle => {
      particle.x += particle.speedX;
      particle.y += particle.speedY;

      if (particle.x > this.canvas!.width) particle.x = 0;
      if (particle.x < 0) particle.x = this.canvas!.width;
      if (particle.y > this.canvas!.height) particle.y = 0;
      if (particle.y < 0) particle.y = this.canvas!.height;

      this.ctx!.fillStyle = 'rgba(45, 212, 191, 0.5)';
      this.ctx!.beginPath();
      this.ctx!.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      this.ctx!.fill();
    });

    this.animationId = requestAnimationFrame(this.animate.bind(this));
  }

  private handleResize(): void {
    if (!this.canvas) return;
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  destroy(): void {
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
    }
    window.removeEventListener('resize', this.handleResize.bind(this));
  }
}