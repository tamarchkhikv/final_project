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
        className="h-[574px] w-[534px] bg-[#F6F6F6] "
      >
        {Array.from({ length: 4 }, (_, index) => (
          <SwiperSlide key={index} className="flex ">
            <img src="/images/product-image.png" className='w-[288px] h-[404px]' />
            
          </SwiperSlide>
        ))}
      </MySwiper>
    
  );
};

export default SwiperComponent;
