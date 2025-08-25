import React from "react";
import { motion } from "framer-motion";
import Section from "./ui/Section";

const logos = [
  "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Emblem_of_Andhra_Pradesh.png/330px-Emblem_of_Andhra_Pradesh.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Tata_Steel_Logo.svg/500px-Tata_Steel_Logo.svg.png",
  "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/b/bd/Tesla_Motors.svg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/KIA_logo3.svg/500px-KIA_logo3.svg.png",
  "https://upload.wikimedia.org/wikipedia/commons/3/3e/Ford_logo_flat.svg",
];

const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.15,
    },
  },
};

const logoVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

const Partners = () => {
  return (
    <Section id="partners" className="relative py-20 overflow-hidden bg-white">
      {/* Heading */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-3">
          Our Trusted Partners
        </h2>
        <p className="text-gray-600 text-lg">
          Collaborating with global pioneers and industry leaders
        </p>
      </motion.div>

      {/* Glass marquee strip */}
      <motion.div
        className="relative"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="absolute inset-0 bg-white/60 backdrop-blur-md rounded-xl shadow-sm border border-gray-200"></div>
        <div className="relative flex overflow-hidden rounded-xl py-6">
          <motion.div
            className="flex gap-20 flex-shrink-0 items-center"
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{
              repeat: Infinity,
              duration: 55,
              ease: "linear",
            }}
          >
            {[...logos, ...logos].map((src, i) => (
              <motion.img
                key={i}
                src={src}
                alt="Partner logo"
                variants={logoVariants}
                className="h-14 w-auto object-contain grayscale hover:grayscale-0 transition duration-300"
              />
            ))}
          </motion.div>
        </div>
      </motion.div>
    </Section>
  );
};

export default Partners;
