import React from "react";
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import profile_img from "../../assets/about_profile.svg";

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt="Theme_pattern" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={profile_img} alt="profile_image" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              I am a First-year undergraduate student following BSc Software
              Engineering in Informatic Institute of Technology, Sri Lanka, with
              knowledge of Software Development (Phyton, Java), Web design and
              development, and Mathematics in computing, plus communication
              skills with team managing.
            </p>
            <p>
              Developed strong analytical and interpersonal skills through
              comprehensive academic studies, involving rigorous research,
              collaborative projects, and active participation in group
              discussions and presentations.
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML,CSS & JS</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>React JS</p>
              <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <p>Java</p>
              <hr style={{ width: "70%" }} />
            </div>
            <div className="about-skill">
              <p>Python</p>
              <hr style={{ width: "40%" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>1+</h1>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>10+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>-</h1>
          <p>HAPPY CLIENTS</p>
        </div>
      </div>
    </div>
  );
};

export default About;
