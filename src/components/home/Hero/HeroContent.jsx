import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowRight,
  FaDownload,
} from "react-icons/fa";

import HeroButtons from "./HeroButtons";
import HeroSocials from "./HeroSocials";
import HeroTyping from "./HeroTyping";

const HeroContent = () => {
  return (
    <div className="space-y-8">

      {/* Greeting */}

      <motion.span
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="inline-flex items-center rounded-full border border-emerald-400/30 bg-emerald-500/10 px-4 py-2 text-sm text-emerald-300"
      >
        👋 Welcome to my portfolio
      </motion.span>

      {/* Name */}

      <motion.div
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35 }}
      >
        <h1 className="text-5xl md:text-6xl xl:text-7xl font-black leading-tight">

          Hi, I'm

          <br />

          <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-violet-400 bg-clip-text text-transparent">
            Nabeesathul
          </span>

          <br />

          <span className="text-white">
            Misiriya V
          </span>

        </h1>
      </motion.div>

      {/* Typing */}

      <HeroTyping />

      {/* Summary */}

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="max-w-xl text-lg leading-8 text-slate-300"
      >
        Computer Science Engineering graduate with a completed
        <span className="font-semibold text-emerald-400">
          {" "}6-month AI Integrated MERN Stack Internship
        </span>
        . Passionate about building responsive, scalable web applications
        using React, Node.js, Express.js and MongoDB while continuously
        exploring modern software engineering practices.
      </motion.p>

      {/* Buttons */}

      <HeroButtons />

      {/* Social */}

      <HeroSocials />

      {/* Quick Highlights */}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="flex flex-wrap gap-3 pt-4"
      >

        {[
          "React.js",
          "Node.js",
          "MongoDB",
          "Express.js",
          "JavaScript",
          "JWT",
          "REST APIs",
          "Git",
        ].map((item) => (
          <span
            key={item}
            className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300 backdrop-blur"
          >
            {item}
          </span>
        ))}

      </motion.div>

    </div>
  );
};

export default HeroContent;