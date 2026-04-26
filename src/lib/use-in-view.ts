import { useEffect, useRef, useState } from "react";

interface UseInViewOptions {
  threshold?: number | number[];
  margin?: string;
  once?: boolean;
}

/**
 * Hook para detectar quando um elemento entra na viewport
 * Útil para lazy loading de animações e conteúdo
 *
 * @example
 * const [ref, isInView] = useInView({ margin: '50px' })
 * <section ref={ref}>
 *   {isInView && <AnimatedContent />}
 * </section>
 */
export function useInView(options: UseInViewOptions = {}) {
  const { threshold = 0.1, margin = "50px", once = true } = options;

  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          // Se once=true, parar de observar após primeiro avistamento
          if (once && ref.current) {
            observer.unobserve(ref.current);
          }
        } else if (!once) {
          setIsInView(false);
        }
      },
      {
        threshold: threshold,
        rootMargin: margin,
      },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
      observer.disconnect();
    };
  }, [threshold, margin, once]);

  return [ref, isInView] as const;
}
