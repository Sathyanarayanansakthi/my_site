import { motion } from "framer-motion";
import { title } from "framer-motion/m";

const projectsData = [

  {
    title: "Startup Portal for AYUSH",
    description: "A startup management platform for AYUSH to assist in tracking, managing, and funding initiatives across various healthcare startups.",
    techStack: "React.js, MongoDB, Node.js",

  },
  {
   title: "IR Rakes (under construction)",
   description:"",
   techStack:'React JS ,Tailwindcss,Node JS, Express JS ,Firebase ,MongoDB ',

  },
  {
    title: "Auto Assist Hub (under renovation)",
    description: "A web application platform designed to bridge the gap between vehicle owners and service providers, offering advanced tools for mechanics and shop owners to streamline operations.",
    techStack: "React, Tailwindcss, Firebase",
    link: "#",
  },
  {
    title: "Smart India Hackathon Project",
    description: "A collaborative project to solve real-world problems using innovative technical solutions, developed during the Smart India Hackathon competition.",
    techStack: "JavaScript, Python, SQL",
    link: "#",
  },
];

const projectVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, type: "spring", stiffness: 100 },
  }),
};

const Projects = () => {
  return (
    <div className="bg-slate-900 min-h-screen text-white flex flex-col items-center py-20">
      <h1 className="text-4xl font-bold mb-10">Projects</h1>
      
      {/* Projects container */}
      <div className="w-full max-w-4xl mx-auto px-4">
        {projectsData.map((project, index) => (
          <motion.div
            className="mb-10 bg-slate-800 p-6 rounded-lg shadow-lg"
            key={index}
            initial="hidden"
            animate="visible"
            custom={index}
            variants={projectVariants}
          >
            <h2 className="text-2xl font-bold">{project.title}</h2>
            <p className="mt-3 text-lg text-gray-300">{project.description}</p>
            <p className="mt-2 text-sm text-gray-400">Tech Stack: {project.techStack}</p>
            
            {/* Link (Optional) */}
            {/* <a 
              href={project.link} 
              className="inline-block mt-4 text-sm text-indigo-400 hover:text-indigo-200 transition-colors"
            >
              View Project →
            </a> */}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
