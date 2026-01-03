


import '../styles/globals.css';
import '../components/project-carousel.css';
import { CanvasGlowEffect } from '../components/ui/canvas';

import Head from 'next/head';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
      </Head>
      <CanvasGlowEffect />
      <Component {...pageProps} />
    </>
  );
}
