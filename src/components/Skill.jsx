import { FaHtml5, FaCss3Alt, FaReact, FaJs, FaGitAlt, FaGithub, FaDatabase, FaDocker } from 'react-icons/fa'; 
import { SiVercel, SiFirebase, SiExpress, SiTailwindcss,SiNextdotjs } from 'react-icons/si'; 
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const Skill = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); // Trigger animations once when in view

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4, // Adds a delay between each child animation
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

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-20 bg-slate-950">
      <motion.h1
        className="mb-10 text-4xl font-bold text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        My Skills
      </motion.h1>

      <motion.div
        className="grid grid-cols-2 gap-8 text-6xl text-white sm:grid-cols-4"
        ref={ref} // Attach the ref to observe this section
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"} // Trigger animation based on visibility
      >
        {/* Skills List */}
        {[ 
          { Icon: FaHtml5, color: "text-red-500", name: "HTML" },
          { Icon: FaCss3Alt, color: "text-blue-500", name: "CSS" },
          { Icon: FaJs, color: "text-yellow-500", name: "JavaScript" },
          { Icon: FaReact, color: "text-blue-400", name: "React" },
          {Icon:SiNextdotjs,color:"text-black-300",name:"Next JS" },
          { Icon: SiTailwindcss, color: "text-sky-400", name: "Tailwind CSS" },
          { Icon: SiExpress, color: "text-white", name: "Express JS" },
          { Icon: FaGitAlt, color: "text-orange-500", name: "Git" },
          { Icon: FaGithub, color: "text-gray-400", name: "GitHub" },
          { Icon: FaDatabase, color: "text-green-500", name: "MongoDB" },
          { Icon: SiFirebase, color: "text-yellow-500", name: "Firebase" },
          { Icon: SiVercel, color: "text-white", name: "Vercel" },
          { Icon: FaDocker, color: "text-blue-500", name: "Docker" },
        ].map((skill, index) => (
          <motion.div 
            key={index} 
            className="flex flex-col items-center group" 
            variants={itemVariants}
          >
            <skill.Icon
              className={`group-hover:${skill.color} transition-transform duration-300 transform group-hover:scale-110`}
            />
            <p
              className={`text-base mt-4 text-gray-400 group-hover:${skill.color} transition-colors duration-300`}
            >
              {skill.name}
            </p>
          </motion.div>
        ))}
      </motion.div>

      <div className="pt-4 mt-6 text-sm text-center border-t border-gray-600" />
    </div>
  );
};

export default Skill;
