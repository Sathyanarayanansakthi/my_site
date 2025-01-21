import React, { useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Box, Typography, Card, CardContent, Container } from "@mui/material";

const projectsData = [
  {
    title: "Startup Portal for AYUSH",
    description:
      "A startup management platform for AYUSH to assist in tracking, managing, and funding initiatives across various healthcare startups.",
    techStack: "React.js, MongoDB, Express.js",
  },
  {
    title: "Auto Assist Hub",
    description:
      "A web application platform designed to bridge the gap between vehicle owners and service providers, offering advanced tools for mechanics and shop owners to streamline operations.",
    techStack: "React, Tailwindcss, Firebase",
  },
  {
    title: "Smart India Hackathon Project 2K23",
    description:
      "A collaborative project to solve real-world problems using innovative technical solutions, developed during the Smart India Hackathon competition.",
    techStack: "JavaScript, Python, SQL",
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
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <Box
      ref={ref}
      sx={{
        minHeight: "100vh",
        py: 5,
        backgroundColor: "rgb(15, 23, 42)", // Slate-900 equivalent
        color: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <AnimatePresence>
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Typography
            variant="h3"
            sx={{ fontWeight: "bold", marginBottom: 4 }}
          >
            Projects
          </Typography>
        </motion.div>

        {/* Projects Container */}
        <Container maxWidth="md">
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              exit={{ opacity: 0, y: 50 }}
              custom={index}
              variants={projectVariants}
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.3)",
              }}
            >
              <Card
                sx={{
                  backgroundColor: "rgb(30, 41, 59)", // Slate-800 equivalent
                  mb: 4,
                  transition: "background-color 0.3s",
                  "&:hover": { backgroundColor: "rgb(51, 65, 85)" }, // Slate-700 equivalent
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                }}
              >
                <CardContent>
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: "bold",
                      transition: "color 0.3s",
                      "&:hover": { color: "teal" },
                    }}
                  >
                    {project.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ marginTop: 2, color: "rgba(255, 255, 255, 0.8)" }}
                  >
                    {project.description || "Description not available."}
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{ marginTop: 1, display: "block", color: "gray" }}
                  >
                    Tech Stack: {project.techStack}
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </Container>
      </AnimatePresence>
    </Box>
  );
};

export default Projects;
