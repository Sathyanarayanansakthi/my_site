import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaGraduationCap, FaBriefcase, FaCircle } from "react-icons/fa";
import { HiSparkles } from "react-icons/hi";

const educationData = [
  {
    year: "2022 - 2025",
    degree: "B.Sc in Computer Science with Cognitive Systems",
    institution: "Sri Krishna Arts and Science College, Coimbatore",
  },
  {
    year: "2021 - 2022",
    degree: "Higher Secondary (12th)",
    institution: "Sri Gopal Naidu Hr Sec School, Coimbatore",
  },
  {
    year: "2019 - 2020",
    degree: "Secondary School (10th)",
    institution: "Sri Gopal Naidu Hr Sec School, Coimbatore",
  },
];

const experienceData = [
  {
    company: "Metaphor Hub (Freelancer)",
    role: "Freelance Developer",
    duration: "Dec 2021 - Jul 2022",
    description:
      "Built modern web apps using React, Node.js, and MongoDB for various clients, focusing on responsive UI and backend integration.",
  },
];

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const timelineVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
};

const dotVariants = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 10,
    },
  },
};

const EducationAndExperience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div
      ref={ref}
      className="relative min-h-screen py-20 px-6 text-white flex flex-col items-center overflow-hidden bg-slate-950"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute w-96 h-96 bg-cyan-600/20 rounded-full blur-3xl top-20 -left-48"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute w-96 h-96 bg-purple-600/20 rounded-full blur-3xl bottom-20 -right-48"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{
            duration: 8,
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
      <div className="relative z-10 max-w-6xl w-full">
        {/* Header */}
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
              My Journey
            </span>
            <HiSparkles className="text-yellow-400 text-xl" />
          </motion.div>
          
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black bg-gradient-to-r from-white via-cyan-200 to-purple-200 bg-clip-text text-transparent mb-6">
            Education & Experience
          </h2>
          
          <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto">
            A timeline of academic achievements and professional milestones that shaped my journey
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Education Timeline */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {/* Section Header */}
            <motion.div
              variants={timelineVariants}
              className="flex items-center gap-3 mb-8"
            >
              <div className="p-3 rounded-xl bg-gradient-to-br from-cyan-600 to-cyan-400 shadow-lg shadow-cyan-500/50">
                <FaGraduationCap className="text-2xl text-white" />
              </div>
              <h3 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-cyan-200 bg-clip-text text-transparent">
                Education
              </h3>
            </motion.div>

            {/* Timeline Items */}
            <div className="relative">
              {/* Vertical Line */}
              <div className="absolute left-6 top-8 bottom-8 w-0.5 bg-gradient-to-b from-cyan-500/50 via-cyan-500/30 to-transparent" />

              <div className="space-y-8">
                {educationData.map((item, index) => (
                  <motion.div
                    key={index}
                    variants={timelineVariants}
                    className="relative pl-16"
                  >
                    {/* Timeline Dot */}
                    <motion.div
                      variants={dotVariants}
                      className="absolute left-3 top-6 z-10"
                    >
                      <div className="relative">
                        <motion.div
                          animate={{
                            scale: [1, 1.5, 1],
                            opacity: [0.5, 0.8, 0.5],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                          className="absolute inset-0 w-6 h-6 bg-cyan-500/50 rounded-full blur-md"
                        />
                        <FaCircle className="relative text-cyan-400 text-lg" />
                      </div>
                    </motion.div>

                    {/* Content Card */}
                    <motion.div
                      whileHover={{ x: 8, y: -4 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="group relative backdrop-blur-xl bg-gradient-to-br from-slate-900/90 to-slate-800/50 border border-white/10 p-6 rounded-2xl shadow-2xl overflow-hidden hover:border-cyan-500/50 transition-colors"
                    >
                      {/* Shimmer Effect */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                      </div>

                      {/* Year Badge */}
                      <div className="relative inline-flex items-center gap-2 mb-3 px-3 py-1.5 rounded-lg bg-cyan-950/50 border border-cyan-500/30">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
                        <span className="text-sm font-bold text-cyan-300">{item.year}</span>
                      </div>

                      {/* Content */}
                      <h4 className="relative text-xl font-bold text-white mb-2 leading-tight">
                        {item.degree}
                      </h4>
                      <p className="relative text-slate-300 text-sm leading-relaxed">
                        {item.institution}
                      </p>

                      {/* Decorative Corner */}
                      <div className="absolute top-0 right-0 w-16 h-16 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute top-2 right-2 w-3 h-3 bg-cyan-400 rounded-full animate-pulse" />
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Experience Timeline */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {/* Section Header */}
            <motion.div
              variants={timelineVariants}
              className="flex items-center gap-3 mb-8"
            >
              <div className="p-3 rounded-xl bg-gradient-to-br from-purple-600 to-purple-400 shadow-lg shadow-purple-500/50">
                <FaBriefcase className="text-2xl text-white" />
              </div>
              <h3 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-purple-200 bg-clip-text text-transparent">
                Experience
              </h3>
            </motion.div>

            {/* Timeline Items */}
            <div className="relative">
              {/* Vertical Line */}
              <div className="absolute left-6 top-8 bottom-8 w-0.5 bg-gradient-to-b from-purple-500/50 via-purple-500/30 to-transparent" />

              <div className="space-y-8">
                {experienceData.map((item, index) => (
                  <motion.div
                    key={index}
                    variants={timelineVariants}
                    className="relative pl-16"
                  >
                    {/* Timeline Dot */}
                    <motion.div
                      variants={dotVariants}
                      className="absolute left-3 top-6 z-10"
                    >
                      <div className="relative">
                        <motion.div
                          animate={{
                            scale: [1, 1.5, 1],
                            opacity: [0.5, 0.8, 0.5],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                          className="absolute inset-0 w-6 h-6 bg-purple-500/50 rounded-full blur-md"
                        />
                        <FaCircle className="relative text-purple-400 text-lg" />
                      </div>
                    </motion.div>

                    {/* Content Card */}
                    <motion.div
                      whileHover={{ x: 8, y: -4 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="group relative backdrop-blur-xl bg-gradient-to-br from-slate-900/90 to-slate-800/50 border border-white/10 p-6 rounded-2xl shadow-2xl overflow-hidden hover:border-purple-500/50 transition-colors"
                    >
                      {/* Shimmer Effect */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                      </div>

                      {/* Duration Badge */}
                      <div className="relative inline-flex items-center gap-2 mb-3 px-3 py-1.5 rounded-lg bg-purple-950/50 border border-purple-500/30">
                        <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" />
                        <span className="text-sm font-bold text-purple-300">{item.duration}</span>
                      </div>

                      {/* Content */}
                      <h4 className="relative text-xl font-bold text-white mb-2 leading-tight">
                        {item.role}
                      </h4>
                      <p className="relative text-purple-200 text-sm font-medium mb-3 italic">
                        {item.company}
                      </p>
                      <p className="relative text-slate-300 text-sm leading-relaxed">
                        {item.description}
                      </p>

                      {/* Decorative Corner */}
                      <div className="absolute top-0 right-0 w-16 h-16 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute top-2 right-2 w-3 h-3 bg-purple-400 rounded-full animate-pulse" />
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Decoration */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-20"
        >
          <motion.div
            className="inline-flex gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, staggerChildren: 0.1 }}
          >
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="w-2 h-2 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default EducationAndExperience;
