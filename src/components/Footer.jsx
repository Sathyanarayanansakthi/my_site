import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FaGithub, FaInstagram, FaLinkedin, FaDev } from "react-icons/fa";

function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <motion.footer
      ref={ref}
      className="bg-gradient-to-br from-gray-900 to-gray-800 text-gray-300 border-t border-indigo-500/30"
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <div className="max-w-7xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-10">
        {/* Social Section */}
        <motion.div
          variants={containerVariants}
          whileHover={{ scale: 1.02 }}
          className="bg-gray-900 p-6 rounded-2xl shadow-lg"
        >
          <h2 className="text-xl font-bold text-white mb-4">Connect with Me</h2>
          <div className="flex space-x-4 text-2xl">
            <a
              href="https://linkedin.com/in/sathya-narayanans"
              className="hover:text-indigo-400 transition"
              target="_blank" rel="noreferrer"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.instagram.com/sathyanarayanansakthi"
              className="hover:text-pink-400 transition"
              target="_blank" rel="noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              href="https://github.com/Sathyanarayanansakthi"
              className="hover:text-white transition"
              target="_blank" rel="noreferrer"
            >
              <FaGithub />
            </a>
            <a
              href="https://dly.to/sBFI3z051ds"
              className="hover:text-teal-400 transition"
              target="_blank" rel="noreferrer"
            >
              <FaDev />
            </a>
          </div>
        </motion.div>

        {/* Contact Section */}
        <motion.div
          variants={containerVariants}
          whileHover={{ scale: 1.02 }}
          className="bg-gray-900 p-6 rounded-2xl shadow-lg"
        >
          <h2 className="text-xl font-bold text-white mb-4">Get in Touch</h2>
          <p className="text-sm mb-2">
            Email:{" "}
            <a
              href="mailto:sathyanarayanansakthi04@gmail.com"
              className="hover:text-indigo-400 transition"
            >
              sathyanarayanansakthi04@gmail.com
            </a>
          </p>
          <p className="text-sm">
            Phone:{" "}
            <a
              href="tel:+918122103066"
              className="hover:text-indigo-400 transition"
            >
              +91 8122103066
            </a>
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
}

export default Footer;
