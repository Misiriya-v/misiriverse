import { motion } from "framer-motion";

import { footerLinks } from "./footerData";

const FooterLinks = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="w-full"
    >
      <h3 className="mb-6 text-lg font-semibold text-white">
        Quick Links
      </h3>

      <nav>
        <ul className="grid grid-cols-2 gap-4 sm:grid-cols-2">
          {footerLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="group inline-flex items-center text-gray-400 transition-all duration-300 hover:text-emerald-400"
              >
                <span className="mr-2 h-1.5 w-1.5 rounded-full bg-emerald-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  {link.label}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </motion.div>
  );
};

export default FooterLinks;