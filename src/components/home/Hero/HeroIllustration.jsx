import { motion } from "framer-motion";
import { useState } from "react";
import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiMongodb,
  SiJavascript,
  SiTensorflow,
} from "react-icons/si";

import heroImage from "../../../images/illustrations/hero-illustration.png";

const floatingIcons = [
  {
    icon: <FaReact />,
    className: "-top-2 left-4 sm:-top-6 sm:left-8 text-3xl sm:text-4xl lg:text-5xl text-sky-400",
    duration: 5,
  },
  {
    icon: <FaNodeJs />,
    className: "bottom-6 left-2 sm:bottom-10 sm:left-2 text-3xl sm:text-4xl lg:text-5xl text-green-500",
    duration: 4,
  },
  {
    icon: <SiMongodb />,
    className: "-top-2 right-4 sm:-top-4 sm:right-10 text-3xl sm:text-4xl lg:text-5xl text-green-400",
    duration: 6,
  },
  {
    icon: <FaGitAlt />,
    className: "bottom-6 right-2 sm:bottom-12 sm:right-6 text-3xl sm:text-4xl lg:text-5xl text-orange-500",
    duration: 5,
  },
  {
    icon: <SiJavascript />,
    className: "top-1/2 -left-2 sm:-left-6 text-2xl sm:text-3xl lg:text-4xl text-yellow-400",
    duration: 4,
  },
  {
    icon: <SiTensorflow />,
    className: "top-1/2 -right-2 sm:-right-6 text-2xl sm:text-3xl lg:text-4xl text-orange-400",
    duration: 5,
  },
];

const HeroIllustration = () => {
  const [imageError, setImageError] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, x: 80 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="relative flex items-center justify-center"
    >
      {/* Aurora Glow */}

      <div
        className="
          absolute
          h-[260px]
          w-[260px]
          sm:h-[340px]
          sm:w-[340px]
          md:h-[420px]
          md:w-[420px]
          lg:h-[560px]
          lg:w-[560px]
          rounded-full
          bg-gradient-to-r
          from-emerald-500/20
          via-cyan-500/20
          to-violet-500/20
          blur-[90px]
          lg:blur-[140px]
        "
      />

      {/* Floating Icons */}

      {floatingIcons.map((item, index) => (
        <motion.div
          key={index}
          animate={{
            y: [0, -18, 0],
            rotate: [0, 10, -10, 0],
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

      {/* Character */}

      {!imageError ? (
        <motion.img
          src={heroImage}
          alt="Misiri Developer Illustration"
          draggable={false}
          onError={() => setImageError(true)}
          animate={{
            y: [0, -12, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          whileHover={{
            scale: 1.03,
          }}
          className="
            relative
            z-10
            w-[250px]
            sm:w-[320px]
            md:w-[420px]
            lg:w-[520px]
            xl:w-[600px]
            max-w-full
            object-contain
            select-none
            drop-shadow-[0_0_70px_rgba(16,185,129,.35)]
          "
        />
      ) : (
        <div
          className="
            flex
            h-[250px]
            w-[250px]
            sm:h-[320px]
            sm:w-[320px]
            md:h-[420px]
            md:w-[420px]
            lg:h-[520px]
            lg:w-[520px]
            items-center
            justify-center
            rounded-3xl
            border-2
            border-dashed
            border-emerald-400
            bg-slate-900/60
          "
        >
          <div className="text-center">
            <h3 className="text-lg sm:text-xl font-bold text-emerald-400">
              Hero Illustration Missing
            </h3>

            <p className="mt-2 text-sm sm:text-base text-gray-300">
              Check hero-illustration.png
            </p>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default HeroIllustration;