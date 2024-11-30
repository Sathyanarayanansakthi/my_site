import { FaTrophy, FaAward } from "react-icons/fa";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

// Data for achievements
const achievementsData = [
  {
    title: "National Level Technical Symposium - Runner-up",
    description: "Achieved the runner-up position in a national-level technical symposium.",
    icon: <FaTrophy className="text-4xl text-yellow-400" />,
  },
  {
    title: "Smart India Hackathon - College Level",
    description: "Participated as a finalist in the Smart India Hackathon with a project submission.",
    icon: <FaAward className="text-4xl text-blue-400" />,
  },
];

const Achievements = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); // Trigger animations once when in view

  // Animation variants
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
    <section
      className="flex flex-col items-center justify-center min-h-screen py-20 bg-slate-800"
      ref={ref}
    >
      {/* Section Title */}
      <motion.h1
        className="mb-10 text-4xl font-bold text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
      >
        My Achievements
      </motion.h1>

      {/* Fallback for Empty Data */}
      {achievementsData.length === 0 ? (
        <p className="text-lg text-white">No achievements added yet. Stay tuned!</p>
      ) : (
        <motion.div
          className="grid grid-cols-1 gap-8 px-4 mx-auto sm:grid-cols-1 lg:grid-cols-1 xl:grid-cols-5 max-w-7xl"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
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
              {/* Achievement Icon */}
              <div
                className="mb-4"
                aria-label={`${achievement.title} icon`}
              >
                {achievement.icon}
              </div>
              {/* Achievement Title */}
              <h3 className="text-xl font-semibold">{achievement.title}</h3>
              {/* Achievement Description */}
              <p className="mt-2 text-sm text-gray-400">{achievement.description}</p>
            </motion.div>
          ))}
        </motion.div>
      )}
    </section>
  );
};

export default Achievements;
