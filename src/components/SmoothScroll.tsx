'use client';

import { useEffect } from 'react';

export default function SmoothScroll() {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      
      if (anchor && anchor.hash && anchor.hostname === window.location.hostname) {
        e.preventDefault();
        const id = anchor.hash.replace('#', '');
        const element = document.getElementById(id);
        
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
          
          if (window.history.pushState) {
            window.history.pushState(null, '', anchor.hash);
          }
        }
      }
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  return null;
}