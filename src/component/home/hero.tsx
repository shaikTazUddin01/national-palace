"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css";
import "swiper/css/pagination";
import "./style/hero.css";

const slides = [
  "https://res.cloudinary.com/dfm6yapyj/image/upload/v1730031138/b1-Bj0Nuwb9_z9uzqw.webp",
  "https://res.cloudinary.com/dfm6yapyj/image/upload/v1730031432/b2_a4wvzk.webp",
  "https://res.cloudinary.com/dfm6yapyj/image/upload/v1730031331/b3_cuayfl.webp",
  "https://res.cloudinary.com/dfm6yapyj/image/upload/v1730031416/b4_lmbdlh.webp",
];

const HeroSection = () => {
  return (
    <Swiper
      pagination={{ clickable: true }}
      loop
      autoplay={{ delay: 3500, disableOnInteraction: false }}
      modules={[Navigation, Autoplay, Pagination]}
      className="mySwiper bg-secondaryColor"
    >
      {slides.map((image, index) => (
        <SwiperSlide key={index}>
          <div
            style={{ backgroundImage: `url(${image})` }}
            className="bg-cover bg-center h-[350px] md:h-[400px]  w-full text-center md:text-left"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HeroSection;
