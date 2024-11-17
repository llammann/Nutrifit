import React from "react";
import "../../assets/style/Home.scss";
import health from "../../assets/images/health-bottle-cut.jpg";
import {
  MdOutlineDone,
  MdOutlineFastfood,
  MdOutlineShowChart,
} from "react-icons/md";
import { GiFruitBowl } from "react-icons/gi";
import { FaLeaf } from "react-icons/fa";
import { BsArrowRepeat } from "react-icons/bs";
import { SlClock } from "react-icons/sl";
import { FiPhoneCall } from "react-icons/fi";
import { IconName } from "react-icons/ai";
import Feedbakcs from "../../components/HomeCustomers";
export const Home = () => {
  return (
    <>
      <section className="info">
        <div className="container">
          <div className="left">
            <h1>Stay fit and healthy</h1>
            <h1 className="with">with</h1>
            <strong>personalized plans</strong>
            <p className="text">
              NutriFit helps you take control of your fitness and nutrition with
              ease. Our app provides tailored meal plans, fitness guides, and
              real-time tracking to ensure you achieve your health goals
              effectively. Stay motivated and reach your best self!
            </p>
            <button className="learn_more">Learn More</button>
          </div>

          <div className="right">
            <div className="image">
              <img src={health} alt="healthy" />
            </div>

            <div className="options">
              <ul>
                <li>
                  <MdOutlineDone
                    className="bird"
                    style={{ color: "rgb(98,175,3)", fontSize: "35px" }}
                  />
                  Tracks nutrients{" "}
                </li>
                <li>
                  <MdOutlineDone
                    className="bird"
                    style={{ color: "rgb(98,175,3)", fontSize: "35px" }}
                  />
                  Achieves goals
                </li>
                <li>
                  <MdOutlineDone
                    className="bird"
                    style={{ color: "rgb(98,175,3)", fontSize: "35px" }}
                  />
                  Boosts health
                </li>
                <li>
                  <MdOutlineDone
                    className="bird"
                    style={{ color: "rgb(98,175,3)", fontSize: "35px" }}
                  />
                  Personalized plans
                </li>
                <li>
                  <MdOutlineDone
                    className="bird"
                    style={{ color: "rgb(98,175,3)", fontSize: "35px" }}
                  />
                  Builds energy
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="benefits">
        <div className="container">
          <span>Our benefits</span>
          <h1>Why NutriFit is your best choice</h1>
          <p className="info">
            Discover why thousands trust NutriFit to guide their health journey.
            From customized meal plans to expert nutrition guidance, we ensure
            your path to wellness is both effective and enjoyable.
          </p>

          <ul>
            <li>
              <div className="logo">
                <MdOutlineFastfood className="icon" />
              </div>
              <div className="text">
                <span>Personalized nutrition</span>
                <p>
                  Tailored plans that fit your unique goals and preferences.
                </p>
              </div>
            </li>

            <li>
              <div className="logo">
                <GiFruitBowl className="icon" />
              </div>
              <div className="text">
                <span>Diverse meal options</span>
                <p>Enjoy healthy, delicious meals to stay motivated.</p>
              </div>
            </li>

            <li>
              <div className="logo">
                <FaLeaf className="icon" />
              </div>
              <div className="text">
                <span>Convenient tracking</span>
                <p>
                  Easy-to-use tools to monitor your progress anytime, anywhere.
                </p>
              </div>
            </li>

            <li>
              <div className="logo">
                <MdOutlineShowChart className="icon" />
              </div>
              <div className="text">
                <span>Healthier lifestyle</span>
                <p>
                  No added sugar or harmful preservatives, just clean eating.
                </p>
              </div>
            </li>

            <li>
              <div className="logo">
                <BsArrowRepeat className="icon" />
              </div>
              <div className="text">
                <span>Sustainable habits</span>
                <p>
                  Build a stronger, more energetic you with lasting routines.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </section>

      <section className="delivery">
        <div className="container">
          <div className="articles">
            <h1>
              <span>Free</span> Daily Food Delivery, Tailored to Your Schedule
            </h1>
            <p>
              At NutriFit, we prioritize convenience and healthy eating. That's
              why we offer free daily food delivery, making it easier to stay on
              track with your wellness goals.
            </p>
            <p>Enjoy nutritious meals delivered hassle-free to your door.</p>
            <ul>
              <li>
                <SlClock className="ben" />
                <span>
                  Delivery Service: Available daily{" "}
                  <strong>from 8:00 AM to 12:00 PM</strong> for your
                  convenience.
                </span>
              </li>
              <li>
                <FiPhoneCall className="ben" />
                <span>
                  Contact us: <strong>+49260-5731-08</strong> for more
                  information.
                </span>
              </li>
            </ul>
            <button>Download Now</button>
          </div>
        </div>
      </section>

      <section className="feedbacks">
        <div className="container">
          <span>Testimonials</span>
          <h1>What our NutriFit users are saying</h1>
          <Feedbakcs />
        </div>
      </section>
      
      <div className="testi"></div>

      <section className="vlog">
        <div className="container">
          <h1>
            Stay Updated with <span>NutriFit</span>
          </h1>
          <p>
            Stay inspired by exploring our latest videos on health, fitness, and
            wellness. From expert tips to success stories, our vlog is designed
            to keep you motivated on your journey to a healthier lifestyle.
          </p>
          <button>
            <span>Visit </span>
            <span className="red">Our Vlog</span>
          </button>
        </div>
      </section>
    </>
  );
};
