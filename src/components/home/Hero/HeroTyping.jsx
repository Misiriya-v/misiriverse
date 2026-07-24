import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const roles = [
  "Full Stack Developer",
  "AI Integrated MERN Stack Developer",
  "React Developer",
  "Node.js Developer",
  "Software Engineer",
];

const typingSpeed = 70;
const deletingSpeed = 40;
const pauseTime = 1800;

const HeroTyping = () => {
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];

    let timer;

    if (!isDeleting) {
      if (text.length < currentRole.length) {
        timer = setTimeout(() => {
          setText(currentRole.substring(0, text.length + 1));
        }, typingSpeed);
      } else {
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, pauseTime);
      }
    } else {
      if (text.length > 0) {
        timer = setTimeout(() => {
          setText(currentRole.substring(0, text.length - 1));
        }, deletingSpeed);
      } else {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
    }

    return () => clearTimeout(timer);
  }, [text, isDeleting, roleIndex]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.55 }}
      className="flex items-center gap-2 text-2xl md:text-3xl font-semibold"
    >
      <span className="text-emerald-400">
        {text}
      </span>

      <motion.span
        animate={{
          opacity: [1, 0, 1],
        }}
        transition={{
          repeat: Infinity,
          duration: 0.8,
        }}
        className="text-emerald-400"
      >
        |
      </motion.span>
    </motion.div>
  );
};

export default HeroTyping;