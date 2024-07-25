import React from "react";
import AboutBackground from "../Assets/about-background.png";
import loginImage from "../Assets/loginImage.jpeg";
import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
  return (
    <div id="About" className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt=""  />
      </div>
      <div className="about-section-image-container">
        <img src={loginImage} alt="" className="round-image"/>
      </div>
      <div className="about-section-text-container">
        
        <h1 className="primary-heading">
          What We Are?
        </h1>
        <p className="primary-text">
        “XtraCoLabs” is a platform that brings all the steps of scientific publishing under one umbrella. Constructing a scientific paper generally comprises several steps like literature review, diagram design, data collection, result preparation, bibliography etc.
         </p>
        <p className="primary-text">
        It also involves collaborating with peers and designing the text in appropriate format. 
        </p>
        <div className="about-buttons-container">
          <button className="secondary-button">Learn More</button>
          <button className="watch-video-button">
            <BsFillPlayCircleFill /> Watch Video
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
