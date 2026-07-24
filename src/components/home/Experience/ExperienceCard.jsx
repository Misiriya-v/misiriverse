import {
  FaBuilding,
  FaMapMarkerAlt,
} from "react-icons/fa";

import GlassCard from "../../common/GlassCard";
import AnimatedSection from "../../common/AnimatedSection";

const colorClasses = {
  emerald: {
    icon: "bg-emerald-500/20 text-emerald-400 border-emerald-400/30",
    badge:
      "border-emerald-500/20 bg-emerald-500/10 text-emerald-300",
    bullet: "bg-emerald-400",
    line: "bg-emerald-400",
  },

  cyan: {
    icon: "bg-cyan-500/20 text-cyan-400 border-cyan-400/30",
    badge:
      "border-cyan-500/20 bg-cyan-500/10 text-cyan-300",
    bullet: "bg-cyan-400",
    line: "bg-cyan-400",
  },

  violet: {
    icon: "bg-violet-500/20 text-violet-400 border-violet-400/30",
    badge:
      "border-violet-500/20 bg-violet-500/10 text-violet-300",
    bullet: "bg-violet-400",
    line: "bg-violet-400",
  },
};

const ExperienceCard = ({ item }) => {
  const Icon = item.icon;
  const theme = colorClasses[item.color] || colorClasses.emerald;

  return (
    <AnimatedSection direction="up">
      <div className="relative flex items-start gap-8 lg:gap-12">

        {/* Timeline */}

        <div className="hidden md:flex w-24 shrink-0 flex-col items-center">

          <div
            className={`group relative flex h-16 w-16 items-center justify-center rounded-full border backdrop-blur-md shadow-lg transition-all duration-500 hover:scale-110 ${theme.icon}`}
          >
            <div className="absolute inset-0 rounded-full bg-white/5" />

            <Icon
              size={28}
              className="relative z-10 transition-transform duration-500 group-hover:rotate-6"
            />
          </div>

          <div
            className={`mt-3 w-[3px] flex-1 rounded-full opacity-40 ${theme.line}`}
          />
        </div>

        {/* Card */}

        <GlassCard
          className="
            flex-1
            p-8
            md:p-10
            transition-all
            duration-500
            hover:-translate-y-2
            hover:shadow-[0_0_45px_rgba(34,211,238,0.15)]
          "
        >

          {/* Mobile Icon */}

          <div className="mb-6 flex items-center gap-4 md:hidden">

            <div
              className={`flex h-14 w-14 items-center justify-center rounded-full border ${theme.icon}`}
            >
              <Icon size={24} />
            </div>

            <span
              className={`rounded-full border px-4 py-1 text-sm font-semibold tracking-wider uppercase ${theme.badge}`}
            >
              {item.year}
            </span>

          </div>

          {/* Desktop Year */}

          <div className="mb-5 hidden md:block">

            <span
              className={`inline-block rounded-full border px-4 py-1 text-sm font-semibold tracking-[0.18em] uppercase ${theme.badge}`}
            >
              {item.year}
            </span>

          </div>

          {/* Title */}

          <h3 className="text-3xl font-bold leading-tight text-white">
            {item.title}
          </h3>

          {/* Subtitle */}

          <p className="mt-3 text-lg font-semibold text-cyan-300">
            {item.subtitle}
          </p>

          {/* Organization */}

          <div className="mt-5 space-y-2">

            <div className="flex items-center gap-3 text-slate-300">

              <FaBuilding className="text-cyan-400" />

              <span>{item.organization}</span>

            </div>

            <div className="flex items-center gap-3 text-slate-500">

              <FaMapMarkerAlt className="text-cyan-400" />

              <span>{item.location}</span>

            </div>

          </div>

          {/* Description */}

          <p className="mt-7 max-w-3xl leading-8 text-slate-300">
            {item.description}
          </p>

          {/* Highlights */}

          <div className="mt-10">

            <h4 className="mb-5 text-xl font-semibold text-white">
              ✨ Key Highlights
            </h4>

            <div className="grid gap-x-12 gap-y-4 md:grid-cols-2">

              {item.highlights.map((highlight) => (

                <div
                  key={highlight}
                  className="flex items-start gap-3"
                >

                  <span
                    className={`mt-2 h-2.5 w-2.5 rounded-full ${theme.bullet}`}
                  />

                  <span className="leading-7 text-slate-300">
                    {highlight}
                  </span>

                </div>

              ))}

            </div>

          </div>

          {/* Skills */}

          <div className="mt-10">

            <h4 className="mb-5 text-xl font-semibold text-white">
              ⚡ Technologies & Skills
            </h4>

            <div className="flex flex-wrap gap-3">

              {item.skills.map((skill) => (

                <span
                  key={skill}
                  className={`rounded-full border px-4 py-2 text-sm font-medium transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-lg ${theme.badge}`}
                >
                  {skill}
                </span>

              ))}

            </div>

          </div>

        </GlassCard>

      </div>
    </AnimatedSection>
  );
};

export default ExperienceCard;