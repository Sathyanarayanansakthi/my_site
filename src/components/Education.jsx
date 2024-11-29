import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const educationData = [
  {
    year: "2022 - Present",
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
    degree: "Secondary Scholl Education (10th)",
    institution: "Sri Gopal Naidu Hr Sec School, Coimbatore",
  },
];

const timelineVariants = {
  hidden: { opacity: 0, x: -50 }, // Initially hidden and shifted to the left
  visible: (i) => ({
    opacity: 1,
    x: 0, // Moves into position
    transition: { delay: i * 0.3, type: "spring", stiffness: 100 },
  }),
};

const hoverEffect = {
  scale: 1.05, // Slightly enlarge on hover
  backgroundColor: "#1e293b", // Change background color on hover
  transition: { type: "spring", stiffness: 200 },
};

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); // Trigger animations only once

  return (
    <div
      ref={ref}
      className="flex flex-col items-center min-h-screen py-20 text-white bg-slate-950"
    >
      {/* Section Heading */}
      <motion.h1
        className="mb-10 text-4xl font-bold"
        initial={{ opacity: 0, y: -30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Education
      </motion.h1>

      {/* Timeline Container */}
      <div className="w-full max-w-4xl px-4 mx-auto">
        {educationData.map((item, index) => (
          <motion.div
            className="relative pl-8 mb-10 border-l border-gray-700 hover:shadow-lg"
            key={index}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            custom={index}
            variants={timelineVariants}
            whileHover={hoverEffect} // Hover effect
          >
            {/* Timeline Dot */}
            <div className="absolute w-6 h-6 bg-gray-400 border-2 border-gray-700 rounded-full -left-3"></div>

            {/* Year */}
            <span className="text-xl font-semibold">{item.year}</span>

            {/* Degree and Institution */}
            <div className="mt-2">
              <h2 className="text-2xl font-bold">{item.degree}</h2>
              <p className="text-lg text-gray-400">{item.institution}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Education;
