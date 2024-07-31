import React from "react";
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/home-banner-image.jpg";
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";

const handleSignUpClick = () => {
  alert("Please contact us contact@xtracolabs.com");
};
const Home = () => {
  return (
    <div id="Home" className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
          Providing a platform for scientific publishing, researcher collaboration, and innovation.
          </h1><br></br>
          <p className="primary-text">
          Empowering Scientific Research and Collaboration
          </p><br></br>
          <button className="secondary-button" onClick={handleSignUpClick}>Join Us <FiArrowRight />{" "}
          </button>
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" className="round-image"/>
        </div>
      </div>
    </div>
  );
};

export default Home;
