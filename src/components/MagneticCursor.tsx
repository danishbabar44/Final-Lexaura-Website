'use client';

import { useEffect, useRef } from 'react';

export default function MagneticCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      cursor.style.left = `${clientX}px`;
      cursor.style.top = `${clientY}px`;
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed w-4 h-4 bg-electric-cyan rounded-full pointer-events-none z-50 mix-blend-difference"
      style={{ transform: 'translate(-50%, -50%)' }}
    />
  );
}