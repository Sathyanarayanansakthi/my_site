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
        backgroundImage: `
          linear-gradient(135deg, #0d1b2a 0%, #1b263b 50%, #2b2d42 100%),
          radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.02) 1px, transparent 0)
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
          className="relative z-10 p-8 backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl shadow-xl md:w-1/2"
          variants={fadeInUp}
        >
          <h1 className="text-4xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-slate-200 via-slate-900 to-slate-900 md:text-5xl">
            👋 Hello, I'm a Full-Stack Developer
          </h1>
          <p className="mt-6 text-base leading-relaxed text-gray-300 md:text-lg">
            With a strong command of both front-end and back-end technologies, I
            specialize in creating smooth and high-performance web experiences.
            My passion lies in collaboration, design thinking, and developing
            products that make a difference in the digital world.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-6 py-3 mt-8 text-lg font-medium text-white transition duration-300 rounded-lg bg-gradient-to-r from-slate-800 via-blue-900 to-slate-900 hover:brightness-110"
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
          <div
            className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 p-1 shadow-2xl"
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(255,255,255,0.02) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(255,255,255,0.02) 1px, transparent 1px),
                linear-gradient(135deg, #1f2937, #374151, #111827)
              `,
              backgroundSize: "20px 20px, 20px 20px, cover",
              backgroundBlendMode: "overlay",
              borderRadius: "9999px",
            }}
          >
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
