import { motion } from "framer-motion";

const AboutContent = () => {
  return (
    <div>

      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl font-bold leading-tight text-white"
      >
        Passionate About Building Modern
        <span className="block text-emerald-400">
          Full Stack Web Applications
        </span>
      </motion.h3>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        viewport={{ once: true }}
        className="mt-8 text-lg leading-8 text-slate-300"
      >
        I am a <span className="font-semibold text-white">
        Computer Science and Engineering graduate
        </span> with a successfully completed{" "}
        <span className="font-semibold text-emerald-400">
        6-month AI Integrated MERN Stack Internship
        </span>.
        During my internship, I gained practical experience
        in designing and developing modern full-stack web
        applications using React.js, Node.js, Express.js,
        MongoDB, and JavaScript while following industry
        best practices.
      </motion.p>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        viewport={{ once: true }}
        className="mt-6 text-lg leading-8 text-slate-300"
      >
        My expertise includes building responsive user
        interfaces, developing RESTful APIs, implementing
        secure authentication using JWT, integrating
        databases, and creating scalable applications with
        clean, maintainable code. I enjoy transforming ideas
        into real-world software solutions that deliver a
        seamless user experience.
      </motion.p>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        viewport={{ once: true }}
        className="mt-6 text-lg leading-8 text-slate-300"
      >
        Beyond Full Stack Development, I have a growing
        interest in{" "}
        <span className="font-semibold text-emerald-400">
          Artificial Intelligence
        </span>,{" "}
        <span className="font-semibold text-emerald-400">
          Machine Learning
        </span>, and{" "}
        <span className="font-semibold text-emerald-400">
          Data Engineering
        </span>.
        I continuously enhance my skills by learning
        emerging technologies and building practical
        projects that solve meaningful problems.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        viewport={{ once: true }}
        className="mt-10"
      >
        <a
          href="/resume.pdf"
          className="inline-flex items-center rounded-full bg-emerald-500 px-8 py-4 font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-emerald-600 hover:shadow-[0_0_35px_rgba(16,185,129,0.45)]"
        >
          Download Resume
        </a>
      </motion.div>

    </div>
  );
};

export default AboutContent;