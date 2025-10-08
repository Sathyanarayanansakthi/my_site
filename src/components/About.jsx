import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FaDownload, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const glowVariants = {
    animate: {
      boxShadow: [
        "0 0 20px rgba(99, 102, 241, 0.3)",
        "0 0 60px rgba(139, 92, 246, 0.4)",
        "0 0 20px rgba(99, 102, 241, 0.3)",
      ],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div
      ref={ref}
      className="relative flex items-center min-h-screen overflow-hidden bg-slate-950"
    >
      {/* Animated Background Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl -top-48 -left-48"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute w-96 h-96 bg-purple-500/20 rounded-full blur-3xl -bottom-48 -right-48"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
        <motion.div
          className="absolute w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(rgba(99, 102, 241, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(99, 102, 241, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />

      <motion.div
        className="relative z-10 w-full px-6 py-16 mx-auto max-w-7xl"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <motion.div variants={fadeInUp} className="mb-8 mt-20">
            <span className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-indigo-300 border rounded-full bg-indigo-950/50 border-indigo-500/30 backdrop-blur-sm">
              <span className="relative flex w-2 h-2">
                <span className="absolute inline-flex w-full h-full bg-indigo-400 rounded-full opacity-75 animate-ping"></span>
                <span className="relative inline-flex w-2 h-2 bg-indigo-500 rounded-full"></span>
              </span>
              Available for opportunities
            </span>
          </motion.div>

          {/* Main Content Card */}
          <motion.div
            variants={glowVariants}
            animate="animate"
            className="relative p-8 md:p-12 rounded-3xl bg-gradient-to-br from-slate-900/90 via-slate-900/50 to-slate-900/90 backdrop-blur-xl border border-white/10"
          >
            {/* Decorative corner accents */}
            <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-indigo-500/50 rounded-tl-3xl"></div>
            <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-purple-500/50 rounded-br-3xl"></div>

            <motion.div variants={fadeInUp}>
              <h1 className="text-5xl font-black tracking-tight md:text-7xl bg-gradient-to-r from-white via-indigo-200 to-purple-200 bg-clip-text text-transparent">
                Hello, I'm
                <br />
                <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Sathya Narayanan
                </span>
              </h1>
            </motion.div>

            <motion.p
              variants={fadeInUp}
              className="mt-6 text-lg leading-relaxed md:text-xl text-slate-300"
            >
              I craft dynamic, elegant, and scalable web applications that push boundaries.
              With expertise spanning frontend artistry to backend architecture, I transform
              ideas into seamless digital experiences that users love.
            </motion.p>

            {/* Skills Tags */}
            <motion.div variants={fadeInUp} className="flex flex-wrap gap-3 mt-8">
              {["React", "Node.js", "TypeScript", "UI/UX", "Full Stack"].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 text-sm font-medium text-indigo-200 transition-all duration-300 rounded-lg bg-slate-800/50 backdrop-blur-sm border border-indigo-500/20 hover:border-indigo-500/50 hover:bg-slate-800/80"
                >
                  {skill}
                </span>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap gap-4 mt-10"
            >
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="relative flex items-center gap-3 px-8 py-4 text-lg font-semibold text-white overflow-hidden group rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 transition-all duration-300 shadow-lg shadow-indigo-500/50"
                onClick={() => window.open("/resume.pdf", "_blank")}
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
                <FaDownload className="relative z-10" />
                <span className="relative z-10">Download Resume</span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-3 px-8 py-4 text-lg font-semibold text-white transition-all duration-300 border rounded-xl bg-slate-800/50 backdrop-blur-sm border-slate-700 hover:bg-slate-800 hover:border-indigo-500/50"
              >
                View Projects
              </motion.button>
            </motion.div>

            {/* Social Links */}
            
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
