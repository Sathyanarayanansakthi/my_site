import { FaTrophy, FaAward, FaMedal } from 'react-icons/fa'; 
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const achievementsData = [
  {
    title: "National Level Technical Symposium - Runner-up",
    description: "Achieved the runner-up position in a national-level technical symposium.",
    icon: <FaTrophy className="text-4xl text-yellow-400" />,  // Updated color
  },
  {
    title: "Smart India Hackathon - College Level",
    description: "Participated as a finalist in the Smart India Hackathon with a project submission.",
    icon: <FaAward className="text-4xl text-blue-400" />,  // Updated color
  },

  {
    title: "Top Performer in Full Stack Development Course",
    description: "Awarded the title of Top Performer in the Full Stack Development Course.",
    icon: <FaTrophy className="text-4xl text-red-400" />,  // Updated color
  },
  {
    title: "Project 'Startup Portal' for AYUSH",
    description: "Successfully developed and implemented a 'Startup Portal' project for AYUSH.",
    icon: <FaAward className="text-4xl text-purple-400" />,  // Updated color
  },
];

const Achievements = () => {
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
    <div className="flex flex-col items-center justify-center min-h-screen py-20 bg-slate-800" ref={ref}>
      <motion.h1
        className="mb-10 text-4xl font-bold text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        My Achievements
      </motion.h1>

      {/* Achievement Cards */}
      <motion.div
        className="grid grid-cols-1 gap-8 px-4 mx-auto sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 max-w-7xl"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"} // Trigger animation based on visibility
      >
        {achievementsData.map((achievement, index) => (
          <motion.div
            key={index}
            className="p-6 text-center text-white transition-transform duration-300 transform bg-gray-800 rounded-lg shadow-xl hover:scale-105 hover:bg-gray-700"
            variants={itemVariants}
            whileHover={{
              scale: 1.05,
              opacity: 0.8,
              transition: { duration: 0.3 },
            }}
          >
            <div className="mb-4">{achievement.icon}</div>
            <h3 className="text-xl font-semibold">{achievement.title}</h3>
            <p className="mt-2 text-sm text-gray-400">{achievement.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Achievements;
