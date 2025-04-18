// eslint-disable-next-line no-unused-vars
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const educationData = [
  {
    year: "2022 - 2025",
    degree: "Bachelor of Science in Computer Science with Cognitive Systems",
    institution: "Sri Krishna Arts and Science College, Coimbatore",
  },
  {
    year: "2021 - 2022",
    degree: "Higher Secondary Education (12th)",
    institution: "Sri Gopal Naidu Hr Sec School, Coimbatore",
  },
  {
    year: "2019 - 2020",
    degree: "Secondary School Education (10th)",
    institution: "Sri Gopal Naidu Hr Sec School, Coimbatore",
  },
];

const timelineVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.3, type: "spring", stiffness: 100 },
  }),
};

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div
      ref={ref}
      className="min-h-screen py-20 bg-slate-950 text-white flex flex-col items-center"
    >
      {/* Section Heading */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h3 className="text-3xl font-bold mb-10">Education</h3>
      </motion.div>

      {/* Timeline Container */}
      <div className="max-w-3xl w-full">
        {educationData.map((item, index) => (
          <motion.div
            key={index}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            custom={index}
            variants={timelineVariants}
            className="relative pl-10 mb-8 border-l-4 border-gray-500 hover:bg-slate-800 transition-all duration-300 p-5 rounded-lg"
          >
            {/* Timeline Dot */}
            <div className="w-3 h-3 bg-gray-500 border-2 border-slate-900 rounded-full absolute left-[-6px] top-6"></div>

            {/* Year */}
            <h6 className="text-gray-400 font-bold mb-2">{item.year}</h6>

            {/* Degree and Institution */}
            <div>
              <h5 className="text-xl font-bold">{item.degree}</h5>
              <p className="text-gray-600">{item.institution}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Education;
