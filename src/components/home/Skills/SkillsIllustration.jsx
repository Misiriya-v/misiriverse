import { motion } from "framer-motion";

import {
  FaReact,
  FaNodeJs,
  FaGithub,
  FaPython,
} from "react-icons/fa";

import {
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiTensorflow,
} from "react-icons/si";

import skillsImage from "../../../images/illustrations/skills-illustration.png";

const floatingIcons = [
  {
    icon: <FaReact />,
    className: "-top-6 left-6 text-sky-400 text-5xl",
    duration: 5,
  },
  {
    icon: <FaNodeJs />,
    className: "bottom-10 left-4 text-green-500 text-5xl",
    duration: 4,
  },
  {
    icon: <SiMongodb />,
    className: "top-10 right-5 text-green-400 text-5xl",
    duration: 6,
  },
  {
    icon: <SiJavascript />,
    className: "bottom-8 right-6 text-yellow-400 text-5xl",
    duration: 5,
  },
  {
    icon: <FaPython />,
    className: "top-1/2 -left-6 text-blue-400 text-4xl",
    duration: 5,
  },
  {
    icon: <SiTensorflow />,
    className: "top-1/2 -right-6 text-orange-500 text-4xl",
    duration: 4,
  },
  {
    icon: <SiMysql />,
    className: "top-16 left-1/2 -translate-x-1/2 text-blue-500 text-4xl",
    duration: 5,
  },
  {
    icon: <FaGithub />,
    className: "bottom-2 left-1/2 -translate-x-1/2 text-white text-4xl",
    duration: 6,
  },
];

const SkillsIllustration = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -60 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="relative flex w-full justify-center lg:justify-start lg:sticky lg:top-28"
    >
      {/* Background Glow */}

      <div className="absolute top-6 h-[520px] w-[520px] rounded-full bg-emerald-500/15 blur-[120px]" />

      <div className="absolute top-20 h-[360px] w-[360px] rounded-full bg-cyan-500/10 blur-[100px]" />

      {/* Floating Icons */}

      {floatingIcons.map((item, index) => (
        <motion.div
          key={index}
          animate={{
            y: [0, -16, 0],
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
        src={skillsImage}
        alt="Skills Illustration"
        draggable={false}
        animate={{
          y: [0, -8, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        whileHover={{
          scale: 1.03,
        }}
        className="relative z-10 w-full max-w-[620px] xl:max-w-[680px] select-none drop-shadow-[0_0_60px_rgba(16,185,129,0.30)]"
      />

      {/* Glass Platform */}

      <div className="absolute bottom-8 left-1/2 h-8 w-64 -translate-x-1/2 rounded-full bg-white/5 blur-xl" />

      <div className="absolute bottom-6 left-1/2 h-[2px] w-44 -translate-x-1/2 rounded-full bg-emerald-400/40" />
    </motion.div>
  );
};

export default SkillsIllustration;