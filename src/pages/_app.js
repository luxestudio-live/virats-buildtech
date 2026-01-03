


import '../styles/globals.css';
import '../components/project-carousel.css';
import { CanvasGlowEffect } from '../components/ui/canvas';
import { useEffect } from 'react';

import Head from 'next/head';

export default function App({ Component, pageProps }) {
  useEffect(() => {
    // Preload critical images
    const criticalImages = ['/transparent-logo.png', '/pic1.jpg'];
    const basePath = process.env.NEXT_PUBLIC_BASE_PATH ? '/virats-buildtech' : '';
    
    criticalImages.forEach(src => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = `${basePath}${src}`;
      document.head.appendChild(link);
    });
  }, []);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
        {/* Preconnect to improve resource loading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </Head>
      <CanvasGlowEffect />
      <Component {...pageProps} />
    </>
  );
}
