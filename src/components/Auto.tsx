import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { FaStar } from "react-icons/fa6";
import { IoPeopleCircleOutline } from "react-icons/io5";
import { FaBullseye } from "react-icons/fa";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./../assets/style/Auto.scss";

// Import required modules
import { Pagination, Navigation, Autoplay } from "swiper/modules";

export default function Auto() {
  return (
    <div className="auto">
      <Swiper
        spaceBetween={40}
        centeredSlides={false}
        slidesPerView={2} // Show part of the next slide
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        navigation={false}
        modules={[Autoplay, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="slide-content">
            <FaStar className="icon" />
            <h3 className="shiny-text">Rated 4.8/5</h3>
            <p>
              Our users love us! With thousands of reviews, NutriFit proudly
              holds an excellent 4.8/5 rating.
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="slide-content">
            <IoPeopleCircleOutline className="icon" />
            <h3 className="shiny-text">10,000+ Satisfied Users</h3>
            <p>
              Join a growing community of 10,000+ users who have transformed
              their health with NutriFit.
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="slide-content">
            <FaBullseye className="icon" />
            <h3 className="shiny-text">70% Health Goals Achieved</h3>
            <p>
              70% of our users achieve their personalized health goals in just
              three months!
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
