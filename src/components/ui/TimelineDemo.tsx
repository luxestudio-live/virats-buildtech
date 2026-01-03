import Image from "next/image";
import React from "react";
import { Timeline } from "./timeline";
import { getImagePath } from '../../lib/image-path';

export function TimelineDemo() {
  const data = [
    {
      title: "2010",
      content: (
        <div>
          <p className="text-white text-xs md:text-sm font-normal mb-8">
            Founded Virats Buildtech with a vision to deliver excellence in construction and design.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src={getImagePath('/people1.jpg')}
              alt="Founded"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
            />
            <Image
              src={getImagePath('/people2.jpg')}
              alt="Early Team"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2015",
      content: (
        <div>
          <p className="text-white text-xs md:text-sm font-normal mb-8">
            Completed 100+ projects, earning a reputation for quality and reliability in the industry.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src={getImagePath('/people3.jpg')}
              alt="100 Projects"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
            />
            <Image
              src={getImagePath('/bh1.jpg')}
              alt="Milestone"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2020",
      content: (
        <div>
          <p className="text-white text-xs md:text-sm font-normal mb-8">
            Expanded services to include interior design and project management consultancy, growing our client base.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src={getImagePath('/id1.jpg')}
              alt="Interior Design"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
            />
            <Image
              src={getImagePath('/pmc1.jpg')}
              alt="Consultancy"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2025",
      content: (
        <div>
          <p className="text-white text-xs md:text-sm font-normal mb-8">
            Achieved 250+ successful projects, recognized as a leading name in the region for innovative and sustainable solutions.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src={getImagePath('/pmc2.jpg')}
              alt="Award"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
            />
            <Image
              src={getImagePath('/id2.jpg')}
              alt="Recognition"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
            />
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="w-full bg-black flex flex-col items-center justify-center p-0 m-0">
      <div className="w-full bg-black">
        <Timeline data={data} />
      </div>
    </div>
  );
}
