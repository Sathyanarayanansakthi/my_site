import { useRef } from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaJs,
  FaGitAlt,
  FaGithub,
  FaDatabase,
  FaDocker,
  FaNodeJs,
  FaCube,
} from "react-icons/fa";
import {
  SiVercel,
  SiFirebase,
  SiExpress,
  SiTailwindcss,
  SiNextdotjs,
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
        staggerChildren: 0.4,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4 },
    },
  };

  const skills = [
    { Icon: FaHtml5, color: "#E34F26", name: "HTML" },
    { Icon: FaCss3Alt, color: "#1572B6", name: "CSS" },
    { Icon: FaJs, color: "#F7DF1E", name: "JavaScript" },
    { Icon: FaReact, color: "#61DAFB", name: "React" },
    { Icon: SiNextdotjs, color: "#000000", name: "Next.js" },
    { Icon: SiTailwindcss, color: "#06B6D4", name: "Tailwind CSS" },
    { Icon: SiExpress, color: "#FFFFFF", name: "Express.js" },
    { Icon: FaNodeJs, color: "#339933", name: "Node.js" },
    { Icon: FaGitAlt, color: "#F05032", name: "Git" },
    { Icon: FaGithub, color: "#181717", name: "GitHub" },
    { Icon: FaDatabase, color: "#4CAF50", name: "MongoDB" },
    { Icon: SiFirebase, color: "#FFCA28", name: "Firebase" },
    { Icon: SiVercel, color: "#FFFFFF", name: "Vercel" },
    { Icon: FaDocker, color: "#2496ED", name: "Docker" },
    { Icon: FaCube, color: "#6366F1", name: "Shadcn UI" },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-r from-gray-900 to-gray-800 flex flex-col items-center justify-center py-20 px-5">
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-4xl font-bold text-white mb-12"
      >
        My Skills
      </motion.h1>

      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6"
      >
        {skills.map((skill, index) => (
          <motion.div
            variants={itemVariants}
            key={index}
            className="flex justify-center items-center"
          >
            <div className="bg-gray-800 p-6 rounded-lg shadow-xl hover:scale-105 transition-transform duration-300 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-600 opacity-30 rounded-lg"></div>
              <div className="flex justify-center mb-4 relative z-10">
                <skill.Icon size={50} style={{ color: skill.color }} />
              </div>
              <p className="text-white text-center font-medium z-10">{skill.name}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skill;


