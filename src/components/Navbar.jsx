import React, { useState } from "react";
import {
  FaLinkedin,
  FaGithub,
  FaDev,
  FaInstagram,
  FaBlog,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const navItems = [
  {
    href: "https://linkedin.com/in/sathya-narayanans",
    label: "LinkedIn",
    icon: <FaLinkedin />,
  },
  {
    href: "https://github.com/Sathyanarayanansakthi",
    label: "GitHub",
    icon: <FaGithub />,
  },
  {
    href: "https://dly.to/sBFI3z051ds",
    label: "Dev",
    icon: <FaDev />,
  },
  {
    href: "https://www.instagram.com/sathyanarayanansakthi",
    label: "Instagram",
    icon: <FaInstagram />,
  },
  {
    href: "https://snblog.vercel.app/",
    label: "SN Blog",
    icon: <FaBlog />,
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-slate-900 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-lg font-semibold tracking-wide">Sathya Narayanan</h1>

        {/* Desktop nav */}
        <ul className="hidden md:flex gap-6 items-center">
          {navItems.map(({ href, label, icon }) => (
            <li key={label}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-gray-400 transition-colors duration-200"
                title={label}
              >
                {icon}
                <span className="hidden lg:inline">{label}</span>
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile nav dropdown */}
      {isOpen && (
        <ul className="md:hidden px-6 pb-4 space-y-4">
          {navItems.map(({ href, label, icon }) => (
            <li key={label}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-lg hover:text-gray-400 transition"
                onClick={() => setIsOpen(false)}
              >
                {icon}
                {label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
