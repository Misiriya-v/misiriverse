import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaFolderOpen } from "react-icons/fa";

const ProjectCard = ({ project }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{
        y: -10,
        scale: 1.02,
      }}
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-xl transition-all duration-300 hover:border-emerald-400/40 hover:bg-white/10"
    >
      {/* Gradient Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-cyan-500/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <div className="relative z-10">
        {/* Category */}
        <span className="inline-flex rounded-full bg-emerald-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-400">
          {project.category}
        </span>

        {/* Icon */}
        <div className="mt-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-2xl text-emerald-400">
          <FaFolderOpen />
        </div>

        {/* Title */}
        <h3 className="mt-6 text-2xl font-bold text-white">
          {project.title}
        </h3>

        {/* Description */}
        <p className="mt-4 leading-7 text-slate-400">
          {project.description}
        </p>

        {/* Technology Chips */}
        <div className="mt-6 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="mt-8 flex gap-3">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white transition hover:bg-white/10"
            >
              <FaGithub />
              GitHub
            </a>
          )}

          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-xl bg-emerald-500 px-4 py-2 text-sm font-medium text-white transition hover:bg-emerald-600"
            >
              <FaExternalLinkAlt />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
};

export default ProjectCard;