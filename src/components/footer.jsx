import React from "react";
import "./footer.css";
import {
  FaInstagram,
  FaLinkedin,
  FaEnvelope,
  FaFacebook,
} from "react-icons/fa";
import logo from "../assets/logo.svg";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="links-follow">
        <div className="quick-links">
          <h3>QUICK LINKS</h3>
          <div className="footer-links">
            <ul className="column1">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/gallery">Gallery</a>
              </li>
              <li>
                <a href="/project">Projects</a>
              </li>
            </ul>
            <ul className="column2">
              <li>
                <a href="/Inventory">Inventory</a>
              </li>
              <li>
                <a href="#">Room booking</a>
              </li>
              <li>
                <a href="/contact">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="follow-us">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="https://www.instagram.com/scient_nitt/?hl=en">
              <FaInstagram />
            </a>
            <a href="https://www.linkedin.com/company/scientnitt/mycompany/">
              <FaLinkedin />
            </a>
            <a href="/contact">
              <FaEnvelope />
            </a>
            <a href="https://www.facebook.com/ScientNITT/">
              <FaFacebook />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-logo">
        <div className="logo-footer">
          <img src={logo} alt="Logo" />
        </div>
      </div>
      <div className="custom-shape-divider-top-1725455521">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Footer;
