import { motion } from "framer-motion";

const SectionHeading = ({
  badge,
  heading,
  title,
  description,
  subtitle,
  align = "center",
}) => {
  const currentHeading = heading || title;
  const currentDescription = description || subtitle;

  const alignment = {
    center: {
      container: "text-center",
      divider: "mx-auto",
      text: "mx-auto",
    },
    left: {
      container: "text-left",
      divider: "",
      text: "",
    },
  };

  const current = alignment[align] || alignment.center;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className={`mb-20 ${current.container}`}
    >
      {badge && (
        <span className="inline-flex rounded-full border border-emerald-500/20 bg-emerald-500/10 px-5 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-emerald-400">
          {badge}
        </span>
      )}

      {currentHeading && (
        <h2 className="mt-6 text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">
          {currentHeading}
        </h2>
      )}

      <div
        className={`mt-6 h-1 w-24 rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400 ${current.divider}`}
      />

      {currentDescription && (
        <p
          className={`mt-8 max-w-4xl text-lg leading-9 text-slate-400 ${current.text}`}
        >
          {currentDescription}
        </p>
      )}
    </motion.div>
  );
};

export default SectionHeading;