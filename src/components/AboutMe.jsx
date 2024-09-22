import { motion } from "framer-motion";

const AboutMe = () => {
  return (
    <div className=" min-h-screen">
      <motion.h4
      className="text-4xl text-white font-bold flex item-center justify-center" 
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 1,
        ease: 'easeInOut',
        delay: 0.3,}}
      > About Me</motion.h4>
      <div className="text-white  justify-center flex item-center">
      A Highly motivated Final-Year Student specializing in Full-Stack Development,<br></br>
      with a strong passion for creating innovative, efficient, and user-centric web applications. 
            Proficient in a wide range of front-end and back-end technologies, I am committed to delivering solutions 
            that drive seamless user experiences and operational efficiency. 
            With a keen interest in collaboration and team-driven environments, I am eager to apply my technical 
            expertise to contribute to impactful projects that make a difference in the digital landscape.
          </div>
      </div>
  )
}

export default AboutMe