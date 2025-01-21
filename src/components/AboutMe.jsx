import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Box, Typography, Paper } from "@mui/material";

const AboutMe = () => {
  const ref = useRef(null); // Reference to track the element
  const isInView = useInView(ref, { once: true, margin: "-50px" }); // Detect when the element is in view

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #1e3a8a, #111827)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: { xs: 2, md: 5 },
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background decorations */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          zIndex: -1,
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 200,
            height: 200,
            backgroundColor: "rgba(128, 90, 213, 0.2)",
            borderRadius: "50%",
            filter: "blur(80px)",
            animation: "pulse 2s infinite alternate",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            bottom: 0,
            right: 0,
            width: 300,
            height: 300,
            backgroundColor: "rgba(37, 99, 235, 0.3)",
            borderRadius: "50%",
            filter: "blur(100px)",
            animation: "pulse 2s infinite alternate",
          }}
        />
      </Box>

      {/* About Me Heading */}
      <motion.div
        ref={ref} // Attach the reference to this element
        initial={{ opacity: 0, y: 50 }} // Initial state before scrolling
        animate={isInView ? { opacity: 1, y: 0 } : {}} // Trigger animation when in view
        transition={{
          duration: 1,
          ease: "easeInOut",
          delay: 0.3,
        }}
      >
        <Typography
          variant="h2"
          align="center"
          color="white"
          sx={{
            fontWeight: "bold",
            marginBottom: 3,
            letterSpacing: 2,
          }}
        >
          About Me
        </Typography>
      </motion.div>

      {/* About Me Content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }} // Initial state
        animate={isInView ? { opacity: 1, y: 0 } : {}} // Trigger animation when in view
        transition={{
          duration: 1.2,
          ease: "easeInOut",
          delay: 0.5,
        }}
      >
        <Paper
          elevation={3}
          sx={{
            maxWidth: "700px",
            padding: { xs: 3, md: 5 },
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            backdropFilter: "blur(10px)",
            color: "white",
            textAlign: "center",
            lineHeight: 1.8,
            borderRadius: "16px",
          }}
        >
          A highly motivated Final-Year Student specializing in Full-Stack
          Development, with a strong passion for creating innovative,
          efficient, and user-centric web applications. Proficient in a wide
          range of front-end and back-end technologies, I am committed to
          delivering solutions that drive seamless user experiences and
          operational efficiency. With a keen interest in collaboration and
          team-driven environments, I am eager to apply my technical expertise
          to contribute to impactful projects that make a difference in the
          digital landscape.
        </Paper>
      </motion.div>
    </Box>
  );
};

export default AboutMe;
