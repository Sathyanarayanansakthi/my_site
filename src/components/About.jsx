import image from "../components/images/ai.jpg";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); // Trigger animations once

  // Variants
  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { type: "spring", stiffness: 40, duration: 1.5 },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 50, duration: 1.9 },
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // Stagger child animations
        delayChildren: 0.3, // Initial delay before staggering
      },
    },
  };

  return (
    <div
      className="flex items-center min-h-screen bg-slate-900"
      ref={ref} // Attach ref to observe this section
    >
      <motion.div
        className="flex flex-col justify-between w-full px-4 py-10 mx-auto max-w-7xl md:px-8 md:py-20 md:flex-row"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"} // Trigger animation based on scroll
        variants={containerVariants}
      >
        {/* Left Side */}
        <motion.div
          className="text-3xl text-white md:w-1/2 sm:text-4xl md:text-5xl"
          variants={textVariants}
        >
          <h1 className="text-4xl font-bold">Hello There</h1>
          <div className="py-5 text-base sm:py-10 sm:text-lg md:text-xl">
          I am a highly driven Final-Year Student specializing in Full-Stack Development, with proficiency in a broad spectrum of front-end and back-end technologies. I am dedicated to crafting solutions that enhance user experience and operational efficiency. Passionate about teamwork and collaboration, I am eager to leverage my technical skills to contribute to meaningful projects that positively impact the digital landscape.
          </div>
          <motion.button
            whileHover={{
              scale: 1.1,
              backgroundColor: "#e5e5e5",
              color: "#000",
            }}
            whileTap={{ scale: 0.9 }}
            className="px-4 py-2 text-lg text-gray-400 transition-colors duration-300 border border-gray-400 rounded-lg sm:text-2xl md:text-3xl sm:px-6 sm:py-3 hover:bg-gray-100 hover:text-black"
            onClick={() => window.open("/resume.pdf", "_blank")}
          >
            Download Resume
          </motion.button>
        </motion.div>

        {/* Right Side */}
        <motion.div
          className="flex items-center justify-center mt-8 md:w-1/2 md:mt-0"
          variants={imageVariants}
        >
          <motion.img
            src={image}
            alt="AI illustration"
            className="object-cover w-64 h-64 rounded-lg shadow-lg sm:w-80 sm:h-80 md:w-96 md:h-96"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About;
