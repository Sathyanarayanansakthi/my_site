import { useState } from "react";
import { SlSocialLinkedin } from "react-icons/sl";
import { SiGithub, SiDevdotto, SiInstagram, SiBloglovin } from "react-icons/si";
import { motion } from "framer-motion";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Variants for mobile menu animation
  const menuVariants = {
    open: {
      height: "auto",
      opacity: 1,
      transition: {
        duration: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
    closed: {
      height: 0,
      opacity: 0,
      transition: { duration: 0.5 },
    },
  };

  // Variants for menu item animations
  const itemVariants = {
    open: { opacity: 1, y: 0 },
    closed: { opacity: 0, y: -20 },
  };

  return (
    <nav className="text-white bg-slate-850">
      <div className="flex items-center justify-between px-6 py-4 sm:px-10 md:px-20">
        {/* Logo */}
        <motion.h6
          className="text-2xl font-medium"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            ease: "easeInOut",
            delay: 0.3,
          }}
        >
          Sathya Narayanan
        </motion.h6>

        {/* Hamburger Icon */}
        <button
          className="sm:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          <motion.div
            className="w-6 h-0.5 bg-white mb-1"
            animate={menuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3 }}
          />
          <motion.div
            className="w-6 h-0.5 bg-white mb-1"
            animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
          <motion.div
            className="w-6 h-0.5 bg-white"
            animate={menuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3 }}
          />
        </button>

        {/* Desktop Navigation */}
        <div className="hidden gap-4 sm:flex md:gap-6">
          <a
            href="https://linkedin.com/in/sathya-narayanans"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="transition-transform duration-300 hover:text-gray-400"
          >
            <SlSocialLinkedin />
          </a>
          <a
            href="https://github.com/Sathyanarayanansakthi"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="transition-transform duration-300 hover:text-gray-400"
          >
            <SiGithub />
          </a>
          <a
            href="https://dly.to/sBFI3z051ds"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Dev"
            className="transition-transform duration-300 hover:text-gray-400"
          >
            <SiDevdotto />
          </a>
          <a
            href="https://www.instagram.com/sathyanarayanansakthi"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="transition-transform duration-300 hover:text-gray-400"
          >
            <SiInstagram />
          </a>
          <a
            href="comingsoon"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="SN Blog"
            className="transition-transform duration-300 hover:text-gray-400"
          >
            <SiBloglovin />
          </a>
        </div>
      </div>

      {/* Mobile Navigation */}
      <motion.div
        className="flex flex-col items-center gap-4 py-4 overflow-hidden bg-slate-800 sm:hidden"
        initial={false}
        animate={menuOpen ? "open" : "closed"}
        variants={menuVariants}
      >
        {[
          {
            href: "https://linkedin.com/in/sathya-narayanans",
            label: "LinkedIn",
            icon: <SlSocialLinkedin />,
          },
          {
            href: "https://github.com/Sathyanarayanansakthi",
            label: "GitHub",
            icon: <SiGithub />,
          },
          {
            href: "https://dly.to/sBFI3z051ds",
            label: "Dev",
            icon: <SiDevdotto />,
          },
          {
            href: "https://www.instagram.com/sathyanarayanansakthi",
            label: "Instagram",
            icon: <SiInstagram />,
          },
          {
            href: "comingsoon",
            label: "SN Blog",
            icon: <SiBloglovin />,
          },
        ].map(({ href, label, icon }) => (
          <motion.a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="transition-transform duration-300 hover:text-gray-400"
            variants={itemVariants}
          >
            {icon}
          </motion.a>
        ))}
      </motion.div>
    </nav>
  );
};

export default Navbar;
