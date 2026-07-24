import { motion } from "framer-motion";

import {
  FaReact,
  FaNodeJs,
  FaGithub,
} from "react-icons/fa";

import {
  SiMongodb,
  SiJavascript,
  SiTensorflow,
} from "react-icons/si";

import aboutImage from "../../../images/illustrations/about-illustration.png";

const floatingIcons = [
  {
    icon: <FaReact />,
    className: "-top-8 left-6 text-sky-400 text-5xl",
    duration: 5,
  },
  {
    icon: <FaNodeJs />,
    className: "bottom-8 left-4 text-green-500 text-5xl",
    duration: 4,
  },
  {
    icon: <SiMongodb />,
    className: "top-6 right-8 text-green-400 text-5xl",
    duration: 6,
  },
  {
    icon: <FaGithub />,
    className: "bottom-10 right-8 text-white text-4xl",
    duration: 5,
  },
  {
    icon: <SiJavascript />,
    className: "top-1/2 -left-6 text-yellow-400 text-4xl",
    duration: 4,
  },
  {
    icon: <SiTensorflow />,
    className: "top-1/2 -right-6 text-orange-400 text-4xl",
    duration: 5,
  },
];

const AboutIllustration = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: -80,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      transition={{
        duration: 0.8,
      }}
      viewport={{
        once: true,
      }}
      className="relative flex items-center justify-center"
    >
      {/* Background Glow */}

      <div className="absolute h-[600px] w-[600px] rounded-full bg-cyan-500/10 blur-[140px]" />

      <div className="absolute h-[420px] w-[420px] rounded-full bg-emerald-500/15 blur-[100px]" />

      {/* Floating Icons */}

      {floatingIcons.map((item, index) => (
        <motion.div
          key={index}
          animate={{
            y: [0, -18, 0],
            rotate: [0, 8, -8, 0],
          }}
          transition={{
            duration: item.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className={`absolute z-20 ${item.className}`}
        >
          {item.icon}
        </motion.div>
      ))}

      {/* Illustration */}

      <motion.img
        src={aboutImage}
        alt="About Illustration"
        draggable={false}
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        whileHover={{
          scale: 1.03,
        }}
        className="relative z-10 w-[520px] max-w-full select-none drop-shadow-[0_0_70px_rgba(16,185,129,0.35)]"
      />
    </motion.div>
  );
};

export default AboutIllustration;