import { motion } from "framer-motion";
import {
  FaLaptopCode,
  FaAward,
  FaProjectDiagram,
  FaCode,
} from "react-icons/fa";

const stats = [
  {
    icon: <FaProjectDiagram />,
    value: "3+",
    title: "Featured Projects",
    color: "text-cyan-400",
  },
  {
    icon: <FaLaptopCode />,
    value: "6 Months",
    title: "AI Integrated MERN Internship",
    color: "text-emerald-400",
  },
  {
    icon: <FaCode />,
    value: "15+",
    title: "Technologies",
    color: "text-violet-400",
  },
  {
    icon: <FaAward />,
    value: "YIP",
    title: "District Winner",
    color: "text-yellow-400",
  },
];

const HeroStats = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.2 }}
      className="mt-14 grid grid-cols-2 gap-5 lg:grid-cols-4"
    >
      {stats.map((item, index) => (
        <motion.div
          key={index}
          whileHover={{
            y: -8,
            scale: 1.03,
          }}
          transition={{
            type: "spring",
            stiffness: 250,
          }}
          className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl shadow-lg hover:border-emerald-400/30 hover:shadow-[0_0_30px_rgba(16,185,129,0.2)] transition-all duration-300"
        >
          <div
            className={`mb-4 text-3xl ${item.color}`}
          >
            {item.icon}
          </div>

          <h3 className="text-2xl font-bold text-white">
            {item.value}
          </h3>

          <p className="mt-2 text-sm leading-6 text-slate-400">
            {item.title}
          </p>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default HeroStats;