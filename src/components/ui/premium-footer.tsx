import React from "react";
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";

export function PremiumFooter() {
  return (
    <footer className="w-full bg-[#18181c] text-white pt-12 pb-0 px-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
        {/* Brand Description + Social Icons */}
        <div>
          <h2 className="text-2xl font-bold mb-3 tracking-tight">Virats Buildtech</h2>
          <p className="text-white/70 text-base leading-relaxed mb-6">
            Premium construction & interior design agency based in Bengaluru. We create inspiring spaces for homes, offices, and commercial projects with a focus on quality, transparency, and client satisfaction.
          </p>
          <div className="flex gap-4 mt-2">
            <a href="https://facebook.com/viratsbuildtech" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors"><Facebook className="w-6 h-6" /></a>
            <a href="https://instagram.com/viratsbuildtech" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400 transition-colors"><Instagram className="w-6 h-6" /></a>
            <a href="https://linkedin.com/company/viratsbuildtech" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors"><Linkedin className="w-6 h-6" /></a>
            <a href="https://twitter.com/viratsbuildtech" target="_blank" rel="noopener noreferrer" className="hover:text-sky-400 transition-colors"><Twitter className="w-6 h-6" /></a>
            <a href="https://youtube.com/@viratsbuildtech" target="_blank" rel="noopener noreferrer" className="hover:text-red-500 transition-colors"><Youtube className="w-6 h-6" /></a>
          </div>
        </div>
        {/* Quick Links - right column, left-aligned content */}
        <div className="md:col-start-2 md:col-end-3 flex flex-col items-end">
          <div className="w-full md:w-auto text-left">
            <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="hover:text-indigo-400 transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-indigo-400 transition-colors">Services</a></li>
              <li><a href="#projects" className="hover:text-indigo-400 transition-colors">Projects</a></li>
              <li><a href="#client-reviews" className="hover:text-indigo-400 transition-colors">Reviews</a></li>
              <li><a href="#faq" className="hover:text-indigo-400 transition-colors">FAQ</a></li>
              <li><a href="#contact" className="hover:text-indigo-400 transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
        {/* Contact Details - right column, left-aligned content */}
        <div className="flex flex-col items-end">
          <div className="w-full md:w-auto text-left">
            <h3 className="text-lg font-semibold mb-3">Contact</h3>
            <ul className="space-y-3 text-white/80">
              <li className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-indigo-300" />
                <a href="mailto:info@viratsbuildtech.com" className="hover:text-indigo-400 transition-colors">info@viratsbuildtech.com</a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-indigo-300" />
                <a href="tel:+919876543210" className="hover:text-indigo-400 transition-colors">+91 98765 43210</a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-indigo-300" />
                <span>Gurgaon, India</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Divider, Small Logo, and Copyright + LuxeStudio Credit */}
      <div className="max-w-7xl mx-auto mt-10 mb-0 pb-6">
        <div className="border-t border-white/10 mb-6" />
        <div className="flex flex-col items-center justify-center text-center">
          <img src="/transparent-logo.png" alt="Virats Buildtech Logo" className="w-14 h-14 mb-2" style={{objectFit: 'contain'}} />
            <img src="/transparent-logo.png" alt="Virats Buildtech Logo" className="w-40 h-20 mb-2" style={{objectFit: 'contain'}} />
          <p className="text-xs text-white/40 mb-2">© {new Date().getFullYear()} Virats Buildtech. All rights reserved.</p>
          <p className="text-sm text-white/60">
            Dreamed, designed, and brought to life by
            <a href="https://www.luxestudio.live" target="_blank" rel="noopener noreferrer" className="text-indigo-300 hover:text-indigo-400 font-medium ml-1">LuxeStudio</a>
            — where ideas find their elegance.
          </p>
        </div>
      </div>
    </footer>
  );
}
