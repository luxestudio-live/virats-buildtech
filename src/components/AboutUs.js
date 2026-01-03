

import React, { useRef, useEffect, useState } from "react";
import { getImagePath } from '../lib/image-path';

const aboutText = `At Virats BuildTech, we turn your dreams into reality with innovative design, expert construction, and a commitment to excellence. With over a decade of experience, our team delivers tailored solutions for families and businesses, ensuring every project is completed with integrity, quality, and a personal touch.`;


function AboutUs() {
  const paraRef = useRef(null);
  const underlineRef = useRef(null);
  const sectionRef = useRef(null);
  const [inFocus, setInFocus] = useState(false);
  const [paraRevealed, setParaRevealed] = useState(false);

  useEffect(() => {
    // IntersectionObserver to detect focus
    const section = sectionRef.current;
    if (!section) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInFocus(true);
      },
      { threshold: 0.4 }
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!inFocus) return;
    // Animate underline
    if (underlineRef.current) {
      underlineRef.current.style.transition = 'transform 0.8s cubic-bezier(0.23, 1, 0.32, 1)';
      underlineRef.current.style.transform = 'scaleX(1)';
    }
    // Animate paragraph word-by-word reveal
    const el = paraRef.current;
    if (!el) return;
    const words = aboutText.split(" ");
    el.innerHTML = words.map(word => `<span style='opacity:0; display:inline-block; margin-right:0.25em; transition:opacity 0.2s, transform 0.2s;'>${word}</span>`).join(" ");
    const spans = el.querySelectorAll("span");
    const totalDuration = 2.2;
    const wordDuration = Math.max(0.03, totalDuration / words.length);
    spans.forEach((span, i) => {
      setTimeout(() => {
        span.style.opacity = 1;
        span.style.transform = 'translateY(0)';
        if (i === words.length - 1) {
          el.innerHTML = aboutText;
          setParaRevealed(true);
        }
      }, i * wordDuration * 1000);
    });
  }, [inFocus]);

  return (
    <section ref={sectionRef} className="w-full min-h-screen flex items-center justify-center px-4 transition-all duration-700 bg-black" style={{height: '100vh', paddingTop: '120px'}}>
      <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-5xl gap-12 md:gap-20 p-0">
        {/* Image side */}
        <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
          <img src={getImagePath('/pic1.jpg')} alt="About Virats BuildTech" className="rounded-xl shadow-lg object-cover w-full max-w-xs md:max-w-sm h-64 md:h-80" loading="lazy" decoding="async" />
        </div>
        {/* Text side */}
        <div className={paraRevealed ? "transition-all duration-700 mb-8 w-full md:w-1/2" : "transition-all duration-700 mb-32 w-full md:w-1/2"}>
          <h2 className="text-4xl font-bold text-blue-500 mb-2 text-center md:text-left">About Us</h2>
          <div ref={underlineRef} className="h-0.5 w-24 md:mx-0 mx-auto bg-blue-500 rounded transition-transform" style={{ transform: "scaleX(0)" }} />
          <p ref={paraRef} className="text-lg text-white max-w-2xl text-center md:text-left mt-6 leading-relaxed">
            {aboutText}
          </p>
          {/* Stats Section */}
          <div className={`grid grid-cols-2 md:grid-cols-4 gap-6 mt-10 text-center transition-opacity duration-700 ${paraRevealed ? 'opacity-100' : 'opacity-0'}`}>
            <div>
              <div className="text-3xl md:text-4xl font-extrabold text-blue-500">10<span className="text-blue-300">+</span></div>
              <div className="text-base text-blue-100 mt-1">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-extrabold text-blue-500">120<span className="text-blue-300">+</span></div>
              <div className="text-base text-blue-100 mt-1">Projects Delivered</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-extrabold text-blue-500">15<span className="text-blue-300">+</span></div>
              <div className="text-base text-blue-100 mt-1">Design Awards</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-extrabold text-blue-500">8<span className="text-blue-300">+</span></div>
              <div className="text-base text-blue-100 mt-1">Cities Served</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
