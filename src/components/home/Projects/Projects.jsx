import { useState } from "react";
import { motion } from "framer-motion";

import Section from "../../common/Section";
import Container from "../../common/Container";
import SectionHeading from "../../common/SectionHeading";

import TechnologyHighlights from "./TechnologyHighlights";
import ProjectStats from "./ProjectStats";
import FeaturedProject from "./FeaturedProject";
import ProjectFilters from "./ProjectFilters";
import ProjectGrid from "./ProjectGrid";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  return (
    <Section id="projects" className="relative overflow-hidden">
      {/* Background Effects */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 top-0 h-[500px] w-[500px] rounded-full bg-emerald-500/10 blur-[180px]" />
        <div className="absolute -right-32 bottom-0 h-[450px] w-[450px] rounded-full bg-cyan-500/10 blur-[180px]" />
      </div>

      <Container className="relative z-10">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <SectionHeading
          
            title="Projects & Case Studies"
            subtitle="Building intelligent software solutions using Artificial Intelligence, Computer Vision, and Full-Stack MERN technologies to solve real-world problems through scalable, secure, and user-centric applications."
          />
        </motion.div>

        {/* Introduction */}
        <motion.div
          className="mx-auto mt-10 max-w-4xl text-center"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-lg leading-8 text-slate-300">
            My projects span multiple domains including{" "}
            <span className="font-semibold text-emerald-400">
              Artificial Intelligence
            </span>
            ,{" "}
            <span className="font-semibold text-cyan-400">
              Computer Vision
            </span>
            ,{" "}
            <span className="font-semibold text-violet-400">
              Full-Stack Web Development
            </span>
            , Healthcare, Education, and E-Commerce. Each project reflects my
            focus on writing maintainable code, designing intuitive user
            experiences, and solving practical challenges with modern
            technologies.
          </p>
        </motion.div>

        {/* Technology Highlights */}
        <div className="mt-16">
          <TechnologyHighlights />
        </div>

        {/* Project Stats */}
        <div className="mt-16">
          <ProjectStats />
        </div>

        {/* Featured Projects */}
        <div className="mt-24">
          <FeaturedProject />
        </div>

        {/* Filters */}
        <div className="mt-24">
          <ProjectFilters
            activeFilter={activeFilter}
            setActiveFilter={setActiveFilter}
          />
        </div>

        {/* Other Projects */}
        <div className="mt-16">
          <ProjectGrid activeFilter={activeFilter} />
        </div>
      </Container>
    </Section>
  );
};

export default Projects;