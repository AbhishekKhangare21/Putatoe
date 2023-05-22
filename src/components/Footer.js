import "./Footer.css";
import React from "react";
import logo from "../assets/logo.png";
import { FaInstagram } from "react-icons/fa";
import { RiFacebookFill, RiLinkedinFill } from "react-icons/ri";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="left">
          <div className="footer_about">
            <div className="footer__about__logo">
              <a href="#">
                <img src={logo} alt="image" height="90" width="90" />
              </a>
            </div>
            <div class="footer__about__brand">
              <p>PUTATOE SOLUTIONS PVT. LTD.</p>
            </div>
          </div>
          <p class="text-white">
            233 Harahawa Phatak, Near SBI Bank, Gorakhpur, Uttar Pradesh -
            273001
          </p>
        </div>
        <div className="right">
          <div class="footer__widget">
            <h6>Useful Links</h6>
            <ul>
              <li>About Us</li>
              <li>Contact Us</li>
              <li>Terms and Conditions</li>
            </ul>
          </div>
          <div class="footer__widget">
            <div class="footer__widget__social">
              <a href="https://www.facebook.com/putatoetechnologies">
                <RiFacebookFill style={{ marginTop: "10px" }} />
              </a>
              <a href="https://www.instagram.com/put.at.toe/">
                <FaInstagram style={{ marginTop: "10px" }} />
              </a>
              <a href="https://www.linkedin.com/company/putatoe/">
                <RiLinkedinFill style={{ marginTop: "10px" }} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
