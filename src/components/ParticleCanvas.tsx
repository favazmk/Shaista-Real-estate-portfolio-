import React, { useEffect, useRef } from 'react';

interface ParticleCanvasProps {
  variant?: 'dark' | 'light';
  particleCount?: number;
}

export const ParticleCanvas: React.FC<ParticleCanvasProps> = ({
  variant = 'dark',
  particleCount = 45,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    window.addEventListener('resize', handleResize);

    const isLight = variant === 'light';
    const dotColor = isLight ? 'rgba(164, 131, 68, ' : 'rgba(200, 169, 106, ';

    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
      pulseSpeed: number;

      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.size = Math.random() * 2.2 + 0.6;
        this.speedX = (Math.random() - 0.5) * 0.45;
        this.speedY = (Math.random() - 0.5) * 0.45;
        this.opacity = Math.random() * 0.5 + 0.2;
        this.pulseSpeed = (Math.random() - 0.5) * 0.01;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.opacity += this.pulseSpeed;

        if (this.opacity > 0.75 || this.opacity < 0.15) {
          this.pulseSpeed = -this.pulseSpeed;
        }

        if (this.x < 0) this.x = width;
        if (this.x > width) this.x = 0;
        if (this.y < 0) this.y = height;
        if (this.y > height) this.y = 0;
      }

      draw() {
        if (!ctx) return;
        ctx.fillStyle = `${dotColor}${this.opacity})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const particles: Particle[] = Array.from({ length: particleCount }, () => new Particle());

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // Subtle radial ambient glow
      const gradient = ctx.createRadialGradient(
        width * 0.6,
        height * 0.4,
        80,
        width * 0.6,
        height * 0.4,
        Math.max(width, height) * 0.6
      );

      if (isLight) {
        gradient.addColorStop(0, 'rgba(200, 169, 106, 0.08)');
        gradient.addColorStop(1, 'rgba(250, 248, 245, 0)');
      } else {
        gradient.addColorStop(0, 'rgba(200, 169, 106, 0.07)');
        gradient.addColorStop(1, 'rgba(11, 11, 11, 0)');
      }

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      particles.forEach((p) => {
        p.update();
        p.draw();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [variant, particleCount]);

  return <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none z-0 w-full h-full" />;
};
