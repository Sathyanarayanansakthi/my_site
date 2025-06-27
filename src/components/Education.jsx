import  { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaGraduationCap, FaBriefcase } from "react-icons/fa";

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
    description:
      "Built modern web apps using React, Node.js, and MongoDB for various clients, focusing on responsive UI and backend integration.",
  },
];

// Animation Variants
const timelineVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.3, type: "spring", stiffness: 60 },
  }),
};

const EducationAndExperience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div
      ref={ref}
      className="min-h-screen py-20 px-4 md:px-0 text-white flex flex-col items-center"
      style={{
        backgroundImage: `
          linear-gradient(to bottom, #0f172a, #1e293b),
          radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.06) 1px, transparent 0)
        `,
        backgroundSize: "100% 100%, 20px 20px",
        backgroundBlendMode: "overlay",
      }}
    >
      {/* Section Heading */}
      <motion.h3
        initial={{ opacity: 0, y: -30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-4xl font-extrabold mb-16 tracking-wide"
      >
        Education & Experience
      </motion.h3>

      <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Education */}
        <div>
          <h4 className="text-2xl font-semibold mb-6 flex items-center gap-2">
            <FaGraduationCap className="text-teal-400" /> Education
          </h4>
          <div className="space-y-8">
            {educationData.map((item, index) => (
              <motion.div
                key={index}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                custom={index}
                variants={timelineVariants}
                className="bg-slate-800/60 p-5 rounded-2xl shadow-lg border border-slate-600 hover:border-teal-400 transition-all"
              >
                <p className="text-sm text-teal-400 font-medium mb-2">
                  {item.year}
                </p>
                <h5 className="text-xl font-bold">{item.degree}</h5>
                <p className="text-gray-400">{item.institution}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Experience */}
        <div>
          <h4 className="text-2xl font-semibold mb-6 flex items-center gap-2">
            <FaBriefcase className="text-purple-400" /> Experience
          </h4>
          <div className="space-y-8">
            {experienceData.map((item, index) => (
              <motion.div
                key={index}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                custom={index}
                variants={timelineVariants}
                className="bg-slate-800/60 p-5 rounded-2xl shadow-lg border border-slate-600 hover:border-purple-400 transition-all"
              >
                <p className="text-sm text-purple-400 font-medium mb-2">
                  {item.duration}
                </p>
                <h5 className="text-xl font-bold">{item.role}</h5>
                <p className="text-gray-300 italic">{item.company}</p>
                <p className="text-gray-400 mt-2">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationAndExperience;
