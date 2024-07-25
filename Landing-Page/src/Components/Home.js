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
          Empowering Scientific Research and Collaboration
          </h1>
          <p className="primary-text">
          Connecting Researchers, Sharing Knowledge, and Driving Innovation
          </p>
          <button className="secondary-button" onClick={handleSignUpClick}
          onMouseEnter={handleSignUpClick}>
            Join Us <FiArrowRight />{" "}
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
