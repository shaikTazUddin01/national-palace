'use client'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css";
//images

// Import Swiper styles

// import required modules

import "./style/hero.css";

const HeroSection = () => {
  return (
    <div className="">
      <Swiper
        // navigation={true}
        pagination={true}
        loop={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        modules={[Navigation, Autoplay, Pagination]}
        className="mySwiper bg-secondaryColor"
      >
        <SwiperSlide>
          <div
            style={{
              backgroundImage: `url("https://res.cloudinary.com/dfm6yapyj/image/upload/v1730031138/b1-Bj0Nuwb9_z9uzqw.webp")`,
            }}
            className="bg-cover object-cover bg-center h-[350px] md:h-[400px] w-full text-center md:text-left"
          ></div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            style={{
              backgroundImage: `url("https://res.cloudinary.com/dfm6yapyj/image/upload/v1730031432/b2_a4wvzk.webp")`,
            }}
            className="bg-cover object-cover bg-center h-[350px] md:h-[400px] text-center md:text-left"
          ></div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            style={{
              backgroundImage: `url("https://res.cloudinary.com/dfm6yapyj/image/upload/v1730031331/b3_cuayfl.webp")`,
            }}
            className="bg-cover object-cover bg-center h-[350px] md:h-[400px] text-center md:text-left"
          ></div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            style={{
              backgroundImage: `url("https://res.cloudinary.com/dfm6yapyj/image/upload/v1730031416/b4_lmbdlh.webp")`,
            }}
            className="bg-cover object-cover bg-center h-[350px] md:h-[400px] text-center md:text-left"
          ></div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HeroSection;