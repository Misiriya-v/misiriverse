import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

const socials = [
  {
    name: "GitHub",
    icon: <FaGithub />,
    url: "https://github.com/Misiriya-v",
  },
  {
    name: "LinkedIn",
    icon: <FaLinkedin />,
    url: "https://linkedin.com/in/nabeesathulmisiriyav",
  },
  {
    name: "Email",
    icon: <FaEnvelope />,
    url: "mailto:nabeesathulmisiriyav@gmail.com",
  },
];

const HeroSocials = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1 }}
      className="flex items-center gap-5"
    >
      {socials.map((social, index) => (
        <motion.a
          key={social.name}
          href={social.url}
          target={social.name === "Email" ? "_self" : "_blank"}
          rel="noreferrer"
          aria-label={social.name}
          whileHover={{
            y: -8,
            scale: 1.1,
          }}
          whileTap={{
            scale: 0.95,
          }}
          transition={{
            type: "spring",
            stiffness: 300,
          }}
          className="group relative flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-2xl text-slate-300 backdrop-blur-md transition-all duration-300 hover:border-emerald-400/40 hover:text-emerald-400 hover:shadow-[0_0_25px_rgba(16,185,129,0.35)]"
        >
          {social.icon}

          <span className="pointer-events-none absolute -bottom-10 rounded-lg bg-slate-900 px-3 py-1 text-xs text-white opacity-0 transition-all duration-300 group-hover:opacity-100">
            {social.name}
          </span>
        </motion.a>
      ))}
    </motion.div>
  );
};

export default HeroSocials;