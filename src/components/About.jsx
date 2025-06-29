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

  // const imageVariants = {
  //   hidden: { opacity: 0, scale: 0.95 },
  //   visible: {
  //     opacity: 1,
  //     scale: 1,
  //     transition: { type: "spring", stiffness: 60, duration: 1.2 },
  //   },
  // };

  return (
    <div
      ref={ref}
      className="flex items-center min-h-screen text-white"
      style={{
        backgroundImage: `
          linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%),
          radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.06) 1px, transparent 0)
        `,
        backgroundSize: "100% 100%, 20px 20px",
        backgroundBlendMode: "overlay",
      }}
    >
      <motion.div
        className="flex flex-col justify-between w-full px-6 py-16 mx-auto max-w-7xl md:flex-row md:items-center gap-12"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        {/* Text Side */}
        <motion.div
          className="relative z-10 p-8 backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl shadow-2xl md:w-1/2"
          variants={fadeInUp}
        >
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-100 md:text-5xl">
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            👋 Hello, I'm  Sathya Narayanan
          </h1>
          <p className="mt-6 text-base leading-relaxed text-slate-200 md:text-lg">
            I build dynamic, elegant, and scalable web applications. With strong
            frontend and backend skills, I focus on collaboration, clean design,
            and meaningful product experiences.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-6 py-3 mt-8 text-lg font-medium text-white transition duration-300 rounded-lg bg-gradient-to-r from-indigo-800 via-indigo-900 to-black hover:shadow-[0_0_15px_#6366f1]"
            onClick={() => window.open("/resume.pdf", "_blank")}
          >
            <FaDownload /> Download Resume
          </motion.button>
        </motion.div>

      </motion.div>
    </div>
  );
};

export default About;
