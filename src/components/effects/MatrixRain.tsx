import { useEffect, useRef } from 'react';
import styled from '@emotion/styled';

const Canvas = styled.canvas`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  opacity: 0.2;
  z-index: 0;
`;

const MatrixRain = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Custom characters (mix of programming symbols and your initials)
    const chars = '01HR{}()<>[]!@#$%^&*アイウエオカキクケコサシスセソタチツテト';
    const fontSize = 12; // Smaller font size for more columns
    const columns = Math.ceil(canvas.width / fontSize); // Ensure we fill the width
    const drops: number[] = [];

    // Initialize drops with random starting positions
    for (let i = 0; i < columns; i++) {
      drops[i] = Math.random() * -100; // Start some drops above the screen
    }

    const draw = () => {
      // Lighter fade effect for more visible trails
      ctx.fillStyle = 'rgba(0, 0, 0, 0.03)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = 'var(--accent-color)';
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        // Randomly select character
        const text = chars[Math.floor(Math.random() * chars.length)];
        
        // Add random brightness to some characters
        const brightness = Math.random() > 0.85 ? '1' : '0.7';
        ctx.fillStyle = `rgba(0, 255, 135, ${brightness})`;
        
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        // Reset drops more frequently and randomly
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.925) {
          drops[i] = 0;
        }
        
        // Vary drop speeds
        drops[i] += Math.random() * 0.5 + 0.5;

        // Randomly create new drops
        if (Math.random() > 0.99) {
          drops[i] = 0;
        }
      }
    };

    // Increase animation speed
    const interval = setInterval(draw, 25);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return <Canvas ref={canvasRef} />;
};

export default MatrixRain; 