import React from "react";
import { motion } from "framer-motion"; // Import framer-motion

const MotionText = ({ text, initialX, duration }) => {
  return (
    <motion.div
      initial={{ x: initialX, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration }}
    >
      {text}
    </motion.div>
  );
};

export default MotionText;