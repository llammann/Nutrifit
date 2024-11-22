import React from "react";
import Hero from "../../components/HomeHero";

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

export const Home = () => {
  return (
    <>
      <section className="hero">
        <Hero />
      </section>
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

      



      <div className="testi"></div>

      <section className="callAction">
  <div className="container">
    <h1>
      Your Health Journey Starts with <span>NutriFit</span>
    </h1>
    <p>
      Ready to transform your lifestyle? Get personalized health tips, fitness tracking, and wellness advice at your fingertips. Take the first step today!
    </p>
    <button>
      <span>Download </span>
      <span className="red">Our App Now</span>
    </button>
  </div>
</section>

    </>
  );
};
