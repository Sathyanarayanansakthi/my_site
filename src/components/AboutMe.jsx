import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const AboutMe = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-900 to-gray-900 p-4 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-0 w-52 h-52 bg-purple-500 opacity-20 blur-3xl rounded-full animate-pulse" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-500 opacity-30 blur-3xl rounded-full animate-pulse" />
      </div>

      {/* About Me Heading */}
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, ease: "easeInOut", delay: 0.3 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white tracking-wider text-center mb-6">
          About Me
        </h2>
      </motion.div>

      {/* About Me Content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1.2, ease: "easeInOut", delay: 0.5 }}
      >
        <div className="max-w-3xl bg-white/10 backdrop-blur-lg text-white text-center text-lg leading-relaxed p-6 md:p-10 rounded-2xl shadow-lg">
          A highly motivated Final-Year Student specializing in Full-Stack
          Development, with a strong passion for creating innovative,
          efficient, and user-centric web applications. Proficient in a wide
          range of front-end and back-end technologies, I am committed to
          delivering solutions that drive seamless user experiences and
          operational efficiency. With a keen interest in collaboration and
          team-driven environments, I am eager to apply my technical expertise
          to contribute to impactful projects that make a difference in the
          digital landscape.
        </div>
      </motion.div>
    </div>
  );
};

export default AboutMe;
