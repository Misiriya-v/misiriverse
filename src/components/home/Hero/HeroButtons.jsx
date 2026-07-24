import { motion } from "framer-motion";
import { FaArrowRight, FaDownload } from "react-icons/fa";

const HeroButtons = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.9 }}
      className="flex flex-wrap items-center gap-4"
    >
      {/* View Projects */}

      <a
        href="#projects"
        className="group inline-flex items-center gap-3 rounded-full bg-emerald-500 px-7 py-3 font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-emerald-600 hover:shadow-[0_0_30px_rgba(16,185,129,0.4)]"
      >
        View Projects

        <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
      </a>

      {/* Resume */}

      <a
        href="/resume.pdf"
        download
        className="inline-flex items-center gap-3 rounded-full border border-emerald-400/40 bg-white/5 px-7 py-3 font-semibold text-white backdrop-blur-md transition-all duration-300 hover:scale-105 hover:border-emerald-400 hover:bg-emerald-500/10"
      >
        <FaDownload />

        Download Resume
      </a>
    </motion.div>
  );
};

export default HeroButtons;