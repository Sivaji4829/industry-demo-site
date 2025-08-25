import React from "react";
import { Facebook, Twitter, Linkedin, Mail } from "lucide-react";


const Footer = () => {
  return (
    <footer className="relative bg-gray-950 text-gray-300 overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover opacity-20"
        src="public/videos/footer.mp4"
        autoPlay
        loop
        muted
        playsInline
      ></video>

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/10"></div>

      {/* Top Gradient Highlight Bar */}
      <div className="relative h-1 w-full bg-gradient-to-r from-teal-500 via-blue-500 to-indigo-600"></div>

      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-3 gap-12 z-10">
        {/* Brand Section */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-teal-500 to-blue-600 grid place-items-center text-white font-extrabold text-lg shadow-md shadow-blue-500/20">
              ZS
            </div>
            <div className="leading-tight">
              <div className="font-semibold text-white text-lg">Zenith Steel</div>
              <div className="text-xs text-gray-400 -mt-0.5">
                Industrial Infrastructure
              </div>
            </div>
          </div>
          <p className="text-sm text-gray-300 leading-relaxed max-w-xs">
            Delivering excellence in Pre-Engineered Buildings, Industrial Roofing,
            and steel solutions built to last with precision, performance, and
            sustainability.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-3">
          <h3 className="text-white font-semibold text-lg mb-2">Quick Links</h3>
          <a href="#" className="text-gray-400 hover:text-white transition">
            About Us
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition">
            Our Services
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition">
            Projects
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition">
            Contact
          </a>
        </div>

        {/* Highlight Video Section */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-2">Our Work</h3>
          <div className="aspect-video rounded-lg overflow-hidden shadow-lg shadow-blue-500/20 border border-gray-800">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Zenith Steel Overview"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative border-t border-gray-800 mt-8 z-10">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Social Links */}
          <div className="flex gap-4">
            <a
              href="#"
              className="p-2 rounded-full bg-gray-800 hover:bg-gradient-to-br hover:from-teal-500 hover:to-blue-600 transition duration-300"
            >
              <Facebook size={18} className="text-gray-300 hover:text-white" />
            </a>
            <a
              href="#"
              className="p-2 rounded-full bg-gray-800 hover:bg-gradient-to-br hover:from-teal-500 hover:to-blue-600 transition duration-300"
            >
              <Twitter size={18} className="text-gray-300 hover:text-white" />
            </a>
            <a
              href="#"
              className="p-2 rounded-full bg-gray-800 hover:bg-gradient-to-br hover:from-teal-500 hover:to-blue-600 transition duration-300"
            >
              <Linkedin size={18} className="text-gray-300 hover:text-white" />
            </a>
            <a
              href="#"
              className="p-2 rounded-full bg-gray-800 hover:bg-gradient-to-br hover:from-teal-500 hover:to-blue-600 transition duration-300"
            >
              <Mail size={18} className="text-gray-300 hover:text-white" />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-xs md:text-sm text-gray-400 text-center md:text-right">
            &copy; {new Date().getFullYear()} Zenith Steel. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
