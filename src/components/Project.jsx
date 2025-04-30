import { useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";

// Projects Data
const projectsData = [
  {
    title: "Connectify (Social Network) ",
    description:
      "A Platform for Students and Academic Scholars and Researchers.",
    techStack: "React.js, Express.js, Node.js, MongoDB, Tailwind CSS, Material UI, JWT, Passport JS",
  },
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
    techStack: "React, Tailwind CSS, Firebase",
  },
  {
    title: "Smart India Hackathon Project 2K23",
    description:
      "A collaborative project to solve real-world problems using innovative technical solutions, developed during the Smart India Hackathon competition.",
    techStack: "JavaScript, Python, SQL",
  },
];

// Animation Variants
const projectVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, type: "spring", stiffness: 100 },
  }),
};

// Projects Component
const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div
      ref={ref}
      className="min-h-screen py-10 bg-gradient-to-b from-gray-900 to-gray-700 text-white flex flex-col items-center"
    >
      <AnimatePresence>
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h3 className="text-4xl font-bold mb-6">Projects</h3>
        </motion.div>

        {/* Projects Container */}
        <div className="max-w-3xl w-full">
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              exit={{ opacity: 0, y: 50 }}
              custom={index}
              variants={projectVariants}
              whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.3)" }}
              className="bg-gray-800 hover:bg-gray-700 p-6 rounded-xl shadow-lg mb-6 transition-colors"
            >
              <h5 className="text-2xl font-bold hover:text-teal-400 transition-colors">{project.title}</h5>
              <p className="mt-2 text-gray-300">{project.description || "Description not available."}</p>
              <p className="mt-2 text-sm text-gray-500">Tech Stack: {project.techStack}</p>
            </motion.div>
          ))}
        </div>
      </AnimatePresence>
    </div>
  );
};

export default Projects;
