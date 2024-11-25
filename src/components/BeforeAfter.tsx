import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
// import "swiper/swiper.min.css";

import "swiper/css/pagination";
// import "swiper/modules/pagination/pagination.min.css";

import "swiper/css/pagination";
// import "swiper/modules/pagination/pagination.min.css";

import { Pagination, Autoplay } from "swiper/modules";
import "./../assets/style/BeforeAfter.scss";

export default function BeforeAfter() {
  return (
    <>
      <div className="vertical">
        <Swiper
          direction={"vertical"}
          pagination={{
            clickable: true,
          }}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Pagination, Autoplay]}
          className="verticalswip"
        >
          <SwiperSlide className="first"></SwiperSlide>
          <SwiperSlide className="second"></SwiperSlide>
          <SwiperSlide className="third"></SwiperSlide>
          <SwiperSlide className="fourth"></SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}