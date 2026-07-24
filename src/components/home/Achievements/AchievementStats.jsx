import { motion } from "framer-motion";
import {
  FaTrophy,
  FaRocket,
  FaLaptopCode,
  FaGraduationCap,
} from "react-icons/fa";

const stats = [
  {
    icon: FaTrophy,
    value: "6+",
    label: "Achievements",
    color: "from-yellow-400 to-amber-500",
  },
  {
    icon: FaRocket,
    value: "6",
    label: "Projects Built",
    color: "from-pink-500 to-rose-500",
  },
  {
    icon: FaLaptopCode,
    value: "6 Months",
    label: "MERN Training",
    color: "from-cyan-400 to-sky-500",
  },
  {
    icon: FaGraduationCap,
    value: "First Class",
    label: "B.Tech CSE",
    color: "from-emerald-400 to-teal-500",
  },
];

const AchievementStats = () => {
  return (
    <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">

      {stats.map((stat, index) => {
        const Icon = stat.icon;

        return (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 40 }}
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
              p-6
              backdrop-blur-xl
              transition-all
              duration-500
              hover:border-white/20
              hover:shadow-2xl
            "
          >
            {/* Background Glow */}

            <div
              className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 transition-opacity duration-500 group-hover:opacity-10`}
            />

            {/* Icon */}

            <div
              className={`mb-5 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${stat.color} text-white shadow-lg`}
            >
              <Icon
                size={28}
                className="transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110"
              />
            </div>

            {/* Value */}

            <h3 className="text-3xl font-bold text-white">
              {stat.value}
            </h3>

            {/* Label */}

            <p className="mt-2 text-sm uppercase tracking-widest text-slate-400">
              {stat.label}
            </p>
          </motion.div>
        );
      })}

    </div>
  );
};

export default AchievementStats;