import { useState } from "react";
import { cn } from "../../lib/utils";

const navLinks = [
  { href: "#about", label: "About Us" },
  { href: "#services", label: "Our Services" },
  { href: "#projects", label: "Projects" },
  { href: "#why-choose-us", label: "Why Choose Us" },
  { href: "#client-reviews", label: "Client Reviews" },
  { href: "#our-journey", label: "Our Journey" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [mobileMenuExpanded, setMobileMenuExpanded] = useState(false);
  return (
    <header className="py-2 bg-black sm:py-3 sticky top-0 z-50 shadow-lg border-b border-white/10 w-full">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 flex items-center justify-between">
        <div className="shrink-0 flex items-center mr-8 md:mr-16 lg:mr-20 xl:mr-24">
          <a href="#" title="Virats BuildTech" className="flex items-center pt-1 sm:pt-2">
            <span className="font-extrabold text-3xl sm:text-4xl tracking-tight text-blue-400 select-none" style={{fontFamily: 'Montserrat, Poppins, sans-serif', letterSpacing: '0.02em'}}>Virats <span className="text-white">BuildTech</span></span>
          </a>
        </div>
        <div className="flex md:hidden">
          <button
            type="button"
            className="text-white"
            onClick={() => setMobileMenuExpanded(!mobileMenuExpanded)}
          >
            {mobileMenuExpanded ? (
              <svg className="w-7 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-7 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
        <nav className="hidden md:flex md:items-center md:justify-end md:space-x-10">
          {navLinks.map(link => (
            <a key={link.href} href={link.href} className="nav-link">
              {link.label}
            </a>
          ))}
        </nav>
      </div>
      {mobileMenuExpanded && (
        <nav className="md:hidden bg-black border-t border-white/10">
          <div className="flex flex-col pt-8 pb-4 space-y-6 px-4">
            {navLinks.map(link => (
              <a key={link.href} href={link.href} className="nav-link">
                {link.label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
