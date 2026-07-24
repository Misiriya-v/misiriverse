import { motion } from "framer-motion";
import {
  FaFolderOpen,
  FaCode,
  FaBrain,
  FaLaptopCode,
} from "react-icons/fa";

const stats = [
  {
    icon: <FaFolderOpen />,
    value: "6+",
    label: "Projects Completed",
    color: "text-emerald-400",
  },
  {
    icon: <FaBrain />,
    value: "3",
    label: "AI & ML Projects",
    color: "text-pink-400",
  },
  {
    icon: <FaCode />,
    value: "10+",
    label: "Technologies Used",
    color: "text-cyan-400",
  },
  {
    icon: <FaLaptopCode />,
    value: "5",
    label: "Application Domains",
    color: "text-violet-400",
  },
];

const ProjectStats = () => {
  return (
    <section className="mt-16">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                delay: index * 0.1,
              }}
              whileHover={{
                y: -8,
                scale: 1.03,
              }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-lg transition-all duration-300 hover:border-emerald-400/30 hover:bg-white/10"
            >
              <div
                className={`mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-white/10 text-2xl ${stat.color}`}
              >
                {stat.icon}
              </div>

              <h3 className="text-3xl font-bold text-white">
                {stat.value}
              </h3>

              <p className="mt-2 text-sm text-slate-400">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default ProjectStats;