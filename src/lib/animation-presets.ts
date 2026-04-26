import { Variants } from "motion/react";

/**
 * Presets de animação reutilizáveis com Framer Motion
 * Use estes em todos os componentes para consistência visual
 */

// ========================================
// FADE ANIMATIONS
// ========================================

export const fadeInVariants: Variants = {
  hidden: { opacity: 0 },
  visible: (delay = 0) => ({
    opacity: 1,
    transition: { delay, duration: 0.6, ease: "easeOut" },
  }),
};

export const fadeInUpVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.5, ease: "easeOut" },
  }),
};

export const fadeInDownVariants: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.5, ease: "easeOut" },
  }),
};

// ========================================
// SLIDE ANIMATIONS
// ========================================

export const slideInFromLeftVariants: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: (delay = 0) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay,
      duration: 0.6,
      ease: [0.34, 1.56, 0.64, 1], // cubic-bezier (easeOutBack)
    },
  }),
};

export const slideInFromRightVariants: Variants = {
  hidden: { opacity: 0, x: 50 },
  visible: (delay = 0) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay,
      duration: 0.6,
      ease: [0.34, 1.56, 0.64, 1],
    },
  }),
};

export const slideInFromTopVariants: Variants = {
  hidden: { opacity: 0, y: -50 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay,
      duration: 0.6,
      ease: [0.34, 1.56, 0.64, 1],
    },
  }),
};

// ========================================
// SCALE ANIMATIONS
// ========================================

export const scaleInVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: (delay = 0) => ({
    opacity: 1,
    scale: 1,
    transition: { delay, duration: 0.4, ease: "backOut" },
  }),
};

export const scaleUpVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: (delay = 0) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay,
      duration: 0.5,
      type: "spring",
      stiffness: 100,
      damping: 10,
    },
  }),
};

// ========================================
// STAGGER CONTAINER (para usar com items)
// ========================================

export const staggerContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
      duration: 0.1,
    },
  },
};

export const staggerContainerFastVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1,
    },
  },
};

// ========================================
// HOVER & INTERACTION ANIMATIONS
// ========================================

export const hoverScaleVariants = {
  whileHover: { scale: 1.05 },
  whileTap: { scale: 0.95 },
  transition: { type: "spring", stiffness: 400, damping: 17 },
} as const;

export const hoverRaiseVariants = {
  whileHover: { y: -4, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" },
  transition: { type: "spring", stiffness: 400, damping: 17 },
} as const;

export const hoverGlowVariants = {
  whileHover: {
    boxShadow: "0 0 20px rgba(59, 130, 246, 0.5)",
  },
  transition: { duration: 0.3 },
} as const;

// ========================================
// ROTATE & SPIN ANIMATIONS
// ========================================

export const rotateInVariants: Variants = {
  hidden: { opacity: 0, rotate: -10 },
  visible: (delay = 0) => ({
    opacity: 1,
    rotate: 0,
    transition: { delay, duration: 0.5, ease: "easeOut" },
  }),
};

export const spinVariants: Variants = {
  animate: {
    rotate: 360,
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "linear",
    },
  },
};

// ========================================
// BLUR & FILTER ANIMATIONS
// ========================================

export const blurInVariants: Variants = {
  hidden: { opacity: 0, filter: "blur(10px)" },
  visible: (delay = 0) => ({
    opacity: 1,
    filter: "blur(0px)",
    transition: { delay, duration: 0.6, ease: "easeOut" },
  }),
};

// ========================================
// COMPLEX ANIMATIONS
// ========================================

export const slideAndFadeInVariants: Variants = {
  hidden: { opacity: 0, x: -20, y: 10 },
  visible: (delay = 0) => ({
    opacity: 1,
    x: 0,
    y: 0,
    transition: { delay, duration: 0.6, ease: "easeOut" },
  }),
};

export const bounceInVariants: Variants = {
  hidden: { opacity: 0, scale: 0.3 },
  visible: (delay = 0) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay,
      duration: 0.5,
      type: "spring",
      stiffness: 260,
      damping: 20,
    },
  }),
};

// ========================================
// VIEWPORT ANIMATION CONFIG
// ========================================

export const viewportConfig = {
  once: true,
  amount: 0.3,
  margin: "-100px",
} as const;

export const viewportConfigAggressive = {
  once: true,
  amount: 0.5,
  margin: "-50px",
} as const;

// ========================================
// PULSE ANIMATION
// ========================================

export const pulseVariants: Variants = {
  animate: {
    opacity: [1, 0.5, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

// ========================================
// FLOAT ANIMATION (for icons, etc)
// ========================================

export const floatVariants: Variants = {
  animate: {
    y: [-10, 10, -10],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

// ========================================
// GRADIENT SHIFT ANIMATION
// ========================================

export const gradientShiftVariants: Variants = {
  animate: {
    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

// ========================================
// TYPING ANIMATION (para textos)
// ========================================

export const typingContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

export const typingCharacterVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

// ========================================
// EXIT ANIMATIONS (para quando sai da tela)
// ========================================

export const fadeOutVariants: Variants = {
  exit: {
    opacity: 0,
    transition: { duration: 0.3 },
  },
};

export const slideOutLeftVariants: Variants = {
  exit: {
    opacity: 0,
    x: -50,
    transition: { duration: 0.3, ease: "easeIn" },
  },
};
