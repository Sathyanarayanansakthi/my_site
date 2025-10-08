import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from "react";
import { FaBars, FaTimes, FaCode } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();
  
  const navOpacity = useTransform(scrollY, [0, 100], [0.8, 1]);
  const navBlur = useTransform(scrollY, [0, 100], [8, 20]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#home", color: "from-blue-400 to-cyan-400" },
    { name: "About", href: "#about", color: "from-purple-400 to-pink-400" },
    { name: "Projects", href: "#projects", color: "from-orange-400 to-red-400" },
    { name: "Skills", href: "#skills", color: "from-green-400 to-emerald-400" },
    { name: "Achievements", href: "#achievements", color: "from-yellow-400 to-amber-400" },
    { name: "Contact", href: "#contact", color: "from-indigo-400 to-purple-400" },
  ];

  return (
    <motion.nav
      style={{ opacity: navOpacity }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3" : "py-4"
      }`}
    >
      {/* Backdrop blur container */}
      <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-xl border-b border-white/10"></div>
      
      {/* Animated gradient line at bottom */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: scrolled ? 1 : 0 }}
        transition={{ duration: 0.5 }}
      />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#home"
            className="flex items-center gap-3 group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="relative">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg blur-lg opacity-50 group-hover:opacity-75 transition-opacity"
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <div className="relative bg-gradient-to-br from-blue-600 to-purple-600 p-2 rounded-lg">
                <FaCode className="text-white text-2xl" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-black bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Sathya
              </span>
              <span className="text-xs text-gray-400 font-medium">Full Stack Developer</span>
            </div>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="relative px-4 py-2 text-gray-300 font-medium text-sm group overflow-hidden rounded-lg"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Hover gradient background */}
                <span className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-lg`}></span>
                
                {/* Animated underline */}
                <span className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r ${item.color} scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full`}></span>
                
                <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                  {item.name}
                </span>
              </motion.a>
            ))}
          </div>

          {/* CTA Button - Desktop */}
          <motion.button
            className="hidden lg:flex items-center gap-2 px-6 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full overflow-hidden group relative"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
          >
            <span className="absolute inset-0 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
            <span className="relative z-10">Get in Touch</span>
            <motion.span
              className="relative z-10"
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </motion.button>

          {/* Mobile Menu Button */}
          <motion.button
            className="lg:hidden p-2 text-white bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg"
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.9 }}
          >
            {isOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={{
            height: isOpen ? "auto" : 0,
            opacity: isOpen ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
          className="lg:hidden overflow-hidden"
        >
          <div className="py-6 space-y-2">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                className={`block px-4 py-3 text-gray-300 font-medium rounded-lg bg-gradient-to-r ${item.color} bg-opacity-10 hover:bg-opacity-20 transition-all`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? 0 : -20 }}
                transition={{ delay: index * 0.05 }}
                onClick={() => setIsOpen(false)}
              >
                <span className={`bg-gradient-to-r ${item.color} bg-clip-text text-transparent font-semibold`}>
                  {item.name}
                </span>
              </motion.a>
            ))}
            <motion.button
              className="w-full mt-4 px-4 py-3 text-white font-semibold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : 20 }}
              transition={{ delay: 0.3 }}
              whileTap={{ scale: 0.95 }}
            >
              Get in Touch
            </motion.button>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
