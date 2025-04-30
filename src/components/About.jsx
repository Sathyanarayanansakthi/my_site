import image from "../components/images/ai.jpg";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

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
        staggerChildren: 0.3,
        delayChildren: 0.3,
      },
    },
  };

  return (
    <div
      ref={ref}
      className="min-h-screen w-full bg-gradient-to-br from-slate-900 via-purple-800 to-blue-800 flex items-center justify-center"
    >
      <motion.div
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="grid max-w-7xl grid-cols-1 gap-10 px-4 py-10 md:grid-cols-2 md:px-8 md:py-20"
      >
        {/* Left - Text */}
        <motion.div variants={textVariants} className="flex flex-col justify-center">
          <h1 className="text-4xl font-bold text-white md:text-5xl">
            Hello There
          </h1>
          <p className="py-5 text-base text-gray-300 sm:py-10 sm:text-lg md:text-xl">
            I am a highly driven Full-Stack Developer with proficiency across a
            wide range of front-end and back-end technologies. I am committed to
            building solutions that deliver seamless user experiences and
            optimize operational efficiency. Passionate about teamwork and
            collaboration, I strive to contribute to impactful projects that
            shape and elevate the digital landscape.
          </p>
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

        {/* Right - Image */}
        <motion.div
          variants={imageVariants}
          className="flex items-center justify-center"
        >
          <motion.img
            src={image}
            alt="AI illustration"
            className="object-cover w-64 h-64 rounded-xl shadow-2xl sm:w-80 sm:h-80 md:w-96 md:h-96"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About;

