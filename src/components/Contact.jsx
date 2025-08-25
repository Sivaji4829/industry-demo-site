import React from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Send } from "lucide-react";

// Placeholder for your Section and Button components
const Section = ({ id, className, children, style }) => (
  <section id={id} className={`relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden ${className}`} style={style}>
    <div className="max-w-7xl mx-auto z-10 relative">{children}</div>
  </section>
);

const Button = ({ children, className }) => (
    <button className={`w-full inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3.5 bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${className}`}>
        {children}
    </button>
);

// Animated SVG Background Pattern Component
const GridPattern = () => (
    <div className="absolute inset-0 z-0 opacity-50">
        <motion.svg 
            width="100%" 
            height="100%" 
            xmlns="http://www.w3.org/2000/svg"
            animate={{ '--pattern-x': '40px', '--pattern-y': '40px' }}
            transition={{ duration: 5, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' }}
            style={{'--pattern-x': '0px', '--pattern-y': '0px'}}
        >
            <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse" x="var(--pattern-x)" y="var(--pattern-y)">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#d1d5db" strokeWidth="0.5"/>
                </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
        </motion.svg>
    </div>
);


const Contact = () => {
  return (
    <Section id="contact" className="bg-slate-50">
        <GridPattern />
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-800 leading-tight">Let's Build Together</h2>
          <p className="text-lg text-gray-600 mb-10">
            Have a project in mind? Tell us about your requirements, and our engineering team will get back to you within 24 hours.
          </p>

          <div className="space-y-6">
            <ContactInfo icon={MapPin} text="Pune, Maharashtra, IN" />
            <ContactInfo icon={Phone} text="+91 98765 43210" />
            <ContactInfo icon={Mail} text="sales@zenithsteel.com" />
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          whileHover={{ y: -5, boxShadow: "0px 30px 40px -15px rgba(0, 0, 0, 0.08)" }}
          onSubmit={(e) => e.preventDefault()}
          className="bg-white rounded-2xl p-8 shadow-2xl border border-gray-100"
        >
          <div className="grid sm:grid-cols-2 gap-6">
            <InputField placeholder="First Name" />
            <InputField placeholder="Last Name" />
            <InputField placeholder="Email" type="email" className="sm:col-span-2" />
            <InputField placeholder="Company" className="sm:col-span-2" />
            <textarea 
                className="px-4 py-3 rounded-lg bg-slate-50 border border-gray-200 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:col-span-2 transition-all duration-300 placeholder-gray-500" 
                placeholder="Project Details" 
                rows="5" 
            />
          </div>
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="mt-6"
          >
            <Button>
                Send Inquiry <Send size={18} />
            </Button>
          </motion.div>
        </motion.form>
      </div>
    </Section>
  );
};

const ContactInfo = ({ icon: Icon, text }) => (
    <motion.div 
        className="flex items-center gap-4 text-gray-700 cursor-pointer"
        whileHover={{ x: 5, scale: 1.02 }}
        transition={{ type: 'spring', stiffness: 300 }}
    >
        <motion.div 
            className="w-14 h-14 bg-white rounded-xl flex items-center justify-center shadow-lg border border-gray-100"
            whileHover={{ rotate: -5, scale: 1.1 }}
        >
            <Icon className="text-blue-600" size={24} />
        </motion.div>
        <span className="font-semibold text-lg">{text}</span>
    </motion.div>
);

const InputField = ({ placeholder, type = 'text', className }) => (
    <motion.div className={`relative ${className}`}>
        <input 
            className={`w-full px-4 py-3 rounded-lg bg-slate-50 border border-gray-200 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 placeholder-gray-500`} 
            placeholder={placeholder} 
            type={type} 
        />
    </motion.div>
);

export default function App() {
    return <Contact />;
}
