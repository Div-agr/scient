import React from 'react';
import GalleryPage from './GalleryPage';
import ESummit1 from '../assets/Gallery/ESummit/ES1.jpg';
import ESummit2 from '../assets/Gallery/ESummit/ES2.jpg';
import ESummit4 from '../assets/Gallery/ESummit/ES4.jpg';
import ESummit5 from '../assets/Gallery/ESummit/ES5.jpg';
// Add other images

const images = [
  ESummit1,
ESummit2,
ESummit4,
ESummit5,
];

export default function ESummit() {
  return <GalleryPage heading="E-Summit" images={images} />;
}
