import React, { useRef } from "react";
import { getImagePath } from '../../lib/image-path';

const images = [
  { src: getImagePath("/pic1.jpg"), desc: "Project 1" },
  { src: getImagePath("/pic2.jpg"), desc: "Project 2" },
  { src: getImagePath("/pic3.jpg"), desc: "Project 3" },
  { src: getImagePath("/pic4.jpg"), desc: "Project 4" },
  { src: getImagePath("/pic5.jpg"), desc: "Project 5" },
  { src: getImagePath("/pic6.jpg"), desc: "Project 6" },
  { src: getImagePath("/pic7.jpg"), desc: "Project 7" },
  { src: getImagePath("/pic8.jpg"), desc: "Project 8" },
];

export default function ProjectImageCarousel() {
      const [currentIndex, setCurrentIndex] = React.useState(0);
      const imageCount = images.length;

  // Scroll to a specific image index (manual navigation only)
  const scrollToIndex = (idx: number) => {
    if (carouselRef.current) {
      const child = carouselRef.current.children[idx];
      if (child) {
        (child as HTMLElement).scrollIntoView({ behavior: "smooth", inline: "center" });
      }
    }
  };

  // Auto-rotate carousel every 4s (horizontal scroll only)
  React.useEffect(() => {
    const interval = setInterval(() => {
      if (carouselRef.current) {
        const scrollWidth = carouselRef.current.scrollWidth;
        const clientWidth = carouselRef.current.offsetWidth;
        const maxScrollLeft = scrollWidth - clientWidth;
        if (carouselRef.current.scrollLeft + clientWidth >= maxScrollLeft - 10) {
          // Reset to start
          carouselRef.current.scrollTo({ left: 0, behavior: "smooth" });
          setCurrentIndex(0);
        } else {
          carouselRef.current.scrollBy({ left: clientWidth, behavior: "smooth" });
          setCurrentIndex((prev) => (prev + 1) % imageCount);
        }
      }
    }, 4000);
    return () => clearInterval(interval);
  }, [imageCount]);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Simple scroll left/right handler
  const scroll = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const scrollAmount = 320;
      carouselRef.current.scrollBy({ left: direction === "left" ? -scrollAmount : scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="w-full flex flex-col items-center justify-center" style={{ minHeight: '70vh' }}>
      <div className="flex items-center w-full max-w-7xl mx-auto">
        <button
          className="p-2 rounded-full bg-gradient-to-bl from-[#a78bfa] via-[#3b82f6] to-[#6ee7b7] hover:from-[#7c3aed] hover:to-[#22d3ee] text-white shadow-2xl mr-2 border-0"
          onClick={() => {
            const next = (currentIndex - 1 + imageCount) % imageCount;
            setCurrentIndex(next);
            scrollToIndex(next);
          }}
          aria-label="Scroll Left"
        >
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="18" cy="18" r="17" fill="url(#leftGrad)" stroke="#fff" strokeWidth="2" />
            <defs>
              <radialGradient id="leftGrad" cx="18" cy="18" r="18" gradientUnits="userSpaceOnUse">
                <stop stopColor="#a78bfa" />
                <stop offset="0.7" stopColor="#3b82f6" />
                <stop offset="1" stopColor="#6ee7b7" />
              </radialGradient>
            </defs>
            <path d="M22 12L14 18L22 24" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M16 18H28" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </button>
        <div
          ref={carouselRef}
          className="flex gap-8 overflow-x-auto no-scrollbar py-8 px-2 w-full"
          style={{ scrollSnapType: "x mandatory", scrollbarWidth: "none" }}
        >
          {images.map((img, idx) => (
            <div
              key={img.src}
              className="flex-shrink-0 rounded-2xl overflow-hidden shadow-2xl bg-black scroll-snap-align-start relative"
              style={{
                width: 'calc(100vw / 3 - 2rem)',
                height: 'calc(65vh)',
                minWidth: '300px',
                minHeight: '250px',
                maxHeight: '600px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                scrollSnapAlign: 'start',
              }}
            >
              <img
                src={img.src}
                alt={img.desc}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                loading="lazy"
              />
              <div
                className="absolute bottom-6 left-1/2 transform -translate-x-1/2 px-6 py-3 rounded-xl"
                style={{
                  background: 'rgba(30, 41, 59, 0.7)',
                  color: '#fff',
                  fontWeight: 600,
                  fontSize: '1.2rem',
                  boxShadow: '0 2px 16px rgba(0,0,0,0.2)',
                  backdropFilter: 'blur(4px)',
                  letterSpacing: '0.02em',
                  textAlign: 'center',
                  maxWidth: '90%',
                }}
              >
                {img.desc}
              </div>
            </div>
          ))}
        </div>
        <button
          className="p-2 rounded-full bg-gradient-to-br from-[#8f5fe8] via-[#3b82f6] to-[#6ee7b7] hover:from-[#7c3aed] hover:to-[#22d3ee] text-white shadow-2xl ml-2 border-0"
          onClick={() => {
            const next = (currentIndex + 1) % imageCount;
            setCurrentIndex(next);
            scrollToIndex(next);
          }}
          aria-label="Scroll Right"
        >
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="18" cy="18" r="17" fill="url(#rightGrad)" stroke="#fff" strokeWidth="2" />
            <defs>
              <radialGradient id="rightGrad" cx="18" cy="18" r="18" gradientUnits="userSpaceOnUse">
                <stop stopColor="#6ee7b7" />
                <stop offset="0.7" stopColor="#3b82f6" />
                <stop offset="1" stopColor="#a78bfa" />
              </radialGradient>
            </defs>
            <path d="M14 12L22 18L14 24" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M20 18H8" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </button>
      </div>
      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        @media (max-width: 900px) {
          .scroll-snap-align-start {
            width: 100vw !important;
            height: 60vh !important;
            min-width: 200px !important;
            min-height: 200px !important;
            max-height: 500px !important;
            scroll-snap-align: center !important;
          }
          .scroll-snap-align-start .absolute {
            font-size: 1rem !important;
            padding: 0.5rem 1rem !important;
            max-width: 95vw !important;
          }
        }
      `}</style>
    </div>
  );
}
