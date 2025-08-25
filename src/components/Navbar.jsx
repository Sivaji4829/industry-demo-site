import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#services", label: "Services" },
  { href: "#partners", label: "Partners" },
  { href: "#contact", label: "Contact Us" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    // Prevent scrolling when mobile menu is open
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
        window.removeEventListener("scroll", onScroll);
        document.body.style.overflow = 'auto';
    }
  }, [open]);

  const navTextColor = solid || open ? "text-slate-800" : "text-white";
  const navSubTextColor = solid || open ? "text-gray-500" : "text-gray-200";

  const mobileMenuVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const mobileLinkVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        ease: [0.33, 1, 0.68, 1],
        duration: 0.5,
      },
    },
  };

  return (
    <>
      <motion.nav
        initial={{ y: -60, opacity: 0, rotateX: -20 }}
        animate={{ y: 0, opacity: 1, rotateX: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        style={{ transformStyle: 'preserve-3d', perspective: '1000px' }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${solid ? "backdrop-blur-lg bg-white/80 shadow-sm" : "bg-black/30 backdrop-blur-md"}`}
      >
        <div className="max-w-7xl mx-auto h-20 px-6 flex items-center justify-between">
          {/* Brand */}
          <motion.a 
              href="#home" 
              className="flex items-center gap-3"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
          >
            <div className="w-11 h-11 rounded-lg bg-gradient-to-br from-teal-500 to-blue-600 grid place-items-center text-white font-extrabold text-xl shadow">
              ZS
            </div>
            <div className="leading-tight">
              <div className={`font-bold text-lg transition-colors duration-300 ${navTextColor}`}>Zenith Steel</div>
              <div className={`text-xs -mt-0.5 transition-colors duration-300 ${navSubTextColor}`}>Industrial Infrastructure</div>
            </div>
          </motion.a>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-4" onMouseLeave={() => setHoveredLink(null)}>
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={`relative px-4 py-2 text-lg font-medium transition-colors duration-300 ${solid ? 'text-gray-700' : 'text-white'}`}
                onMouseEnter={() => setHoveredLink(l.href)}
              >
                {hoveredLink === l.href && (
                  <motion.div
                    layoutId="navbar-highlight"
                    className={`absolute inset-0 rounded-md z-[-1] ${solid ? 'bg-gray-100' : 'bg-white/10'}`}
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
                <span className="relative z-10" style={{ textShadow: solid ? 'none' : '0 1px 4px rgba(0,0,0,0.3)' }}>{l.label}</span>
              </a>
            ))}
            <motion.a
              href="#contact"
              className="ml-4 inline-flex items-center rounded-lg px-6 py-3 bg-blue-600 text-white font-medium text-lg"
              whileHover={{ scale: 1.05, y: -2, boxShadow: "0px 10px 20px -5px rgba(37, 99, 235, 0.4)" }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              Get Quote
            </motion.a>
          </div>

          {/* Mobile */}
          <button className={`lg:hidden p-2 rounded-md transition-colors duration-300 z-50 ${solid ? 'hover:bg-gray-100' : 'hover:bg-white/10'}`} onClick={() => setOpen(!open)}>
            {open ? <X size={24} className="text-white" /> : <Menu size={24} className={navTextColor} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="lg:hidden fixed inset-0 z-40 backdrop-blur-xl bg-black/80 flex flex-col items-center justify-center"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={mobileMenuVariants}
          >
            <nav className="flex flex-col items-center gap-8">
              {links.map((l) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  className="text-3xl font-semibold text-white"
                  onClick={() => setOpen(false)}
                  variants={mobileLinkVariants}
                >
                  {l.label}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                className="mt-4 inline-flex items-center justify-center rounded-lg px-8 py-4 bg-blue-600 text-white font-medium text-xl"
                onClick={() => setOpen(false)}
                variants={mobileLinkVariants}
              >
                Get Quote
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default function App() {
    return <Navbar />;
}
