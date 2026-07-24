import { motion } from "framer-motion";

import { socialLinks } from "./footerData";

const FooterSocials = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="w-full"
    >
      <h3 className="mb-6 text-lg font-semibold text-white">
        Connect With Me
      </h3>

      <div className="flex flex-wrap items-center gap-4">
        {socialLinks.map((social) => {
          const Icon = social.icon;

          return (
            <motion.a
              key={social.name}
              href={social.url}
              target={social.url.startsWith("http") ? "_blank" : "_self"}
              rel={
                social.url.startsWith("http")
                  ? "noopener noreferrer"
                  : undefined
              }
              whileHover={{
                y: -6,
                scale: 1.08,
              }}
              whileTap={{
                scale: 0.95,
              }}
              className="
                group
                flex
                h-14
                w-14
                items-center
                justify-center
                rounded-2xl
                border
                border-white/10
                bg-white/5
                text-gray-300
                backdrop-blur-md
                transition-all
                duration-300
                hover:border-emerald-400/40
                hover:bg-emerald-500/10
                hover:text-emerald-400
                hover:shadow-[0_0_25px_rgba(16,185,129,0.25)]
              "
              aria-label={social.name}
            >
              <Icon className="text-2xl transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110" />
            </motion.a>
          );
        })}
      </div>
    </motion.div>
  );
};

export default FooterSocials;