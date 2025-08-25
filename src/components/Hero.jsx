import { motion } from "framer-motion";
import { ShieldCheck, Award, Users } from "lucide-react";

// Background Video Component
const BackgroundVideo = () => (
  <video
    autoPlay
    loop
    muted
    playsInline
    className="absolute inset-0 w-full h-full object-cover z-0"
  >
    <source src="public/videos/hero.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
);

// Feature Card
const FeatureCard = ({ icon, title }) => (
  <motion.div
    className="flex items-center gap-3 bg-white backdrop-blur-lg border border-gray-200 shadow-md rounded-xl px-5 py-3 sm:px-6 sm:py-4 w-full sm:w-auto justify-center"
    whileHover={{
      scale: 1.05,
      y: -5,
      boxShadow:
        "0px 15px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.05)",
    }}
    transition={{ type: "spring", stiffness: 300, damping: 18 }}
  >
    {icon}
    <h3 className="font-semibold text-base sm:text-md md:text-lg text-gray-800">
      {title}
    </h3>
  </motion.div>
);

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] },
    },
  };

  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex items-center justify-center text-gray-900 font-sans overflow-hidden bg-white"
    >
      {/* Background Video */}
      <BackgroundVideo />

      {/* Overlay Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-5xl text-center mx-auto"
        >
          {/* Heading */}
          <motion.h1
            variants={itemVariants}
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6 tracking-tight text-gray-900"
          >
            Building Excellence in <br />
            <motion.span
              whileHover={{ color: "#2563eb" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-500 inline-block"
            >
              Industrial Infrastructure
            </motion.span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            whileHover={{ y: -2 }}
            transition={{ type: "tween", duration: 0.3, ease: "easeOut" }}
            className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto text-white mb-12 leading-relaxed drop-shadow-md px-2"
          >
            Premium PEB & steel solutions engineered for performance, safety,
            and sustainability. We deliver world-class structures with precision
            and speed.
          </motion.p>

          {/* Feature Cards */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-4 md:gap-6 max-w-4xl mx-auto"
          >
            <FeatureCard
              icon={<ShieldCheck className="text-green-600" size={22} />}
              title="ISO Certified"
            />
            <FeatureCard
              icon={<Award className="text-blue-600" size={22} />}
              title="20+ Years Experience"
            />
            <FeatureCard
              icon={<Users className="text-teal-600" size={22} />}
              title="500+ Projects"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

// App Entry
export default function App() {
  return (
    <div>
      <Hero />
    </div>
  );
}
