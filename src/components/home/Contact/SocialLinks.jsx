import { motion } from "framer-motion";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

import { socialLinks, resume } from "./contactData";

const SocialLinks = () => {
  const ResumeIcon = resume.icon;

  return (
    <div className="mt-10">
      {/* Heading */}
      <h3 className="mb-5 text-xl font-semibold text-white">
        Connect With Me
      </h3>

      {/* Buttons */}
      <div className="flex flex-wrap gap-4">
        {socialLinks.map((social, index) => {
          const Icon = social.icon;

          return (
            <motion.a
              key={social.id}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              whileHover={{
                y: -5,
                scale: 1.03,
              }}
              whileTap={{ scale: 0.97 }}
              className="
                group
                inline-flex
                items-center
                gap-3
                rounded-2xl
                border
                border-white/10
                bg-white/5
                px-5
                py-3
                backdrop-blur-xl
                transition-all
                duration-300
                hover:border-violet-400/40
                hover:bg-violet-500/10
                hover:shadow-lg
                hover:shadow-violet-500/10
              "
            >
              <Icon
                size={20}
                className="text-violet-400 transition-transform duration-300 group-hover:scale-110"
              />

              <span className="font-medium text-white">
                {social.name}
              </span>

              <FaArrowUpRightFromSquare
                size={14}
                className="
                  text-slate-400
                  transition-all
                  duration-300
                  group-hover:-translate-y-1
                  group-hover:translate-x-1
                  group-hover:text-white
                "
              />
            </motion.a>
          );
        })}

        {/* Resume Button */}

        <motion.a
          href={resume.file}
          download
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            delay: socialLinks.length * 0.1,
          }}
          whileHover={{
            y: -5,
            scale: 1.03,
          }}
          whileTap={{ scale: 0.97 }}
          className="
            group
            inline-flex
            items-center
            gap-3
            rounded-2xl
            bg-gradient-to-r
            from-violet-600
            via-fuchsia-600
            to-pink-600
            px-5
            py-3
            font-medium
            text-white
            shadow-lg
            transition-all
            duration-300
            hover:shadow-xl
            hover:shadow-violet-500/30
          "
        >
          <ResumeIcon
            size={20}
            className="transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110"
          />

          <span>{resume.title}</span>

          <FaArrowUpRightFromSquare
            size={14}
            className="
              transition-all
              duration-300
              group-hover:-translate-y-1
              group-hover:translate-x-1
            "
          />
        </motion.a>
      </div>
    </div>
  );
};

export default SocialLinks;