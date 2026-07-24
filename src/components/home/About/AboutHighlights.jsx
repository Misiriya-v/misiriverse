import { motion } from "framer-motion";
import {
  FaCheckCircle,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaBrain,
  FaGithub,
  FaCode,
} from "react-icons/fa";

const highlights = [
  {
    icon: <FaCheckCircle />,
    text: "Computer Science & Engineering Graduate",
  },
  {
    icon: <FaCode />,
    text: "Completed 6-Month AI Integrated MERN Stack Internship",
  },
  {
    icon: <FaReact />,
    text: "Building Modern & Responsive React Applications",
  },
  {
    icon: <FaNodeJs />,
    text: "Developing Secure REST APIs using Node.js & Express.js",
  },
  {
    icon: <FaDatabase />,
    text: "MongoDB Database Design, Integration & CRUD Operations",
  },
  {
    icon: <FaGithub />,
    text: "Git, GitHub & Collaborative Development Workflow",
  },
  {
    icon: <FaBrain />,
    text: "Passionate about Artificial Intelligence & Data Engineering",
  },
];

const AboutHighlights = () => {
  return (
    <div className="space-y-4">
      {highlights.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            delay: index * 0.12,
          }}
          whileHover={{
            x: 6,
          }}
          className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur-lg transition-all duration-300 hover:border-emerald-400/40 hover:bg-white/10 hover:shadow-[0_0_25px_rgba(16,185,129,0.2)]"
        >
          <div className="text-2xl text-emerald-400 transition-transform duration-300 group-hover:scale-110">
            {item.icon}
          </div>

          <p className="text-slate-300 transition-colors duration-300 group-hover:text-white">
            {item.text}
          </p>
        </motion.div>
      ))}
    </div>
  );
};

export default AboutHighlights;