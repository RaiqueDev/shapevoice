import { Variants } from "framer-motion";

export const fadeIn = (direction: "up" | "down" = "up"): Variants => {
  return {
    initial: {
      y: direction === "up" ? 40 : -40,
      opacity: 0,
    },

    animate: {
      y: 0,
      opacity: 1,

      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };
};

export const fadeInSides = (direction: "left" | "right" = "left"): Variants => {
  return {
    initial: {
      x: direction === "right" ? 500 : -150,
      opacity: 0,
    },

    animate: {
      x: 0,
      opacity: 1,

      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };
};

export const staggerContainer: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.5,
    },
  },
};

