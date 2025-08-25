import React from "react";
import { motion } from "framer-motion";
import { Wrench, Factory, Building2, Ruler, Shield, Bolt } from "lucide-react";

// Section wrapper
// Section wrapper
const Section = ({ id, className, children }) => (
  <section
  id={id}
  className={`relative w-full h-screen px-4 sm:px-6 lg:px-8 overflow-hidden ${className}`}
>

    {/* Background video */}
    <video
      className="absolute top-0 left-0 w-full h-full object-cover z-0"
      src="public/videos/services.mp4" // 🔹 place your generated video here
      autoPlay
      loop
      muted
      playsInline
    />

    {/* Dark overlay for readability */}
    <div className="absolute inset-0 bg-black/40 z-0" />

    {/* Content */}
    <div className="max-w-7xl mx-auto z-10 relative">{children}</div>
  </section>
);

const items = [
  { icon: Building2, title: "PEB Structures", desc: "Custom-engineered steel buildings for factories & warehouses." },
  { icon: Factory,   title: "Structural Steel", desc: "Design, fabrication & erection of heavy steel structures." },
  { icon: Ruler,     title: "Design & Detailing", desc: "In-house engineering using advanced BIM workflows." },
  { icon: Shield,    title: "Safety & QA/QC", desc: "Strict ISO procedures for safe, defect-free delivery." },
  { icon: Wrench,    title: "Erection & Commissioning", desc: "Expert site teams with optimized sequencing." },
  { icon: Bolt,      title: "Roofing & Cladding", desc: "High-performance sheeting, insulation & accessories." },
];

const Services = () => {
  return (
    <Section id="services">
      <div className="text-center mb-16">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-4 text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          Our Core Services
        </motion.h2>
        <motion.p
          className="text-lg text-gray-200 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          End-to-end steel solutions for modern industry, delivered with precision and a commitment to excellence.
        </motion.p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
        {items.map((s, i) => (
          <ServiceCard key={s.title} item={s} index={i} />
        ))}
      </div>
    </Section>
  );
};

const ServiceCard = ({ item, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 0.7,
        delay: index * 0.1,
        ease: [0.33, 1, 0.68, 1],
      }}
      className="flex flex-col items-center text-center"
    >
      {/* Icon */}
      <motion.div
        className="relative flex items-center justify-center w-20 h-20 bg-white/90 shadow-lg rounded-2xl mb-6"
        whileHover={{
          y: -5,
          scale: 1.05,
          boxShadow: "0px 15px 25px -10px rgba(0, 0, 0, 0.2)",
        }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <div className="absolute -top-2 -right-2 w-5 h-5 bg-blue-500 rounded-full border-2 border-white"></div>
        <item.icon className="text-blue-600" size={36} />
      </motion.div>

      {/* Content */}
      <h3 className="text-xl font-bold mb-3 text-white">{item.title}</h3>
      <p className="text-gray-200 text-sm leading-relaxed">{item.desc}</p>
    </motion.div>
  );
};

export default function App() {
  return <Services />;
}
