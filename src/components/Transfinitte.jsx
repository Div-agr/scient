import React from 'react';
import GalleryPage from './GalleryPage';
// Add appropriate images for Transfinitte
import Transfinite1 from '../assets/Gallery/Transfinitte/TF1.jpg';
import Transfinite2 from '../assets/Gallery/Transfinitte/TF2.jpg';
import Transfinite3 from '../assets/Gallery/Transfinitte/TF3.jpg';
import Transfinite4 from '../assets/Gallery/Transfinitte/TF4.jpg';
import Transfinite5 from '../assets/Gallery/Transfinitte/TF5.jpg';
const images = [
  Transfinite1,
Transfinite2,
Transfinite3,
Transfinite4,
Transfinite5,
  // Add other images for Transfinitte here
];

export default function Transfinitte() {
  return <GalleryPage heading="Transfinitte" images={images} />;
}
