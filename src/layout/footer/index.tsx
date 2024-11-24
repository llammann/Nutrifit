import logo_img from "../../assets/images/logo.png";
import logo_text from "../../assets/images/yazi.png";
import foody from "../../assets/images/foody.png";
import insta from "../../assets/images/insta.png";

import { MdPlace } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";
import { SiMinutemailer } from "react-icons/si";
import { RiStarSFill } from "react-icons/ri";

import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";

import { Link } from "react-router-dom";

import "../../assets/style/Footer.scss";
export const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="left">
            <div className="nutrifit">
              <div className="logos">
                <img src={logo_img} alt="" className="logo_img" />
                <img src={logo_text} alt="" className="logo_text" />
              </div>

              <p className="aboutNut">
                NutriFit is a health platform that helps users track nutrition,
                fitness, and well-being with personalized plans.
              </p>

              <ul className="info">
                <li>
                  <MdPlace className="ico" />
                  <span>
                    102 A.M Sharifzadeh, Yasamal, Baku, <br />
                    Azerbaijan
                  </span>
                </li>

                <li>
                  <FiPhoneCall className="ico" />
                  <span>+994-55-9956118</span>
                </li>

                <li>
                  <SiMinutemailer className="ico" />
                  <span>nutrifit@stayhealthy.com</span>
                </li>
              </ul>
            </div>

            <div className="links">
              <h3>Links</h3>
              <ul className="pages">
                <li>Home</li>
                <li>About Us</li>
                <li>Services</li>
                <li>Testimonials</li>
              </ul>

              <div className="follow">
                <h5>Follow us!</h5>
                <div className="icons">
                  <Link to="https://x.com/">
                    <FaTwitter className="fol" />
                  </Link>
                  <Link to="https://www.instagram.com/">
                    <FaInstagram className="fol" />
                  </Link>
                  <Link to="https://www.linkedin.com/">
                    <FaLinkedinIn className="fol" />
                  </Link>
                  <Link to="https://www.facebook.com/">
                    <FaFacebookF className="fol" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="right">
            <div className="best">
              <h3>Best Sellers</h3>
              <div className="imgWrap">
                <img
                  src="https://images.pexels.com/photos/769289/pexels-photo-769289.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt=""
                />
              </div>

              <p>Grilled Beef with potatoes</p>
              <div className="stars">
                <RiStarSFill className="star" />
                <RiStarSFill className="star" />
                <RiStarSFill className="star" />
                <RiStarSFill className="star" />
                <RiStarSFill className="star" />
              </div>
            </div>

            <div className="insta">
              <h3>Instagram</h3>
              <div className="image-grid">
                <div className="line">
                  <div className="square">
                    <Link to="https://www.instagram.com/">
                      {" "}
                      <img
                        src="https://th.bing.com/th/id/OIP.Bemp7c2hiZ8MlUIxyXQAeAAAAA?pid=ImgDet&w=193&h=144&c=7"
                        alt="Part 5"
                      />
                    </Link>
                  </div>
                  <div className="square">
                    <Link to="https://www.instagram.com/">
                      <img
                        src="https://th.bing.com/th/id/R.954c8d51070fa90d7b01f087d2a144d2?rik=pz2Qrsvt%2bVuwiQ&pid=ImgRaw&r=0"
                        alt="Part 4"
                      />
                    </Link>
                  </div>
                  <div className="square">
                    <Link to="https://www.instagram.com/">
                      {" "}
                      <img
                        src="https://th.bing.com/th/id/OIP._X2KP-IwfaW4Shr0F-4B4gHaFj?pid=ImgDet&w=193&h=144&c=7"
                        alt="Part 6"
                      />
                    </Link>
                  </div>
                </div>

               <div className="line">
               <div className="square">
                  <img src={insta} alt="Part 1" />
                </div>
                <div className="square">
                  <Link to="https://www.instagram.com/">
                    {" "}
                    <img
                      src="https://media.istockphoto.com/id/1410779810/photo/food-products-recommended-for-pregnancy-healthy-diet.jpg?s=612x612&w=0&k=20&c=DGtvzdBBOAfbsKl2pWDzsicXuMTOUkX-v-aAM1UYN1k="
                      alt="Part 2"
                    />
                  </Link>
                </div>
                <div className="square">
                  <Link to="https://www.instagram.com/">
                    <img
                      src="https://th.bing.com/th/id/R.6c721f0830969ff6f1b416b0452e280e?rik=Kdg5UeT80nsMqg&riu=http%3a%2f%2fwww.healthyfoodhouse.com%2fwp-content%2fuploads%2f2012%2f09%2ffacts-about-healthy-food1.jpg&ehk=0h84%2fojHHY8PxxRTJCHxF8FXJd3CMzNGSGJ6LKxQL4g%3d&risl=&pid=ImgRaw&r=0"
                      alt="Part 3"
                    />
                  </Link>
                </div>
               </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright">
          <p>
            &copy; {new Date().getFullYear()} NutriFit. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
};
