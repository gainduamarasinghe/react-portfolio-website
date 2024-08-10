import React from "react";
import "./Hero.css";
import profile_img from "../../assets/Untitledprofile.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import CV from '../../assets/CV new.pdf';

const Hero = () => {
  return (
    <div id="home" className="hero">
      <img src={profile_img} alt="profile Picture" />
      <h1><span>I'm Gaindu Amarasinghe,</span> Undergraduate Software Engineer.</h1>
      <p>
        I am a First year undergraduate student following BSc Software Engineering in Informatic Institute 
        of Technology, Sri Lanka.
      </p>
      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className="anchor-link" offset={50} href="#contact">Connect with me</AnchorLink></div>
        <div className="hero-resume"><a className="anchor-link" href={CV} download='Gaindu_Amarasinghe_CV.pdf'>My resume</a></div>
      </div>
    </div>
  );
};

export default Hero;
