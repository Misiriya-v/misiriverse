import { motion } from "framer-motion";

import Section from "../../common/Section";
import Container from "../../common/Container";
import SectionHeading from "../../common/SectionHeading";

import SkillsCategory from "./SkillsCategory";
import SkillsIllustration from "./SkillsIllustration";

const Skills = () => {
  return (
    <Section id="skills">
      {/* Background Glow */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-32 top-0 h-[480px] w-[480px] rounded-full bg-emerald-500/10 blur-[140px]" />

        <div className="absolute bottom-0 right-0 h-[420px] w-[420px] rounded-full bg-cyan-500/10 blur-[120px]" />
      </div>

      <Container>

        {/* Section Heading */}

        <SectionHeading
          badge="Technical Skills"
          heading="Technologies I Work With"
          description="Building modern, scalable, and intelligent web applications using the MERN stack, Artificial Intelligence, databases, cloud technologies, and professional development tools."
        />

        {/* Main Content */}

        <div className="grid items-start gap-10 xl:gap-14 lg:grid-cols-[0.95fr_1.05fr]">

          {/* Illustration */}

          <motion.div
            initial={{
              opacity: 0,
              x: -60,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.8,
            }}
            className="flex justify-center lg:justify-start"
          >
            <SkillsIllustration />
          </motion.div>

          {/* Skill Categories */}

          <motion.div
            initial={{
              opacity: 0,
              x: 60,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.8,
            }}
            className="w-full"
          >
            <SkillsCategory />
          </motion.div>

        </div>

      </Container>
    </Section>
  );
};

export default Skills;