import { motion } from "framer-motion";

const filters = [
  "All",
  "Artificial Intelligence",
  "Full Stack MERN",
  "Education",
  "Healthcare",
  "E-Commerce",
];

const ProjectFilters = ({ activeFilter, setActiveFilter }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="flex flex-wrap justify-center gap-4"
    >
      {filters.map((filter) => {
        const isActive = activeFilter === filter;

        return (
          <motion.button
            key={filter}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            onClick={() => setActiveFilter(filter)}
            className={`rounded-full border px-6 py-3 text-sm font-medium transition-all duration-300
              ${
                isActive
                  ? "border-emerald-400 bg-emerald-500 text-white shadow-lg shadow-emerald-500/25"
                  : "border-white/10 bg-white/5 text-slate-300 hover:border-emerald-400/40 hover:bg-white/10 hover:text-white"
              }`}
          >
            {filter}
          </motion.button>
        );
      })}
    </motion.div>
  );
};

export default ProjectFilters;