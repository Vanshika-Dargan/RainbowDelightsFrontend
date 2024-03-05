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
      heading: "Our Customers Speak Out!",
      subHeading1: '"Absolutely divine! Every bite of their pastries is like a taste of heaven. The attention to detail and freshness in their products really sets them apart. Highly recommended!"',
      name:"Emily"
    },
    {
      heading: 'Our Customers Speak Out!',
      subHeading1: '"Hands down the best bakery in town! I\'ve tried many others, but none come close to the quality and flavor they offer here."',
      name:'Mark'
    },
    {
      heading: 'Our Customers Speak Out!',
      subHeading1: '"The attention to detail in their desserts is unmatched. You can taste the passion in every bite!" ',
      name:'Michael L'
    }
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
            <h3 className='text-right'>-{slide.name}</h3>
          </div>
        </div>
      </SwiperSlide>
      ))}
    </Swiper>
  );
}
