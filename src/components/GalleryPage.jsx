import React, { useState, useEffect } from 'react';
import "./GalleryPage.css";
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';

export default function GalleryPage({ heading, images }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoSlide, setAutoSlide] = useState(true);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  useEffect(() => {
    if (autoSlide) {
      const interval = setInterval(nextSlide, 2000); // Change image every 3 seconds
      return () => clearInterval(interval); // Clear interval on unmount
    }
  }, [currentIndex, autoSlide]);

  return (
    <>
      <div className="text-white headgallery">{heading}</div>
      <div 
        className='max-w-[1000px] h-[550px] w-full m-auto py-4 px-4 relative group'
        onMouseEnter={() => setAutoSlide(false)}  // Stop sliding on hover
        onMouseLeave={() => setAutoSlide(true)}   // Resume sliding on mouse leave
      >
        <div
          style={{ backgroundImage: `url(${images[currentIndex]})` }}
          className='w-full h-full duration-500 bg-center bg-cover rounded-2xl'
        ></div>
        {/* Left Arrow */}
        <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
          <BsChevronCompactLeft onClick={prevSlide} size={30} />
        </div>
        {/* Right Arrow */}
        <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
          <BsChevronCompactRight onClick={nextSlide} size={30} />
        </div>
        <div className='flex justify-center py-2 top-4 galleryImage'>
          {images.map((_, slideIndex) => (
            <div
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className='text-2xl cursor-pointer abc'
            >
              <RxDotFilled />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
