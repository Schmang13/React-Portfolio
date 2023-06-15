import React from "react";
import "./about.css";
import SocialContact from "../../common/social-contact/index";
function About() {
  return (
    <div className="about">
      <div className="about-top">
        <div className="about-info">
         <br /> <span className="info-name">Matthew Dias</span>
         <br /> Software Engineer
         <h6>Full-stack software engineer with a focus on the frontend and databases. Utilizing JavaScript coupled with React and Node.js to create modularized frontend designs and efficient routing structures with declarative middleware syntax to interface with SQL database instances. I love putting time into open source projects and contributing to the greater coding community.</h6>
        </div>
        <div className="about-photo">
          <img 
            src={require("../../../assets/coding.png")}
            className="picture"
          />
        </div>
      </div>
      <SocialContact />
    </div>
  );
}

export default About;