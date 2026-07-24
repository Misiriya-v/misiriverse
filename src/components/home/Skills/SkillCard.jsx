import { motion } from "framer-motion";
import icons from "./icons.jsx";

const SkillCard = ({ skill }) => {
  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.03,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 18,
      }}
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl transition-all duration-300 hover:border-emerald-400/40 hover:bg-white/10 hover:shadow-[0_0_30px_rgba(16,185,129,0.18)]"
    >
      {/* Background Glow */}

      <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <div className="absolute -top-10 -right-10 h-28 w-28 rounded-full bg-emerald-500/20 blur-3xl" />
      </div>

      {/* Icon */}

      <div className="relative z-10 mb-5 flex justify-center text-5xl transition-transform duration-300 group-hover:scale-110">
        {icons[skill.icon]}
      </div>

      {/* Skill Name */}

      <h3 className="relative z-10 text-center text-lg font-semibold text-white">
        {skill.name}
      </h3>

      {/* Level Badge */}

      <div className="relative z-10 mt-4 flex justify-center">
        <span
          className={`rounded-full px-4 py-1 text-xs font-semibold tracking-wide ${
            skill.level === "Advanced"
              ? "bg-emerald-500/20 text-emerald-400"
              : skill.level === "Intermediate"
              ? "bg-cyan-500/20 text-cyan-400"
              : "bg-yellow-500/20 text-yellow-400"
          }`}
        >
          {skill.level}
        </span>
      </div>
    </motion.div>
  );
};

export default SkillCard;