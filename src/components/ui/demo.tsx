import InfiniteGallery from "./3d-gallery-photography";
import { getImagePath } from '../../lib/image-path';

export default function DemoOne() {
  const sampleImages = [
    { src: getImagePath('/bh1.jpg'), alt: 'Building Home 1' },
    { src: getImagePath('/bh2.jpg'), alt: 'Building Home 2' },
    { src: getImagePath('/id1.jpg'), alt: 'Interior Designing 1' },
    { src: getImagePath('/id2.jpg'), alt: 'Interior Designing 2' },
    { src: getImagePath('/pic1.jpg'), alt: 'Project Pic 1' },
    { src: getImagePath('/pic2.jpg'), alt: 'Project Pic 2' },
    { src: getImagePath('/pic3.jpg'), alt: 'Project Pic 3' },
    { src: getImagePath('/pic4.jpg'), alt: 'Project Pic 4' },
    { src: getImagePath('/pic5.jpg'), alt: 'Project Pic 5' },
    { src: getImagePath('/pic6.jpg'), alt: 'Project Pic 6' },
    { src: getImagePath('/pic7.jpg'), alt: 'Project Pic 7' },
    { src: getImagePath('/pic8.jpg'), alt: 'Project Pic 8' },
    { src: getImagePath('/pmc1.jpg'), alt: 'Project Management Consultancy 1' },
    { src: getImagePath('/pmc2.jpg'), alt: 'Project Management Consultancy 2' },
  ];

  return (
    <div className="relative flex items-center justify-center w-full h-full min-h-screen">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
        <h1 className="font-serif text-5xl md:text-7xl font-bold text-white drop-shadow-lg text-center select-none">Projects</h1>
      </div>
      <div className="w-full max-w-5xl mx-auto flex items-center justify-center z-10">
        <InfiniteGallery
          images={sampleImages}
          speed={1.2}
          zSpacing={3}
          visibleCount={12}
          falloff={{ near: 0.8, far: 14 }}
          className="w-full rounded-lg overflow-hidden"
        />
      </div>
    </div>
  );
}
