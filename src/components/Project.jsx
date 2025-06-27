import { useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { FaLaptopCode } from "react-icons/fa";

// Projects Data
const projectsData = [
  {
    title: "Connectify (Social Network)",
    description:
      "A platform for students, scholars, and researchers to collaborate and share academic insights.",
    techStack:
      "React.js, Express.js, Node.js, MongoDB, Tailwind CSS, Material UI, JWT, Passport.js",
  },
  {
    title: "Startup Portal for AYUSH",
    description:
      "A portal to manage startups under AYUSH, streamlining tracking, management, and funding.",
    techStack: "React.js, MongoDB, Express.js",
  },
  {
    title: "Auto Assist Hub",
    description:
      "A web platform connecting vehicle owners with service providers, enabling shops to streamline operations.",
    techStack: "React, Tailwind CSS, Firebase",
  },
  {
    title: "Smart India Hackathon 2023",
    description:
      "Innovative real-world problem-solving project built during the SIH Hackathon.",
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

// Component
const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div
      ref={ref}
      className="min-h-screen py-16 px-6 sm:px-10 text-white"
      style={{
        backgroundImage: `
          linear-gradient(to bottom, #0f172a, #1e293b),
          radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.07) 1px, transparent 0)
        `,
        backgroundSize: "100% 100%, 20px 20px",
        backgroundBlendMode: "overlay",
      }}
    >
      <AnimatePresence>
        <motion.h3
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl sm:text-5xl font-bold text-center mb-12 text-teal-300"
        >
          Projects
        </motion.h3>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              custom={index}
              variants={projectVariants}
              whileHover={{ scale: 1.03 }}
              className="relative border border-teal-500/30 bg-white/5 backdrop-blur-xl p-6 rounded-2xl shadow-xl transition-transform hover:border-teal-400"
            >
              <div className="flex items-center gap-4 mb-3">
                <FaLaptopCode className="text-teal-300 text-3xl" />
                <h5 className="text-2xl font-semibold text-white">
                  {project.title}
                </h5>
              </div>
              <p className="text-gray-300 mb-3">{project.description}</p>
              <p className="text-sm text-teal-200">
                <span className="font-semibold">Tech Stack:</span>{" "}
                {project.techStack}
              </p>
            </motion.div>
          ))}
        </div>
      </AnimatePresence>
    </div>
  );
};

export default Projects;
