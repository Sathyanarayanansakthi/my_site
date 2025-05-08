import { useRef } from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaJs,
  FaGitAlt,
  FaGithub,
  FaDatabase,
  FaDocker,
  FaNodeJs,
  FaCube,
} from "react-icons/fa";
import {
  SiVercel,
  SiFirebase,
  SiExpress,
  SiTailwindcss,
  SiNextdotjs,
} from "react-icons/si";
import { motion, useInView } from "framer-motion";
import { Box, Typography, Grid, Card, CardContent } from "@mui/material";

const Skill = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4 },
    },
  };

  const skills = [
    { Icon: FaHtml5, color: "#E34F26", name: "HTML" },
    { Icon: FaCss3Alt, color: "#1572B6", name: "CSS" },
    { Icon: FaJs, color: "#F7DF1E", name: "JavaScript" },
    { Icon: FaReact, color: "#61DAFB", name: "React" },
    { Icon: SiNextdotjs, color: "#000000", name: "Next.js" },
    { Icon: SiTailwindcss, color: "#06B6D4", name: "Tailwind CSS" },
    { Icon: SiExpress, color: "#FFFFFF", name: "Express.js" },
    { Icon: FaNodeJs, color: "#339933", name: "Node.js" },
    { Icon: FaGitAlt, color: "#F05032", name: "Git" },
    { Icon: FaGithub, color: "#181717", name: "GitHub" },
    { Icon: FaDatabase, color: "#4CAF50", name: "MongoDB" },
    { Icon: SiFirebase, color: "#FFCA28", name: "Firebase" },
    { Icon: SiVercel, color: "#FFFFFF", name: "Vercel" },
    { Icon: FaDocker, color: "#2496ED", name: "Docker" },
    { Icon: FaCube, color: "#6366F1", name: "Shadcn UI" },
  ];

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "#0f172a",
        backgroundImage: `
          linear-gradient(to left, #0a0a0a, #d1d5db),
          linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)
        `,
        backgroundSize: "cover, 80px 80px, 80px 80px",
        backgroundBlendMode: "overlay",
        color: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        py: 5,
        px: 3,
      }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Typography
          variant="h3"
          component="h1"
          gutterBottom
          sx={{ fontWeight: "bold", marginBottom: 4 }}
        >
          My Skills
        </Typography>
      </motion.div>

      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <Grid container spacing={{ xs: 2, sm: 3, md: 4 }} justifyContent="center">
          {skills.map((skill, index) => (
            <Grid item xs={6} sm={4} md={3} key={index}>
              <motion.div variants={itemVariants}>
                <Card
                  sx={{
                    textAlign: "center",
                    backgroundColor: "rgba(255, 255, 255, 0.05)",
                    backdropFilter: "blur(12px)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    borderRadius: "16px",
                    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
                    transition: "transform 0.3s ease-in-out",
                    "&:hover": {
                      transform: "scale(1.1)",
                      boxShadow: "0 15px 40px rgba(0, 0, 0, 0.4)",
                    },
                  }}
                >
                  <CardContent>
                    <skill.Icon
                      size={50}
                      style={{ color: skill.color, marginBottom: 10 }}
                    />
                    <Typography variant="subtitle1" color="white">
                      {skill.name}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </motion.div>
    </Box>
  );
};

export default Skill;

