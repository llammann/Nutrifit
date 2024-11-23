import React from "react";
import Feedbakcs from "../../components/HomeCustomers";
import "../../assets/style/Testimonials.scss";
import { MdOutlineDone } from "react-icons/md";
import health from "../../assets/images/health-bottle-cut.jpg";
import BeforeAfter from "../../components/BeforeAfter";
import Auto from "../../components/Auto";
import { Link } from "react-router-dom";
export const Testimonials = () => {
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
            <Link to="https://play.google.com/store/apps/details?id=io.harbiz.nutrifit"><button className="learn_more">Learn More</button></Link>
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
              <Link to="https://play.google.com/store/apps/details?id=io.harbiz.nutrifit"><button className="learn_more2">Learn More</button></Link>
            </div>
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
      <div className="testio"></div>

      <section className="transformation">
        <div className="container">
          <div className="left">
            <span className="head">Success Stories</span>
            <h1>
              Real <span>Transformations</span> with NutriFit
            </h1>
            <p>
              Discover how NutriFit has empowered individuals to lead healthier
              and happier lives. From personalized meal plans to tailored
              fitness routines, see the real results from our dedicated users.
            </p>
            <div className="first">
              <MdOutlineDone className="mark" />
              <span>Personalized meal and fitness plans</span>
            </div>
            <div className="second">
              <MdOutlineDone className="mark" />
              <span>Supportive community and expert guidance</span>
            </div>
          </div>

          <div className="right">
            <BeforeAfter />
          </div>
        </div>
      </section>

      <section className="metrics">
        <div className="container">
          <span>Our Impact</span>
          <h1>See the Results NutriFit Users Have Achieved</h1>
          <Auto />
        </div>
      </section>
    </>
  );
};
