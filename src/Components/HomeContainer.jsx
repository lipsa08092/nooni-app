import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import Home1 from "../Assects/slide-home1.png";
import Home2 from "../Assects/slide-1-home1-2.png";
import Home3 from "../Assects/slide-3-home1-1.png";

export default function HomeContainer() {
  const slides = [
    {
      id: 1,
      subtitle: "NEW ARRIVALS",
      title: "Chairs & Seating You'll Love",
      description: "Designer chair styles for every space - Free Shipping",
      img: Home2,
    },
    {
      id: 2,
      subtitle: "SALE OFF 30%",
      title: "Lamps & Lighting Great Low Prices",
      description: "Free standard shipping with $35",
      img: Home1,
    },
    {
      id: 3,
      subtitle: "SALE OF 25%",
      title: "Discover Living Room Tables",
      description: "Free standard shipping with $45",
      img: Home3,
    },
  ];

  return (
    <div className="bg-gray-50 ">
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        loop={true}
        className="w-full h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="flex flex-col md:flex-row items-center justify-center md:justify-between min-h-screen px-6 sm:px-10 md:px-20 py-10 space-y-8 max-sm:space-y-1 md:space-y-0">
              <div className="text-center md:text-left max-w-md">
                <p className="text-red-500 font-semibold font-serif mb-4 text-sm sm:text-md">
                  {slide.subtitle}
                </p>
                <h1 className="text-6xl max-sm:text-4xl font-light mb-6 font-serif">
                  {slide.title}
                </h1>
                <p className="mb-6 text-gray-800 text-sm sm:text-md">
                  {slide.description}
                </p>
                <Link
                  to="/shop"
                  className="px-6 py-3 text-black underline outline-none text-sm sm:text-md font-semibold hover:text-blue-600 transition"
                >
                  SHOP NOW
                </Link>
              </div>
              <div className="flex justify-center">
                <img
                  src={slide.img}
                  alt={slide.title}
                  className="w-[600px] sm:w-[400px] md:w-[550px] h-[500px] sm:h-auto md:h-auto object-contain drop-shadow-xl transition-all duration-500"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
