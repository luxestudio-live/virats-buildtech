import React, { useState } from "react";
import { Linkedin, Instagram, Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";

const projectTypes = [
  "Residential Construction",
  "Commercial Construction",
  "Interior Design",
  "Renovation",
  "Project Management Consultancy",
  "Other",
];

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    message: "",
  });

  return (
    <section className="w-full bg-gradient-to-br from-[#0b0b0b] to-black py-24 px-4 flex justify-center items-center min-h-[80vh]">
      <div className="w-full max-w-6xl flex flex-col md:flex-row gap-10 md:gap-16 items-stretch">
        {/* LEFT: Conversation & Form */}
        <div className="flex-1 flex flex-col justify-center max-w-xl mx-auto md:mx-0">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Let’s Build Something Together</h2>
          <p className="text-lg text-gray-400 mb-10 max-w-md">Tell us about your project and we’ll guide you from concept to completion.</p>
          <form className="space-y-7">
            {/* Full Name */}
            <div className="relative">
              <input
                type="text"
                id="name"
                value={form.name}
                onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                className="peer w-full bg-transparent border-0 border-b border-gray-700 focus:border-cyan-400 outline-none text-white placeholder-transparent transition px-0 py-3"
                placeholder="Full Name"
                autoComplete="off"
              />
              <label htmlFor="name" className="absolute left-0 top-3 text-gray-400 text-base pointer-events-none transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-5 peer-focus:text-sm peer-focus:text-cyan-400 peer-focus:font-medium">Full Name</label>
            </div>
            {/* Email */}
            <div className="relative">
              <input
                type="email"
                id="email"
                value={form.email}
                onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                className="peer w-full bg-transparent border-0 border-b border-gray-700 focus:border-cyan-400 outline-none text-white placeholder-transparent transition px-0 py-3"
                placeholder="Email"
                autoComplete="off"
              />
              <label htmlFor="email" className="absolute left-0 top-3 text-gray-400 text-base pointer-events-none transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-5 peer-focus:text-sm peer-focus:text-cyan-400 peer-focus:font-medium">Email</label>
            </div>
            {/* Phone */}
            <div className="relative">
              <input
                type="tel"
                id="phone"
                value={form.phone}
                onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                className="peer w-full bg-transparent border-0 border-b border-gray-700 focus:border-cyan-400 outline-none text-white placeholder-transparent transition px-0 py-3"
                placeholder="Phone"
                autoComplete="off"
              />
              <label htmlFor="phone" className="absolute left-0 top-3 text-gray-400 text-base pointer-events-none transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-5 peer-focus:text-sm peer-focus:text-cyan-400 peer-focus:font-medium">Phone</label>
            </div>
            {/* Project Type */}
            <div className="relative">
              <select
                id="projectType"
                value={form.projectType}
                onChange={e => setForm(f => ({ ...f, projectType: e.target.value }))}
                className="peer w-full bg-transparent border-0 border-b border-gray-700 focus:border-cyan-400 outline-none text-white appearance-none px-0 py-3"
              >
                <option value="" disabled hidden>Select Project Type</option>
                {projectTypes.map(type => (
                  <option key={type} value={type} className="bg-black text-white">{type}</option>
                ))}
              </select>
              <label htmlFor="projectType" className="absolute left-0 top-3 text-gray-400 text-base pointer-events-none transition-all peer-focus:-top-5 peer-focus:text-sm peer-focus:text-cyan-400 peer-focus:font-medium">Project Type</label>
            </div>
            {/* Message */}
            <div className="relative">
              <textarea
                id="message"
                value={form.message}
                onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                className="peer w-full bg-transparent border-0 border-b border-gray-700 focus:border-cyan-400 outline-none text-white placeholder-transparent transition px-0 py-3 min-h-[80px] resize-none"
                placeholder="Message"
              />
              <label htmlFor="message" className="absolute left-0 top-3 text-gray-400 text-base pointer-events-none transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-5 peer-focus:text-sm peer-focus:text-cyan-400 peer-focus:font-medium">Message</label>
            </div>
            {/* CTA Button */}
            <button
              type="submit"
              className="mt-4 w-full py-3 rounded-xl bg-cyan-600 text-white font-semibold text-lg shadow-md transition hover:bg-cyan-500 focus:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 ring-offset-2 ring-offset-black"
              style={{ boxShadow: "0 0 16px 0 rgba(0,255,255,0.10)" }}
            >
              Request a Consultation
            </button>
          </form>
        </div>
        {/* RIGHT: Info Card */}
        <div className="flex-1 flex flex-col justify-center items-center md:items-end">
          <div className="w-full max-w-sm bg-black/60 backdrop-blur-md rounded-2xl shadow-xl border border-white/10 p-8 flex flex-col gap-6 relative z-10">
            {/* Office Location */}
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-cyan-400" />
              <div>
                <div className="font-semibold text-white">Virats BuildTech</div>
                <div className="text-gray-400 text-sm">Gurgaon, Haryana</div>
              </div>
            </div>
            {/* Working Hours */}
            <div className="flex items-center gap-3">
              <Clock className="w-5 h-5 text-cyan-400" />
              <div>
                <div className="font-semibold text-white">Mon – Sat: 9:00 AM – 6:00 PM</div>
                <div className="text-gray-400 text-sm">Sunday: By appointment</div>
              </div>
            </div>
            {/* Contact */}
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-cyan-400" />
              <a href="tel:+919999999999" className="font-semibold text-white hover:text-cyan-400 transition">+91 99999 99999</a>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-cyan-400" />
              <a href="mailto:hello@viratsbuildtech.com" className="font-semibold text-white hover:text-cyan-400 transition">hello@viratsbuildtech.com</a>
            </div>
            {/* Social Links */}
            <div className="flex gap-4 mt-2">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition"><Linkedin className="w-6 h-6" /></a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition"><Instagram className="w-6 h-6" /></a>
              <a href="https://wa.me/919999999999" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition"><MessageCircle className="w-6 h-6" /></a>
            </div>
            {/* Subtle Map Link */}
            <div className="mt-4 flex items-center gap-2">
              <MessageCircle className="w-5 h-5 text-cyan-400" />
              <a href="https://maps.google.com/?q=Virats+BuildTech+Gurgaon" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 underline underline-offset-2 transition">View on Map</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
