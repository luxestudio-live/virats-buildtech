import React from 'react';
import { CircularGallery, type GalleryItem } from './circular-gallery';

// Use local images from public folder
const galleryData: GalleryItem[] = [
  {
    title: 'Modern Living Room',
    description: 'A contemporary living space with natural light.',
    photo: {
      url: '/interior1.jpg',
      text: 'Modern living room with large windows',
      pos: 'center'
    }
  },
  {
    title: 'Elegant Bedroom',
    description: 'A cozy and elegant bedroom design.',
    photo: {
      url: '/id1.jpg',
      text: 'Elegant bedroom with soft lighting',
      pos: 'center'
    }
  },
  {
    title: 'Luxury Kitchen',
    description: 'A luxury kitchen with modern appliances.',
    photo: {
      url: '/id2.jpg',
      text: 'Luxury kitchen with island',
      pos: 'center'
    }
  },
  {
    title: 'Project Exterior',
    description: 'A beautiful house exterior.',
    photo: {
      url: '/project1.jpg',
      text: 'Modern house exterior',
      pos: 'center'
    }
  },
  {
    title: 'Project Interior',
    description: 'Spacious and well-lit interior.',
    photo: {
      url: '/project2.jpg',
      text: 'Spacious interior',
      pos: 'center'
    }
  },
  {
    title: 'PMC Team',
    description: 'Our project management consultancy team.',
    photo: {
      url: '/pmc1.jpg',
      text: 'PMC team at work',
      pos: 'center'
    }
  },
  {
    title: 'PMC Meeting',
    description: 'Consultancy meeting in progress.',
    photo: {
      url: '/pmc2.jpg',
      text: 'PMC meeting',
      pos: 'center'
    }
  },
  {
    title: 'People Collaboration',
    description: 'Team collaborating on a project.',
    photo: {
      url: '/people1.jpg',
      text: 'Team collaboration',
      pos: 'center'
    }
  },
  {
    title: 'People Discussion',
    description: 'Discussion among team members.',
    photo: {
      url: '/people2.jpg',
      text: 'Team discussion',
      pos: 'center'
    }
  },
  {
    title: 'People Planning',
    description: 'Planning session for a new project.',
    photo: {
      url: '/people3.jpg',
      text: 'Planning session',
      pos: 'center'
    }
  },
];

const CircularGalleryDemo = () => {
  return (
    <div className="w-full bg-background text-foreground">
      <div className="w-full flex flex-col items-center justify-center">
        <div className="text-center w-full mb-8">
          <h1 className="text-4xl font-extrabold text-white drop-shadow-lg tracking-wide">Our Projects</h1>
          <p className="mt-2 mb-10 text-lg font-semibold text-white/90 drop-shadow">Scroll to rotate the gallery</p>
        </div>
        <div className="w-full min-h-[600px]">
          <CircularGallery items={galleryData} autoRotateSpeed={0.25} />
        </div>
      </div>
    </div>
  );
};

export default CircularGalleryDemo;
