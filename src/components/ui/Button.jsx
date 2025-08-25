import React from "react";
import { motion } from "framer-motion";

const Button = ({ children, variant = "primary", className = "", ...props }) => {
  const base =
    "inline-flex items-center gap-2 rounded-lg px-5 py-3 font-medium hover-lift focus:outline-none";
  const styles = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    outline: "border border-blue-600 text-blue-600 hover:bg-blue-50",
    ghost: "text-blue-700 hover:bg-blue-50",
  };

  return (
    <motion.button
      whileTap={{ scale: 0.98 }}
      className={`${base} ${styles[variant]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button;
