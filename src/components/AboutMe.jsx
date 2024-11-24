import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const AboutMe = () => {
  const ref = useRef(null); // Create a reference to track the element
  const isInView = useInView(ref, { once: true, margin: "-50px" }); // Detect when the element is in view

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center p-10">
      <motion.h4
        ref={ref} // Attach the reference to this element
        className="text-4xl text-white font-bold mb-6"
        initial={{ opacity: 0, y: 50 }} // Initial state before scrolling
        animate={isInView ? { opacity: 1, y: 0 } : {}} // Trigger animation when in view
        transition={{
          duration: 1,
          ease: "easeInOut",
          delay: 0.3,
        }}
      >
        About Me
      </motion.h4>

      <motion.div
        className="text-white text-lg leading-relaxed text-center max-w-3xl"
        initial={{ opacity: 0, y: 50 }} // Initial state
        animate={isInView ? { opacity: 1, y: 0 } : {}} // Trigger animation when in view
        transition={{
          duration: 1.2,
          ease: "easeInOut",
          delay: 0.5,
        }}
      >
        A highly motivated Final-Year Student specializing in Full-Stack Development, 
        with a strong passion for creating innovative, efficient, and user-centric web applications. 
        Proficient in a wide range of front-end and back-end technologies, I am committed to delivering solutions 
        that drive seamless user experiences and operational efficiency. 
        With a keen interest in collaboration and team-driven environments, I am eager to apply my technical 
        expertise to contribute to impactful projects that make a difference in the digital landscape.
      </motion.div>
    </div>
  );
};

export default AboutMe;
