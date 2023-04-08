import React from 'react'
import HomeSlider from '../components/HomeSlider'
import ImageGallery from '../components/ImageGallery';

function Gallery() {
  return (
    <div className='cursor-pointer'>
      <div className='lg:mt-10 md:mt-8 sm:mt-5'>
        <HomeSlider />
      </div>


      <div className='lg:p-16 md:p-16 sm:p-5'>
        <ImageGallery/>
      </div>
    </div>
  );
}

export default Gallery