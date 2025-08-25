import React from "react";
import { motion } from "framer-motion";

const Section = ({ id, className = "", children }) => {
  return (
    <section id={id} className={`py-20 md:py-28 ${className}`}>
      <motion.div
        className="max-w-7xl mx-auto px-6"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.div>
    </section>
  );
};

export default Section;
