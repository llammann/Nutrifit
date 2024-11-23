import { Swiper, SwiperSlide } from "swiper/react";
import avatar4 from "./../assets/images/avatar4.png";
import avatar1 from "./../assets/images/avatar1.png";
import avatar2 from "./../assets/images/avatar2.png";
import avatar3 from "./../assets/images/avatar3.png";
import avatar5 from "./../assets/images/avatar5.png";
import { ImQuotesLeft } from "react-icons/im";

import "../assets/style/HomeCustomers.scss";

import { Pagination } from "swiper/modules";

import { useDispatch } from "react-redux";
import { AppDispatch } from "../redux/store";
export default function Homecustomerswiper() {

  return (
    <>
      <div className="custom">
        <Swiper
          slidesPerView={2}
          spaceBetween={40}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 40,
            },
            930: {
              slidesPerView: 2
            },
          }}
          
        >
          <SwiperSlide>
            <div className="container">
              <div className="imgWrapper">
                <img src={avatar1} alt="" />
              </div>

              <div className="details">
                <p className="comment">
                  "NutriFit has completely changed my perspective on healthy
                  eating. I love that I can enjoy gourmet meals that are
                  nutritious and delivered right to my door."
                </p>
                <div className="who">
                  <div className="name">
                    <span>Emily Brown</span>
                    <p>Health Blogger</p>
                  </div>

                  <ImQuotesLeft className="quotes" />
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="container">
              <div className="imgWrapper">
                <img src={avatar2} alt="" />
              </div>

              <div className="details">
                <p className="comment">
                  "NutriFit’s service is excellent. The meals are fresh,
                  flavorful, and perfectly portioned. The reliable delivery
                  makes maintaining a healthy routine easy."
                </p>
                <div className="who">
                  <div className="name">
                    <span>Michael Johnson</span>
                    <p>Marketing Executive</p>
                  </div>

                  <ImQuotesLeft className="quotes" />
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="container">
              <div className="imgWrapper">
                <img src={avatar3} alt="" />
              </div>

              <div className="details">
                <p className="comment">
                  "NutriFit's service is top-notch. The meals are consistently
                  delicious, and the delivery is always on time. It has made
                  maintaining a healthy lifestyle so much easier!"
                </p>
                <div className="who">
                  <div className="name">
                    <span>Samantha Lee</span>
                    <p>Fitness Trainer</p>
                  </div>

                  <ImQuotesLeft className="quotes" />
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="container">
              <div className="imgWrapper">
                <img src={avatar4} alt="" />
              </div>

              <div className="details">
                <p className="comment">
                  "NutriFit's meal plans are a game-changer! They make it easy
                  to stay healthy without compromising on taste. I feel
                  energized and focused every day."
                </p>
                <div className="who">
                  <div className="name">
                    <span>James Smith</span>
                    <p>Entrepreneur</p>
                  </div>

                  <ImQuotesLeft className="quotes" />
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="container">
              <div className="imgWrapper">
                <img src={avatar5} alt="" />
              </div>

              <div className="details">
                <p className="comment">
                  "NutriFit has completely changed how I view healthy eating!
                  The meals are delicious, nutritious, and convenient. Staying
                  on track with my goals has never been this easy."
                </p>
                <div className="who">
                  <div className="name">
                    <span>Jane Maryam</span>
                    <p>Google Ceo</p>
                  </div>

                  <ImQuotesLeft className="quotes" />
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
