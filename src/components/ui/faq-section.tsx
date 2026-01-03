import React, { useEffect, useMemo, useRef, useState } from "react";

const faqs = [
  // 1. Process & Services
  {
    q: "What services does Virats BuildTech offer?",
    a: "Virats BuildTech offers end-to-end construction, architectural design, interior design, project management consultancy (PMC), and renovation services for residential, commercial, and industrial projects.",
  },
  {
    q: "Do you handle both design and construction?",
    a: "Yes, we provide integrated solutions covering both design and construction, ensuring seamless project execution from concept to completion.",
  },
  {
    q: "Can I hire you only for project management consultancy (PMC)?",
    a: "Absolutely. We offer PMC as a standalone service to help you manage your project efficiently, even if you have other vendors for design or construction.",
  },
  {
    q: "At what stage should I contact you for a project?",
    a: "You can contact us at any stage, but the earlier the better. Early involvement allows us to provide valuable input on design, budgeting, and planning, ensuring a smoother process.",
  },
  // 2. Cost, Timeline & Transparency
  {
    q: "How is project cost estimated?",
    a: "We provide transparent and detailed cost estimates based on your requirements, site conditions, and material choices. All costs are discussed and approved before work begins.",
  },
  {
    q: "Do you provide clear timelines and milestones?",
    a: "Yes, we share a detailed project schedule with clear milestones and regularly update you on progress.",
  },
  {
    q: "Will I receive regular updates during the project?",
    a: "Absolutely. We maintain open communication and provide regular updates, site photos, and milestone reports throughout the project.",
  },
  // 3. Trust & Quality Assurance
  {
    q: "How do you ensure quality and on-time delivery?",
    a: "We follow strict quality control processes, use premium materials, and employ experienced professionals. Our project managers closely monitor timelines to ensure on-time delivery.",
  },
  {
    q: "Do you work with trusted vendors and contractors?",
    a: "Yes, we have a network of vetted vendors and contractors who share our commitment to quality and reliability.",
  },
];

