import image from "../components/images/ai.jpg";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FaDownload } from "react-icons/fa";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

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

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, type: "spring", stiffness: 60 },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { type: "spring", stiffness: 60, duration: 1.5 },
    },
  };

  return (
    <div
      ref={ref}
      className="flex items-center min-h-screen text-white"
      style={{
        backgroundColor: "#0f172a",
        backgroundImage: `
          linear-gradient(to right, #0a0a0a, #d1d5db),
          radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.04) 1px, transparent 0)
        `,
        backgroundSize: "100% 100%, 22px 22px",
        backgroundBlendMode: "overlay",
      }}
    >
      <motion.div
        className="flex flex-col justify-between w-full px-6 py-16 mx-auto max-w-7xl md:flex-row md:items-center"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        {/* Text Side */}
        <motion.div
          className="relative z-10 p-8 backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl shadow-xl md:w-1/2"
          variants={fadeInUp}
        >
          <h1 className="text-4xl font-extrabold tracking-tight text-white md:text-5xl">
            👋 Hello, I'm <span className="text-blue-400">a Full-Stack Developer</span>
          </h1>
          <p className="mt-6 text-base leading-relaxed text-gray-300 md:text-lg">
            With a strong command of both front-end and back-end technologies, I
            specialize in creating smooth and high-performance web experiences.
            My passion lies in collaboration, design thinking, and developing
            products that make a difference in the digital world.
          </p>

          <motion.button
            whileHover={{
              scale: 1.05,
              backgroundColor: "#3b82f6",
              color: "#fff",
            }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-6 py-3 mt-8 text-lg font-medium text-blue-400 transition duration-300 border border-blue-400 rounded-lg hover:bg-blue-500 hover:text-white"
            onClick={() => window.open("/resume.pdf", "_blank")}
          >
            <FaDownload /> Download Resume
          </motion.button>
        </motion.div>

        {/* Image Side */}
        <motion.div
          className="relative flex items-center justify-center mt-10 md:mt-0 md:w-1/2"
          variants={imageVariants}
        >
          <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full bg-gradient-to-tr from-blue-500 via-purple-500 to-pink-500 p-1 shadow-2xl">
            <img
              src={image}
              alt="AI Illustration"
              className="w-full h-full rounded-full object-cover"
            />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About;

