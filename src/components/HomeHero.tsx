import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";

import "../assets/style/HomeHero.scss";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function App() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        // pagination={{
        //   clickable: false,
        // }}
        // navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiperHome"
      >
        <SwiperSlide>
          <div className="imgwrap1 her">
            <div className="overlay"></div>
            <div className="container">
              <div className="text her">
                <h1>
                  Take Control of Your <span>Health</span> and{" "}
                  <span>Fitness</span> Journey
                </h1>
                <p>
                  Whether you're just starting or looking to optimize your
                  routine, NutriFit offers personalized meal plans, fitness
                  tracking, and expert support to ensure you live a healthier,
                  more balanced life.
                </p>

                <Link to="https://play.google.com/store/apps/details?id=io.harbiz.nutrifit"><button>Start Your Journey Now</button></Link>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="imgwrap2 her">
            <div className="overlay"></div>
            <div className="container">
            <div className="text her">
                <h1>
                  Track Your Progress in Real Time
                  <span>Fitness</span> Journey
                </h1>
                <p>
                  Stay motivated with NutriFit's comprehensive fitness tracking
                  system. Monitor your workouts, track your calorie intake, and
                  stay on top of your fitness journey. NutriFit offers
                  easy-to-use tools to keep you on track, no matter where you
                  are.
                </p>

                <Link to="https://play.google.com/store/apps/details?id=io.harbiz.nutrifit"><button>Track Your Progress Today</button></Link>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="imgwrap3 her">
            <div className="overlay"></div>
            <div className="container">
            <div className="text her">
                <h1>Custom Meal Plans for Every Goal</h1>
                <p>
                  NutriFit offers tailored meal plans that fit your unique
                  needs. No matter your goal—weight loss, muscle gain, or
                  improved health—NutriFit creates customized nutrition plans
                  that help you eat smarter, not harder
                </p>

                <Link to="https://play.google.com/store/apps/details?id=io.harbiz.nutrifit"><button>Track Your Progress Today</button></Link>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="imgwrap4 her">
            <div className="overlay"></div>
            <div className="container">
            <div className="text her">
                <h1>Be Part of a Healthier Community</h1>
                <p>
                  Join thousands of users who are transforming their health with
                  NutriFit. With NutriFit, you’ll have access to expert advice,
                  real user success stories, and a supportive community that
                  keeps you motivated every step of the way.
                </p>

               <Link to="https://play.google.com/store/apps/details?id=io.harbiz.nutrifit"> <button>Download Now and Join Us</button></Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
