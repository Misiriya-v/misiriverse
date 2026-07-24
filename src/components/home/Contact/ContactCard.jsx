import { motion } from "framer-motion";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

const ContactCard = ({ item, index }) => {
  const Icon = item.icon;

  return (
    <motion.a
      href={item.link}
      target={item.link.startsWith("http") ? "_blank" : "_self"}
      rel={item.link.startsWith("http") ? "noopener noreferrer" : undefined}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
      }}
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
      className="
        group
        relative
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        bg-white/5
        p-6
        backdrop-blur-xl
        transition-all
        duration-500
        hover:border-white/20
        hover:shadow-2xl
      "
    >
      {/* Background Glow */}

      <div
        className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 transition-opacity duration-500 group-hover:opacity-10`}
      />

      <div className="relative z-10 flex items-center gap-5">
        {/* Icon */}

        <div
          className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${item.color} text-white shadow-lg`}
        >
          <Icon
            size={28}
            className="transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110"
          />
        </div>

        {/* Content */}

        <div className="min-w-0 flex-1">
          <h3 className="text-lg font-semibold text-white">
            {item.title}
          </h3>

          <p className="mt-1 break-words text-sm text-slate-400">
            {item.value}
          </p>
        </div>

        {/* Arrow */}

        <FaArrowUpRightFromSquare
          className="
            text-slate-500
            transition-all
            duration-300
            group-hover:translate-x-1
            group-hover:-translate-y-1
            group-hover:text-white
          "
          size={18}
        />
      </div>
    </motion.a>
  );
};

export default ContactCard;