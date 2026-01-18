'use client';

import { useEffect, useRef, useState } from 'react';

interface RotatingWordProps {
  words: string[];
  className?: string;
  interval?: number;
}

export default function RotatingWord({ words, className = '', interval = 4000 }: RotatingWordProps) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const svgRefs = useRef<(SVGSVGElement | null)[]>([]);
  const pathRefs = useRef<(SVGPathElement | null)[]>([]);
  const textRefs = useRef<(SVGTextElement | null)[]>([]);

  useEffect(() => {
    // Initialize first word immediately with visible drawing animation
    const firstPath = pathRefs.current[0];
    if (firstPath) {
      const length = firstPath.getTotalLength();
      firstPath.style.strokeDasharray = length.toString();
      firstPath.style.strokeDashoffset = length.toString();
      firstPath.classList.add('word-path');
      // Force reflow and start animation
      firstPath.getBoundingClientRect();
      firstPath.style.transition = 'stroke-dashoffset 2.5s ease-out forwards';
      firstPath.style.strokeDashoffset = '0';
    }

    const timer = setInterval(() => {
      // Hide current word
      if (textRefs.current[currentWordIndex]) {
        textRefs.current[currentWordIndex]?.classList.add('hidden');
      }

      // Move to next word
      setCurrentWordIndex((prev) => (prev + 1) % words.length);

      // Show next word after a small delay
      setTimeout(() => {
        const nextIndex = (currentWordIndex + 1) % words.length;
        if (textRefs.current[nextIndex]) {
          textRefs.current[nextIndex]?.classList.remove('hidden');

          // Trigger SVG stroke drawing animation
          if (pathRefs.current[nextIndex]) {
            const path = pathRefs.current[nextIndex];
            const length = path.getTotalLength();
            path.style.strokeDasharray = length.toString();
            path.style.strokeDashoffset = length.toString();
            path.classList.add('word-path');

            // Force reflow
            path.getBoundingClientRect();

            // Animate stroke
            path.style.transition = 'stroke-dashoffset 2.5s ease-out forwards';
            path.style.strokeDashoffset = '0';
          }
        }
      }, 100);
    }, interval);

    return () => clearInterval(timer);
  }, [currentWordIndex, words.length, interval]);

  return (
    <div className={`relative ${className}`}>
      {words.map((word, index) => (
        <svg
          key={word}
          ref={(el) => {
            svgRefs.current[index] = el;
          }}
          className={`absolute inset-0 w-full h-full transition-all duration-1000 ${
            index === currentWordIndex ? '' : 'opacity-0 translate-y-full'
          }`}
          viewBox="0 0 400 60"
          preserveAspectRatio="xMidYMid meet"
        >
          <defs>
            <style>
              {`
                @keyframes drawStroke {
                  from {
                    stroke-dashoffset: 1000;
                  }
                  to {
                    stroke-dashoffset: 0;
                  }
                }
                .word-path {
                  animation: drawStroke 2.5s ease-out forwards;
                }
              `}
            </style>
          </defs>
          <text
            ref={(el) => {
              textRefs.current[index] = el;
            }}
            x="50%"
            y="50%"
            dominantBaseline="middle"
            textAnchor="middle"
            className={`font-manrope text-4xl md:text-5xl font-extrabold tracking-[-0.08em] uppercase fill-none stroke-[#F3F4F6] stroke-1 ${
              index === currentWordIndex ? '' : 'hidden'
            }`}
            style={{
              opacity: index === currentWordIndex ? 1 : 0,
              transition: 'opacity 0.4s ease-out',
            }}
          >
            {word}
          </text>
          {/* Add path for text outline */}
          <path
            ref={(el) => {
              pathRefs.current[index] = el;
            }}
            d={`M 50,30 L ${50 + word.length * 8},30`}
            className={`fill-none stroke-[#F3F4F6] stroke-1 ${
              index === currentWordIndex ? 'word-path' : 'hidden'
            }`}
            style={{
              opacity: index === currentWordIndex ? 1 : 0,
              transition: 'opacity 0.4s ease-out',
            }}
          />
        </svg>
      ))}
    </div>
  );
}
