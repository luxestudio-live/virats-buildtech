// File intentionally removed to prevent import conflicts. Use hero-2.tsx only.
import { cn } from "../../lib/utils";
import { useState } from "react";
import AnimatedTextParticles from "./AnimatedTextParticles";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
const CanvasGlowEffect = dynamic(() => import("./canvas").then(mod => mod.CanvasGlowEffect), { ssr: false });
const HouseModel = dynamic(() => import("../HouseModel"), { ssr: false });


function Hero2() {
  const [mobileMenuExpanded, setMobileMenuExpanded] = useState(false);

  const navItems = [
    { href: "#about", label: "About Us" },
    { href: "#services", label: "Services" },
    { href: "#projects", label: "Projects" },
    { href: "#why-choose-us", label: "Why Choose Us" },
    { href: "#client-reviews", label: "Client Reviews" },
    { href: "#our-journey", label: "Our Journey" },
    { href: "#faq", label: "FAQ" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <div className={cn("relative w-full min-h-screen flex flex-col bg-black overflow-hidden")}> 
      <CanvasGlowEffect />
      {/* Header/Navbar */}
      <header className="fixed top-0 left-0 w-full z-50 py-4 bg-black/90 sm:py-6 shadow-lg transition-all duration-500 backdrop-blur-md">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="shrink-0">
              <a href="#" title="" className="flex font-bold text-3xl">
                Virats BuildTech
              </a>
            </div>
            <div className="flex md:hidden">
              <button 
                type="button" 
                className="text-white"
                onClick={() => setMobileMenuExpanded(!mobileMenuExpanded)}
              >
                {!mobileMenuExpanded ? (
                  <svg className="w-7 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                ) : (
                  <svg className="w-7 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                )}
              </button>
            </div>
            <nav className="hidden md:flex md:items-center md:justify-end md:space-x-4">
              {navItems.map((item, i) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white relative"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * i, duration: 0.4, type: "spring" }}
                  whileHover={{ scale: 1.08, color: "#38bdf8" }}
                >
                  {item.label}
                  <motion.span
                    className="absolute left-0 -bottom-1 w-full h-0.5 bg-cyan-400 rounded"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.2 }}
                    style={{ originX: 0 }}
                  />
                </motion.a>
              ))}
            </nav>
          </div>
          {mobileMenuExpanded && (
            <nav className="md:hidden">
              <div className="flex flex-col pt-8 pb-4 space-y-6">
                <a href="#about" className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white">About Us</a>
                <a href="#services" className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white">Services</a>
                <a href="#portfolio" className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white">Projects</a>
                <a href="#whychoose" className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white">Why Choose Us</a>
                <a href="#testimonials" className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white">Client Reviews</a>
                <a href="#milestones" className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white">Milestones</a>
                <a href="#faqs" className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white">FAQs</a>
                <a href="#contact" className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white">Contact Us</a>
              </div>
            </nav>
          )}
        </div>
      </header>
      {/* Main Hero Content */}
      <main className="flex flex-col-reverse lg:flex-row items-center justify-center w-full max-w-7xl mx-auto px-4 pt-32 pb-12 gap-10 relative z-10">
        {/* Left: Text Content */}
        <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left gap-4">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
            Virats BuildTech
          </h1>
          <span className="block text-2xl font-light text-gray-200 mb-2">Your Vision, Our Expertise</span>
          <AnimatedTextParticles />
          <a
            href="#contact"
            title="Contact Virats BuildTech"
            className="mt-2 inline-block px-10 py-3 text-lg font-bold rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg border-0 outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 transition-all duration-300 transform hover:scale-105 hover:bg-transparent hover:text-blue-600 hover:border-2 hover:border-blue-600 hover:shadow-2xl hover:-translate-y-1"
            style={{ border: '2px solid transparent' }}
          >
            Get Started with Us
          </a>
          <div className="inline-flex items-center pt-4 mt-4 border-t border-gray-800 sm:pt-6 sm:mt-8">
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" strokeWidth="1.5" xmlns="http://www.w3.org/2000/svg">
              <path d="M13 7.00003H21M21 7.00003V15M21 7.00003L13 15L9 11L3 17" stroke="url(#a)" strokeLinecap="round" strokeLinejoin="round" />
              <defs>
                <linearGradient id="a" x1="3" y1="7.00003" x2="22.2956" y2="12.0274" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#06b6d4" />
                  <stop offset="100%" stopColor="#2563eb" />
                </linearGradient>
              </defs>
            </svg>
            <span className="ml-2 text-base font-normal text-white">Trusted by families & businesses for 10+ years</span>
          </div>
        </div>
        {/* Right: 3D House Model */}
        <div className="flex-1 flex items-center justify-center w-full h-[350px] lg:h-[500px]">
          <div className="relative w-full h-full lg:rounded-lg overflow-hidden flex items-center justify-center">
            <HouseModel />
          </div>
        </div>
      </main>
    </div>
  );
}

// (deleted)
