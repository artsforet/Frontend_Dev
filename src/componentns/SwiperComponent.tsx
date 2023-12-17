import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './SwiperComponent.css';

// import required modules
import { Pagination, Navigation, A11y } from 'swiper/modules';

export default function SwiperComponent() {
  const pagination = {
    clickable: true,
    renderBullet: function (index: number, className: string) {
      return '<span class="' + className + '">' + (index + 1) + '</span>';
    },
  };

  return (
    <>
      <Swiper
        pagination={pagination}
        navigation={true}
        modules={[Pagination, Navigation, A11y]} 
        className="mySwiper"
        a11y={{}}
      >
        <SwiperSlide><img src="https://www.bgmfactory.com/storage/img/banners/pc/202310a.jpg?ver=2023-12-1022:29:35" alt="이미지"/></SwiperSlide>
        <SwiperSlide><img src="https://www.bgmfactory.com/storage/img/banners/pc/202310a.jpg?ver=2023-12-1022:29:35" alt="이미지"/></SwiperSlide>
        <SwiperSlide><img src="https://www.bgmfactory.com/storage/img/banners/pc/202310a.jpg?ver=2023-12-1022:29:35" alt="이미지"/></SwiperSlide>
        <SwiperSlide><img src="https://www.bgmfactory.com/storage/img/banners/pc/202310a.jpg?ver=2023-12-1022:29:35" alt="이미지"/></SwiperSlide>
        <SwiperSlide><img src="https://www.bgmfactory.com/storage/img/banners/pc/202310a.jpg?ver=2023-12-1022:29:35" alt="이미지"/></SwiperSlide>
      </Swiper>
    </>
  );
}
