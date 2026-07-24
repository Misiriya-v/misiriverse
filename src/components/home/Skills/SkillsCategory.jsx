import { motion } from "framer-motion";

import { skillsData } from "./skillsData";
import SkillCard from "./SkillCard";

const SkillsCategory = () => {
  return (
    <div className="space-y-14">
      {skillsData.map((category, categoryIndex) => (
        <motion.div
          key={category.id}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            delay: categoryIndex * 0.1,
          }}
          viewport={{ once: true }}
        >
          {/* Category Heading */}
          <div className="mb-8">
            <h3 className="text-3xl font-bold text-white">
              {category.category}
            </h3>

            <div className="mt-2 h-1 w-20 rounded-full bg-emerald-400" />

            <p className="mt-4 max-w-3xl leading-7 text-slate-400">
              {category.description}
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
            {category.skills.map((skill) => (
              <SkillCard
                key={skill.name}
                skill={skill}
              />
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default SkillsCategory;