import { useEffect, useRef, useState } from 'react';

interface ParallaxPosition {
  x: number;
  y: number;
}

export function useParallaxPhysics(easingFactor: number = 0.4) {
  const [position, setPosition] = useState<ParallaxPosition>({ x: 0, y: 0 });
  const targetPosition = useRef<ParallaxPosition>({ x: 0, y: 0 });
  const currentPosition = useRef<ParallaxPosition>({ x: 0, y: 0 });
  const animationFrameRef = useRef<number>();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      
      targetPosition.current = {
        x: (e.clientX - centerX) / centerX,
        y: (e.clientY - centerY) / centerY,
      };
    };

    const animate = () => {
      // Lerp formula: current += (target - current) * easingFactor
      currentPosition.current.x += (targetPosition.current.x - currentPosition.current.x) * easingFactor;
      currentPosition.current.y += (targetPosition.current.y - currentPosition.current.y) * easingFactor;

      setPosition({
        x: currentPosition.current.x,
        y: currentPosition.current.y,
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove);
    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [easingFactor]);

  return position;
}
