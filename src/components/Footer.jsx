import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FaGithub, FaInstagram, FaLinkedin, FaDev, FaHeart, FaRocket, FaEnvelope, FaPhone } from "react-icons/fa";

function Footer() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const containerVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6 },
        },
    };

    const socialLinks = [
        {
            icon: FaLinkedin,
            href: "https://linkedin.com/in/sathya-narayanans",
            label: "LinkedIn",
            color: "from-blue-600 to-blue-400",
            hoverColor: "group-hover:text-blue-400",
        },
        {
            icon: FaInstagram,
            href: "https://www.instagram.com/sathyanarayanansakthi",
            label: "Instagram",
            color: "from-pink-600 via-purple-600 to-orange-500",
            hoverColor: "group-hover:text-pink-400",
        },
        {
            icon: FaGithub,
            href: "https://github.com/Sathyanarayanansakthi",
            label: "GitHub",
            color: "from-gray-700 to-gray-900",
            hoverColor: "group-hover:text-white",
        },
        {
            icon: FaDev,
            href: "https://dly.to/sBFI3z051ds",
            label: "Dev.to",
            color: "from-teal-600 to-teal-400",
            hoverColor: "group-hover:text-teal-400",
        },
    ];

    return (
        <motion.footer
            ref={ref}
            className="relative bg-slate-950 text-gray-300 overflow-hidden"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
        >
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <motion.div
                    className="absolute w-96 h-96 bg-purple-500/10 rounded-full blur-3xl -top-48 left-1/4"
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
                <motion.div
                    className="absolute w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -bottom-48 right-1/4"
                    animate={{
                        scale: [1.2, 1, 1.2],
                        opacity: [0.4, 0.6, 0.4],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
            </div>

            {/* Grid Pattern */}
            <div
                className="absolute inset-0 opacity-10"
                style={{
                    backgroundImage: `
                        linear-gradient(rgba(99, 102, 241, 0.2) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(99, 102, 241, 0.2) 1px, transparent 1px)
                    `,
                    backgroundSize: "50px 50px",
                }}
            />

            {/* Top Gradient Border */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-50" />

            <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
                {/* Main Content Grid */}
                <div className="grid md:grid-cols-2 gap-8 mb-12">
                    {/* Social Section */}
                    <motion.div
                        variants={itemVariants}
                        className="relative group"
                    >
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-2xl opacity-0 group-hover:opacity-20 blur transition duration-500" />
                        
                        <div className="relative bg-gradient-to-br from-slate-900/90 via-slate-900/50 to-slate-900/90 backdrop-blur-xl border border-white/10 p-8 rounded-2xl">
                            {/* Icon Badge */}
                            <div className="flex items-center gap-3 mb-6">
                                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-purple-600 to-pink-600">
                                    <FaRocket className="text-white text-xl" />
                                </div>
                                <h2 className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                                    Connect with Me
                                </h2>
                            </div>

                            <p className="text-slate-400 mb-6">
                                Let's connect and create something amazing together!
                            </p>

                            {/* Social Icons Grid */}
                            <div className="grid grid-cols-4 gap-4">
                                {socialLinks.map((social) => {
                                    const Icon = social.icon;
                                    return (
                                        <motion.a
                                            key={social.label}
                                            href={social.href}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="group relative flex items-center justify-center w-full aspect-square"
                                            whileHover={{ scale: 1.1, y: -5 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            {/* Glow effect */}
                                            <div className={`absolute inset-0 bg-gradient-to-br ${social.color} rounded-xl opacity-0 group-hover:opacity-20 blur-lg transition-opacity duration-300`} />
                                            
                                            {/* Icon container */}
                                            <div className="relative flex items-center justify-center w-full h-full bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl group-hover:border-slate-600 transition-all">
                                                <Icon className={`text-2xl text-slate-400 ${social.hoverColor} transition-colors duration-300`} />
                                            </div>

                                            {/* Tooltip */}
                                            <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1 text-xs font-medium text-white bg-slate-800 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                                                {social.label}
                                            </span>
                                        </motion.a>
                                    );
                                })}
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Section */}
                    <motion.div
                        variants={itemVariants}
                        className="relative group"
                    >
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-20 blur transition duration-500" />
                        
                        <div className="relative bg-gradient-to-br from-slate-900/90 via-slate-900/50 to-slate-900/90 backdrop-blur-xl border border-white/10 p-8 rounded-2xl h-full">
                            {/* Icon Badge */}
                            <div className="flex items-center gap-3 mb-6">
                                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-600">
                                    <FaEnvelope className="text-white text-xl" />
                                </div>
                                <h2 className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                                    Get in Touch
                                </h2>
                            </div>

                            <p className="text-slate-400 mb-6">
                                Have a project in mind? Let's talk!
                            </p>

                            {/* Contact Info */}
                            <div className="space-y-4">
                                <motion.a
                                    href="mailto:sathyanarayanansakthi04@gmail.com"
                                    className="group/link flex items-start gap-4 p-4 rounded-xl bg-slate-800/30 border border-slate-700/50 hover:border-blue-500/50 hover:bg-slate-800/50 transition-all"
                                    whileHover={{ x: 5 }}
                                >
                                    <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-blue-600/20 to-cyan-600/20 group-hover/link:from-blue-600/40 group-hover/link:to-cyan-600/40 transition-all">
                                        <FaEnvelope className="text-blue-400" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <p className="text-xs text-slate-500 mb-1">Email</p>
                                        <p className="text-sm text-slate-300 group-hover/link:text-blue-400 transition-colors break-all">
                                            sathyanarayanansakthi04@gmail.com
                                        </p>
                                    </div>
                                </motion.a>

                                <motion.a
                                    href="tel:+918122103066"
                                    className="group/link flex items-start gap-4 p-4 rounded-xl bg-slate-800/30 border border-slate-700/50 hover:border-purple-500/50 hover:bg-slate-800/50 transition-all"
                                    whileHover={{ x: 5 }}
                                >
                                    <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-purple-600/20 to-pink-600/20 group-hover/link:from-purple-600/40 group-hover/link:to-pink-600/40 transition-all">
                                        <FaPhone className="text-purple-400" />
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-xs text-slate-500 mb-1">Phone</p>
                                        <p className="text-sm text-slate-300 group-hover/link:text-purple-400 transition-colors">
                                            +91 8122103066
                                        </p>
                                    </div>
                                </motion.a>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Bottom Bar */}
                    
        </motion.footer>
    );
}

export default Footer;
