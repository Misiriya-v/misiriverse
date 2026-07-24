import { AnimatePresence, motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { projects } from "./projectsData";

const ProjectGrid = ({ activeFilter }) => {
  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter(
          (project) => project.category === activeFilter
        );

  return (
    <div>
      {/* Section Title */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-12 text-center"
      >
        <h2 className="text-3xl font-bold text-white">
          Other Projects
        </h2>

        <p className="mt-3 text-slate-400">
          A collection of software projects across healthcare,
          education, artificial intelligence, and e-commerce.
        </p>
      </motion.div>

      {/* Projects Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeFilter}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="grid gap-8 md:grid-cols-2"
        >
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}
        </motion.div>
      </AnimatePresence>

      {/* Empty State */}
      {filteredProjects.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-12 text-center"
        >
          <h3 className="text-xl font-semibold text-white">
            No projects found
          </h3>

          <p className="mt-2 text-slate-400">
            Try selecting a different category.
          </p>
        </motion.div>
      )}
    </div>
  );
};

export default ProjectGrid;