import { motion } from "framer-motion";

import {
  FaGraduationCap,
  FaRocket,
  FaGithub,
  FaReact,
  FaNodeJs,
} from "react-icons/fa";

import {
  SiMongodb,
  SiJavascript,
} from "react-icons/si";

import experienceImage from "../../../images/illustrations/experience-illustration.png";

const floatingIcons = [
  {
    icon: <FaGraduationCap />,
    className: "-top-6 left-8 text-emerald-400 text-5xl",
    duration: 5,
  },
  {
    icon: <FaRocket />,
    className: "top-10 right-8 text-cyan-400 text-5xl",
    duration: 6,
  },
  {
    icon: <FaReact />,
    className: "bottom-10 left-6 text-sky-400 text-5xl",
    duration: 5,
  },
  {
    icon: <FaNodeJs />,
    className: "bottom-4 right-10 text-green-500 text-5xl",
    duration: 4,
  },
  {
    icon: <SiMongodb />,
    className: "top-1/2 -left-6 text-green-400 text-4xl",
    duration: 5,
  },
  {
    icon: <SiJavascript />,
    className: "top-1/2 -right-6 text-yellow-400 text-4xl",
    duration: 6,
  },
  {
    icon: <FaGithub />,
    className: "bottom-24 left-1/2 text-white text-4xl",
    duration: 5,
  },
];

const ExperienceIllustration = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -60 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="relative flex items-center justify-center"
    >
      {/* Background Glow */}

      <div className="absolute h-[620px] w-[620px] rounded-full bg-emerald-500/15 blur-[160px]" />

      <div className="absolute h-[420px] w-[420px] rounded-full bg-cyan-500/10 blur-[120px]" />

      {/* Floating Icons */}

      {floatingIcons.map((item, index) => (
        <motion.div
          key={index}
          animate={{
            y: [0, -15, 0],
            rotate: [0, 6, -6, 0],
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
        src={experienceImage}
        alt="Professional Journey Illustration"
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
          rotate: 1,
        }}
        className="relative z-10 w-[520px] max-w-full select-none drop-shadow-[0_0_70px_rgba(16,185,129,0.35)]"
      />
    </motion.div>
  );
};

export default ExperienceIllustration;