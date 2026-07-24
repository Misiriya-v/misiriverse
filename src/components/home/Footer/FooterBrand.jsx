import { motion } from "framer-motion";

import { footerInfo } from "./footerData";

const FooterBrand = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="max-w-md"
    >
      {/* Logo */}

      <h2 className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-violet-400 bg-clip-text text-3xl font-extrabold text-transparent">
        {footerInfo.logo}
      </h2>

      {/* Title */}

      <p className="mt-2 text-lg font-semibold text-white">
        {footerInfo.title}
      </p>

      {/* Description */}

      <p className="mt-5 leading-7 text-gray-400">
        {footerInfo.description}
      </p>

      {/* Built With */}

      <div className="mt-8 inline-flex rounded-full border border-emerald-500/20 bg-white/5 px-4 py-2 backdrop-blur-md">
        <span className="text-sm text-emerald-300">
          {footerInfo.builtWith}
        </span>
      </div>
    </motion.div>
  );
};

export default FooterBrand;