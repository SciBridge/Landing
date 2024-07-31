import React from "react";
import Brand from "../Assets/Brand.png";
import { BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-section-one">
        <div className="logo-text-container ">
          <img src={Brand} alt="logo" class="logo"/>
          <span class="logo-text">XtraCoLabs</span> 
        </div>
        <div className="footer-icons">
          <BsTwitter />
          <SiLinkedin />
          <FaFacebookF />
        </div>
      </div>
      <div className="footer-section-two">
        <div className="footer-section-columns">
          <span>Help</span>
          <span>Feedback</span>
        </div>
        <div className="footer-section-columns">
          <span>Terms & Conditions</span>
          <span>Privacy Policy</span>
          <span>contact@xtracolabs.com</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
