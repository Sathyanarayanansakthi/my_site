import { FaLinkedin } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { FaDev } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    
    <div className="py-4 sm:py-8 px-4 sm:px-10 md:px-20 text-2xl sm:text-3xl md:text-4xl ">
      <motion.h4
      className="text-4xl text-white font-bold"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 10 }}
      transition={{
        duration: 1,
        ease: 'easeInOut',
        delay: 0.5,}}
       >Sathya Narayanan</motion.h4>
      
      <div className="pt-4 sm:pt-6 flex justify-center sm:justify-start text-xl sm:text-2xl md:text-3xl gap-4 sm:gap-6 md:gap-8">

        <a
          href="https://www.linkedin.com/in/your-linkedin-profile"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="text-gray-50 hover:text-gray-700 transform hover:scale-110 transition-transform duration-300"
        >
          <FaLinkedin />
        </a>


        <a
          href="https://github.com/your-github-profile"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="text-gray-50 hover:text-gray-700 transform hover:scale-110 transition-transform duration-300"
        >
          <FaSquareGithub />
        </a>


        <a
          href="https://dev.to/your-dev-profile"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Dev"
          className="text-gray-50 hover:text-gray-700 transform hover:scale-110 transition-transform duration-300"
        >
          <FaDev />
        </a>


        <a
          href="https://www.instagram.com/your-instagram-profile"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="text-gray-50 hover:text-gray-700 transform hover:scale-110 transition-transform duration-300"
        >
          <FaInstagramSquare />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
