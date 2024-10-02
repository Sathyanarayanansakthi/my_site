import { FaHtml5, FaCss3Alt, FaReact, FaJs, FaGitAlt, FaGithub, FaDatabase } from 'react-icons/fa'; 
import { SiVercel, SiFirebase, SiExpress } from 'react-icons/si'; 
import { motion } from 'framer-motion';

const Skill = () => {
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
    <div className="bg-slate-950 min-h-screen flex flex-col items-center justify-center py-20">
      <motion.h2
        className="text-4xl text-white mb-10 font-bold"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        My Skills
      </motion.h2>

      <motion.div
        className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-white text-6xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* HTML */}
        <motion.div className="flex flex-col items-center group" variants={itemVariants}>
          <FaHtml5 className="group-hover:text-red-500 transition-transform duration-300 transform group-hover:scale-110" />
          <p className="text-base mt-4 text-gray-400 group-hover:text-red-500 transition-colors duration-300">HTML</p>
        </motion.div>

        {/* CSS */}
        <motion.div className="flex flex-col items-center group" variants={itemVariants}>
          <FaCss3Alt className="group-hover:text-blue-500 transition-transform duration-300 transform group-hover:scale-110" />
          <p className="text-base mt-4 text-gray-400 group-hover:text-blue-500 transition-colors duration-300">CSS</p>
        </motion.div>

        {/* React */}
        <motion.div className="flex flex-col items-center group" variants={itemVariants}>
          <FaReact className="group-hover:text-blue-400 transition-transform duration-300 transform group-hover:scale-110" />
          <p className="text-base mt-4 text-gray-400 group-hover:text-blue-400 transition-colors duration-300">React</p>
        </motion.div>

        {/* JavaScript */}
        <motion.div className="flex flex-col items-center group" variants={itemVariants}>
          <FaJs className="group-hover:text-yellow-500 transition-transform duration-300 transform group-hover:scale-110" />
          <p className="text-base mt-4 text-gray-400 group-hover:text-yellow-500 transition-colors duration-300">JavaScript</p>
        </motion.div>

        {/* Git */}
        <motion.div className="flex flex-col items-center group" variants={itemVariants}>
          <FaGitAlt className="group-hover:text-orange-500 transition-transform duration-300 transform group-hover:scale-110" />
          <p className="text-base mt-4 text-gray-400 group-hover:text-orange-500 transition-colors duration-300">Git</p>
        </motion.div>

        {/* GitHub */}
        <motion.div className="flex flex-col items-center group" variants={itemVariants}>
          <FaGithub className="group-hover:text-gray-400 transition-transform duration-300 transform group-hover:scale-110" />
          <p className="text-base mt-4 text-gray-400 group-hover:text-gray-400 transition-colors duration-300">GitHub</p>
        </motion.div>

        {/* MongoDB */}
        <motion.div className="flex flex-col items-center group" variants={itemVariants}>
          <FaDatabase className="group-hover:text-green-500 transition-transform duration-300 transform group-hover:scale-110" />
          <p className="text-base mt-4 text-gray-400 group-hover:text-green-500 transition-colors duration-300">MongoDB</p>
        </motion.div>

        {/* Firebase */}
        <motion.div className="flex flex-col items-center group" variants={itemVariants}>
          <SiFirebase className="group-hover:text-yellow-500 transition-transform duration-300 transform group-hover:scale-110" />
          <p className="text-base mt-4 text-gray-400 group-hover:text-yellow-500 transition-colors duration-300">Firebase</p>
        </motion.div>

        {/* Vercel */}
        <motion.div className="flex flex-col items-center group" variants={itemVariants}>
          <SiVercel className="group-hover:text-white transition-transform duration-300 transform group-hover:scale-110" />
          <p className="text-base mt-4 text-gray-400 group-hover:text-white transition-colors duration-300">Vercel</p>
        </motion.div>

        {/* Express JS */}
        <motion.div className="flex flex-col items-center group" variants={itemVariants}>
          <SiExpress className="group-hover:text-white transition-transform duration-300 transform group-hover:scale-110" />
          <p className="text-base mt-4 text-gray-400 group-hover:text-white transition-colors duration-300">Express JS</p>
        </motion.div>
      </motion.div>

      <div className="border-t border-gray-600 mt-6 pt-4 text-center text-sm" />
    </div>
  );
};

export default Skill;
