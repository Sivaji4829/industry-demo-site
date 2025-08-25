import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Square, CheckCircle } from "lucide-react";

// Placeholder for your Section component
const Section = ({ id, className, children, style }) => (
  <section id={id} className={`relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden ${className}`} style={style}>
    <div className="max-w-7xl mx-auto z-10 relative">{children}</div>
  </section>
);

const projects = [
  {
    title: "Auto Components Plant",
    img: "https://images.unsplash.com/photo-1496247749665-49cf5b1022e9?q=80&w=1600&auto=format&fit=crop",
    category: "Industrial Manufacturing",
    year: 2023,
    subtitle: "Automotive Parts Facility",
    location: "Pune, Maharashtra",
    area: "150,000 sq ft",
    description: "State-of-the-art manufacturing plant designed for high-volume production with a focus on structural integrity.",
    features: ["Heavy-Duty Structure", "Optimized Layout", "Safety Compliance"]
  },
  {
    title: "Logistics Warehouse",
    img: "https://images.unsplash.com/photo-1645736315000-6f788915923b?q=80&w=916&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Logistics & Storage",
    year: 2024,
    subtitle: "Logistics & Warehousing Center",
    location: "Bangalore, Karnataka",
    area: "92,000 sq ft",
    description: "Modern warehousing complex with optimized roofing for maximum storage efficiency and operational functionality.",
    features: ["Maximum Storage", "Optimal Lighting", "Climate Control"]
  },
  {
    title: "Food Processing Unit",
    img: "https://images.unsplash.com/photo-1703607888337-aae6d77b3d83?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Food & Beverage",
    year: 2022,
    subtitle: "Hygienic Processing Facility",
    location: "Nashik, Maharashtra",
    area: "75,000 sq ft",
    description: "A specialized facility meeting stringent hygiene standards, designed for efficient food processing and packaging.",
    features: ["Hygienic Design", "Cold Storage", "Efficient Workflow"]
  },
];

const Projects = () => {
  return (
    <Section id="projects" className="bg-slate-100" style={{ perspective: '1500px' }}>
        {/* Animated background decorative shapes */}
        <motion.div 
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-200/50 rounded-full blur-3xl z-0"
            animate={{ x: ['-50%', '-40%', '-60%', '-50%'], y: ['-50%', '-60%', '-40%', '-50%'], scale: [1, 1.1, 1.05, 1] }}
            transition={{ duration: 22, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
        />
        <motion.div 
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-200/50 rounded-full blur-3xl z-0"
            animate={{ x: ['50%', '60%', '40%', '50%'], y: ['50%', '40%', '60%', '50%'], scale: [1, 1.05, 1.1, 1] }}
            transition={{ duration: 28, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
        />

      <div className="text-center mb-16">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold mb-4 text-slate-800"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          Featured Projects
        </motion.h2>
        <motion.p 
          className="text-lg text-gray-600 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Selected highlights from our diverse and successful portfolio.
        </motion.p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((p, i) => (
          <ProjectCard key={p.title} project={p} index={i} />
        ))}
      </div>
    </Section>
  );
};

const ProjectCard = ({ project, index }) => {
    const { title, img, category, year, subtitle, location, area, description, features } = project;
    const [isHovered, setIsHovered] = useState(false);

    const detailsVariants = {
        hidden: { opacity: 0, y: 10 },
        visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.07, delayChildren: 0.1 } }
    };

    return (
        <motion.figure
            initial={{ opacity: 0, y: 50, rotateX: -10 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: index * 0.1, ease: [0.33, 1, 0.68, 1] }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            className="group relative overflow-hidden rounded-2xl shadow-xl h-96"
            style={{ transformStyle: 'preserve-3d' }}
        >
            <img 
                src={img} 
                alt={title} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
            />
            <motion.figcaption 
                className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/80 to-transparent p-6 text-white overflow-hidden [text-shadow:0_1px_4px_rgba(0,0,0,0.5)]"
                animate={{ height: isHovered ? '100%' : '25%' }}
                transition={{ type: 'spring', stiffness: 200, damping: 25 }}
            >
                <h3 className="text-2xl font-bold text-white">{title}</h3>
                <AnimatePresence>
                {isHovered && (
                    <motion.div
                        className="mt-4"
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        variants={detailsVariants}
                    >
                        <motion.div variants={detailsVariants} className="flex justify-between items-start mb-2">
                            <span className="text-sm font-semibold text-teal-300">{category}</span>
                            <span className="text-sm font-semibold text-gray-300">{year}</span>
                        </motion.div>
                        <motion.h4 variants={detailsVariants} className="text-lg font-bold mb-1 text-white">{subtitle}</motion.h4>
                        <motion.div variants={detailsVariants} className="flex items-center gap-4 text-sm text-gray-300 mb-3">
                            <span className="flex items-center gap-1"><MapPin size={14}/> {location}</span>
                            <span className="flex items-center gap-1"><Square size={14}/> {area}</span>
                        </motion.div>
                        <motion.p variants={detailsVariants} className="text-sm text-gray-200 leading-relaxed mb-4">{description}</motion.p>
                        <motion.div variants={detailsVariants} className="flex flex-wrap gap-x-4 gap-y-1">
                            {features.map(feature => (
                                <span key={feature} className="flex items-center gap-1.5 text-xs font-medium text-green-300">
                                    <CheckCircle size={12} /> {feature}
                                </span>
                            ))}
                        </motion.div>
                    </motion.div>
                )}
                </AnimatePresence>
            </motion.figcaption>
        </motion.figure>
    );
};

export default function App() {
    return <Projects />;
}
