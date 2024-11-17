import React from "react";
import "../../assets/style/Navbar.scss"
import { FaRegClock } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import apple from "../../assets/images/apple.png"
export const Navbar = () => {
  return (
    <>
      <section className="contact">
        <div className="container">
          <div className="left">
            <div className="phone">
              <span className="tel">
                Call us: <span><strong>+994-55-9956118</strong></span>
              </span>
            </div>

            <div className="opening">
              <FaRegClock style={{ color: "rgb(98, 175, 3)"}}/>
              <span>Opening Hours: 7:00 am - 9:00 pm (Mon - Sun)</span>
            </div>
          </div>

          <div className="right">
            <span>Follow: </span>
            <div className="icons">
              <FaFacebookF style={{ color: "rgb(98, 175, 3)"}}/>
              <FaTwitter style={{ color: "rgb(98, 175, 3)"}}/>
              <FaInstagram style={{ color: "rgb(98, 175, 3)"}}/>
              <FaLinkedinIn style={{ color: "rgb(98, 175, 3)"}}/>
            </div>
          </div>
        </div>
      </section>

      <nav className="navbar">
            <div className="container">
            <div className="logo">
                <img src={apple} alt="Nutrifit Logo" className="logo-image" />
                <div className="logo-text">
                    <h1>NutriFit</h1>
                </div>
            </div>

            <ul className="pages">
                <li><a href="/" className="active">Home</a></li>
                <li><a href="/about">About us</a></li>
                <li><a href="/products">Products</a></li>
                <li><a href="/blog">Blog</a></li>
                <li><a href="/contacts">Contacts</a></li>
                <li><a href="/pages">Pages</a></li>
                <li><a href="/multipage">Multipage</a></li>
            </ul>
            </div>
        </nav>
    </>
  );
};
