import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Box, Typography, Container, Paper } from "@mui/material";

const educationData = [
  {
    year: "2022 - Present",
    degree: "Bachelor of Science in Computer Science with Cognitive Systems",
    institution: "Sri Krishna Arts and Science College, Coimbatore",
  },
  {
    year: "2021 - 2022",
    degree: "Higher Secondary Education (12th)",
    institution: "Sri Gopal Naidu Hr Sec School, Coimbatore",
  },
  {
    year: "2019 - 2020",
    degree: "Secondary School Education (10th)",
    institution: "Sri Gopal Naidu Hr Sec School, Coimbatore",
  },
];

const timelineVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.3, type: "spring", stiffness: 100 },
  }),
};

const hoverEffect = {
  scale: 1.05,
  backgroundColor: "#1e293b",
  transition: { type: "spring", stiffness: 200 },
};

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <Box
      ref={ref}
      sx={{
        minHeight: "100vh",
        py: 5,
        backgroundColor: "rgb(15, 23, 42)", // Slate-950 equivalent
        color: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* Section Heading */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Typography variant="h3" sx={{ fontWeight: "bold", mb: 4 }}>
          Education
        </Typography>
      </motion.div>

      {/* Timeline Container */}
      <Container maxWidth="md">
        {educationData.map((item, index) => (
          <motion.div
            key={index}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            custom={index}
            variants={timelineVariants}
            whileHover={hoverEffect}
          >
            <Paper
              elevation={3}
              sx={{
                display: "flex",
                flexDirection: "column",
                position: "relative",
                pl: 5,
                mb: 4,
                borderLeft: "4px solid gray",
                transition: "background-color 0.3s, transform 0.3s",
                "&:hover": { backgroundColor: "rgb(30, 41, 59)" }, // Slate-800 equivalent
              }}
            >
              {/* Timeline Dot */}
              <Box
                sx={{
                  width: "12px",
                  height: "12px",
                  backgroundColor: "gray",
                  border: "2px solid #1e293b",
                  borderRadius: "50%",
                  position: "absolute",
                  left: "-10px",
                  top: "20px",
                }}
              />

              {/* Year */}
              <Typography
                variant="h6"
                sx={{ fontWeight: "bold", color: "gray", mb: 1 }}
              >
                {item.year}
              </Typography>

              {/* Degree and Institution */}
              <Box>
                <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                  {item.degree}
                </Typography>
                <Typography variant="body1" sx={{ color: "rgba(255, 255, 255, 0.8)" }}>
                  {item.institution}
                </Typography>
              </Box>
            </Paper>
          </motion.div>
        ))}
      </Container>
    </Box>
  );
};

export default Education;
