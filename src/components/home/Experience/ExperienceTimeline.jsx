import ExperienceCard from "./ExperienceCard";
import { experienceData } from "./experienceData";

const ExperienceTimeline = () => {
  return (
    <section
      className="relative mx-auto mt-20 max-w-7xl"
      aria-label="Professional Journey Timeline"
    >
      {/* Timeline Line */}

      <div
        className="
          absolute
          left-8
          top-0
          hidden
          h-full
          w-[3px]
          rounded-full
          bg-gradient-to-b
          from-emerald-400/80
          via-cyan-400/80
          to-violet-500/80
          md:block
          lg:left-10
        "
      />

      {/* Timeline Glow */}

      <div
        className="
          absolute
          left-8
          top-0
          hidden
          h-full
          w-10
          -translate-x-1/2
          bg-gradient-to-b
          from-emerald-400/15
          via-cyan-400/10
          to-violet-400/15
          blur-3xl
          md:block
          lg:left-10
        "
      />

      {/* Timeline Items */}

      <div className="space-y-20">
        {experienceData.map((item) => (
          <ExperienceCard
            key={item.id}
            item={item}
          />
        ))}
      </div>
    </section>
  );
};

export default ExperienceTimeline;