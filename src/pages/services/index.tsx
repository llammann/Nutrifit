import { Link } from "react-router-dom";
import { SlClock } from "react-icons/sl";
import { FiPhoneCall } from "react-icons/fi";

import "../../assets/style/Service.scss";
export const Services = () => {
  return (
    <>
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
            <Link to="https://play.google.com/store/apps/details?id=io.harbiz.nutrifit"><button>Download Now</button></Link>
          </div>
        </div>
      </section>

      <section className="premium-services">
        <div className="container">
          <span className="section-title">Premium Services</span>
          <h1 className="premium-tagline">
            NutriFit Premium: Smarter Tools, Better Results
          </h1>
          <p className="section-description">
            Gain access to exclusive features, personalized plans, and expert
            guidance designed to transform your fitness routine. NutriFit
            Premium empowers you to achieve your health goals with ease,
            offering advanced tools and insights tailored just for you.
          </p>

          <div className="services">
            <div className="service-card card1">
              <h3>Subscription Plans</h3>

              <div className="imgwrap">
                <img
                  src="https://static.vecteezy.com/system/resources/previews/046/013/484/non_2x/illustration-man-working-on-laptop-free-png.png"
                  alt="Subscription Plans Icon"
                  className="service-icon"
                />
              </div>
              <p>
                Flexible plans tailored to meet your needs, ensuring access to
                all premium features.
              </p>
              <p className="price shiny-text">$9.99/month</p>
            </div>
            <div className="service-card card2">
              <h3>Expert Advice</h3>
              <div className="imgwrap">
                <img
                  src="https://cdni.iconscout.com/illustration/premium/thumb/gym-instructor-providing-guidance-via-video-call-3032711-2543575.png"
                  alt="Expert Advice Icon"
                  className="service-icon"
                />
              </div>
              <p>
                Get personalized guidance from health and fitness professionals
                for optimal results.
              </p>
              <p className="price shiny-text">Starting at $19.99/session</p>
            </div>
            <div className="service-card card3">
              <h3>Fitness Guides</h3>
              <div className="imgwrap">
                <img
                  src="https://i.pinimg.com/originals/1c/0c/63/1c0c63e2a2e44d0928b3cce4ca176570.png"
                  alt="Fitness Guides Icon"
                  className="service-icon"
                />
              </div>
              <p>
                Exclusive access to advanced fitness guides designed for all
                levels.
              </p>
              <p className="price shiny-text">Included in Premium</p>
            </div>
          </div>
        </div>
      </section>

      <section className="callAction">
        <div className="container">
          <h1>
            Your Health Journey Starts with <span>NutriFit</span>
          </h1>
          <p>
            Ready to transform your lifestyle? Get personalized health tips,
            fitness tracking, and wellness advice at your fingertips. Take the
            first step today!
          </p>
          <Link to="https://play.google.com/store/apps/details?id=io.harbiz.nutrifit">
            {" "}
            <button>
              <span>Download </span>
              <span className="red">Our App Now</span>
            </button>
          </Link>
        </div>
      </section>
    </>
  );
};
