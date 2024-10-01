import React from 'react';
import { Swiper as MySwiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const SwiperComponent: React.FC = () => {
  return (
    <MySwiper
      pagination={{ clickable: true }}
      modules={[Pagination]}
      className="h-full w-full"
    >
      {Array.from({ length: 2 }, (_, index) => (
        <SwiperSlide key={index} className="flex justify-center items-center bg-white text-lg">
          Slide {index + 1}
        </SwiperSlide>
      ))}
    </MySwiper>
  );
};

export default SwiperComponent;
