// import { motion } from "framer-motion";
// import { FaArrowRight, FaCheckCircle } from "react-icons/fa";

// import { featuredProject } from "./projectsData";

// const FeaturedProject = () => {
//   return (
//     <section className="relative overflow-hidden">
//       {/* Background Glow */}
//       <div className="pointer-events-none absolute inset-0 overflow-hidden">
//         <div className="absolute -top-24 left-0 h-[450px] w-[450px] rounded-full bg-emerald-500/10 blur-[150px]" />
//         <div className="absolute bottom-0 right-0 h-[450px] w-[450px] rounded-full bg-cyan-500/10 blur-[150px]" />
//       </div>

//       <div className="relative z-10 mx-auto max-w-7xl px-6">
//         {/* Heading */}
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.7 }}
//           className="mb-16 text-center"
//         >
//           <span className="inline-flex rounded-full border border-emerald-500/20 bg-emerald-500/10 px-5 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-emerald-400">
//             {featuredProject.category}
//           </span>

//           <h2 className="mt-8 text-4xl font-black text-white md:text-6xl">
//             {featuredProject.title}
//           </h2>

//           <p className="mx-auto mt-6 max-w-3xl text-xl leading-9 text-slate-300">
//             {featuredProject.subtitle}
//           </p>
//         </motion.div>

//         {/* Overview */}
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.7 }}
//           className="rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-xl"
//         >
//           <span className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-400">
//             Project Overview
//           </span>

//           <h3 className="mt-5 text-3xl font-bold text-white">
//             Building a Modern Event Management Platform
//           </h3>

//           <p className="mt-8 text-lg leading-9 text-slate-300">
//             {featuredProject.description}
//           </p>
//         </motion.div>

//         {/* Features & Technology */}
//         <div className="mt-20 grid gap-10 lg:grid-cols-2">
//           {/* Features */}
//           <motion.div
//             initial={{ opacity: 0, x: -40 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
//           >
//             <span className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-400">
//               Key Features
//             </span>

//             <div className="mt-8 space-y-4">
//               {featuredProject.features.map((feature, index) => (
//                 <motion.div
//                   key={feature}
//                   initial={{ opacity: 0, x: -20 }}
//                   whileInView={{ opacity: 1, x: 0 }}
//                   viewport={{ once: true }}
//                   transition={{
//                     duration: 0.4,
//                     delay: index * 0.08,
//                   }}
//                   whileHover={{ x: 6 }}
//                   className="flex items-center gap-4 rounded-2xl border border-white/5 bg-white/5 p-4"
//                 >
//                   <div className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-500/20">
//                     <FaCheckCircle className="text-emerald-400" />
//                   </div>

//                   <span className="text-slate-300">
//                     {feature}
//                   </span>
//                 </motion.div>
//               ))}
//             </div>
//           </motion.div>

//           {/* Technology */}
//           <motion.div
//             initial={{ opacity: 0, x: 40 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
//           >
//             <span className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
//               Technology Stack
//             </span>

//             <div className="mt-8 flex flex-wrap gap-4">
//               {featuredProject.technologies.map((tech) => (
//                 <motion.span
//                   key={tech}
//                   whileHover={{ scale: 1.08 }}
//                   className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-5 py-3 text-cyan-300"
//                 >
//                   {tech}
//                 </motion.span>
//               ))}
//             </div>
//           </motion.div>
//         </div>

//         {/* Engineering Challenges */}

//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.7 }}
//           className="mt-20 rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-xl"
//         >

//           <span className="text-sm font-semibold uppercase tracking-[0.25em] text-violet-400">
//             Engineering Challenges
//           </span>

//           <h3 className="mt-5 text-3xl font-bold text-white">
//             Challenges & Solutions
//           </h3>

//           <div className="mt-10 grid gap-5">

//             {featuredProject.challenges.map((challenge) => (
//               <motion.div
//                 key={challenge}
//                 whileHover={{
//                   x: 5,
//                 }}
//                 className="flex items-start gap-4 rounded-2xl border border-white/5 bg-white/5 p-5 transition-all duration-300 hover:border-violet-400/30"
//               >
//                 <div className="mt-1 h-3 w-3 rounded-full bg-violet-400" />

//                 <p className="leading-8 text-slate-300">
//                   {challenge}
//                 </p>

//               </motion.div>
//             ))}

//           </div>

//         </motion.div>

//         {/* Buttons */}

//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           viewport={{ once: true }}
//           transition={{ delay: 0.3 }}
//           className="mt-16 flex flex-wrap justify-center gap-6"
//         >

//           <div className="mt-16 flex flex-wrap justify-center gap-6">
//   {featuredProject.github && (
//     <motion.a
//       whileHover={{ scale: 1.05 }}
//       href={featuredProject.github}
//       target="_blank"
//       rel="noopener noreferrer"
//       className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-8 py-4 font-semibold text-white transition-all duration-300 hover:scale-105 hover:border-emerald-400 hover:bg-emerald-500/10"
//     >
//       View Source Code
//       <FaArrowRight />
//     </motion.a>
//   )}

//   {featuredProject.demo && (
//     <motion.a
//       whileHover={{ scale: 1.05 }}
//       href={featuredProject.demo}
//       target="_blank"
//       rel="noopener noreferrer"
//       className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 px-8 py-4 font-semibold text-white transition-all duration-300"
//     >
//       Live Demo
//       <FaArrowRight />
//     </motion.a>
//   )}
// </div>
//         </motion.div>

//       </div>

//     </section>
//   );
// };

// export default FeaturedProject;



import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { featuredProjects } from "./projectsData";

const FeaturedProject = () => {
  return (
    <div className="space-y-16">
      {featuredProjects.map((project, index) => (
        <motion.div
          key={project.id}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: index * 0.2 }}
          className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl"
        >
          <div className="grid gap-10 p-8 lg:grid-cols-[1.2fr_0.8fr] lg:p-12">
            {/* Left Content */}
            <div>
              <span className="inline-flex rounded-full bg-emerald-500/10 px-4 py-1 text-sm font-medium text-emerald-400">
                {project.category}
              </span>

              <h2 className="mt-5 text-3xl font-bold text-white lg:text-4xl">
                {project.title}
              </h2>

              <p className="mt-3 text-lg text-cyan-300">
                {project.subtitle}
              </p>

              <p className="mt-6 leading-8 text-slate-300">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="mt-8 flex flex-wrap gap-3">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-2 text-sm text-emerald-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="mt-8 flex gap-4">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-xl bg-white/10 px-5 py-3 text-white transition hover:bg-white/20"
                  >
                    <FaGithub />
                    GitHub
                  </a>
                )}

                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-xl bg-emerald-500 px-5 py-3 text-white transition hover:bg-emerald-600"
                  >
                    <FaExternalLinkAlt />
                    Live Demo
                  </a>
                )}
              </div>
            </div>

            {/* Right Content */}
            <div className="space-y-8">
              <div>
                <h3 className="mb-4 text-xl font-semibold text-white">
                  Key Features
                </h3>

                <ul className="space-y-3">
                  {project.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-slate-300"
                    >
                      <span className="mt-2 h-2 w-2 rounded-full bg-emerald-400" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="mb-4 text-xl font-semibold text-white">
                  Challenges Solved
                </h3>

                <ul className="space-y-3">
                  {project.challenges.map((challenge) => (
                    <li
                      key={challenge}
                      className="flex items-start gap-3 text-slate-300"
                    >
                      <span className="mt-2 h-2 w-2 rounded-full bg-cyan-400" />
                      {challenge}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default FeaturedProject;