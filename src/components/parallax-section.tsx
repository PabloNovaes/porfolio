"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { ReactNode, useRef } from "react";

interface ParallaxSectionProps {
  children: ReactNode;
  offset?: number;
  speed?: number;
  className?: string;
}

/**
 * Componente com efeito parallax durante scroll
 * O offset controla quanto o elemento se move (em pixels)
 * O speed controla a intensidade (0.5 = meia velocidade do scroll)
 */
export function ParallaxSection({
  children,
  offset = 50,
  speed = 0.5,
  className = "",
}: ParallaxSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Transformar o scroll progress em valor Y
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [offset * speed, -offset * speed],
  );

  return (
    <motion.div ref={ref} style={{ y }} className={className}>
      {children}
    </motion.div>
  );
}

/**
 * Versão avançada com múltiplos efeitos
 */
interface AdvancedParallaxSectionProps extends ParallaxSectionProps {
  rotationOffset?: number;
  scaleOffset?: number;
  opacityVariation?: boolean;
}

export function AdvancedParallaxSection({
  children,
  offset = 50,
  speed = 0.5,
  rotationOffset = 0,
  scaleOffset = 0,
  opacityVariation = false,
  className = "",
}: AdvancedParallaxSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [offset * speed, -offset * speed],
  );

  const rotation = useTransform(
    scrollYProgress,
    [0, 1],
    [rotationOffset, -rotationOffset],
  );

  const scale = useTransform(
    scrollYProgress,
    [0, 1],
    [1 - scaleOffset, 1 + scaleOffset],
  );

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    opacityVariation ? [0.5, 1, 1, 0.5] : [1, 1, 1, 1],
  );

  return (
    <motion.div
      ref={ref}
      style={{
        y,
        rotate: rotationOffset ? rotation : 0,
        scale: scaleOffset ? scale : 1,
        opacity: opacityVariation ? opacity : 1,
      }}
      className={className}>
      {children}
    </motion.div>
  );
}
