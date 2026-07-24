import { motion } from "framer-motion";

import Container from "../../common/Container";

import HeroContent from "./HeroContent";
import HeroIllustration from "./HeroIllustration";
import HeroStats from "./HeroStats";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-[#050816] pt-24 lg:pt-20"
    >
      {/* Aurora Background */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 -top-52 h-[550px] w-[550px] rounded-full bg-emerald-500/20 blur-[140px]" />

        <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-cyan-500/20 blur-[150px]" />

        <div className="absolute left-1/2 top-1/2 h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/10 blur-[120px]" />
      </div>

      <Container>
        <div className="grid items-center gap-12 lg:gap-24 lg:grid-cols-2">

          {/* Mobile Illustration */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center lg:hidden"
          >
            <HeroIllustration />
          </motion.div>

          {/* Left Content */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="mx-auto w-full max-w-2xl lg:mx-0"
          >
            <HeroContent />

            <div className="mt-10">
              <HeroStats />
            </div>
          </motion.div>

          {/* Desktop Illustration */}

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="hidden items-center justify-center lg:flex"
          >
            <HeroIllustration />
          </motion.div>

        </div>
      </Container>

      {/* Scroll Indicator */}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 lg:block"
      >
        <div className="flex h-12 w-7 justify-center rounded-full border-2 border-emerald-400">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
            }}
            className="mt-2 h-2 w-2 rounded-full bg-emerald-400"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;