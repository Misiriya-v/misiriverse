import Section from "../../common/Section";
import Container from "../../common/Container";
import SectionHeading from "../../common/SectionHeading";

import ExperienceIllustration from "./ExperienceIllustration";
import ExperienceTimeline from "./ExperienceTimeline";

const Experience = () => {
  return (
    <Section id="experience">
      {/* Background Glow */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-0 top-20 h-[500px] w-[500px] rounded-full bg-emerald-500/10 blur-[150px]" />

        <div className="absolute bottom-20 right-0 h-[450px] w-[450px] rounded-full bg-cyan-500/10 blur-[140px]" />

        <div className="absolute left-1/2 top-1/2 h-[380px] w-[380px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/10 blur-[130px]" />
      </div>

      <Container>
        <SectionHeading
          badge="Professional Journey"
          heading="Education • Experience • Continuous Learning"
          description="My journey from a Computer Science Engineering student to an AI Integrated MERN Stack Developer, continuously expanding my expertise in modern software development, cloud technologies, Artificial Intelligence, and scalable full-stack applications."
        />

        {/* Main Content */}

        <div className="mt-20 grid items-start gap-20 xl:grid-cols-[460px_1fr]">

          {/* Left Side */}

          <div className="sticky top-32 hidden xl:flex justify-center">
            <ExperienceIllustration />
          </div>

          {/* Tablet */}

          <div className="mb-12 flex justify-center xl:hidden">
            <ExperienceIllustration />
          </div>

          {/* Right Side */}

          <ExperienceTimeline />

        </div>
      </Container>
    </Section>
  );
};

export default Experience;