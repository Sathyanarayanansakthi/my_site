import { FaTrophy, FaAward } from "react-icons/fa";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

// Achievements Data
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
  const isInView = useInView(ref, { once: true });

  // Animation
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
      transition: { duration: 0.5 },
    },
  };

  return (
    <section
      ref={ref}
      className="flex flex-col items-center justify-center min-h-screen py-20 px-6"
      style={{
        backgroundImage: `
          linear-gradient(to bottom right, #0f172a, #1e293b),
          radial-gradient(circle at 1px 1px, rgba(255,255,255,0.06) 1px, transparent 0)
        `,
        backgroundSize: "100% 100%, 20px 20px",
        backgroundBlendMode: "overlay",
      }}
    >
      {/* Heading */}
      <motion.h1
        className="text-4xl md:text-5xl font-bold text-white mb-16 text-center"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        My Achievements
      </motion.h1>

      {/* Grid */}
      {achievementsData.length === 0 ? (
        <p className="text-lg text-white">No achievements added yet. Stay tuned!</p>
      ) : (
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-5xl w-full"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {achievementsData.map((achievement, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-white/5 border border-white/10 backdrop-blur rounded-2xl text-white shadow-lg hover:border-teal-400 transition-all"
            >
              <div className="mb-4 flex justify-center">{achievement.icon}</div>
              <h3 className="text-xl font-semibold text-center">{achievement.title}</h3>
              <p className="mt-2 text-sm text-center text-gray-300">
                {achievement.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      )}
    </section>
  );
};

export default Achievements;
