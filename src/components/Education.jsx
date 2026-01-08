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
    logo: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
    description:
      "Built modern web apps using React, Node.js, and MongoDB for various clients, focusing on responsive UI and backend integration.",
  },
  {
    company: "Tata Consultancy Services",
    role: "Graduate Trainee",
    duration: "Dec 2025 - Present",
    logo: "https://companieslogo.com/img/orig/TCS.NS-7401f1bd.png?t=1720244494",
    description:
      "Built and maintained IT systems, providing technical support, troubleshooting hardware and software issues, and ensuring smooth day-to-day operations for users.",
  },
];

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.3 } },
};

const timelineVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 100, damping: 15 } },
};

const dotVariants = {
  hidden: { scale: 0, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { type: "spring", stiffness: 200, damping: 10 } },
};

const EducationAndExperience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div
      ref={ref}
      className="relative min-h-screen py-20 px-6 text-white flex flex-col items-center overflow-hidden bg-slate-950"
    >
      <div className="relative z-10 max-w-6xl w-full">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black bg-gradient-to-r from-white via-cyan-200 to-purple-200 bg-clip-text text-transparent mb-6">
            Education & Experience
          </h2>
        </motion.div>

        {/* Timeline Container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* ================= EDUCATION ================= */}
          <motion.div variants={containerVariants} initial="hidden" animate={isInView ? "visible" : "hidden"}>

            <motion.div variants={timelineVariants} className="flex items-center gap-3 mb-8">
              <div className="p-3 rounded-xl bg-gradient-to-br from-cyan-600 to-cyan-400 shadow-lg shadow-cyan-500/50">
                <FaGraduationCap className="text-2xl text-white" />
              </div>
              <h3 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-cyan-200 bg-clip-text text-transparent">
                Education
              </h3>
            </motion.div>

            <div className="relative">
              <div className="absolute left-6 top-8 bottom-8 w-0.5 bg-gradient-to-b from-cyan-500/50 via-cyan-500/30 to-transparent" />

              <div className="space-y-8">
                {educationData.map((item, index) => (
                  <motion.div key={index} variants={timelineVariants} className="relative pl-16">
                    <motion.div variants={dotVariants} className="absolute left-3 top-6 z-10">
                      <FaCircle className="text-cyan-400 text-lg" />
                    </motion.div>

                    <motion.div className="group backdrop-blur-xl bg-gradient-to-br from-slate-900/90 to-slate-800/50 border border-white/10 p-6 rounded-2xl shadow-2xl">
                      <div className="inline-flex items-center gap-2 mb-3 px-3 py-1.5 rounded-lg bg-cyan-950/50 border border-cyan-500/30">
                        <span className="text-sm font-bold text-cyan-300">{item.year}</span>
                      </div>

                      <h4 className="text-xl font-bold text-white mb-2">{item.degree}</h4>
                      <p className="text-slate-300 text-sm">{item.institution}</p>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* ================= EXPERIENCE ================= */}
          <motion.div variants={containerVariants} initial="hidden" animate={isInView ? "visible" : "hidden"}>

            <motion.div variants={timelineVariants} className="flex items-center gap-3 mb-8">
              <div className="p-3 rounded-xl bg-gradient-to-br from-purple-600 to-purple-400 shadow-lg shadow-purple-500/50">
                <FaBriefcase className="text-2xl text-white" />
              </div>
              <h3 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-purple-200 bg-clip-text text-transparent">
                Experience
              </h3>
            </motion.div>

            <div className="relative">
              <div className="absolute left-6 top-8 bottom-8 w-0.5 bg-gradient-to-b from-purple-500/50 via-purple-500/30 to-transparent" />

              <div className="space-y-8">
                {experienceData.map((item, index) => (
                  <motion.div key={index} variants={timelineVariants} className="relative pl-16">
                    <motion.div variants={dotVariants} className="absolute left-3 top-6 z-10">
                      <FaCircle className="text-purple-400 text-lg" />
                    </motion.div>

                    <motion.div className="group backdrop-blur-xl bg-gradient-to-br from-slate-900/90 to-slate-800/50 border border-white/10 p-6 rounded-2xl shadow-2xl">
                      <div className="inline-flex items-center gap-2 mb-3 px-3 py-1.5 rounded-lg bg-purple-950/50 border border-purple-500/30">
                        <span className="text-sm font-bold text-purple-300">{item.duration}</span>
                      </div>

                      <div className="flex items-center gap-4 mb-3">
                        <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center border border-white/20">
                          <img
                            src={item.logo}
                            alt={item.company}
                            className="w-10 h-10 object-contain"
                          />
                        </div>

                        <div>
                          <h4 className="text-xl font-bold text-white">{item.role}</h4>
                          <p className="text-purple-200 italic text-sm">{item.company}</p>
                        </div>
                      </div>

                      <p className="text-slate-300 text-sm">{item.description}</p>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default EducationAndExperience;
