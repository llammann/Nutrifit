import React from "react";
import "../../assets/style/AboutUs.scss";

import { IoIosArrowDown } from "react-icons/io";

import anim from "../../assets/images/anim.png";
import hwoman from "../../assets/images/hwoman.png";
import man from "../../assets/images/man.png";
import watch from "../../assets/images/watch.png";
export const AboutUs = () => {
  return (
    <>
      <section className="aboutNutriFit">
        <div className="container">
          <h1>About NutriFit</h1>
          <h3>
            <strong>
              <i>
                Your personalized <span>keto diet</span> and{" "}
                <span>fitness</span> companion
              </i>
            </strong>
          </h3>
          <p>
            At NutriFit, <span>our mission</span> is to empower individuals to
            lead healthier lives through tailored nutrition and fitness plans.
            Whether you’re starting your keto journey, searching for fitness
            inspiration, or simply looking for local sport salon
            recommendations, we are here to help you every step of the way.
          </p>
        </div>
      </section>

      <section className="ourStory">
        <div className="container">
          <h1>Our Story</h1>
          <p>
            NutriFit was created with a simple yet powerful vision:{" "}
            <i>
              to make{" "}
              <span>
                <strong>health</strong>
              </span>{" "}
              and{" "}
              <span>
                <strong>wellness </strong>
              </span>
              accessible to everyone.
            </i>
            <br />
            <br />
            We believe that health is a journey, not a destination, and that
            personalized solutions are the key to sustainable results. By
            combining technology, science, and empathy, we’ve crafted a tool to
            support you in achieving your health goals.
          </p>
        </div>
      </section>
      <div className="testi"></div>

      <section className="ourBeliefs">
        <div className="container">
          <h1>What We Believe In</h1>
          <ul>
            <li>
              <div className="article">
                <h3>Health is a journey, not a destination:</h3>
                <i>
                  Progress matters more than perfection. Each step, whether it's
                  a healthy meal, a workout, or a moment of mindfulness, brings
                  you closer to your goals.
                </i>
              </div>
              <div className="imgWrap">
                <img src={man} alt="" />
              </div>
            </li>

            <li>
              <div className="imgWrap">
                <img src={hwoman} alt="" />
              </div>
              <div className="article">
                <h3>Personalized solutions for unique individuals:</h3>
                <i>
                  No two journeys are alike. Your health plan should reflect
                  your lifestyle, preferences, and goals, offering a tailored
                  path to success.
                </i>
              </div>
            </li>

            <li>
              <div className="article">
                <h3>Empowerment through technology and innovation:</h3>
                <i>
                  Advanced tools like AI chatbots, fitness trackers, and
                  personalized meal planning are your companions, making it
                  easier to stay motivated and on track.
                </i>
              </div>
              <div className="imgWrap">
                <img src={watch} alt="" />
              </div>
            </li>
          </ul>
        </div>
      </section>

      <section className="team">
        <div className="container">
          <span style={{"color":"#85CB2E", "fontSize":"25px", "fontFamily":"Pencerio", "paddingBottom":"10px"}}>Our Team</span>
          <h1 style={{ fontSize: "30px", "paddingTop":"6px", "color":"#273F13" }}>Meet the NutriFit Team</h1>
          <p className="info" style={{"fontSize":"13px", "padding":"0 0 25px 0"}}>
            Our dedicated team of experts is committed to your health and
            well-being. Get to know the faces behind NutriFit!
          </p>

          <div className="team-members">
            <div className="team-member">
              <div className="team-member-image">
                <img src={anim} alt="Team Member 1" />
              </div>
              <div className="team-member-info">
                <h3>Aysu Sadikhova</h3>
                <i>Flutter & Backend Developer</i>
                <div className="accordion-header">
                  <span>About Aysu</span>
                  <IoIosArrowDown className="down" />
                </div>
                <div className="accordion">
                  <div className="accordion-item">
                    <div className="accordion-content">
                      <p>
                        <span>Aysu</span> ensures a seamless user experience and
                        builds robust backend systems like health calculators.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="team-member">
              <div className="team-member-image">
                <img src={anim} alt="Team Member 1" />
              </div>
              <div className="team-member-info">
                <h3>Kamal Abdullayev</h3>
                <i>Flutter & Backend Developer</i>
                <div className="accordion-header">
                  <span>About Kamal</span>
                  <IoIosArrowDown className="down" />
                </div>
                <div className="accordion">
                  <div className="accordion-item">
                    <div className="accordion-content">
                      <p>
                        <span>Kamal</span> focuses on optimizing app performance
                        and integrating core functionalities.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="team-member">
              <div className="team-member-image">
                <img src={anim} alt="Team Member 1" />
              </div>
              <div className="team-member-info">
                <h3>Ravan Mustafazada</h3>
                <i>AI Chatbot Developer</i>
                <div className="accordion-header">
                  <span>About Ravan</span>
                  <IoIosArrowDown className="down" />
                </div>
                <div className="accordion">
                  <div className="accordion-item">
                    <div className="accordion-content">
                      <p>
                        <span>Ravan</span> develops our intelligent chatbot, a
                        helpful companion for health and diet.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="team-member">
              <div className="team-member-image">
                <img src={anim} alt="Team Member 1" />
              </div>
              <div className="team-member-info">
                <h3>Laman Nazirli</h3>
                <i>Frontend & Backend Developer</i>
                <div className="accordion-header">
                  <span>About Laman</span>
                  <IoIosArrowDown className="down" />
                </div>
                <div className="accordion">
                  <div className="accordion-item">
                    <div className="accordion-content">
                      <p>
                        <span>Laman</span> designs visuals and handles backend
                        features like authentication and notifications.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
