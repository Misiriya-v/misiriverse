import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaLaptopCode,
  FaCode,
  FaBrain,
} from "react-icons/fa";

const cards = [
  {
    icon: <FaGraduationCap />,
    title: "Education",
    description:
      "B.Tech in Computer Science & Engineering",
    color: "text-cyan-400",
  },
  {
    icon: <FaLaptopCode />,
    title: "Internship",
    description:
      "Completed 6-Month AI Integrated MERN Stack Internship",
    color: "text-emerald-400",
  },
  {
    icon: <FaCode />,
    title: "Specialization",
    description:
      "Full Stack Development using React, Node.js, Express & MongoDB",
    color: "text-violet-400",
  },
  {
    icon: <FaBrain />,
    title: "Interests",
    description:
      "Artificial Intelligence, Machine Learning & Data Engineering",
    color: "text-yellow-400",
  },
];

const AboutCards = () => {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {cards.map((card, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: index * 0.15,
          }}
          viewport={{ once: true }}
          whileHover={{
            y: -10,
            scale: 1.03,
          }}
          className="group rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-all duration-300 hover:border-emerald-400/30 hover:shadow-[0_0_35px_rgba(16,185,129,0.18)]"
        >
          <div
            className={`mb-5 text-4xl ${card.color} transition-transform duration-300 group-hover:scale-110`}
          >
            {card.icon}
          </div>

          <h3 className="mb-3 text-xl font-bold text-white">
            {card.title}
          </h3>

          <p className="leading-7 text-slate-300">
            {card.description}
          </p>
        </motion.div>
      ))}
    </div>
  );
};

export default AboutCards;