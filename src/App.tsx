import React, { useEffect } from 'react';
import '@mantine/core/styles.css';
import './CSS/Style.css'
import HomePage from './Components/HomePage';
import { MantineProvider } from '@mantine/core';

import { pdfjs } from 'react-pdf';

import AOS from 'aos';
import 'aos/dist/aos.css';

// pdfjs.GlobalWorkerOptions.workerSrc = new URL(
//   'pdfjs-dist/build/pdf.worker.min.mjs',
//   import.meta.url,
// ).toString();
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdn.jsdelivr.net/npm/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;


function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
    <MantineProvider>
      <HomePage/>
    </MantineProvider>
    </>
  );
}

export default App;