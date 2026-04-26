"use client";

import { motion, useScroll } from "motion/react";

/**
 * Barra de progresso de scroll no topo da página
 * Mostra visualmente quanto da página o usuário já scrollou
 */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed top-0 left-0 h-1 w-full flex-1 bg-white origin-left z-50"
      style={{
        scaleX: scrollYProgress,
        willChange: "transform",
      }}
    />
  );
}

/**
 * Versão com múltiplas cores e efeito de glow
 */
export function ScrollProgressGlow() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed top-0 left-0 h-1 bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 origin-left z-50 shadow-lg shadow-blue-500/50"
      style={{
        scaleX: scrollYProgress,
        willChange: "transform",
      }}
    />
  );
}

/**
 * Versão com dots indicadores em cada seção
 */
interface ScrollProgressDotsProps {
  sections?: number;
}

export function ScrollProgressDots({ sections = 5 }: ScrollProgressDotsProps) {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed right-4 top-1/2 -translate-y-1/2 flex flex-col gap-3 z-50"
      style={{
        willChange: "transform",
      }}>
      {Array.from({ length: sections }).map((_, i) => {
        const start = i / sections;
        const end = (i + 1) / sections;

        return (
          <motion.button
            key={i}
            className="w-2 h-2 rounded-full bg-slate-300 dark:bg-slate-600 transition-all hover:scale-125"
            animate={{
              background:
                i <= scrollYProgress.get() * sections
                  ? "rgb(59, 130, 246)"
                  : "rgb(203, 213, 225)",
            }}
            onClick={() => {
              const element = document.querySelectorAll("section")[i];
              element?.scrollIntoView({ behavior: "smooth" });
            }}
            aria-label={`Jump to section ${i + 1}`}
          />
        );
      })}
    </motion.div>
  );
}

/**
 * Indicador de leitura circular
 */
export function ScrollProgressCircle() {
  const { scrollYProgress } = useScroll();

  return (
    <svg
      className="fixed bottom-8 right-8 w-16 h-16 z-50 -rotate-90"
      viewBox="0 0 60 60"
      xmlns="http://www.w3.org/2000/svg">
      {/* Background circle */}
      <circle
        cx="30"
        cy="30"
        r="28"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className="text-slate-200 dark:text-slate-700"
      />

      {/* Progress circle */}
      <motion.circle
        cx="30"
        cy="30"
        r="28"
        fill="none"
        strokeWidth="2"
        strokeDasharray={`${2 * Math.PI * 28}`}
        className="text-blue-500"
        style={{
          strokeDashoffset: useMotionValueTransform(
            scrollYProgress,
            (v) => (1 - v) * 2 * Math.PI * 28,
          ),
        }}
      />

      {/* Percentage text */}
      <motion.text
        x="30"
        y="35"
        textAnchor="middle"
        className="text-sm font-bold fill-current">
        {useMotionValueTransform(
          scrollYProgress,
          (v) => `${Math.round(v * 100)}%`,
        )}
      </motion.text>
    </svg>
  );
}

/**
 * Helper para transformar MotionValue em string/number
 */
function useMotionValueTransform(value: any, transform: (v: number) => any) {
  return useMotionValue(0);
}

import { useMotionValue } from "motion/react";
