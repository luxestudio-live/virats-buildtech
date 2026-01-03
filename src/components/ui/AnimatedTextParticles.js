import { useState, useEffect, useCallback } from "react";
import { Typewriter } from 'react-simple-typewriter';
import { Particles } from "@tsparticles/react";
import { loadFull } from "@tsparticles/engine";

const services = [
  "Interior Designing",
  "Home Construction",
  "Project Management Consultancy"
];

export default function AnimatedTextParticles() {
  const [index, setIndex] = useState(0);
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setShow(false), 2000);
    return () => clearTimeout(timeout);
  }, [index]);

  useEffect(() => {
    if (!show) {
      const timeout = setTimeout(() => {
        setIndex((prev) => (prev + 1) % services.length);
        setShow(true);
      }, 800);
      return () => clearTimeout(timeout);
    }
  }, [show]);

  // Particle options for a subtle falling effect
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <div className="relative w-full flex flex-col items-center gap-2 py-2 overflow-x-hidden">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: false,
          background: { color: "transparent" },
          particles: {
            number: { value: 30 },
            color: { value: "#38bdf8" },
            shape: { type: "circle" },
            opacity: { value: 0.2 },
            size: { value: 3 },
            move: {
              direction: "bottom",
              enable: true,
              outModes: { default: "out" },
              speed: 1
            }
          },
          detectRetina: true
        }}
        style={{ position: "absolute", width: "100%", height: "100%", zIndex: 0 }}
      />
      <div className="relative z-10 text-center w-full flex flex-col items-center justify-center" style={{ minHeight: 110 }}>
        <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-cyan-400">We Specialize In</span>
        <span
          className="text-xl sm:text-2xl md:text-3xl font-semibold text-pink-500 block w-full"
          style={{ height: 48, display: 'flex', alignItems: 'center', justifyContent: 'center', wordBreak: 'break-word', margin: 0 }}
        >
          <Typewriter
            words={services}
            loop={0}
            cursor
            cursorStyle='|'
            typeSpeed={60}
            deleteSpeed={40}
            delaySpeed={1200}
          />
        </span>
      </div>
    </div>
  );
}
