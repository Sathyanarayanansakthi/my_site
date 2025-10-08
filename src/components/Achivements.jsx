import { FaTrophy, FaAward, FaStar } from "react-icons/fa";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

// Achievements Data
const achievementsData = [
  {
    title: "National Level Technical Symposium",
    subtitle: "Runner-up Position",
    description: "Achieved the runner-up position in a national-level technical symposium, competing against top talent from across the country.",
    icon: FaTrophy,
    gradient: "from-yellow-400 via-orange-500 to-red-500",
    bgGradient: "from-yellow-500/20 to-orange-500/20",
    glowColor: "rgba(251, 146, 60, 0.4)",
    year: "2024",
  },
  {
    title: "Smart India Hackathon",
    subtitle: "College Level Finalist",
    description: "Participated as a finalist in the Smart India Hackathon with an innovative project submission showcasing technical excellence.",
    icon: FaAward,
    gradient: "from-blue-400 via-cyan-500 to-teal-500",
    bgGradient: "from-blue-500/20 to-cyan-500/20",
    glowColor: "rgba(56, 189, 248, 0.4)",
    year: "2024",
  },
];

const Achievements = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const headingVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section
      ref={ref}
      className="relative flex flex-col items-center justify-center min-h-screen py-20 px-6 overflow-hidden bg-slate-950"
    >
      {/* Animated Background Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute w-96 h-96 bg-purple-500/20 rounded-full blur-3xl top-20 left-10"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl bottom-20 right-10"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.6, 0.4],
            x: [0, -50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute w-96 h-96 bg-pink-500/10 rounded-full blur-3xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.2, 0.4, 0.2],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Grid Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(rgba(139, 92, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(139, 92, 246, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />

      <div className="relative z-10 max-w-7xl w-full">
        {/* Section Badge */}
        <motion.div
          variants={headingVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex justify-center mb-6"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-purple-300 border rounded-full bg-purple-950/50 border-purple-500/30 backdrop-blur-sm">
            <FaStar className="text-yellow-400" />
            Milestones & Recognition
          </span>
        </motion.div>

        {/* Heading */}
        <motion.div
          variants={headingVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-black tracking-tight mb-4">
            <span className="bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent">
              My Achievements
            </span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Celebrating moments of excellence and recognition in my journey
          </p>
        </motion.div>

        {/* Achievements Grid */}
        {achievementsData.length === 0 ? (
          <motion.p
            className="text-lg text-slate-400 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            No achievements added yet. Stay tuned!
          </motion.p>
        ) : (
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {achievementsData.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="group relative"
                >
                  {/* Glow effect on hover */}
                  <motion.div
                    className="absolute -inset-0.5 rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"
                    style={{
                      background: `linear-gradient(135deg, ${achievement.glowColor}, transparent)`,
                    }}
                  />

                  <div className="relative h-full p-8 bg-gradient-to-br from-slate-900/90 via-slate-900/50 to-slate-900/90 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden">
                    {/* Animated gradient background */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${achievement.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                    />

                    {/* Decorative corner elements */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/5 to-transparent rounded-bl-full" />
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-white/5 to-transparent rounded-tr-full" />

                    {/* Content */}
                    <div className="relative z-10">
                      {/* Icon Container */}
                      <div className="flex items-start justify-between mb-6">
                        <motion.div
                          className={`flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br ${achievement.gradient} shadow-lg`}
                          whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                          transition={{ duration: 0.5 }}
                        >
                          <Icon className="text-4xl text-white" />
                        </motion.div>

                        {/* Year badge */}
                        <span className="px-3 py-1 text-xs font-bold text-white bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                          {achievement.year}
                        </span>
                      </div>

                      {/* Title & Subtitle */}
                      <div className="mb-4">
                        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-300 transition-all">
                          {achievement.title}
                        </h3>
                        <p className={`text-sm font-semibold bg-gradient-to-r ${achievement.gradient} bg-clip-text text-transparent`}>
                          {achievement.subtitle}
                        </p>
                      </div>

                      {/* Description */}
                      <p className="text-slate-300 leading-relaxed">
                        {achievement.description}
                      </p>

                      {/* Decorative line */}
                      <motion.div
                        className={`mt-6 h-1 rounded-full bg-gradient-to-r ${achievement.gradient} origin-left`}
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        transition={{ duration: 0.8, delay: index * 0.2 }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        )}

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <p className="text-slate-400 text-lg">
            More achievements on the way...{" "}
            <span className="inline-block animate-pulse">✨</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
