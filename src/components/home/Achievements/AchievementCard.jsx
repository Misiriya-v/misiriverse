import { motion } from "framer-motion";

const AchievementCard = ({ achievement, index }) => {
  const Icon = achievement.icon;

  return (
    <motion.article
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
      }}
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
      className="
        group
        relative
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        bg-white/5
        p-7
        backdrop-blur-xl
        transition-all
        duration-500
        hover:border-white/20
        hover:shadow-2xl
      "
    >
      {/* Background Gradient */}

      <div
        className={`absolute inset-0 bg-gradient-to-br ${achievement.color} opacity-0 transition-opacity duration-500 group-hover:opacity-10`}
      />

      {/* Decorative Glow */}

      <div
        className={`absolute -right-12 -top-12 h-36 w-36 rounded-full bg-gradient-to-br ${achievement.color} opacity-20 blur-3xl`}
      />

      {/* Icon */}

      <div
        className={`relative z-10 mb-5 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${achievement.color} text-white shadow-lg`}
      >
        <Icon
          size={30}
          className="transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110"
        />
      </div>

      {/* Year */}

      <span className="relative z-10 inline-block rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-slate-300">
        {achievement.year}
      </span>

      {/* Title */}

      <h3 className="relative z-10 mt-5 text-2xl font-bold text-white transition-colors duration-300 group-hover:text-cyan-300">
        {achievement.title}
      </h3>

      {/* Subtitle */}

      <p className="relative z-10 mt-2 font-semibold text-cyan-400">
        {achievement.subtitle}
      </p>

      {/* Description */}

      <p className="relative z-10 mt-5 leading-7 text-slate-300">
        {achievement.description}
      </p>
    </motion.article>
  );
};

export default AchievementCard;