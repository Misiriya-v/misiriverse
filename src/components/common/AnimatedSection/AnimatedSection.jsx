import { motion } from "framer-motion";

const AnimatedSection = ({
  children,
  className = "",
  delay = 0,
  duration = 0.7,
  direction = "up",
  once = true,
}) => {
  const variants = {
    up: {
      hidden: {
        opacity: 0,
        y: 50,
      },
      visible: {
        opacity: 1,
        y: 0,
      },
    },

    down: {
      hidden: {
        opacity: 0,
        y: -50,
      },
      visible: {
        opacity: 1,
        y: 0,
      },
    },

    left: {
      hidden: {
        opacity: 0,
        x: -60,
      },
      visible: {
        opacity: 1,
        x: 0,
      },
    },

    right: {
      hidden: {
        opacity: 0,
        x: 60,
      },
      visible: {
        opacity: 1,
        x: 0,
      },
    },

    scale: {
      hidden: {
        opacity: 0,
        scale: 0.9,
      },
      visible: {
        opacity: 1,
        scale: 1,
      },
    },
  };

  const animation = variants[direction] || variants.up;

  return (
    <motion.div
      variants={animation}
      initial="hidden"
      whileInView="visible"
      viewport={{ once }}
      transition={{
        duration,
        delay,
        ease: "easeOut",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;