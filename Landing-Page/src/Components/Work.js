import React from "react";
import connect from "../Assets/connect.png";
import research from "../Assets/choose-image.png";
import publish from "../Assets/delivery-image.png";

const Work = () => {
  const workInfoData = [
    {
      image: connect,
      title: "Find Your Team",
      text: "You can connect with individuals who share your interests and collaborate to form a dedicated team.",
    },
    {
      image: research,
      title: "Do Your Research",
      text: "You can conduct your research and complete it as a team effortlessly and efficiently using our modern tools.",
    },
    {
      image: publish,
      title: "Share Your Work",
      text: "You can share your work with complete data security.",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <h1 className="primary-heading">How We Work?</h1>
        <p className="primary-text">
        XtraCoLabs consolidates all the tools into a single platform, providing significant ease and flexibility during the writing process. Researcher doesn’t have to visit different websites to do their drawings or findings which in result seamless user-experience.
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
