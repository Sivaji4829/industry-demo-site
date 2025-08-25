import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ShieldCheck, Award, Users } from 'lucide-react';

/**
 * A custom hook for creating a mouse-following parallax effect.
 * @param {number} stiffness - The factor by which to divide the mouse movement. Lower is stronger.
 * @returns {{x: number, y: number}} - Motion values for x and y coordinates.
 */
const useMouseParallax = (stiffness = 60) => {
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });

  React.useEffect(() => {
    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;
      const x = (clientX - window.innerWidth / 2) / stiffness;
      const y = (clientY - window.innerHeight / 2) / stiffness;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [stiffness]);

  return mousePosition;
};

// Background video component with parallax and scroll effects
const BackgroundVideo = () => {
  const { scrollY } = useScroll();
  const scale = useTransform(scrollY, [0, 600], [1, 1.15]);
  const opacity = useTransform(scrollY, [0, 600], [1, 0.75]);
  const mouse = useMouseParallax(60);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      {/* Video */}
      <motion.div style={{ scale, opacity }} className="absolute inset-0">
        <video
          className="w-full h-full object-cover"
          src="https://cdn.pixabay.com/video/2022/09/20/131124-754714151_large.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
        {/* Dark gradient overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0b1220]/80 via-[#0b1220]/60 to-transparent" />
      </motion.div>

      {/* Parallax floating shapes */}
      <motion.div
        className="absolute -top-12 -left-12 w-64 h-64 rounded-3xl bg-teal-400/10 blur-3xl"
        style={{ x: mouse.x, y: mouse.y }}
        transition={{ type: 'spring', stiffness: 100, damping: 20 }}
      />
      <motion.div
        className="absolute top-32 -right-16 w-72 h-72 rounded-full bg-blue-500/10 blur-3xl"
        style={{ x: mouse.x * -1, y: mouse.y * 0.6 }}
        transition={{ type: 'spring', stiffness: 100, damping: 20 }}
      />
      <div className="absolute inset-0 bg-grain opacity-5" />
    </div>
  );
};

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.43, 0.13, 0.23, 0.96],
      },
    },
  };

  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex items-center justify-center text-white font-sans overflow-hidden"
    >
      <BackgroundVideo />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl text-center mx-auto"
        >
          {/* Tagline */}
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.05, y: -2 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="inline-flex items-center gap-2 bg-black/20 backdrop-blur-sm border border-white/20 shadow-md px-4 py-2 rounded-full mb-6 cursor-pointer"
          >
            <span className="text-sm font-semibold tracking-wide text-blue-300">
              ✨ Leading Industrial Roofing Solutions
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-7xl font-extrabold leading-tight mb-6 tracking-tighter text-slate-100"
          >
            Building Excellence in <br />
            <motion.span
              whileHover={{ letterSpacing: "0.02em" }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-300 inline-block"
            >
              Industrial Infrastructure
            </motion.span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            whileHover={{ y: -2 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="text-lg md:text-xl max-w-3xl mx-auto text-slate-300 mb-16"
          >
            Premium PEB & steel solutions engineered for performance, safety,
            and sustainability. We deliver world-class structures with precision
            and speed.
          </motion.p>

          {/* Features */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center items-center gap-4 max-w-4xl mx-auto"
          >
            <FeatureCard
              icon={<ShieldCheck className="text-green-400" size={22} />}
              title="ISO Certified"
            />
            <FeatureCard
              icon={<Award className="text-blue-400" size={22} />}
              title="20+ Years Experience"
            />
            <FeatureCard
              icon={<Users className="text-green-400" size={22} />}
              title="500+ Projects"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

// Feature card
const FeatureCard = ({ icon, title }) => (
  <motion.div
    className="flex items-center gap-3 bg-black/20 backdrop-blur-lg border border-white/20 shadow-md rounded-lg p-4 cursor-pointer"
    whileHover={{
      scale: 1.05,
      y: -5,
      boxShadow:
        "0px 15px 25px -5px rgba(0, 0, 0, 0.2), 0px 10px 10px -5px rgba(0, 0, 0, 0.1)",
    }}
    transition={{ type: "spring", stiffness: 300, damping: 10 }}
  >
    {icon}
    <h3 className="font-semibold text-md text-slate-200">{title}</h3>
  </motion.div>
);

// Main App
export default function App() {
  return (
    <div className="relative min-h-screen">
      <Hero />
    </div>
  );
}