export default function FAQWithSpiral() {
  const spiralRef = useRef<HTMLDivElement | null>(null);
  const [panelOpen, setPanelOpen] = useState(false);
  const [query, setQuery] = useState("");

  // Spiral configuration
  const [cfg, setCfg] = useState({
    points: 700,
    dotRadius: 1.8,
    duration: 3.0,
    color: "#ffffff",
    gradient: "none" as
      | "none"
      | "rainbow"
      | "sunset"
      | "ocean"
      | "fire"
      | "neon"
      | "pastel"
      | "grayscale",
    pulseEffect: true,
    opacityMin: 0.25,
    opacityMax: 0.9,
    sizeMin: 0.5,
    sizeMax: 1.4,
    background: "#000000",
  });

  // Gradient presets
  const gradients: Record<string, string[]> = useMemo(
    () => ({
      none: [],
      rainbow: ["#ff0000", "#ff9900", "#ffff00", "#00ff00", "#0099ff", "#6633ff"],
      sunset: ["#ff0000", "#ff9900", "#ffcc00"],
      ocean: ["#0066ff", "#00ccff", "#00ffcc"],
      fire: ["#ff0000", "#ff6600", "#ffcc00"],
      neon: ["#ff00ff", "#00ffff", "#ffff00"],
      pastel: ["#ffcccc", "#ccffcc", "#ccccff"],
      grayscale: ["#ffffff", "#999999", "#333333"],
    }),
    []
  );

  useEffect(() => {
    if (!spiralRef.current) return;
    const SIZE = 560;
    const GOLDEN_ANGLE = Math.PI * (3 - Math.sqrt(5));
    const N = cfg.points;
    const DOT = cfg.dotRadius;
    const CENTER = SIZE / 2;
    const PADDING = 4;
    const MAX_R = CENTER - PADDING - DOT;
    const svgNS = "http://www.w3.org/2000/svg";
    const svg = document.createElementNS(svgNS, "svg");
    svg.setAttribute("width", String(SIZE));
    svg.setAttribute("height", String(SIZE));
    svg.setAttribute("viewBox", `0 0 ${SIZE} ${SIZE}`);
    if (cfg.gradient !== "none") {
      const defs = document.createElementNS(svgNS, "defs");
      const g = document.createElementNS(svgNS, "linearGradient");
      g.setAttribute("id", "spiralGradient");
      g.setAttribute("gradientUnits", "userSpaceOnUse");
      g.setAttribute("x1", "0%");
      g.setAttribute("y1", "0%");
      g.setAttribute("x2", "100%");
      g.setAttribute("y2", "100%");
      gradients[cfg.gradient].forEach((color, idx, arr) => {
        const stop = document.createElementNS(svgNS, "stop");
        stop.setAttribute("offset", `${(idx * 100) / (arr.length - 1)}%`);
        stop.setAttribute("stop-color", color);
        g.appendChild(stop);
      });
      defs.appendChild(g);
      svg.appendChild(defs);
    }
    for (let i = 0; i < N; i++) {
      const idx = i + 0.5;
      const frac = idx / N;
      const r = Math.sqrt(frac) * MAX_R;
      const theta = idx * GOLDEN_ANGLE;
      const x = CENTER + r * Math.cos(theta);
      const y = CENTER + r * Math.sin(theta);
      const c = document.createElementNS(svgNS, "circle");
      c.setAttribute("cx", x.toFixed(3));
      c.setAttribute("cy", y.toFixed(3));
      c.setAttribute("r", String(DOT));
      c.setAttribute("fill", cfg.gradient === "none" ? cfg.color : "url(#spiralGradient)");
      c.setAttribute("opacity", "0.6");
      if (cfg.pulseEffect) {
        const animR = document.createElementNS(svgNS, "animate");
        animR.setAttribute("attributeName", "r");
        animR.setAttribute("values", `${DOT * cfg.sizeMin};${DOT * cfg.sizeMax};${DOT * cfg.sizeMin}`);
        animR.setAttribute("dur", `${cfg.duration}s`);
        animR.setAttribute("begin", `${(frac * cfg.duration).toFixed(3)}s`);
        animR.setAttribute("repeatCount", "indefinite");
        animR.setAttribute("calcMode", "spline");
        animR.setAttribute("keySplines", "0.4 0 0.6 1;0.4 0 0.6 1");
        c.appendChild(animR);
        const animO = document.createElementNS(svgNS, "animate");
        animO.setAttribute("attributeName", "opacity");
        animO.setAttribute("values", `${cfg.opacityMin};${cfg.opacityMax};${cfg.opacityMin}`);
        animO.setAttribute("dur", `${cfg.duration}s`);
        animO.setAttribute("begin", `${(frac * cfg.duration).toFixed(3)}s`);
        animO.setAttribute("repeatCount", "indefinite");
        animO.setAttribute("calcMode", "spline");
        animO.setAttribute("keySplines", "0.4 0 0.6 1;0.4 0 0.6 1");
        c.appendChild(animO);
      }
      svg.appendChild(c);
    }
    spiralRef.current.innerHTML = "";
    spiralRef.current.appendChild(svg);
  }, [cfg, gradients]);

  const filtered = query
    ? faqs.filter(({ q, a }) => (q + a).toLowerCase().includes(query.toLowerCase()))
    : faqs;

  return (
    <div
      className="relative min-h-screen w-full overflow-hidden text-white"
      style={{ backgroundColor: cfg.background }}
    >
      {/* Background Spiral */}
      <div
        className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-30 [mask-image:radial-gradient(circle_at_center,rgba(255,255,255,1),rgba(255,255,255,0.1)_60%,transparent_75%)]"
        style={{ mixBlendMode: "screen" }}
      >
        <div ref={spiralRef} />
      </div>
      {/* Layout */}
      <div className="relative mx-auto max-w-5xl px-6 py-16">
        {/* Header */}
        <header className="mb-10 flex flex-col items-center border-b border-white/20 pb-6">
          <h1 className="text-4xl md:text-6xl font-black tracking-tight text-center">Virats BuildTech</h1>
          <span className="block text-2xl font-light text-gray-200 mt-4 mb-4 text-center">Your Vision, Our Expertise</span>
          <p className="mb-6 text-sm md:text-base text-white/70 text-center max-w-2xl">
            Answers to your most common questions about our process, services, and quality.
          </p>
          <div className="flex flex-col items-center w-full gap-4">
            <a
              href="#contact"
              title="Contact Virats BuildTech"
              className="inline-block px-10 py-3 text-lg font-bold rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg border-0 outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 transition-all duration-300 transform hover:scale-105 hover:bg-transparent hover:text-blue-600 hover:border-2 hover:border-blue-600 hover:shadow-2xl hover:-translate-y-1"
              style={{ border: '2px solid transparent' }}
            >
              Get Started with Us
            </a>
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search questions…"
              className="h-10 w-56 rounded-xl border border-white/20 bg-transparent px-3 text-sm outline-none transition focus:border-white/60 mt-4"
            />
          </div>
        </header>
        {/* Content */}
        <section className="relative">
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
            {filtered.map((item, i) => (
              <FAQItem key={i} q={item.q} a={item.a} index={i + 1} />
            ))}
          </div>
        </section>
        {/* Footer */}
        {/* Footer removed as requested */}
      </div>
    </div>
  );
}

function FAQItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/15 bg-black/40 p-5 transition hover:border-white/40">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between text-left"
        aria-expanded={open}
      >
        <div className="flex items-baseline gap-3">
          <span className="text-xs text-white/40">{String(index).padStart(2, "0")}</span>
          <h3 className="text-base md:text-lg font-semibold leading-tight">{q}</h3>
        </div>
        <span className="ml-4 text-white/60 transition group-hover:text-white">{open ? "–" : "+"}</span>
      </button>
      <div
        className={`grid transition-[grid-template-rows] duration-300 ease-[cubic-bezier(.4,0,.2,1)] ${open ? "mt-3 grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
      >
        <div className="min-h-0 overflow-hidden">
          <p className="text-sm text-white/70">{a}</p>
        </div>
      </div>
    </div>
  );
}
