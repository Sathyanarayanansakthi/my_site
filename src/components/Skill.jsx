import { useRef } from "react";
import {
  FaHtml5, FaCss3Alt, FaReact, FaJs, FaGitAlt,
  FaGithub, FaDatabase, FaDocker, FaNodeJs, FaCube
} from "react-icons/fa";
import {
  SiVercel, SiFirebase, SiExpress,
  SiTailwindcss, SiNextdotjs, SiRedux
} from "react-icons/si";
import { motion, useInView } from "framer-motion";

const Skill = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  const skills = [
    { Icon: FaHtml5, color: "#E34F26", name: "HTML", category: "Frontend" },
    { Icon: FaCss3Alt, color: "#1572B6", name: "CSS", category: "Frontend" },
    { Icon: FaJs, color: "#F7DF1E", name: "JavaScript", category: "Frontend" },
    { Icon: FaReact, color: "#61DAFB", name: "React", category: "Frontend" },
    { Icon: SiNextdotjs, color: "#FFFFFF", name: "Next.js", category: "Frontend" },
    { Icon: SiTailwindcss, color: "#06B6D4", name: "Tailwind CSS", category: "Frontend" },
    { Icon: SiRedux, color: "#764ABC", name: "Redux", category: "Frontend" },
    { Icon: FaCube, color: "#6366F1", name: "Shadcn UI", category: "Frontend" },
    { Icon: FaNodeJs, color: "#339933", name: "Node.js", category: "Backend" },
    { Icon: SiExpress, color: "#FFFFFF", name: "Express.js", category: "Backend" },
    { Icon: FaDatabase, color: "#4CAF50", name: "MongoDB", category: "Backend" },
    { Icon: SiFirebase, color: "#FFCA28", name: "Firebase", category: "Backend" },
    { Icon: FaGitAlt, color: "#F05032", name: "Git", category: "Tools" },
    { Icon: FaGithub, color: "#FFFFFF", name: "GitHub", category: "Tools" },
    { Icon: SiVercel, color: "#FFFFFF", name: "Vercel", category: "Tools" },
    { Icon: FaDocker, color: "#2496ED", name: "Docker", category: "Tools" },
  ];

  return (
    <section className="relative min-h-screen px-6 py-20 flex flex-col items-center justify-center overflow-hidden bg-slate-950">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-3xl top-20 left-10"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-3xl bottom-20 right-10"
          animate={{
            scale: [1.2, 1, 1.2],
            x: [0, -50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
        <motion.div
          className="absolute w-[400px] h-[400px] bg-cyan-600/10 rounded-full blur-3xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
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
          backgroundSize: "60px 60px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl w-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-block mb-4"
          >
            <span className="px-4 py-2 text-sm font-medium text-indigo-300 border rounded-full bg-indigo-950/50 border-indigo-500/30 backdrop-blur-sm">
              Technologies & Tools
            </span>
          </motion.div>
          
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black bg-gradient-to-r from-white via-indigo-200 to-purple-200 bg-clip-text text-transparent mb-4">
            My Tech Stack
          </h2>
          
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto">
            A curated collection of tools and technologies I use to build exceptional digital experiences
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6 md:gap-8"
        >
          {skills.map((skill, index) => (
            <motion.div
              variants={itemVariants}
              key={index}
              className="group relative"
            >
              {/* Glow Effect */}
              <motion.div
                className="absolute inset-0 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `radial-gradient(circle, ${skill.color}40, transparent)`,
                }}
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* Card */}
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="relative h-full backdrop-blur-xl bg-gradient-to-br from-slate-900/90 to-slate-800/50 border border-white/10 p-6 md:p-8 rounded-2xl shadow-2xl overflow-hidden group-hover:border-white/20 transition-colors duration-300"
              >
                {/* Shimmer Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                </div>

                {/* Content */}
                <div className="relative flex flex-col items-center z-10">
                  <motion.div
                    whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    className="mb-4"
                  >
                    <skill.Icon 
                      size={56} 
                      style={{ 
                        color: skill.color,
                        filter: "drop-shadow(0 4px 12px rgba(0,0,0,0.3))"
                      }} 
                    />
                  </motion.div>
                  
                  <p className="text-white font-semibold text-center text-base md:text-lg">
                    {skill.name}
                  </p>
                  
                  <span className="mt-2 text-xs font-medium text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {skill.category}
                  </span>
                </div>

                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-16 h-16 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div 
                    className="absolute top-2 right-2 w-3 h-3 rounded-full"
                    style={{ backgroundColor: skill.color, opacity: 0.6 }}
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
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-16"
        >
          <p className="text-slate-400 text-lg mb-6">
            Always learning, always growing
          </p>
          <motion.div
            className="inline-flex gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, staggerChildren: 0.1 }}
          >
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="w-2 h-2 bg-indigo-500 rounded-full"
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
    </section>
  );
};

export default Skill;
