import { SlSocialLinkedin  } from "react-icons/sl";
import { SiGithub  } from "react-icons/si";
import { SiDevdotto  } from "react-icons/si";
import { SiInstagram } from "react-icons/si";
import { SiBloglovin  } from "react-icons/si";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    
    <div className="py-4 sm:py-8 px-4 sm:px-10 md:px-20 text-2xl sm:text-3xl md:text-4xl ">
      <motion.h4
      className="text-4xl text-white font-bold"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 10 }}
      transition={{
        duration: 2,
        ease: 'easeInOut',
        delay: 0.5,}}
       >Sathya Narayanan</motion.h4>
      
      <div className="pt-4 sm:pt-6 flex justify-center sm:justify-start text-xl sm:text-2xl md:text-3xl gap-4 sm:gap-6 md:gap-8">

        <a
          href="https://linkedin.com/in/sathya-narayanans"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="text-gray-50 hover:text-gray-700 transform hover:scale-110 transition-transform duration-300"
        >
          <SlSocialLinkedin />
        </a>


        <a
          href="https://github.com/Sathyanarayanansakthi"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="text-gray-50 hover:text-gray-700 transform hover:scale-110 transition-transform duration-300"
        >
          <SiGithub />
        </a>


        <a
          href="https://dly.to/sBFI3z051ds "
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Dev"
          className="text-gray-50 hover:text-gray-700 transform hover:scale-110 transition-transform duration-300"
        >
         <SiDevdotto />
        </a>


        <a
          href="https://www.instagram.com/sathyanarayanansakthi?igsh=MWFzbTZzemNpeXppZw== "
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="text-gray-50 hover:text-gray-700 transform hover:scale-110 transition-transform duration-300"
        >
          <SiInstagram />

        </a>

        <a 
        href="https://www.google.com"
        target="_blank"
        rel="noopener norferrer"
        aria-label="SN blog"
        className="text-gray-50 hover:text-gray-700 transform hover:scale-110 transition duration-300"
        >
          <SiBloglovin />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
