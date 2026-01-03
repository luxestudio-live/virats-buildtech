
// ...existing code...
import { cn } from "../../lib/utils";
import { useState, useEffect } from "react";
import { Building2, Users } from "lucide-react";
import RotatingEarth from "./wireframe-dotted-globe";

const specialties = [
  "Interior Designing",
  "Building Homes",
  "Project Management Consultancy"
];

function DynamicSpecialtyText() {
  const [index, setIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const currentSpecialty = specialties[index] ?? "";
    if (typing) {
      if (displayed.length < currentSpecialty.length) {
        timeout = setTimeout(() => {
          setDisplayed(currentSpecialty.slice(0, displayed.length + 1));
        }, 40);
      } else {
        timeout = setTimeout(() => setTyping(false), 1000);
      }
    } else {
      timeout = setTimeout(() => {
        setTyping(true);
        setDisplayed("");
        setIndex((prev) => (prev + 1) % specialties.length);
      }, 800);
    }
    return () => clearTimeout(timeout);
  }, [displayed, typing, index]);

  return (
    <div className="max-w-xl text-2xl font-bold text-cyan-300 min-h-[2.5rem] transition-all duration-500">
      {displayed}
      <span className="animate-pulse">|</span>
    </div>
  );
}

const HeroSection = () => {
  const [mobileMenuExpanded, setMobileMenuExpanded] = useState(false);

  return (
    <div className={cn("flex flex-col items-center gap-4 w-full rounded-lg scroll-smooth overflow-x-hidden")}> 
      <div className="w-full">
        <section className="pt-20 pb-4 bg-black">
          <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 lg:gap-0">
              <div className="w-full max-w-2xl pl-0 pr-0 lg:pl-0 lg:pr-24 flex flex-col items-start justify-center text-left space-y-4 lg:space-y-6 xl:space-y-8">
                <h2 className="text-base sm:text-lg font-semibold tracking-widest text-cyan-400 uppercase mb-2 lg:mb-4">
                  Elevating Spaces, Inspiring Futures
                </h2>
                <h1 className="text-2xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white leading-tight mb-2">
                  <span className="block whitespace-nowrap text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-purple-500">Crafting Landmarks,</span>
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-400 to-fuchsia-500">Shaping Tomorrow.</span>
                </h1>
                <p className="max-w-xl mt-4 text-lg font-medium text-gray-300">
                  We specialize in
                </p>
                <DynamicSpecialtyText />
                <div className="relative inline-flex items-center justify-center mt-8 group">
                  <div className="absolute transition-all duration-200 rounded-full -inset-px bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-purple-500 group-hover:shadow-lg group-hover:shadow-cyan-400/50"></div>
                  <button type="button" className="relative inline-flex items-center justify-center px-8 py-3 text-base font-semibold text-white bg-black border border-transparent rounded-full">
                    Get in Touch
                  </button>
                </div>
                <div>
                  <div className="inline-flex items-center pt-6 mt-8 border-t border-gray-800">
                    <Users className="w-6 h-6 text-cyan-400" />
                    <span className="ml-2 text-base font-medium text-white">Trusted by clients & partners across India</span>
                  </div>
                </div>
              </div>
              <div className="w-full flex items-center justify-center mb-8 lg:mb-0 lg:ml-56 lg:-mt-8">
                <div className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl rounded-2xl shadow-2xl bg-black">
                  <RotatingEarth width={520} height={520} />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};



export default HeroSection;
