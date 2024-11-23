import "../../assets/style/Navbar.scss";
import { FaRegClock } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import logo from "../../assets/images/logo.png";
import text from "../../assets/images/yazi.png";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { MenuOutlined } from "@ant-design/icons";
import { Dropdown } from "antd";
export const Navbar = () => {
  const items = [
    {
      key: "1",
      label: (
        <a
          target=""
          rel="noopener noreferrer"
          href="/"
          style={{ textDecoration: "none" }}
        >
          Home
        </a>
      ),
    },
    {
      key: "2",
      label: (
        <a
          target=""
          rel="noopener noreferrer"
          href="/aboutUs"
          style={{ textDecoration: "none" }}
        >
          About us
        </a>
      ),
    },
    {
      key: "3",
      label: (
        <a
          target=""
          rel="noopener noreferrer"
          href="/services"
          style={{ textDecoration: "none" }}
        >
          Services
        </a>
      ),
    },
    {
      key: "4",
      label: (
        <a
          target=""
          rel="noopener noreferrer"
          href="/testimonials"
          style={{ textDecoration: "none" }}
        >
          Testimonials
        </a>
      ),
    },
    // {
    //   key: "5",
    //   label: (
    //     <a
    //       target=""
    //       rel="noopener noreferrer"
    //       href="/contact"
    //       style={{ textDecoration: "none" }}
    //     >
    //       Contact
    //     </a>
    //   ),
    // },
  ];

  return (
    <>
      <section className="contact">
        <div className="container">
          <div className="left">
            <div className="phone">
              <span className="tel">
                Call us:{" "}
                <span>
                <Link
      to="#"
      onClick={() => {
        window.location.href = "tel:+994559956118";
      }}
    ><strong>+994-55-9956118</strong></Link>
                </span>
              </span>
            </div>

            <div className="opening">
              <FaRegClock style={{ color: "rgb(98, 175, 3)" }} />
              <span>Opening Hours: 7:00 am - 9:00 pm (Mon - Sun)</span>
            </div>
          </div>

          <div className="right">
            <span>Follow: </span>
            <div className="icons">
              
              <Link to="https://www.facebook.com/"><FaFacebookF style={{ color: "rgb(98, 175, 3)" }} /></Link>
              <Link to="https://x.com/"><FaTwitter style={{ color: "rgb(98, 175, 3)" }} /></Link>
              <Link to="https://www.instagram.com/"><FaInstagram style={{ color: "rgb(98, 175, 3)" }} /></Link>
              <Link to="https://www.linkedin.com/"><FaLinkedinIn style={{ color: "rgb(98, 175, 3)" }} /></Link>
            </div>
          </div>
          
        </div>
      </section>

      <nav className="navbar">
        <div className="container">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "logo active" : "logo")}
          >
            <div className="logo">
              <img src={logo} alt="Nutrifit Logo" className="logo-image" />
              <img src={text} alt="" className="logo-text" />
              {/* <div className="logo-text">
                <h1>NutriFit</h1>
              </div> */}
            </div>
          </NavLink>

          <ul className="pages">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "logo active" : "logo"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/aboutUs"
                className={({ isActive }) =>
                  isActive ? "logo active" : "logo"
                }
              >
                About us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/services"
                className={({ isActive }) =>
                  isActive ? "logo active" : "logo"
                }
              >
                Services
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/testimonials"
                className={({ isActive }) =>
                  isActive ? "logo active" : "logo"
                }
              >
                Testimonials
              </NavLink>
            </li>
            {/* <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? "logo active" : "logo"
                }
              >
                Contact
              </NavLink>
            </li> */}
          </ul>
          <Dropdown
            className="dropdownMenu"
            menu={{
              items,
            }}
            placement="bottomLeft"
            arrow
          >
            <button>
              <MenuOutlined />
            </button>
          </Dropdown>
        </div>
      </nav>
    </>
  );
};
