import { useRef } from "react";
import {
  FaHtml5, FaCss3Alt, FaReact, FaJs, FaGitAlt,
  FaGithub, FaDatabase, FaDocker, FaNodeJs, FaCube
} from "react-icons/fa";
import {
  SiVercel, SiFirebase, SiExpress,
  SiTailwindcss, SiNextdotjs
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
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
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
    <section
      className="min-h-screen px-6 py-20 flex flex-col items-center justify-center"
      style={{
        backgroundImage: `
          linear-gradient(to bottom right, #111827, #000000),
          radial-gradient(circle at 1px 1px, rgba(255,255,255,0.07) 1px, transparent 0)
        `,
        backgroundSize: "100% 100%, 20px 20px",
        backgroundBlendMode: "overlay",
      }}
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-bold text-white mb-16"
      >
        My Tech Stack
      </motion.h2>

      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8"
      >
        {skills.map((skill, index) => (
          <motion.div
            variants={itemVariants}
            key={index}
            className="relative backdrop-blur-lg bg-white/10 border border-white/20 p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
          >
            <div className="flex flex-col items-center z-10 relative">
              <skill.Icon size={50} style={{ color: skill.color }} />
              <p className="mt-4 text-white font-medium">{skill.name}</p>
            </div>
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 opacity-10 pointer-events-none" />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skill;
