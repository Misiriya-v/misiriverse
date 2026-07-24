import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaStripe,
} from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiTensorflow,
  SiOpencv,
  SiArduino,
  SiJsonwebtokens,
} from "react-icons/si";
import { BsRobot } from "react-icons/bs";

const technologies = [
  {
    name: "Artificial Intelligence",
    icon: <BsRobot />,
    color: "text-pink-400",
  },
  {
    name: "Computer Vision",
    icon: <SiOpencv />,
    color: "text-cyan-400",
  },
  {
    name: "React.js",
    icon: <FaReact />,
    color: "text-sky-400",
  },
  {
    name: "Node.js",
    icon: <FaNodeJs />,
    color: "text-green-400",
  },
  {
    name: "Express.js",
    icon: <SiExpress />,
    color: "text-gray-300",
  },
  {
    name: "MongoDB",
    icon: <SiMongodb />,
    color: "text-green-500",
  },
  {
    name: "Python",
    icon: <FaPython />,
    color: "text-yellow-400",
  },
  {
    name: "TensorFlow",
    icon: <SiTensorflow />,
    color: "text-orange-400",
  },
  {
    name: "Arduino",
    icon: <SiArduino />,
    color: "text-cyan-500",
  },
  {
    name: "JWT",
    icon: <SiJsonwebtokens />,
    color: "text-red-400",
  },
  {
    name: "Stripe",
    icon: <FaStripe />,
    color: "text-violet-400",
  },
];

const TechnologyHighlights = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mt-12"
    >
      <h3 className="text-center text-2xl font-bold text-white">
        Technology Highlights
      </h3>

      <p className="mx-auto mt-3 max-w-3xl text-center text-slate-400">
        Technologies and frameworks I use to build scalable, secure,
        and intelligent software solutions.
      </p>

      <div className="mt-10 flex flex-wrap justify-center gap-4">
        {technologies.map((tech, index) => (
          <motion.div
            key={tech.name}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              delay: index * 0.05,
              duration: 0.4,
            }}
            whileHover={{
              y: -6,
              scale: 1.05,
            }}
            className="flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-3 backdrop-blur-md transition-all duration-300 hover:border-emerald-400/40 hover:bg-white/10"
          >
            <span className={`text-xl ${tech.color}`}>
              {tech.icon}
            </span>

            <span className="text-sm font-medium text-white">
              {tech.name}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default TechnologyHighlights;