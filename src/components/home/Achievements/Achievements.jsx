import { motion } from "framer-motion";

import Section from "../../common/Section";
import Container from "../../common/Container";
import SectionHeading from "../../common/SectionHeading";

import AchievementStats from "./AchievementStats";
import AchievementGrid from "./AchievementGrid";

import achievementHero from "../../../images/illustrations/achievement-hero.png";

const Achievements = () => {
  return (
    <Section
      id="achievements"
      className="relative overflow-hidden"
    >
      {/* Background Glow */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        <div className="absolute left-0 top-20 h-[450px] w-[450px] rounded-full bg-yellow-500/10 blur-[160px]" />

        <div className="absolute bottom-0 right-0 h-[420px] w-[420px] rounded-full bg-emerald-500/10 blur-[160px]" />

        <div className="absolute left-1/2 top-1/2 h-[350px] w-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/10 blur-[140px]" />

      </div>

      <Container className="relative z-10">

        <SectionHeading
          badge="Achievements"
          heading="Milestones & Recognition"
          description="Every achievement represents a milestone in my journey of continuous learning, innovation, and professional growth as a software engineer."
        />

        {/* Achievement Stats */}

        <div className="mt-16">
          <AchievementStats />
        </div>

        {/* Illustration */}

        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          animate={{ y: [0, -10, 0] }}
          className="relative mt-20 flex justify-center"
        >
          <div className="absolute bottom-0 h-56 w-56 rounded-full bg-yellow-400/20 blur-[100px]" />

          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 35,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute h-[380px] w-[380px] rounded-full border border-yellow-400/20"
          />

          <img
            src={achievementHero}
            alt="Illustration representing achievements and professional growth"
            className="relative z-10 w-full max-w-sm select-none drop-shadow-[0_0_60px_rgba(250,204,21,0.25)]"
            draggable={false}
          />
        </motion.div>

        {/* Achievement Cards */}

        <AchievementGrid />

      </Container>
    </Section>
  );
};

export default Achievements;