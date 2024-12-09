import React from 'react';
import GalleryPage from './GalleryPage';
import Open_day_1 from '../assets/Gallery/Openday/OD1.png';
import Open_day_2 from '../assets/Gallery/Openday/OD2.png';
import Open_day_3 from '../assets/Gallery/Openday/OD3.png';
import Open_day_5 from '../assets/Gallery/Openday/OD5.png';
const images = [
  Open_day_1,
  Open_day_2,
  Open_day_3,
  Open_day_5,
];

export default function OpenDay() {
  return <GalleryPage heading="Open Day" images={images} />;
}
