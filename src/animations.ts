import { useEffect, useRef } from 'react';

export type AnimationType = 'fade-in' | 'fade-in-up';

/**
 * useInViewAnimation adds an animation class to the element once it comes into view.
 * @param animationType - Choose 'fade-in' for a simple opacity fade or 'fade-in-up' for a fade with upward motion.
 * @returns A ref that you can assign to any component's root element.
 */
export function useInViewAnimation(animationType: AnimationType) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Add the proper CSS class based on the chosen animation type
          node.classList.add(`animate-${animationType}`);
          observer.unobserve(node);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.1,
    });
    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, [animationType]);

  return ref;
}
