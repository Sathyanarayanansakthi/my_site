import image from "../components/images/ai.jpg";
import { motion } from "framer-motion";

const imageVariants = {
  hidden: { opacity: 0, scale: 2.9 }, // Initial state: slightly scaled down and invisible
  visible: {
    opacity: 1, 
    scale: 1, 
    transition: { type: "spring", stiffness: 40, duration: 5.0 }, // Spring animation with slight bounce
  },
};
 
const About = () => {
  return (
    <div className="bg-slate-900 min-h-screen flex items-center">
      {/* Container for both left and right sections */}
      <div className="w-full max-w-7xl mx-auto px-4 md:px-8 py-10 md:py-20 flex flex-col md:flex-row justify-between">
        {/* Left side content */}
        <div className="md:w-1/2 text-white text-3xl sm:text-4xl md:text-5xl">
          <h1>Hello there</h1>
          <div className="py-5 sm:py-10 text-base sm:text-lg md:text-xl">
            A Highly motivated Final-Year Student specializing in Full-Stack Development,
            <br /> 
            Proficient in a wide range of front-end and back-end technologies, I am committed to delivering solutions 
            that drive seamless user experiences and operational efficiency. 
            With a keen interest in collaboration and team-driven environments, I am eager to apply my technical 
            expertise to contribute to impactful projects that make a difference in the digital landscape.
          </div>
          <motion.button
            whileHover={{ scale: 1.1, backgroundColor: "#e5e5e5", color: "#000" }}
            whileTap={{ scale: 0.9 }}
            className="text-lg sm:text-2xl md:text-3xl border border-gray-400 text-gray-400 px-4 sm:px-6 py-2 sm:py-3 rounded-lg 
            hover:bg-gray-100 hover:text-black transition-colors duration-300"
          >
            Download Resume
          </motion.button>
        </div>


        <div className="md:w-1/2 flex items-center justify-center mt-8 md:mt-0">
          <motion.img 
            src={image} 
            alt="AI illustration"
            className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 object-cover rounded-lg shadow-lg"
            variants={imageVariants}
            initial="hidden"   // Start with the hidden state
            animate="visible"  // Animate to the visible state
          />
        </div>
      </div>
    </div>
  );
};

export default About
