import { Variants } from "motion/react";

// Standard viewport config for scroll reveals
export const staggerViewport = { once: true, amount: 0.1, margin: "0px 0px -10% 0px" };
export const singleViewport = { once: true, amount: 0.2, margin: "0px 0px -10% 0px" };

// Container variant to stagger children
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

// Premium Fade Up with subtle blur
export const fadeUpBlur: Variants = {
  hidden: { 
    opacity: 0, 
    y: 40,
    filter: 'blur(8px)'
  },
  visible: { 
    opacity: 1, 
    y: 0,
    filter: 'blur(0px)',
    transition: { 
      duration: 0.8, 
      ease: [0.25, 1, 0.5, 1] 
    }
  }
};

// Standard Fade Up (for environments where blur might be heavy, or text)
export const fadeUp: Variants = {
  hidden: { 
    opacity: 0, 
    y: 40
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.8, 
      ease: [0.25, 1, 0.5, 1] 
    }
  }
};

// Scale Up (cinematic reveal for images/cards)
export const scaleUp: Variants = {
  hidden: { 
    opacity: 0, 
    scale: 0.95,
    y: 20
  },
  visible: { 
    opacity: 1, 
    scale: 1,
    y: 0,
    transition: { 
      duration: 1, 
      ease: [0.25, 1, 0.5, 1] 
    }
  }
};
