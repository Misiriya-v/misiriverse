import { motion } from "framer-motion";

import AboutContent from "./AboutContent";
import AboutCards from "./AboutCards";
import AboutHighlights from "./AboutHighlights";
import AboutIllustration from "./AboutIllustration";

const About = () => {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#050816] py-28"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        <div className="absolute -top-40 right-0 h-[450px] w-[450px] rounded-full bg-emerald-500/10 blur-[130px]" />

        <div className="absolute bottom-0 -left-20 h-[400px] w-[400px] rounded-full bg-cyan-500/10 blur-[120px]" />

      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <p className="mb-3 text-lg font-medium uppercase tracking-[0.35em] text-emerald-400">
            About Me
          </p>

          <h2 className="text-4xl font-bold text-white md:text-5xl">
            Building Intelligent Web Experiences
          </h2>

          <div className="mx-auto mt-6 h-1 w-28 rounded-full bg-emerald-400" />
        </motion.div>

        {/* Main Grid */}
        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <AboutIllustration />
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <AboutContent />

            <div className="mt-10">
              <AboutHighlights />
            </div>
          </motion.div>

        </div>

        {/* Cards */}
        <div className="mt-20">
          <AboutCards />
        </div>

      </div>
    </section>
  );
};

export default About;