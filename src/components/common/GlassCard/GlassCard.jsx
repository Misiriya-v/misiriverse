import { motion } from "framer-motion";

const GlassCard = ({
  children,
  className = "",
  hover = true,
}) => {
  return (
    <motion.div
      whileHover={
        hover
          ? {
              y: -6,
              scale: 1.02,
            }
          : undefined
      }
      transition={{
        duration: 0.3,
        ease: "easeOut",
      }}
      className={`
        relative
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        bg-white/5
        backdrop-blur-xl
        shadow-[0_0_40px_rgba(16,185,129,0.08)]
        transition-all
        duration-300
        hover:border-emerald-400/30
        hover:shadow-[0_0_50px_rgba(16,185,129,0.18)]
        ${className}
      `}
    >
      {/* Soft Gradient Overlay */}

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent" />

      {/* Card Content */}

      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
};

export default GlassCard;