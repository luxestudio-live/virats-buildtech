import React, { useRef } from "react";

const images = [
  "/pic1.jpg",
  "/pic2.jpg",
  "/pic3.jpg",
  "/pic4.jpg",
  "/pic5.jpg",
  "/pic6.jpg",
  "/pic7.jpg",
  "/pic8.jpg",
  "/bh1.jpg",
  "/bh2.jpg",
  "/id1.jpg",
  "/id2.jpg",
  "/pmc1.jpg",
  "/pmc2.jpg",
];

export default function ProjectCarousel() {
  const carouselRef = useRef(null);
  const imageWidth = 160;
  const imageHeight = 110;
  const rotateSpeed = 35; // seconds for full rotation (slower)
  const translateZ = 420;
  const borderRadius = 12;
  const showBackface = true;

  const totalItems = images.length;
  const spreadAngle = 360 / totalItems;

  return (
    <div className="w-full flex flex-col items-center justify-center py-20 bg-black">
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center tracking-tight">Projects</h2>
      <div
        ref={carouselRef}
        className="carousel-3d mx-auto"
        style={{
          width: "100%",
          maxWidth: 1200,
          height: 340,
          position: "relative",
          perspective: 1200,
          overflow: "visible",
        }}
      >
        <style>{`
          .carousel-3d-inner {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            transform-style: preserve-3d;
            transform-origin: center center;
            animation: rotation ${rotateSpeed}s infinite linear;
            width: 100%;
            height: 100%;
          }
          .carousel-3d-inner:hover {
            animation-play-state: paused;
          }
          .carousel-3d-inner figure {
            position: absolute;
            margin: 0;
            top: 50%;
            left: 50%;
            transform-origin: center center;
            overflow: hidden;
            transition: transform 0.5s ease;
            backface-visibility: ${showBackface ? "visible" : "hidden"};
            box-shadow: 0 4px 24px 0 rgba(0,0,0,0.18);
            border-radius: ${borderRadius}px;
            background: #18181b;
            margin: 0 18px;
          }
          .carousel-3d-inner figure img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: all 0.5s cubic-bezier(.4,2,.6,1);
            cursor: pointer;
            border-radius: ${borderRadius}px;
            backface-visibility: ${showBackface ? "visible" : "hidden"};
          }
          .carousel-3d-inner figure img:hover {
            transform: scale(1.13);
            box-shadow: 0 8px 32px 0 rgba(0,0,0,0.28);
          }
          @keyframes rotation {
            from { transform: translate(-50%, -50%) rotateY(0deg); }
            to { transform: translate(-50%, -50%) rotateY(360deg); }
          }
        `}</style>
        <div className="carousel-3d-inner">
          {images.map((src, index) => {
            const angle = index * spreadAngle;
            const transform = `translate(-50%, -50%) rotateY(${angle}deg) translateZ(${translateZ}px)`;
            // Use filename as a placeholder description
            const desc = src.replace(/^\/(.+)\..+$/, "$1").replace(/[-_]/g, " ").replace(/\b\w/g, c => c.toUpperCase());
            return (
              <figure
                key={src}
                style={{
                  width: imageWidth,
                  height: imageHeight,
                  transform,
                  borderRadius,
                }}
                className="relative"
              >
                <img src={src} alt={`project-${index}`} />
                <span
                  className="absolute left-0 bottom-0 w-full px-2 py-1 text-xs md:text-sm text-white bg-black/60 rounded-b"
                  style={{
                    fontWeight: 600,
                    letterSpacing: 0.2,
                    fontSize: '0.95em',
                    borderBottomLeftRadius: borderRadius,
                    borderBottomRightRadius: borderRadius,
                    textShadow: '0 2px 8px #000',
                  }}
                >
                  {desc}
                </span>
              </figure>
            );
          })}
        </div>
      </div>
    </div>
  );
}
