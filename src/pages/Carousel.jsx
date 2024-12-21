import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import carousel2 from "/assets/images/carousel2.jpg";
import carousel3 from "/assets/images/carousel3.jpg";
import carousel4 from "/assets/images/carousel4.jpg";
import carousel5 from "/assets/images/carousel5.jpg";
import carousel6 from "/assets/images/carousel6.jpg";

const Carousel = () => {
  return (
    <section className="section kf-grid-carousel flex items-center w-full md:h-screen py-12 px-5 bg-black/90">
      <div className="container mx-auto    ">
        <Swiper
          spaceBetween={30}
          loop={true}
          autoplay={{ delay: 1000 }}
          breakpoints={{
            // when window width is >= 0px
            // 0: {
            //   slidesPerView: 1,
            // },
            300: {
              slidesPerView: 1,
            },
            500: {
              slidesPerView: 2,
            },

            // when window width is >= 768px (md)
            1000: {
              slidesPerView: 3,
            },
            1300: {
              slidesPerView: 4,
            },
          }}
          className="flex items-center h-fit "
        >
          {[
            carousel2,
            carousel4,
            carousel3,
            carousel5,
            carousel6,
            carousel2,
            carousel4,
            carousel3,
            carousel5,
            carousel6,
          ].map((image, index) => (
            <SwiperSlide className="swiper-slide " key={index}>
              <div className={` ${index === 1 || index === 3 || index === 5 || index === 7 || index === 9? 'md:mt-7' :'md:mt-0'}  relative slide-item  shadow-lg overflow-hidden`}>
                <div
                  className={`image kf-image-hover overflow-hidden  group cursor-pointer`}
                >
                  <img
                    src={image}
                    alt={`Slide ${index + 1}`}
                    className={` size-full object-cover group-hover:scale-105 duration-700`}
                  />

                  {/* Text Overlay */}
                  <div className="absolute p-7 inset-0  bg-black bg-opacity-0 group-hover:bg-opacity-40   opacity-100 transition-opacity duration-500">
                    <div className="border duration-1000 ease-out border-orange-100 border-opacity-0 group-hover:border-opacity-100  group-hover:border-orange-200 w-full h-full flex flex-col justify-center items-center rounded ">
                    
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Carousel;
