import { useEffect, useRef, RefObject } from 'react';

interface UseScrollRevealOptions {
  threshold?: number;
  rootMargin?: string;
  delay?: number;
}

export function useScrollReveal<T extends HTMLElement = HTMLElement>(
  options: UseScrollRevealOptions = {}
): RefObject<T> {
  const { threshold = 0.1, rootMargin = '0px', delay = 0 } = options;
  const ref = useRef<T>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Set initial state
    element.style.opacity = '0';
    element.style.transform = 'translateY(30px)';
    element.style.transition = `opacity 0.4s ease-out ${delay}ms, transform 0.4s ease-out ${delay}ms`;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.style.opacity = '1';
          element.style.transform = 'translateY(0)';
          observer.unobserve(element);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [threshold, rootMargin, delay]);

  return ref;
}
