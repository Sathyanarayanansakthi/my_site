import { motion, useInView } from "framer-motion";
import { useRef } from "react";

function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); // Animation triggers only once when in view

  const containerVariants = {
    hidden: { opacity: 0, y: 50 }, // Initially hidden and shifted down
    visible: {
      opacity: 1,
      y: 0, // Fully visible and in the original position
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <motion.footer
      ref={ref}
      className="py-10 text-white bg-slate-800"
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"} // Trigger animation based on visibility
    >
      <div className="px-4 mx-auto max-w-7xl md:px-8">
        <motion.div
          className="flex flex-col justify-between md:flex-row"
          variants={containerVariants}
        >
          {/* Contact Section */}
          <motion.div
            className="mb-6 md:mb-0"
            variants={containerVariants}
            whileHover={{ scale: 1.05 }}
          >
            <h2 className="text-lg font-bold">Social Media</h2>
            <ul className="mt-2 space-y-2 text-sm">
              <li>
                <a
                  href="https://linkedin.com/in/sathya-narayanans"
                  className="transition-colors duration-300 hover:text-indigo-400"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/sathyanarayanansakthi?igsh=MWFzbTZzemNpeXppZw=="
                  className="transition-colors duration-300 hover:text-indigo-400"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Sathyanarayanansakthi"
                  className="transition-colors duration-300 hover:text-indigo-400"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://dly.to/sBFI3z051ds"
                  className="transition-colors duration-300 hover:text-indigo-400"
                >
                  Dev.to
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Contact Us Section */}
          <motion.div
            variants={containerVariants}
            whileHover={{ scale: 1.05 }}
          >
            <h2 className="text-lg font-bold">Contact Us</h2>
            <p className="mt-2 text-sm">
              Email:{" "}
              <a
                href="mailto:sathyanarayanansakthi04@gmail.com"
                className="transition-colors duration-300 hover:text-indigo-400"
              >
                sathyanarayanansakthi04@gmail.com
              </a>
            </p>
            <p className="mt-1 text-sm">
              Phone:{" "}
              <a
                href="tel:+918122103066"
                className="transition-colors duration-300 hover:text-indigo-400"
              >
                +91 8122103066
              </a>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </motion.footer>
  );
}

export default Footer;
