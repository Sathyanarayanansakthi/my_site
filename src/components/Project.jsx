import { motion, AnimatePresence, useInView } from "framer-motion";
import { useRef } from "react";

const projectsData = [
  {
    title: "Startup Portal for AYUSH",
    description:
      "A startup management platform for AYUSH to assist in tracking, managing, and funding initiatives across various healthcare startups.",
    techStack: "React.js, MongoDB, Express.js",
  },
  {
    title: "Auto Assist Hub",
    description:
      "A web application platform designed to bridge the gap between vehicle owners and service providers, offering advanced tools for mechanics and shop owners to streamline operations.",
    techStack: "React, Tailwindcss, Firebase",
  },
  {
    title: "Smart India Hackathon Project 2K23",
    description:
      "A collaborative project to solve real-world problems using innovative technical solutions, developed during the Smart India Hackathon competition.",
    techStack: "JavaScript, Python, SQL",
  },
];

const projectVariants = {
  hidden: { opacity: 0, y: 50 }, // Initial state: hidden and moved down
  visible: (i) => ({
    opacity: 1,
    y: 0, // Final state: visible and at the original position
    transition: { delay: i * 0.2, type: "spring", stiffness: 100 },
  }),
};

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); // Trigger animation once when in view

  return (
    <div
      ref={ref}
      className="flex flex-col items-center min-h-screen py-20 text-white bg-slate-900"
    >
      <AnimatePresence>
        {/* Title */}
        <motion.h1
          className="mb-10 text-4xl font-bold"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Projects
        </motion.h1>

        {/* Projects container */}
        <div className="w-full max-w-4xl px-4 mx-auto">
          {projectsData.map((project, index) => (
            <motion.div
              className="p-6 mb-10 transition-colors duration-300 rounded-lg shadow-lg bg-slate-800 group hover:bg-slate-700"
              key={index}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              exit={{ opacity: 0, y: 50 }}
              custom={index}
              variants={projectVariants}
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.3)",
              }}
            >
              <h2 className="text-2xl font-bold transition-colors duration-300 group-hover:text-teal-400">
                {project.title}
              </h2>
              <p className="mt-3 text-lg text-gray-300">
                {project.description || "Description not available."}
              </p>
              <p className="mt-2 text-sm text-gray-400">
                Tech Stack: {project.techStack}
              </p>
            </motion.div>
          ))}
        </div>
      </AnimatePresence>
    </div>
  );
};

export default Projects;
