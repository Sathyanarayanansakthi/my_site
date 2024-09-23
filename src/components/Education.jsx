import { motion } from "framer-motion";

const educationData = [
  {
    year: "2022 - Present",
    degree: "Bachlor in Science Computer Science with Cognitive Systems",
    institution: "Sri Krishna Arts and Science College, Coimbatore",
  },
  {
    year: "2021 - 2022",
    degree: "Higher Secondary Education (12th)",
    institution: "Sri GopalNaidu Hr Sec School, Coimbatore",
  },
  {
    year: "2019 - 2020",
    degree: "Secondary Education (10th)",
    institution: "Sri GopalNaidu Hr Sec School, Coimbatore",
  },
];

const timelineVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.2, type: "spring", stiffness: 100 },
  }),
};

const Education = () => {
  return (
    <div className="bg-slate-950 min-h-screen text-white flex flex-col items-center py-20">
      <h1 className="text-4xl font-bold mb-10">Education</h1>
      
      {/* Timeline Container */}
      <div className="w-full max-w-4xl mx-auto px-4">
        {/* Education items */}
        {educationData.map((item, index) => (
          <motion.div
            className="relative border-l border-gray-700 pl-8 mb-10"
            initial="hidden"
            animate="visible"
            custom={index}
            variants={timelineVariants}
            key={index}
          >
            {/* Timeline dot */}
            <div className="absolute -left-3 w-6 h-6 bg-gray-400 rounded-full border-2 border-gray-700"></div>
            
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
