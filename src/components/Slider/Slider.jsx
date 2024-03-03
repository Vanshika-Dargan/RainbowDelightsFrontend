import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';

import './Slider.css';

import sliderImg from '../../assets/cake2.png';

export default function App() {
  const slides = [
    {
      heading: "Lorem ipsum",
      subHeading1: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum itaque suscipit illum aut maxime ut!"
    },
    {
      heading: 'dolor sit.',
      subHeading1: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum itaque suscipit illum aut maxime ut!"
    },
    // Add more slide data here
  ];

  return (
    <Swiper
      navigation={true}
      modules={[Navigation]}
      className="mySwiper"
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div className="slide-background">
            <img src={sliderImg} alt={`Slide ${index + 1}`} className="slide-image" />
            <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-20"></div>
            <div className="slide-text">
              <h2 className="slide-heading text-4xl mb-5 font-extrabold">{slide.heading}</h2>
              <h3 className="slide-subheading text-3xl leading-10 font-medium">{slide.subHeading1}</h3>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
