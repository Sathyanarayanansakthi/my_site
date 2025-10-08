import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaLaptopCode, FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { HiSparkles } from "react-icons/hi";

// Projects Data
const projectsData = [
  {
    title: "Connectify",
    subtitle: "Social Network Platform",
    description:
      "A collaborative platform empowering students, scholars, and researchers to connect, share insights, and advance academic knowledge together.",
    techStack: ["React.js", "Express.js", "Node.js", "MongoDB", "Tailwind CSS", "JWT"],
    gradient: "from-blue-500/20 to-cyan-500/20",
    iconColor: "#06B6D4",
  },
  {
    title: "AYUSH Startup Portal",
    subtitle: "Government Initiative",
    description:
      "Comprehensive portal streamlining startup management under AYUSH, enabling efficient tracking, resource allocation, and funding coordination.",
    techStack: ["React.js", "MongoDB", "Express.js", "Material UI"],
    gradient: "from-green-500/20 to-emerald-500/20",
    iconColor: "#10B981",
  },
  {
    title: "Auto Assist Hub",
    subtitle: "Service Platform",
    description:
      "Innovative web platform bridging vehicle owners and service providers, revolutionizing automotive maintenance workflows and customer experience.",
    techStack: ["React", "Tailwind CSS", "Firebase", "Real-time DB"],
    gradient: "from-purple-500/20 to-pink-500/20",
    iconColor: "#A855F7",
  },
  {
    title: "Smart India Hackathon 2023",
    subtitle: "Hackathon Project",
    description:
      "Award-winning solution addressing real-world challenges through innovative technology integration and creative problem-solving methodologies.",
    techStack: ["JavaScript", "Python", "SQL", "Data Analytics"],
    gradient: "from-orange-500/20 to-red-500/20",
    iconColor: "#F97316",
  },
];

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const projectVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 15,
    },
  },
};

// Component
const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div
      ref={ref}
      className="relative min-h-screen py-20 px-6 overflow-hidden bg-slate-950"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl -top-48 -right-48"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute w-96 h-96 bg-purple-600/20 rounded-full blur-3xl bottom-0 -left-48"
          animate={{
            scale: [1.3, 1, 1.3],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>

      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(99, 102, 241, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(99, 102, 241, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 mb-6"
          >
            <HiSparkles className="text-yellow-400 text-xl" />
            <span className="px-4 py-2 text-sm font-medium text-indigo-300 border rounded-full bg-indigo-950/50 border-indigo-500/30 backdrop-blur-sm">
              Featured Work
            </span>
            <HiSparkles className="text-yellow-400 text-xl" />
          </motion.div>
          
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black bg-gradient-to-r from-white via-indigo-200 to-purple-200 bg-clip-text text-transparent mb-6">
            Projects & Work
          </h2>
          
          <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto">
            A showcase of innovative solutions and cutting-edge applications that solve real-world problems
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-8"
        >
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              variants={projectVariants}
              className="group relative"
            >
              {/* Glow Effect */}
              <div
                className="absolute inset-0 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                style={{
                  background: `linear-gradient(135deg, ${project.iconColor}40, transparent)`,
                }}
              />

              {/* Card */}
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="relative h-full backdrop-blur-xl bg-gradient-to-br from-slate-900/90 to-slate-800/50 border border-white/10 p-8 rounded-3xl shadow-2xl overflow-hidden group-hover:border-white/20 transition-all duration-300"
              >
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                {/* Shimmer Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                </div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-4">
                      <motion.div
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                        className="p-3 rounded-xl bg-slate-800/50 backdrop-blur-sm border border-white/10"
                      >
                        <FaLaptopCode 
                          className="text-3xl" 
                          style={{ color: project.iconColor }}
                        />
                      </motion.div>
                      <div>
                        <h5 className="text-2xl font-bold text-white mb-1">
                          {project.title}
                        </h5>
                        <p className="text-sm font-medium text-slate-400">
                          {project.subtitle}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-slate-300 leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="mb-6">
                    <p className="text-xs font-semibold text-slate-400 mb-3 uppercase tracking-wider">
                      Technologies
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech, i) => (
                        <motion.span
                          key={i}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.5 + i * 0.1 }}
                          className="px-3 py-1.5 text-xs font-medium text-white bg-slate-800/70 backdrop-blur-sm border border-white/10 rounded-lg hover:border-white/30 transition-colors"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-4 border-t border-white/10">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-slate-800/50 backdrop-blur-sm border border-white/10 rounded-lg hover:bg-slate-800 hover:border-white/30 transition-all"
                    >
                      <FaExternalLinkAlt className="text-xs" />
                      View Project
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-slate-800/50 backdrop-blur-sm border border-white/10 rounded-lg hover:bg-slate-800 hover:border-white/30 transition-all"
                    >
                      <FaGithub />
                      Source Code
                    </motion.button>
                  </div>
                </div>

                {/* Corner Decoration */}
                <div className="absolute top-0 right-0 w-24 h-24 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div 
                    className="absolute top-4 right-4 w-4 h-4 rounded-full animate-pulse"
                    style={{ backgroundColor: project.iconColor, opacity: 0.6 }}
                  />
                  <div 
                    className="absolute top-8 right-8 w-2 h-2 rounded-full animate-pulse"
                    style={{ backgroundColor: project.iconColor, opacity: 0.4, animationDelay: '0.5s' }}
                  />
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl hover:from-indigo-500 hover:to-purple-500 transition-all duration-300 shadow-lg shadow-indigo-500/50"
          >
            View All Projects
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
