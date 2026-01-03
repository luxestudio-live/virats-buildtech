// @ts-nocheck

import { cn } from "../../lib/utils";

import { motion } from "framer-motion";
import React, { useRef, useEffect, useState } from "react";


interface ImageSource {
  src: string;
  alt: string;
}

interface ShowImageListItemProps {
  text: string;
  images: [ImageSource, ImageSource];
}

function RevealImageListItem({ text, images, delay = 0, scrollFocus = false }: Readonly<ShowImageListItemProps & { delay?: number, scrollFocus?: boolean }>) {
  const container = "absolute right-8 -top-1 z-40 h-16 w-16 md:h-24 md:w-24";
  const effect =
    "relative duration-500 delay-100 shadow-none group-hover:shadow-2xl scale-0 group-hover:scale-125 opacity-0 group-hover:opacity-100 group-hover:w-[9rem] group-hover:h-[9rem] w-12 h-12 md:w-20 md:h-20 overflow-hidden transition-all rounded-xl";
  // Add scroll focus effect with zoom
  const focusClass = scrollFocus ? "text-white opacity-100" : "text-white opacity-90 group-hover:text-blue-500 group-hover:opacity-100 z-0";
  const imgFocusClass = scrollFocus ? "scale-125 opacity-100" : "";
  const imgFocusClass2 = scrollFocus ? "scale-110 opacity-100" : "";
  return (
    <motion.div
      className={cn("group relative h-fit w-fit overflow-visible mb-2 md:mb-6 transition-all duration-500", scrollFocus ? "z-10" : "")}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0, scale: scrollFocus ? 1.12 : 1, filter: scrollFocus ? 'brightness(1.15)' : 'brightness(1)' }}
      transition={{ delay, duration: 0.7, ease: "easeOut" }}
      style={{ zIndex: scrollFocus ? 10 : 1 }}
    >
      <h1 className={cn("text-3xl md:text-7xl font-black text-foreground transition-all duration-500 group-hover:text-blue-500 group-hover:opacity-100 select-none z-0", focusClass)} style={{zIndex: 1}}>
          {text}
      </h1>
      {/* Images appear at the right corner of the text, above the text within the card */}
      <div className={container + " md:h-24 md:w-24 h-20 w-20"} style={{zIndex: 9999}}>
        <div className={effect + " group-hover:scale-125 scale-110 " + imgFocusClass}>
          <img alt={images[1].alt} src={images[1].src} className="h-full w-full object-cover" />
        </div>
      </div>
      <div
        className={cn(
          container + " md:h-24 md:w-24 h-20 w-20",
          "translate-x-0 translate-y-0 rotate-0 transition-all delay-150 duration-500 group-hover:translate-x-6 group-hover:translate-y-6 group-hover:rotate-12",
        )}
        style={{zIndex: 9999}}
      >
        <div className={cn(effect + " group-hover:scale-125 scale-110 " + imgFocusClass2, "duration-200")}> 
          <img alt={images[0].alt} src={images[0].src} className="h-full w-full object-cover" />
        </div>
      </div>
    </motion.div>
  );
}

function RevealImageList() {
  const items: ShowImageListItemProps[] = [
    {
      text: "Interior Designing",
      images: [
        { src: "/id1.jpg", alt: "Interior Designing 1" },
        { src: "/id2.jpg", alt: "Interior Designing 2" },
      ],
    },
    {
      text: "Building Home",
      images: [
        { src: "/bh1.jpg", alt: "Building Home 1" },
        { src: "/bh2.jpg", alt: "Building Home 2" },
      ],
    },
    {
      text: "Project Management Consultancy",
      images: [
        { src: "/pmc1.jpg", alt: "Project Management Consultancy 1" },
        { src: "/pmc2.jpg", alt: "Project Management Consultancy 2" },
      ],
    },
  ];
  // Scroll focus state for horizontal layout
  // No scroll effect, no highlight, no pinning

  return (
    <div className="w-full flex flex-col items-center justify-center relative bg-black py-12">
      <h3 className="w-full text-4xl font-bold text-white text-center mb-10 tracking-wide">
        Our Services
      </h3>
      <div className="flex flex-col md:flex-row md:gap-12 gap-8 max-w-6xl w-full items-stretch justify-center mx-auto">
        {items.map((item) => (
          <div
            key={item.text}
            className="w-full md:w-1/3 flex items-center justify-center"
            style={{ minHeight: '50vh', minWidth: '280px' }}
          >
            <RevealImageListItem
              text={item.text}
              images={item.images}
              delay={0}
              scrollFocus={false}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default RevealImageList;
